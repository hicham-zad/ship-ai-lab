import type { Metadata } from 'next';
import { BottomLinks, ExamenShell, Section, Toc, basePath, langOf, pageMeta } from '@/components/ExamenLegal';
import { APP, PRIVACY, UI, UPDATED } from '../content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = langOf((await params).locale);
  return pageMeta(lang, '/privacy-policy', PRIVACY.metaTitle[lang], PRIVACY.metaDesc[lang]);
}

export default async function ExamenPrivacy({ params }: Props) {
  const lang = langOf((await params).locale);
  const b = basePath(lang);
  const sections = PRIVACY.sections[lang];
  return (
    <ExamenShell lang={lang} badge={`🔒 ${UI.legal[lang]}`} title={PRIVACY.title[lang]} subtitle={PRIVACY.subtitle[lang]}>
      <div className="ec-meta">
        <span className="ec-company">{APP.name}</span>
        <span className="ec-date">{UI.updated[lang]} : {UPDATED[lang]}</span>
      </div>
      <div className="ec-highlight">{PRIVACY.highlight[lang]}</div>
      <Toc sections={sections} lang={lang} />
      {sections.map((s) => <Section key={s.id} section={s} lang={lang} />)}
      <BottomLinks
        links={[
          { href: b, label: `← ${APP.short}` },
          { href: `${b}/terms-of-service`, label: `${UI.terms[lang]} →` },
        ]}
      />
    </ExamenShell>
  );
}
