import type { Metadata } from 'next';
import { BottomLinks, PCOS_EMAIL, PcosShell } from '@/components/PcosLegal';

export const metadata: Metadata = {
  title: 'Support | PCOS & Endo Tracker',
  description: 'Get help with PCOS & Endo Tracker: subscriptions, restoring purchases, food scans and your data.',
  alternates: { canonical: 'https://shipailab.com/pcos/support' },
  openGraph: {
    title: 'Support | PCOS & Endo Tracker',
    description: 'Get help with PCOS & Endo Tracker.',
    url: 'https://shipailab.com/pcos/support',
    type: 'website',
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I restore Premium?',
    a: 'Open the app, go to Settings and tap Restore purchases. Make sure you are signed in to the Apple Account you used to subscribe.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed by Apple. Open Settings on your iPhone, tap your name, then Subscriptions, and choose PCOS & Endo Tracker. Cancel at least 24 hours before the period ends to avoid the next charge.',
  },
  {
    q: 'I was charged but Premium is still locked.',
    a: 'Try Restore purchases first. If that does not help, email us with your Apple receipt or order ID. Refunds are handled by Apple at reportaproblem.apple.com.',
  },
  {
    q: 'Where is my data stored? Can I move it to a new phone?',
    a: 'Only on your device. There is no account or cloud, so use the CSV export in Settings to keep a copy before switching or resetting your phone.',
  },
  {
    q: 'A product I scanned is missing or looks wrong.',
    a: 'Food data comes from Open Food Facts, a community database that can be incomplete or out of date. Scores are simple on-device rules applied to that data, so treat them as a guide.',
  },
  {
    q: 'Does the app diagnose PCOS or endometriosis?',
    a: 'No. It helps you notice patterns and share them with your doctor. It does not diagnose anything or replace professional care.',
  },
];

export default function PcosSupport() {
  return (
    <PcosShell badge="💬 Support" title="How can we help?" subtitle="Answers for PCOS & Endo Tracker and how to reach us" wide>
      <div className="nr-contact-hero">
        <div>
          <h2>Email support</h2>
          <p>Send us a message and we will get back to you.</p>
        </div>
        <a className="nr-btn nr-btn-peach" href={`mailto:${PCOS_EMAIL}?subject=PCOS %26 Endo Tracker Support`}>
          Email us
        </a>
      </div>
      <div className="nr-response">
        We usually reply within <strong>24–48 hours</strong> on weekdays. Please include your iPhone model and iOS
        version. Do not send us personal health details.
      </div>

      <span className="nr-section-tag">FAQ</span>
      <h2 className="nr-section-title">Common questions</h2>
      <div className="nr-faq-list">
        {faqs.map((f) => (
          <details key={f.q} className="nr-faq-item">
            <summary className="nr-faq-q">
              {f.q}
              <span className="nr-faq-chevron">+</span>
            </summary>
            <div className="nr-faq-a">{f.a}</div>
          </details>
        ))}
      </div>

      <BottomLinks
        links={[
          { href: '/pcos/privacy-policy', label: 'Privacy Policy' },
          { href: '/pcos/terms-of-service', label: 'Terms of Service' },
        ]}
      />
    </PcosShell>
  );
}
