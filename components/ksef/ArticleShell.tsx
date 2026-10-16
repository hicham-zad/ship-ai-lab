import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteFooter, SiteNav } from '@/components/ksef/SiteChrome';

export interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
  label: string;
  title: string;
  lede?: ReactNode;
  meta?: ReactNode;
  toc?: { id: string; label: string }[];
  children: ReactNode;
  after?: ReactNode;
}

/** Shared frame for guides, legal and support pages: same nav, type and footer as the landing page. */
export function ArticleShell({ crumbs, label, title, lede, meta, toc, children, after }: Props) {
  return (
    <>
      <SiteNav />
      <main id="main">
        <header className="fk-art-head">
          <div className="fk-wrap">
            <nav className="fk-crumbs" aria-label="Okruszki">
              <ol>
                {crumbs.map((c, i) => (
                  <li key={i}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
                ))}
              </ol>
            </nav>
            <p className="fk-label">{label}</p>
            <h1 className="fk-art-title">{title}</h1>
            {lede && <p className="fk-art-lede">{lede}</p>}
            {meta && <div className="fk-art-meta">{meta}</div>}
          </div>
        </header>
        <div className={toc && toc.length > 0 ? 'fk-wrap fk-art-grid' : 'fk-wrap fk-art-grid fk-art-grid-solo'}>
          {toc && toc.length > 0 && (
            <aside className="fk-toc" aria-label="Spis treści">
              <p className="fk-label">Na tej stronie</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
                ))}
              </ol>
            </aside>
          )}
          <div className="fk-prose">{children}</div>
        </div>
        {after}
      </main>
      <SiteFooter />
    </>
  );
}
