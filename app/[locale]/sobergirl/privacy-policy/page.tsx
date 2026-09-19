import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sober Girl',
  description:
    'Privacy Policy for Sober Girl — understand how your data is handled. Your sobriety journey is private and stays on your device.',
  alternates: {
    canonical: 'https://shipailab.com/sobergirl/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Sober Girl',
    description:
      'Privacy Policy for Sober Girl. Your sobriety journey is private and stays on your device.',
    url: 'https://shipailab.com/sobergirl/privacy-policy',
    type: 'website',
  },
};

export default function SoberGirlPrivacyPolicy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap');

        :root {
          --cream: #FCF6EF;
          --blush: #F9E8E3;
          --plum: #5A2A4C;
          --plum-soft: #7C4B6D;
          --plum-tint: #EBDCE6;
          --sage-deep: #5E8262;
          --sage-tint: #E4EEE1;
          --rose: #E8928E;
          --rose-deep: #D2716F;
          --rose-tint: #FBE1DD;
          --ink: #3A2235;
          --ink-soft: #7D6577;
          --ink-faint: #B4A0AC;
          --line: #EFDDD6;
        }

        .sg-legal-page {
          font-family: 'Nunito', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
        }

        .sg-legal-nav {
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
        .sg-legal-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .sg-legal-wordmark {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--plum);
          letter-spacing: -0.4px;
        }
        .sg-legal-nav-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink-soft);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .sg-legal-nav-link:hover { color: var(--plum); }

        .sg-legal-hero {
          background: linear-gradient(135deg, var(--plum) 0%, #8B3A6E 100%);
          padding: 64px 24px;
          text-align: center;
        }
        .sg-legal-hero-badge {
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
        .sg-legal-hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(36px, 5vw, 56px);
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 12px;
        }
        .sg-legal-hero-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.72);
        }

        .sg-legal-body {
          max-width: 780px;
          margin: 0 auto;
          padding: 64px 24px 96px;
        }

        .sg-legal-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }
        .sg-legal-company {
          font-size: 15px;
          color: var(--ink-soft);
          font-weight: 600;
        }
        .sg-legal-date {
          font-size: 14px;
          color: var(--ink-faint);
          background: var(--blush);
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 600;
        }

        .sg-legal-toc {
          background: var(--blush);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 48px;
        }
        .sg-legal-toc-title {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 18px;
          color: var(--ink);
          margin-bottom: 16px;
        }
        .sg-legal-toc ol {
          padding-left: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
        }
        .sg-legal-toc li {
          font-size: 14px;
          color: var(--ink-soft);
        }
        .sg-legal-toc a {
          color: var(--plum);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.15s;
        }
        .sg-legal-toc a:hover { opacity: 0.75; }

        .sg-legal-section {
          margin-bottom: 48px;
          scroll-margin-top: 100px;
        }
        .sg-legal-h2 {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--plum);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sg-legal-h2::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 22px;
          background: var(--rose);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .sg-legal-h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          margin: 20px 0 8px;
        }
        .sg-legal-p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          margin-bottom: 14px;
        }
        .sg-legal-ul {
          padding-left: 20px;
          margin-bottom: 14px;
        }
        .sg-legal-ul li {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-soft);
          margin-bottom: 6px;
        }

        .sg-legal-highlight {
          background: var(--sage-tint);
          border-left: 4px solid var(--sage-deep);
          border-radius: 0 12px 12px 0;
          padding: 16px 20px;
          margin-bottom: 20px;
          font-size: 15px;
          color: var(--ink);
          font-weight: 600;
          line-height: 1.65;
        }

        .sg-legal-contact-card {
          background: var(--blush);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 28px;
          margin-top: 12px;
        }
        .sg-legal-contact-card p {
          font-size: 15px;
          color: var(--ink-soft);
          margin-bottom: 6px;
          line-height: 1.7;
        }
        .sg-legal-contact-card a {
          color: var(--plum);
          font-weight: 700;
          text-decoration: none;
        }

        .sg-legal-footer {
          background: var(--ink);
          padding: 32px 40px;
          text-align: center;
          color: rgba(255,255,255,0.55);
          font-size: 14px;
        }
        .sg-legal-footer a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-weight: 600;
        }
        .sg-legal-footer a:hover { color: #fff; }

        @media (max-width: 600px) {
          .sg-legal-nav { padding: 16px 20px; }
          .sg-legal-toc ol { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sg-legal-page">
        {/* NAV */}
        <nav className="sg-legal-nav">
          <a href="/sobergirl" className="sg-legal-brand">
            <Image src="/sobergirl-icon.png" alt="Sober Girl" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="sg-legal-wordmark">sober girl</span>
          </a>
          <Link href="/sobergirl" className="sg-legal-nav-link" id="nav-back-home">
            ← Back to app page
          </Link>
        </nav>

        {/* HERO */}
        <div className="sg-legal-hero">
          <div className="sg-legal-hero-badge">🔒 Legal</div>
          <h1 className="sg-legal-hero-title">Privacy Policy</h1>
          <p className="sg-legal-hero-sub">How Sober Girl handles your information</p>
        </div>

        {/* BODY */}
        <div className="sg-legal-body">
          <div className="sg-legal-meta">
            <span className="sg-legal-company">Ship AI Solutions, LLC — Sober Girl</span>
            <span className="sg-legal-date">Last Updated: September 19, 2026</span>
          </div>

          {/* KEY PROMISE */}
          <div className="sg-legal-highlight">
            🌸 Your sobriety journey is yours. Your journal entries, streak, and personal reasons
            are stored only on your device and are never sent to our servers or shared with anyone.
          </div>

          {/* TOC */}
          <div className="sg-legal-toc">
            <div className="sg-legal-toc-title">Table of Contents</div>
            <ol className="sg-legal-toc">
              <li><a href="#section-1">Introduction</a></li>
              <li><a href="#section-2">Data We Collect</a></li>
              <li><a href="#section-3">Data Stored On-Device</a></li>
              <li><a href="#section-4">How We Use Your Data</a></li>
              <li><a href="#section-5">Third-Party Services</a></li>
              <li><a href="#section-6">In-App Purchases</a></li>
              <li><a href="#section-7">Children&apos;s Privacy</a></li>
              <li><a href="#section-8">Data Retention</a></li>
              <li><a href="#section-9">Your Rights</a></li>
              <li><a href="#section-10">Security</a></li>
              <li><a href="#section-11">Changes to Policy</a></li>
              <li><a href="#section-12">Contact Us</a></li>
            </ol>
          </div>

          {/* SECTIONS */}
          <div className="sg-legal-section" id="section-1">
            <h2 className="sg-legal-h2">1. Introduction</h2>
            <p className="sg-legal-p">
              Ship AI Solutions, LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the Sober Girl mobile
              application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use the Sober Girl iOS app.
            </p>
            <p className="sg-legal-p">
              Please read this policy carefully. By using the App, you agree to the practices
              described here. If you do not agree, please do not use the App.
            </p>
          </div>

          <div className="sg-legal-section" id="section-2">
            <h2 className="sg-legal-h2">2. Data We Collect</h2>
            <h3 className="sg-legal-h3">What we do NOT collect</h3>
            <p className="sg-legal-p">
              We do not collect, transmit, or have access to your:
            </p>
            <ul className="sg-legal-ul">
              <li>Journal entries</li>
              <li>Sobriety start date or streak count</li>
              <li>Personal reasons for sobriety</li>
              <li>Check-in history or mood logs</li>
              <li>Spending habits or money saved data</li>
              <li>Notification preferences</li>
            </ul>
            <p className="sg-legal-p">
              All of this data lives exclusively on your device, protected by your device&apos;s
              security layer.
            </p>

            <h3 className="sg-legal-h3">What may be collected automatically</h3>
            <p className="sg-legal-p">
              Crash reports and diagnostic data may be collected anonymously by Apple through
              iOS system tools (if you have opted in to sharing analytics with Apple). We do not
              independently collect crash data or usage analytics.
            </p>
          </div>

          <div className="sg-legal-section" id="section-3">
            <h2 className="sg-legal-h2">3. Data Stored On-Device</h2>
            <p className="sg-legal-p">
              The following data is stored locally on your device using encrypted storage and
              is never transmitted to our servers:
            </p>
            <ul className="sg-legal-ul">
              <li>Sobriety profile (start date, currency, spend amount, personal reason)</li>
              <li>Daily check-in records</li>
              <li>Journal entries</li>
              <li>Milestone unlock history</li>
              <li>Tree growth state</li>
              <li>Reminder time preference</li>
              <li>Subscription status (cached locally from RevenueCat)</li>
            </ul>
            <p className="sg-legal-p">
              Deleting the app removes all of this data from your device permanently.
            </p>
          </div>

          <div className="sg-legal-section" id="section-4">
            <h2 className="sg-legal-h2">4. How We Use Your Data</h2>
            <p className="sg-legal-p">
              Because we do not collect your personal or sobriety data, our use of data is limited to:
            </p>
            <ul className="sg-legal-ul">
              <li>Processing your in-app subscription through RevenueCat and Apple</li>
              <li>Responding to support emails you initiate</li>
              <li>Improving the App based on anonymised crash or performance data shared by Apple</li>
            </ul>
          </div>

          <div className="sg-legal-section" id="section-5">
            <h2 className="sg-legal-h2">5. Third-Party Services</h2>
            <h3 className="sg-legal-h3">RevenueCat</h3>
            <p className="sg-legal-p">
              Sober Girl uses RevenueCat to manage in-app subscriptions and the one-time lifetime
              purchase. RevenueCat receives your Apple-assigned anonymous subscriber ID and
              purchase receipts to validate and manage your subscription status. RevenueCat does
              not receive your name, email, or sobriety data. See RevenueCat&apos;s Privacy Policy at{' '}
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--plum)', fontWeight: 700 }}>
                revenuecat.com/privacy
              </a>.
            </p>

            <h3 className="sg-legal-h3">Apple / App Store</h3>
            <p className="sg-legal-p">
              Purchases are processed by Apple. Apple&apos;s Privacy Policy governs how Apple handles
              your payment information. We receive only an anonymous receipt confirmation — never
              your credit card or Apple ID details. See{' '}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--plum)', fontWeight: 700 }}>
                apple.com/legal/privacy
              </a>.
            </p>

            <h3 className="sg-legal-h3">Expo / React Native</h3>
            <p className="sg-legal-p">
              The App is built with Expo. Expo may collect minimal telemetry during development
              builds. Production (App Store) builds do not include Expo Go or development tools
              that would transmit data.
            </p>
          </div>

          <div className="sg-legal-section" id="section-6">
            <h2 className="sg-legal-h2">6. In-App Purchases</h2>
            <p className="sg-legal-p">
              Sober Girl offers subscription plans (monthly, yearly) and a one-time lifetime
              purchase, all managed through the Apple App Store. We do not collect or store
              payment information directly.
            </p>
            <p className="sg-legal-p">
              Subscription management and cancellation are handled through your Apple ID settings
              at{' '}
              <strong>Settings → [Your Name] → Subscriptions</strong> on your iPhone.
            </p>
          </div>

          <div className="sg-legal-section" id="section-7">
            <h2 className="sg-legal-h2">7. Children&apos;s Privacy</h2>
            <p className="sg-legal-p">
              Sober Girl is designed for adults aged 17 and older (in line with its App Store
              age rating). We do not knowingly collect personal information from anyone under 17.
              If you believe a child under 17 has used the App and provided personal information,
              please contact us and we will take appropriate steps.
            </p>
          </div>

          <div className="sg-legal-section" id="section-8">
            <h2 className="sg-legal-h2">8. Data Retention</h2>
            <p className="sg-legal-p">
              Since your sobriety data lives only on your device, it is retained as long as the
              App is installed. Uninstalling the App permanently deletes your local data. There
              is no cloud backup or sync — this is by design to protect your privacy.
            </p>
            <p className="sg-legal-p">
              If you email us for support, we retain your email for the duration necessary to
              resolve your request, after which it is deleted.
            </p>
          </div>

          <div className="sg-legal-section" id="section-9">
            <h2 className="sg-legal-h2">9. Your Rights</h2>
            <p className="sg-legal-p">
              Depending on your location, you may have rights under GDPR, CCPA, or similar laws,
              including:
            </p>
            <ul className="sg-legal-ul">
              <li>The right to know what personal data we hold about you</li>
              <li>The right to delete your personal data</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to data portability</li>
              <li>The right to opt out of data selling (we do not sell data)</li>
            </ul>
            <p className="sg-legal-p">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:integrateopenai@gmail.com" style={{ color: 'var(--plum)', fontWeight: 700 }}>
                integrateopenai@gmail.com
              </a>.
              Since sobriety data is local-only, &ldquo;deletion&rdquo; is achieved by uninstalling the App.
            </p>
          </div>

          <div className="sg-legal-section" id="section-10">
            <h2 className="sg-legal-h2">10. Security</h2>
            <p className="sg-legal-p">
              We take security seriously. On-device data is stored using iOS&apos;s secure storage
              mechanisms. However, no method of electronic storage is 100% secure. If you lose
              access to your device, your sobriety data may not be recoverable — this is an
              intentional trade-off in favour of privacy.
            </p>
            <p className="sg-legal-p">
              We do not transmit your personal or sobriety data over the internet, which
              eliminates the primary attack surface for data breaches.
            </p>
          </div>

          <div className="sg-legal-section" id="section-11">
            <h2 className="sg-legal-h2">11. Changes to This Policy</h2>
            <p className="sg-legal-p">
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the new policy here and updating the &ldquo;Last Updated&rdquo; date above.
              We encourage you to review this page periodically. Continued use of the App after
              changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="sg-legal-section" id="section-12">
            <h2 className="sg-legal-h2">12. Contact Us</h2>
            <p className="sg-legal-p">
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              your personal data, please contact us:
            </p>
            <div className="sg-legal-contact-card">
              <p><strong>Ship AI Solutions, LLC</strong></p>
              <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p>
                Email:{' '}
                <a href="mailto:integrateopenai@gmail.com" id="contact-email-privacy">
                  integrateopenai@gmail.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://shipailab.com/sobergirl">
                  shipailab.com/sobergirl
                </a>
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 40, marginTop: 48, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/sobergirl" style={{ color: 'var(--plum)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }} id="back-link-bottom">
              ← Back to Sober Girl
            </Link>
            <Link href="/sobergirl/terms-of-service" style={{ color: 'var(--plum)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }} id="link-to-terms">
              Terms of Service →
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="sg-legal-footer">
          <p>
            © {new Date().getFullYear()} Ship AI Solutions, LLC ·{' '}
            <a href="/sobergirl/privacy-policy">Privacy Policy</a> ·{' '}
            <a href="/sobergirl/terms-of-service">Terms of Service</a> ·{' '}
            <a href="https://shipailab.com">ShipAI Lab</a>
          </p>
        </footer>
      </div>
    </>
  );
}
