import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';
import usecasesData from '@/data/usecases';

export const metadata = {
    title: 'AI Solutions We Build | Ship AI Lab',
    description: 'Explore our AI development services. From chatbots to predictive analytics, we build custom AI solutions in 15 days with fixed pricing.',
    openGraph: {
        title: 'AI Solutions We Build | Ship AI Lab',
        description: 'Explore our AI development services. From chatbots to predictive analytics, we build custom AI solutions in 15 days with fixed pricing.',
    }
};

export default function UseCasesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center">
                        ← Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        AI Solutions We Build
                    </h1>

                    <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
                        Custom AI applications delivered in 15 days with fixed pricing
                    </p>

                    <a
                        href="https://calendly.com/hzaydi24/codeblend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-all inline-flex items-center gap-2"
                    >
                        Book a Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Use Cases Grid */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Browse All AI Solutions
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Click any solution to learn more about what we can build for you
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {usecasesData.map((usecase) => (
                            <Link
                                key={usecase.slug}
                                href={`/use-cases/${usecase.slug}`}
                                className="group border-2 border-black rounded-2xl p-6 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <Rocket className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {usecase.name}
                                </h3>
                                <p className="text-gray-700 mb-4 line-clamp-2">
                                    {usecase.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-gray-900">{usecase.startingPrice}</span>
                                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Don't See What You Need?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We build custom AI solutions for any use case. Book a call to discuss your specific needs.
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
        </div>
    );
}
