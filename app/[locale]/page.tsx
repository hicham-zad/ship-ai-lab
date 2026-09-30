import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GumroadStyleLanding from "@/components/GumroadStyleLanding";
import { routing } from "@/i18n/routing";
import { generateLanguageAlternates, getLocalizedUrl } from "@/lib/seo";

const OG_IMAGE = "https://res.cloudinary.com/dyovzofma/image/upload/v1762178102/Screenshot_2025-11-03_at_14.54.49_ugkbl8.png";

export async function generateMetadata(
    { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });
    const title = t("title");
    const description = t("description");
    const canonical = getLocalizedUrl(locale);

    return {
        title: { absolute: title },
        description,
        alternates: {
            canonical,
            languages: generateLanguageAlternates(routing.locales),
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: "ShipAI Lab",
            images: [{ url: OG_IMAGE, alt: "ShipAI Lab" }],
            locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div>
            <GumroadStyleLanding />
        </div>
    );
}
