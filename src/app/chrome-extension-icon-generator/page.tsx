'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader, { type ImageInfo } from '@/components/ImageUploader';
import PlatformSelector from '@/components/PlatformSelector';
import GenerateButton from '@/components/GenerateButton';
import Link from 'next/link';
import {
  Chrome,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info,
  Code,
  Package,
  Upload
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What icon sizes do Chrome extensions need?",
    answer: "Chrome extensions require four icon sizes: 16x16 (favicon, toolbar when space is limited), 32x32 (Windows computers often require this), 48x48 (extension management page), and 128x128 (Chrome Web Store and installation prompts). All icons should be in PNG format."
  },
  {
    question: "Can I use the same icons for Firefox and Edge extensions?",
    answer: "Yes! Firefox and Microsoft Edge (Chromium-based) use the same icon sizes as Chrome. The 16x16, 32x32, 48x48, and 128x128 sizes work across all major browsers. Safari extensions may require additional sizes."
  },
  {
    question: "Should extension icons have transparency?",
    answer: "Yes, extension icons should use PNG format with transparency. This allows your icon to display correctly against different toolbar backgrounds (light and dark themes). Make sure your icon has sufficient contrast against both light and dark backgrounds."
  },
  {
    question: "What's the recommended source image size for extension icons?",
    answer: "We recommend starting with at least a 512x512 pixel image for best results. This gives you plenty of detail to scale down to smaller sizes while maintaining clarity. A 1024x1024 source image is even better."
  },
  {
    question: "How do I add icons to my manifest.json?",
    answer: "In your manifest.json file, add an 'icons' object with each size as a key. For example: \"icons\": { \"16\": \"icons/icon16.png\", \"32\": \"icons/icon32.png\", \"48\": \"icons/icon48.png\", \"128\": \"icons/icon128.png\" }. Place your icon files in the specified paths."
  },
  {
    question: "Do I need different icons for the toolbar action?",
    answer: "The toolbar action icon (action.default_icon in manifest v3) can reuse the same icons or use different ones. For toolbar icons, the 16x16 and 32x32 sizes are most important. Some developers create specific toolbar icons optimized for small sizes."
  },
  {
    question: "What happens if I only provide some icon sizes?",
    answer: "Chrome will scale your available icons to fit other size requirements, but this can result in blurry or distorted icons. For the best appearance, always provide all four required sizes (16, 32, 48, 128)."
  },
  {
    question: "Are there design guidelines for extension icons?",
    answer: "Yes, Chrome recommends simple, recognizable icons that work at small sizes. Avoid fine details, text, and complex gradients. Use bold shapes and colors that stand out against various backgrounds. The icon should clearly represent your extension's function."
  },
];

const iconRequirements = [
  {
    size: '128 x 128',
    usage: 'Chrome Web Store listing, installation prompts',
    description: 'The largest icon, displayed prominently in the store and during installation. This is your primary marketing asset.',
    required: true,
  },
  {
    size: '48 x 48',
    usage: 'Extensions management page (chrome://extensions)',
    description: 'Shown in the browser\'s extension management interface where users enable/disable extensions.',
    required: true,
  },
  {
    size: '32 x 32',
    usage: 'Windows taskbar, high DPI toolbar',
    description: 'Used on Windows computers and high-density displays for the toolbar icon.',
    required: true,
  },
  {
    size: '16 x 16',
    usage: 'Browser toolbar, favicon',
    description: 'The smallest size, used in the browser toolbar and as a fallback favicon. Must be recognizable even at this tiny size.',
    required: true,
  },
];

