import type { Metadata } from 'next';
import { BottomLinks, MK_EMAIL, MeasureKitShell } from '@/components/MeasureKitLegal';

export const metadata: Metadata = {
  title: 'Support | Measure Kit',
  description: 'Get help with Measure Kit: Pro purchases, restoring, AR measuring, ruler calibration and permissions.',
  alternates: { canonical: 'https://shipailab.com/measure-kit/support' },
  openGraph: {
    title: 'Support | Measure Kit',
    description: 'Get help with Measure Kit.',
    url: 'https://shipailab.com/measure-kit/support',
    type: 'website',
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I restore Measure Kit Pro?',
    a: 'Open Settings → Restore purchases, or tap Restore on the Pro screen. Make sure you are signed in to the same Apple Account or Google account you used to buy it.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Open Settings → Manage subscription in the app, or go to your Apple Account (Settings → your name → Subscriptions) or Google Play (Payments & subscriptions). Cancel at least 24 hours before renewal to avoid the next charge.',
  },
  {
    q: 'I was charged but Pro is still locked.',
    a: 'Try Restore purchases first. If that does not help, email us with your receipt or order ID and we will sort it out. Refunds are handled by Apple at reportaproblem.apple.com or by Google Play.',
  },
  {
    q: 'The AR tape measure is missing.',
    a: 'AR measuring needs a device that supports ARKit (iPhone and iPad) or ARCore (Android). On devices without it, the tool is hidden. Measure in good light and move the phone slowly until a surface is detected.',
  },
  {
    q: 'The ruler is not accurate on my phone.',
    a: 'Open the ruler and choose Calibrate, then line up a standard bank card with the on-screen guide. This corrects the screen size on devices we cannot detect automatically.',
  },
  {
    q: 'The compass or level seems off.',
    a: 'For the compass, move your phone in a figure 8 to recalibrate it, and stay away from magnets and metal. For the level, place the phone on a known flat surface and tap Set zero.',
  },
  {
    q: 'Does the decibel meter record audio?',
    a: 'No. It only reads the current sound level. Nothing is recorded, stored or sent. Readings are approximate; it is not a certified sound level meter.',
  },
  {
    q: 'I denied a permission. How do I turn it back on?',
    a: 'Open the tool again and tap Open Settings, or go to your device Settings → Measure Kit and allow Camera, Microphone or Location.',
  },
];

export default function MeasureKitSupport() {
  return (
    <MeasureKitShell badge="💬 Support" title="How can we help?" subtitle="Answers for Measure Kit and how to reach us" wide>
      <div className="mk-contact-hero">
        <div>
          <h2>Email support</h2>
          <p>Send us a message and we will get back to you.</p>
        </div>
        <a className="mk-btn mk-btn-peach" href={`mailto:${MK_EMAIL}?subject=Measure Kit Support`}>
          Email us
        </a>
      </div>
      <div className="mk-response">
        We usually reply within <strong>24–48 hours</strong> on weekdays. Please include your device model, OS version
        and the app version from Settings.
      </div>

      <span className="mk-section-tag">FAQ</span>
      <h2 className="mk-section-title">Common questions</h2>
      <div className="mk-faq-list">
        {faqs.map((f) => (
          <details key={f.q} className="mk-faq-item">
            <summary className="mk-faq-q">
              {f.q}
              <span className="mk-faq-chevron">+</span>
            </summary>
            <div className="mk-faq-a">{f.a}</div>
          </details>
        ))}
      </div>

      <BottomLinks
        links={[
          { href: '/measure-kit/privacy-policy', label: 'Privacy Policy' },
          { href: '/measure-kit/terms-of-service', label: 'Terms of Service' },
        ]}
      />
    </MeasureKitShell>
  );
}
