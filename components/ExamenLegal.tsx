import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { examenStyles } from '@/app/[locale]/examen-civique/examen-styles';
import { type Lang, type Block, type Section as SectionData, APP, DEVELOPER, EMAIL, UI } from '@/app/[locale]/examen-civique/content';

/** French for the `fr` locale; English for every other locale (matches the site's English-only app pages). */
export const langOf = (locale: string): Lang => (locale === 'fr' ? 'fr' : 'en');
export const basePath = (lang: Lang) => (lang === 'fr' ? '/fr/examen-civique' : '/examen-civique');

/** Tiny inline renderer: [label](https://url) becomes a link, everything else is plain text. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return part;
        const external = m[2].startsWith('http');
        return (
          <a key={i} href={m[2]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ('p' in b) return <p key={i} className="ec-p"><Inline text={b.p} /></p>;
        if ('ul' in b)
          return (
            <ul key={i} className="ec-ul">
              {b.ul.map((li, j) => <li key={j}><Inline text={li} /></li>)}
            </ul>
          );
        if ('note' in b) return <div key={i} className="ec-disclaimer"><Inline text={b.note} /></div>;
        return <ContactCard key={i} lang={lang} />;
      })}
    </>
  );
}

export function Section({ section, lang }: { section: SectionData; lang: Lang }) {
  return (
    <div className="ec-section" id={section.id}>
      <h2 className="ec-h2">{section.title}</h2>
      <Blocks blocks={section.blocks} lang={lang} />
    </div>
  );
}

export function Toc({ sections, lang }: { sections: SectionData[]; lang: Lang }) {
  return (
    <div className="ec-toc">
      <div className="ec-toc-title">{UI.toc[lang]}</div>
      <ol>
        {sections.map((s) => (
          <li key={s.id}><a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s*/, '')}</a></li>
        ))}
      </ol>
    </div>
  );
}

export function ContactCard({ lang }: { lang: Lang }) {
  return (
    <div className="ec-contact-card">
      <p><strong>{DEVELOPER}</strong> · {UI.developerOf[lang]} {APP.short}</p>
      <p>Email : <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      <p>{UI.website[lang]} : <a href={`https://shipailab.com${basePath(lang)}`}>shipailab.com{basePath(lang)}</a></p>
    </div>
  );
}

export function BottomLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="ec-bottom-links">
      {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
    </div>
  );
}

function Nav({ lang }: { lang: Lang }) {
  const b = basePath(lang);
  return (
    <nav className="ec-nav">
      <Link href={b} className="ec-brand"><span className="ec-wordmark">{APP.short}</span></Link>
      <div className="ec-nav-links">
        <Link href={`${b}/support`} className="ec-nav-link">{UI.support[lang]}</Link>
        <Link href={`${b}/privacy-policy`} className="ec-nav-link">{UI.privacy[lang]}</Link>
        <Link href={`${b}/terms-of-service`} className="ec-nav-link">{UI.terms[lang]}</Link>
        <Link href={lang === 'fr' ? '/examen-civique' : '/fr/examen-civique'} className="ec-nav-link ec-keep" hrefLang={lang === 'fr' ? 'en' : 'fr'}>
          {lang === 'fr' ? 'English' : 'Français'}
        </Link>
      </div>
    </nav>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const b = basePath(lang);
  return (
    <footer className="ec-footer">
      <p>
        © {new Date().getFullYear()} {DEVELOPER} ·{' '}
        <Link href={`${b}/privacy-policy`}>{UI.privacy[lang]}</Link> · <Link href={`${b}/terms-of-service`}>{UI.terms[lang]}</Link> ·{' '}
        <Link href={`${b}/support`}>{UI.support[lang]}</Link>
      </p>
      <p style={{ marginTop: 8, fontSize: 12 }}>{UI.footerNote[lang]}</p>
    </footer>
  );
}

interface ShellProps { lang: Lang; badge: string; title: string; subtitle: string; children: ReactNode; wide?: boolean }

/** Shared frame for the legal and support pages: nav, hero, body, footer. */
export function ExamenShell({ lang, badge, title, subtitle, children, wide }: ShellProps) {
  return (
    <>
      <style>{examenStyles}</style>
      <div className="ec-page" lang={lang}>
        <Nav lang={lang} />
        <div className="ec-hero">
          <div className="ec-badge">{badge}</div>
          <h1 className="ec-hero-title">{title}</h1>
          <p className="ec-hero-sub">{subtitle}</p>
        </div>
        <div className={wide ? 'ec-body ec-body-wide' : 'ec-body'}>{children}</div>
        <Footer lang={lang} />
      </div>
    </>
  );
}

export { Nav, Footer as ExamenFooter };

/** Metadata with a language-specific canonical and hreflang alternates between the French and English pages. */
export function pageMeta(lang: Lang, path: string, title: string, description: string): Metadata {
  const en = `https://shipailab.com/examen-civique${path}`;
  const fr = `https://shipailab.com/fr/examen-civique${path}`;
  const url = lang === 'fr' ? fr : en;
  return {
    title,
    description,
    alternates: { canonical: url, languages: { fr, en, 'x-default': en } },
    openGraph: { title, description, url, type: 'website', locale: lang === 'fr' ? 'fr_FR' : 'en_US' },
  };
}
