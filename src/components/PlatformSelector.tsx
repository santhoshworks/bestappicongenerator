'use client';

import { useMemo } from 'react';
import { Check, CheckCheck, XCircle } from 'lucide-react';
import { PLATFORM_PRESETS, getAllPlatforms, getTotalIconCount, type Platform } from '@/lib/platform-presets';

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onSelectionChange: (platforms: string[]) => void;
}

interface PlatformCardProps {
  platform: Platform;
  isSelected: boolean;
  onToggle: () => void;
}

function PlatformCard({ platform, isSelected, onToggle }: PlatformCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        group relative flex flex-col items-start rounded-xl border-2 p-4 text-left transition-all duration-200
        ${
          isSelected
            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200 dark:border-blue-400 dark:bg-blue-900/20 dark:ring-blue-800'
            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700'
        }
      `}
      aria-pressed={isSelected}
      aria-label={`${platform.name}: ${platform.description}. ${platform.sizes.length} icon sizes. ${isSelected ? 'Selected' : 'Not selected'}`}
    >
      {/* Selection indicator */}
      <div
        className={`
          absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full transition-all
          ${
            isSelected
              ? 'bg-blue-500 text-white dark:bg-blue-400'
              : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-500 dark:group-hover:bg-gray-600'
          }
        `}
      >
        <Check className={`h-4 w-4 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Icon */}
      <span className="text-3xl" role="img" aria-hidden="true">
        {platform.icon}
      </span>

      {/* Name */}
      <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">
        {platform.name}
      </h3>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {platform.description}
      </p>

      {/* Size count */}
      <div className="mt-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        {platform.sizes.length} {platform.sizes.length === 1 ? 'size' : 'sizes'}
      </div>
    </button>
  );
}

export default function PlatformSelector({
  selectedPlatforms,
  onSelectionChange,
}: PlatformSelectorProps) {
  const platforms = useMemo(() => getAllPlatforms(), []);
  const totalIconCount = useMemo(
    () => getTotalIconCount(selectedPlatforms),
    [selectedPlatforms]
  );

  const handleTogglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      onSelectionChange(selectedPlatforms.filter((id) => id !== platformId));
    } else {
      onSelectionChange([...selectedPlatforms, platformId]);
    }
  };

  const handleSelectAll = () => {
    onSelectionChange(platforms.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    onSelectionChange([]);
  };

  const allSelected = selectedPlatforms.length === platforms.length;
  const noneSelected = selectedPlatforms.length === 0;

  return (
    <div className="w-full">
      {/* Header with actions */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Select Platforms
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Choose the platforms you want to generate icons for
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            disabled={allSelected}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Select all platforms"
          >
            <CheckCheck className="h-4 w-4" />
            Select All
          </button>
          <button
            onClick={handleDeselectAll}
            disabled={noneSelected}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Deselect all platforms"
          >
            <XCircle className="h-4 w-4" />
            Deselect All
          </button>
        </div>
      </div>

      {/* Platform grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            isSelected={selectedPlatforms.includes(platform.id)}
            onToggle={() => handleTogglePlatform(platform.id)}
          />
        ))}
      </div>

      {/* Selection summary */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium">{selectedPlatforms.length}</span> of{' '}
          <span className="font-medium">{platforms.length}</span> platforms selected
        </div>
        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {totalIconCount} {totalIconCount === 1 ? 'icon' : 'icons'} will be generated
        </div>
      </div>
    </div>
  );
}
