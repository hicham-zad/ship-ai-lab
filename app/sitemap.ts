import { MetadataRoute } from 'next';
import locations from '@/data/locations';
import { localizedSeoPages } from '@/data/localized-seo';
import { gccCities } from '@/data/gcc-cities';
import { FEATURES as PCOS_FEATURES } from '@/data/pcos/features';
import { ARTICLES as SOBERGIRL_ARTICLES } from '@/data/sobergirl/articles';
import { updatedOf } from '@/data/sobergirl/config';
import { routing } from '@/i18n/routing';
import { generateLanguageAlternates, getLocalizedUrl } from '@/lib/seo';

// Only canonical URLs belong here. English-only pages (legal, app pages, location pages)
// also render under other locale prefixes, but those canonicalize to the English URL.
// Sober Girl guides that get the higher priority (they carry the app's main search terms).
const SOBERGIRL_TOP = ['best-sober-tracker-apps', 'sobriety-calculator'];

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
        { path: '/sobergirl/guides', priority: 0.8 },
        ...SOBERGIRL_ARTICLES.map((a) => ({
            path: `/sobergirl/${a.slug}`,
            priority: SOBERGIRL_TOP.includes(a.slug) ? 0.9 : 0.8,
            updated: updatedOf(a),
        })),
        { path: '/nerra', priority: 0.7 },
        { path: '/nerra/guides', priority: 0.8 },
        { path: '/nerra/glp-1-injection-site-rotation', priority: 0.8 },
        { path: '/nerra/zepbound-injection-sites', priority: 0.8 },
        { path: '/nerra/mounjaro-injection-sites', priority: 0.8 },
        { path: '/nerra/ozempic-injection-sites', priority: 0.8 },
        { path: '/nerra/tirzepatide-dose-chart', priority: 0.8 },
        { path: '/nerra/semaglutide-dose-chart', priority: 0.8 },
        { path: '/nerra/wegovy-dosing-schedule', priority: 0.8 },
        { path: '/nerra/glp-1-missed-dose', priority: 0.8 },
        { path: '/nerra/nerra-app', priority: 0.8 },
        { path: '/nerra/how-to-inject-ozempic', priority: 0.8 },
        { path: '/nerra/how-to-inject-wegovy', priority: 0.8 },
        { path: '/nerra/best-glp-1-tracker-apps', priority: 0.8 },
        { path: '/nerra/shotsy-alternative', priority: 0.8 },
        { path: '/nerra/glp-1-side-effects', priority: 0.8 },
        { path: '/nerra/glp-1-hair-loss', priority: 0.8 },
        { path: '/nerra/wegovy-pill', priority: 0.8 },
        { path: '/nerra/best-time-to-take-glp-1', priority: 0.8 },
        { path: '/pcos', priority: 0.7 },
        ...PCOS_FEATURES.map((f) => ({ path: `/pcos/${f.slug}`, priority: 0.8 })),
        { path: '/privacy-policy', priority: 0.3 },
        { path: '/terms-of-service', priority: 0.3 },
        { path: '/sobergirl/support', priority: 0.3 },
        { path: '/sobergirl/privacy-policy', priority: 0.2 },
        { path: '/sobergirl/terms-of-service', priority: 0.2 },
        { path: '/nerra/support', priority: 0.3 },
        { path: '/nerra/privacy-policy', priority: 0.2 },
        { path: '/nerra/terms-of-service', priority: 0.2 },
        { path: '/pcos/support', priority: 0.3 },
        { path: '/pcos/privacy-policy', priority: 0.2 },
        { path: '/pcos/terms-of-service', priority: 0.2 },
        { path: '/examen-civique', priority: 0.7 },
        { path: '/examen-civique/support', priority: 0.3 },
        { path: '/examen-civique/privacy-policy', priority: 0.2 },
        { path: '/examen-civique/terms-of-service', priority: 0.2 },
        { path: '/fr/examen-civique', priority: 0.7 },
        { path: '/fr/examen-civique/support', priority: 0.3 },
        { path: '/fr/examen-civique/privacy-policy', priority: 0.2 },
        { path: '/fr/examen-civique/terms-of-service', priority: 0.2 },
        { path: '/measure-kit', priority: 0.7 },
        { path: '/measure-kit/support', priority: 0.3 },
        { path: '/measure-kit/privacy-policy', priority: 0.2 },
        { path: '/measure-kit/terms-of-service', priority: 0.2 },
    ].map(({ path, priority, updated }: { path: string; priority: number; updated?: string }) => ({
        url: `${baseUrl}${path}`,
        lastModified: updated ? new Date(updated) : lastModified,
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
