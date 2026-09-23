export const pendraStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap');

:root {
  --bg: #F3F0EB;
  --card: #FBFAF8;
  --card-muted: #ECE8E2;
  --peach: #F2A27E;
  --peach-strong: #EC8A5E;
  --peach-tint: #FBEEE3;
  --espresso: #47281A;
  --ink: #1E1E1E;
  --ink-soft: #6F6D6A;
  --ink-faint: #8C8A87;
  --dark: #2A2A2A;
  --line: #E4E0D9;
}

.nr-page { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); min-height: 100vh; }
.nr-page * { box-sizing: border-box; }

.nr-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 40px; background: rgba(243,240,235,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 50; }
.nr-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.nr-wordmark { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 22px; color: var(--espresso); letter-spacing: -0.3px; }
.nr-nav-links { display: flex; align-items: center; gap: 26px; }
.nr-nav-link { font-size: 14px; font-weight: 600; color: var(--ink-soft); text-decoration: none; transition: color .2s; }
.nr-nav-link:hover { color: var(--peach-strong); }

.nr-hero { background: linear-gradient(180deg, var(--peach-tint) 0%, var(--bg) 100%); padding: 64px 24px; text-align: center; position: relative; overflow: hidden; }
.nr-hero::before { content: ''; position: absolute; top: -140px; left: -120px; width: 380px; height: 380px; border-radius: 50%; background: #FBD3BE; opacity: .85; }
.nr-hero::after { content: ''; position: absolute; top: 20px; right: -110px; width: 260px; height: 260px; border-radius: 50%; background: var(--peach); opacity: .35; }
.nr-hero > * { position: relative; z-index: 1; }
.nr-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--card); color: var(--peach-strong); font-size: 13px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; margin-bottom: 20px; border: 1px solid var(--line); }
.nr-hero-title { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(36px, 5vw, 56px); letter-spacing: -1px; color: var(--espresso); margin: 0 0 12px; line-height: 1.1; }
.nr-hero-sub { font-size: 17px; color: var(--ink-soft); margin: 0; }

.nr-body { max-width: 780px; margin: 0 auto; padding: 56px 24px 96px; }
.nr-body-wide { max-width: 860px; }

.nr-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid var(--line); }
.nr-company { font-size: 15px; color: var(--ink-soft); font-weight: 600; }
.nr-date { font-size: 14px; color: var(--ink-soft); background: var(--card-muted); padding: 6px 14px; border-radius: 50px; font-weight: 600; }

.nr-highlight { background: var(--peach-tint); border-left: 4px solid var(--peach-strong); border-radius: 0 12px 12px 0; padding: 16px 20px; margin-bottom: 28px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; }
.nr-disclaimer { background: #FFF4E0; border: 1px solid #F0D9A8; border-radius: 12px; padding: 16px 20px; margin-bottom: 18px; font-size: 15px; color: #6B4A12; font-weight: 600; line-height: 1.65; }

.nr-toc { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-bottom: 44px; }
.nr-toc-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 18px; color: var(--espresso); margin-bottom: 14px; }
.nr-toc ol { padding-left: 20px; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
.nr-toc li { font-size: 14px; color: var(--ink-soft); }
.nr-toc a { color: var(--peach-strong); text-decoration: none; font-weight: 600; }
.nr-toc a:hover { opacity: .75; }

.nr-section { margin-bottom: 44px; scroll-margin-top: 100px; }
.nr-h2 { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 24px; color: var(--espresso); margin: 0 0 16px; display: flex; align-items: center; gap: 10px; }
.nr-h2::before { content: ''; display: inline-block; width: 4px; height: 22px; background: var(--peach); border-radius: 2px; flex-shrink: 0; }
.nr-h3 { font-size: 16px; font-weight: 700; color: var(--ink); margin: 20px 0 8px; }
.nr-p { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin: 0 0 14px; }
.nr-ul { padding-left: 20px; margin: 0 0 14px; }
.nr-ul li { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 6px; }
.nr-p a, .nr-ul a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }

.nr-contact-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-top: 12px; }
.nr-contact-card p { font-size: 15px; color: var(--ink-soft); margin: 0 0 6px; line-height: 1.7; }
.nr-contact-card a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }

