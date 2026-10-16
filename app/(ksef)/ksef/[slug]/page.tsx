import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { BlockView } from '@/components/ksef/BlockView';
import { figureUrl } from '@/components/ksef/Figure';
import { Icon } from '@/components/ksef/Icon';
import { ShotCrop } from '@/components/ksef/Shots';
import StructuredData from '@/components/StructuredData';
import { KSEF_NAME, KSEF_PUBLISHER, ksefUrl } from '@/data/ksef/config';
import { FEATURE_FOR_SHOT } from '@/data/ksef/features';
import { GUIDES, getGuide, guideFigures, guideOgImage, readingMinutes } from '@/data/ksef/guides';
import { KSEF_ICON, SHOTS } from '@/data/ksef/screenshots';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = ksefUrl(`/${g.slug}`);
  return {
    title: { absolute: g.metaTitle },
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: g.metaTitle,
      description: g.description,
      url,
      siteName: KSEF_NAME,
      locale: 'pl_PL',
      type: 'article',
      publishedTime: g.published,
      modifiedTime: g.updated,
      images: [{ url: guideOgImage(g.slug), width: 1200, height: 630, alt: g.title }],
    },
    twitter: { card: 'summary_large_image', title: g.metaTitle, description: g.description, images: [guideOgImage(g.slug)] },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default async function KsefGuide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = ksefUrl(`/${g.slug}`);
  const related = g.related.map(getGuide).filter((r) => r !== undefined);
  const toc = [
    { id: 'w-skrocie', label: 'W skrócie' },
    ...g.sections.map((s) => ({ id: s.id, label: s.h2 })),
    { id: 'pytania', label: 'Pytania i odpowiedzi' },
    { id: 'zrodla', label: 'Źródła' },
  ];
  const shot = SHOTS[g.app.shot];

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: g.title,
            description: g.description,
            inLanguage: 'pl-PL',
            datePublished: g.published,
            dateModified: g.updated,
            mainEntityOfPage: url,
            image: [ksefUrl(guideOgImage(g.slug)), ...guideFigures(g).map((f) => ksefUrl(figureUrl(f)))],
            abstract: g.summary.join(' '),
            keywords: g.keywords.join(', '),
            author: { '@type': 'Organization', name: KSEF_PUBLISHER, url: 'https://shipailab.com' },
            publisher: { '@type': 'Organization', name: KSEF_PUBLISHER, url: 'https://shipailab.com', logo: { '@type': 'ImageObject', url: ksefUrl(KSEF_ICON.png) } },
            citation: g.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })),
            isPartOf: { '@type': 'WebSite', name: KSEF_NAME, url: ksefUrl() },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: KSEF_NAME, item: ksefUrl() },
              { '@type': 'ListItem', position: 2, name: 'Poradniki', item: ksefUrl('/guides') },
              { '@type': 'ListItem', position: 3, name: g.title, item: url },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: g.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
        ]}
      />
      <ArticleShell
        crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Poradniki', href: '/guides' }, { label: g.short }]}
        label="Poradnik KSeF"
        title={g.title}
        lede={g.lede}
        meta={
          <>
            <span>Aktualizacja: <time dateTime={g.updated}>{formatDate(g.updated)}</time></span>
            <span>{readingMinutes(g)} min czytania</span>
            <span>Stan prawny na {formatDate(g.updated)}, na podstawie {g.sources.length} źródeł Ministerstwa Finansów</span>
          </>
        }
        toc={toc}
        after={
          related.length > 0 && (
            <section className="fk-sec fk-related">
              <div className="fk-wrap">
                <div className="fk-sec-head fk-sec-head-row">
                  <div>
                    <p className="fk-label">Czytaj dalej</p>
                    <h2 className="fk-h2">Powiązane poradniki</h2>
                  </div>
                  <Link href="/guides" className="fk-text-link">Wszystkie poradniki</Link>
                </div>
                <ul className="fk-guides">
                  {related.map((r) => (
                    <li key={r.slug} data-reveal>
                      <Link href={`/${r.slug}`}>
                        <span className="fk-mono">{formatDate(r.updated)}</span>
                        <div><h3>{r.title}</h3><p>{r.description}</p></div>
                        <Icon name="chevron" size={20} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        }
      >
        <section id="w-skrocie" className="fk-summary" aria-labelledby="w-skrocie-h">
          <h2 id="w-skrocie-h">W skrócie</h2>
          <ul>{g.summary.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>

        {g.sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>{s.h2}</h2>
            {s.blocks.map((b, j) => <BlockView key={j} b={b} />)}
            {i === 1 && (
              <aside className="fk-appcard" aria-label="Aplikacja Faktury KSeF">
                <div className="fk-appcard-shot">
                  <ShotCrop shot={shot} from={g.app.from} to={g.app.to} sizes="(max-width: 1000px) 80vw, 260px" />
                </div>
                <div className="fk-appcard-text">
                  <p className="fk-label">Faktury KSeF</p>
                  <p>{g.app.text}</p>
                  <Link href={`/funkcje/${FEATURE_FOR_SHOT[g.app.shot] ?? ""}`} className="fk-text-link">Zobacz tę funkcję</Link>
                </div>
              </aside>
            )}
          </section>
        ))}

        <section id="pytania" aria-labelledby="pytania-h">
          <h2 id="pytania-h">Pytania i odpowiedzi</h2>
          <div className="fk-faq">
            {g.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<i aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="zrodla" aria-labelledby="zrodla-h" className="fk-sources">
          <h2 id="zrodla-h">Źródła</h2>
          <p>Fakty w tym poradniku sprawdziliśmy {formatDate(g.updated)} w oficjalnych materiałach Ministerstwa Finansów. Przepisy o KSeF się zmieniają, więc przed decyzją sprawdź aktualną wersję źródła.</p>
          <ol>
            {g.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                <span>{s.meta}</span>
              </li>
            ))}
          </ol>
          <p className="fk-disclaimer">Poradnik ma charakter informacyjny i nie jest poradą podatkową. Opracowanie: {KSEF_PUBLISHER}, wydawca aplikacji {KSEF_NAME}.</p>
        </section>
      </ArticleShell>
    </>
  );
}
