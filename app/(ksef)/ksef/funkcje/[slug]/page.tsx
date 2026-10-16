import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { BlockView } from '@/components/ksef/BlockView';
import { Icon } from '@/components/ksef/Icon';
import { PhoneFrame, ShotCrop } from '@/components/ksef/Shots';
import StructuredData from '@/components/StructuredData';
import { KSEF_EMAIL, KSEF_NAME, KSEF_PUBLISHER, ksefUrl } from '@/data/ksef/config';
import { FEATURES, getFeature } from '@/data/ksef/features';
import { getGuide } from '@/data/ksef/guides';
import { KSEF_ICON, SHOTS } from '@/data/ksef/screenshots';

export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  const url = ksefUrl(`/funkcje/${f.slug}`);
  return {
    title: { absolute: f.metaTitle },
    description: f.description,
    keywords: f.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: f.metaTitle,
      description: f.description,
      url,
      siteName: KSEF_NAME,
      locale: 'pl_PL',
      type: 'website',
      images: [{ url: `/ksef/og/funkcje-${f.slug}.png`, width: 1200, height: 630, alt: f.title }],
    },
    twitter: { card: 'summary_large_image', title: f.metaTitle, description: f.description, images: [`/ksef/og/funkcje-${f.slug}.png`] },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const WAITLIST = `mailto:${KSEF_EMAIL}?subject=${encodeURIComponent('Faktury KSeF – powiadom mnie o premierze')}`;

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();
  const url = ksefUrl(`/funkcje/${f.slug}`);
  const guide = getGuide(f.guide);
  const relatedFeatures = f.relatedFeatures.map(getFeature).filter((x) => x !== undefined);
  const relatedGuides = f.relatedGuides.map(getGuide).filter((x) => x !== undefined);
  const toc = [
    { id: 'w-skrocie', label: 'W skrócie' },
    ...f.sections.map((s) => ({ id: s.id, label: s.h2 })),
    { id: 'pytania', label: 'Pytania i odpowiedzi' },
    { id: 'powiazane', label: 'Powiązane' },
    { id: 'zrodla', label: 'Źródła' },
  ];

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: f.title,
            description: f.description,
            url,
            inLanguage: 'pl-PL',
            datePublished: f.published,
            dateModified: f.updated,
            abstract: f.answer,
            keywords: f.keywords.join(', '),
            primaryImageOfPage: { '@type': 'ImageObject', url: ksefUrl(`/ksef/screenshots/${SHOTS[f.shot].file}.webp`), caption: SHOTS[f.shot].alt },
            publisher: { '@type': 'Organization', name: KSEF_PUBLISHER, url: 'https://shipailab.com', logo: { '@type': 'ImageObject', url: ksefUrl(KSEF_ICON.png) } },
            isPartOf: { '@type': 'WebSite', name: KSEF_NAME, url: ksefUrl() },
            citation: f.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: KSEF_NAME, item: ksefUrl() },
              { '@type': 'ListItem', position: 2, name: 'Funkcje', item: ksefUrl('/funkcje') },
              { '@type': 'ListItem', position: 3, name: f.short, item: url },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: f.faqs.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
          },
        ]}
      />
      <ArticleShell
        crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Funkcje', href: '/funkcje' }, { label: f.short }]}
        label="Funkcja aplikacji"
        title={f.title}
        lede={
          <>
            {f.description}{' '}
            {guide && (
              <>
                Zobacz też poradnik: <Link href={`/${guide.slug}`}>{guide.short}</Link>.
              </>
            )}
          </>
        }
        meta={
          <>
            <span>Aktualizacja: <time dateTime={f.updated}>{formatDate(f.updated)}</time></span>
            <span>Aplikacja w przygotowaniu, jeszcze nie w sklepach</span>
          </>
        }
        toc={toc}
        after={
          <section className="fk-sec" id="zapisy">
            <div className="fk-wrap fk-final">
              <h2 className="fk-h2">Powiadomimy Cię o premierze</h2>
              <p>Faktury KSeF jest w przygotowaniu. Napisz, a damy znać, gdy pojawi się w App Store i Google Play.</p>
              <a href={WAITLIST} className="fk-btn fk-btn-primary fk-btn-lg">Zapisz się na listę</a>
            </div>
          </section>
        }
      >
        <section id="w-skrocie" className="fk-summary fk-feature-sum" aria-labelledby="w-skrocie-h">
          <div>
            <h2 id="w-skrocie-h">W skrócie</h2>
            <p>{f.answer}</p>
          </div>
          <div className="fk-feature-hero">
            <PhoneFrame shot={SHOTS[f.shot]} sizes="200px" priority />
          </div>
        </section>

        {f.sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>{s.h2}</h2>
            {s.blocks.map((b, j) =>
              'crop' in b ? (
                <figure className="fk-feature-crop" key={j}>
                  <ShotCrop shot={SHOTS[b.crop.shot]} from={b.crop.from} to={b.crop.to} sizes="(max-width: 1000px) 90vw, 420px" />
                  <figcaption>{b.crop.caption}</figcaption>
                </figure>
              ) : (
                <BlockView key={j} b={b} />
              ),
            )}
          </section>
        ))}

        <section id="pytania" aria-labelledby="pytania-h">
          <h2 id="pytania-h">Pytania i odpowiedzi</h2>
          <div className="fk-faq">
            {f.faqs.map((q) => (
              <details key={q.q}>
                <summary>{q.q}<i aria-hidden="true" /></summary>
                <p>{q.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="powiazane" aria-labelledby="powiazane-h">
          <h2 id="powiazane-h">Powiązane</h2>
          <ul className="fk-related-list">
            {relatedFeatures.map((r) => (
              <li key={r.slug}><Link href={`/funkcje/${r.slug}`}><Icon name={r.icon} size={18} /> {r.short}</Link>: {r.hub}</li>
            ))}
            {relatedGuides.map((r) => (
              <li key={r.slug}><Link href={`/${r.slug}`}>{r.short}</Link>: poradnik</li>
            ))}
          </ul>
        </section>

        <section id="zrodla" aria-labelledby="zrodla-h" className="fk-sources">
          <h2 id="zrodla-h">Źródła</h2>
          <p>Opis aplikacji sprawdziliśmy w jej kodzie i działającej wersji {formatDate(f.updated)}. Fakty o KSeF pochodzą z materiałów Ministerstwa Finansów.</p>
          <ol>
            {f.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                <span>{s.meta}</span>
              </li>
            ))}
          </ol>
          <p className="fk-disclaimer">Aplikacja nie jest produktem Ministerstwa Finansów i nie wystawia faktur. Opracowanie: {KSEF_PUBLISHER}, wydawca aplikacji {KSEF_NAME}.</p>
        </section>
      </ArticleShell>
    </>
  );
}
