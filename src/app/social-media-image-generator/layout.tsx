import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Social Media Image Generator - OG Images, Twitter Cards & More',
  description:
    'Generate OG images, Twitter cards, LinkedIn images, Facebook covers, and YouTube thumbnails. Free tool creates all social media image sizes instantly. No signup required.',
  keywords: [
    'og image generator',
    'social media image sizes',
    'twitter card image',
    'open graph image generator',
    'social media image generator',
    'facebook cover generator',
    'linkedin image size',
    'youtube thumbnail generator',
    'og meta image',
  ],
  alternates: {
    canonical: 'https://bestappicongenerator.com/social-media-image-generator',
  },
  openGraph: {
    title: 'Free Social Media Image Generator',
    description: 'Generate OG images, Twitter cards, LinkedIn images, and YouTube thumbnails instantly.',
    url: 'https://bestappicongenerator.com/social-media-image-generator',
    type: 'website',
  },
};

export default function SocialMediaImageGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
