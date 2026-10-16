import { ksefUrl } from '@/data/ksef/config';

// ksef.shipailab.com/robots.txt (proxy.ts rewrites it here); public/robots.txt serves shipailab.com.
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${ksefUrl('/sitemap.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
