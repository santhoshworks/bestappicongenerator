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
  Globe,
  FileCode,
  Image,
  ArrowRight,
} from 'lucide-react';

export default function FaviconGenerator() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['web']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faviconSizes = [
    { size: '32x32', format: 'PNG', purpose: 'Standard favicon' },
    { size: '16x16', format: 'PNG', purpose: 'Small favicon' },
    { size: '180x180', format: 'PNG', purpose: 'Apple Touch Icon' },
    { size: '152x152', format: 'PNG', purpose: 'iPad Touch Icon' },
    { size: '144x144', format: 'PNG', purpose: 'IE/Edge pinned site' },
    { size: '120x120', format: 'PNG', purpose: 'iPhone Retina' },
    { size: '114x114', format: 'PNG', purpose: 'iPhone (older)' },
    { size: '76x76', format: 'PNG', purpose: 'iPad' },
    { size: '72x72', format: 'PNG', purpose: 'iPad (older)' },
    { size: '60x60', format: 'PNG', purpose: 'iPhone' },
    { size: '57x57', format: 'PNG', purpose: 'iPhone (older)' },
    { size: '150x150', format: 'PNG', purpose: 'Windows tile' },
    { size: '310x310', format: 'PNG', purpose: 'Windows large tile' },
    { size: '310x150', format: 'PNG', purpose: 'Windows wide tile' },
    { size: 'Multi', format: 'ICO', purpose: 'favicon.ico' },
  ];

  const faqs = [
    {
      question: 'What is a favicon and why do I need one?',
      answer:
        'A favicon (favorite icon) is the small icon that appears in browser tabs, bookmarks, and browser history. It helps users identify your website quickly among multiple tabs. A professional favicon improves brand recognition and user experience. Our favicon generator creates all required sizes from a single image.',
    },
    {
      question: 'What is the standard favicon size?',
      answer:
        'The most common favicon sizes are 16x16 and 32x32 pixels for the traditional ICO format. However, modern websites need multiple sizes including 180x180 for Apple Touch icons, 192x192 for Android, and various sizes for Windows tiles. Our website icon maker generates all these sizes automatically.',
    },
    {
      question: 'What is the difference between ICO and PNG favicons?',
      answer:
        'ICO files are the traditional favicon format that can contain multiple image sizes in one file (typically 16x16, 32x32, 48x48). PNG favicons are single-size images used by modern browsers and for Apple Touch icons. Our favicon generator from image creates both ICO and PNG formats for maximum compatibility.',
    },
    {
      question: 'How do I add a favicon to my website?',
      answer:
        'Add this code to your HTML head section: <link rel="icon" type="image/x-icon" href="/favicon.ico"> for ICO files, and <link rel="apple-touch-icon" href="/apple-touch-icon.png"> for Apple devices. For complete favicon support, include multiple link tags for different sizes. Our generator provides all the files you need.',
    },
    {
      question: 'What image format should I use for my source favicon?',
      answer:
        'For best results, use a square PNG or SVG image at least 512x512 pixels. The image should be simple and recognizable at small sizes - avoid too much detail or text. Our ICO generator will resize your image to all required favicon sizes while maintaining quality.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Favicon Generator',
    description:
      'Free online favicon generator from image. Create ICO files, PNG favicons, Apple Touch icons, and Windows tiles instantly. Generate all website icon sizes from a single image.',
    url: 'https://bestappicongenerator.com/favicon-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'ICO file generation',
      'PNG favicon sizes',
      'Apple Touch icons',
      'Windows tiles',
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
          <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  <Globe className="h-4 w-4" />
                  Favicon Generator
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Free Favicon Generator from Image
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                  Generate all favicon sizes including ICO files from any image instantly. Create
                  professional website icons, Apple Touch icons, and Windows tiles with our free
                  favicon maker. Perfect for any website or web app.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>ICO file included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Apple Touch icons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Windows tiles</span>
                  </div>
                </div>
              </div>

              {/* Favicon Generator Tool */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                <div className="space-y-8">
                  {/* Step 1: Upload */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                        1
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Upload Your Image for Favicon
                      </h2>
                    </div>
                    <ImageUploader image={image} onImageChange={setImage} />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Recommended: Square image at least 512x512px. Simple designs work best at small favicon sizes.
                    </p>
                  </div>

                  {/* Step 2: Platform Selection (Pre-selected Web/Favicon) */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                        2
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Select Favicon Types
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                        3
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate & Download Favicons
                      </h2>
                    </div>
                    <GenerateButton image={image} selectedPlatforms={selectedPlatforms} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Favicon Sizes Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  All Favicon Sizes Generated
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our favicon generator creates every size needed for complete browser and device support
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
                        Format
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {faviconSizes.map((icon, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <td className="px-6 py-4 font-medium text-purple-600 dark:text-purple-400">
                          {icon.size}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {icon.format}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {icon.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Favicon Requirements Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Favicon Requirements & Best Practices
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Creating the perfect favicon requires understanding different browser and device
                    requirements. Our ICO generator handles all the complexity for you.
                  </p>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">ICO for Maximum Compatibility</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          The ICO format contains multiple sizes and works in all browsers including older IE.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">PNG for Modern Browsers</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Modern browsers support PNG favicons with better color depth and transparency.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Apple Touch Icons</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          iOS devices use apple-touch-icon for home screen bookmarks and shortcuts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <div>
                        <strong className="text-gray-900 dark:text-white">Windows Tiles</strong>
                        <p className="text-gray-600 dark:text-gray-400">
                          Windows 8/10 pinned sites use mstile images for Start menu tiles.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <FileCode className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">ICO File</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Multi-size</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Image className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">PNG Favicons</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">14+ sizes</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Globe className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Apple Touch</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">iOS icons</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <Globe className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                    <span className="mt-3 font-semibold text-gray-900 dark:text-white">Windows</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Tiles</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HTML Code Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  How to Add Favicon to Your Website
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Add these HTML tags to your website head section for complete favicon support
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-900 p-6 dark:border-gray-700">
                <pre className="overflow-x-auto text-sm text-gray-300">
                  <code>{`<!-- Basic favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Windows Tiles -->
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Favicon Generator FAQ
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Common questions about creating favicons for websites
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
                  Generate icons for apps and other platforms
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/ios-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    iOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create App Store and iPhone icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                </Link>

                <Link
                  href="/android-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    Android Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Play Store and adaptive icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                </Link>

                <Link
                  href="/pwa-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    PWA Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Progressive Web App manifest icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                </Link>

                <Link
                  href="/macos-app-icon-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    macOS Icon Generator
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Create Mac app and dock icons
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your Favicon?
              </h2>
              <p className="mt-4 text-lg text-purple-100">
                Generate ICO files and all favicon sizes in seconds. Free, no signup required.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Generate Favicon Now
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
