import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StoreButtons from '@/components/sobergirl/StoreButtons';
import { SG_ARTICLE_CSS } from '@/components/sobergirl/styles';
import { ARTICLES } from '@/data/sobergirl/articles';
import { SG_BASE, SG_UPDATED } from '@/data/sobergirl/config';
import { GUIDE_GROUPS } from '@/data/sobergirl/groups';

const URL = `${SG_BASE}/guides`;

export const metadata: Metadata = {
  title: 'Sober Girl Guides: Tools, Apps, Cravings, Milestones',
  description:
    'Every Sober Girl guide in one place: free sobriety tools, app comparisons, help with cravings, and sourced explainers on sober curious, gray area drinking and more.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Sober Girl Guides',
    description: 'Free sobriety tools, app comparisons and sourced guides on cravings, milestones and drinking less.',
    url: URL,
    siteName: 'Sober Girl',
    type: 'website',
    images: [{ url: '/sobergirl-icon.png', width: 1024, height: 1024, alt: 'Sober Girl' }],
  },
};

export default function GuidesHub() {
  const bySlug = new Map(ARTICLES.map((a) => [a.slug, a]));
  const listed = GUIDE_GROUPS.flatMap((g) => g.slugs);
  const orphans = ARTICLES.filter((a) => !listed.includes(a.slug));
  const groups = orphans.length
    ? [...GUIDE_GROUPS, { title: 'More guides', blurb: '', slugs: orphans.map((o) => o.slug) }]
    : GUIDE_GROUPS;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Sober Girl guides',
        url: URL,
        dateModified: SG_UPDATED,
        isPartOf: { '@type': 'WebSite', name: 'Sober Girl', url: SG_BASE },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: ARTICLES.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.h1, url: `${SG_BASE}/${a.slug}` })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Sober Girl', item: SG_BASE },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <style>{SG_ARTICLE_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sga">
        <nav className="sga-nav">
          <Link href="/sobergirl" className="sga-brand">
            <Image src="/sobergirl-icon.png" alt="Sober Girl" width={34} height={34} style={{ borderRadius: 10 }} />
            <span>sober girl</span>
          </Link>
          <div className="sga-nav-links">
            <Link href="/sobergirl/sobriety-calculator">Calculator</Link>
            <Link href="/sobergirl/best-sober-tracker-apps">Compare apps</Link>
            <Link href="/sobergirl/support">Support</Link>
          </div>
        </nav>
        <main className="sga-wrap">
          <div className="sga-crumbs"><Link href="/sobergirl">Sober Girl</Link> / Guides</div>
          <span className="sga-kicker">Guides</span>
          <h1>Sober Girl guides</h1>
          <p className="sga-dek">
            {ARTICLES.length} plain-language guides and tools. Every figure links to its source, and where the evidence is thin the guide says so.
            Written by the Sober Girl team at ShipAI Lab. General information, not medical advice.
          </p>
          <div className="sga-body">
            {groups.map((g) => (
              <section key={g.title}>
                <h2>{g.title}</h2>
                {g.blurb && <p>{g.blurb}</p>}
                <div className="sga-related" style={{ gridTemplateColumns: '1fr' }}>
                  {g.slugs.map((slug) => {
                    const a = bySlug.get(slug);
                    if (!a) return null;
                    return (
                      <Link key={slug} href={`/sobergirl/${slug}`}>
                        {a.h1}
                        <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontWeight: 400, fontSize: 14, color: 'var(--ink-soft)', marginTop: 4 }}>{a.dek}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
            <div className="sga-cta">
              <h2>Today is day one.</h2>
              <p>Sober Girl is a private sobriety tracker for women, on Android now and coming soon to iPhone. Core tools are free.</p>
              <StoreButtons light />
            </div>
          </div>
        </main>
        <footer className="sga-foot">
          <div className="sga-foot-in">
            <div>
              <Link href="/sobergirl">Sober Girl</Link>
              <Link href="/sobergirl/support">Support</Link>
              <Link href="/sobergirl/privacy-policy">Privacy</Link>
              <Link href="/sobergirl/terms-of-service">Terms</Link>
            </div>
            <div>© {new Date().getFullYear()} Ship AI Solutions, LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
}
