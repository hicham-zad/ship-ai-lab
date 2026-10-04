import type { Metadata } from 'next';
import { BottomLinks, NERRA_EMAIL, NerraShell } from '@/components/NerraLegal';

export const metadata: Metadata = {
  title: 'Support | Nerra',
  description: 'Get help with Nerra: purchases, restoring Lifetime, reminders and your data.',
  alternates: { canonical: 'https://shipailab.com/nerra/support' },
  openGraph: {
    title: 'Support | Nerra',
    description: 'Get help with Nerra.',
    url: 'https://shipailab.com/nerra/support',
    type: 'website',
  },
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'How do I restore my Lifetime purchase?',
    a: 'Open Nerra, tap the unlock screen (Settings → Nerra Lifetime) and choose Restore. Make sure you are signed in to the Apple Account you used to buy it.',
  },
  {
    q: 'I was charged but features are still locked.',
    a: 'Try Restore first. If it does not help, email us with your Apple receipt or order ID and we will sort it out. Refunds are handled by Apple at reportaproblem.apple.com.',
  },
  {
    q: 'Is Nerra a subscription?',
    a: 'No. Nerra Lifetime is a single one-time purchase. There is nothing to cancel and it never renews.',
  },
  {
    q: 'Why am I not getting dose reminders?',
    a: 'Check that notifications are allowed for Nerra in iOS Settings → Notifications, and that Focus modes are not silencing them. Reminders are local, so they work offline.',
  },
  {
    q: 'Where is my data stored? Can I move it to a new phone?',
    a: 'Only on your device. There is no account or cloud, so use the export feature in Settings to keep a copy before switching or resetting your phone.',
  },
  {
    q: 'Can Nerra tell me what dose to take?',
    a: 'No. Nerra only records the dose your prescriber told you to take. It never calculates or suggests a dose, so always follow your doctor or pharmacist.',
  },
];

export default function NerraSupport() {
  return (
    <NerraShell badge="💬 Support" title="How can we help?" subtitle="Answers for Nerra and how to reach us" wide>
      <div className="nr-contact-hero">
        <div>
          <h2>Email support</h2>
          <p>Send us a message and we will get back to you.</p>
        </div>
        <a className="nr-btn nr-btn-peach" href={`mailto:${NERRA_EMAIL}?subject=Nerra App Support`}>
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
          { href: '/nerra/privacy-policy', label: 'Privacy Policy' },
          { href: '/nerra/terms-of-service', label: 'Terms of Service' },
        ]}
      />
    </NerraShell>
  );
}
