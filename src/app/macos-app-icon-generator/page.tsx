'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader, { type ImageInfo } from '@/components/ImageUploader';
import PlatformSelector from '@/components/PlatformSelector';
import GenerateButton from '@/components/GenerateButton';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Monitor,
  Store,
  FileCode,
  ArrowRight,
} from 'lucide-react';

export default function MacOSAppIconGenerator() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['macos']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const macosIconSizes = [
    { size: '1024x1024', scale: '1x', purpose: 'Mac App Store' },
    { size: '1024x1024', scale: '2x', purpose: 'icon_512x512@2x' },
    { size: '512x512', scale: '1x', purpose: 'icon_512x512' },
    { size: '512x512', scale: '2x', purpose: 'icon_256x256@2x' },
    { size: '256x256', scale: '1x', purpose: 'icon_256x256' },
    { size: '256x256', scale: '2x', purpose: 'icon_128x128@2x' },
    { size: '128x128', scale: '1x', purpose: 'icon_128x128' },
    { size: '128x128', scale: '2x', purpose: 'icon_64x64@2x' },
    { size: '64x64', scale: '1x', purpose: 'icon_64x64' },
    { size: '64x64', scale: '2x', purpose: 'icon_32x32@2x' },
    { size: '32x32', scale: '1x', purpose: 'icon_32x32' },
    { size: '32x32', scale: '2x', purpose: 'icon_16x16@2x' },
    { size: '16x16', scale: '1x', purpose: 'icon_16x16' },
  ];

  const faqs = [
    {
      question: 'What size should my macOS app icon be?',
      answer:
        'For macOS apps, you need a source image of at least 1024x1024 pixels. This is required for the Mac App Store listing. The macOS iconset (.icns file) contains multiple sizes from 16x16 to 512x512, each with @1x and @2x Retina variants. Our macOS app icon generator creates all 13 required sizes automatically.',
    },
    {
      question: 'What is an ICNS file and do I need one?',
      answer:
        'An ICNS (Apple Icon Image) file is the standard icon format for macOS applications. It is a container format that holds multiple icon sizes in one file, allowing macOS to display the appropriate size based on context (Dock, Finder, App Store). Our Mac app icon maker generates all the sizes needed for an ICNS file.',
    },
    {
      question: 'What is the Mac App Store icon size requirement?',
      answer:
        'The Mac App Store requires a 1024x1024 pixel PNG image for your app listing. This is the largest size needed and ensures your icon looks sharp on high-resolution Retina displays. Our generator creates this along with all smaller sizes needed for the Dock, Finder, and Spotlight.',
    },
    {
      question: 'How do macOS Retina (@2x) icons work?',
      answer:
        'Retina displays on Mac have twice the pixel density. Each icon size needs both a standard (@1x) and Retina (@2x) version. For example, a 128x128 icon needs both icon_128x128.png and icon_128x128@2x.png (which is actually 256x256 pixels). Our macOS icon generator creates all @1x and @2x variants.',
    },
    {
      question: 'How do I add macOS app icons to my Xcode project?',
      answer:
        'In Xcode, open your project and navigate to Assets.xcassets. Create a new AppIcon set, then drag each icon size to the corresponding slot. Xcode expects files named like icon_512x512@2x.png. Alternatively, you can use the iconutil command-line tool to create an ICNS file from a folder of PNG icons.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'macOS App Icon Generator',
    description:
      'Free online macOS app icon generator. Create all required Mac App Store and dock icon sizes instantly. Generate @1x and @2x Retina icons for your Mac application.',
    url: 'https://bestappicongenerator.com/macos-app-icon-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Mac App Store icon (1024x1024)',
      'All iconset sizes (16-512)',
      '@1x and @2x Retina support',
      'Dock and Finder icons',
      'No signup required',
      'Instant download',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900/30 dark:text-slate-300">
                  <Monitor className="h-4 w-4" />
                  macOS Icon Generator
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Free macOS App Icon Generator
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Generate all required macOS app icon sizes for the Mac App Store, Dock, and
                  Finder instantly. Create professional Mac app icons with @1x and @2x Retina
                  support using our free ICNS generator. No signup required.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>All 13 iconset sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>@2x Retina support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Xcode ready</span>
                  </div>
                </div>
              </div>

              {/* macOS Icon Generator Tool */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                <div className="space-y-8">
                  {/* Step 1: Upload */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Upload Your macOS App Icon
                      </h2>
                    </div>
                    <ImageUploader image={image} onImageChange={setImage} />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Recommended: 1024x1024px or larger PNG image for best quality on Retina displays
                    </p>
                  </div>

                  {/* Step 2: Platform Selection (Pre-selected macOS) */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                        2
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Select Target Platforms
                      </h2>
                    </div>
                    <PlatformSelector
                      selectedPlatforms={selectedPlatforms}
                      onSelectionChange={setSelectedPlatforms}
                    />
                  </div>

                  {/* Step 3: Generate */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate & Download macOS Icons
                      </h2>
                    </div>
                    <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* macOS Icon Sizes Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  All macOS App Icon Sizes Generated
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our Mac app icon generator creates every size required for your macOS iconset
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Size (px)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Scale
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        File Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {macosIconSizes.map((icon, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">
                          {icon.size}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                              icon.scale === '2x'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                            }`}
                          >
                            @{icon.scale}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                          {icon.purpose}.png
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* macOS Requirements Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    macOS App Icon Requirements
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Apple has specific requirements for macOS app icons. Our Mac app icon maker
                    ensures your icons meet all Mac App Store guidelines automatically.
                  </p>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">1024x1024 for App Store</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          The Mac App Store requires a high-resolution 1024x1024 pixel icon for your listing.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">@1x and @2x Retina Variants</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Each size needs both standard and Retina versions for high-DPI Mac displays.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">PNG Format Required</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          All macOS app icons must be PNG format for the iconset folder.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Square with Rounded Corners</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          macOS icons traditionally have a rounded-rectangle shape with a subtle 3D appearance.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Store className="h-12 w-12 text-slate-600 dark:text-slate-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">App Store</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">1024px</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Monitor className="h-12 w-12 text-slate-600 dark:text-slate-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Dock</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">128-512px</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <FileCode className="h-12 w-12 text-slate-600 dark:text-slate-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Finder</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">16-64px</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <CheckCircle2 className="h-12 w-12 text-slate-600 dark:text-slate-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Retina</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">@2x included</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ICNS Creation Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Creating ICNS Files for macOS
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Use the iconutil command to convert your icon folder to an ICNS file
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-gray-700">
                <pre className="overflow-x-auto text-sm text-gray-300">
                  <code>{`# First, create your iconset folder with all PNG files
mkdir MyIcon.iconset

# Add your icon files (downloaded from our generator)
# icon_16x16.png, icon_16x16@2x.png, icon_32x32.png, etc.

# Convert to ICNS using iconutil
iconutil -c icns MyIcon.iconset

# This creates MyIcon.icns ready for your Xcode project`}</code>
                </pre>
              </div>

              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Our generator provides all the correctly named PNG files needed for the iconset folder.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  macOS App Icon Generator FAQ
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Common questions about creating macOS app icons
                </p>
              </div>

              <div className="space-y-4">
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
                      <span className="font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
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

          {/* Related Tools Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Other Icon Generators
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Generate icons for mobile apps and websites
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/ios-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400">
                    iOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create App Store and iPhone icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
                </Link>

                <Link
                  href="/android-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400">
                    Android Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Play Store and adaptive icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
                </Link>

                <Link
                  href="/favicon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400">
                    Favicon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create ICO files and browser favicons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
                </Link>

                <Link
                  href="/pwa-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400">
                    PWA Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Progressive Web App manifest icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your macOS App Icons?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Generate all Mac App Store and dock icon sizes in seconds. Free, no signup required.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Generate macOS Icons Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
