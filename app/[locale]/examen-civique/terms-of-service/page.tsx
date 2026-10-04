import type { Metadata } from 'next';
import { BottomLinks, ExamenShell, Section, Toc, basePath, langOf, pageMeta } from '@/components/ExamenLegal';
import { APP, TERMS, UI, UPDATED } from '../content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = langOf((await params).locale);
  return pageMeta(lang, '/terms-of-service', TERMS.metaTitle[lang], TERMS.metaDesc[lang]);
}

export default async function ExamenTerms({ params }: Props) {
  const lang = langOf((await params).locale);
  const b = basePath(lang);
  const sections = TERMS.sections[lang];
  return (
    <ExamenShell lang={lang} badge={`📄 ${UI.legal[lang]}`} title={TERMS.title[lang]} subtitle={TERMS.subtitle[lang]}>
      <div className="ec-meta">
        <span className="ec-company">{APP.name}</span>
        <span className="ec-date">{UI.updated[lang]} : {UPDATED[lang]}</span>
      </div>
      <div className="ec-disclaimer">{TERMS.disclaimer[lang]}</div>
      <Toc sections={sections} lang={lang} />
      {sections.map((s) => <Section key={s.id} section={s} lang={lang} />)}
      <BottomLinks
        links={[
          { href: b, label: `← ${APP.short}` },
          { href: `${b}/privacy-policy`, label: `${UI.privacy[lang]} →` },
        ]}
      />
    </ExamenShell>
  );
}
