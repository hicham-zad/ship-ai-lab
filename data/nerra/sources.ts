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
};
