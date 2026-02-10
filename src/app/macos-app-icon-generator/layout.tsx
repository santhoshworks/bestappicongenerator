import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free macOS App Icon Generator - Mac App Icon Maker | Best App Icon Generator',
  description:
    'Generate all required macOS app icon sizes for Mac App Store and dock instantly. Free online Mac app icon maker creates ICNS-ready icons with @2x Retina support. No signup required.',
  keywords: [
    'macos app icon generator',
    'mac app icon maker',
    'icns generator',
    'mac icon sizes',
    'macos icon generator',
    'mac app store icon',
    'retina icon generator',
    'mac dock icon',
    'free mac icon maker',
    'xcode mac icon',
    'iconset generator',
    'apple mac icon',
  ],
  openGraph: {
    title: 'Free macOS App Icon Generator - Mac App Icon Maker',
    description:
      'Generate all required macOS app icon sizes for Mac App Store and dock instantly. 100% free, no signup required.',
    url: 'https://bestappicongenerator.com/macos-app-icon-generator',
    siteName: 'Best App Icon Generator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'macOS App Icon Generator - Create Mac App Store and Dock Icons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free macOS App Icon Generator - ICNS Maker',
    description:
      'Generate all macOS app icon sizes instantly. Free online tool for Mac App Store and dock icons.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bestappicongenerator.com/macos-app-icon-generator',
  },
};

export default function MacOSAppIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
