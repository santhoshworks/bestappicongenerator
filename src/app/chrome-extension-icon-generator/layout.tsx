import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Chrome Extension Icon Generator - All Required Sizes',
  description:
    'Generate all required icon sizes for Chrome, Firefox, and Edge browser extensions. Free tool creates 16x16, 32x32, 48x48, and 128x128 icons instantly. No signup required.',
  keywords: [
    'chrome extension icon',
    'chrome extension icon generator',
    'browser extension icon sizes',
    'firefox extension icon',
    'edge extension icon',
    'extension icon maker',
    'chrome web store icon',
    'manifest.json icons',
  ],
  alternates: {
    canonical: 'https://bestappicongenerator.com/chrome-extension-icon-generator',
  },
  openGraph: {
    title: 'Free Chrome Extension Icon Generator',
    description: 'Generate all required icon sizes for Chrome, Firefox, and Edge browser extensions instantly.',
    url: 'https://bestappicongenerator.com/chrome-extension-icon-generator',
    type: 'website',
  },
};

export default function ChromeExtensionIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
