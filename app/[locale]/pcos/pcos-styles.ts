import { nerraStyles } from '../nerra/nerra-styles';

/** Reuses the Nerra page layout (nr-* classes) with the PCOS & Endo Tracker palette. */
export const pcosStyles = `${nerraStyles}
:root {
  --bg: #F6F5FA;
  --card: #FFFFFF;
  --card-muted: #ECEAF4;
  --peach: #8FD9A8;
  --peach-strong: #2F8F5B;
  --peach-tint: #E6F6EC;
  --espresso: #2E2A45;
  --ink-soft: #5F5C70;
  --line: #E3E0EE;
}
.nr-hero::before { background: #CDEBDA; }
.nr-hero::after { background: var(--peach); }
.nr-response { border-color: #CDEBDA; color: #24603F; }
.nr-btn-peach { color: #fff; }
.nr-btn-peach:hover { background: #3AA56C; }
.pc-plans { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin: 18px 0 28px; }
.pc-plan { background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 22px; }
.pc-plan strong { display: block; font-family: 'Playfair Display', serif; font-size: 20px; color: var(--espresso); margin-bottom: 6px; }
.pc-plan span { font-size: 15px; color: var(--ink-soft); line-height: 1.6; }
`;
