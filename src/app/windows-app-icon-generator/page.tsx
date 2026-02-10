'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader, { type ImageInfo } from '@/components/ImageUploader';
import GenerateButton from '@/components/GenerateButton';
import Link from 'next/link';
import {
  Monitor,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info,
  Layers,
  Grid3X3,
  Maximize2
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What icon sizes do Windows applications need?",
    answer: "Windows apps need multiple icon sizes for different contexts: 16x16 (small icons, system tray), 24x24 (extra small), 32x32 (default icon size), 48x48 (medium icons), 64x64 (large icons), 128x128 (extra large), and 256x256 (tile view). For Microsoft Store apps, you'll also need tile sizes like 44x44, 71x71, 150x150, and 310x310."
  },
  {
    question: "What is an ICO file and do I need one?",
    answer: "An ICO (Windows Icon) file is a container format that holds multiple icon sizes in a single file. Windows automatically selects the appropriate size based on context. For desktop applications, an ICO file containing 16x16, 32x32, 48x48, and 256x256 sizes is recommended. Our generator creates individual PNG files that you can combine into an ICO using tools like ImageMagick or online converters."
  },
  {
    question: "What are Windows Store tile sizes?",
    answer: "Microsoft Store apps use tile icons for the Start menu and app list. The main sizes are: Small tile (71x71), Medium tile (150x150), Wide tile (310x150), Large tile (310x310), App list icon (44x44), and Store logo (50x50). Each tile can display different content and should be designed to work at each size."
  },
  {
    question: "Should Windows icons have transparency?",
    answer: "For traditional desktop icons (ICO format), yes - use transparency so the icon looks good against any desktop background. For Windows Store tiles, Microsoft recommends using a solid background color that matches your brand. The 44x44 app list icon can have transparency."
  },
  {
    question: "What's the best source image size for Windows icons?",
    answer: "Start with at least a 512x512 pixel image, though 1024x1024 is ideal. This ensures you have enough detail for the 256x256 and 310x310 sizes. Windows will scale your icons to smaller sizes, so starting large maintains quality."
  },
  {
    question: "How do I add icons to my Windows application?",
    answer: "For traditional Win32 apps, include an ICO file in your resources and set it as the application icon in your project settings. For UWP/WinUI apps, add the PNG files to your Assets folder and reference them in your Package.appxmanifest file under Visual Assets."
  },
  {
    question: "What about high DPI displays?",
    answer: "Modern Windows supports multiple DPI scaling levels (100%, 125%, 150%, 200%, etc.). For crisp icons at all scales, provide icons at multiple sizes. Windows will use the closest size and scale if needed. The 256x256 size is particularly important for high DPI displays."
  },
  {
    question: "Can I use the same icon for desktop and Microsoft Store?",
    answer: "You can use the same base design, but you may want to adjust it for tiles. Desktop icons are typically displayed on varied backgrounds, so transparency is important. Store tiles often have a solid background color and may include additional branding elements."
  },
];

const iconSizes = [
  {
    category: 'Microsoft Store Tiles',
    sizes: [
      { size: '310 x 310', name: 'Large Tile', usage: 'Start menu large tile view' },
      { size: '310 x 150', name: 'Wide Tile', usage: 'Start menu wide tile view' },
      { size: '150 x 150', name: 'Medium Tile', usage: 'Start menu medium tile, default app tile' },
      { size: '71 x 71', name: 'Small Tile', usage: 'Start menu small tile view' },
      { size: '50 x 50', name: 'Store Logo', usage: 'Microsoft Store listing' },
      { size: '44 x 44', name: 'App List Icon', usage: 'All apps list, taskbar' },
    ],
  },
  {
    category: 'Desktop Icons',
    sizes: [
      { size: '256 x 256', name: 'Extra Large', usage: 'Tile view, high DPI displays' },
      { size: '128 x 128', name: 'Large Icons', usage: 'Large icon view' },
      { size: '64 x 64', name: 'Medium Icons', usage: 'Medium icon view' },
      { size: '48 x 48', name: 'Tiles', usage: 'Tile view, folder icons' },
      { size: '32 x 32', name: 'Standard', usage: 'Default icon size, taskbar' },
      { size: '24 x 24', name: 'Extra Small', usage: 'Small icon view' },
      { size: '16 x 16', name: 'Details', usage: 'List view, system tray' },
    ],
  },
];

const designGuidelines = [
  {
    title: 'Use Simple Shapes',
    description: 'Windows icons work best with clean, geometric shapes. Avoid intricate details that get lost at small sizes like 16x16 pixels.',
    icon: <Grid3X3 className="h-5 w-5" />,
  },
  {
    title: 'Consider Scale',
    description: 'Design your icon to work at all sizes. What looks great at 256x256 may be unrecognizable at 16x16. Test at multiple sizes.',
    icon: <Maximize2 className="h-5 w-5" />,
  },
  {
    title: 'Match Windows Style',
    description: 'Follow Fluent Design principles: use light and shadow, layered depth, and vibrant colors that align with the Windows ecosystem.',
    icon: <Layers className="h-5 w-5" />,
  },
];

