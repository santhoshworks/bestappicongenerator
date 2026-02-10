import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Lightbulb,
  Palette,
  Grid3X3,
  Layers,
  Eye,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Monitor,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Create the Perfect App Icon: Complete Design Guide',
  description:
    'Learn how to create stunning app icons with our step-by-step guide. Discover design tips, best practices, and common mistakes to avoid when making app icons.',
  keywords: [
    'how to create app icon',
    'app icon design tips',
    'make app icon',
    'app icon tutorial',
    'app icon best practices',
    'design app icon',
    'create app icon from scratch',
    'app icon design guide',
    'mobile app icon design',
    'app store icon design',
  ],
  alternates: {
    canonical: 'https://bestappicongenerator.com/how-to-create-app-icon',
  },
  openGraph: {
    title: 'How to Create the Perfect App Icon: Complete Design Guide',
    description: 'Learn how to create stunning app icons with our step-by-step guide.',
    url: 'https://bestappicongenerator.com/how-to-create-app-icon',
    type: 'article',
  },
};

interface Step {
  number: number;
  title: string;
  description: string;
  tips: string[];
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Define Your Brand Identity',
    description: 'Before opening any design tool, understand what your app represents. Your icon should communicate your app\'s core purpose at a glance.',
    tips: [
      'List 3-5 key attributes of your app (fast, secure, fun, professional)',
      'Identify your target audience and what appeals to them',
      'Research competitor icons to differentiate your design',
      'Consider how your icon fits with your overall brand identity',
    ],
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: 2,
    title: 'Choose Your Color Palette',
    description: 'Colors evoke emotions and help your app stand out. Select colors that align with your brand and look good at small sizes.',
    tips: [
      'Use 1-3 colors maximum for clarity',
      'Ensure sufficient contrast between elements',
      'Test colors on both light and dark backgrounds',
      'Consider color psychology (blue = trust, red = energy, green = growth)',
    ],
    icon: <Palette className="h-6 w-6" />,
  },
  {
    number: 3,
    title: 'Create a Simple Shape',
    description: 'The best app icons are simple and recognizable. Start with a basic geometric shape as your foundation.',
    tips: [
      'Use a grid system for consistency (try an 8x8 or 16x16 grid)',
      'Design at 1024x1024 pixels for maximum quality',
      'Keep the main element centered with adequate padding',
      'Avoid fine lines and small text that disappear at small sizes',
    ],
    icon: <Grid3X3 className="h-6 w-6" />,
  },
  {
    number: 4,
    title: 'Add Depth and Character',
    description: 'Subtle depth and shadows can make your icon pop without overcomplicating the design.',
    tips: [
      'Use subtle gradients for a modern look',
      'Add light shadows for depth (keep them subtle)',
      'Consider a slight perspective for 3D effect',
      'Match the depth style to your platform (iOS is flatter, macOS allows more depth)',
    ],
    icon: <Layers className="h-6 w-6" />,
  },
  {
    number: 5,
    title: 'Test at Multiple Sizes',
    description: 'Your icon must work at all sizes, from 16x16 pixels in a browser tab to 1024x1024 in the App Store.',
    tips: [
      'Preview at 16px, 32px, 64px, 128px, and 1024px',
      'Ensure the icon is recognizable at 16x16 pixels',
      'Check that details remain visible at small sizes',
      'Test on actual devices when possible',
    ],
    icon: <Eye className="h-6 w-6" />,
  },
];

const mistakes = [
  {
    title: 'Too Much Detail',
    description: 'Complex designs with fine lines, gradients, and small elements become unrecognizable at small sizes.',
    solution: 'Simplify your design to its essential elements. If it\'s not recognizable at 32x32 pixels, it\'s too complex.',
  },
  {
    title: 'Using Text',
    description: 'Text becomes illegible at small sizes and different languages may require different text.',
    solution: 'Use symbols or abstract representations instead of words. Let your icon communicate visually.',
  },
  {
    title: 'Poor Contrast',
    description: 'Low contrast between elements makes your icon hard to see, especially against various wallpapers.',
    solution: 'Use high contrast colors and test your icon on light, dark, and colorful backgrounds.',
  },
  {
    title: 'Copying Competitors',
    description: 'Icons that look too similar to competitors confuse users and lack brand identity.',
    solution: 'Research competitors to understand conventions, but create something distinctly yours.',
  },
  {
    title: 'Ignoring Platform Guidelines',
    description: 'Each platform has specific requirements. Ignoring them can result in rejected app submissions.',
    solution: 'Study Apple, Google, and Microsoft design guidelines before finalizing your icon.',
  },
  {
    title: 'Inconsistent Branding',
    description: 'An icon that doesn\'t match your app\'s UI or marketing materials creates a disconnected experience.',
    solution: 'Ensure your icon uses the same colors, style, and visual language as your app.',
  },
];

