import { NextRequest, NextResponse } from 'next/server';
import { generateIcon, type IconStyle } from '@/lib/openai';

// TODO: Implement rate limiting
// Consider using libraries like:
// - @upstash/ratelimit with Redis for production
// - Simple in-memory rate limiting for development
// Rate limit suggestions:
// - 5 requests per minute per IP for free tier
// - 20 requests per minute per IP for authenticated users
// - Store request counts with sliding window algorithm

const VALID_STYLES: IconStyle[] = ['flat', '3d', 'minimal', 'gradient', 'outlined'];

interface GenerateIconRequest {
  prompt: string;
  style: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: GenerateIconRequest = await request.json();
    const { prompt, style } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    // Sanitize and validate prompt length
    const sanitizedPrompt = prompt.trim();
    if (sanitizedPrompt.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Prompt cannot be empty' },
        { status: 400 }
      );
    }

    if (sanitizedPrompt.length > 500) {
      return NextResponse.json(
        { success: false, error: 'Prompt must be 500 characters or less' },
        { status: 400 }
      );
    }

    // Validate style
    const iconStyle: IconStyle = VALID_STYLES.includes(style as IconStyle)
      ? (style as IconStyle)
      : 'flat';

    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    // Generate the icon
    const result = await generateIcon({
      prompt: sanitizedPrompt,
      style: iconStyle,
    });

    if (!result.success) {
      // Determine appropriate status code based on error
      let statusCode = 500;
      if (result.error?.includes('Invalid request') || result.error?.includes('inappropriate')) {
        statusCode = 400;
      } else if (result.error?.includes('Invalid API key')) {
        statusCode = 401;
      } else if (result.error?.includes('Rate limit')) {
        statusCode = 429;
      }

      return NextResponse.json(
        { success: false, error: result.error },
        { status: statusCode }
      );
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      revisedPrompt: result.revisedPrompt,
      metadata: {
        style: iconStyle,
        originalPrompt: sanitizedPrompt,
        size: '1024x1024',
        generatedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Log error for debugging (in production, use proper logging)
    console.error('Error in generate-ai-icon API:', error);

    // Return generic error for unexpected issues
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed. Use POST to generate icons.' },
    { status: 405 }
  );
}
