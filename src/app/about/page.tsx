import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Smartphone,
  Globe,
  Monitor,
  Watch,
  Chrome,
  Zap,
  Shield,
  Heart,
  Code,
  Users,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Best App Icon Generator - the free tool that helps developers and designers create professional app icons for iOS, Android, macOS, and web platforms.',
  alternates: {
    canonical: 'https://bestappicongenerator.com/about',
  },
};

export default function AboutPage() {
  const platforms = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: 'iOS',
      description: 'iPhone, iPad, App Store (1024px)',
      sizes: '15+ icon sizes',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: 'Android',
      description: 'Play Store, Adaptive Icons',
      sizes: '7 mipmap densities',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: 'Web / Favicon',
      description: 'Favicon, Apple Touch Icons, MS Tiles',
      sizes: '14+ icon sizes',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: 'PWA',
      description: 'Progressive Web App Manifest',
      sizes: '9 icon sizes',
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      name: 'macOS',
      description: 'Mac App Store, Dock Icons',
      sizes: '13 icon sizes',
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      name: 'Windows',
      description: 'Windows Store, Desktop',
      sizes: '13 icon sizes',
    },
    {
      icon: <Watch className="h-6 w-6" />,
      name: 'watchOS',
      description: 'Apple Watch Apps',
      sizes: '10 icon sizes',
    },
    {
      icon: <Chrome className="h-6 w-6" />,
      name: 'Chrome Extension',
      description: 'Browser Extensions',
      sizes: '4 icon sizes',
    },
    {
      icon: <Code className="h-6 w-6" />,
      name: 'VS Code Extension',
      description: 'Marketplace Icons',
      sizes: '2 icon sizes',
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Save Hours of Work',
      description:
        'Manually creating dozens of icon sizes for each platform is tedious. Our tool generates all sizes instantly, letting you focus on designing your app.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'No Quality Compromise',
      description:
        'We use high-quality image processing to ensure your icons look crisp at every size. Start with a 1024px image for the best results.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Built for Developers',
      description:
        'We understand the developer workflow. Icons are organized by platform with proper naming conventions, ready to drop into your project.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Driven',
      description:
        'We listen to feedback and regularly add support for new platforms and sizes. Have a suggestion? Let us know!',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              About Best App Icon Generator
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              A free, privacy-focused tool built by developers for developers. Generate
              professional app icons for all platforms without hassle, signup, or cost.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We Do
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Best App Icon Generator is a comprehensive icon generation tool that creates all
                the icon sizes you need for your mobile apps, desktop applications, web projects,
                and browser extensions.
              </p>
              <p>
                Simply upload a single high-resolution image (we recommend 1024x1024 pixels),
                select your target platforms, and download a neatly organized ZIP file containing
                all the icons you need. It&apos;s that simple.
              </p>
              <p>
                Whether you&apos;re building an iOS app, an Android app, a Progressive Web App, a
                Chrome extension, or a VS Code extension, we&apos;ve got you covered with the exact
                icon sizes required by each platform&apos;s guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Why It's Free Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why It&apos;s Free
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                We believe essential developer tools should be accessible to everyone. Creating
                app icons shouldn&apos;t be a barrier to launching your project, whether you&apos;re a
                solo developer working on your first app or a team at a large company.
              </p>
              <p>
                By keeping the tool free and processing everything in your browser, we eliminate
                server costs and can offer this service indefinitely. Your privacy is also
                protected since your images never leave your device.
              </p>
              <p>
                We&apos;re developers who were frustrated with existing tools that either charge
                excessive fees, require signups, or upload your images to unknown servers. We
                built the tool we wished existed.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Benefits for Developers
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Supported Platforms
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
              We support all major app platforms with the exact icon sizes required by each
              platform&apos;s guidelines.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {platform.description}
                    </p>
                    <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
                      {platform.sizes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built by ThoughtMap Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Built by ThoughtMap
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Best App Icon Generator is built and maintained by the team at{' '}
                <a
                  href="https://thoughtmap.space"
                  rel="dofollow"
                  className="font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  ThoughtMap
                </a>
                . We&apos;re passionate about creating tools that make developers&apos; lives easier.
              </p>
              <p>
                This is a free tool for the developer community. We believe that essential
                development utilities should be accessible to everyone, regardless of budget.
                By offering this tool at no cost, we hope to help indie developers, startups,
                and teams of all sizes ship their apps faster.
              </p>
              <p>
                At ThoughtMap, we&apos;re building a suite of developer-focused tools and resources.
                If you find this tool helpful, check out our other projects and let us know
                what you&apos;d like us to build next!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Generate Your Icons?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Start creating professional app icons in seconds. No signup required.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
            >
              <Sparkles className="h-5 w-5" />
              Start Generating Icons
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
