// KSeF app section. Served on its own subdomain (see proxy.ts): ksef.shipailab.com/x renders
// app/(ksef)/ksef/x, so every link inside the section is root-relative ("/support", not "/ksef/support").
export const KSEF_BASE = 'https://ksef.shipailab.com';
export const KSEF_NAME = 'Faktury KSeF';
export const KSEF_EMAIL = 'contact@shipailab.com';
export const KSEF_PUBLISHER = 'Ship AI Solutions LLC';
export const KSEF_UPDATED = '15 października 2026';
export const KSEF_UPDATED_ISO = '2026-10-15';

export const ksefUrl = (path = '') => `${KSEF_BASE}${path === '/' ? '' : path}`;

// Pages outside the guides list, for the sitemap.
export const KSEF_PAGES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/guides', priority: 0.8 },
  { path: '/support', priority: 0.3 },
  { path: '/privacy-policy', priority: 0.2 },
  { path: '/terms-of-service', priority: 0.2 },
];
