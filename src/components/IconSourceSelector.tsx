'use client';

import { useState, useCallback } from 'react';
import { Upload, Sparkles } from 'lucide-react';
import ImageUploader, { type ImageInfo } from './ImageUploader';
import AIIconGenerator from './AIIconGenerator';

type SourceMode = 'upload' | 'ai';

interface IconSourceSelectorProps {
  onImageChange: (image: ImageInfo | null) => void;
  image: ImageInfo | null;
}

export default function IconSourceSelector({ onImageChange, image }: IconSourceSelectorProps) {
  const [mode, setMode] = useState<SourceMode>('upload');
  const [isLoadingAIIcon, setIsLoadingAIIcon] = useState(false);

  // Handle when AI generates an icon and user wants to use it
  const handleUseAIIcon = useCallback(async (imageUrl: string) => {
    setIsLoadingAIIcon(true);

    try {
      // Fetch the image from the URL
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create a File object from the blob
      const file = new File([blob], `ai-generated-icon-${Date.now()}.png`, {
        type: 'image/png',
      });

      // Create object URL for preview
      const preview = URL.createObjectURL(blob);

      // Get image dimensions
      const img = new Image();
      img.src = preview;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Send to parent component
      onImageChange({
        file,
        preview,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });

      // Switch back to upload mode to show the selected image
      setMode('upload');
    } catch (error) {
      console.error('Failed to process AI-generated icon:', error);
      // The AI generator component will handle showing any errors
    } finally {
      setIsLoadingAIIcon(false);
    }
  }, [onImageChange]);

  return (
    <div className="w-full">
      {/* Tab Selector */}
      <div className="mb-6">
        <div className="flex rounded-lg border border-gray-200 bg-gray-100 p-1 dark:border-gray-700 dark:bg-gray-800">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`
              flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all
              ${
                mode === 'upload'
                  ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }
            `}
          >
            <Upload className="h-4 w-4" />
            Upload Image
          </button>
          <button
            type="button"
            onClick={() => setMode('ai')}
            className={`
              flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all
              ${
                mode === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }
            `}
          >
            <Sparkles className="h-4 w-4" />
            Generate with AI
          </button>
        </div>
      </div>

      {/* Content based on selected mode */}
      <div className="min-h-[300px]">
        {mode === 'upload' ? (
          <ImageUploader onImageChange={onImageChange} image={image} />
        ) : (
          <div className="rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-900/20 dark:to-pink-900/20">
            <AIIconGenerator onUseIcon={handleUseAIIcon} />
            {isLoadingAIIcon && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-600 border-t-transparent dark:border-purple-400 dark:border-t-transparent" />
                Processing AI-generated icon...
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mode indicator when image is selected */}
      {image && mode === 'upload' && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setMode('ai')}
            className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            <Sparkles className="h-4 w-4" />
            Or generate a new icon with AI
          </button>
        </div>
      )}
    </div>
  );
}

export type { ImageInfo };
