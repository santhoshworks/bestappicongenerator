import { NextRequest, NextResponse } from 'next/server';
import {
  validateFile,
  createIconsZip,
  getIconCount,
  getImageMetadata,
  SUPPORTED_FORMATS,
  MAX_FILE_SIZE,
} from '@/lib/image-processor';
import { PLATFORM_PRESETS } from '@/lib/platform-presets';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Disable body parser to handle multipart form data
export const maxDuration = 60; // 60 second timeout for processing

/**
 * POST /api/generate-icons
 *
 * Accepts multipart form data with:
 * - file: Image file (PNG, JPG, JPEG, WEBP, SVG)
 * - platforms: JSON array of platform IDs to generate icons for
 *
 * Returns a ZIP file containing all generated icons organized by platform folders
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const platformsJson = formData.get('platforms') as string | null;

    // Validate file presence
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided. Please upload an image file.' },
        { status: 400 }
      );
    }

    // Validate file type and size
    const validation = validateFile(file);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Parse and validate platforms
    let platforms: string[];
    try {
      platforms = platformsJson ? JSON.parse(platformsJson) : [];
    } catch {
      return NextResponse.json(
        { error: 'Invalid platforms format. Expected a JSON array of platform IDs.' },
        { status: 400 }
      );
    }

    if (!Array.isArray(platforms) || platforms.length === 0) {
      return NextResponse.json(
        { error: 'No platforms selected. Please select at least one platform.' },
        { status: 400 }
      );
    }

    // Validate that all platform IDs are valid
    const invalidPlatforms = platforms.filter(id => !PLATFORM_PRESETS[id]);
    if (invalidPlatforms.length > 0) {
      return NextResponse.json(
        {
          error: `Invalid platform IDs: ${invalidPlatforms.join(', ')}. Valid platforms: ${Object.keys(PLATFORM_PRESETS).join(', ')}`
        },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // Get image metadata for validation
    let metadata;
    try {
      metadata = await getImageMetadata(imageBuffer);
    } catch {
      return NextResponse.json(
        { error: 'Unable to read image file. The file may be corrupted or in an unsupported format.' },
        { status: 400 }
      );
    }

    // Warn if image is too small (but don't block)
    const minRecommendedSize = 1024;
    const warningMessage = (metadata.width < minRecommendedSize || metadata.height < minRecommendedSize)
      ? `Note: Your image is ${metadata.width}x${metadata.height}. For best quality, we recommend at least ${minRecommendedSize}x${minRecommendedSize} pixels.`
      : null;

    // Generate icons and create ZIP
    const iconCount = getIconCount(platforms);
    console.log(`Generating ${iconCount} icons for platforms: ${platforms.join(', ')}`);

    let zipBuffer: Buffer;
    try {
      zipBuffer = await createIconsZip(imageBuffer, platforms);
    } catch (error) {
      console.error('Error creating ZIP:', error);
      return NextResponse.json(
        { error: 'Failed to generate icons. Please try again with a different image.' },
        { status: 500 }
      );
    }

    // Create filename based on platforms
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const platformNames = platforms.length <= 3
      ? platforms.join('-')
      : `${platforms.length}-platforms`;
    const filename = `app-icons-${platformNames}-${timestamp}.zip`;

    // Return the ZIP file as a downloadable response
    const response = new NextResponse(new Uint8Array(zipBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': zipBuffer.length.toString(),
        'X-Icon-Count': iconCount.toString(),
        'X-Platforms': platforms.join(','),
        ...(warningMessage && { 'X-Warning': warningMessage }),
      },
    });

    return response;

  } catch (error) {
    console.error('Unexpected error in generate-icons API:', error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('Input buffer')) {
        return NextResponse.json(
          { error: 'Invalid image file. Please upload a valid PNG, JPG, JPEG, WEBP, or SVG file.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/generate-icons
 *
 * Returns information about the API and supported platforms
 */
export async function GET(): Promise<NextResponse> {
  const platforms = Object.entries(PLATFORM_PRESETS).map(([id, platform]) => ({
    id,
    name: platform.name,
    description: platform.description,
    iconCount: platform.sizes.length,
    generateIco: platform.generateIco || false,
    generateManifest: platform.generateManifest || false,
  }));

  return NextResponse.json({
    name: 'Best App Icon Generator API',
    version: '1.0.0',
    endpoints: {
      'POST /api/generate-icons': {
        description: 'Generate app icons from an uploaded image',
        contentType: 'multipart/form-data',
        parameters: {
          file: 'Image file (PNG, JPG, JPEG, WEBP, SVG) - max 10MB',
          platforms: 'JSON array of platform IDs',
        },
        response: 'ZIP file containing all generated icons',
      },
    },
    supportedFormats: SUPPORTED_FORMATS,
    maxFileSize: `${MAX_FILE_SIZE / 1024 / 1024}MB`,
    platforms,
  });
}

/**
 * OPTIONS handler for CORS preflight requests
 */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
