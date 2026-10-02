import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nerraStyles } from '@/app/[locale]/nerra/nerra-styles';

export const NERRA_EMAIL = 'integrateopenai@gmail.com';
export const NERRA_UPDATED = 'October 2, 2026';

interface ShellProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  wide?: boolean;
}

/** Shared frame for the Nerra legal and support pages: nav, hero, body, footer. */
export function NerraShell({ badge, title, subtitle, children, wide }: ShellProps) {
  return (
    <>
      <style>{nerraStyles}</style>
      <div className="nr-page">
        <nav className="nr-nav">
          <Link href="/nerra" className="nr-brand">
            <Image src="/nerra-icon.png" alt="Nerra" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="nr-wordmark">Nerra</span>
          </Link>
          <div className="nr-nav-links">
            <Link href="/nerra/support" className="nr-nav-link">Support</Link>
            <Link href="/nerra/privacy-policy" className="nr-nav-link">Privacy</Link>
            <Link href="/nerra/terms-of-service" className="nr-nav-link">Terms</Link>
            <Link href="/nerra" className="nr-nav-link nr-keep">← Nerra</Link>
          </div>
        </nav>

        <div className="nr-hero">
          <div className="nr-badge">{badge}</div>
          <h1 className="nr-hero-title">{title}</h1>
          <p className="nr-hero-sub">{subtitle}</p>
        </div>

        <div className={wide ? 'nr-body nr-body-wide' : 'nr-body'}>{children}</div>

        <footer className="nr-footer">
          <p>
            © {new Date().getFullYear()} Ship AI Solutions, LLC ·{' '}
            <Link href="/nerra/privacy-policy">Privacy</Link> · <Link href="/nerra/terms-of-service">Terms</Link> ·{' '}
            <Link href="/nerra/support">Support</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <div className="nr-section" id={id}>
      <h2 className="nr-h2">{title}</h2>
      {children}
    </div>
  );
}

export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="nr-toc">
      <div className="nr-toc-title">Table of Contents</div>
      <ol>
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`}>{i.label}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="nr-contact-card">
      <p><strong>Ship AI Solutions, LLC</strong></p>
      <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
      <p>Email: <a href={`mailto:${NERRA_EMAIL}`}>{NERRA_EMAIL}</a></p>
      <p>Website: <a href="https://shipailab.com/nerra">shipailab.com/nerra</a></p>
    </div>
  );
}

export function BottomLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="nr-bottom-links">
      {links.map((l) => (
        <Link key={l.href} href={l.href}>{l.label}</Link>
      ))}
    </div>
  );
}
