/**
 * SEO Utility Functions
 * Helper functions for generating structured data and SEO meta tags
 */

const SITE_URL = 'https://shipailab.com';
const SITE_NAME = 'ShipAI Lab';
// Spellings people search for (see Search Console queries) — helps Google map them to this site
const SITE_ALTERNATE_NAMES = ['Ship AI Lab', 'ShipAI', 'Ship AI Labs', 'ShipAI Labs'];

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: SITE_URL,
    logo: 'https://res.cloudinary.com/dyovzofma/image/upload/v1762178065/SHIP_AI_mhueop.png',
    description: 'ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days.',
    sameAs: [
      'https://www.upwork.com/freelancers/~014be778a3616e96a3',
      'https://www.fiverr.com/s/jjxkjpL',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: 'https://calendly.com/hzaydi24/codeblend',
    },
  };
}

/**
 * Generate WebSite Schema
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: SITE_URL,
    description: 'ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days.',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  price?: string;
  features?: string[];
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  if (params.price) {
    schema.offers = {
      '@type': 'Offer',
      price: params.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    };
  }

  if (params.features && params.features.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Service Features',
      itemListElement: params.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    };
  }

  return schema;
}

/**
 * Generate LocalBusiness Schema (for location pages)
 */
export function generateLocalBusinessSchema(params: {
  name: string;
  description: string;
  url: string;
  city?: string;
  region?: string;
  country?: string;
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  if (params.city || params.region || params.country) {
    schema.areaServed = {
      '@type': 'City',
      name: params.city,
      containedInPlace: {
        '@type': 'State',
        name: params.region,
        containedInPlace: {
          '@type': 'Country',
          name: params.country,
        },
      },
    };
  }

  return schema;
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string): string {
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Absolute URL for a path in a given locale (English has no prefix, per localePrefix: 'as-needed')
 */
export function getLocalizedUrl(locale: string, path: string = ''): string {
  return locale === 'en' ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`;
}

/**
 * hreflang map for a page that exists in every locale (e.g. the homepage)
 */
export function generateLanguageAlternates(locales: readonly string[], path: string = '') {
  const languages: Record<string, string> = {};
  locales.forEach((locale) => {
    languages[locale] = getLocalizedUrl(locale, path);
  });
  languages['x-default'] = getLocalizedUrl('en', path);
  return languages;
}

/**
 * Generate ImageObject Schema
 */
export function generateImageSchema(params: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: params.url.startsWith('http') ? params.url : `${SITE_URL}${params.url}`,
    caption: params.caption,
    width: params.width || 800,
    height: params.height || 600,
  };
}
