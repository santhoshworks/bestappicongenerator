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
  Smartphone,
  Store,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function AndroidIconGenerator() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['android']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const androidIconSizes = [
    { size: '512x512', folder: 'Play Store', density: 'xxxhdpi' },
    { size: '192x192', folder: 'mipmap-xxxhdpi', density: 'xxxhdpi' },
    { size: '144x144', folder: 'mipmap-xxhdpi', density: 'xxhdpi' },
    { size: '96x96', folder: 'mipmap-xhdpi', density: 'xhdpi' },
    { size: '72x72', folder: 'mipmap-hdpi', density: 'hdpi' },
    { size: '48x48', folder: 'mipmap-mdpi', density: 'mdpi' },
    { size: '36x36', folder: 'mipmap-ldpi', density: 'ldpi' },
  ];

  const faqs = [
    {
      question: 'What size should my Android app icon be?',
      answer:
        'For Android apps, you need a 512x512 pixel icon for the Google Play Store listing. For the app itself, you need multiple sizes in different mipmap folders ranging from 36x36 (ldpi) to 192x192 (xxxhdpi). Our Android app icon generator creates all required sizes automatically from a single source image.',
    },
    {
      question: 'What are Android adaptive icons?',
      answer:
        'Adaptive icons are a flexible icon format introduced in Android 8.0 (Oreo). They consist of a foreground and background layer that Android can display in different shapes depending on the device manufacturer. Our generator creates icons that work with the adaptive icon system while maintaining backward compatibility.',
    },
    {
      question: 'What is the Play Store icon requirement?',
      answer:
        'Google Play Store requires a 512x512 pixel high-resolution icon in PNG format with 32-bit color and no alpha transparency (unless you want specific transparency effects). The icon should not be already masked or rounded as the Play Store applies its own mask. Our Android icon maker generates the perfect Play Store icon size.',
    },
    {
      question: 'What are mipmap folders in Android?',
      answer:
        'Mipmap folders contain your app launcher icons at different density levels. Android uses these to pick the right size icon for each device. The folders include mipmap-ldpi (36x36), mipmap-mdpi (48x48), mipmap-hdpi (72x72), mipmap-xhdpi (96x96), mipmap-xxhdpi (144x144), and mipmap-xxxhdpi (192x192). Our tool generates icons for all these folders.',
    },
    {
      question: 'How do I add Android app icons to my project?',
      answer:
        'After downloading your icons, copy the mipmap folders into your Android project\'s res directory. For Android Studio projects, navigate to app/src/main/res/ and replace or merge the mipmap folders. The 512x512 icon should be uploaded directly to the Google Play Console when publishing your app.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Android App Icon Generator',
    description:
      'Free online Android app icon generator. Create all required Play Store and mipmap icon sizes instantly. Generate adaptive icons and launcher icons from a single image.',
    url: 'https://bestappicongenerator.com/android-icon-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Google Play Store icon (512x512)',
      'All mipmap density sizes',
      'Adaptive icon support',
      'Android launcher icons',
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
          <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  <Smartphone className="h-4 w-4" />
                  Android Icon Generator
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Free Android App Icon Generator
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Generate all required Android app icon sizes for Play Store and mipmap folders
                  instantly. Create professional Android launcher icons and adaptive icons with our
                  free Play Store icon maker. No signup required.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>All mipmap densities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Play Store ready (512x512)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Android Studio compatible</span>
                  </div>
                </div>
              </div>

              {/* Android Icon Generator Tool */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                <div className="space-y-8">
                  {/* Step 1: Upload */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Upload Your Android App Icon
                      </h2>
                    </div>
                    <ImageUploader image={image} onImageChange={setImage} />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Recommended: 512x512px or larger PNG image for best quality across all Android densities
                    </p>
                  </div>

                  {/* Step 2: Platform Selection (Pre-selected Android) */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-400">
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate & Download Android Icons
                      </h2>
                    </div>
                    <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Android Icon Sizes Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  All Android App Icon Sizes Generated
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our Android app icon generator creates every mipmap density size required for your Android app
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Size
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Folder / Purpose
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Density
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {androidIconSizes.map((icon, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <td className="px-6 py-4 font-medium text-green-600 dark:text-green-400">
                          {icon.size}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {icon.folder}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {icon.density}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Android Requirements Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Android App Icon Requirements
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Google Play and Android have specific requirements for app icons. Our Android
                    icon generator ensures your icons meet all Play Store guidelines automatically.
                  </p>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">512x512 for Play Store</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          The Play Store requires a high-resolution 512x512 pixel icon for your app listing.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">PNG Format with 32-bit Color</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          All Android icons should be PNG format with full 32-bit color support.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Multiple Density Sizes</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Android apps need icons in ldpi, mdpi, hdpi, xhdpi, xxhdpi, and xxxhdpi densities.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Adaptive Icon Compatible</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Icons work with Android Oreo+ adaptive icon system for flexible display.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Store className="h-12 w-12 text-green-600 dark:text-green-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Play Store</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">512x512px</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Smartphone className="h-12 w-12 text-green-600 dark:text-green-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Launcher</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">6 densities</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Layers className="h-12 w-12 text-green-600 dark:text-green-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Adaptive Icons</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Android 8.0+ support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Android App Icon Generator FAQ
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Common questions about creating Android app icons
                </p>
              </div>

              <div className="space-y-4">
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
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Other Icon Generators
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Generate icons for other platforms too
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/ios-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    iOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create App Store and iPhone icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                </Link>

                <Link
                  href="/favicon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    Favicon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Generate favicons and ICO files
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                </Link>

                <Link
                  href="/pwa-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    PWA Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Progressive Web App manifest icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                </Link>

                <Link
                  href="/macos-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    macOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Mac app and dock icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your Android App Icons?
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Generate all Play Store and mipmap icon sizes in seconds. Free, no signup required.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Generate Android Icons Now
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
