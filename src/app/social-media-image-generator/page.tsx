'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader, { type ImageInfo } from '@/components/ImageUploader';
import GenerateButton from '@/components/GenerateButton';
import Link from 'next/link';
import {
  Share2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Globe
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is an OG image and why do I need one?",
    answer: "OG (Open Graph) images are preview images that appear when your content is shared on social media platforms like Facebook, LinkedIn, Twitter, and messaging apps. They significantly increase click-through rates by making your shared links more visually appealing and informative."
  },
  {
    question: "What's the difference between OG images and Twitter cards?",
    answer: "OG images (1200x630) are the standard Open Graph protocol used by Facebook, LinkedIn, and many other platforms. Twitter has its own format called Twitter cards (1200x600 for summary_large_image). While similar, they have slightly different aspect ratios. It's best to have both for optimal display across all platforms."
  },
  {
    question: "What size should my social media images be?",
    answer: "The most common sizes are: OG image (1200x630), Twitter card (1200x600 or 1200x675), LinkedIn share (1200x627), Facebook cover (820x312), Twitter header (1500x500), and YouTube thumbnail (1280x720). Our generator creates all these sizes from a single upload."
  },
  {
    question: "Do I need different images for each social platform?",
    answer: "While you can use one OG image for most platforms, optimizing for each platform's specific dimensions will give you the best results. Different platforms crop images differently, so having platform-specific sizes ensures your key content is always visible."
  },
  {
    question: "How do I add OG images to my website?",
    answer: "Add meta tags to your HTML head section: <meta property=\"og:image\" content=\"https://yoursite.com/og-image.jpg\">. For Twitter, use: <meta name=\"twitter:image\" content=\"https://yoursite.com/twitter-card.jpg\">. Make sure images are hosted on a publicly accessible URL."
  },
  {
    question: "What's the recommended file format for social images?",
    answer: "Use JPG or PNG format. JPG is preferred for photos and complex images (smaller file size), while PNG is better for graphics with text or transparency. Keep file sizes under 5MB for best performance. Facebook recommends images under 8MB."
  },
  {
    question: "Why aren't my social images showing up when shared?",
    answer: "Common issues include: incorrect meta tag syntax, images not publicly accessible, image URLs using relative paths instead of absolute URLs, or cached old images. Use platform debuggers (Facebook Sharing Debugger, Twitter Card Validator) to troubleshoot and refresh cached images."
  },
  {
    question: "Should social images include text?",
    answer: "Yes, adding text to social images can increase engagement. Include your title, key message, or call-to-action. Keep text minimal (under 20% of the image area for Facebook), use large readable fonts, and ensure the text works without context since images are often viewed without captions."
  },
];

const socialSizes = [
  {
    name: 'OG Image (Facebook, LinkedIn)',
    size: '1200 x 630',
    platform: 'Facebook, LinkedIn, Discord, Slack',
    description: 'The standard Open Graph image used by most social platforms. This is the most important social image to have.',
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: 'Twitter Card (Large)',
    size: '1200 x 600',
    platform: 'Twitter/X',
    description: 'Used for the summary_large_image Twitter card type. Provides a large, attention-grabbing preview.',
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: 'LinkedIn Share',
    size: '1200 x 627',
    platform: 'LinkedIn',
    description: 'Optimized for LinkedIn\'s feed display. Similar to OG but with slightly different aspect ratio.',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: 'Facebook Cover',
    size: '820 x 312',
    platform: 'Facebook',
    description: 'Cover photo for Facebook pages and profiles. Displays differently on desktop vs mobile.',
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: 'Twitter Header',
    size: '1500 x 500',
    platform: 'Twitter/X',
    description: 'Profile header image for Twitter. A wider format that appears behind your profile picture.',
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: 'YouTube Thumbnail',
    size: '1280 x 720',
    platform: 'YouTube',
    description: 'Custom thumbnail for YouTube videos. Should be eye-catching with minimal text.',
    icon: <Youtube className="h-5 w-5" />,
  },
];

const implementationGuide = [
  {
    title: 'Open Graph Tags',
    description: 'Add these to your HTML head for Facebook, LinkedIn, and other OG-compatible platforms:',
    code: `<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Description of your image">`,
  },
  {
    title: 'Twitter Card Tags',
    description: 'Add these for Twitter/X card previews:',
    code: `<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://yoursite.com/twitter-card.jpg">
<meta name="twitter:image:alt" content="Description of your image">`,
  },
  {
    title: 'Next.js Metadata',
    description: 'For Next.js apps, use the metadata export:',
    code: `export const metadata = {
  openGraph: {
    images: [{
      url: 'https://yoursite.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://yoursite.com/twitter-card.jpg'],
  },
};`,
  },
];

