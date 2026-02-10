import sharp from 'sharp';
import JSZip from 'jszip';
import { IconSize, PLATFORM_PRESETS } from '@/lib/platform-presets';

// Supported image formats
export const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

/**
 * Validates the uploaded file
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  if (!SUPPORTED_FORMATS.includes(file.type)) {
    return {
      valid: false,
      error: `Unsupported file type: ${file.type}. Supported formats: PNG, JPG, JPEG, WEBP, SVG`
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds 10MB limit. Your file: ${(file.size / 1024 / 1024).toFixed(2)}MB`
    };
  }

  return { valid: true };
}

/**
 * Resizes an image to specific dimensions using Sharp
 * Uses 'cover' fit for banners/rectangular images, 'contain' for square icons
 */
export async function resizeImage(
  imageBuffer: Buffer,
  width: number,
  height: number,
  type?: 'icon' | 'banner' | 'splash'
): Promise<Buffer> {
  const isSquare = width === height;
  const fit = (type === 'banner' || !isSquare) ? 'cover' : 'contain';

  const resized = await sharp(imageBuffer)
    .resize(width, height, {
      fit,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      position: 'center',
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  return resized;
}

/**
 * Generates a favicon.ico from multiple PNG sizes
 * Creates a multi-resolution ICO file with 16x16, 32x32, and 48x48 sizes
 */
export async function generateFaviconIco(imageBuffer: Buffer): Promise<Buffer> {
  const sizes = [16, 32, 48];
  const pngBuffers: Buffer[] = [];

  // Generate PNG buffers for each size
  for (const size of sizes) {
    const resized = await sharp(imageBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    pngBuffers.push(resized);
  }

  // Create ICO file structure
  // ICO format: https://en.wikipedia.org/wiki/ICO_(file_format)
  const iconCount = sizes.length;
  const headerSize = 6;
  const entrySize = 16;
  const dataOffset = headerSize + (iconCount * entrySize);

  // Calculate total size and offsets
  let currentOffset = dataOffset;
  const offsets: number[] = [];
  const imageSizes: number[] = [];

  for (const buffer of pngBuffers) {
    offsets.push(currentOffset);
    imageSizes.push(buffer.length);
    currentOffset += buffer.length;
  }

  const totalSize = currentOffset;
  const icoBuffer = Buffer.alloc(totalSize);

  // Write ICO header
  icoBuffer.writeUInt16LE(0, 0);      // Reserved, must be 0
  icoBuffer.writeUInt16LE(1, 2);      // Image type: 1 for icon
  icoBuffer.writeUInt16LE(iconCount, 4); // Number of images

  // Write ICO directory entries
  for (let i = 0; i < iconCount; i++) {
    const entryOffset = headerSize + (i * entrySize);
    const size = sizes[i];

    icoBuffer.writeUInt8(size === 256 ? 0 : size, entryOffset);     // Width
    icoBuffer.writeUInt8(size === 256 ? 0 : size, entryOffset + 1); // Height
    icoBuffer.writeUInt8(0, entryOffset + 2);                       // Color palette
    icoBuffer.writeUInt8(0, entryOffset + 3);                       // Reserved
    icoBuffer.writeUInt16LE(1, entryOffset + 4);                    // Color planes
    icoBuffer.writeUInt16LE(32, entryOffset + 6);                   // Bits per pixel
    icoBuffer.writeUInt32LE(imageSizes[i], entryOffset + 8);        // Image size
    icoBuffer.writeUInt32LE(offsets[i], entryOffset + 12);          // Image offset
  }

  // Write image data
  for (let i = 0; i < pngBuffers.length; i++) {
    pngBuffers[i].copy(icoBuffer, offsets[i]);
  }

  return icoBuffer;
}

/**
 * Processes a single icon size and returns the buffer with metadata
 */
export async function processIconSize(
  imageBuffer: Buffer,
  size: IconSize
): Promise<{ buffer: Buffer; filename: string; folder: string }> {
  const buffer = await resizeImage(imageBuffer, size.width, size.height, size.type);
  const filename = `${size.name}.png`;
  const folder = size.folder || '';

  return { buffer, filename, folder };
}

/**
 * Creates a ZIP file with all resized images organized by platform folders
 */
export async function createIconsZip(
  imageBuffer: Buffer,
  platformIds: string[]
): Promise<Buffer> {
  const zip = new JSZip();
  const processedSizes = new Set<string>(); // Track unique size+folder combos to avoid duplicates

  for (const platformId of platformIds) {
    const platform = PLATFORM_PRESETS[platformId];
    if (!platform) {
      console.warn(`Unknown platform: ${platformId}`);
      continue;
    }

    // Process each icon size for this platform
    for (const size of platform.sizes) {
      const sizeKey = `${size.folder}/${size.name}-${size.width}x${size.height}`;

      // Skip if we've already processed this exact size for this folder
      if (processedSizes.has(sizeKey)) {
        continue;
      }
      processedSizes.add(sizeKey);

      try {
        const { buffer, filename, folder } = await processIconSize(imageBuffer, size);
        const filePath = folder ? `${folder}/${filename}` : filename;
        zip.file(filePath, buffer);
      } catch (error) {
        console.error(`Error processing ${size.name}:`, error);
        throw new Error(`Failed to process icon size: ${size.name}`);
      }
    }

    // Generate favicon.ico if needed (for web platform)
    if (platform.generateIco) {
      try {
        const icoBuffer = await generateFaviconIco(imageBuffer);
        const folder = platform.sizes[0]?.folder || '';
        const filePath = folder ? `${folder}/favicon.ico` : 'favicon.ico';
        zip.file(filePath, icoBuffer);
      } catch (error) {
        console.error('Error generating favicon.ico:', error);
        // Don't throw, just skip the ico generation
      }
    }

    // Generate manifest.json if needed (for PWA platform)
    if (platform.generateManifest) {
      const manifestIcons = platform.sizes.map(size => ({
        src: `/${size.name}.png`,
        sizes: `${size.width}x${size.height}`,
        type: 'image/png',
        purpose: 'any maskable',
      }));

      const manifest = {
        name: 'Your App Name',
        short_name: 'App',
        icons: manifestIcons,
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      };

      const folder = platform.sizes[0]?.folder || '';
      const filePath = folder ? `${folder}/manifest.json` : 'manifest.json';
      zip.file(filePath, JSON.stringify(manifest, null, 2));
    }
  }

  // Generate the ZIP file
  const zipBuffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  return zipBuffer;
}

/**
 * Gets the total number of icons that will be generated for the selected platforms
 */
export function getIconCount(platformIds: string[]): number {
  let count = 0;
  const processedSizes = new Set<string>();

  for (const platformId of platformIds) {
    const platform = PLATFORM_PRESETS[platformId];
    if (!platform) continue;

    for (const size of platform.sizes) {
      const sizeKey = `${size.folder}/${size.name}-${size.width}x${size.height}`;
      if (!processedSizes.has(sizeKey)) {
        processedSizes.add(sizeKey);
        count++;
      }
    }

    // Add 1 for favicon.ico if applicable
    if (platform.generateIco) {
      count++;
    }

    // Add 1 for manifest.json if applicable
    if (platform.generateManifest) {
      count++;
    }
  }

  return count;
}

/**
 * Gets image metadata from a buffer
 */
export async function getImageMetadata(imageBuffer: Buffer): Promise<{
  width: number;
  height: number;
  format: string;
}> {
  const metadata = await sharp(imageBuffer).metadata();
  return {
    width: metadata.width || 0,
    height: metadata.height || 0,
    format: metadata.format || 'unknown',
  };
}
