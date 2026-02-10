import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Smartphone,
  Monitor,
  Globe,
  Watch,
  Chrome,
  ArrowRight,
  Info,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to App Icon Sizes for All Platforms (2025)',
  description:
    'Comprehensive reference guide for app icon sizes across iOS, Android, macOS, Windows, and web platforms. Learn the exact dimensions required for App Store, Play Store, and more.',
  keywords: [
    'app icon sizes',
    'ios icon dimensions',
    'android icon dimensions',
    'app store icon size',
    'play store icon size',
    'ios app icon sizes',
    'android app icon sizes',
    'macOS icon sizes',
    'windows icon sizes',
    'favicon sizes',
    'pwa icon sizes',
  ],
  alternates: {
    canonical: 'https://bestappicongenerator.com/app-icon-sizes',
  },
  openGraph: {
    title: 'Complete Guide to App Icon Sizes for All Platforms',
    description: 'Comprehensive reference guide for app icon sizes across iOS, Android, macOS, Windows, and web platforms.',
    url: 'https://bestappicongenerator.com/app-icon-sizes',
    type: 'article',
  },
};

interface IconSizeRow {
  name: string;
  size: string;
  usage: string;
  scale?: string;
}

interface PlatformSection {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  sizes: IconSizeRow[];
  notes?: string[];
}

