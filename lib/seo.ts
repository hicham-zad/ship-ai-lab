/**
 * SEO Utility Functions
 * Helper functions for generating structured data and SEO meta tags
 */

const SITE_URL = 'https://shipailab.com';
const SITE_NAME = 'ShipAI Lab';

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
    name: SITE_NAME,
    url: SITE_URL,
    logo: 'https://res.cloudinary.com/dyovzofma/image/upload/v1762178065/SHIP_AI_mhueop.png',
    description: 'ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days.',
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/shipailab',
      // 'https://linkedin.com/company/shipailab',
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
    name: SITE_NAME,
    url: SITE_URL,
    description: 'ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
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
 * Generate alternate language links (if needed in future)
 */
export function generateAlternateLinks(path: string, locales: string[]) {
  return locales.map((locale) => ({
    rel: 'alternate',
    hreflang: locale,
    href: `${SITE_URL}/${locale}${path}`,
  }));
}
