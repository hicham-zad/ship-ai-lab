import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, Zap, Users, Clock, Sparkles, Brain } from 'lucide-react';
import locationsData from '@/data/locations';

// Generate static paths for all locations
export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);
  
  if (!location) return {};

  return {
    title: location.title,
    description: location.metaDescription,
    openGraph: {
      title: location.title,
      description: location.metaDescription,
    }
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center"
          >
            ← Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-10 h-10 text-gray-900" strokeWidth={2} />
            <span className="text-2xl font-bold text-gray-900">{location.name}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {location.h1}
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {location.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/#projects"
              className="px-8 py-4 bg-white border-2 border-black rounded-full font-semibold text-gray-900 hover:bg-black hover:text-white transition-all inline-flex items-center gap-2"
            >
              View Our Work
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-600">Days Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{location.startingPrice}</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">Flexible</div>
              <div className="text-sm text-gray-600">Pricing Model</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            What We Build in {location.name}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Full-stack AI app development services
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {location.services.map((service: string, index: number) => (
              <div 
                key={index} 
                className="bg-white border-2 border-black rounded-2xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Ship AI Lab?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Your trusted AI development partner in {location.name}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {location.whyUs.map((reason: string, index: number) => (
              <div 
                key={index} 
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Modern tools for fast, reliable delivery
          </p>
          <div className="flex flex-wrap gap-3">
            {location.techStack.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white border-2 border-black rounded-full font-medium text-gray-900 hover:bg-black hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Proven Results */}
      <div className="py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Real impact on your business metrics
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{location.stats.timeSaved}</div>
              <div className="text-gray-700 font-medium">Faster Delivery</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{location.stats.satisfaction}</div>
              <div className="text-gray-700 font-medium">Client Rating</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{location.stats.successRate}</div>
              <div className="text-gray-700 font-medium">Track Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Our 15-Day Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 border-2 border-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-pink-900">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery Call</h3>
              <p className="text-gray-700">Book a free 30-min call to discuss your idea</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 border-2 border-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-900">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design & Plan</h3>
              <p className="text-gray-700">Wireframes and feature planning (Days 1-3)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-200 border-2 border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-yellow-900">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Build & Test</h3>
              <p className="text-gray-700">Development with daily updates (Days 4-12)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-900">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Launch</h3>
              <p className="text-gray-700">Deploy with 30 days support (Days 13-15)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-xl text-gray-700 mb-4">
            Starting at <span className="text-4xl font-bold text-gray-900">{location.startingPrice}</span>
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Fixed price • {location.timeline} delivery • No hidden fees
          </p>
          
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What&apos;s Included:</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Full design & development</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">AI integration & testing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Deployment & hosting setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">30 days post-launch support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Source code & documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Training session included</span>
              </li>
            </ul>
          </div>

          <a
            href="https://calendly.com/hzaydi24/codeblend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Book Your Free Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <details className="border-2 border-gray-200 rounded-xl p-6 group bg-white">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>Do you work with {location.name} startups?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! We work with founders and businesses in {location.name} and globally. All communication is remote via video calls and Slack.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group bg-white">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>Can you really deliver in 15 days?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Absolutely. We focus on core MVP features using modern frameworks. You launch fast, then iterate based on user feedback.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group bg-white">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>What if I need changes after launch?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We include 30 days of bug fixes and minor tweaks. For new features, we offer ongoing maintenance packages.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group bg-white">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>Do I own the code?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. You get full ownership of the source code, documentation, and all design files.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group bg-white">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>What industries do you serve?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We build AI apps for healthcare, fintech, e-commerce, education, real estate, and more. Check our portfolio for examples.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your AI App in {location.name}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation to discuss your project. No commitment required.
          </p>
          <a
            href="https://calendly.com/hzaydi24/codeblend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Schedule Your Free Call
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Trusted by startups in {location.name} and beyond
          </p>
        </div>
      </div>

      {/* Other Locations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Other Cities We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locationsData
              .filter(loc => loc.slug !== location.slug)
              .slice(0, 8)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all text-center bg-white"
                >
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="font-semibold text-gray-900">{loc.name}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}