export default function WindowsAppIconGeneratorPage() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['windows']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Windows App Icon Generator',
    description: 'Free tool to generate all required icon sizes for Windows desktop applications and Microsoft Store apps.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Windows Desktop Icons (16-256px)',
      'Microsoft Store Tiles',
      'ICO-ready PNG files',
      'All Required Sizes',
      'High DPI Support',
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
        <section className="bg-gradient-to-b from-cyan-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                <Monitor className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Free Windows App Icon Generator
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Generate all required icon sizes for Windows desktop applications and Microsoft Store apps.
              Upload your design and download a complete set of icons ready for your Windows project,
              from 16x16 system tray icons to 310x310 Start menu tiles.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>All desktop sizes (16-256px)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Microsoft Store tiles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>ICO-ready PNG files</span>
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                      1
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Upload Your Windows App Icon
                    </h2>
                  </div>
                  <ImageUploader image={image} onImageChange={setImage} />
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    For best results, use a square PNG image at least 512x512 pixels. Use transparency
                    for desktop icons or a solid background color for Store tiles.
                  </p>
                </div>

                {/* Step 2: Platform Selection (pre-selected) */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                      2
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Platform Selected: Windows
                    </h2>
                  </div>
                  <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
                    <div className="flex items-center gap-3">
                      <Monitor className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Windows Application</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Desktop icons (16-256px), Store tiles (44-310px), and wide tiles
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    Building a cross-platform app?{' '}
                    <Link href="/" className="text-cyan-600 hover:underline dark:text-cyan-400">
                      Use our full icon generator
                    </Link>{' '}
                    to create icons for iOS, Android, macOS, and more.
                  </p>
                </div>

                {/* Step 3: Generate */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
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

        {/* Icon Sizes Reference */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Windows Icon Sizes Reference
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Windows applications require different icon sizes for various contexts. Our generator
              creates all the sizes you need for both traditional desktop apps and Microsoft Store apps.
            </p>

            {iconSizes.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Size (px)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Usage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                      {category.sizes.map((size, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="whitespace-nowrap px-6 py-4 text-sm">
                            <code className="rounded bg-cyan-100 px-2 py-1 font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                              {size.size}
                            </code>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {size.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {size.usage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Windows Icon Design Guidelines
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Follow these principles to create icons that look great on Windows and align with
              Microsoft&apos;s Fluent Design system.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {designGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                    {guideline.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{guideline.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ICO File Section */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Creating an ICO File
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Traditional Windows applications use ICO files that contain multiple icon sizes
              in a single file. After downloading your PNG icons, you can combine them into an
              ICO file using various tools.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Using ImageMagick</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  ImageMagick is a free, open-source tool that can create ICO files from PNG images.
                </p>
                <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                  <pre className="overflow-x-auto text-sm text-gray-300">
                    <code>{`convert icon-16.png icon-32.png icon-48.png \\
        icon-64.png icon-256.png app-icon.ico`}</code>
                  </pre>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Online Converters</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Several online tools can convert PNG to ICO. Look for converters that support
                  multiple sizes in a single ICO file. Make sure to include at least 16x16, 32x32,
                  48x48, and 256x256 for comprehensive coverage.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Tip:</strong> For modern UWP and WinUI apps, you don&apos;t need an ICO file.
                  Simply add the PNG files to your Assets folder and reference them in your
                  Package.appxmanifest file.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microsoft Store Tips */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Microsoft Store Submission Tips
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Tile Design</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Store tiles typically have a solid background color. Choose a brand color that
                  makes your icon stand out. The icon element should be centered with padding
                  (about 25% of the tile size on each side).
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Wide Tiles</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  The 310x150 wide tile can display more content than square tiles. Consider adding
                  your app name or a tagline alongside the icon. Keep it simple and readable.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Scale Factor Assets</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  For best results, provide assets at 100%, 125%, 150%, 200%, and 400% scale factors.
                  Our generator provides sizes that cover most scale factors effectively.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Target-Size Assets</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Some contexts (like taskbar icons) use unplated, target-size assets. These appear
                  without background, so ensure your icon has sufficient contrast against any background.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
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
        <section className="border-t border-gray-200 py-12 dark:border-gray-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Related Tools & Resources
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/app-icon-sizes"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-cyan-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">App Icon Sizes Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete reference for all platforms</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-600" />
              </Link>
              <Link
                href="/how-to-create-app-icon"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-cyan-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Icon Design Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tips for creating great icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-600" />
              </Link>
              <Link
                href="/"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-cyan-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Icon Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All platforms in one place</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-600" />
              </Link>
              <Link
                href="/chrome-extension-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-cyan-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Browser Extension Icons</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chrome, Firefox, Edge icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Building a Cross-Platform App?
            </h2>
            <p className="mt-4 text-lg text-cyan-100">
              Our full icon generator creates icons for iOS, Android, macOS, web, and more
              - all from a single upload.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-cyan-600 shadow-lg transition-all hover:bg-gray-100"
              >
                <Sparkles className="h-5 w-5" />
                Try Full Icon Generator
              </Link>
            </div>
            <p className="mt-6 text-sm text-cyan-200">
              Plan your app development with{' '}
              <a
                href="https://thoughtmap.space"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThoughtMap
              </a>{' '}
              - AI-powered mind mapping and project planning.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
