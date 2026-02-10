import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Best App Icon Generator. Learn how we protect your privacy - your images are processed locally and we never store or collect your data.',
  alternates: {
    canonical: 'https://bestappicongenerator.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 9, 2026';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Introduction
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Best App Icon Generator (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we handle information when you
                use our free app icon generator service at bestappicongenerator.com (the
                &quot;Service&quot;).
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">
                  The short version: We don&apos;t collect, store, or share your personal data or
                  images. Everything is processed locally in your browser.
                </strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Information We Do NOT Collect
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Our Service is designed with privacy as a core principle. We do NOT collect:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Your uploaded images or icons</li>
                <li>Personal information (name, email, address)</li>
                <li>Account credentials (we don&apos;t require signup)</li>
                <li>Payment information (the service is completely free)</li>
                <li>Device fingerprints or unique identifiers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                How Your Images Are Processed
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                When you upload an image to generate app icons:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  <strong className="text-gray-900 dark:text-white">Local Processing:</strong>{' '}
                  Your images are processed entirely within your web browser. They are never
                  uploaded to our servers.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">No Storage:</strong> We do
                  not store, save, or retain any copy of your uploaded images.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">No Transmission:</strong>{' '}
                  Your images never leave your device. All icon generation happens locally.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Automatic Cleanup:</strong>{' '}
                  When you close the browser tab or navigate away, all temporary data is
                  automatically cleared.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Cookies and Tracking
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We do not use cookies for tracking purposes. The only data stored in your
                browser may include:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    Essential Functionality:
                  </strong>{' '}
                  Temporary session data required for the tool to function properly.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Preferences:</strong>{' '}
                  If you select certain platforms, this preference may be stored locally for
                  convenience.
                </li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We do not use any third-party tracking, advertising cookies, or analytics that
                collect personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Third-Party Services
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Our website may use minimal third-party services for:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  <strong className="text-gray-900 dark:text-white">Hosting:</strong> Our
                  website is hosted on secure servers. The hosting provider may collect basic
                  server logs (IP addresses, access times) for security and performance
                  purposes.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">CDN:</strong> We may use a
                  Content Delivery Network to serve static assets faster. These services do not
                  have access to your uploaded images.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Data Security
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Since we don&apos;t collect or store your data, there is no risk of data breaches
                affecting your personal information or images. Your data remains on your device
                at all times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                GDPR Compliance
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                For users in the European Union, we comply with the General Data Protection
                Regulation (GDPR). Since we don&apos;t collect personal data, the following rights
                are inherently protected:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Right to access (no data to access)</li>
                <li>Right to rectification (no data to correct)</li>
                <li>Right to erasure (no data to delete)</li>
                <li>Right to data portability (no data to transfer)</li>
                <li>Right to object (no processing to object to)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Children&apos;s Privacy
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Our Service is available to users of all ages. Since we don&apos;t collect any
                personal information, there are no special provisions needed for children&apos;s
                privacy. Parents and guardians can allow children to use our free icon generator
                without concern for data collection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Changes to This Policy
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. Any changes will be posted
                on this page with an updated revision date. We encourage you to review this
                policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy or our practices, please
                contact us at:
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                privacy@bestappicongenerator.com
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
