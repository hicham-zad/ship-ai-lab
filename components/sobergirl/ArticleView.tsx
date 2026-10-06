import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ARTICLES, type Article, type Block, type Shot } from '@/data/sobergirl/articles';
import { PLAY_STORE_URL, SG_BASE, SG_SITE, SG_UPDATED } from '@/data/sobergirl/config';
import { SOURCES } from '@/data/sobergirl/sources';
import Chart, { chartSourceId } from './Charts';
import MoneyCalculator from './MoneyCalculator';
import SobrietyCalculator from './SobrietyCalculator';
import SobrietyCalendar from './SobrietyCalendar';
import StoreButtons from './StoreButtons';
import { SG_ARTICLE_CSS } from './styles';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function renderInline(text: string, article: Article): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[\[(\w+)\]\]|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const n = article.sources.indexOf(m[1]) + 1;
      if (n === 0) throw new Error(`Uncited source id "${m[1]}" in ${article.slug}`);
      out.push(
        <sup key={i++}>
          <a href={`#src-${n}`} aria-label={`Source ${n}`}>[{n}]</a>
        </sup>,
      );
    } else if (m[2]) out.push(<strong key={i++}>{renderInline(m[2], article)}</strong>);
    else if (m[3]) out.push(<em key={i++}>{m[3]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderBlock(b: Block, k: number, article: Article): ReactNode {
  switch (b.t) {
    case 'p':
      return <p key={k}>{renderInline(b.x, article)}</p>;
    case 'h3':
      return <h3 key={k}>{b.x}</h3>;
    case 'ul':
      return <ul key={k}>{b.items.map((x, i) => <li key={i}>{renderInline(x, article)}</li>)}</ul>;
    case 'ol':
      return <ol key={k}>{b.items.map((x, i) => <li key={i}>{renderInline(x, article)}</li>)}</ol>;
    case 'callout':
      return (
        <aside key={k} className={`sga-callout ${b.kind}`}>
          <strong>{b.title}</strong>
          <p>{renderInline(b.x, article)}</p>
        </aside>
      );
    case 'chart': {
      const sid = chartSourceId(b.id);
      const n = article.sources.indexOf(sid ?? '') + 1;
      if (n === 0) throw new Error(`Chart "${b.id}" source not cited in ${article.slug}`);
      return <Chart key={k} id={b.id} num={n} />;
    }
    case 'table':
      return (
        <div key={k} className="sga-tablewrap">
          <table className="sga-table">
            <thead>
              <tr>{b.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row" style={{ background: 'var(--petal)', color: 'inherit', fontFamily: 'inherit', fontSize: 14 }}>{renderInline(c, article)}</th> : <td key={ci}>{renderInline(c, article)}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
          {b.caption && <div className="sga-cap">{renderInline(b.caption, article)}</div>}
        </div>
      );
    case 'calc':
      return <MoneyCalculator key={k} />;
    case 'sobcal':
      return <SobrietyCalendar key={k} />;
    case 'sobcalc':
      return <SobrietyCalculator key={k} />;
    case 'cta':
      return (
        <aside key={k} className="sga-inline-cta">
          <div>
            <strong>{b.title}</strong>
            <p>{b.x}</p>
          </div>
          <StoreButtons />
        </aside>
      );
    case 'fit':
      return (
        <div key={k} className="sga-fit">
          <div className="sga-fit-col good">
            <strong>A good fit if you</strong>
            <ul>
              <li>use an Android phone (the iPhone app is coming soon)</li>
              <li>want a private tracker, with your journal kept on your device</li>
              <li>want a day counter, money saved and a daily check-in in one calm place</li>
              <li>want a Craving SOS with a breathing exercise and a 10-minute timer</li>
              <li>want to start free and add Plus only if you need the journal, insights or milestone cards</li>
            </ul>
          </div>
          <div className="sga-fit-col not">
            <strong>Not the right fit if you</strong>
            <ul>
              <li>need it on an iPhone today (the App Store version is coming soon)</li>
              <li>want a community feed, live coaching or an AI chat</li>
              <li>want a structured multi-week education program</li>
              <li>need medical help for heavy drinking or withdrawal. An app is not treatment, so see the safety notes above</li>
            </ul>
          </div>
        </div>
      );
  }
}

function Shots({ shots }: { shots: Shot[] }) {
  return (
    <div className="sga-shots">
      {shots.map((sh) => (
        <figure key={sh.file} className="sga-shot">
          <Image
            src={`/sobergirl/screens/${sh.file}.png`}
            alt={sh.alt}
            title={sh.title}
            width={720}
            height={1565}
            sizes="(max-width: 700px) 60vw, 240px"
            style={{ width: '100%', height: 'auto' }}
          />
          <figcaption>{sh.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function articleJsonLd(a: Article) {
  const url = `${SG_BASE}/${a.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.h1,
        description: a.metaDescription,
        image: [`${SG_BASE}/${a.slug}-og.png`, ...(a.shots ?? []).map((sh) => `${SG_BASE}/screens/${sh.file}.png`)],
        datePublished: SG_UPDATED,
        dateModified: SG_UPDATED,
        author: { '@type': 'Organization', name: 'Sober Girl by ShipAI Lab', url: SG_BASE },
        abstract: a.quickAnswer.replace(/\[\[\w+\]\]/g, ''),
        publisher: { '@type': 'Organization', name: 'ShipAI Lab', url: SG_SITE },
        mainEntityOfPage: url,
        citation: a.sources.map((id) => SOURCES[id].url),
      },
      ...(a.shots ?? []).map((sh) => ({
        '@type': 'ImageObject',
        contentUrl: `${SG_BASE}/screens/${sh.file}.png`,
        url: `${SG_BASE}/screens/${sh.file}.png`,
        name: sh.title,
        description: sh.alt,
        caption: sh.caption,
        width: 720,
        height: 1565,
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Sober Girl', item: SG_BASE },
          { '@type': 'ListItem', position: 2, name: a.h1, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: a.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export default function ArticleView({ article }: { article: Article }) {
  const related = article.related
    .map((s) => ARTICLES.find((x) => x.slug === s))
    .filter((x): x is Article => Boolean(x));

  // Screenshots sit after the first section that holds the inline app prompt, or after the first section.
  const ctaIndex = article.sections.findIndex((s) => s.blocks.some((b) => b.t === 'cta'));
  const shotsIndex = ctaIndex === -1 ? 0 : ctaIndex;

  return (
    <>
      <style>{SG_ARTICLE_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }} />
      <div className="sga">
        <nav className="sga-nav">
          <Link href="/sobergirl" className="sga-brand">
            <Image src="/sobergirl-icon.png" alt="Sober Girl" width={34} height={34} style={{ borderRadius: 10 }} />
            <span>sober girl</span>
          </Link>
          <div className="sga-nav-links">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/sobergirl/${a.slug}`}>{a.kicker === 'Comparison' ? 'Compare apps' : a.slug === 'sobriety-milestones' ? 'Milestones' : 'Sober October'}</Link>
            ))}
            <Link href="/sobergirl/support">Support</Link>
          </div>
          <a href={PLAY_STORE_URL} className="sga-btn" target="_blank" rel="noopener noreferrer">Get the app</a>
        </nav>

        <main className="sga-wrap">
          <div className="sga-crumbs">
            <Link href="/sobergirl">Sober Girl</Link> / {article.kicker}
          </div>
          <span className="sga-kicker">{article.kicker}</span>
          <h1>{article.h1}</h1>
          <p className="sga-dek">{article.dek}</p>
          <section className="sga-quick" aria-label="Quick answer">
            <strong>Quick answer</strong>
            <p>{renderInline(article.quickAnswer, article)}</p>
          </section>
          <div className="sga-meta">
            By the Sober Girl team at ShipAI Lab · Updated {formatDate(SG_UPDATED)} · {article.sources.length > 0 ? `${article.sources.length} sources cited` : (article.metaNote ?? 'No external sources needed')} · General information, not medical advice
          </div>

          <div className="sga-hero">
            <img src={`/sobergirl/${article.slug}-hero.svg`} alt={article.heroAlt} width={1200} height={630} fetchPriority="high" />
          </div>

          <nav className="sga-toc" aria-label="Contents">
            <strong>In this guide</strong>
            <ol>
              {article.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.h2}</a></li>
              ))}
              <li><a href="#faq">Frequently asked questions</a></li>
              {article.sources.length > 0 && <li><a href="#sources">Sources</a></li>}
            </ol>
          </nav>

          <div className="sga-body">
            {article.sections.map((s, si) => (
              <section key={s.id} id={s.id}>
                <h2>{s.h2}</h2>
                {s.blocks.map((b, i) => renderBlock(b, i, article))}
                {article.shots && si === shotsIndex && <Shots shots={article.shots} />}
              </section>
            ))}

            <section id="faq" className="sga-faq">
              <h2>Frequently asked questions</h2>
              {article.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>

            {article.sources.length > 0 && (
            <section id="sources" className="sga-sources">
              <h2>Sources</h2>
              <ol>
                {article.sources.map((id, i) => {
                  const s = SOURCES[id];
                  return (
                    <li key={id} id={`src-${i + 1}`}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.title}</a>. {s.publisher}.{s.note ? ` ${s.note}` : ''}
                    </li>
                  );
                })}
              </ol>
              <p className="sga-method">
                <strong>How we write these.</strong> Every figure above links to the source it came from, and we label self-reported and observational results as such. Where we could not find a source we trust, the page says so instead of filling the gap. Sober Girl is made by ShipAI Lab and this is not medical advice. Sources were checked on 6 October 2026. If you spot an error, email us at integrateopenai@gmail.com.
              </p>
            </section>
            )}

            {related.length > 0 && (
              <>
                <h2>Keep reading</h2>
                <div className="sga-related">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/sobergirl/${r.slug}`}>{r.h1}</Link>
                  ))}
                </div>
              </>
            )}

            <div className="sga-cta">
              <h2>Today is day one.</h2>
              <p>Sober Girl is a private sobriety tracker for women, on Android now and coming soon to iPhone: day counter, money saved, craving SOS and a tree that grows with you. Free to start.</p>
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
