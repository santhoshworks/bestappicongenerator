import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free PWA Icon Generator - Progressive Web App Icons | Best App Icon Generator',
  description:
    'Generate all required PWA icon sizes for web app manifest instantly. Free online Progressive Web App icon maker creates maskable icons and all manifest sizes. No signup required.',
  keywords: [
    'pwa icon generator',
    'progressive web app icons',
    'web app manifest icons',
    'pwa manifest generator',
    'maskable icon generator',
    'pwa icon sizes',
    'web app icon maker',
    'manifest.json icons',
    'free pwa icons',
    'installable web app icons',
    'pwa 512x512',
    'pwa 192x192',
  ],
  openGraph: {
    title: 'Free PWA Icon Generator - Progressive Web App Icons',
    description:
      'Generate all required PWA icon sizes for web app manifest instantly. 100% free, no signup required.',
    url: 'https://bestappicongenerator.com/pwa-icon-generator',
    siteName: 'Best App Icon Generator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PWA Icon Generator - Create Progressive Web App Icons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PWA Icon Generator - Web App Manifest Icons',
    description:
      'Generate all PWA manifest icon sizes instantly. Free online tool for Progressive Web App icons.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bestappicongenerator.com/pwa-icon-generator',
  },
};

export default function PWAIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
