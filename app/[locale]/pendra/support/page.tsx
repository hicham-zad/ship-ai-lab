import type { Metadata } from 'next';
import { BottomLinks, PENDRA_EMAIL, PendraShell } from '@/components/PendraLegal';

export const metadata: Metadata = {
  title: 'Support | Pendra',
  description: 'Get help with Pendra: purchases, restoring Lifetime, reminders, Apple Health and your data.',
  alternates: { canonical: 'https://shipailab.com/pendra/support' },
  openGraph: {
    title: 'Support | Pendra',
    description: 'Get help with Pendra.',
    url: 'https://shipailab.com/pendra/support',
    type: 'website',
  },
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'How do I restore my Lifetime purchase?',
    a: 'Open Pendra, tap the unlock screen (Settings → Pendra Lifetime) and choose Restore. Make sure you are signed in to the Apple Account you used to buy it.',
  },
  {
    q: 'I was charged but features are still locked.',
    a: 'Try Restore first. If it does not help, email us with your Apple receipt or order ID and we will sort it out. Refunds are handled by Apple at reportaproblem.apple.com.',
  },
  {
    q: 'Is Pendra a subscription?',
    a: 'No. Pendra Lifetime is a single one-time purchase. There is nothing to cancel and it never renews.',
  },
  {
    q: 'Why am I not getting dose reminders?',
    a: 'Check that notifications are allowed for Pendra in iOS Settings → Notifications, and that Focus modes are not silencing them. Reminders are local, so they work offline.',
  },
  {
    q: 'Where is my data stored? Can I move it to a new phone?',
    a: 'Only on your device. There is no account or cloud, so use the export feature in Settings to keep a copy before switching or resetting your phone.',
  },
  {
    q: 'How do I connect Apple Health?',
    a: 'Go to Settings in Pendra and enable Apple Health, then allow weight access when iOS asks. You can change this any time in iOS Settings → Health → Data Access.',
  },
  {
    q: 'Can Pendra tell me what dose to take?',
    a: 'No. Pendra tracks what your prescriber has told you. Its estimates are informational only, so always follow your doctor or pharmacist.',
  },
];

export default function PendraSupport() {
  return (
    <PendraShell badge="💬 Support" title="How can we help?" subtitle="Answers for Pendra and how to reach us" wide>
      <div className="nr-contact-hero">
        <div>
          <h2>Email support</h2>
          <p>Send us a message and we will get back to you.</p>
        </div>
        <a className="nr-btn nr-btn-peach" href={`mailto:${PENDRA_EMAIL}?subject=Pendra App Support`}>
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
          { href: '/pendra/privacy-policy', label: 'Privacy Policy' },
          { href: '/pendra/terms-of-service', label: 'Terms of Service' },
        ]}
      />
    </PendraShell>
  );
}
