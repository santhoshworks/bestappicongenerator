import OpenAI from 'openai';

// Initialize OpenAI client lazily to avoid build-time errors
let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openaiClient;
}

export type IconStyle = 'flat' | '3d' | 'minimal' | 'gradient' | 'outlined';

interface StylePromptMap {
  [key: string]: string;
}

// Style-specific prompt additions for better icon generation
const stylePrompts: StylePromptMap = {
  flat: 'flat design, solid colors, no shadows, 2D style',
  '3d': '3D rendered, depth, subtle shadows, volumetric lighting, glossy finish',
  minimal: 'minimalist design, simple shapes, clean lines, monochromatic or limited color palette',
  gradient: 'vibrant gradients, color transitions, modern gradient style, smooth color blending',
  outlined: 'outlined style, stroke-based design, line art, vector style with clear outlines',
};

/**
 * Builds an optimized prompt for app icon generation
 * @param userDescription - User's description of the desired icon
 * @param style - The visual style for the icon
 * @returns Optimized prompt string for DALL-E
 */
export function buildIconPrompt(userDescription: string, style: IconStyle): string {
  const styleModifier = stylePrompts[style] || stylePrompts.flat;

  return `App icon design, ${userDescription}, ${styleModifier}, professional quality, centered composition, suitable for mobile app, high contrast, clean design, square format, single icon on solid or gradient background, no text, no watermarks`;
}

export interface GenerateIconOptions {
  prompt: string;
  style: IconStyle;
}

export interface GenerateIconResult {
  success: boolean;
  imageUrl?: string;
  imageBase64?: string;
  revisedPrompt?: string;
  error?: string;
}

/**
 * Generates an app icon using OpenAI's DALL-E 3
 * @param options - Generation options including prompt and style
 * @returns Generated image URL or error
 */
export async function generateIcon(options: GenerateIconOptions): Promise<GenerateIconResult> {
  const { prompt, style } = options;

  if (!prompt || prompt.trim().length === 0) {
    return {
      success: false,
      error: 'Prompt is required',
    };
  }

  if (!process.env.OPENAI_API_KEY) {
    return {
      success: false,
      error: 'OpenAI API key is not configured',
    };
  }

  try {
    const fullPrompt = buildIconPrompt(prompt, style);

    const response = await getOpenAIClient().images.generate({
      model: 'dall-e-3',
      prompt: fullPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      response_format: 'url',
    });

    const imageUrl = response.data?.[0]?.url;
    const revisedPrompt = response.data?.[0]?.revised_prompt;

    if (!imageUrl) {
      return {
        success: false,
        error: 'No image was generated',
      };
    }

    return {
      success: true,
      imageUrl,
      revisedPrompt,
    };
  } catch (error) {
    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      const statusCode = error.status;

      if (statusCode === 400) {
        return {
          success: false,
          error: 'Invalid request. The prompt may contain inappropriate content.',
        };
      }

      if (statusCode === 401) {
        return {
          success: false,
          error: 'Invalid API key. Please check your OpenAI API key configuration.',
        };
      }

      if (statusCode === 429) {
        return {
          success: false,
          error: 'Rate limit exceeded. Please try again in a moment.',
        };
      }

      if (statusCode === 500) {
        return {
          success: false,
          error: 'OpenAI service error. Please try again later.',
        };
      }

      return {
        success: false,
        error: `OpenAI API error: ${error.message}`,
      };
    }

    // Handle network or other errors
    if (error instanceof Error) {
      return {
        success: false,
        error: `Failed to generate icon: ${error.message}`,
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred while generating the icon',
    };
  }
}

/**
 * Generates an app icon and returns it as base64
 * Useful for immediate processing or download
 * @param options - Generation options including prompt and style
 * @returns Generated image as base64 or error
 */
export async function generateIconBase64(options: GenerateIconOptions): Promise<GenerateIconResult> {
  const { prompt, style } = options;

  if (!prompt || prompt.trim().length === 0) {
    return {
      success: false,
      error: 'Prompt is required',
    };
  }

  if (!process.env.OPENAI_API_KEY) {
    return {
      success: false,
      error: 'OpenAI API key is not configured',
    };
  }

  try {
    const fullPrompt = buildIconPrompt(prompt, style);

    const response = await getOpenAIClient().images.generate({
      model: 'dall-e-3',
      prompt: fullPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      response_format: 'b64_json',
    });

    const imageBase64 = response.data?.[0]?.b64_json;
    const revisedPrompt = response.data?.[0]?.revised_prompt;

    if (!imageBase64) {
      return {
        success: false,
        error: 'No image was generated',
      };
    }

    return {
      success: true,
      imageBase64,
      revisedPrompt,
    };
  } catch (error) {
    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      const statusCode = error.status;

      if (statusCode === 400) {
        return {
          success: false,
          error: 'Invalid request. The prompt may contain inappropriate content.',
        };
      }

      if (statusCode === 401) {
        return {
          success: false,
          error: 'Invalid API key. Please check your OpenAI API key configuration.',
        };
      }

      if (statusCode === 429) {
        return {
          success: false,
          error: 'Rate limit exceeded. Please try again in a moment.',
        };
      }

      if (statusCode === 500) {
        return {
          success: false,
          error: 'OpenAI service error. Please try again later.',
        };
      }

      return {
        success: false,
        error: `OpenAI API error: ${error.message}`,
      };
    }

    // Handle network or other errors
    if (error instanceof Error) {
      return {
        success: false,
        error: `Failed to generate icon: ${error.message}`,
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred while generating the icon',
    };
  }
}

export default getOpenAIClient;
