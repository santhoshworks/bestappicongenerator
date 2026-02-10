import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free iOS App Icon Generator - iPhone & iPad Icon Maker | Best App Icon Generator',
  description:
    'Generate all required iOS app icon sizes for iPhone, iPad, and App Store instantly. Free online iOS icon maker creates 15+ sizes including 1024x1024 App Store icon. No signup required.',
  keywords: [
    'ios app icon generator',
    'iphone app icon maker',
    'app store icon generator',
    'ios icon sizes',
    'iphone icon generator',
    'ipad app icon',
    'apple app icon maker',
    'ios app icon sizes',
    'free ios icon generator',
    'xcode app icon',
    'app store icon size',
    'iphone app icon size',
  ],
  openGraph: {
    title: 'Free iOS App Icon Generator - Create All iPhone & iPad Icon Sizes',
    description:
      'Generate all required iOS app icon sizes for iPhone, iPad, and App Store instantly. 100% free, no signup required.',
    url: 'https://bestappicongenerator.com/ios-app-icon-generator',
    siteName: 'Best App Icon Generator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'iOS App Icon Generator - Create iPhone and iPad Icons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free iOS App Icon Generator - iPhone & iPad Icon Maker',
    description:
      'Generate all iOS app icon sizes instantly. Free online tool for iPhone, iPad, and App Store icons.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bestappicongenerator.com/ios-app-icon-generator',
  },
};

export default function IOSAppIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
