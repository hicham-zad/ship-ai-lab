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

/* ---- PCOS feature pages ---- */
.pcx-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
.pcx-hero { background: linear-gradient(180deg, var(--peach-tint) 0%, var(--bg) 100%); padding: 64px 24px 40px; position: relative; overflow: hidden; }
.pcx-hero::before { content: ''; position: absolute; top: -150px; left: -130px; width: 420px; height: 420px; border-radius: 50%; background: #CDEBDA; opacity: .8; }
.pcx-hero::after { content: ''; position: absolute; top: 80px; right: -120px; width: 280px; height: 280px; border-radius: 50%; background: var(--peach); opacity: .28; }
.pcx-hero-inner { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr .9fr; gap: 44px; align-items: center; }
.pcx-crumbs { font-size: 13px; font-weight: 600; color: var(--ink-soft); margin-bottom: 14px; }
.pcx-crumbs a { color: var(--peach-strong); text-decoration: none; }
.pcx-h1 { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(34px, 4.8vw, 56px); line-height: 1.07; letter-spacing: -1.2px; color: var(--espresso); margin: 0 0 16px; }
.pcx-h1 em { font-style: normal; color: var(--peach-strong); }
.pcx-lede { font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 24px; max-width: 520px; }
.pcx-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 22px; }
.pcx-tag { font-size: 12px; font-weight: 700; letter-spacing: .4px; padding: 6px 12px; border-radius: 50px; background: #fff; border: 1px solid var(--line); color: var(--espresso); }
.pcx-tag.free { background: #E6F6EC; border-color: #BFE3CD; color: #24603F; }
.pcx-tag.premium { background: #EEEAF9; border-color: #D5CEF0; color: #4B3E8C; }

.pcx-phone { border-radius: 46px; background: #15131f; padding: 10px; box-shadow: 0 40px 80px -24px rgba(46,42,69,.45); max-width: 300px; margin: 0 auto; position: relative; }
.pcx-phone img { display: block; width: 100%; height: auto; border-radius: 37px; background: #fff; }
.pcx-float { animation: pcx-float 6s ease-in-out infinite; }
@keyframes pcx-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.pcx-stack { position: relative; }
.pcx-stack img:not(:first-child) { position: absolute; inset: 10px; width: calc(100% - 20px); height: calc(100% - 20px); object-fit: cover; object-position: top; opacity: 0; }
.pcx-stack.n2 img:nth-child(1) { animation: pcx-x2a 8s infinite; } .pcx-stack.n2 img:nth-child(2) { animation: pcx-x2b 8s infinite; }
@keyframes pcx-x2a { 0%,42% { opacity: 1; } 50%,92% { opacity: 0; } 100% { opacity: 1; } }
@keyframes pcx-x2b { 0%,42% { opacity: 0; } 50%,92% { opacity: 1; } 100% { opacity: 0; } }
.pcx-stack.n3 img:nth-child(1) { animation: pcx-x3a 12s infinite; } .pcx-stack.n3 img:nth-child(2) { animation: pcx-x3b 12s infinite; } .pcx-stack.n3 img:nth-child(3) { animation: pcx-x3c 12s infinite; }
@keyframes pcx-x3a { 0%,28% { opacity: 1; } 34%,94% { opacity: 0; } 100% { opacity: 1; } }
@keyframes pcx-x3b { 0%,28% { opacity: 0; } 34%,61% { opacity: 1; } 67%,100% { opacity: 0; } }
@keyframes pcx-x3c { 0%,61% { opacity: 0; } 67%,94% { opacity: 1; } 100% { opacity: 0; } }

.pcx-sec { padding: 64px 24px; }
.pcx-sec.alt { background: var(--card-muted); }
.pcx-sec-inner { max-width: 1080px; margin: 0 auto; }
.pcx-h2 { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(28px, 3.6vw, 40px); line-height: 1.12; letter-spacing: -.8px; color: var(--espresso); margin: 0 0 14px; }
.pcx-p { font-size: 17px; line-height: 1.75; color: var(--ink-soft); margin: 0 0 16px; max-width: 680px; }
.pcx-p strong { color: var(--espresso); }
.pcx-split { display: grid; grid-template-columns: 1fr 300px; gap: 48px; align-items: center; }
.pcx-split.flip { grid-template-columns: 300px 1fr; }
.pcx-split.flip > :first-child { order: 2; }
.pcx-duo { display: flex; gap: 22px; justify-content: center; flex-wrap: wrap; }
.pcx-duo .pcx-phone { max-width: 250px; margin: 0; }
.pcx-cap { font-size: 13px; color: var(--ink-faint); text-align: center; margin-top: 12px; line-height: 1.5; }

.pcx-steps { list-style: none; margin: 22px 0 0; padding: 0; counter-reset: s; display: grid; gap: 14px; }
.pcx-steps li { counter-increment: s; position: relative; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 16px 18px 16px 62px; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
.pcx-steps li::before { content: counter(s); position: absolute; left: 16px; top: 14px; width: 32px; height: 32px; border-radius: 50%; background: var(--peach-strong); color: #fff; font-weight: 800; display: flex; align-items: center; justify-content: center; }
.pcx-steps li strong { color: var(--espresso); }

.pcx-facts { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 22px; }
.pcx-fact { background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 20px; }
.pcx-fact h3 { font-family: 'Playfair Display', serif; font-size: 19px; color: var(--espresso); margin: 0 0 6px; }
.pcx-fact p { margin: 0; font-size: 15px; line-height: 1.65; color: var(--ink-soft); }
.pcx-not { border-left: 4px solid var(--peach-strong); background: var(--card); border-radius: 0 16px 16px 0; padding: 18px 22px; margin-top: 22px; }
.pcx-not strong { display: block; color: var(--espresso); margin-bottom: 4px; }
.pcx-not p { margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink-soft); }

.pcx-faq details { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 16px 20px; margin-bottom: 10px; }
.pcx-faq summary { cursor: pointer; font-weight: 700; color: var(--espresso); font-size: 16px; }
.pcx-faq details p { margin: 10px 0 0; font-size: 15.5px; line-height: 1.7; color: var(--ink-soft); }
.pcx-sample { font-size: 13px; color: var(--ink-faint); line-height: 1.6; max-width: 680px; margin-top: 18px; }

.pcx-more { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin-top: 20px; }
.pcx-more a { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 16px 18px; text-decoration: none; transition: transform .15s, border-color .15s; display: block; }
.pcx-more a:hover { transform: translateY(-3px); border-color: var(--peach-strong); }
.pcx-more strong { display: block; color: var(--espresso); font-size: 16px; margin-bottom: 4px; }
.pcx-more span:not(.pcx-tag) { display: block; color: var(--ink-soft); font-size: 14px; line-height: 1.5; }
.pcx-more .pcx-tag { margin-top: 12px; display: inline-block; }

.pcx-reveal { transition: opacity .7s ease, transform .7s ease; }
.pcx-reveal.pcx-hidden { opacity: 0; transform: translateY(26px); }

/* score card (landing + scanner page): rows animate in one by one */
.pcx-score { background: var(--card); border: 1px solid var(--line); border-radius: 22px; padding: 22px; max-width: 340px; box-shadow: 0 18px 40px -18px rgba(46,42,69,.25); }
.pcx-score-top { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.pcx-grade { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 28px; color: var(--ink); animation: pcx-pop .6s cubic-bezier(.2,1.4,.4,1) both; }
@keyframes pcx-pop { from { transform: scale(.3); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.pcx-score-name { font-weight: 800; color: var(--espresso); font-size: 17px; line-height: 1.2; }
.pcx-score-brand { font-size: 13px; color: var(--ink-faint); }
.pcx-reason { display: flex; gap: 8px; align-items: center; font-size: 14.5px; padding: 8px 0; border-top: 1px solid var(--line); opacity: 0; animation: pcx-rise .5s ease forwards; }
.pcx-reason i { width: 8px; height: 8px; border-radius: 50%; flex: none; }
.pcx-reason.good i { background: #2F8F5B; } .pcx-reason.bad i { background: #D2527A; }
@keyframes pcx-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.pcx-bars { display: flex; gap: 8px; margin-top: 12px; }
.pcx-bar { flex: 1; background: var(--card-muted); border-radius: 10px; padding: 8px 10px; font-size: 12px; color: var(--ink-soft); }
.pcx-bar b { display: block; font-size: 17px; color: var(--espresso); }

/* cycle bars */
.pcx-cycles { display: flex; align-items: flex-end; gap: 10px; height: 170px; padding: 18px 18px 10px; background: var(--card); border: 1px solid var(--line); border-radius: 20px; max-width: 460px; position: relative; }
.pcx-cyc { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; font-size: 12px; font-weight: 700; color: var(--espresso); }
.pcx-cyc span { display: block; width: 100%; border-radius: 8px 8px 4px 4px; background: #BFE3CD; height: 0; transition: height 1.1s cubic-bezier(.2,.9,.3,1); margin-top: 4px; }
.pcx-cyc.out span { background: #F3A0B5; }
.pcx-cycles.go .pcx-cyc span { height: var(--h); }
.pcx-band { position: absolute; left: 18px; right: 18px; border-top: 1.5px dashed #2F8F5B; font-size: 11px; color: #2F8F5B; font-weight: 700; }

/* animated track (Bloom stages, late period days) */
.pcx-track { position: relative; display: grid; grid-template-columns: repeat(var(--n), 1fr); gap: 8px; margin-top: 26px; max-width: 640px; padding-top: 22px; }
.pcx-track-line { position: absolute; left: calc(50% / var(--n)); right: calc(50% / var(--n)); top: 6px; height: 4px; border-radius: 2px; background: var(--line); }
.pcx-track-line i { display: block; height: 100%; border-radius: 2px; background: var(--peach-strong); width: 0; animation: pcx-fill 1.8s .2s cubic-bezier(.3,.8,.3,1) forwards; }
@keyframes pcx-fill { to { width: 100%; } }
.pcx-node { position: relative; text-align: center; opacity: 0; animation: pcx-rise .5s ease forwards; }
.pcx-node::before { content: ''; position: absolute; top: -22px; left: 50%; width: 14px; height: 14px; margin-left: -7px; border-radius: 50%; background: #fff; border: 3px solid var(--peach-strong); }
.pcx-node b { display: block; font-size: 15px; color: var(--espresso); }
.pcx-node span { display: block; font-size: 12.5px; line-height: 1.45; color: var(--ink-soft); margin-top: 3px; }
/* scoring rules table */
.pcx-rules { background: var(--card); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; max-width: 560px; margin-top: 18px; }
.pcx-rules-row { display: flex; justify-content: space-between; gap: 16px; padding: 12px 18px; border-top: 1px solid var(--line); font-size: 15px; color: var(--ink-soft); }
.pcx-rules-row:first-child { border-top: 0; }
.pcx-pts { font-weight: 800; white-space: nowrap; }
.pcx-pts.up { color: #24603F; } .pcx-pts.down { color: #B83A64; }
.pcx-scale { display: flex; gap: 8px; margin-top: 16px; max-width: 560px; flex-wrap: wrap; }
.pcx-scale div { flex: 1; min-width: 86px; border-radius: 14px; padding: 10px 12px; text-align: center; font-size: 12px; color: var(--ink); animation: pcx-rise .5s ease both; }
.pcx-scale b { display: block; font-size: 24px; font-weight: 900; }
@media (prefers-reduced-motion: reduce) {
  .pcx-float, .pcx-stack img, .pcx-grade, .pcx-reason { animation: none !important; opacity: 1 !important; }
  .pcx-stack img:not(:first-child) { display: none; }
  .pcx-cyc span { transition: none; }
  .pcx-scale div { animation: none !important; }
  .pcx-node { animation: none !important; opacity: 1 !important; }
  .pcx-track-line i { animation: none !important; width: 100% !important; }
}
@media (max-width: 860px) {
  .pcx-hero-inner, .pcx-split, .pcx-split.flip { grid-template-columns: 1fr; gap: 32px; }
  .pcx-split.flip > :first-child { order: 0; }
  .pcx-hero { padding-top: 40px; }
  .pcx-sec { padding: 48px 20px; }
}
`;