.nr-ack { background: var(--card-muted); border-radius: 14px; padding: 20px 24px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; text-align: center; }
.nr-bottom-links { border-top: 1px solid var(--line); padding-top: 36px; margin-top: 44px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.nr-bottom-links a { color: var(--peach-strong); font-weight: 700; text-decoration: none; font-size: 15px; }

.nr-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--dark); color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px; padding: 15px 28px; border-radius: 50px; text-decoration: none; transition: background .2s, transform .15s; white-space: nowrap; }
.nr-btn:hover { background: #3a3a3a; transform: translateY(-2px); }
.nr-btn-peach { background: var(--peach-strong); }
.nr-btn-peach:hover { background: var(--peach); }
.nr-btn-ghost { background: transparent; color: var(--espresso); border: 1.5px solid var(--espresso); }
.nr-btn-ghost:hover { background: var(--card); }

.nr-contact-hero { background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 36px; display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap; margin-bottom: 36px; box-shadow: 0 4px 24px rgba(107,74,51,0.07); }
.nr-contact-hero h2 { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 26px; color: var(--espresso); margin: 0 0 10px; }
.nr-contact-hero p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); max-width: 380px; margin: 0; }
.nr-response { background: var(--peach-tint); border: 1px solid #F3D6C3; border-radius: 16px; padding: 18px 22px; margin-bottom: 48px; font-size: 15px; color: #7A4B33; font-weight: 500; line-height: 1.6; }
.nr-section-tag { font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--peach-strong); margin-bottom: 10px; display: block; }
.nr-section-title { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 32px; letter-spacing: -.5px; color: var(--espresso); margin: 0 0 28px; }
.nr-quick-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 14px; margin-bottom: 52px; }
.nr-quick-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 22px; text-decoration: none; display: flex; flex-direction: column; gap: 8px; transition: box-shadow .2s, transform .2s; }
.nr-quick-card:hover { box-shadow: 0 8px 28px rgba(107,74,51,0.1); transform: translateY(-2px); }
.nr-quick-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 16px; color: var(--espresso); }
.nr-quick-desc { font-size: 13px; line-height: 1.55; color: var(--ink-soft); }
.nr-faq-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 52px; }
.nr-faq-item { background: var(--card); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
.nr-faq-q { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; cursor: pointer; font-weight: 700; font-size: 15px; color: var(--ink); }
.nr-faq-q::-webkit-details-marker { display: none; }
.nr-faq-chevron { font-size: 18px; color: var(--peach-strong); flex-shrink: 0; transition: transform .2s; }
details[open] .nr-faq-chevron { transform: rotate(180deg); }
.nr-faq-a { padding: 16px 22px 20px; font-size: 15px; line-height: 1.75; color: var(--ink-soft); border-top: 1px solid var(--line); }
.nr-faq-a a { color: var(--peach-strong); font-weight: 700; text-decoration: none; }
.nr-still { background: var(--espresso); border-radius: 24px; padding: 40px; text-align: center; }
.nr-still h2 { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 26px; color: #fff; margin: 0 0 10px; }
.nr-still p { font-size: 15px; color: rgba(255,255,255,.75); margin: 0 0 26px; line-height: 1.65; }

.nr-footer { background: var(--dark); padding: 32px 40px; text-align: center; color: rgba(255,255,255,.55); font-size: 14px; }
.nr-footer p { margin: 0; }
.nr-footer a { color: rgba(255,255,255,.75); text-decoration: none; font-weight: 600; }
.nr-footer a:hover { color: #fff; }

/* LANDING */
.nr-land-hero { background: linear-gradient(180deg, var(--peach-tint) 0%, var(--bg) 100%); padding: 72px 24px 24px; position: relative; overflow: hidden; }
.nr-land-hero::before { content: ''; position: absolute; top: -160px; left: -140px; width: 440px; height: 440px; border-radius: 50%; background: #FBD3BE; opacity: .85; }
.nr-land-hero::after { content: ''; position: absolute; top: 60px; right: -130px; width: 300px; height: 300px; border-radius: 50%; background: var(--peach); opacity: .3; }
.nr-land-inner { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
.nr-land-title { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(40px, 5.6vw, 68px); line-height: 1.05; letter-spacing: -1.5px; color: var(--espresso); margin: 0 0 18px; }
.nr-land-title span { color: var(--peach-strong); }
.nr-land-sub { font-size: 19px; line-height: 1.6; color: var(--ink-soft); margin: 0 0 28px; max-width: 520px; }
.nr-soon { display: inline-flex; align-items: center; gap: 8px; background: var(--dark); color: #fff; font-weight: 700; font-size: 15px; padding: 14px 24px; border-radius: 50px; }
.nr-soon-note { font-size: 13px; color: var(--ink-faint); margin-top: 12px; }
.nr-phone { border-radius: 44px; background: #111; padding: 10px; box-shadow: 0 40px 80px -20px rgba(70,40,20,.35); max-width: 320px; margin: 0 auto; }
.nr-phone img { display: block; width: 100%; height: auto; border-radius: 34px; }
.nr-stats { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding: 36px 24px 8px; position: relative; z-index: 1; }
.nr-stat { text-align: center; }
.nr-stat-num { display: block; font-family: 'Playfair Display', serif; font-weight: 800; font-size: 30px; color: var(--espresso); }
.nr-stat-label { font-size: 13px; color: var(--ink-faint); font-weight: 600; letter-spacing: .5px; text-transform: uppercase; }

.nr-sec { padding: 80px 24px; }
.nr-sec-alt { background: var(--card); }
.nr-sec-inner { max-width: 1080px; margin: 0 auto; }
.nr-sec-sub { font-size: 17px; color: var(--ink-soft); line-height: 1.7; max-width: 620px; margin: -12px 0 40px; }
.nr-features { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
.nr-feature { background: var(--card); border: 1px solid var(--line); border-radius: 22px; padding: 26px; }
.nr-sec-alt .nr-feature { background: var(--bg); }
.nr-feature-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 19px; color: var(--espresso); margin-bottom: 8px; }
.nr-feature-desc { font-size: 15px; line-height: 1.65; color: var(--ink-soft); margin: 0; }
.nr-shots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
.nr-shots figure { margin: 0; }
.nr-shots figcaption { text-align: center; font-size: 14px; font-weight: 600; color: var(--ink-soft); margin-top: 14px; }
.nr-table-wrap { background: var(--card); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
.nr-table { width: 100%; border-collapse: collapse; }
.nr-table th, .nr-table td { padding: 15px 22px; font-size: 15px; text-align: center; border-bottom: 1px solid var(--line); }
.nr-table th { background: var(--card-muted); color: var(--espresso); font-weight: 700; }
.nr-table td:first-child, .nr-table th:first-child { text-align: left; }
.nr-table tr:last-child td { border-bottom: none; }
.nr-check { color: var(--peach-strong); font-weight: 800; }
.nr-dash { color: var(--ink-faint); }
.nr-cta { background: var(--espresso); padding: 80px 24px; text-align: center; }
.nr-cta h2 { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(32px, 4.4vw, 48px); color: #fff; margin: 0 0 14px; }
.nr-cta p { font-size: 17px; color: rgba(255,255,255,.75); max-width: 520px; margin: 0 auto 28px; line-height: 1.6; }
.nr-legal-strip { background: var(--bg); padding: 36px 24px; }
.nr-legal-strip p { max-width: 820px; margin: 0 auto 10px; font-size: 13px; line-height: 1.7; color: var(--ink-faint); text-align: center; }

@media (max-width: 860px) {
  .nr-land-inner { grid-template-columns: 1fr; text-align: center; }
  .nr-land-sub { margin-left: auto; margin-right: auto; }
  .nr-shots { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .nr-nav { padding: 14px 20px; }
  .nr-nav-links .nr-nav-link { display: none; }
  .nr-nav-links .nr-nav-link.nr-keep { display: inline; }
  .nr-toc ol { grid-template-columns: 1fr; }
  .nr-contact-hero { flex-direction: column; align-items: stretch; }
  .nr-contact-hero .nr-btn { width: 100%; }
  .nr-footer { padding: 28px 20px; }
  .nr-sec { padding: 56px 20px; }
  .nr-stats { gap: 28px; }
}
`;
