import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Sober Girl',
  description:
    'Terms of Service for the Sober Girl app. Read the terms and conditions governing use of the Sober Girl sobriety app.',
  alternates: {
    canonical: 'https://shipailab.com/sobergirl/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Sober Girl',
    description:
      'Terms of Service for the Sober Girl app. Read the terms and conditions governing your use.',
    url: 'https://shipailab.com/sobergirl/terms-of-service',
    type: 'website',
  },
};

export default function SoberGirlTermsOfService() {
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
          background: var(--rose-tint);
          border-left: 4px solid var(--rose-deep);
          border-radius: 0 12px 12px 0;
          padding: 16px 20px;
          margin-bottom: 20px;
          font-size: 15px;
          color: var(--ink);
          font-weight: 600;
          line-height: 1.65;
        }

        .sg-legal-disclaimer {
          background: #FFF7F0;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.7;
          text-transform: uppercase;
          letter-spacing: 0.2px;
          font-weight: 700;
          margin-bottom: 14px;
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

        .sg-legal-ack {
          background: var(--plum-tint);
          border-left: 4px solid var(--plum);
          border-radius: 0 16px 16px 0;
          padding: 20px 24px;
          margin-top: 48px;
          font-size: 15px;
          color: var(--plum);
          font-weight: 700;
          line-height: 1.65;
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
          <div className="sg-legal-hero-badge">📄 Legal</div>
          <h1 className="sg-legal-hero-title">Terms of Service</h1>
          <p className="sg-legal-hero-sub">The rules that keep Sober Girl a safe space</p>
        </div>

        {/* BODY */}
        <div className="sg-legal-body">
          <div className="sg-legal-meta">
            <span className="sg-legal-company">Ship AI Solutions, LLC — Sober Girl</span>
            <span className="sg-legal-date">Last Updated: September 19, 2026</span>
          </div>

          {/* KEY NOTE */}
          <div className="sg-legal-highlight">
            ⚠️ Sober Girl is not a medical app and does not provide medical advice. If you or someone
            you know is struggling with substance dependency, please contact a healthcare professional
            or call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong>.
          </div>

          {/* TOC */}
          <div className="sg-legal-toc">
            <div className="sg-legal-toc-title">Table of Contents</div>
            <ol className="sg-legal-toc">
              <li><a href="#t-1">Agreement to Terms</a></li>
              <li><a href="#t-2">Eligibility</a></li>
              <li><a href="#t-3">Description of App</a></li>
              <li><a href="#t-4">Medical Disclaimer</a></li>
              <li><a href="#t-5">Account & Data</a></li>
              <li><a href="#t-6">In-App Purchases</a></li>
              <li><a href="#t-7">Subscriptions & Billing</a></li>
              <li><a href="#t-8">Intellectual Property</a></li>
              <li><a href="#t-9">Prohibited Conduct</a></li>
              <li><a href="#t-10">Disclaimers</a></li>
              <li><a href="#t-11">Limitation of Liability</a></li>
              <li><a href="#t-12">Indemnification</a></li>
              <li><a href="#t-13">Termination</a></li>
              <li><a href="#t-14">Governing Law</a></li>
              <li><a href="#t-15">Changes to Terms</a></li>
              <li><a href="#t-16">Contact Us</a></li>
            </ol>
          </div>

          {/* SECTIONS */}
          <div className="sg-legal-section" id="t-1">
            <h2 className="sg-legal-h2">1. Agreement to Terms</h2>
            <p className="sg-legal-p">
              Welcome to Sober Girl, a mobile application operated by Ship AI Solutions, LLC
              (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Sober Girl
              iOS application and any related services (collectively, the &ldquo;App&rdquo;).
            </p>
            <p className="sg-legal-p">
              By downloading, installing, or using the App, you agree to be bound by these Terms.
              If you do not agree, do not use the App.
            </p>
          </div>

          <div className="sg-legal-section" id="t-2">
            <h2 className="sg-legal-h2">2. Eligibility</h2>
            <p className="sg-legal-p">
              The App is rated 17+ on the App Store due to its subject matter (sobriety from alcohol).
              You must be at least 17 years old to use Sober Girl. By using the App, you represent
              that you meet this age requirement.
            </p>
            <p className="sg-legal-p">
              You must have the legal capacity to enter into a binding agreement in your jurisdiction.
            </p>
          </div>

          <div className="sg-legal-section" id="t-3">
            <h2 className="sg-legal-h2">3. Description of the App</h2>
            <p className="sg-legal-p">
              Sober Girl is a personal wellness app designed to support women in tracking and
              celebrating sobriety from alcohol. The App provides:
            </p>
            <ul className="sg-legal-ul">
              <li>A sobriety day counter and streak tracker</li>
              <li>Money saved calculator</li>
              <li>A growing virtual tree that reflects your journey</li>
              <li>A private, on-device journal</li>
              <li>Craving SOS tools (breathing exercises, countdown timer, personal reason)</li>
              <li>Milestone badges for sobriety achievements</li>
              <li>Daily check-in and mood tracking</li>
              <li>Insights and check-in streak tracking (Plus)</li>
              <li>Gentle daily reminders via push notifications</li>
            </ul>
          </div>

          <div className="sg-legal-section" id="t-4">
            <h2 className="sg-legal-h2">4. Medical Disclaimer</h2>
            <div className="sg-legal-disclaimer">
              Sober Girl is not a medical device. The App is not intended to diagnose, treat,
              cure, or prevent any health condition, including alcohol use disorder. Content
              within the App is for informational and motivational purposes only and does not
              constitute medical advice.
            </div>
            <p className="sg-legal-p">
              Withdrawal from alcohol can be medically serious. If you are alcohol-dependent,
              please seek guidance from a qualified healthcare professional before stopping
              alcohol use. Do not rely on this App as a substitute for professional medical care.
            </p>
            <p className="sg-legal-p">
              If you are in crisis, call the SAMHSA National Helpline at <strong>1-800-662-4357</strong>
              {' '}(free, confidential, 24/7) or your local emergency services.
            </p>
          </div>

          <div className="sg-legal-section" id="t-5">
            <h2 className="sg-legal-h2">5. Account & Your Data</h2>
            <p className="sg-legal-p">
              Sober Girl does not require you to create an account. All sobriety data — your start
              date, journal entries, check-ins, personal reasons, and progress — is stored only on
              your device.
            </p>
            <p className="sg-legal-p">
              You are responsible for maintaining your device and not losing your data. Deleting the
              App permanently deletes your local data. There is no cloud backup.
            </p>
          </div>

          <div className="sg-legal-section" id="t-6">
            <h2 className="sg-legal-h2">6. In-App Purchases</h2>
            <p className="sg-legal-p">
              Sober Girl offers optional paid features (&ldquo;Sober Girl Plus&rdquo;) available through:
            </p>
            <ul className="sg-legal-ul">
              <li><strong>Monthly subscription</strong></li>
              <li><strong>Annual subscription</strong></li>
              <li><strong>Lifetime purchase</strong> (one-time, non-consumable)</li>
            </ul>
            <p className="sg-legal-p">
              Plus unlocks: shareable milestone cards, private journal, mood insights, and journal
              blossoms on your tree. All purchases are processed by Apple through the App Store.
              We do not handle payment information directly.
            </p>
            <p className="sg-legal-p">
              A one-time lifetime offer may be shown once per installation, three seconds after
              first opening the App. If dismissed, it will not appear again (unless you reinstall
              the App).
            </p>
          </div>

          <div className="sg-legal-section" id="t-7">
            <h2 className="sg-legal-h2">7. Subscriptions & Billing</h2>
            <h3 className="sg-legal-h3">Auto-Renewal</h3>
            <p className="sg-legal-p">
              Subscriptions automatically renew unless cancelled at least 24 hours before the
              end of the current period. Renewal charges occur within 24 hours of the end of
              the current period at the price confirmed at purchase.
            </p>
            <h3 className="sg-legal-h3">Cancellation</h3>
            <p className="sg-legal-p">
              You may cancel your subscription at any time via{' '}
              <strong>Settings → [Your Name] → Subscriptions</strong> on your iPhone.
              Cancelling stops future renewals but does not refund the current period.
              You will retain Plus access until the end of the paid period.
            </p>
            <h3 className="sg-legal-h3">Refunds</h3>
            <p className="sg-legal-p">
              All refunds are handled by Apple under their standard App Store refund policy. To
              request a refund, visit{' '}
              <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--plum)', fontWeight: 700 }}>
                reportaproblem.apple.com
              </a>.
              We are unable to process refunds directly.
            </p>
            <h3 className="sg-legal-h3">Price Changes</h3>
            <p className="sg-legal-p">
              We reserve the right to change subscription prices. Price changes will be communicated
              through the App Store and will take effect at your next renewal after notification.
            </p>
          </div>

          <div className="sg-legal-section" id="t-8">
            <h2 className="sg-legal-h2">8. Intellectual Property</h2>
            <p className="sg-legal-p">
              All content, design, code, animations, brand assets (including the bloom mark, logo
              lockup, and &ldquo;sober girl&rdquo; wordmark), and features of the App are owned by Ship AI
              Solutions, LLC and are protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="sg-legal-p">
              We grant you a limited, non-exclusive, non-transferable, revocable licence to use
              the App for your personal, non-commercial use in accordance with these Terms.
            </p>
            <p className="sg-legal-p">
              You may not copy, modify, distribute, sell, or reverse-engineer any part of the App
              without our express written permission.
            </p>
            <p className="sg-legal-p">
              Your personal data (journal entries, reasons, etc.) belongs to you. We claim no
              ownership over content you create within the App.
            </p>
          </div>

          <div className="sg-legal-section" id="t-9">
            <h2 className="sg-legal-h2">9. Prohibited Conduct</h2>
            <p className="sg-legal-p">You agree not to:</p>
            <ul className="sg-legal-ul">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Remove or circumvent any security or licensing mechanisms in the App</li>
              <li>Use the App in any way that could harm, disable, or impair its function</li>
              <li>Misrepresent your identity or impersonate any person or entity</li>
              <li>Use the App to distribute malware or harmful code</li>
              <li>Resell, sublicence, or commercially exploit the App or its content</li>
              <li>Use the App in a manner inconsistent with its intended purpose</li>
            </ul>
          </div>

          <div className="sg-legal-section" id="t-10">
            <h2 className="sg-legal-h2">10. Disclaimers</h2>
            <div className="sg-legal-disclaimer">
              The app is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranty of
              any kind, express or implied. We disclaim all warranties including implied
              warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the app will be error-free,
              uninterrupted, or free of harmful components.
            </div>
            <p className="sg-legal-p">
              We are not responsible for any loss of data resulting from device failure,
              App deletion, or OS updates. As data is stored locally, we have no ability
              to recover it.
            </p>
          </div>

          <div className="sg-legal-section" id="t-11">
            <h2 className="sg-legal-h2">11. Limitation of Liability</h2>
            <div className="sg-legal-disclaimer">
              To the maximum extent permitted by applicable law, Ship AI Solutions, LLC
              shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages — including but not limited to loss of data, loss of
              revenue, or loss of goodwill — arising out of or relating to your use of
              or inability to use the App, even if we have been advised of the possibility
              of such damages.
            </div>
            <p className="sg-legal-p">
              Our total liability to you for any claim arising out of these Terms or your
              use of the App shall not exceed the amount you paid for the App or Plus
              subscription in the twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="sg-legal-section" id="t-12">
            <h2 className="sg-legal-h2">12. Indemnification</h2>
            <p className="sg-legal-p">
              You agree to indemnify, defend, and hold harmless Ship AI Solutions, LLC and
              its officers, directors, employees, and agents from any claims, liabilities,
              damages, costs, and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="sg-legal-ul">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Content you create or share using the App</li>
            </ul>
          </div>

          <div className="sg-legal-section" id="t-13">
            <h2 className="sg-legal-h2">13. Termination</h2>
            <p className="sg-legal-p">
              We reserve the right to suspend or terminate your access to the App at any time
              — with or without cause, with or without notice — if we reasonably believe you
              have violated these Terms.
            </p>
            <p className="sg-legal-p">
              You may stop using the App at any time. Deleting the App constitutes termination
              of your use. Any provisions of these Terms that should reasonably survive
              termination (including Intellectual Property, Disclaimers, and Limitation of
              Liability) will do so.
            </p>
          </div>

          <div className="sg-legal-section" id="t-14">
            <h2 className="sg-legal-h2">14. Governing Law & Dispute Resolution</h2>
            <h3 className="sg-legal-h3">Governing Law</h3>
            <p className="sg-legal-p">
              These Terms are governed by the laws of the State of Wyoming, United States,
              without regard to its conflict-of-law provisions.
            </p>
            <h3 className="sg-legal-h3">Dispute Resolution</h3>
            <p className="sg-legal-p">
              Any disputes arising out of or relating to these Terms or the App shall be
              resolved by binding arbitration under the rules of the American Arbitration
              Association, except that either party may seek injunctive relief in court to
              protect intellectual property rights.
            </p>
            <h3 className="sg-legal-h3">Venue</h3>
            <p className="sg-legal-p">
              Any legal proceedings not subject to arbitration shall be brought exclusively
              in the state or federal courts of Sheridan County, Wyoming.
            </p>
            <h3 className="sg-legal-h3">Class Action Waiver</h3>
            <p className="sg-legal-p">
              You agree to resolve disputes with us individually and waive the right to
              participate in any class action lawsuit or class-wide arbitration.
            </p>
          </div>

          <div className="sg-legal-section" id="t-15">
            <h2 className="sg-legal-h2">15. Changes to These Terms</h2>
            <p className="sg-legal-p">
              We reserve the right to modify these Terms at any time. We will notify you of
              material changes by posting the updated Terms at this URL and updating the
              &ldquo;Last Updated&rdquo; date. Continued use of the App after the effective date of
              changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div className="sg-legal-section" id="t-16">
            <h2 className="sg-legal-h2">16. Contact Us</h2>
            <p className="sg-legal-p">
              If you have questions or concerns about these Terms, please contact us:
            </p>
            <div className="sg-legal-contact-card">
              <p><strong>Ship AI Solutions, LLC</strong></p>
              <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p>
                Email:{' '}
                <a href="mailto:integrateopenai@gmail.com" id="contact-email-terms">
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

          {/* ACK */}
          <div className="sg-legal-ack">
            By using Sober Girl, you acknowledge that you have read, understood, and agree
            to be bound by these Terms of Service.
          </div>

          {/* DIVIDER */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 40, marginTop: 48, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/sobergirl/privacy-policy" style={{ color: 'var(--plum)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }} id="link-to-privacy">
              ← Privacy Policy
            </Link>
            <Link href="/sobergirl" style={{ color: 'var(--plum)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }} id="back-link-bottom">
              Back to Sober Girl →
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
