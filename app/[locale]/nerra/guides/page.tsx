import type { Metadata } from 'next';
import Link from 'next/link';
import { NerraChrome, formatDate } from '@/components/nerra/NerraArticleView';
import { ARTICLES } from '@/data/nerra/articles';
import { NR_BASE, NR_UPDATED } from '@/data/nerra/config';

const URL = `${NR_BASE}/guides`;

export const metadata: Metadata = {
  title: 'GLP-1 Guides: Injection Sites, Dose Charts, Missed Doses | Nerra',
  description:
    'Label-sourced GLP-1 guides for Ozempic, Wegovy, Mounjaro and Zepbound: injection site rotation, dose charts, missed dose rules and free tools.',
  alternates: { canonical: URL },
  openGraph: { title: 'Nerra GLP-1 guides', description: 'Injection sites, dose charts and missed dose rules, straight from the labels.', url: URL, siteName: 'Nerra', type: 'website', images: [{ url: '/nerra-icon.png', width: 512, height: 512, alt: 'Nerra' }] },
};

const GROUPS: { title: string; blurb: string; slugs: string[] }[] = [
  { title: 'Free tools', blurb: 'Nothing you enter is saved or sent anywhere.', slugs: ['glp-1-injection-site-rotation', 'glp-1-missed-dose'] },
  { title: 'Injection sites', blurb: 'What each label says about where to inject and how to rotate.', slugs: ['zepbound-injection-sites', 'mounjaro-injection-sites', 'ozempic-injection-sites', 'how-to-inject-ozempic', 'how-to-inject-wegovy'] },
  { title: 'Dose charts', blurb: 'Straight from the US prescribing information, with dates.', slugs: ['tirzepatide-dose-chart', 'semaglutide-dose-chart', 'wegovy-dosing-schedule'] },
  { title: 'Choosing an app', blurb: 'Compared from App Store listings, dated and linked.', slugs: ['best-glp-1-tracker-apps', 'shotsy-alternative', 'nerra-app'] },
];

export default function NerraGuidesHub() {
  const by = new Map(ARTICLES.map((a) => [a.slug, a]));
  const listed = GROUPS.flatMap((g) => g.slugs);
  const groups = ARTICLES.some((a) => !listed.includes(a.slug))
    ? [...GROUPS, { title: 'More guides', blurb: '', slugs: ARTICLES.filter((a) => !listed.includes(a.slug)).map((a) => a.slug) }]
    : GROUPS;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Nerra GLP-1 guides',
        url: URL,
        dateModified: NR_UPDATED,
        mainEntity: { '@type': 'ItemList', itemListElement: ARTICLES.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.h1, url: `${NR_BASE}/${a.slug}` })) },
      },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Nerra', item: NR_BASE }, { '@type': 'ListItem', position: 2, name: 'Guides', item: URL }] },
    ],
  };
  return (
    <NerraChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="nra-wrap">
        <div className="nra-crumbs"><Link href="/nerra">Nerra</Link> / Guides</div>
        <span className="nra-kicker">Guides</span>
        <h1>GLP-1 guides, straight from the labels</h1>
        <p className="nra-dek">Injection sites, dose charts and missed dose rules for Ozempic, Wegovy, Mounjaro and Zepbound. Every figure links to the manufacturer’s prescribing information. Updated {formatDate(NR_UPDATED)}. General information, not medical advice.</p>
        <div className="nra-body">
          {groups.map((g) => (
            <section key={g.title} className="nra-hub-group">
              <h2>{g.title}</h2>
              {g.blurb && <p className="blurb">{g.blurb}</p>}
              <div className="nra-related">
                {g.slugs.map((s) => by.get(s)).filter(Boolean).map((a) => <Link key={a!.slug} href={`/nerra/${a!.slug}`}>{a!.h1}</Link>)}
              </div>
            </section>
          ))}
        </div>
      </main>
    </NerraChrome>
  );
}
