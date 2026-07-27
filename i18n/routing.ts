import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'es', 'fr', 'de', 'pt', 'ar', 'it', 'nl', 'ru', 'ja'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Don't use locale prefix for default locale (English)
    localePrefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