const platformSections: PlatformSection[] = [
  {
    id: 'ios',
    name: 'iOS (iPhone & iPad)',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Apple requires multiple icon sizes for different device types and contexts within iOS apps.',
    sizes: [
      { name: 'App Store', size: '1024 x 1024', usage: 'App Store listing', scale: '@1x' },
      { name: 'iPhone App', size: '180 x 180', usage: 'Home screen (iPhone)', scale: '@3x' },
      { name: 'iPhone App', size: '120 x 120', usage: 'Home screen (iPhone)', scale: '@2x' },
      { name: 'iPad Pro App', size: '167 x 167', usage: 'Home screen (iPad Pro)', scale: '@2x' },
      { name: 'iPad App', size: '152 x 152', usage: 'Home screen (iPad)', scale: '@2x' },
      { name: 'Spotlight', size: '120 x 120', usage: 'Search results', scale: '@3x' },
      { name: 'Spotlight', size: '80 x 80', usage: 'Search results', scale: '@2x' },
      { name: 'Spotlight', size: '40 x 40', usage: 'Search results', scale: '@1x' },
      { name: 'Settings', size: '87 x 87', usage: 'Settings app', scale: '@3x' },
      { name: 'Settings', size: '58 x 58', usage: 'Settings app', scale: '@2x' },
      { name: 'Settings', size: '29 x 29', usage: 'Settings app', scale: '@1x' },
      { name: 'Notification', size: '60 x 60', usage: 'Notifications', scale: '@3x' },
      { name: 'Notification', size: '40 x 40', usage: 'Notifications', scale: '@2x' },
      { name: 'Notification', size: '20 x 20', usage: 'Notifications', scale: '@1x' },
    ],
    notes: [
      'Always start with a 1024x1024 pixel source image for best quality',
      'iOS icons should not include rounded corners - the system applies them automatically',
      'Avoid transparency in App Store icons',
    ],
  },
  {
    id: 'android',
    name: 'Android (Google Play)',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Android uses density-independent pixels (dp) with multiple density buckets for different screen densities.',
    sizes: [
      { name: 'Play Store', size: '512 x 512', usage: 'Google Play Store listing' },
      { name: 'xxxhdpi', size: '192 x 192', usage: 'Very high density screens', scale: '4x' },
      { name: 'xxhdpi', size: '144 x 144', usage: 'Extra high density screens', scale: '3x' },
      { name: 'xhdpi', size: '96 x 96', usage: 'High density screens', scale: '2x' },
      { name: 'hdpi', size: '72 x 72', usage: 'Medium-high density screens', scale: '1.5x' },
      { name: 'mdpi', size: '48 x 48', usage: 'Medium density screens', scale: '1x (baseline)' },
      { name: 'ldpi', size: '36 x 36', usage: 'Low density screens', scale: '0.75x' },
    ],
    notes: [
      'Adaptive icons (introduced in Android 8.0) use foreground and background layers',
      'The Play Store icon should be a full-bleed square image',
      'Consider using Android Asset Studio for adaptive icon creation',
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: <Monitor className="h-6 w-6" />,
    description: 'macOS app icons support multiple sizes with @1x and @2x Retina variants.',
    sizes: [
      { name: 'App Store', size: '1024 x 1024', usage: 'Mac App Store', scale: '@1x' },
      { name: 'icon_512x512', size: '1024 x 1024', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_512x512', size: '512 x 512', usage: 'Finder', scale: '@1x' },
      { name: 'icon_256x256', size: '512 x 512', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_256x256', size: '256 x 256', usage: 'Finder', scale: '@1x' },
      { name: 'icon_128x128', size: '256 x 256', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_128x128', size: '128 x 128', usage: 'Finder', scale: '@1x' },
      { name: 'icon_64x64', size: '128 x 128', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_64x64', size: '64 x 64', usage: 'Finder', scale: '@1x' },
      { name: 'icon_32x32', size: '64 x 64', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_32x32', size: '32 x 32', usage: 'Finder', scale: '@1x' },
      { name: 'icon_16x16', size: '32 x 32', usage: 'Retina Finder', scale: '@2x' },
      { name: 'icon_16x16', size: '16 x 16', usage: 'Menu bar, Finder', scale: '@1x' },
    ],
    notes: [
      'macOS icons are stored in .icns format containing all sizes',
      'Icons can include subtle shadows and depth',
      'The shape can be custom - not required to be a rounded square',
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    icon: <Monitor className="h-6 w-6" />,
    description: 'Windows apps require various tile and icon sizes for the Start menu, taskbar, and Microsoft Store.',
    sizes: [
      { name: 'Square310x310Logo', size: '310 x 310', usage: 'Large tile' },
      { name: 'Wide310x150Logo', size: '310 x 150', usage: 'Wide tile' },
      { name: 'Square150x150Logo', size: '150 x 150', usage: 'Medium tile' },
      { name: 'Square71x71Logo', size: '71 x 71', usage: 'Small tile' },
      { name: 'StoreLogo', size: '50 x 50', usage: 'Microsoft Store' },
      { name: 'Square44x44Logo', size: '44 x 44', usage: 'App list' },
      { name: 'Desktop Icon', size: '256 x 256', usage: 'Desktop shortcut' },
      { name: 'Desktop Icon', size: '128 x 128', usage: 'Large icons view' },
      { name: 'Desktop Icon', size: '64 x 64', usage: 'Medium icons view' },
      { name: 'Desktop Icon', size: '48 x 48', usage: 'Tiles view' },
      { name: 'Desktop Icon', size: '32 x 32', usage: 'Small icons view' },
      { name: 'Desktop Icon', size: '24 x 24', usage: 'Extra small icons' },
      { name: 'Desktop Icon', size: '16 x 16', usage: 'List view, taskbar' },
    ],
    notes: [
      'ICO format can contain multiple sizes in a single file',
      'Consider high DPI scaling for modern displays',
      'Live tiles can display dynamic content beyond static icons',
    ],
  },
  {
    id: 'web',
    name: 'Web (Favicon & PWA)',
    icon: <Globe className="h-6 w-6" />,
    description: 'Websites require favicons for browser tabs and PWA icons for installable web apps.',
    sizes: [
      { name: 'PWA Icon', size: '512 x 512', usage: 'PWA splash screens, install prompts' },
      { name: 'PWA Icon', size: '384 x 384', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '256 x 256', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '192 x 192', usage: 'Android home screen, PWA manifest' },
      { name: 'Apple Touch Icon', size: '180 x 180', usage: 'iOS home screen shortcut' },
      { name: 'MS Tile', size: '150 x 150', usage: 'Windows tiles' },
      { name: 'PWA Icon', size: '144 x 144', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '128 x 128', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '96 x 96', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '72 x 72', usage: 'PWA manifest' },
      { name: 'PWA Icon', size: '48 x 48', usage: 'PWA manifest' },
      { name: 'Favicon', size: '32 x 32', usage: 'Browser tab (standard)' },
      { name: 'Favicon', size: '16 x 16', usage: 'Browser tab (legacy)' },
    ],
    notes: [
      'Use PNG format for best quality, SVG for scalability',
      'ICO format (favicon.ico) should contain 16x16, 32x32, and 48x48 sizes',
      'PWA icons should be maskable for adaptive display on different platforms',
    ],
  },
  {
    id: 'watchos',
    name: 'watchOS (Apple Watch)',
    icon: <Watch className="h-6 w-6" />,
    description: 'Apple Watch apps require specific icon sizes for different watch models and contexts.',
    sizes: [
      { name: 'App Store', size: '1024 x 1024', usage: 'Watch App Store' },
      { name: 'Watch App', size: '196 x 196', usage: '44mm watch face' },
      { name: 'Watch App', size: '172 x 172', usage: '40mm watch face' },
      { name: 'Home Screen', size: '100 x 100', usage: '44mm home screen' },
      { name: 'Home Screen', size: '88 x 88', usage: '40mm home screen' },
      { name: 'Notification', size: '87 x 87', usage: '44mm notifications' },
      { name: 'Notification', size: '80 x 80', usage: '40mm notifications' },
      { name: 'Short Look', size: '58 x 58', usage: 'Short look notifications' },
      { name: 'Settings', size: '55 x 55', usage: 'Watch settings' },
      { name: 'Companion', size: '48 x 48', usage: 'iPhone companion app' },
    ],
    notes: [
      'watchOS icons should be simple and recognizable at small sizes',
      'Circular icons work best for watch complications',
      'Avoid fine details that may be lost on small displays',
    ],
  },
  {
    id: 'chrome',
    name: 'Chrome Extension',
    icon: <Chrome className="h-6 w-6" />,
    description: 'Browser extensions require specific icon sizes for the toolbar, extension page, and Chrome Web Store.',
    sizes: [
      { name: 'Store Icon', size: '128 x 128', usage: 'Chrome Web Store, extensions page' },
      { name: 'Toolbar Icon', size: '48 x 48', usage: 'Extensions menu' },
      { name: 'Toolbar Icon', size: '32 x 32', usage: 'Windows taskbar' },
      { name: 'Toolbar Icon', size: '16 x 16', usage: 'Favicon, extension toolbar' },
    ],
    notes: [
      'Toolbar icons should be recognizable at 16x16 pixels',
      'Use PNG format with transparency for best results',
      'The 128x128 icon is also used for installation prompts',
    ],
  },
];

export default function AppIconSizesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to App Icon Sizes for All Platforms',
    description: 'Comprehensive reference guide for app icon sizes across iOS, Android, macOS, Windows, and web platforms.',
    author: {
      '@type': 'Organization',
      name: 'Best App Icon Generator',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Best App Icon Generator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bestappicongenerator.com/logo.png',
      },
    },
    datePublished: '2024-01-15',
    dateModified: '2025-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://bestappicongenerator.com/app-icon-sizes',
    },
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
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Complete Guide to App Icon Sizes for All Platforms
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Creating app icons for multiple platforms can be overwhelming. Each platform has specific
              requirements for icon dimensions, and missing even one size can cause your app to display
              incorrectly. This comprehensive guide covers all the icon sizes you need for iOS, Android,
              macOS, Windows, web, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-700"
              >
                <Sparkles className="h-5 w-5" />
                Generate All Sizes Automatically
              </Link>
              <a
                href="#ios"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              >
                Jump to iOS Sizes
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="border-b border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Navigation</h2>
            <div className="flex flex-wrap gap-3">
              {platformSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                >
                  {section.icon}
                  {section.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why App Icon Sizes Matter
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                App icons are displayed in many different contexts across devices - from tiny 16x16 pixel
                favicons in browser tabs to large 1024x1024 pixel images in app stores. Each context
                requires a specific size to ensure your icon looks crisp and professional.
              </p>
              <p>
                Using incorrectly sized icons can result in blurry images, distorted proportions, or
                rejected app submissions. Platform guidelines are strict about icon dimensions, and
                meeting these requirements is essential for app store approval.
              </p>
              <p>
                The good news is that with a high-quality source image (we recommend starting with
                1024x1024 pixels), you can automatically generate all the sizes you need using our{' '}
                <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
                  free app icon generator
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Sections */}
        {platformSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 border-t border-gray-200 py-12 dark:border-gray-800"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.name} Icon Sizes
                </h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{section.description}</p>

              {/* Size Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Icon Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Size (px)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Usage
                      </th>
                      {section.sizes.some((s) => s.scale) && (
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Scale
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {section.sizes.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {size.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                            {size.size}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {size.usage}
                        </td>
                        {section.sizes.some((s) => s.scale) && (
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                            {size.scale || '-'}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              {section.notes && section.notes.length > 0 && (
                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-200">
                        Important Notes for {section.name}
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-blue-800 dark:text-blue-300">
                        {section.notes.map((note, index) => (
                          <li key={index}>&bull; {note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Best Practices */}
        <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Icon Design Best Practices
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Start Large</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Always design at 1024x1024 pixels or larger. This ensures you have enough detail
                  to scale down without losing quality.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Keep It Simple</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Complex details get lost at smaller sizes. Use bold shapes and limited colors
                  for better recognition.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Test at All Sizes</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Preview your icon at 16x16, 32x32, and 1024x1024 to ensure it looks good
                  across all contexts.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Follow Platform Guidelines</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Each platform has specific design guidelines. iOS prefers flat design while
                  macOS allows more depth and shadows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-gray-200 py-12 dark:border-gray-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Related Resources
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/how-to-create-app-icon"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">How to Create an App Icon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Step-by-step design guide</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </Link>
              <Link
                href="/chrome-extension-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Chrome Extension Icons</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generate browser extension icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </Link>
              <Link
                href="/windows-app-icon-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Windows Icon Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create Windows app icons</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </Link>
              <Link
                href="/social-media-image-generator"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Social Media Images</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">OG images and Twitter cards</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Generate All Icon Sizes Automatically
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Skip the manual resizing. Upload one image and get all the sizes you need for any platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-100"
              >
                <Sparkles className="h-5 w-5" />
                Start Generating Icons
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              Looking for more productivity tools? Check out{' '}
              <a
                href="https://thoughtmap.space"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ThoughtMap
              </a>{' '}
              for AI-powered mind mapping.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
