import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ARTICLES, type Article, type Block, type Shot } from '@/data/nerra/articles';
import { NR_AUTHOR, NR_BASE, NR_SITE, NR_UPDATED } from '@/data/nerra/config';
import { SOURCES } from '@/data/nerra/sources';
import MissedDoseChecker from './MissedDoseChecker';
import RotationPlanner from './RotationPlanner';
import { NR_ARTICLE_CSS } from './styles';

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function renderInline(text: string, article: Article): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[\[(\w+)\]\]|\*\*(.+?)\*\*|\[([^\]]+)\]\((\/[^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const n = article.sources.indexOf(m[1]) + 1;
      if (n === 0) throw new Error(`Uncited source id "${m[1]}" in ${article.slug}`);
      out.push(<sup key={i++}><a href={`#src-${n}`} aria-label={`Source ${n}`}>[{n}]</a></sup>);
    } else if (m[2]) out.push(<strong key={i++}>{renderInline(m[2], article)}</strong>);
    else if (m[3]) out.push(<Link key={i++} href={m[4]}>{m[3]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Shots({ shots }: { shots: Shot[] }) {
  return (
    <div className="nra-shots">
      {shots.map((sh) => (
        <figure key={sh.file} className="nra-shot">
          <Image
            src={`/nerra/${sh.file}.png`}
            alt={sh.alt}
            title={sh.title}
            width={700}
            height={1522}
            sizes="(max-width: 700px) 60vw, 240px"
            style={{ width: '100%', height: 'auto' }}
          />
          <figcaption>{sh.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function SoonPill({ dark }: { dark?: boolean }) {
  return <span className={`nra-pill${dark ? ' on-dark' : ''}`}>Coming soon to the App Store</span>;
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
        <aside key={k} className={`nra-callout ${b.kind}`}>
          <strong>{b.title}</strong>
          <p>{renderInline(b.x, article)}</p>
        </aside>
      );
    case 'table':
      return (
        <div key={k} className="nra-tablewrap">
          <table className="nra-table">
            <thead><tr>{b.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row">{renderInline(c, article)}</th> : <td key={ci}>{renderInline(c, article)}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
          {b.caption && <div className="nra-cap">{renderInline(b.caption, article)}</div>}
        </div>
      );
    case 'tool':
      return b.id === 'rotation' ? <RotationPlanner key={k} /> : <MissedDoseChecker key={k} />;
    case 'cta':
      return (
        <aside key={k} className="nra-cta-inline">
          <div><strong>{b.title}</strong><p>{b.x}</p></div>
          <SoonPill />
        </aside>
      );
    case 'fit':
      return (
        <div key={k} className="nra-fit">
          <div className="nra-fit-col good">
            <strong>A good fit if you</strong>
            <ul>
              <li>use an iPhone (it is coming soon to the App Store)</li>
              <li>want your dose history, sites and weight kept private on your own device</li>
              <li>do not want an account, ads or a subscription</li>
              <li>enter the dose your prescriber gave you and want a log, reminders and a clean report for appointments</li>
            </ul>
          </div>
          <div className="nra-fit-col not">
            <strong>Not the right fit if you</strong>
            <ul>
              <li>use Android (there is no Android version)</li>
              <li>want an app that tells you what dose to take. Nerra never does</li>
              <li>want a community feed, coaching or a prescriber marketplace</li>
              <li>need it today. It is not on the App Store yet</li>
            </ul>
          </div>
        </div>
      );
  }
}

export function articleJsonLd(a: Article) {
  const url = `${NR_BASE}/${a.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      headline: a.h1,
      description: a.metaDescription,
      image: [`${NR_SITE}/nerra/og/${a.slug}.png`, ...(a.shots ?? []).map((sh) => `${NR_SITE}/nerra/${sh.file}.png`)],
      datePublished: NR_UPDATED,
      dateModified: NR_UPDATED,
      author: { '@type': 'Person', name: NR_AUTHOR },
      abstract: a.quickAnswer.replace(/\[\[\w+\]\]/g, ''),
      publisher: { '@type': 'Organization', name: 'ShipAI Lab', url: NR_SITE },
      mainEntityOfPage: url,
      ...(a.sources.length ? { citation: a.sources.map((id) => SOURCES[id].url) } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Nerra', item: NR_BASE },
        { '@type': 'ListItem', position: 2, name: a.h1, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: a.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  for (const sh of a.shots ?? []) {
    graph.push({
      '@type': 'ImageObject',
      contentUrl: `${NR_SITE}/nerra/${sh.file}.png`,
      url: `${NR_SITE}/nerra/${sh.file}.png`,
      name: sh.title,
      description: sh.alt,
      caption: sh.caption,
      width: 700,
      height: 1522,
      creator: { '@type': 'Person', name: NR_AUTHOR },
    });
  }
  if (a.slug === 'nerra-app') {
    // No rating or review markup: there are no reviews yet.
    graph.push({
      '@type': 'MobileApplication',
      name: 'Nerra',
      operatingSystem: 'iOS',
      applicationCategory: 'HealthApplication',
      description: 'A private GLP-1 companion for iPhone. Tracks doses you enter, injection sites, weight and check-ins. No account, no cloud.',
      url: NR_BASE,
      inLanguage: ['en', 'de'],
      author: { '@type': 'Person', name: NR_AUTHOR },
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function NerraChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{NR_ARTICLE_CSS}</style>
      <div className="nra">
        <nav className="nra-nav">
          <Link href="/nerra" className="nra-brand">
            <Image src="/nerra-icon.png" alt="Nerra" width={32} height={32} style={{ borderRadius: 9 }} />
            <span>Nerra</span>
          </Link>
          <div className="nra-nav-links">
            <Link href="/nerra/guides">Guides</Link>
            <Link href="/nerra/glp-1-injection-site-rotation">Site planner</Link>
            <Link href="/nerra/glp-1-missed-dose">Missed dose</Link>
            <Link href="/nerra/support">Support</Link>
          </div>
          <SoonPill />
        </nav>
        {children}
        <footer className="nra-foot">
          <div className="nra-foot-in">
            <div>
              <Link href="/nerra">Nerra</Link>
              <Link href="/nerra/guides">Guides</Link>
              <Link href="/nerra/support">Support</Link>
              <Link href="/nerra/privacy-policy">Privacy</Link>
              <Link href="/nerra/terms-of-service">Terms</Link>
            </div>
            <div>© {new Date().getFullYear()} {NR_AUTHOR}</div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default function NerraArticleView({ article }: { article: Article }) {
  const related = article.related.map((s) => ARTICLES.find((x) => x.slug === s)).filter((x): x is Article => Boolean(x));
  return (
    <NerraChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }} />
      <main className="nra-wrap">
        <div className="nra-crumbs"><Link href="/nerra">Nerra</Link> / <Link href="/nerra/guides">Guides</Link> / {article.kicker}</div>
        <span className="nra-kicker">{article.kicker}</span>
        <h1>{article.h1}</h1>
        <p className="nra-dek">{article.dek}</p>
        <section className="nra-quick" aria-label="Quick answer">
          <strong>Quick answer</strong>
          <p>{renderInline(article.quickAnswer, article)}</p>
        </section>
        <div className="nra-meta">
          By {NR_AUTHOR}, maker of Nerra · Updated {formatDate(NR_UPDATED)} · {article.sources.length > 0 ? `${article.sources.length} label${article.sources.length > 1 ? 's' : ''} cited` : 'Product facts from the Nerra pages'} · General information, not medical advice
        </div>

        <nav className="nra-toc" aria-label="Contents">
          <strong>In this guide</strong>
          <ol>
            {article.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.h2}</a></li>)}
            <li><a href="#faq">Frequently asked questions</a></li>
            {article.sources.length > 0 && <li><a href="#sources">Sources</a></li>}
          </ol>
        </nav>

        <div className="nra-body">
          {article.sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.h2}</h2>
              {s.blocks.map((b, i) => renderBlock(b, i, article))}
              {article.shots && article.shotsAfter === s.id && <Shots shots={article.shots} />}
            </section>
          ))}

          <section id="faq" className="nra-faq">
            <h2>Frequently asked questions</h2>
            {article.faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </section>

          {article.sources.length > 0 && (
            <section id="sources" className="nra-sources">
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
              <p className="nra-method">
                <strong>How we write these.</strong> Every dose, interval and window above comes from the manufacturer’s US prescribing information, checked on 6 October 2026, and links to it. Labels are updated, so check the current label or ask your pharmacist before you act. Nerra is made by {NR_AUTHOR}. We do not sell any medicine and are not affiliated with any manufacturer. If you spot an error, tell us through the Nerra support page.
              </p>
            </section>
          )}

          {related.length > 0 && (
            <>
              <h2>Keep reading</h2>
              <div className="nra-related">{related.map((r) => <Link key={r.slug} href={`/nerra/${r.slug}`}>{r.h1}</Link>)}</div>
            </>
          )}

          <div className="nra-end">
            <h2>Your therapy, completely in view.</h2>
            <p>Nerra is a private GLP-1 companion for iPhone: doses you enter, injection sites, weight and check-ins. No account, no cloud, pay once.</p>
            <SoonPill dark />
          </div>
          <p className="nra-legal">
            Nerra is not a medical device and does not provide medical advice. You always enter the dose your prescriber gave you; Nerra never calculates or suggests one. Always follow your prescriber’s instructions. Nerra is not affiliated with any medication manufacturer. Product names belong to their owners.
          </p>
        </div>
      </main>
    </NerraChrome>
  );
}
