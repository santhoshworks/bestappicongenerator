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
  FileJson,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function PWAIconGenerator() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['pwa']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pwaIconSizes = [
    { size: '512x512', purpose: 'Maskable & Any', required: true },
    { size: '384x384', purpose: 'Large display', required: false },
    { size: '256x256', purpose: 'Medium display', required: false },
    { size: '192x192', purpose: 'Android home screen', required: true },
    { size: '144x144', purpose: 'Medium density', required: false },
    { size: '128x128', purpose: 'Small display', required: false },
    { size: '96x96', purpose: 'Notification icon', required: false },
    { size: '72x72', purpose: 'Low density', required: false },
    { size: '48x48', purpose: 'Extra small', required: false },
  ];

  const faqs = [
    {
      question: 'What icons do I need for a Progressive Web App?',
      answer:
        'A PWA requires icons in multiple sizes defined in your web app manifest (manifest.json). At minimum, you need 192x192 and 512x512 pixel icons. For best coverage across all devices, include sizes: 48, 72, 96, 128, 144, 192, 256, 384, and 512 pixels. Our PWA icon generator creates all these sizes automatically.',
    },
    {
      question: 'What is a web app manifest and why do I need icons in it?',
      answer:
        'The web app manifest (manifest.json) is a JSON file that tells browsers about your PWA and how it should behave when installed. The icons array in the manifest specifies which icons to use for the home screen, app launcher, task switcher, and splash screens. Without proper manifest icons, your PWA cannot be installed correctly.',
    },
    {
      question: 'What is the difference between maskable and any purpose icons?',
      answer:
        'Maskable icons have a safe zone in the center (about 80% of the icon area) that is guaranteed to be visible. The outer area may be masked into different shapes by the operating system. "Any" purpose icons are displayed as-is without masking. For best results, provide both maskable (for Android adaptive icons) and regular icons.',
    },
    {
      question: 'How do I add PWA icons to my manifest.json?',
      answer:
        'Add an icons array to your manifest.json with objects containing src (path to icon), sizes (e.g., "192x192"), type (e.g., "image/png"), and purpose (e.g., "any maskable"). Our generator provides a complete manifest snippet you can copy directly into your project.',
    },
    {
      question: 'What size should my source image be for PWA icons?',
      answer:
        'Start with a 512x512 pixel image or larger for best quality. The source image should be square (1:1 aspect ratio). For maskable icons, keep important content within the center 80% of the image, as the outer edges may be cropped on some devices. Our progressive web app icon generator handles all the resizing for you.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PWA Icon Generator',
    description:
      'Free online PWA icon generator for Progressive Web Apps. Create all required web app manifest icon sizes instantly. Generate maskable icons, home screen icons, and splash screen assets.',
    url: 'https://bestappicongenerator.com/pwa-icon-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'All PWA manifest icon sizes',
      'Maskable icon support',
      '512x512 and 192x192 required sizes',
      'Manifest.json snippet',
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
          <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  <Smartphone className="h-4 w-4" />
                  PWA Icon Generator
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Free PWA Icon Generator
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Generate all required Progressive Web App icon sizes for your web app manifest
                  instantly. Create professional PWA icons including maskable icons for Android
                  home screens. Perfect for any progressive web application.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>All manifest sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Maskable icons included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Install-ready</span>
                  </div>
                </div>
              </div>

              {/* PWA Icon Generator Tool */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                <div className="space-y-8">
                  {/* Step 1: Upload */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Upload Your PWA Icon
                      </h2>
                    </div>
                    <ImageUploader image={image} onImageChange={setImage} />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Recommended: 512x512px or larger square image. Keep important content in center for maskable icon support.
                    </p>
                  </div>

                  {/* Step 2: Platform Selection (Pre-selected PWA) */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
                        2
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Select Icon Types
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate & Download PWA Icons
                      </h2>
                    </div>
                    <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PWA Icon Sizes Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  All PWA Manifest Icon Sizes Generated
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our PWA icon generator creates every size needed for the web app manifest
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {pwaIconSizes.map((icon, index) => (
                  <div
                    key={index}
                    className={`rounded-xl border p-4 text-center ${
                      icon.required
                        ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-900/20'
                        : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
                    }`}
                  >
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {icon.size}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {icon.purpose}
                    </div>
                    {icon.required && (
                      <div className="mt-2 inline-block rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
                        Required
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Manifest Example Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Web App Manifest Icons Configuration
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Add this icons array to your manifest.json for complete PWA icon support
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-gray-700">
                <pre className="overflow-x-auto text-sm text-gray-300">
                  <code>{`{
  "name": "Your PWA Name",
  "short_name": "PWA",
  "icons": [
    {
      "src": "/icons/pwa-48.png",
      "sizes": "48x48",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/pwa-72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/pwa-96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/pwa-144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/pwa-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/pwa-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3b82f6",
  "background_color": "#ffffff"
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* PWA Requirements Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Progressive Web App Icon Requirements
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    PWAs need specific icon configurations to be installable and display correctly
                    across all devices. Our progressive web app icon generator ensures compliance.
                  </p>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">192x192 Required Size</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Minimum required size for Android home screen icons and Chrome install prompt.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">512x512 Required Size</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Required for splash screens and high-resolution displays. Essential for PWA installability.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Maskable Icon Support</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Icons with purpose "maskable" adapt to different shapes on Android devices.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">PNG Format</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          All PWA manifest icons should be PNG format for maximum browser support.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <FileJson className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Manifest</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">JSON config</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Layers className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Maskable</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Adaptive shapes</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Smartphone className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Installable</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Home screen</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <CheckCircle2 className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">9 Sizes</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">All included</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  PWA Icon Generator FAQ
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Common questions about creating Progressive Web App icons
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
                  Generate icons for native apps and websites
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/ios-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    iOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create App Store and iPhone icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </Link>

                <Link
                  href="/android-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Android Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Play Store and adaptive icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </Link>

                <Link
                  href="/favicon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Favicon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create ICO files and browser favicons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </Link>

                <Link
                  href="/macos-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    macOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Mac app and dock icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your PWA Icons?
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Generate all web app manifest icon sizes in seconds. Free, no signup required.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Generate PWA Icons Now
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
