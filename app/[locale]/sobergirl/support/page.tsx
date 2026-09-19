import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Sober Girl',
  description:
    'Get help with the Sober Girl app. Contact support, find answers to common questions, and manage your subscription.',
  alternates: {
    canonical: 'https://shipailab.com/sobergirl/support',
  },
  openGraph: {
    title: 'Support | Sober Girl',
    description:
      'Get help with the Sober Girl app. Contact support and find answers to common questions.',
    url: 'https://shipailab.com/sobergirl/support',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How do I reset my sobriety date?',
    a: 'Go to the Home screen and tap on your name or profile area at the top. You\'ll find an option to update your sobriety start date. Your previous streak data is not deleted — only the start date changes.',
  },
  {
    q: 'Is my journal private?',
    a: 'Yes, completely. Your journal entries are stored only on your device and are never sent to our servers, synced to the cloud, or shared with anyone. Deleting the app permanently deletes your journal.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Open your iPhone Settings → tap your name → Subscriptions → find Sober Girl and tap Cancel Subscription. You\'ll keep Plus access until the end of the current billing period.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Refunds are handled directly by Apple. Visit reportaproblem.apple.com, find your Sober Girl purchase, and submit a refund request. We are unable to issue refunds directly.',
  },
  {
    q: 'Why did my streak disappear?',
    a: 'Streaks are stored locally on your device. If you deleted and reinstalled the app, or restored your phone without a backup, the data cannot be recovered. We recommend keeping the app installed.',
  },
  {
    q: 'What does Sober Girl Plus include?',
    a: 'Plus unlocks: shareable milestone cards, a private journal, mood insights, and journal blossoms on your growing tree. Everything else — the day counter, craving SOS, milestones, money saved, and your tree — is free forever.',
  },
  {
    q: 'The app isn\'t loading / something looks broken.',
    a: 'Try closing and reopening the app. If the issue persists, delete and reinstall — note this will erase local data. If you\'re still having trouble, email us at integrateopenai@gmail.com with your iPhone model and iOS version.',
  },
  {
    q: 'Can I use Sober Girl on Android?',
    a: 'Currently Sober Girl is iOS only. Android support is on our roadmap. Email us to be notified when it launches.',
  },
  {
    q: 'How does the Craving SOS work?',
    a: 'Tap the SOS button on the Home screen. You\'ll get a guided 4-7-8 breathing exercise, a 10-minute countdown timer to ride out the craving, your personal reason for sobriety, and grounding prompts — all available offline.',
  },
  {
    q: 'What is the lifetime offer?',
    a: 'A one-time offer shown once, three seconds after your first launch. It lets you unlock Sober Girl Plus forever for a single payment — no subscriptions. If you dismiss it, it won\'t appear again in that install.',
  },
];

