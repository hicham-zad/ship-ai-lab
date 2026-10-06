/** Measure Kit pages: same layout as the Nerra pages, recoloured to the app's palette. */
export const measureKitStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #EEF2F4;
  --card: #FFFFFF;
  --card-muted: #E4EAED;
  --peach: #DDA9D8;
  --peach-strong: #1D4A5E;
  --peach-tint: #F5E7F3;
  --espresso: #16181C;
  --ink: #16181C;
  --ink-soft: #5B6268;
  --ink-faint: #70777D;
  --dark: #16181C;
  --line: #E1E7EA;
}

.mk-page { font-family: 'Outfit', sans-serif; background: var(--bg); color: var(--ink); min-height: 100vh; }
.mk-page * { box-sizing: border-box; }

.mk-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 40px; background: rgba(238,242,244,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 50; }
.mk-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.mk-wordmark { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 22px; color: var(--espresso); letter-spacing: -0.3px; }
.mk-nav-links { display: flex; align-items: center; gap: 26px; }
.mk-nav-link { font-size: 14px; font-weight: 600; color: var(--ink-soft); text-decoration: none; transition: color .2s; }
.mk-nav-link:hover { color: var(--peach-strong); }

.mk-hero { background: linear-gradient(180deg, var(--peach-tint) 0%, var(--bg) 100%); padding: 64px 24px; text-align: center; position: relative; overflow: hidden; }
.mk-hero::before { content: ''; position: absolute; top: -140px; left: -120px; width: 380px; height: 380px; border-radius: 50%; background: #CDE4EF; opacity: .85; }
.mk-hero::after { content: ''; position: absolute; top: 20px; right: -110px; width: 260px; height: 260px; border-radius: 50%; background: var(--peach); opacity: .35; }
.mk-hero > * { position: relative; z-index: 1; }
.mk-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--card); color: var(--peach-strong); font-size: 13px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; margin-bottom: 20px; border: 1px solid var(--line); }
.mk-hero-title { font-family: 'Outfit', sans-serif; font-weight: 900; font-size: clamp(36px, 5vw, 56px); letter-spacing: -1px; color: var(--espresso); margin: 0 0 12px; line-height: 1.1; }
.mk-hero-sub { font-size: 17px; color: var(--ink-soft); margin: 0; }

.mk-body { max-width: 780px; margin: 0 auto; padding: 56px 24px 96px; }
.mk-body-wide { max-width: 860px; }

.mk-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid var(--line); }
.mk-company { font-size: 15px; color: var(--ink-soft); font-weight: 600; }
.mk-date { font-size: 14px; color: var(--ink-soft); background: var(--card-muted); padding: 6px 14px; border-radius: 50px; font-weight: 600; }

.mk-highlight { background: var(--peach-tint); border-left: 4px solid var(--peach-strong); border-radius: 0 12px 12px 0; padding: 16px 20px; margin-bottom: 28px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; }
.mk-disclaimer { background: #FFF4E0; border: 1px solid #F0D9A8; border-radius: 12px; padding: 16px 20px; margin-bottom: 18px; font-size: 15px; color: #6B4A12; font-weight: 600; line-height: 1.65; }

.mk-toc { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-bottom: 44px; }
.mk-toc-title { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 18px; color: var(--espresso); margin-bottom: 14px; }
.mk-toc ol { padding-left: 20px; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
.mk-toc li { font-size: 14px; color: var(--ink-soft); }
.mk-toc a { color: var(--peach-strong); text-decoration: none; font-weight: 600; }
.mk-toc a:hover { opacity: .75; }

.mk-section { margin-bottom: 44px; scroll-margin-top: 100px; }
.mk-h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 24px; color: var(--espresso); margin: 0 0 16px; display: flex; align-items: center; gap: 10px; }
.mk-h2::before { content: ''; display: inline-block; width: 4px; height: 22px; background: var(--peach); border-radius: 2px; flex-shrink: 0; }
.mk-h3 { font-size: 16px; font-weight: 700; color: var(--ink); margin: 20px 0 8px; }
.mk-p { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin: 0 0 14px; }
.mk-ul { padding-left: 20px; margin: 0 0 14px; }
.mk-ul li { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 6px; }
.mk-p a, .mk-ul a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }

