import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestappicongenerator.com"),
  title: {
    default: "Best App Icon Generator - Free Icon Maker for iOS, Android & Web",
    template: "%s | Best App Icon Generator",
  },
  description:
    "Generate professional app icons for iOS, Android, macOS, watchOS, and web apps instantly. 100% free, no signup required. Create all icon sizes in seconds with our easy-to-use icon generator.",
  keywords: [
    "app icon generator",
    "free icon maker",
    "iOS icons",
    "Android icons",
    "app icon creator",
    "icon resizer",
    "app store icon",
    "play store icon",
    "favicon generator",
    "PWA icons",
    "macOS app icon",
    "watchOS icon",
    "app icon sizes",
    "icon generator online",
    "free app icon maker",
  ],
  authors: [{ name: "Best App Icon Generator" }],
  creator: "Best App Icon Generator",
  publisher: "Best App Icon Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestappicongenerator.com",
    siteName: "Best App Icon Generator",
    title: "Best App Icon Generator - Free Icon Maker for iOS, Android & Web",
    description:
      "Generate professional app icons for iOS, Android, macOS, watchOS, and web apps instantly. 100% free, no signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Best App Icon Generator - Create App Icons for All Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best App Icon Generator - Free Icon Maker for iOS, Android & Web",
    description:
      "Generate professional app icons for iOS, Android, macOS, watchOS, and web apps instantly. 100% free, no signup required.",
    images: ["/og-image.png"],
    creator: "@bestappicongenerator",
  },
  alternates: {
    canonical: "https://bestappicongenerator.com",
  },
  category: "Technology",
  classification: "Developer Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Best App Icon Generator",
    description:
      "Generate professional app icons for iOS, Android, macOS, watchOS, and web apps instantly. 100% free, no signup required.",
    url: "https://bestappicongenerator.com",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "iOS App Icon Generation",
      "Android App Icon Generation",
      "macOS App Icon Generation",
      "watchOS App Icon Generation",
      "Favicon Generation",
      "PWA Icon Generation",
      "No Signup Required",
      "Instant Download",
      "All Icon Sizes Included",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best App Icon Generator",
    url: "https://bestappicongenerator.com",
    logo: "https://bestappicongenerator.com/logo.png",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Best App Icon Generator",
    url: "https://bestappicongenerator.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bestappicongenerator.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