export default function SoberGirlSupport() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap');

        :root {
          --cream: #FCF6EF;
          --blush: #F9E8E3;
          --blush-deep: #F2D3CC;
          --plum: #5A2A4C;
          --plum-soft: #7C4B6D;
          --plum-tint: #EBDCE6;
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

        /* NAV */
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
        .sg-nav-wordmark {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--plum);
          letter-spacing: -0.4px;
        }
        .sg-nav-back {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink-soft);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sg-nav-back:hover { color: var(--plum); }

        /* HERO */
        .sg-hero {
          background: linear-gradient(135deg, var(--plum) 0%, #8B3A6E 100%);
          padding: 72px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sg-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .sg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .sg-hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(38px, 5vw, 58px);
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }
        .sg-hero-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.72);
          position: relative;
          z-index: 1;
        }

        /* BODY */
        .sg-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }

        /* CONTACT CARD */
        .sg-contact-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 64px;
          box-shadow: 0 4px 24px rgba(90,42,76,0.07);
        }
        .sg-contact-left h2 {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 26px;
          color: var(--ink);
          margin-bottom: 10px;
          letter-spacing: -0.4px;
        }
        .sg-contact-left p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 380px;
        }
        .sg-contact-left p strong {
          color: var(--ink);
        }
        .sg-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--plum);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 16px;
          padding: 16px 28px;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .sg-email-btn:hover {
          background: var(--plum-soft);
          transform: translateY(-2px);
        }

        /* QUICK LINKS */
        .sg-quick-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 64px;
        }
        .sg-quick-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .sg-quick-card:hover {
          box-shadow: 0 8px 32px rgba(90,42,76,0.1);
          transform: translateY(-2px);
        }
        .sg-quick-icon {
          font-size: 28px;
        }
        .sg-quick-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 16px;
          color: var(--ink);
        }
        .sg-quick-desc {
          font-size: 13px;
          line-height: 1.55;
          color: var(--ink-soft);
        }

        /* SECTION TITLE */
        .sg-section-tag {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--rose-deep);
          margin-bottom: 10px;
          display: block;
        }
        .sg-section-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 32px;
          letter-spacing: -0.6px;
          color: var(--ink);
          margin-bottom: 32px;
        }

        /* FAQ */
        .sg-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 64px;
        }
        .sg-faq-item {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }
        .sg-faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          transition: background 0.15s;
        }
        .sg-faq-q:hover { background: var(--petal, #FFFAF6); }
        .sg-faq-chevron {
          font-size: 18px;
          color: var(--plum);
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        details[open] .sg-faq-chevron {
          transform: rotate(180deg);
        }
        .sg-faq-a {
          padding: 0 24px 20px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--ink-soft);
          border-top: 1px solid var(--line);
          padding-top: 16px;
        }
        .sg-faq-a a {
          color: var(--plum);
          font-weight: 700;
          text-decoration: none;
        }

        /* RESPONSE TIME */
        .sg-response-banner {
          background: var(--sage-tint);
          border: 1px solid #C8DFC8;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 64px;
          font-size: 15px;
          color: var(--sage-deep);
          font-weight: 600;
        }
        .sg-response-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        /* FOOTER */
        .sg-footer {
          background: var(--ink);
          padding: 36px 40px;
          text-align: center;
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          font-family: 'Nunito', sans-serif;
        }
        .sg-footer a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-weight: 600;
        }
        .sg-footer a:hover { color: #fff; }

        @media (max-width: 640px) {
          .sg-nav { padding: 16px 20px; }
          .sg-contact-card { flex-direction: column; }
          .sg-email-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="sg-page">
        {/* NAV */}
        <nav className="sg-nav">
          <a href="/sobergirl" className="sg-nav-brand">
            <Image src="/sobergirl-icon.png" alt="Sober Girl" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="sg-nav-wordmark">sober girl</span>
          </a>
          <Link href="/sobergirl" className="sg-nav-back" id="nav-back">
            ← Back to app page
          </Link>
        </nav>

        {/* HERO */}
        <div className="sg-hero">
          <div className="sg-hero-badge">💬 Support</div>
          <h1 className="sg-hero-title">We&apos;re here for you</h1>
          <p className="sg-hero-sub">Get help with the Sober Girl app — fast and friendly</p>
        </div>

        {/* BODY */}
        <div className="sg-body">

          {/* CONTACT CARD */}
          <div className="sg-contact-card">
            <div className="sg-contact-left">
              <h2>Email us directly</h2>
              <p>
                Have a question, found a bug, or need help with your subscription?
                Write to us and we&apos;ll get back to you as soon as possible.
                <br /><br />
                <strong>integrateopenai@gmail.com</strong>
              </p>
            </div>
            <a
              href="mailto:integrateopenai@gmail.com?subject=Sober Girl App Support"
              className="sg-email-btn"
              id="support-email-btn"
            >
              ✉️ Email Support
            </a>
          </div>

          {/* RESPONSE TIME */}
          <div className="sg-response-banner">
            <span className="sg-response-icon">⏱️</span>
            <span>We typically respond within <strong>24–48 hours</strong> on weekdays. Include your iPhone model and iOS version to help us solve your issue faster.</span>
          </div>

          {/* QUICK LINKS */}
          <span className="sg-section-tag">Quick links</span>
          <h2 className="sg-section-title">Common tasks</h2>
          <div className="sg-quick-grid">
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-quick-card"
              id="quick-refund"
            >
              <span className="sg-quick-icon">💳</span>
              <span className="sg-quick-title">Request a Refund</span>
              <span className="sg-quick-desc">Via Apple&apos;s reportaproblem.apple.com portal</span>
            </a>
            <a
              href="https://apps.apple.com/account/subscriptions"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-quick-card"
              id="quick-cancel"
            >
              <span className="sg-quick-icon">🚫</span>
              <span className="sg-quick-title">Cancel Subscription</span>
              <span className="sg-quick-desc">Manage or cancel in your Apple subscriptions</span>
            </a>
            <a
              href="/sobergirl/privacy-policy"
              className="sg-quick-card"
              id="quick-privacy"
            >
              <span className="sg-quick-icon">🔒</span>
              <span className="sg-quick-title">Privacy Policy</span>
              <span className="sg-quick-desc">How your data is handled — spoiler: it stays on your device</span>
            </a>
            <a
              href="/sobergirl/terms-of-service"
              className="sg-quick-card"
              id="quick-terms"
            >
              <span className="sg-quick-icon">📄</span>
              <span className="sg-quick-title">Terms of Service</span>
              <span className="sg-quick-desc">The rules that keep Sober Girl a safe space</span>
            </a>
          </div>

          {/* FAQ */}
          <span className="sg-section-tag">FAQ</span>
          <h2 className="sg-section-title">Frequently asked questions</h2>
          <div className="sg-faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="sg-faq-item">
                <summary className="sg-faq-q" id={`faq-${i}`}>
                  {faq.q}
                  <span className="sg-faq-chevron">⌄</span>
                </summary>
                <div className="sg-faq-a">
                  {faq.a.includes('integrateopenai@gmail.com') ? (
                    <>
                      {faq.a.split('integrateopenai@gmail.com')[0]}
                      <a href="mailto:integrateopenai@gmail.com">integrateopenai@gmail.com</a>
                      {faq.a.split('integrateopenai@gmail.com')[1]}
                    </>
                  ) : faq.a.includes('reportaproblem.apple.com') ? (
                    <>
                      {faq.a.split('reportaproblem.apple.com')[0]}
                      <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>
                      {faq.a.split('reportaproblem.apple.com')[1]}
                    </>
                  ) : (
                    faq.a
                  )}
                </div>
              </details>
            ))}
          </div>

          {/* STILL STUCK */}
          <div style={{
            background: 'linear-gradient(135deg, var(--plum) 0%, #8B3A6E 100%)',
            borderRadius: 24,
            padding: '40px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🌸</div>
            <h2 style={{
              fontFamily: 'Fraunces, serif',
              fontWeight: 700,
              fontSize: 26,
              color: '#fff',
              marginBottom: 10,
              letterSpacing: '-0.4px',
            }}>
              Still need help?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 28, lineHeight: 1.65 }}>
              We read every email. Don&apos;t hesitate to reach out.
            </p>
            <a
              href="mailto:integrateopenai@gmail.com?subject=Sober Girl App Support"
              id="bottom-email-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#fff',
                color: 'var(--plum)',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: 16,
                padding: '14px 28px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              ✉️ integrateopenai@gmail.com
            </a>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="sg-footer">
          <p>
            © {new Date().getFullYear()} Ship AI Solutions, LLC ·{' '}
            <a href="/sobergirl">Sober Girl</a> ·{' '}
            <a href="/sobergirl/privacy-policy">Privacy</a> ·{' '}
            <a href="/sobergirl/terms-of-service">Terms</a> ·{' '}
            <a href="https://shipailab.com">ShipAI Lab</a>
          </p>
        </footer>
      </div>
    </>
  );
}
