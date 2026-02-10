'use client';

import { useState, useCallback } from 'react';
import { Wand2, Loader2, RefreshCw, Check, AlertCircle, Sparkles } from 'lucide-react';

type IconStyle = 'flat' | '3d' | 'minimal' | 'gradient' | 'outlined';

interface StyleOption {
  value: IconStyle;
  label: string;
  description: string;
}

const STYLE_OPTIONS: StyleOption[] = [
  { value: 'flat', label: 'Flat', description: 'Clean, modern flat design' },
  { value: '3d', label: '3D', description: 'Depth and dimension with shadows' },
  { value: 'minimal', label: 'Minimal', description: 'Simple, clean, essential' },
  { value: 'gradient', label: 'Gradient', description: 'Vibrant color transitions' },
  { value: 'outlined', label: 'Outlined', description: 'Line art and strokes' },
];

interface GeneratedIcon {
  imageUrl: string;
  revisedPrompt?: string;
  generatedAt: string;
}

interface AIIconGeneratorProps {
  onUseIcon: (imageUrl: string) => void;
}

export default function AIIconGenerator({ onUseIcon }: AIIconGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<IconStyle>('flat');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIcon, setGeneratedIcon] = useState<GeneratedIcon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please describe the icon you want to generate');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-ai-icon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          style,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate icon');
      }

      setGeneratedIcon({
        imageUrl: data.imageUrl,
        revisedPrompt: data.revisedPrompt,
        generatedAt: data.metadata?.generatedAt || new Date().toISOString(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the icon');
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, style]);

  const handleRegenerate = useCallback(() => {
    setGeneratedIcon(null);
    handleGenerate();
  }, [handleGenerate]);

  const handleUseIcon = useCallback(() => {
    if (generatedIcon?.imageUrl) {
      onUseIcon(generatedIcon.imageUrl);
    }
  }, [generatedIcon, onUseIcon]);

  const handleClear = useCallback(() => {
    setGeneratedIcon(null);
    setError(null);
  }, []);

  return (
    <div className="w-full">
      {/* Header with AI indicator */}
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">AI Icon Generator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Powered by DALL-E 3 - Describe your icon and let AI create it
          </p>
        </div>
      </div>

      {!generatedIcon ? (
        /* Input Form */
        <div className="space-y-4">
          {/* Prompt Input */}
          <div>
            <label
              htmlFor="icon-prompt"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Describe your icon
            </label>
            <textarea
              id="icon-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A friendly robot face, a mountain with a sunrise, a minimalist camera lens..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-400"
              rows={3}
              maxLength={500}
              disabled={isGenerating}
            />
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              {prompt.length}/500 characters
            </p>
          </div>

          {/* Style Selector */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Icon Style
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {STYLE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setStyle(option.value)}
                  disabled={isGenerating}
                  className={`
                    rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all
                    ${
                      style === option.value
                        ? 'border-purple-500 bg-purple-50 text-purple-700 dark:border-purple-400 dark:bg-purple-900/30 dark:text-purple-300'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-700'
                    }
                    disabled:cursor-not-allowed disabled:opacity-50
                  `}
                  title={option.description}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Generate Button */}
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5" />
                Generate Icon
              </>
            )}
          </button>

          {/* Info about AI generation */}
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            Generation takes 10-20 seconds. Icons are created at 1024x1024px.
          </p>
        </div>
      ) : (
        /* Generated Icon Display */
        <div className="space-y-4">
          {/* AI Generated Badge */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              <Sparkles className="h-3 w-3" />
              AI Generated
            </span>
          </div>

          {/* Generated Image */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <img
                src={generatedIcon.imageUrl}
                alt="AI Generated Icon"
                className="h-64 w-64 object-contain"
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">1024 x 1024px PNG</p>
            {generatedIcon.revisedPrompt && (
              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                  View AI interpretation
                </summary>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {generatedIcon.revisedPrompt}
                </p>
              </details>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleUseIcon}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <Check className="h-5 w-5" />
              Use This Icon
            </button>
            <button
              type="button"
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Regenerating...
                </>
              ) : (
                <>
                  <RefreshCw className="h-5 w-5" />
                  Regenerate
                </>
              )}
            </button>
          </div>

          {/* Start Over Link */}
          <button
            type="button"
            onClick={handleClear}
            className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Try a different prompt
          </button>
        </div>
      )}
    </div>
  );
}
