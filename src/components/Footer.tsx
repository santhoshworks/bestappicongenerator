import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Best App Icon Generator
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600 dark:text-gray-400">
              The best free app icon generator for developers and designers.
              Create professional icons for iOS, Android, macOS, watchOS, and
              web apps in seconds. No signup required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/#how-it-works">How it Works</FooterLink>
              </li>
              <li>
                <FooterLink href="/#faq">FAQ</FooterLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row md:justify-between">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Best App Icon Generator. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            Made with{' '}
            <Heart
              className="h-4 w-4 fill-red-500 text-red-500"
              aria-label="love"
            />{' '}
            for developers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}
