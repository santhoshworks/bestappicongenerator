import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App Icon Design Tips & Tutorials',
  description:
    'Learn how to create stunning app icons with our expert tips, tutorials, and best practices for iOS, Android, and web platforms.',
  alternates: {
    canonical: 'https://bestappicongenerator.com/blog',
  },
  openGraph: {
    title: 'App Icon Design Tips & Tutorials | Best App Icon Generator',
    description:
      'Learn how to create stunning app icons with our expert tips, tutorials, and best practices for iOS, Android, and web platforms.',
    url: 'https://bestappicongenerator.com/blog',
    type: 'website',
  },
};

// Placeholder articles for future content
const upcomingArticles = [
  {
    title: 'iOS App Icon Design Guidelines for 2024',
    description:
      'Learn the essential design principles and technical requirements for creating stunning iOS app icons.',
    category: 'iOS',
    comingSoon: true,
  },
  {
    title: 'Android Adaptive Icons: A Complete Guide',
    description:
      'Master the art of creating adaptive icons that look great on all Android devices and launchers.',
    category: 'Android',
    comingSoon: true,
  },
  {
    title: 'Favicon Best Practices for Modern Websites',
    description:
      'Everything you need to know about favicons, touch icons, and browser compatibility.',
    category: 'Web',
    comingSoon: true,
  },
  {
    title: 'PWA Icons: Sizes, Formats, and Manifest Configuration',
    description:
      'A complete guide to Progressive Web App icons and how to configure them properly.',
    category: 'PWA',
    comingSoon: true,
  },
  {
    title: 'Color Theory for App Icons',
    description:
      'How to choose the right colors for your app icon to stand out in the app store.',
    category: 'Design',
    comingSoon: true,
  },
  {
    title: 'Common App Icon Mistakes to Avoid',
    description:
      'Learn from common mistakes developers make when designing app icons and how to avoid them.',
    category: 'Tips',
    comingSoon: true,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              App Icon Design Tips & Tutorials
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Learn how to create stunning app icons with our expert tips, tutorials,
              and best practices for iOS, Android, macOS, and web platforms.
            </p>
          </div>
        </section>

        {/* Coming Soon Articles */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Upcoming Articles
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We&apos;re working on comprehensive guides to help you create the perfect app icons.
                Check back soon!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingArticles.map((article, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                >
                  <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {article.description}
                  </p>
                  {article.comingSoon && (
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      Coming Soon
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Create Your App Icons?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              While you wait for our tutorials, try our free icon generator to create
              professional app icons in seconds.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
            >
              <Sparkles className="h-5 w-5" />
              Generate Icons Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