const designTips = [
  {
    category: 'Shape & Composition',
    tips: [
      'Use a single focal point to draw attention',
      'Maintain visual balance - asymmetry can work but should be intentional',
      'Leave breathing room around the main element',
      'Consider the icon\'s silhouette - it should be distinctive',
    ],
  },
  {
    category: 'Color & Style',
    tips: [
      'Limit your palette to 2-3 colors for better recognition',
      'Use brand colors if you have established ones',
      'Consider accessibility - avoid problematic color combinations',
      'Gradients should be subtle and purposeful',
    ],
  },
  {
    category: 'Technical Considerations',
    tips: [
      'Design in vector format (SVG, AI) for infinite scaling',
      'Export final icons as PNG with transparency where allowed',
      'Don\'t add rounded corners for iOS - the system does this',
      'Consider maskable icons for Android adaptive icons',
    ],
  },
];

export default function HowToCreateAppIconPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create the Perfect App Icon',
    description: 'A step-by-step guide to designing professional app icons for iOS, Android, and other platforms.',
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: step.number,
    })),
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Design software (Figma, Sketch, Adobe Illustrator)',
      },
      {
        '@type': 'HowToTool',
        name: 'Best App Icon Generator',
      },
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
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              How to Create the Perfect App Icon: Complete Guide
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Your app icon is the first thing users see. It appears in app stores, on home screens,
              and in search results. A great icon can significantly impact download rates and brand
              recognition. This guide will walk you through the entire process of creating a
              professional app icon that stands out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-purple-700"
              >
                <Sparkles className="h-5 w-5" />
                Generate Icon Sizes
              </Link>
              <a
                href="#steps"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Key Principles of Great App Icons
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Grid3X3 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Simplicity</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  The best icons are instantly recognizable, even at small sizes
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Uniqueness</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Stand out from competitors while staying true to your brand
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Scalability</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Must look great from 16px to 1024px without losing clarity
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Consistency</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Align with your app&apos;s design language and brand identity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section id="steps" className="scroll-mt-20 bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Step-by-Step Guide to Creating Your App Icon
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Follow these five steps to create a professional app icon that effectively represents
              your brand and appeals to your target audience.
            </p>

            <div className="mt-8 space-y-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-600 text-lg font-bold text-white">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-gray-600 dark:text-gray-400">{step.description}</p>
                      <ul className="mt-4 space-y-2">
                        {step.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Tips */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Design Tips
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {designTips.map((category, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                  <ul className="mt-4 space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li
                        key={tipIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Common Mistakes to Avoid
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Even experienced designers can fall into these traps. Here&apos;s what to watch out for
              and how to fix it.
            </p>

            <div className="mt-8 space-y-4">
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{mistake.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{mistake.description}</p>
                      <div className="mt-3 flex items-start gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                        <p className="text-sm text-green-800 dark:text-green-300">
                          <span className="font-medium">Solution:</span> {mistake.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Specific Tips */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Platform-Specific Guidelines
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">iOS & iPadOS</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>&bull; Don&apos;t add rounded corners (system applies them)</li>
                  <li>&bull; Avoid transparency in App Store icons</li>
                  <li>&bull; Follow Human Interface Guidelines</li>
                  <li>&bull; Use flat design with subtle gradients</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Android</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>&bull; Create adaptive icons with foreground/background</li>
                  <li>&bull; Account for different mask shapes</li>
                  <li>&bull; Follow Material Design guidelines</li>
                  <li>&bull; Test with different launcher themes</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">macOS & Windows</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>&bull; More depth and shadows are acceptable</li>
                  <li>&bull; Custom shapes are common</li>
                  <li>&bull; Consider dock/taskbar appearance</li>
                  <li>&bull; Test against desktop wallpapers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Related Resources
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/app-icon-sizes"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-purple-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">App Icon Sizes Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete reference for all platforms</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600" />
              </Link>
              <Link
                href="/chrome-extension-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-purple-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Chrome Extension Icons</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generate browser extension icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Ready to Generate Your Icon Sizes?
            </h2>
            <p className="mt-4 text-lg text-purple-100">
              Once you&apos;ve designed your icon, use our free tool to generate all the sizes you need
              for every platform automatically.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg transition-all hover:bg-gray-100"
              >
                <Sparkles className="h-5 w-5" />
                Generate All Icon Sizes
              </Link>
            </div>
            <p className="mt-6 text-sm text-purple-200">
              Need help organizing your ideas? Try{' '}
              <a
                href="https://thoughtmap.space"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThoughtMap
              </a>{' '}
              for visual brainstorming.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
