import { KSEF_PAGES, KSEF_UPDATED_ISO, ksefUrl } from '@/data/ksef/config';
import { FIGURES } from '@/data/ksef/figures';
import { FEATURES } from '@/data/ksef/features';
import { GUIDES, guideFigures } from '@/data/ksef/guides';

// ksef.shipailab.com/sitemap.xml (proxy.ts rewrites it here). The main sitemap lists shipailab.com only.
export function GET() {
  type Entry = { loc: string; lastmod: string; priority: number; images?: { loc: string; title: string }[] };
  const entries: Entry[] = [
    ...KSEF_PAGES.map((p) => ({ loc: ksefUrl(p.path), lastmod: KSEF_UPDATED_ISO, priority: p.priority })),
    ...FEATURES.map((f) => ({ loc: ksefUrl(`/funkcje/${f.slug}`), lastmod: f.updated, priority: 0.7 })),
    ...GUIDES.map((g) => ({
      loc: ksefUrl(`/${g.slug}`),
      lastmod: g.updated,
      priority: 0.8,
      images: guideFigures(g).map((f) => ({ loc: ksefUrl(`/ksef/figures/${f}-w.webp`), title: FIGURES[f].caption })),
    })),
  ];
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const images = (e: Entry) =>
    (e.images ?? []).map((i) => `<image:image><image:loc>${i.loc}</image:loc><image:title>${esc(i.title)}</image:title></image:image>`).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><priority>${e.priority}</priority>${images(e)}</url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
