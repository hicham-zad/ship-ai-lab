export const examenStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #F4F7FD;
  --card: #FFFFFF;
  --card-muted: #E8EEFB;
  --accent: #5B83E8;
  --brand: #1E3A8A;
  --tint: #E8EEFB;
  --navy: #0F1F4D;
  --ink: #1A2142;
  --ink-soft: #55607F;
  --ink-faint: #8791AE;
  --dark: #14204A;
  --line: #DCE3F3;
}

.ec-page { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); min-height: 100vh; }
.ec-page * { box-sizing: border-box; }

.ec-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 40px; background: rgba(244,247,253,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 50; }
.ec-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.ec-wordmark { font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 22px; color: var(--navy); letter-spacing: -0.3px; }
.ec-nav-links { display: flex; align-items: center; gap: 26px; }
.ec-nav-link { font-size: 14px; font-weight: 600; color: var(--ink-soft); text-decoration: none; transition: color .2s; }
.ec-nav-link:hover { color: var(--brand); }

.ec-hero { background: linear-gradient(180deg, var(--tint) 0%, var(--bg) 100%); padding: 64px 24px; text-align: center; position: relative; overflow: hidden; }
.ec-hero::before { content: ''; position: absolute; top: -140px; left: -120px; width: 380px; height: 380px; border-radius: 50%; background: #CFDCF8; opacity: .85; }
.ec-hero::after { content: ''; position: absolute; top: 20px; right: -110px; width: 260px; height: 260px; border-radius: 50%; background: var(--accent); opacity: .35; }
.ec-hero > * { position: relative; z-index: 1; }
.ec-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--card); color: var(--brand); font-size: 13px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; margin-bottom: 20px; border: 1px solid var(--line); }
.ec-hero-title { font-family: 'DM Sans', sans-serif; font-weight: 900; font-size: clamp(36px, 5vw, 56px); letter-spacing: -1px; color: var(--navy); margin: 0 0 12px; line-height: 1.1; }
.ec-hero-sub { font-size: 17px; color: var(--ink-soft); margin: 0; }

.ec-body { max-width: 780px; margin: 0 auto; padding: 56px 24px 96px; }
.ec-body-wide { max-width: 860px; }

.ec-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid var(--line); }
.ec-company { font-size: 15px; color: var(--ink-soft); font-weight: 600; }
.ec-date { font-size: 14px; color: var(--ink-soft); background: var(--card-muted); padding: 6px 14px; border-radius: 50px; font-weight: 600; }

