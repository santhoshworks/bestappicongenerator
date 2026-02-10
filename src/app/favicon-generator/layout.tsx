import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Favicon Generator from Image - ICO & PNG Maker | Best App Icon Generator',
  description:
    'Generate favicons from any image including ICO files, PNG icons, Apple Touch icons, and Windows tiles instantly. Free online favicon generator for websites. No signup required.',
  keywords: [
    'favicon generator',
    'favicon from image',
    'ico generator',
    'website icon maker',
    'favicon maker',
    'create favicon',
    'favicon creator',
    'apple touch icon generator',
    'favicon ico',
    'free favicon generator',
    'favicon sizes',
    'browser icon maker',
  ],
  openGraph: {
    title: 'Free Favicon Generator from Image - ICO & PNG Maker',
    description:
      'Generate favicons from any image including ICO files and all favicon sizes instantly. 100% free, no signup required.',
    url: 'https://bestappicongenerator.com/favicon-generator',
    siteName: 'Best App Icon Generator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Favicon Generator - Create ICO and PNG Favicons from Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Favicon Generator from Image - ICO Maker',
    description:
      'Generate favicons from any image instantly. Free online tool creates ICO files and all favicon sizes.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bestappicongenerator.com/favicon-generator',
  },
};

export default function FaviconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
