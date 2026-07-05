import { MetadataRoute } from 'next';
import locations from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shipailab.com';
    const locales = ['en', 'es'];

    // Helper function to create URLs for both locales
    const createLocalizedUrls = (path: string, priority: number = 0.8) => {
        return locales.map((locale) => ({
            url: locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority,
        }));
    };

    // Static routes
    const staticRoutes = [
        { path: '', priority: 1.0 },
        { path: '/privacy-policy', priority: 0.8 },
        { path: '/terms-of-service', priority: 0.8 },
    ].flatMap(({ path, priority }) => createLocalizedUrls(path, priority));

    // Location routes
    const locationRoutes = locations.flatMap((location) =>
        createLocalizedUrls(`/${location.slug}`, 0.8)
    );

    return [...staticRoutes, ...locationRoutes];
}
