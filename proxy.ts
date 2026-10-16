import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Subdomains served from a section of this app with its own root layout: ksef.shipailab.com/x → app/(ksef)/ksef/x
const SUBDOMAIN_APPS: Record<string, string> = {
    ksef: '/ksef',
};

// Per-subdomain robots.txt, sitemap.xml and llms.txt (route handlers in app/<name>-robots.txt etc.).
const SUBDOMAIN_FILES = ['/robots.txt', '/sitemap.xml', '/llms.txt'];

// shipailab.com/ksef/x and /<locale>/ksef/x → ksef.shipailab.com/x, so each page has one URL.
const SECTION_ON_MAIN = new RegExp(`^(?:/(?:${routing.locales.join('|')}))?/(${Object.keys(SUBDOMAIN_APPS).join('|')})(/.*)?$`);

export default function proxy(request: NextRequest) {
    const host = request.headers.get('host') ?? '';
    if (host.startsWith('www.')) {
        const url = new URL(request.url);
        url.host = host.slice(4);
        url.protocol = 'https:';
        url.port = '';
        return NextResponse.redirect(url, 308);
    }
    const appPath = SUBDOMAIN_APPS[host.split('.')[0]];

    const { pathname } = request.nextUrl;

    if (appPath) {
        if (SUBDOMAIN_FILES.includes(pathname)) {
            const url = request.nextUrl.clone();
            url.pathname = `/${host.split('.')[0]}-${pathname.slice(1)}`;
            return NextResponse.rewrite(url);
        }
        // Old /ksef links on the subdomain: drop the redundant prefix.
        // Built from the Host header: behind the tunnel request.url is http://localhost:3000.
        if (pathname === appPath || pathname.startsWith(`${appPath}/`)) {
            const url = new URL(`https://${host}${pathname.slice(appPath.length) || '/'}${request.nextUrl.search}`);
            return NextResponse.redirect(url, 308);
        }
        const url = request.nextUrl.clone();
        url.pathname = `${appPath}${pathname === '/' ? '' : pathname}`;
        return NextResponse.rewrite(url);
    }

    if (SUBDOMAIN_FILES.includes(pathname)) return NextResponse.next();

    const section = host.endsWith('shipailab.com') ? pathname.match(SECTION_ON_MAIN) : null;
    if (section) {
        return NextResponse.redirect(`https://${section[1]}.shipailab.com${section[2] ?? '/'}`, 308);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: [
      '/',
      '/robots.txt',
      '/sitemap.xml',
      '/llms.txt',
      '/(en|es)/:path*',
      '/((?!_next|_vercel|.*\\..*).*)'
    ]
};
