'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader, { type ImageInfo } from '@/components/ImageUploader';
import PlatformSelector from '@/components/PlatformSelector';
import GenerateButton from '@/components/GenerateButton';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  Monitor,
  Watch,
  Chrome,
  DollarSign,
  UserX,
  Clock,
  ChevronDown,
  ChevronUp,
  Upload,
  MousePointer,
  Download,
  CheckCircle2
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this app icon generator really free?",
    answer: "Yes, 100% free! There are no hidden charges, no premium plans, and no signup required. We built this tool to help developers and designers create professional app icons without any cost."
  },
  {
    question: "What image formats are supported for upload?",
    answer: "You can upload PNG, JPG, JPEG, WebP, and SVG files. For best results, we recommend using a square image of at least 1024x1024 pixels to ensure high-quality icons across all platforms."
  },
  {
    question: "Which platforms are supported for icon generation?",
    answer: "We support all major platforms including iOS (App Store, iPhone, iPad), Android (Play Store, adaptive icons), macOS, Windows, watchOS (Apple Watch), PWA (Progressive Web Apps), Chrome Extensions, VS Code Extensions, and even social media assets."
  },
  {
    question: "Are my images stored on your servers?",
    answer: "No, your images are processed entirely in your browser. We never store, collect, or have access to your images. Your data stays private and secure on your device."
  },
  {
    question: "What sizes are included in the download?",
    answer: "Each platform includes all the required icon sizes. For example, iOS includes 15+ sizes from 20px to 1024px, Android includes all mipmap densities, and web includes favicons, Apple Touch icons, and PWA manifest icons."
  },
  {
    question: "Can I use the generated icons commercially?",
    answer: "Absolutely! You retain full ownership of your original image and all generated icons. You can use them for personal or commercial projects without any attribution required."
  },
  {
    question: "Do I need to install any software?",
    answer: "No installation required. Our app icon generator works entirely in your web browser. Just upload your image, select your platforms, and download your icons instantly."
  },
  {
    question: "What's the recommended source image size?",
    answer: "For the best quality across all platforms, we recommend starting with a 1024x1024 pixel image. This ensures your icons look crisp and professional even at larger sizes."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our free app icon generator
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'ios',
    'android',
    'web',
  ]);

  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "100% Free",
      description: "No hidden costs, no premium plans. Generate unlimited icons for all your projects."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Generate all icon sizes in seconds. No waiting, no queues, instant downloads."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy First",
      description: "Your images never leave your browser. Zero data collection, complete privacy."
    },
    {
      icon: <UserX className="h-6 w-6" />,
      title: "No Signup Required",
      description: "Start generating icons immediately. No account, no email, no hassle."
    }
  ];

  const platforms = [
    { icon: <Smartphone className="h-8 w-8" />, name: "iOS", description: "iPhone, iPad, App Store" },
    { icon: <Smartphone className="h-8 w-8" />, name: "Android", description: "Play Store, Adaptive Icons" },
    { icon: <Globe className="h-8 w-8" />, name: "Web", description: "Favicon, PWA, Touch Icons" },
    { icon: <Monitor className="h-8 w-8" />, name: "macOS", description: "Mac App Store, Dock" },
    { icon: <Watch className="h-8 w-8" />, name: "watchOS", description: "Apple Watch Apps" },
    { icon: <Chrome className="h-8 w-8" />, name: "Extensions", description: "Chrome, VS Code" },
  ];

  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Image",
      description: "Drag and drop or click to upload your app icon. We support PNG, JPG, SVG, and WebP formats."
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Select Platforms",
      description: "Choose which platforms you need icons for. Select one, multiple, or all platforms at once."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Icons",
      description: "Click generate and download a ZIP file with all your icons organized by platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Free App Icon Generator</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  for iOS, Android & Web
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
                Generate professional app icons for all platforms in seconds.
                100% free, no signup required. Your images stay private - processed entirely in your browser.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>No signup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>100% free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Privacy protected</span>
                </div>
              </div>
            </div>

            {/* App Icon Generator Tool */}
            <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="space-y-8">
                {/* Step 1: Upload */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      1
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Upload Your App Icon
                    </h2>
                  </div>
                  <ImageUploader image={image} onImageChange={setImage} />
                </div>

                {/* Step 2: Select Platforms */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      2
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Select Target Platforms
                    </h2>
                  </div>
                  <PlatformSelector
                    selectedPlatforms={selectedPlatforms}
                    onSelectionChange={setSelectedPlatforms}
                  />
                </div>

                {/* Step 3: Generate */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      3
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Generate & Download
                    </h2>
                  </div>
                  <GenerateButton
                    image={image}
                    selectedPlatforms={selectedPlatforms}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Create professional app icons in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Why Choose Our Icon Generator?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Built for developers and designers who value simplicity and privacy
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                All Platforms Supported
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Generate icons for every major app platform and store
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-3 text-blue-600 dark:text-blue-400">
                    {platform.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Create Your App Icons?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start generating professional icons for free. No signup, no hassle.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              <Clock className="h-5 w-5" />
              Generate Icons Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
