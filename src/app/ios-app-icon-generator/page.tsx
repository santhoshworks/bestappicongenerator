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
  Tablet,
  AppWindow,
  ArrowRight,
} from 'lucide-react';

export default function IOSAppIconGenerator() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['ios']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const iosIconSizes = [
    { size: '1024x1024', purpose: 'App Store' },
    { size: '180x180', purpose: 'iPhone @3x' },
    { size: '120x120', purpose: 'iPhone @2x' },
    { size: '167x167', purpose: 'iPad Pro' },
    { size: '152x152', purpose: 'iPad' },
    { size: '120x120', purpose: 'Spotlight @3x' },
    { size: '80x80', purpose: 'Spotlight @2x' },
    { size: '40x40', purpose: 'Spotlight' },
    { size: '87x87', purpose: 'Settings @3x' },
    { size: '58x58', purpose: 'Settings @2x' },
    { size: '29x29', purpose: 'Settings' },
    { size: '60x60', purpose: 'Notification @3x' },
    { size: '40x40', purpose: 'Notification @2x' },
    { size: '20x20', purpose: 'Notification' },
  ];

  const faqs = [
    {
      question: 'What size should my iOS app icon be?',
      answer:
        'For iOS app icons, you need a source image of at least 1024x1024 pixels. This is the size required for the App Store. Our iOS app icon generator automatically creates all 15+ required sizes from your source image, including sizes for iPhone, iPad, Spotlight search, Settings, and Notifications.',
    },
    {
      question: 'Does iOS require specific icon formats?',
      answer:
        'Yes, iOS requires PNG format for all app icons. Icons must be square (1:1 aspect ratio), have no transparency (use solid colors), and should not include rounded corners as iOS automatically applies the iconic rounded rectangle mask. Our generator exports all icons in the correct PNG format.',
    },
    {
      question: 'What is the App Store icon size for iOS?',
      answer:
        'The App Store requires a 1024x1024 pixel PNG image for your iOS app icon. This is the largest size needed and is used for the App Store listing. Our tool generates this along with all other required sizes for your iPhone and iPad app.',
    },
    {
      question: 'Do I need different icons for iPhone and iPad?',
      answer:
        'While the same design is typically used, iPhone and iPad require different icon sizes. iPhone uses @2x and @3x scales (120x120, 180x180), while iPad uses 152x152 and 167x167 sizes. Our iOS icon generator creates all necessary sizes for both devices automatically.',
    },
    {
      question: 'How do I add iOS app icons to Xcode?',
      answer:
        'After downloading your icons, open your Xcode project, navigate to Assets.xcassets, select AppIcon, and drag each icon size to the corresponding slot. Our generator names files clearly so you know exactly which size goes where. Alternatively, you can drag the entire folder for automatic matching.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'iOS App Icon Generator',
    description:
      'Free online iOS app icon generator. Create all required iPhone and iPad icon sizes instantly. Generate App Store, Spotlight, and Settings icons from a single image.',
    url: 'https://bestappicongenerator.com/ios-app-icon-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'iOS App Store icon generation (1024x1024)',
      'iPhone icon sizes (@2x and @3x)',
      'iPad icon sizes',
      'Spotlight search icons',
      'Settings icons',
      'Notification icons',
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
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <Smartphone className="h-4 w-4" />
                  iOS Icon Generator
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Free iOS App Icon Generator
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Generate all required iOS app icon sizes for iPhone, iPad, and the App Store
                  in seconds. Create professional iPhone app icons with our free iOS icon maker.
                  No signup required.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>All 15+ iOS sizes included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>App Store ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Xcode compatible</span>
                  </div>
                </div>
              </div>

              {/* iOS Icon Generator Tool */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                <div className="space-y-8">
                  {/* Step 1: Upload */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Upload Your iOS App Icon
                      </h2>
                    </div>
                    <ImageUploader image={image} onImageChange={setImage} />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Recommended: 1024x1024px PNG image for best quality across all iOS icon sizes
                    </p>
                  </div>

                  {/* Step 2: Platform Selection (Pre-selected iOS) */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate & Download iOS Icons
                      </h2>
                    </div>
                    <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* iOS Icon Sizes Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  All iOS App Icon Sizes Generated
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our iOS app icon generator creates every size required by Apple for iPhone and iPad apps
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {iosIconSizes.map((icon, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {icon.size}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {icon.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* iOS Requirements Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    iOS App Icon Requirements
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Apple has specific requirements for iOS app icons. Our iPhone app icon maker
                    ensures your icons meet all App Store guidelines automatically.
                  </p>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Square Format (1:1)</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          All iOS icons must be perfectly square. Our generator ensures correct aspect ratio.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">PNG Format Required</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Apple requires PNG format. We export all icons as high-quality PNGs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">No Transparency</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          iOS app icons should have no transparency. Use solid background colors.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">No Rounded Corners</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          iOS automatically applies the rounded corner mask. Upload square corners.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">iPhone</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">6 sizes</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Tablet className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">iPad</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">3 sizes</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <AppWindow className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">App Store</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">1024px</span>
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
                  iOS App Icon Generator FAQ
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Common questions about creating iOS app icons
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
                  href="/android-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Android Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Play Store and adaptive icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </Link>

                <Link
                  href="/favicon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Favicon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Generate favicons and ICO files
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </Link>

                <Link
                  href="/pwa-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    PWA Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Progressive Web App manifest icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </Link>

                <Link
                  href="/macos-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    macOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Mac app and dock icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your iOS App Icons?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Generate all iPhone and iPad icon sizes in seconds. Free, no signup required.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Generate iOS Icons Now
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
