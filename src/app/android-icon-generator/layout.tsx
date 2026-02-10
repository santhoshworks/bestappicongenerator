import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Android App Icon Generator - Play Store & Adaptive Icon Maker | Best App Icon Generator',
  description:
    'Generate all required Android app icon sizes for Play Store and mipmap folders instantly. Free online Android icon maker creates adaptive icons and all density sizes. No signup required.',
  keywords: [
    'android app icon generator',
    'play store icon maker',
    'android adaptive icon',
    'android icon sizes',
    'mipmap icon generator',
    'android launcher icon',
    'play store icon size',
    'android app icon size',
    'free android icon generator',
    'android studio icon',
    'adaptive icon generator',
    'google play icon',
  ],
  openGraph: {
    title: 'Free Android App Icon Generator - Play Store & Adaptive Icons',
    description:
      'Generate all required Android app icon sizes for Play Store and mipmap folders instantly. 100% free, no signup required.',
    url: 'https://bestappicongenerator.com/android-icon-generator',
    siteName: 'Best App Icon Generator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Android App Icon Generator - Create Play Store and Adaptive Icons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Android App Icon Generator - Play Store Icon Maker',
    description:
      'Generate all Android app icon sizes instantly. Free online tool for Play Store and adaptive icons.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bestappicongenerator.com/android-icon-generator',
  },
};

export default function AndroidIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