export default function SocialMediaImageGeneratorPage() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['social']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Social Media Image Generator',
    description: 'Free tool to generate OG images, Twitter cards, and social media images in all required sizes.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'OG Image Generation (1200x630)',
      'Twitter Card Images (1200x600)',
      'LinkedIn Images (1200x627)',
      'Facebook Cover Photos (820x312)',
      'Twitter Header Images (1500x500)',
      'YouTube Thumbnails (1280x720)',
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
        <section className="bg-gradient-to-b from-pink-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Free Social Media Image Generator
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Generate perfectly sized OG images, Twitter cards, LinkedIn images, and more for your
              website and content. Make your shared links stand out with professional social media
              preview images.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>OG images for Facebook & LinkedIn</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Twitter/X cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>YouTube thumbnails</span>
              </div>
            </div>
          </div>
        </section>

        {/* Image Generator Tool */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="space-y-8">
                {/* Step 1: Upload */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600 dark:bg-pink-900 dark:text-pink-400">
                      1
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Upload Your Image
                    </h2>
                  </div>
                  <ImageUploader image={image} onImageChange={setImage} />
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    For best results with social images, use a high-resolution source image (at least 1500x1500 pixels).
                    The image will be cropped and scaled to fit each social platform&apos;s requirements.
                  </p>
                </div>

                {/* Step 2: Platform Selection (pre-selected) */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600 dark:bg-pink-900 dark:text-pink-400">
                      2
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Platform Selected: Social Media
                    </h2>
                  </div>
                  <div className="rounded-xl border-2 border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
                    <div className="flex items-center gap-3">
                      <Share2 className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Social Media Images</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          OG images, Twitter cards, LinkedIn, Facebook covers, YouTube thumbnails
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    Need app icons instead?{' '}
                    <Link href="/" className="text-pink-600 hover:underline dark:text-pink-400">
                      Use our full icon generator
                    </Link>{' '}
                    for iOS, Android, and more.
                  </p>
                </div>

                {/* Step 3: Generate */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600 dark:bg-pink-900 dark:text-pink-400">
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

        {/* Social Image Sizes */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Social Media Image Sizes Included
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Our generator creates optimized images for all major social platforms. Here&apos;s what you&apos;ll get:
            </p>

            <div className="mt-8 space-y-4">
              {socialSizes.map((size, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                      {size.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{size.name}</h3>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                          {size.size} px
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">{size.platform}</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{size.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              How to Implement Social Images
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              After generating your social images, add the appropriate meta tags to your website&apos;s HTML
              head section. Here are examples for different scenarios:
            </p>

            <div className="mt-8 space-y-6">
              {implementationGuide.map((guide, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{guide.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{guide.description}</p>
                  <div className="mt-4 rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                    <pre className="overflow-x-auto text-sm text-gray-300">
                      <code>{guide.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Testing Tip:</strong> After adding your social images, test them using{' '}
                  <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="underline">
                    Facebook Sharing Debugger
                  </a>{' '}
                  and{' '}
                  <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="underline">
                    Twitter Card Validator
                  </a>{' '}
                  to ensure they display correctly.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Social Image Best Practices
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Use High Contrast</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Social feeds are crowded. Use bold colors and high contrast to make your images
                  stand out. Avoid light gray text on white backgrounds or other low-contrast combinations.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Keep Text Minimal</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Include only essential text. Large, readable headlines work better than detailed
                  descriptions. Facebook may reduce reach for images with too much text (over 20%).
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Consider Cropping</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Different platforms crop images differently. Keep important content centered and
                  away from edges. Test on multiple platforms before finalizing.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Include Branding</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Add your logo or brand colors consistently across all social images. This builds
                  recognition and trust as people see your content shared.
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
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">App Icon Sizes Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete size reference</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-pink-600" />
              </Link>
              <Link
                href="/how-to-create-app-icon"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Design Best Practices</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tips for creating great images</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-pink-600" />
              </Link>
              <Link
                href="/"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Icon Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All platforms in one place</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-pink-600" />
              </Link>
              <Link
                href="/chrome-extension-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Extension Icons</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Browser extension icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-pink-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Need App Icons Too?
            </h2>
            <p className="mt-4 text-lg text-pink-100">
              Generate icons for iOS, Android, macOS, Windows, PWA, and browser extensions
              with our full icon generator.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-pink-600 shadow-lg transition-all hover:bg-gray-100"
              >
                <Sparkles className="h-5 w-5" />
                Try Full Icon Generator
              </Link>
            </div>
            <p className="mt-6 text-sm text-pink-200">
              Organize your content ideas with{' '}
              <a
                href="https://thoughtmap.space"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThoughtMap
              </a>{' '}
              - visual thinking powered by AI.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
