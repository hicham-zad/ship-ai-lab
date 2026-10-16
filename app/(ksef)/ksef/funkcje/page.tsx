import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { Icon } from '@/components/ksef/Icon';
import StructuredData from '@/components/StructuredData';
import { KSEF_NAME, ksefUrl } from '@/data/ksef/config';
import { FEATURE_GROUPS, FEATURES } from '@/data/ksef/features';
import { KSEF_OG } from '@/data/ksef/screenshots';

const title = 'Funkcje aplikacji Faktury KSeF: faktury, płatności, księgowa';
const description =
  'Aplikacja do odbierania faktur z KSeF na telefonie: powiadomienia, terminy płatności, wyszukiwarka, PDF i XML, zestawienie dla księgowej oraz logowanie certyfikatem lub tokenem. Bez konta, dane na telefonie.';
const url = ksefUrl('/funkcje');

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: KSEF_NAME,
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: KSEF_OG.png, width: KSEF_OG.width, height: KSEF_OG.height, alt: KSEF_OG.alt }],
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: title,
            description,
            url,
            inLanguage: 'pl-PL',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: FEATURES.map((f, i) => ({ '@type': 'ListItem', position: i + 1, url: ksefUrl(`/funkcje/${f.slug}`), name: f.title })),
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: KSEF_NAME, item: ksefUrl() },
              { '@type': 'ListItem', position: 2, name: 'Funkcje', item: url },
            ],
          },
        ]}
      />
      <ArticleShell
        crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Funkcje' }]}
        label="Aplikacja"
        title="Funkcje aplikacji Faktury KSeF"
        lede="Faktury KSeF to aplikacja do odbierania faktur z KSeF na telefonie. Pobiera faktury kosztowe, pokazuje, ile i do kiedy zapłacić, i pomaga przekazać je księgowej. Nie wystawia faktur, nie ma konta i nie ma serwera: dane zostają na Twoim telefonie."
        meta={<span>Aplikacja w przygotowaniu, jeszcze nie w sklepach</span>}
      >
        {FEATURE_GROUPS.map((g) => (
          <section key={g} aria-labelledby={`g-${g}`}>
            <h2 id={`g-${g}`}>{g}</h2>
            <ul className="fk-feature-list">
              {FEATURES.filter((f) => f.group === g).map((f) => (
                <li key={f.slug}>
                  <Link href={`/funkcje/${f.slug}`}>
                    <Icon name={f.icon} size={22} />
                    <div>
                      <h3>{f.short}</h3>
                      <p>{f.hub}</p>
                    </div>
                    <Icon name="chevron" size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section aria-labelledby="porownanie">
          <h2 id="porownanie">Aplikacja czy program: co wybrać</h2>
          <p>Faktury KSeF odbiera i pokazuje faktury. Do wystawiania użyj aplikacji Ministerstwa Finansów, Aplikacji Podatnika albo programu do faktur. Porównanie aplikacji na telefon znajdziesz w poradniku <Link href="/aplikacje-mobilne-ksef">aplikacja mobilna KSeF</Link>, a sposoby odbierania faktur w poradniku <Link href="/odbieranie-faktur-z-ksef">odbieranie faktur z KSeF</Link>.</p>
        </section>
      </ArticleShell>
    </>
  );
}
