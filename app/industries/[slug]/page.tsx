import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Brain, Zap } from 'lucide-react';
import industriesData from '@/data/industries';

// Generate static paths for all industries
export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

// Generate metadata for SEO - Fixed for Next.js 15
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  
  if (!industry) return {};

  return {
    title: industry.title,
    description: industry.metaDescription,
    openGraph: {
      title: industry.title,
      description: industry.metaDescription,
    }
  };
}

// Main component - Fixed for Next.js 15
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center">
            ← Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {industry.h1}
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {industry.subtitle}
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
              <div className="text-3xl font-bold text-gray-900">{industry.startingPrice}</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">Flexible</div>
              <div className="text-sm text-gray-600">Pricing Model</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Common Challenges in {industry.name}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Problems we help you solve
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industry.painPoints.map((pain: string, index: number) => (
              <div key={index} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-red-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-lg text-gray-700">{pain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Custom applications built to solve your specific challenges
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((solution: string, index: number) => (
              <div 
                key={index} 
                className="bg-white border-2 border-black rounded-2xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            What&apos;s Included
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Everything you need in one complete package
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {industry.features.map((feature: string, index: number) => (
              <div key={index} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-yellow-200 transition-colors">
                <Sparkles className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="text-lg font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Examples of what we can build for you
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {industry.useCases.map((useCase: any, index: number) => (
              <div key={index} className="bg-white border-2 border-black rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Brain className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-700">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We use modern, proven technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {industry.techStack.map((tech: string, index: number) => (
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

      {/* Stats & Results */}
      <div className="py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Expected Results
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Real impact on your business metrics
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{industry.stats.roi}</div>
              <div className="text-gray-700 font-medium">Cost Savings</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{industry.stats.efficiency}</div>
              <div className="text-gray-700 font-medium">Efficiency Gain</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
              <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2 text-gray-900">{industry.stats.satisfaction}</div>
              <div className="text-gray-700 font-medium">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Starting at <span className="text-4xl font-bold text-gray-900">{industry.startingPrice}</span>
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Delivered in just <span className="font-semibold">{industry.timeline}</span> • Fixed pricing • No hidden fees
          </p>
          
          {/* What's Included */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What&apos;s Included:</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Full app design and development</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Deployment and hosting setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">30 days of post-launch support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Source code and documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-900">Training and onboarding</span>
              </li>
            </ul>
          </div>

          <a
            href="https://calendly.com/hzaydi24/codeblend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Our 15-Day Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 border-2 border-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-pink-900">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery & Planning</h3>
              <p className="text-gray-700">We understand your needs and create a detailed plan (Days 1-3)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 border-2 border-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-900">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design & Development</h3>
              <p className="text-gray-700">We build your app with daily updates (Days 4-12)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-200 border-2 border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-yellow-900">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Testing & Launch</h3>
              <p className="text-gray-700">We test, polish, and deploy your app (Days 13-15)</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <details className="border-2 border-gray-200 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>Can you really build my app in 15 days?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! We use modern frameworks and our extensive experience to deliver production-ready apps in 15 days. We focus on your core features and launch fast, then iterate based on user feedback.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>What if I need changes after launch?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We include 30 days of post-launch support for bug fixes and minor adjustments. For major feature additions, we offer ongoing maintenance packages.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>Do you have experience in {industry.name.toLowerCase()}?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! We&apos;ve built applications for various {industry.name.toLowerCase()} businesses. We understand the unique challenges and requirements of your industry.
              </p>
            </details>

            <details className="border-2 border-gray-200 rounded-xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>What happens after the 15 days?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                After launch, you own all the code. We provide documentation and training. We&apos;re also available for ongoing support, maintenance, and feature additions.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform {industry.name}?
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
            Trusted by 10+ companies • 11+ projects shipped • 15-day delivery guarantee
          </p>
        </div>
      </div>

      {/* Related Industries */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Other Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industriesData
              .filter(ind => ind.slug !== industry.slug)
              .slice(0, 8)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all text-center bg-white"
                >
                  <p className="font-semibold text-gray-900">{ind.name}</p>
                </Link>
              ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}