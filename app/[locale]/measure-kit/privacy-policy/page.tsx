import type { Metadata } from 'next';
import { BottomLinks, ContactCard, MK_EMAIL, MK_UPDATED, MeasureKitShell, Section, Toc } from '@/components/MeasureKitLegal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Measure Kit',
  description:
    'Privacy Policy for Measure Kit, the ruler, level, compass and AR tape measure app. Your measurements stay on your device and audio is never recorded.',
  alternates: { canonical: 'https://shipailab.com/measure-kit/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Measure Kit',
    description: 'Your measurements stay on your device. Audio is never recorded.',
    url: 'https://shipailab.com/measure-kit/privacy-policy',
    type: 'website',
  },
};

const toc = [
  { id: 'p-1', label: 'Introduction' },
  { id: 'p-2', label: 'What Stays on Your Device' },
  { id: 'p-3', label: 'What We Do Not Collect' },
  { id: 'p-4', label: 'Camera' },
  { id: 'p-5', label: 'Microphone' },
  { id: 'p-6', label: 'Location' },
  { id: 'p-7', label: 'Motion Sensors' },
  { id: 'p-8', label: 'Purchases & RevenueCat' },
  { id: 'p-9', label: 'Children' },
  { id: 'p-10', label: 'Retention & Deletion' },
  { id: 'p-11', label: 'Your Rights' },
  { id: 'p-12', label: 'Changes & Contact' },
];

export default function MeasureKitPrivacyPolicy() {
  return (
    <MeasureKitShell badge="🔒 Legal" title="Privacy Policy" subtitle="How Measure Kit handles your information">
      <div className="mk-meta">
        <span className="mk-company">Measure Kit</span>
        <span className="mk-date">Last Updated: {MK_UPDATED}</span>
      </div>

      <div className="mk-highlight">
        Your measurements stay on your device. Measure Kit has no account, no cloud, no ads and no analytics. The
        microphone is only used for live decibel metering, and audio is never recorded, stored or sent anywhere.
      </div>

      <Toc items={toc} />

      <Section id="p-1" title="1. Introduction">
        <p className="mk-p">
          Hicham Zaidi, an independent developer (&ldquo;we&rdquo;, &ldquo;us&rdquo;), operates the Measure Kit mobile
          app (the &ldquo;App&rdquo;), a toolkit with a ruler, bubble level, compass, protractor, decibel meter, AR tape
          measure and magnetic field detector. This Privacy Policy explains what information the App handles and how.
          By using the App you agree to this policy.
        </p>
      </Section>

      <Section id="p-2" title="2. What Stays on Your Device">
        <p className="mk-p">The following is stored locally on your device and is never sent to our servers:</p>
        <ul className="mk-ul">
          <li>Saved measurements: tool, value, unit and date</li>
          <li>Notes you add and, for AR measurements, a screenshot you choose to save</li>
          <li>Ruler calibration, level zero point and app settings</li>
          <li>A cached copy of your purchase status, so Pro works offline</li>
        </ul>
        <p className="mk-p">
          CSV and PDF exports are created only when you ask, and are shared through your device&apos;s share sheet to
          the destination you choose. Deleting the App removes all of this data from your device permanently.
        </p>
      </Section>

      <Section id="p-3" title="3. What We Do Not Collect">
        <p className="mk-p">
          We do not run analytics, advertising or tracking SDKs, we do not use advertising identifiers, we do not
          create accounts, and we do not collect your name, email address or location. We do not sell or share
          personal data.
        </p>
      </Section>

      <Section id="p-4" title="4. Camera">
        <p className="mk-p">
          The camera is used only by the AR tape measure to detect surfaces. Camera frames are processed in real time
          on your device by ARKit (iOS) or ARCore (Android) and are not stored or uploaded. If you save an AR
          measurement, its screenshot is stored on your device only.
        </p>
      </Section>

      <Section id="p-5" title="5. Microphone">
        <p className="mk-p">
          The microphone is used only by the decibel meter to read the current sound level. Audio is never recorded,
          stored or transmitted. Any temporary buffer the operating system requires is discarded immediately.
        </p>
      </Section>

      <Section id="p-6" title="6. Location">
        <p className="mk-p">
          While you use the compass, your approximate location is used on your device to calculate true north. It is
          never stored or shared. The App never requests background location.
        </p>
      </Section>

      <Section id="p-7" title="7. Motion Sensors">
        <p className="mk-p">
          The bubble level, compass and magnetic field detector read the accelerometer and magnetometer. These readings
          stay on your device. Each permission is requested only when you open the tool that needs it, and you can
          change permissions at any time in your device settings.
        </p>
      </Section>

      <Section id="p-8" title="8. Purchases & RevenueCat">
        <p className="mk-p">
          Measure Kit Pro is available as an annual subscription or a one-time lifetime purchase, processed by Apple
          or Google. We use{' '}
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a> to
          validate purchases. RevenueCat receives an anonymous app user ID, your purchase receipt, your store country
          and basic device and app-version information so it can confirm what you own and restore it on request. It
          does not receive your measurements. Apple and Google handle your payment details; we never see them.
        </p>
      </Section>

      <Section id="p-9" title="9. Children">
        <p className="mk-p">
          Measure Kit is suitable for a general audience and does not knowingly collect personal information from
          anyone, including children.
        </p>
      </Section>

      <Section id="p-10" title="10. Retention & Deletion">
        <p className="mk-p">
          Because your data lives only on your device, it is kept until you delete it in the App (History → Clear
          history) or uninstall the App. If you email us for support, we keep your message only as long as needed to
          resolve your request.
        </p>
      </Section>

      <Section id="p-11" title="11. Your Rights">
        <p className="mk-p">
          Depending on where you live (for example under GDPR, UK GDPR or CCPA), you may have rights to access,
          correct, delete or export your personal data, and to object to its processing. We hold no personal data
          about you beyond anonymous purchase records handled by RevenueCat and the app stores. For any request, email{' '}
          <a href={`mailto:${MK_EMAIL}`}>{MK_EMAIL}</a>.
        </p>
      </Section>

      <Section id="p-12" title="12. Changes & Contact">
        <p className="mk-p">
          We may update this policy and will post changes here with a new &ldquo;Last Updated&rdquo; date. Questions?
          Contact us:
        </p>
        <ContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/measure-kit', label: '← Measure Kit' },
          { href: '/measure-kit/terms-of-service', label: 'Terms of Service →' },
        ]}
      />
    </MeasureKitShell>
  );
}