export default function ChromeExtensionIconGeneratorPage() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['chrome']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chrome Extension Icon Generator',
    description: 'Free tool to generate all required icon sizes for Chrome, Firefox, and Edge browser extensions.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Chrome Extension Icons',
      'Firefox Extension Icons',
      'Edge Extension Icons',
      'All Required Sizes (16, 32, 48, 128)',
      'PNG with Transparency',
      'Instant Download',
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <Chrome className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Free Chrome Extension Icon Generator
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Generate all required icon sizes for your Chrome, Firefox, or Edge browser extension in seconds.
              Upload your icon design and download a complete set of properly sized PNGs ready to add to your
              manifest.json file.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>All 4 required sizes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>PNG with transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Works for all browsers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Generator Tool */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="space-y-8">
                {/* Step 1: Upload */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                      1
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Upload Your Extension Icon
                    </h2>
                  </div>
                  <ImageUploader image={image} onImageChange={setImage} />
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    For best results, use a square PNG image at least 512x512 pixels with a transparent background.
                  </p>
                </div>

                {/* Step 2: Platform Selection (pre-selected) */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                      2
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Platform Selected: Chrome Extension
                    </h2>
                  </div>
                  <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                    <div className="flex items-center gap-3">
                      <Chrome className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Chrome Extension</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Includes 16x16, 32x32, 48x48, and 128x128 pixel icons
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    Need icons for other platforms too?{' '}
                    <Link href="/" className="text-orange-600 hover:underline dark:text-orange-400">
                      Use our full icon generator
                    </Link>{' '}
                    to select multiple platforms.
                  </p>
                </div>

                {/* Step 3: Generate */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                      3
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Generate & Download
                    </h2>
                  </div>
                  <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Requirements */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chrome Extension Icon Requirements
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Chrome extensions require four specific icon sizes. Each size serves a different purpose
              in the browser interface and Chrome Web Store.
            </p>

            <div className="mt-8 space-y-4">
              {iconRequirements.map((req, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-orange-100 px-3 py-2 text-sm font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                      {req.size}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{req.usage}</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{req.description}</p>
                    </div>
                    {req.required && (
                      <span className="flex-shrink-0 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Required
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifest Example */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              How to Add Icons to manifest.json
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              After downloading your icons, add them to your extension&apos;s manifest.json file. Here&apos;s
              an example configuration for Manifest V3:
            </p>

            <div className="mt-6 rounded-xl bg-gray-900 p-6 dark:bg-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-400">manifest.json</span>
              </div>
              <pre className="overflow-x-auto text-sm text-gray-300">
                <code>{`{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0",
  "icons": {
    "16": "icons/icon-16.png",
    "32": "icons/icon-32.png",
    "48": "icons/icon-48.png",
    "128": "icons/icon-128.png"
  },
  "action": {
    "default_icon": {
      "16": "icons/icon-16.png",
      "32": "icons/icon-32.png"
    }
  }
}`}</code>
              </pre>
            </div>

            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Tip:</strong> The downloaded ZIP file contains icons named by their pixel size
                  (e.g., icon-16.png, icon-32.png). Simply extract them to your extension&apos;s icons folder
                  and update the paths in your manifest.json.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tips */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Extension Icon Design Tips
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Keep It Simple</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Your icon will often appear at just 16x16 pixels in the toolbar. Use bold, simple
                  shapes that remain recognizable at small sizes. Avoid fine details, small text,
                  and complex gradients.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Use Transparency</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Extension icons appear against various backgrounds (light and dark themes).
                  Use PNG format with transparency and ensure your icon has good contrast
                  against both light and dark backgrounds.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Stand Out</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Your icon competes for attention in the toolbar with many other extensions.
                  Use distinctive colors and shapes that make your extension easy to identify
                  at a glance.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Communicate Function</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Your icon should give users a hint about what your extension does. Use visual
                  metaphors that relate to your extension&apos;s functionality (e.g., a shield for
                  security, a brush for styling).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Related Tools & Resources
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/app-icon-sizes"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">App Icon Sizes Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete reference for all platforms</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
              </Link>
              <Link
                href="/how-to-create-app-icon"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Icon Design Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tips for creating great icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
              </Link>
              <Link
                href="/"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Icon Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generate icons for all platforms</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
              </Link>
              <Link
                href="/windows-app-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Windows Icon Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create Windows desktop icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Need Icons for Other Platforms?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Our full icon generator supports iOS, Android, macOS, Windows, PWA, and more.
              Generate all your app icons in one place.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all hover:bg-gray-100"
              >
                <Sparkles className="h-5 w-5" />
                Try Full Icon Generator
              </Link>
            </div>
            <p className="mt-6 text-sm text-orange-200">
              Boost your productivity with{' '}
              <a
                href="https://thoughtmap.space"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThoughtMap
              </a>{' '}
              - AI-powered mind mapping for developers.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
