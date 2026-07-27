import { MetadataRoute } from 'next';
import locations from '@/data/locations';
import { localizedSeoPages } from '@/data/localized-seo';
import { gccCities } from '@/data/gcc-cities';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shipailab.com';
    const locales = routing.locales;

    // Helper function to create URLs for all locales (or specific ones)
    const createUrls = (path: string, priority: number = 0.8, specificLocale?: string) => {
        const targetLocales = specificLocale ? [specificLocale] : locales;
        return targetLocales.map((locale) => ({
            url: locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority,
        }));
    };

    // 1. Static routes (all locales)
    const staticRoutes = [
        { path: '', priority: 1.0 },
        { path: '/privacy-policy', priority: 0.8 },
        { path: '/terms-of-service', priority: 0.8 },
    ].flatMap(({ path, priority }) => createUrls(path, priority));

    // 2. Location routes (all locales)
    const locationRoutes = locations.flatMap((location) =>
        createUrls(`/${location.slug}`, 0.8)
    );

    // 3. Localized SEO pages (specific locale per page)
    const seoRoutes = localizedSeoPages.map((page) => ({
        url: `${baseUrl}/${page.locale}/${page.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 4. GCC Arabic City pages (Arabic locale only)
    const gccRoutes = gccCities.map((city) => ({
        url: `${baseUrl}/ar/${city.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...locationRoutes, ...seoRoutes, ...gccRoutes];
}
