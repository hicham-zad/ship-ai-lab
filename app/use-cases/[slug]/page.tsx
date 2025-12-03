import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Brain, Zap, Rocket } from 'lucide-react';
import usecasesData from '@/data/usecases';

// Generate static paths
export async function generateStaticParams() {
    return usecasesData.map((usecase) => ({
        slug: usecase.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const usecase = usecasesData.find((u) => u.slug === slug);

    if (!usecase) return {};

    return {
        title: usecase.title,
        description: usecase.metaDescription,
        openGraph: {
            title: usecase.title,
            description: usecase.metaDescription,
        }
    };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const usecase = usecasesData.find((u) => u.slug === slug);

    if (!usecase) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center">
                        ← Back to Home
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <Rocket className="w-10 h-10 text-gray-900" strokeWidth={2} />
                        <span className="text-2xl font-bold text-gray-900">{usecase.name}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        {usecase.h1}
                    </h1>

                    <p className="text-2xl text-gray-700 mb-4 max-w-3xl">
                        {usecase.subtitle}
                    </p>

                    <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                        {usecase.description}
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
                            <div className="text-3xl font-bold text-gray-900">{usecase.startingPrice}</div>
                            <div className="text-sm text-gray-600">Starting Price</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900">Fixed</div>
                            <div className="text-sm text-gray-600">Pricing</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Why Build {usecase.name}?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Key benefits for your business
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {usecase.benefits.map((benefit: string, index: number) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black rounded-2xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        What's Included
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Everything you need in one complete package
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {usecase.features.map((feature: string, index: number) => (
                            <div key={index} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-200 transition-colors bg-white">
                                <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
                                <p className="text-lg font-medium text-gray-900">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Examples Section */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Real-World Applications
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Examples of what we can build for you
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {usecase.examples.map((example: any, index: number) => (
                            <div key={index} className="bg-white border-2 border-black rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <Brain className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {example.title}
                                </h3>
                                <p className="text-gray-700">{example.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Our Technology Stack
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Modern, proven technologies
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {usecase.techStack.map((tech: string, index: number) => (
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
                            <div className="text-5xl font-bold mb-2 text-gray-900">{usecase.stats.roi}</div>
                            <div className="text-gray-700 font-medium">ROI Impact</div>
                        </div>
                        <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
                            <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <div className="text-5xl font-bold mb-2 text-gray-900">{usecase.stats.efficiency}</div>
                            <div className="text-gray-700 font-medium">Efficiency Gain</div>
                        </div>
                        <div className="text-center bg-white border-2 border-black rounded-2xl p-8">
                            <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                            <div className="text-5xl font-bold mb-2 text-gray-900">{usecase.stats.satisfaction}</div>
                            <div className="text-gray-700 font-medium">Performance</div>
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
                        Starting at <span className="text-4xl font-bold text-gray-900">{usecase.startingPrice}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Delivered in just <span className="font-semibold">{usecase.timeline}</span> • Fixed pricing • No hidden fees
                    </p>

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

            {/* Final CTA */}
            <div className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Your {usecase.name}?
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
                </div>
            </div>

            {/* Related Use Cases - Internal Linking for SEO */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Other AI Solutions We Build
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {usecasesData
                            .filter(uc => uc.slug !== usecase.slug)
                            .slice(0, 8)
                            .map((uc) => (
                                <Link
                                    key={uc.slug}
                                    href={`/use-cases/${uc.slug}`}
                                    className="p-4 border-2 border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all text-center bg-white"
                                >
                                    <Rocket className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                                    <p className="font-semibold text-gray-900 text-sm">{uc.name}</p>
                                </Link>
                            ))}
                    </div>

                    {/* Link to all use cases */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2"
                        >
                            View All Solutions
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
