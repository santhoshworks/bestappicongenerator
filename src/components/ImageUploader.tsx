'use client';

import { useCallback, useState } from 'react';
import { useDropzone, type FileRejection } from 'react-dropzone';
import { Upload, X, Image as ImageIcon, FileWarning } from 'lucide-react';

interface ImageInfo {
  file: File;
  preview: string;
  width: number;
  height: number;
}

interface ImageUploaderProps {
  onImageChange: (image: ImageInfo | null) => void;
  image: ImageInfo | null;
}

const ACCEPTED_TYPES = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/webp': ['.webp'],
  'image/svg+xml': ['.svg'],
};

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function ImageUploader({ onImageChange, image }: ImageUploaderProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setError(null);

      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0];
        if (rejection.errors[0]?.code === 'file-too-large') {
          setError('File is too large. Maximum size is 10MB.');
        } else if (rejection.errors[0]?.code === 'file-invalid-type') {
          setError('Invalid file type. Please upload PNG, JPG, WEBP, or SVG.');
        } else {
          setError(rejection.errors[0]?.message || 'Failed to upload file.');
        }
        return;
      }

      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      const preview = URL.createObjectURL(file);

      // Get image dimensions
      const img = new Image();
      img.src = preview;

      img.onload = () => {
        onImageChange({
          file,
          preview,
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      img.onerror = () => {
        URL.revokeObjectURL(preview);
        setError('Failed to load image. Please try another file.');
      };
    },
    [onImageChange]
  );

  const handleRemove = useCallback(() => {
    if (image?.preview) {
      URL.revokeObjectURL(image.preview);
    }
    onImageChange(null);
    setError(null);
  }, [image, onImageChange]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_SIZE,
    multiple: false,
  });

  if (image) {
    return (
      <div className="w-full">
        <div className="relative rounded-xl border-2 border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <button
            onClick={handleRemove}
            className="absolute right-3 top-3 rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-red-900/30 dark:hover:text-red-400"
            aria-label="Remove image"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {/* Preview */}
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-900">
              <img
                src={image.preview}
                alt="Uploaded preview"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="font-medium text-gray-900 dark:text-white">
                {image.file.name}
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400 sm:justify-start">
                <span className="inline-flex items-center gap-1">
                  <ImageIcon className="h-4 w-4" />
                  {image.width} x {image.height}px
                </span>
                <span>{formatFileSize(image.file.size)}</span>
                <span className="uppercase">{image.file.type.split('/')[1]}</span>
              </div>
              {image.width < 1024 && (
                <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                  <FileWarning className="mr-1 inline h-4 w-4" />
                  For best results, use an image at least 1024x1024px
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200
          ${
            isDragReject
              ? 'border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
              : isDragActive
              ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20'
              : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700'
          }
        `}
        role="button"
        aria-label="Upload image dropzone"
      >
        <input {...getInputProps()} aria-label="Upload image input" />

        <div className="flex flex-col items-center gap-4">
          <div
            className={`
              rounded-full p-4 transition-colors
              ${
                isDragReject
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  : isDragActive
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
              }
            `}
          >
            <Upload className="h-8 w-8" />
          </div>

          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
              {isDragReject
                ? 'Invalid file type'
                : isDragActive
                ? 'Drop your image here'
                : 'Drag & drop your image here'}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              or click to browse
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <span className="rounded-full bg-gray-200 px-2 py-1 dark:bg-gray-700">PNG</span>
            <span className="rounded-full bg-gray-200 px-2 py-1 dark:bg-gray-700">JPG</span>
            <span className="rounded-full bg-gray-200 px-2 py-1 dark:bg-gray-700">WEBP</span>
            <span className="rounded-full bg-gray-200 px-2 py-1 dark:bg-gray-700">SVG</span>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            Max file size: 10MB | Recommended: 1024x1024px or larger
          </p>
        </div>
      </div>

      {error && (
        <div
          className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
          role="alert"
        >
          <FileWarning className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
}

export type { ImageInfo };
