import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Best App Icon Generator. Read our terms for using our free app icon generator tool.',
  alternates: {
    canonical: 'https://bestappicongenerator.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'February 9, 2026';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                By accessing or using Best App Icon Generator (&quot;the Service&quot;) at
                bestappicongenerator.com, you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                2. Description of Service
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Best App Icon Generator is a free online tool that allows users to generate app
                icons for various platforms including iOS, Android, macOS, watchOS, web, and
                browser extensions. The Service processes images locally in your browser and
                provides downloadable icon packages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                3. Free Service
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                The Service is provided free of charge. We do not require registration, payment,
                or subscription to use any features of the Service. We reserve the right to
                introduce premium features in the future, but the core icon generation
                functionality will remain free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                4. Image Ownership and Rights
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Your Content:</strong> You
                retain full ownership of all images you upload and all icons generated from
                those images. We do not claim any rights to your content.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Your Responsibility:</strong>{' '}
                You represent and warrant that:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>
                  You own or have the necessary rights to use any images you upload to the
                  Service.
                </li>
                <li>
                  Your images do not infringe on the intellectual property rights of any third
                  party.
                </li>
                <li>
                  Your images do not contain illegal, offensive, or harmful content.
                </li>
                <li>
                  You have the right to use the generated icons for your intended purpose.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                5. Acceptable Use
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                You agree not to use the Service to:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Generate icons from images you don&apos;t have rights to use</li>
                <li>
                  Create icons that infringe on trademarks, copyrights, or other intellectual
                  property rights
                </li>
                <li>
                  Generate icons containing illegal, harmful, threatening, abusive, harassing,
                  defamatory, or otherwise objectionable content
                </li>
                <li>
                  Attempt to reverse engineer, decompile, or disassemble the Service
                </li>
                <li>
                  Use automated systems or scripts to access the Service in a manner that
                  impacts its performance or availability
                </li>
                <li>
                  Misrepresent your affiliation with any person or entity
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                6. Commercial Use
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                You are permitted to use the icons generated by the Service for both personal
                and commercial purposes, provided you have the rights to the source images. This
                includes:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Mobile applications (iOS, Android)</li>
                <li>Desktop applications (macOS, Windows)</li>
                <li>Web applications and websites</li>
                <li>Browser extensions</li>
                <li>App store listings</li>
                <li>Marketing materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                7. Disclaimer of Warranties
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT</li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We do not warrant that the Service will be uninterrupted, error-free, or free of
                viruses or other harmful components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                8. Limitation of Liability
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BEST APP ICON GENERATOR AND ITS
                OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="mt-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Loss of profits or revenue</li>
                <li>Loss of data</li>
                <li>Business interruption</li>
                <li>Any other commercial damages or losses</li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                This limitation applies regardless of the theory of liability (contract, tort,
                or otherwise) and even if we have been advised of the possibility of such
                damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                9. Indemnification
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                You agree to indemnify and hold harmless Best App Icon Generator, its operators,
                and affiliates from any claims, damages, losses, or expenses (including
                reasonable attorney&apos;s fees) arising from your use of the Service or violation
                of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                10. Service Modifications
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We reserve the right to modify, suspend, or discontinue the Service (or any part
                thereof) at any time, with or without notice. We shall not be liable to you or
                any third party for any modification, suspension, or discontinuation of the
                Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                11. Changes to Terms
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We may update these Terms from time to time. We will notify users of any
                material changes by posting the new Terms on this page and updating the &quot;Last
                updated&quot; date. Your continued use of the Service after any changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                12. Governing Law
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                These Terms shall be governed by and construed in accordance with the laws of
                the jurisdiction in which the Service operates, without regard to its conflict
                of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                13. Severability
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                If any provision of these Terms is found to be unenforceable or invalid, that
                provision shall be limited or eliminated to the minimum extent necessary so that
                these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                14. Contact Information
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                legal@bestappicongenerator.com
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
