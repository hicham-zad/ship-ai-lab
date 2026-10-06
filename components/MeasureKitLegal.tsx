import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { measureKitStyles } from '@/app/[locale]/measure-kit/measure-kit-styles';

export const MK_EMAIL = 'hzaydi24@gmail.com';
export const MK_UPDATED = 'October 6, 2026';

interface ShellProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  wide?: boolean;
}

/** Shared frame for the Measure Kit legal and support pages: nav, hero, body, footer. */
export function MeasureKitShell({ badge, title, subtitle, children, wide }: ShellProps) {
  return (
    <>
      <style>{measureKitStyles}</style>
      <div className="mk-page">
        <nav className="mk-nav">
          <Link href="/measure-kit" className="mk-brand">
            <Image src="/measure-kit-icon.png" alt="Measure Kit" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="mk-wordmark">Measure Kit</span>
          </Link>
          <div className="mk-nav-links">
            <Link href="/measure-kit/support" className="mk-nav-link">Support</Link>
            <Link href="/measure-kit/privacy-policy" className="mk-nav-link">Privacy</Link>
            <Link href="/measure-kit/terms-of-service" className="mk-nav-link">Terms</Link>
            <Link href="/measure-kit" className="mk-nav-link mk-keep">← Measure Kit</Link>
          </div>
        </nav>

        <div className="mk-hero">
          <div className="mk-badge">{badge}</div>
          <h1 className="mk-hero-title">{title}</h1>
          <p className="mk-hero-sub">{subtitle}</p>
        </div>

        <div className={wide ? 'mk-body mk-body-wide' : 'mk-body'}>{children}</div>

        <footer className="mk-footer">
          <p>
            © {new Date().getFullYear()} Hicham Zaidi ·{' '}
            <Link href="/measure-kit/privacy-policy">Privacy</Link> · <Link href="/measure-kit/terms-of-service">Terms</Link> ·{' '}
            <Link href="/measure-kit/support">Support</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <div className="mk-section" id={id}>
      <h2 className="mk-h2">{title}</h2>
      {children}
    </div>
  );
}

export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="mk-toc">
      <div className="mk-toc-title">Table of Contents</div>
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
    <div className="mk-contact-card">
      <p><strong>Hicham Zaidi</strong> · Developer of Measure Kit</p>
      <p>Email: <a href={`mailto:${MK_EMAIL}`}>{MK_EMAIL}</a></p>
      <p>Website: <a href="https://shipailab.com/measure-kit">shipailab.com/measure-kit</a></p>
    </div>
  );
}

export function BottomLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="mk-bottom-links">
      {links.map((l) => (
        <Link key={l.href} href={l.href}>{l.label}</Link>
      ))}
    </div>
  );
}