.ec-highlight { background: var(--tint); border-left: 4px solid var(--brand); border-radius: 0 12px 12px 0; padding: 16px 20px; margin-bottom: 28px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; }
.ec-disclaimer { background: #FFF4E0; border: 1px solid #F0D9A8; border-radius: 12px; padding: 16px 20px; margin-bottom: 18px; font-size: 15px; color: #6B4A12; font-weight: 600; line-height: 1.65; }

.ec-toc { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-bottom: 44px; }
.ec-toc-title { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 18px; color: var(--navy); margin-bottom: 14px; }
.ec-toc ol { padding-left: 20px; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
.ec-toc li { font-size: 14px; color: var(--ink-soft); }
.ec-toc a { color: var(--brand); text-decoration: none; font-weight: 600; }
.ec-toc a:hover { opacity: .75; }

.ec-section { margin-bottom: 44px; scroll-margin-top: 100px; }
.ec-h2 { font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 16px; display: flex; align-items: center; gap: 10px; }
.ec-h2::before { content: ''; display: inline-block; width: 4px; height: 22px; background: var(--accent); border-radius: 2px; flex-shrink: 0; }
.ec-h3 { font-size: 16px; font-weight: 700; color: var(--ink); margin: 20px 0 8px; }
.ec-p { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin: 0 0 14px; }
.ec-ul { padding-left: 20px; margin: 0 0 14px; }
.ec-ul li { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 6px; }
.ec-p a, .ec-ul a { color: var(--brand); font-weight: 700; text-decoration: none; }

.ec-contact-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 26px; margin-top: 12px; }
.ec-contact-card p { font-size: 15px; color: var(--ink-soft); margin: 0 0 6px; line-height: 1.7; }
.ec-contact-card a { color: var(--brand); font-weight: 700; text-decoration: none; }

.ec-ack { background: var(--card-muted); border-radius: 14px; padding: 20px 24px; font-size: 15px; color: var(--ink); font-weight: 600; line-height: 1.65; text-align: center; }
.ec-bottom-links { border-top: 1px solid var(--line); padding-top: 36px; margin-top: 44px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.ec-bottom-links a { color: var(--brand); font-weight: 700; text-decoration: none; font-size: 15px; }

.ec-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--dark); color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px; padding: 15px 28px; border-radius: 50px; text-decoration: none; transition: background .2s, transform .15s; white-space: nowrap; }
.ec-btn:hover { background: #3a3a3a; transform: translateY(-2px); }
.ec-btn-brand { background: var(--brand); }
.ec-btn-brand:hover { background: var(--accent); }
.ec-btn-ghost { background: transparent; color: var(--navy); border: 1.5px solid var(--navy); }
.ec-btn-ghost:hover { background: var(--card); }

.ec-contact-hero { background: var(--card); border: 1px solid var(--line); border-radius: 24px; padding: 36px; display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap; margin-bottom: 36px; box-shadow: 0 4px 24px rgba(30,58,138,0.07); }
.ec-contact-hero h2 { font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 26px; color: var(--navy); margin: 0 0 10px; }
.ec-contact-hero p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); max-width: 380px; margin: 0; }
.ec-response { background: var(--tint); border: 1px solid #CFDCF8; border-radius: 16px; padding: 18px 22px; margin-bottom: 48px; font-size: 15px; color: #1E3A8A; font-weight: 500; line-height: 1.6; }
.ec-section-tag { font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--brand); margin-bottom: 10px; display: block; }
.ec-section-title { font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 32px; letter-spacing: -.5px; color: var(--navy); margin: 0 0 28px; }
.ec-quick-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 14px; margin-bottom: 52px; }
.ec-quick-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 22px; text-decoration: none; display: flex; flex-direction: column; gap: 8px; transition: box-shadow .2s, transform .2s; }
.ec-quick-card:hover { box-shadow: 0 8px 28px rgba(30,58,138,0.1); transform: translateY(-2px); }
.ec-quick-title { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }
.ec-quick-desc { font-size: 13px; line-height: 1.55; color: var(--ink-soft); }
.ec-faq-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 52px; }
.ec-faq-item { background: var(--card); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
.ec-faq-q { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; cursor: pointer; font-weight: 700; font-size: 15px; color: var(--ink); }
.ec-faq-q::-webkit-details-marker { display: none; }
.ec-faq-chevron { font-size: 18px; color: var(--brand); flex-shrink: 0; transition: transform .2s; }
details[open] .ec-faq-chevron { transform: rotate(180deg); }
.ec-faq-a { padding: 16px 22px 20px; font-size: 15px; line-height: 1.75; color: var(--ink-soft); border-top: 1px solid var(--line); }
.ec-faq-a a { color: var(--brand); font-weight: 700; text-decoration: none; }
.ec-still { background: var(--navy); border-radius: 24px; padding: 40px; text-align: center; }
.ec-still h2 { font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 26px; color: #fff; margin: 0 0 10px; }
.ec-still p { font-size: 15px; color: rgba(255,255,255,.75); margin: 0 0 26px; line-height: 1.65; }

.ec-footer { background: var(--dark); padding: 32px 40px; text-align: center; color: rgba(255,255,255,.55); font-size: 14px; }
.ec-footer p { margin: 0; }
.ec-footer a { color: rgba(255,255,255,.75); text-decoration: none; font-weight: 600; }
.ec-footer a:hover { color: #fff; }

/* LANDING */
.ec-land-hero { background: linear-gradient(180deg, var(--tint) 0%, var(--bg) 100%); padding: 72px 24px 24px; position: relative; overflow: hidden; }
.ec-land-hero::before { content: ''; position: absolute; top: -160px; left: -140px; width: 440px; height: 440px; border-radius: 50%; background: #CFDCF8; opacity: .85; }
.ec-land-hero::after { content: ''; position: absolute; top: 60px; right: -130px; width: 300px; height: 300px; border-radius: 50%; background: var(--accent); opacity: .3; }
.ec-land-inner { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
.ec-land-title { font-family: 'DM Sans', sans-serif; font-weight: 900; font-size: clamp(40px, 5.6vw, 68px); line-height: 1.05; letter-spacing: -1.5px; color: var(--navy); margin: 0 0 18px; }
.ec-land-title span { color: var(--brand); }
.ec-land-sub { font-size: 19px; line-height: 1.6; color: var(--ink-soft); margin: 0 0 28px; max-width: 520px; }
.ec-soon { display: inline-flex; align-items: center; gap: 8px; background: var(--dark); color: #fff; font-weight: 700; font-size: 15px; padding: 14px 24px; border-radius: 50px; }
.ec-soon-note { font-size: 13px; color: var(--ink-faint); margin-top: 12px; }
.ec-phone { border-radius: 44px; background: #111; padding: 10px; box-shadow: 0 40px 80px -20px rgba(15,31,77,.35); max-width: 320px; margin: 0 auto; }
.ec-phone img { display: block; width: 100%; height: auto; border-radius: 34px; }
.ec-stats { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding: 36px 24px 8px; position: relative; z-index: 1; }
.ec-stat { text-align: center; }
.ec-stat-num { display: block; font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 30px; color: var(--navy); }
.ec-stat-label { font-size: 13px; color: var(--ink-faint); font-weight: 600; letter-spacing: .5px; text-transform: uppercase; }

.ec-sec { padding: 80px 24px; }
.ec-sec-alt { background: var(--card); }
.ec-sec-inner { max-width: 1080px; margin: 0 auto; }
.ec-sec-sub { font-size: 17px; color: var(--ink-soft); line-height: 1.7; max-width: 620px; margin: -12px 0 40px; }
.ec-features { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
.ec-feature { background: var(--card); border: 1px solid var(--line); border-radius: 22px; padding: 26px; }
.ec-sec-alt .ec-feature { background: var(--bg); }
.ec-feature-title { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); margin-bottom: 8px; }
.ec-feature-desc { font-size: 15px; line-height: 1.65; color: var(--ink-soft); margin: 0; }
.ec-shots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
.ec-shots figure { margin: 0; }
.ec-shots figcaption { text-align: center; font-size: 14px; font-weight: 600; color: var(--ink-soft); margin-top: 14px; }
.ec-table-wrap { background: var(--card); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
.ec-table { width: 100%; border-collapse: collapse; }
.ec-table th, .ec-table td { padding: 15px 22px; font-size: 15px; text-align: center; border-bottom: 1px solid var(--line); }
.ec-table th { background: var(--card-muted); color: var(--navy); font-weight: 700; }
.ec-table td:first-child, .ec-table th:first-child { text-align: left; }
.ec-table tr:last-child td { border-bottom: none; }
.ec-check { color: var(--brand); font-weight: 800; }
.ec-dash { color: var(--ink-faint); }
.ec-cta { background: var(--navy); padding: 80px 24px; text-align: center; }
.ec-cta h2 { font-family: 'DM Sans', sans-serif; font-weight: 900; font-size: clamp(32px, 4.4vw, 48px); color: #fff; margin: 0 0 14px; }
.ec-cta p { font-size: 17px; color: rgba(255,255,255,.75); max-width: 520px; margin: 0 auto 28px; line-height: 1.6; }
.ec-legal-strip { background: var(--bg); padding: 36px 24px; }
.ec-legal-strip p { max-width: 820px; margin: 0 auto 10px; font-size: 13px; line-height: 1.7; color: var(--ink-faint); text-align: center; }

@media (max-width: 860px) {
  .ec-land-inner { grid-template-columns: 1fr; text-align: center; }
  .ec-land-sub { margin-left: auto; margin-right: auto; }
  .ec-shots { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .ec-nav { padding: 14px 20px; }
  .ec-nav-links .ec-nav-link { display: none; }
  .ec-nav-links .ec-nav-link.ec-keep { display: inline; }
  .ec-toc ol { grid-template-columns: 1fr; }
  .ec-contact-hero { flex-direction: column; align-items: stretch; }
  .ec-contact-hero .ec-btn { width: 100%; }
  .ec-footer { padding: 28px 20px; }
  .ec-sec { padding: 56px 20px; }
  .ec-stats { gap: 28px; }
}
`;
