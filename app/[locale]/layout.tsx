import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "../globals.css";
import StructuredData from "@/components/StructuredData";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = "https://shipailab.com";
    const canonical = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

    return {
        metadataBase: new URL(baseUrl),
        title: "AI App Development Agency | Built in 15 Days",
        description:
            "Got an AI app idea? We build it in 15 days. AI-powered SaaS, iOS, and Android apps. One price. No delays.",
        keywords: [
            "AI SaaS",
            "AI product development",
            "AI startup",
            "SaaS development",
            "AI agency",
            "AI web app",
            "AI mobile app",
            "AI MVP",
            "AI automation",
            "ShipAI Lab",
            "AI solutions",
            "AI consulting",
        ],
        alternates: {
            canonical: canonical,
            languages: {
                'en': baseUrl,
                'es': `${baseUrl}/es`,
                'fr': `${baseUrl}/fr`,
                'de': `${baseUrl}/de`,
                'pt': `${baseUrl}/pt`,
                'ar': `${baseUrl}/ar`,
                'x-default': baseUrl
            },
        },
        openGraph: {
            title: "AI App Development Agency | Built in 15 Days",
            description:
                "Got an AI app idea? We build it in 15 days. AI-powered SaaS, iOS, and Android apps. One price. No delays.",
            url: canonical,
            siteName: "ShipAI Lab",
            images: [
                {
                    url: "https://res.cloudinary.com/dyovzofma/image/upload/v1762178102/Screenshot_2025-11-03_at_14.54.49_ugkbl8.png",
                    width: 800,
                    height: 600,
                    alt: "ShipAI Lab Demo"
                },
                {
                    url: "https://res.cloudinary.com/dyovzofma/image/upload/v1762178065/SHIP_AI_mhueop.png",
                    width: 1800,
                    height: 1600,
                    alt: "ShipAI Lab Logo",
                }
            ],
            locale: locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AI App Development Agency | Built in 15 Days",
            description:
                "Got an AI app idea? We build it in 15 days. AI-powered SaaS, iOS, and Android apps. One price. No delays.",
            images: ["https://res.cloudinary.com/dyovzofma/image/upload/v1762178102/Screenshot_2025-11-03_at_14.54.49_ugkbl8.png"],
        },
        creator: "ShipAI Lab Team",
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <head>
                {/* Structured Data for SEO */}
                <StructuredData
                    data={[
                        generateOrganizationSchema(),
                        generateWebsiteSchema()
                    ]}
                />

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KN7Z7K58');
            `,
                    }}
                />
                {/* End Google Tag Manager */}
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KN7Z7K58"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
