export interface Source {
  title: string;
  publisher: string;
  url: string;
  note?: string;
}

// Every external claim on a Nerra guide cites one of these. Text was read from the PDFs on 2026-10-06.
export const SOURCES: Record<string, Source> = {
  zepLabel: {
    title: 'ZEPBOUND (tirzepatide) injection: full prescribing information',
    publisher: 'Eli Lilly and Company, revised 08/2026',
    url: 'https://pi.lilly.com/us/zepbound-uspi.pdf',
    note: 'Sections 2.1 to 2.4 (dosage, missed dose, administration) and 3 (strengths).',
  },
  mounLabel: {
    title: 'MOUNJARO (tirzepatide) injection: full prescribing information',
    publisher: 'Eli Lilly and Company, revised 08/2026',
    url: 'https://pi.lilly.com/us/mounjaro-uspi.pdf',
    note: 'Sections 2.1 and 2.2 (dosage, missed doses, administration) and 3 (strengths).',
  },
  ozLabel: {
    title: 'OZEMPIC (semaglutide) injection: full prescribing information',
    publisher: 'Novo Nordisk, revised 05/2026',
    url: 'https://www.novo-pi.com/ozempic.pdf',
    note: 'Sections 2.1 and 2.2 (administration, missed dose, dosage) and 3 (strengths).',
  },
  wegLabel: {
    title: 'WEGOVY (semaglutide) injection and tablets: full prescribing information',
    publisher: 'Novo Nordisk, revised 06/2026',
    url: 'https://www.novo-pi.com/wegovy.pdf',
    note: 'Sections 2.1 to 2.5 (administration, dosage, missed doses, switching) and 3 (strengths).',
  },
  ozIfu: {
    title: 'OZEMPIC (semaglutide) injection, 0.25 mg or 0.5 mg pen: Instructions for Use',
    publisher: 'Novo Nordisk, revised June 2026, FDA-approved patient instructions',
    url: 'https://www.novo-pi.com/ozempic.pdf',
    note: 'Printed in the same PDF as the prescribing information. The 1 mg and 2 mg pens have their own Instructions for Use.',
  },
  wegIfu: {
    title: 'WEGOVY FlexTouch (semaglutide) injection, 2.4 mg single-patient-use pen: Instructions for Use',
    publisher: 'Novo Nordisk, revised 06/2026, FDA-approved patient instructions',
    url: 'https://www.novo-pi.com/wegovy.pdf',
    note: 'Printed in the same PDF as the prescribing information. Other Wegovy presentations have their own Instructions for Use.',
  },
  asShotsy: {
    title: 'Shotsy GLP-1 Tracker (US App Store listing)',
    publisher: 'Shotsy Co., retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/shotsy-glp-1-tracker/id6499510249',
  },
  asMeAgain: {
    title: 'MeAgain: GLP-1 Tracker App (US App Store listing)',
    publisher: 'Dots Future Technologies, retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/meagain-glp-1-tracker-app/id6744178534',
  },
  asGlucoPal: {
    title: 'GLP-1 Tracker by GlucoPal (US App Store listing)',
    publisher: 'The Manhattan App Studio LLC, retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/glp-1-tracker-by-glucopal/id6670317407',
  },
  asGlippy: {
    title: 'Glippy: GLP-1 Shot Tracker (US App Store listing)',
    publisher: 'Glippy LLC, retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/glippy-glp-1-shot-tracker/id6748223909',
  },
  asLogbook: {
    title: 'GLP-1 Logbook: Shot Tracker (US App Store listing)',
    publisher: 'NEURAL CRAFT LIMITED, retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/glp-1-logbook-shot-tracker/id6759644604',
  },
};