.mk-contact-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-top: 12px; }
.mk-contact-card p { font-size: 15px; color: var(--ink-soft); margin: 0 0 6px; line-height: 1.7; }
.mk-contact-card a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }

.mk-ack { background: var(--card-muted); border-radius: 14px; padding: 20px 24px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; text-align: center; }
.mk-bottom-links { border-top: 1px solid var(--line); padding-top: 36px; margin-top: 44px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.mk-bottom-links a { color: var(--peach-strong); font-weight: 700; text-decoration: none; font-size: 15px; }

.mk-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--dark); color: #fff; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px; padding: 15px 28px; border-radius: 50px; text-decoration: none; transition: background .2s, transform .15s; white-space: nowrap; }
.mk-btn:hover { background: #2B3036; transform: translateY(-2px); }
.mk-btn-peach { background: var(--peach-strong); }
.mk-btn-peach:hover { background: var(--peach); }
.mk-btn-ghost { background: transparent; color: var(--espresso); border: 1.5px solid var(--espresso); }
.mk-btn-ghost:hover { background: var(--card); }

.mk-contact-hero { background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 36px; display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap; margin-bottom: 36px; box-shadow: 0 4px 24px rgba(29,74,94,0.07); }
.mk-contact-hero h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 26px; color: var(--espresso); margin: 0 0 10px; }
.mk-contact-hero p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); max-width: 380px; margin: 0; }
.mk-response { background: var(--peach-tint); border: 1px solid #EBCBE8; border-radius: 16px; padding: 18px 22px; margin-bottom: 48px; font-size: 15px; color: #4A2F47; font-weight: 500; line-height: 1.6; }
.mk-section-tag { font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--peach-strong); margin-bottom: 10px; display: block; }
.mk-section-title { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 32px; letter-spacing: -.5px; color: var(--espresso); margin: 0 0 28px; }
.mk-quick-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 14px; margin-bottom: 52px; }
.mk-quick-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 22px; text-decoration: none; display: flex; flex-direction: column; gap: 8px; transition: box-shadow .2s, transform .2s; }
.mk-quick-card:hover { box-shadow: 0 8px 28px rgba(29,74,94,0.1); transform: translateY(-2px); }
.mk-quick-title { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px; color: var(--espresso); }
.mk-quick-desc { font-size: 13px; line-height: 1.55; color: var(--ink-soft); }
.mk-faq-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 52px; }
.mk-faq-item { background: var(--card); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
.mk-faq-q { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; cursor: pointer; font-weight: 700; font-size: 15px; color: var(--ink); }
.mk-faq-q::-webkit-details-marker { display: none; }
.mk-faq-chevron { font-size: 18px; color: var(--peach-strong); flex-shrink: 0; transition: transform .2s; }
details[open] .mk-faq-chevron { transform: rotate(180deg); }
.mk-faq-a { padding: 16px 22px 20px; font-size: 15px; line-height: 1.75; color: var(--ink-soft); border-top: 1px solid var(--line); }
.mk-faq-a a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }
.mk-still { background: var(--espresso); border-radius: 24px; padding: 40px; text-align: center; }
.mk-still h2 { font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 26px; color: #fff; margin: 0 0 10px; }
.mk-still p { font-size: 15px; color: rgba(255,255,255,.75); margin: 0 0 26px; line-height: 1.65; }

.mk-footer { background: var(--dark); padding: 32px 40px; text-align: center; color: rgba(255,255,255,.55); font-size: 14px; }
.mk-footer p { margin: 0; }
.mk-footer a { color: rgba(255,255,255,.75); text-decoration: none; font-weight: 600; }
.mk-footer a:hover { color: #fff; }

/* LANDING */
.mk-land-hero { background: linear-gradient(180deg, var(--peach-tint) 0%, var(--bg) 100%); padding: 72px 24px 24px; position: relative; overflow: hidden; }
.mk-land-hero::before { content: ''; position: absolute; top: -160px; left: -140px; width: 440px; height: 440px; border-radius: 50%; background: #CDE4EF; opacity: .85; }
.mk-land-hero::after { content: ''; position: absolute; top: 60px; right: -130px; width: 300px; height: 300px; border-radius: 50%; background: var(--peach); opacity: .3; }
.mk-land-inner { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
.mk-land-title { font-family: 'Outfit', sans-serif; font-weight: 900; font-size: clamp(40px, 5.6vw, 68px); line-height: 1.05; letter-spacing: -1.5px; color: var(--espresso); margin: 0 0 18px; }
.mk-land-title span { color: var(--peach-strong); }
.mk-land-sub { font-size: 19px; line-height: 1.6; color: var(--ink-soft); margin: 0 0 28px; max-width: 520px; }
.mk-soon { display: inline-flex; align-items: center; gap: 8px; background: var(--dark); color: #fff; font-weight: 700; font-size: 15px; padding: 14px 24px; border-radius: 50px; }
.mk-soon-note { font-size: 13px; color: var(--ink-faint); margin-top: 12px; }
.mk-phone { border-radius: 44px; background: #111; padding: 10px; box-shadow: 0 40px 80px -20px rgba(29,74,94,.3); max-width: 320px; margin: 0 auto; }
.mk-phone img { display: block; width: 100%; height: auto; border-radius: 34px; }
.mk-stats { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding: 36px 24px 8px; position: relative; z-index: 1; }
.mk-stat { text-align: center; }
.mk-stat-num { display: block; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 30px; color: var(--espresso); }
.mk-stat-label { font-size: 13px; color: var(--ink-faint); font-weight: 600; letter-spacing: .5px; text-transform: uppercase; }

.mk-sec { padding: 80px 24px; }
.mk-sec-alt { background: var(--card); }
.mk-sec-inner { max-width: 1080px; margin: 0 auto; }
.mk-sec-sub { font-size: 17px; color: var(--ink-soft); line-height: 1.7; max-width: 620px; margin: -12px 0 40px; }
.mk-features { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
.mk-feature { background: var(--card); border: 1px solid var(--line); border-radius: 22px; padding: 26px; }
.mk-sec-alt .mk-feature { background: var(--bg); }
.mk-feature-title { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 19px; color: var(--espresso); margin-bottom: 8px; }
.mk-feature-desc { font-size: 15px; line-height: 1.65; color: var(--ink-soft); margin: 0; }
.mk-shots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
.mk-shots figure { margin: 0; }
.mk-shots figcaption { text-align: center; font-size: 14px; font-weight: 600; color: var(--ink-soft); margin-top: 14px; }
.mk-table-wrap { background: var(--card); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
.mk-table { width: 100%; border-collapse: collapse; }
.mk-table th, .mk-table td { padding: 15px 22px; font-size: 15px; text-align: center; border-bottom: 1px solid var(--line); }
.mk-table th { background: var(--card-muted); color: var(--espresso); font-weight: 700; }
.mk-table td:first-child, .mk-table th:first-child { text-align: left; }
.mk-table tr:last-child td { border-bottom: none; }
.mk-check { color: var(--peach-strong); font-weight: 800; }
.mk-dash { color: var(--ink-faint); }
.mk-cta { background: var(--espresso); padding: 80px 24px; text-align: center; }
.mk-cta h2 { font-family: 'Outfit', sans-serif; font-weight: 900; font-size: clamp(32px, 4.4vw, 48px); color: #fff; margin: 0 0 14px; }
.mk-cta p { font-size: 17px; color: rgba(255,255,255,.75); max-width: 520px; margin: 0 auto 28px; line-height: 1.6; }
.mk-legal-strip { background: var(--bg); padding: 36px 24px; }
.mk-legal-strip p { max-width: 820px; margin: 0 auto 10px; font-size: 13px; line-height: 1.7; color: var(--ink-faint); text-align: center; }

@media (max-width: 860px) {
  .mk-land-inner { grid-template-columns: 1fr; text-align: center; }
  .mk-land-sub { margin-left: auto; margin-right: auto; }
  .mk-shots { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .mk-nav { padding: 14px 20px; }
  .mk-nav-links .mk-nav-link { display: none; }
  .mk-nav-links .mk-nav-link.mk-keep { display: inline; }
  .mk-toc ol { grid-template-columns: 1fr; }
  .mk-contact-hero { flex-direction: column; align-items: stretch; }
  .mk-contact-hero .mk-btn { width: 100%; }
  .mk-footer { padding: 28px 20px; }
  .mk-sec { padding: 56px 20px; }
  .mk-stats { gap: 28px; }
}
`;
