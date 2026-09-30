import { MetadataRoute } from 'next';
import locations from '@/data/locations';
import { localizedSeoPages } from '@/data/localized-seo';
import { gccCities } from '@/data/gcc-cities';
import { routing } from '@/i18n/routing';
import { generateLanguageAlternates, getLocalizedUrl } from '@/lib/seo';

// Only canonical URLs belong here. English-only pages (legal, app pages, location pages)
// also render under other locale prefixes, but those canonicalize to the English URL.
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shipailab.com';
    const lastModified = new Date('2026-09-30');

    // 1. Homepage — translated in every locale, with hreflang alternates
    const homeRoutes = routing.locales.map((locale) => ({
        url: getLocalizedUrl(locale),
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 1.0,
        alternates: { languages: generateLanguageAlternates(routing.locales) },
    }));

    // 2. English-only pages
    const englishRoutes = [
        { path: '/sobergirl', priority: 0.7 },
        { path: '/pendra', priority: 0.7 },
        { path: '/privacy-policy', priority: 0.3 },
        { path: '/terms-of-service', priority: 0.3 },
        { path: '/sobergirl/support', priority: 0.3 },
        { path: '/sobergirl/privacy-policy', priority: 0.2 },
        { path: '/sobergirl/terms-of-service', priority: 0.2 },
        { path: '/pendra/support', priority: 0.3 },
        { path: '/pendra/privacy-policy', priority: 0.2 },
        { path: '/pendra/terms-of-service', priority: 0.2 },
    ].map(({ path, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority,
    }));

    // 3. Location pages (English only)
    const locationRoutes = locations.map((location) => ({
        url: `${baseUrl}/${location.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 4. Localized SEO pages (one per locale, linked to each other via hreflang)
    const seoLanguages: Record<string, string> = {};
    localizedSeoPages.forEach((p) => {
        seoLanguages[p.locale] = `${baseUrl}/${p.locale}/${p.slug}`;
    });
    const seoRoutes = localizedSeoPages.map((page) => ({
        url: `${baseUrl}/${page.locale}/${page.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        alternates: { languages: seoLanguages },
    }));

    // 5. GCC Arabic city pages (Arabic locale only)
    const gccRoutes = gccCities.map((city) => ({
        url: `${baseUrl}/ar/${city.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...homeRoutes, ...englishRoutes, ...locationRoutes, ...seoRoutes, ...gccRoutes];
}
