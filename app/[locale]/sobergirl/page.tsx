import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sober Girl — Your Sobriety Companion',
  description:
    'Sober Girl is the beautiful, private sobriety app for women. Track your streak, journal your journey, and grow your tree — one sober day at a time.',
  keywords: [
    'sober app',
    'sobriety tracker',
    'quit drinking',
    'alcohol free',
    'sober girl',
    'sobriety journal',
    'women sobriety',
    'sober living',
  ],
  alternates: {
    canonical: 'https://shipailab.com/sobergirl',
  },
  openGraph: {
    title: 'Sober Girl — Your Sobriety Companion',
    description:
      'Track your streak, journal your journey, and grow your tree — one sober day at a time.',
    url: 'https://shipailab.com/sobergirl',
    siteName: 'Sober Girl',
    images: [
      {
        url: '/sobergirl-icon.png',
        width: 1024,
        height: 1024,
        alt: 'Sober Girl App Icon',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sober Girl — Your Sobriety Companion',
    description:
      'Track your streak, journal your journey, and grow your tree — one sober day at a time.',
    images: ['/sobergirl-icon.png'],
  },
};

const features = [
  {
    icon: '🌸',
    title: 'Day Counter',
    desc: 'See exactly how many days, hours, and weeks you have been sober. Your progress, beautifully displayed.',
  },
  {
    icon: '💸',
    title: 'Money Saved',
    desc: 'Watch the savings add up. Enter what you used to spend and see the real cost of sobriety — in your favour.',
  },
  {
    icon: '🌿',
    title: 'Your Living Tree',
    desc: 'A tree grows with you. Water it daily, unlock new stages, and let it bloom as a living symbol of your growth.',
  },
  {
    icon: '📓',
    title: 'Private Journal',
    desc: 'Write freely. Your words stay on your device — fully private, never synced or shared.',
  },
  {
    icon: '🆘',
    title: 'Craving SOS',
    desc: 'A breathing exercise, 10-minute timer, and your personal reason — always one tap away when you need it most.',
  },
  {
    icon: '🏅',
    title: 'Milestone Badges',
    desc: 'Celebrate every win: 1 day, 1 week, 30 days, 1 year and beyond — with beautiful shareable milestone cards.',
  },
  {
    icon: '📊',
    title: 'Mood Insights',
    desc: 'Track your daily check-ins and see patterns in your mood over time. Know yourself better.',
  },
  {
    icon: '🔔',
    title: 'Gentle Reminders',
    desc: 'A daily nudge at the time you choose — kind, never naggy.',
  },
];

const freeVsPlus = [
  { feature: 'Day counter, money saved, hours & weeks', free: true, plus: true },
  { feature: 'Daily check-in', free: true, plus: true },
  { feature: 'Craving SOS (breathing, timer, your reason)', free: true, plus: true },
  { feature: 'Milestone list with locked/unlocked states', free: true, plus: true },
  { feature: 'Your tree: growth, watering, stage collection', free: true, plus: true },
  { feature: 'Shareable milestone cards', free: false, plus: true },
  { feature: 'Private journal', free: false, plus: true },
  { feature: 'Mood & check-in insights', free: false, plus: true },
  { feature: 'Journal blossoms on your tree', free: false, plus: true },
];

export default function SoberGirlPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap');

        :root {
          --cream: #FCF6EF;
          --blush: #F9E8E3;
          --blush-deep: #F2D3CC;
          --petal: #FFFAF6;
          --plum: #5A2A4C;
          --plum-soft: #7C4B6D;
          --plum-tint: #EBDCE6;
          --sage: #8FAE8F;
          --sage-deep: #5E8262;
          --sage-tint: #E4EEE1;
          --rose: #E8928E;
          --rose-deep: #D2716F;
          --rose-tint: #FBE1DD;
          --champagne: #E9C98F;
          --ink: #3A2235;
          --ink-soft: #7D6577;
          --ink-faint: #B4A0AC;
          --line: #EFDDD6;
        }

        .sg-page {
          font-family: 'Nunito', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
        }

        /* ── NAV ── */
        .sg-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          background: rgba(252,246,239,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .sg-nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .sg-nav-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          object-fit: cover;
        }
        .sg-nav-wordmark {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--plum);
          letter-spacing: -0.4px;
        }
        .sg-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .sg-nav-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink-soft);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sg-nav-link:hover { color: var(--plum); }
        .sg-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--plum);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 10px 22px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }
        .sg-btn-primary:hover {
          background: var(--plum-soft);
          transform: translateY(-1px);
        }

        /* ── HERO ── */
        .sg-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 100px 24px 80px;
          position: relative;
          overflow: hidden;
        }
        .sg-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(232,146,142,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .sg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--plum-tint);
          color: var(--plum);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 50px;
          margin-bottom: 28px;
        }
        .sg-hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(44px, 7vw, 80px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          color: var(--ink);
          margin-bottom: 24px;
          max-width: 700px;
        }
        .sg-hero-title span {
          color: var(--plum);
        }
        .sg-hero-sub {
          font-size: 19px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 520px;
          margin-bottom: 44px;
        }
        .sg-hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 64px;
        }
        .sg-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--plum);
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 10px 22px;
          border-radius: 50px;
          text-decoration: none;
          border: 2px solid var(--plum-tint);
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .sg-btn-ghost:hover {
          border-color: var(--plum);
          background: var(--plum-tint);
          transform: translateY(-1px);
        }
        .sg-hero-icon-wrap {
          position: relative;
          display: inline-block;
        }
        .sg-hero-icon {
          width: 160px;
          height: 160px;
          border-radius: 36px;
          box-shadow:
            0 32px 80px rgba(90,42,76,0.25),
            0 8px 24px rgba(90,42,76,0.12);
        }
        .sg-hero-badge-float {
          position: absolute;
          bottom: -12px;
          right: -24px;
          background: #fff;
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 0 8px 24px rgba(90,42,76,0.15);
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: float 3s ease-in-out infinite;
        }
        .sg-hero-badge-float2 {
          position: absolute;
          top: -12px;
          left: -28px;
          background: #fff;
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 0 8px 24px rgba(90,42,76,0.15);
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: float 3s ease-in-out infinite 1.5s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* ── STATS BAR ── */
        .sg-stats {
          display: flex;
          justify-content: center;
          gap: 0;
          background: var(--plum);
          padding: 36px 40px;
          flex-wrap: wrap;
        }
        .sg-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 48px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .sg-stat:last-child { border-right: none; }
        .sg-stat-num {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 40px;
          letter-spacing: -1px;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .sg-stat-label {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        /* ── SECTION ── */
        .sg-section {
          padding: 96px 24px;
        }
        .sg-section-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .sg-section-tag {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--rose-deep);
          margin-bottom: 12px;
          display: block;
        }
        .sg-section-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.8px;
          color: var(--ink);
          margin-bottom: 16px;
        }
        .sg-section-sub {
          font-size: 17px;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 560px;
          margin-bottom: 56px;
        }

        /* ── FEATURES GRID ── */
        .sg-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .sg-feature-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 28px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .sg-feature-card:hover {
          box-shadow: 0 12px 40px rgba(90,42,76,0.1);
          transform: translateY(-3px);
        }
        .sg-feature-emoji {
          font-size: 32px;
          margin-bottom: 14px;
          display: block;
        }
        .sg-feature-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 18px;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .sg-feature-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        /* ── FREE VS PLUS ── */
        .sg-alt {
          background: var(--blush);
        }
        .sg-table-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: #fff;
        }
        .sg-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 15px;
        }
        .sg-table thead {
          background: var(--plum);
          color: #fff;
        }
        .sg-table thead th {
          padding: 18px 24px;
          text-align: center;
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.3px;
        }
        .sg-table thead th:first-child {
          text-align: left;
        }
        .sg-table tbody tr {
          border-top: 1px solid var(--line);
          transition: background 0.15s;
        }
        .sg-table tbody tr:hover {
          background: var(--petal);
        }
        .sg-table tbody td {
          padding: 14px 24px;
          color: var(--ink-soft);
        }
        .sg-table tbody td:not(:first-child) {
          text-align: center;
        }
        .sg-check { color: var(--sage-deep); font-size: 18px; }
        .sg-dash { color: var(--ink-faint); font-size: 18px; }

        /* ── BRAND STORY ── */
        .sg-brand-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .sg-brand-img-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .sg-brand-mark {
          width: 280px;
          height: 280px;
          object-fit: contain;
          filter: drop-shadow(0 20px 60px rgba(90,42,76,0.2));
          animation: gentle-spin 20s linear infinite;
        }
        @keyframes gentle-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sg-brand-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 340px;
          background: radial-gradient(circle, rgba(232,146,142,0.25) 0%, transparent 70%);
          pointer-events: none;
          border-radius: 50%;
        }

        /* ── QUOTES ── */
        .sg-quotes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .sg-quote-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 28px;
          position: relative;
        }
        .sg-quote-stars {
          color: var(--champagne);
          font-size: 16px;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }
        .sg-quote-text {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink);
          margin-bottom: 16px;
        }
        .sg-quote-author {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink-soft);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        /* ── CTA BOTTOM ── */
        .sg-cta-section {
          background: linear-gradient(135deg, var(--plum) 0%, #8B3A6E 100%);
          padding: 96px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sg-cta-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .sg-cta-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(232,146,142,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .sg-cta-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(36px, 5vw, 58px);
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .sg-cta-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.75);
          max-width: 480px;
          margin: 0 auto 40px;
          line-height: 1.65;
          position: relative;
          z-index: 1;
        }
        .sg-cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .sg-btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--plum);
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 16px;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
        }
        .sg-btn-white:hover {
          opacity: 0.92;
          transform: translateY(-2px);
        }
        .sg-btn-white-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.4);
          transition: border-color 0.2s, transform 0.15s;
        }
        .sg-btn-white-ghost:hover {
          border-color: #fff;
          transform: translateY(-2px);
        }

        /* ── FOOTER ── */
        .sg-footer {
          background: var(--ink);
          padding: 48px 40px 32px;
          color: rgba(255,255,255,0.55);
        }
        .sg-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .sg-footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }
        .sg-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sg-footer-wordmark {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          letter-spacing: -0.4px;
        }
        .sg-footer-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          align-items: center;
        }
        .sg-footer-link {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sg-footer-link:hover { color: #fff; }
        .sg-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
        }
        .sg-footer-email a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-weight: 600;
        }
        .sg-footer-email a:hover { color: #fff; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .sg-nav { padding: 16px 20px; }
          .sg-nav-links { display: none; }
          .sg-hero { padding: 64px 20px 56px; }
          .sg-stats { padding: 32px 20px; gap: 20px; }
          .sg-stat { padding: 12px 24px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .sg-stat:last-child { border-bottom: none; }
          .sg-brand-section { grid-template-columns: 1fr; }
          .sg-brand-mark { width: 200px; height: 200px; }
          .sg-footer-top { flex-direction: column; }
          .sg-footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="sg-page">
        {/* NAV */}
        <nav className="sg-nav">
          <a href="/sobergirl" className="sg-nav-brand">
            <Image src="/sobergirl-icon.png" alt="Sober Girl" width={36} height={36} className="sg-nav-icon" style={{ borderRadius: 10 }} />
            <span className="sg-nav-wordmark">sober girl</span>
          </a>
          <div className="sg-nav-links">
            <a href="#features" className="sg-nav-link">Features</a>
            <a href="#pricing" className="sg-nav-link">Pricing</a>
            <a href="/sobergirl/privacy-policy" className="sg-nav-link">Privacy</a>
            <a href="/sobergirl/terms-of-service" className="sg-nav-link">Terms</a>
          </div>
          <a
            href="https://apps.apple.com/app/sober-girl/id6736904985"
            className="sg-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-nav"
          >
            🍎 Download on iOS
          </a>
        </nav>

        {/* HERO */}
        <section className="sg-hero">
          <div className="sg-hero-badge">🌸 Free to start</div>
          <h1 className="sg-hero-title">
            Your sobriety,<br />
            <span>beautifully tracked</span>
          </h1>
          <p className="sg-hero-sub">
            Sober Girl is the private, beautiful sobriety companion for women.
            Track your streak, journal your journey, and grow a living tree —
            one sober day at a time.
          </p>
          <div className="sg-hero-ctas">
            <a
              href="https://apps.apple.com/app/sober-girl/id6736904985"
              className="sg-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-appstore"
              style={{ fontSize: 17, padding: '14px 28px' }}
            >
              🍎 Download on the App Store
            </a>
            <a href="#features" className="sg-btn-ghost" id="hero-cta-features">
              See what&apos;s inside ↓
            </a>
          </div>
          <div className="sg-hero-icon-wrap">
            <div className="sg-hero-badge-float2">🌿 Day 47 streak</div>
            <Image
              src="/sobergirl-icon.png"
              alt="Sober Girl App"
              width={160}
              height={160}
              className="sg-hero-icon"
            />
            <div className="sg-hero-badge-float">💸 $840 saved</div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="sg-stats">
          <div className="sg-stat">
            <span className="sg-stat-num">Free</span>
            <span className="sg-stat-label">To Start</span>
          </div>
          <div className="sg-stat">
            <span className="sg-stat-num">100%</span>
            <span className="sg-stat-label">Private</span>
          </div>
          <div className="sg-stat">
            <span className="sg-stat-num">iOS</span>
            <span className="sg-stat-label">Native App</span>
          </div>
          <div className="sg-stat">
            <span className="sg-stat-num">∞</span>
            <span className="sg-stat-label">Journey Days</span>
          </div>
        </div>

        {/* FEATURES */}
        <section className="sg-section" id="features">
          <div className="sg-section-inner">
            <span className="sg-section-tag">Everything you need</span>
            <h2 className="sg-section-title">Built for your journey</h2>
            <p className="sg-section-sub">
              Every feature was designed with one woman in mind — the one who&apos;s choosing herself today.
            </p>
            <div className="sg-features-grid">
              {features.map((f) => (
                <div key={f.title} className="sg-feature-card">
                  <span className="sg-feature-emoji">{f.icon}</span>
                  <div className="sg-feature-title">{f.title}</div>
                  <p className="sg-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="sg-section sg-alt">
          <div className="sg-section-inner">
            <div className="sg-brand-section">
              <div>
                <span className="sg-section-tag">Our story</span>
                <h2 className="sg-section-title">Made with love,<br />not judgment</h2>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 24 }}>
                  Sober Girl was built for the woman who is quietly choosing better.
                  No shame, no pressure — just a gentle daily companion that meets you
                  wherever you are on your journey.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 32 }}>
                  Your data lives on your device. We never see your journal entries, your streak,
                  or your personal reasons. This is your space.
                </p>
                <a href="#pricing" className="sg-btn-primary" id="brand-cta">
                  Start your journey →
                </a>
              </div>
              <div className="sg-brand-img-wrap">
                <div className="sg-brand-glow" />
                <Image
                  src="/sobergirl-mark.png"
                  alt="Sober Girl bloom mark"
                  width={280}
                  height={280}
                  className="sg-brand-mark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUOTES */}
        <section className="sg-section">
          <div className="sg-section-inner">
            <span className="sg-section-tag">Community love</span>
            <h2 className="sg-section-title">She&apos;s choosing herself</h2>
            <p className="sg-section-sub" style={{ marginBottom: 48 }}>
              Real words from women on their journey.
            </p>
            <div className="sg-quotes-grid">
              {[
                {
                  text: '"Finally an app that doesn\'t feel clinical. The bloom mark, the soft colours, the way it celebrates every single day — it feels like a hug."',
                  author: 'Sarah M.',
                },
                {
                  text: '"The craving SOS saved me on a really hard night. The breathing timer just works. I\'ve been sober 90 days now."',
                  author: 'Rachel T.',
                },
                {
                  text: '"I love watching my tree grow. It sounds simple but seeing that little tree get bigger every day is genuinely motivating."',
                  author: 'Amara K.',
                },
              ].map((q) => (
                <div key={q.author} className="sg-quote-card">
                  <div className="sg-quote-stars">★★★★★</div>
                  <p className="sg-quote-text">{q.text}</p>
                  <span className="sg-quote-author">{q.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE VS PLUS */}
        <section className="sg-section sg-alt" id="pricing">
          <div className="sg-section-inner">
            <span className="sg-section-tag">Pricing</span>
            <h2 className="sg-section-title">Free to start.<br />Plus when you&apos;re ready.</h2>
            <p className="sg-section-sub">
              Core tools are always free. Upgrade to Plus for journal, insights, and shareable milestone cards.
            </p>
            <div className="sg-table-wrap">
              <table className="sg-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Feature</th>
                    <th>Free</th>
                    <th>Plus ✨</th>
                  </tr>
                </thead>
                <tbody>
                  {freeVsPlus.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td>{row.free ? <span className="sg-check">✓</span> : <span className="sg-dash">—</span>}</td>
                      <td>{row.plus ? <span className="sg-check">✓</span> : <span className="sg-dash">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 20, fontSize: 14, color: 'var(--ink-faint)', textAlign: 'center' }}>
              Prices shown in-app · Cancel anytime · Lifetime offer available at first launch
            </p>
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className="sg-cta-section">
          <h2 className="sg-cta-title">Today is day one.</h2>
          <p className="sg-cta-sub">
            Download Sober Girl on the App Store and start your streak. For free. Right now.
          </p>
          <div className="sg-cta-actions">
            <a
              href="https://apps.apple.com/app/sober-girl/id6736904985"
              className="sg-btn-white"
              target="_blank"
              rel="noopener noreferrer"
              id="bottom-cta-appstore"
            >
              🍎 Download on the App Store
            </a>
            <a href="mailto:integrateopenai@gmail.com" className="sg-btn-white-ghost" id="bottom-cta-contact">
              Contact us
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sg-footer">
          <div className="sg-footer-inner">
            <div className="sg-footer-top">
              <div>
                <div className="sg-footer-brand" style={{ marginBottom: 8 }}>
                  <Image src="/sobergirl-icon.png" alt="Sober Girl" width={28} height={28} style={{ borderRadius: 8 }} />
                  <span className="sg-footer-wordmark">sober girl</span>
                </div>
                <p style={{ fontSize: 14, maxWidth: 300, lineHeight: 1.7 }}>
                  A private sobriety companion for women. Built by{' '}
                  <a href="https://shipailab.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    ShipAI Lab
                  </a>.
                </p>
              </div>
              <div className="sg-footer-links">
                <a href="/sobergirl/privacy-policy" className="sg-footer-link" id="footer-privacy">Privacy Policy</a>
                <a href="/sobergirl/terms-of-service" className="sg-footer-link" id="footer-terms">Terms of Service</a>
                <a href="https://shipailab.com" className="sg-footer-link" id="footer-shipai">ShipAI Lab</a>
              </div>
            </div>
            <div className="sg-footer-bottom">
              <span>© {new Date().getFullYear()} Ship AI Solutions, LLC. All rights reserved.</span>
              <span className="sg-footer-email">
                Questions?{' '}
                <a href="mailto:integrateopenai@gmail.com">integrateopenai@gmail.com</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
