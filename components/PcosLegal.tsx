import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pcosStyles } from '@/app/[locale]/pcos/pcos-styles';

export { BottomLinks, Section, Toc } from '@/components/NerraLegal';

export const PCOS_NAME = 'PCOS & Endo Tracker';
export const PCOS_EMAIL = 'integrateopenai@gmail.com';
export const PCOS_UPDATED = 'October 6, 2026';

interface ShellProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  wide?: boolean;
}

/** Shared frame for the PCOS & Endo Tracker pages: nav, hero, body, footer. */
export function PcosShell({ badge, title, subtitle, children, wide }: ShellProps) {
  return (
    <>
      <style>{pcosStyles}</style>
      <div className="nr-page">
        <nav className="nr-nav">
          <Link href="/pcos" className="nr-brand">
            <Image src="/pcos-icon.png" alt={PCOS_NAME} width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="nr-wordmark">PCOS &amp; Endo</span>
          </Link>
          <div className="nr-nav-links">
            <Link href="/pcos/support" className="nr-nav-link">Support</Link>
            <Link href="/pcos/privacy-policy" className="nr-nav-link">Privacy</Link>
            <Link href="/pcos/terms-of-service" className="nr-nav-link">Terms</Link>
            <Link href="/pcos" className="nr-nav-link nr-keep">← App</Link>
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
            © {new Date().getFullYear()} Hicham Zaidi ·{' '}
            <Link href="/pcos/privacy-policy">Privacy</Link> · <Link href="/pcos/terms-of-service">Terms</Link> ·{' '}
            <Link href="/pcos/support">Support</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export function PcosContactCard() {
  return (
    <div className="nr-contact-card">
      <p><strong>Hicham Zaidi</strong> · Developer of {PCOS_NAME}</p>
      <p>Email: <a href={`mailto:${PCOS_EMAIL}`}>{PCOS_EMAIL}</a></p>
      <p>Website: <a href="https://shipailab.com/pcos">shipailab.com/pcos</a></p>
    </div>
  );
}
