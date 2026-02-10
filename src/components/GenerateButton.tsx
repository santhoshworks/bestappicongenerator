'use client';

import { useState, useCallback } from 'react';
import { Download, Loader2, Check, AlertCircle } from 'lucide-react';
import type { ImageInfo } from './ImageUploader';

interface GenerateButtonProps {
  image: ImageInfo | null;
  selectedPlatforms: string[];
}

type GenerationStatus = 'idle' | 'generating' | 'success' | 'error';

export default function GenerateButton({
  image,
  selectedPlatforms,
}: GenerateButtonProps) {
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const isDisabled = !image || selectedPlatforms.length === 0 || status === 'generating';

  const handleGenerate = useCallback(async () => {
    if (!image || selectedPlatforms.length === 0) return;

    setStatus('generating');
    setProgress(0);
    setError(null);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', image.file);
      formData.append('platforms', JSON.stringify(selectedPlatforms));

      // Simulate progress for UX (actual progress depends on server)
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 300);

      // Make API request
      const response = await fetch('/api/generate-icons', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate icons');
      }

      setProgress(100);

      // Get the blob and download
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = `app-icons-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup
      URL.revokeObjectURL(url);

      setStatus('success');

      // Reset status after a delay
      setTimeout(() => {
        setStatus('idle');
        setProgress(0);
      }, 3000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProgress(0);

      // Reset status after a delay
      setTimeout(() => {
        setStatus('idle');
        setError(null);
      }, 5000);
    }
  }, [image, selectedPlatforms]);

  const getButtonContent = () => {
    switch (status) {
      case 'generating':
        return (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Generating... {progress}%</span>
          </>
        );
      case 'success':
        return (
          <>
            <Check className="h-5 w-5" />
            <span>Download Complete!</span>
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className="h-5 w-5" />
            <span>Try Again</span>
          </>
        );
      default:
        return (
          <>
            <Download className="h-5 w-5" />
            <span>Generate & Download Icons</span>
          </>
        );
    }
  };

  const getButtonStyles = () => {
    const baseStyles =
      'relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-200 sm:w-auto sm:px-8';

    if (isDisabled && status !== 'generating') {
      return `${baseStyles} cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500`;
    }

    switch (status) {
      case 'generating':
        return `${baseStyles} bg-blue-600 text-white cursor-wait`;
      case 'success':
        return `${baseStyles} bg-green-600 text-white`;
      case 'error':
        return `${baseStyles} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${baseStyles} bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30`;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleGenerate}
          disabled={isDisabled}
          className={getButtonStyles()}
          aria-label={
            isDisabled
              ? 'Generate icons (upload an image and select platforms first)'
              : 'Generate and download icons'
          }
          aria-busy={status === 'generating'}
        >
          {getButtonContent()}
        </button>

        {/* Progress bar */}
        {status === 'generating' && (
          <div className="w-full max-w-sm">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full bg-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
            role="alert"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Helper text */}
        {!image && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Upload an image to get started
          </p>
        )}
        {image && selectedPlatforms.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Select at least one platform
          </p>
        )}
      </div>
    </div>
  );
}
