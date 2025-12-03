import { MetadataRoute } from 'next';
import locations from '@/data/locations';
import industries from '@/data/industries';
import usecases from '@/data/usecases';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shipailab.com';

    // Static routes
    const routes = [
        '',
        '/privacy-policy',
        '/terms-of-service',
        '/use-cases',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Location routes
    const locationRoutes = locations.map((location) => ({
        url: `${baseUrl}/${location.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Industry routes
    const industryRoutes = industries.map((industry) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Use Case routes
    const useCaseRoutes = usecases.map((useCase) => ({
        url: `${baseUrl}/use-cases/${useCase.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...locationRoutes, ...industryRoutes, ...useCaseRoutes];
}
