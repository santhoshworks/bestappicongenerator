import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Windows App Icon Generator - Desktop & Microsoft Store Icons',
  description:
    'Generate all required icon sizes for Windows desktop applications and Microsoft Store apps. Free tool creates ICO-ready PNG files from 16x16 to 310x310. No signup required.',
  keywords: [
    'windows app icon generator',
    'windows store icon',
    'ico file generator',
    'windows icon maker',
    'microsoft store icon',
    'windows desktop icon',
    'uwp app icon',
    'windows tile generator',
    'ico converter',
  ],
  alternates: {
    canonical: 'https://bestappicongenerator.com/windows-app-icon-generator',
  },
  openGraph: {
    title: 'Free Windows App Icon Generator',
    description: 'Generate all required icon sizes for Windows desktop applications and Microsoft Store apps instantly.',
    url: 'https://bestappicongenerator.com/windows-app-icon-generator',
    type: 'website',
  },
};

export default function WindowsAppIconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
