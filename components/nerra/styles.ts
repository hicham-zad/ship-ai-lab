export const NR_ARTICLE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap');
:root{--bg:#F3F0EB;--card:#FBFAF8;--card-muted:#ECE8E2;--peach:#F2A27E;--peach-strong:#C9582A;--peach-tint:#FBEEE3;--espresso:#47281A;--ink:#1E1E1E;--ink-soft:#5F5D5A;--line:#E4E0D9;--green-tint:#E6EFE3;--green:#4C7A52;--warn:#FFF4E0;--warn-line:#F0D9A8}
.nra{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--ink);min-height:100vh}
.nra *{box-sizing:border-box}
.nra a{color:var(--peach-strong)}
.nra-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 24px;background:rgba(243,240,235,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}
.nra-brand{display:flex;align-items:center;gap:10px;text-decoration:none}
.nra-brand span{font-family:'Playfair Display',serif;font-weight:800;font-size:22px;color:var(--espresso)}
.nra-nav-links{display:flex;gap:22px;align-items:center}
.nra-nav-links a{font-size:14px;font-weight:600;color:var(--ink-soft);text-decoration:none}
.nra-nav-links a:hover{color:var(--peach-strong)}
.nra-pill{display:inline-flex;align-items:center;font-weight:700;font-size:14px;padding:10px 18px;border-radius:50px;border:2px dashed var(--peach-strong);color:var(--peach-strong);white-space:nowrap}
.nra-pill.on-dark{border-color:rgba(255,255,255,.6);color:#fff}
.nra .nra-btn{display:inline-flex;align-items:center;background:var(--espresso);color:#fff;font-weight:700;font-size:15px;padding:11px 22px;border-radius:50px;text-decoration:none;border:none;cursor:pointer;font-family:inherit}
.nra-wrap{max-width:780px;margin:0 auto;padding:0 20px}
.nra-crumbs{font-size:13px;color:var(--ink-soft);padding:28px 0 8px}
.nra-crumbs a{color:var(--ink-soft)}
.nra-kicker{display:inline-block;background:var(--peach-tint);color:var(--peach-strong);font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;padding:5px 12px;border-radius:50px;margin-bottom:16px;border:1px solid var(--line)}
.nra h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(30px,5vw,46px);line-height:1.12;letter-spacing:-.8px;color:var(--espresso);margin:0 0 16px}
.nra-dek{font-size:19px;line-height:1.6;color:var(--ink-soft);margin:0 0 20px}
.nra-quick{background:var(--card);border:1px solid var(--line);border-left:6px solid var(--peach-strong);border-radius:16px;padding:16px 20px;margin:0 0 18px}
.nra-quick strong{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--peach-strong)}
.nra-quick p{margin:6px 0 0;font-size:17px;line-height:1.65}
.nra-meta{font-size:13px;color:var(--ink-soft);padding-bottom:24px;border-bottom:1px solid var(--line)}
.nra-toc{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px 22px;margin:28px 0}
.nra-toc strong{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--peach-strong)}
.nra-toc ol{margin:10px 0 0;padding-left:20px;font-size:15px;line-height:1.9}
.nra-body h2{font-family:'Playfair Display',serif;font-weight:800;font-size:clamp(23px,3.2vw,29px);line-height:1.2;color:var(--espresso);margin:50px 0 14px;scroll-margin-top:84px}
.nra-body h3{font-size:18px;font-weight:700;margin:26px 0 8px}
.nra-body p,.nra-body li{font-size:17px;line-height:1.75}
.nra-body p{margin:0 0 16px}
.nra-body ul,.nra-body ol{padding-left:22px;margin:0 0 18px}
.nra-body li{margin-bottom:8px}
.nra-body sup a{font-size:12px;font-weight:700;text-decoration:none;padding:0 1px}
.nra-callout{border-radius:16px;padding:18px 22px;margin:8px 0 20px;border:1px solid var(--line);background:var(--card-muted)}
.nra-callout strong{display:block;font-size:16px;margin-bottom:6px;color:var(--espresso)}
.nra-callout p{margin:0;font-size:16px}
.nra-callout.safety{background:var(--warn);border-color:var(--warn-line)}
.nra-callout.disclosure{background:var(--green-tint);border-color:#C9DBC5}
.nra-tablewrap{overflow-x:auto;margin:8px 0 24px;border:1px solid var(--line);border-radius:16px;background:var(--card)}
.nra-table{border-collapse:collapse;width:100%;min-width:600px;font-size:14.5px;line-height:1.55}
.nra-table th{background:var(--espresso);color:#fff;text-align:left;padding:12px 14px;font-size:14px}
.nra-table td,.nra-table tbody th{padding:12px 14px;border-top:1px solid var(--line);vertical-align:top;text-align:left}
.nra-table tbody th{background:var(--peach-tint);color:var(--ink);font-weight:700;min-width:120px}
.nra-cap{font-size:13px;color:var(--ink-soft);padding:10px 14px;border-top:1px solid var(--line)}
.nra-cta-inline{display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap;background:var(--peach-tint);border:1px solid var(--line);border-radius:18px;padding:20px 24px;margin:8px 0}
.nra-cta-inline strong{font-family:'Playfair Display',serif;font-size:19px;display:block;margin-bottom:4px;color:var(--espresso)}
.nra-cta-inline p{margin:0;font-size:15px;line-height:1.6;max-width:480px}
.nra-fit{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:8px 0}
.nra-fit-col{border-radius:16px;padding:18px 20px;border:1px solid var(--line);background:var(--card)}
.nra-fit-col.good{background:var(--green-tint);border-color:#C9DBC5}
.nra-fit-col.not{background:var(--card-muted)}
.nra-fit-col strong{font-size:16px;display:block;margin-bottom:8px}
.nra-fit-col ul{margin:0;padding-left:18px}
.nra-fit-col li{font-size:15px;line-height:1.6;margin-bottom:6px}
.nra-tool{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:22px;margin:8px 0 24px}
.nra-tool label{font-weight:700;font-size:14px;display:block;margin-bottom:6px}
.nra-tool select,.nra-tool input[type=date]{font:inherit;font-size:16px;padding:10px 12px;border:2px solid var(--line);border-radius:12px;width:100%;background:#fff;color:var(--ink)}
.nra-tool select:focus,.nra-tool input:focus{outline:none;border-color:var(--peach-strong)}
.nra-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:16px}
.nra-check{display:flex;gap:10px;align-items:center;font-size:15px;margin:6px 0}
.nra-check input{width:18px;height:18px;accent-color:var(--peach-strong)}
.nra-result{border-radius:16px;padding:18px 20px;margin-top:16px;font-size:16px;line-height:1.6;border:1px solid var(--line);background:var(--card-muted)}
.nra-result b{display:block;font-family:'Playfair Display',serif;font-size:22px;margin-bottom:6px;color:var(--espresso)}
.nra-result.take{background:var(--green-tint);border-color:#C9DBC5}
.nra-result.check{background:var(--warn);border-color:var(--warn-line)}
.nra-planner{width:100%;border-collapse:collapse;font-size:15px;margin-top:8px}
.nra-planner th{text-align:left;padding:8px 10px;border-bottom:2px solid var(--line);font-size:13px;text-transform:uppercase;letter-spacing:.8px;color:var(--ink-soft)}
.nra-planner td{padding:9px 10px;border-bottom:1px solid var(--line)}
.nra-planner td:last-child{width:70px}
.nra-box{display:inline-block;width:18px;height:18px;border:2px solid var(--ink-soft);border-radius:5px}
.nra-note{font-size:13px;color:var(--ink-soft);margin:14px 0 0}
.nra-print{margin-top:14px}
@media print{body *{visibility:hidden}.nra-printarea,.nra-printarea *{visibility:visible}.nra-printarea{position:absolute;left:0;top:0;width:100%;border:none}.nra-print{display:none!important}}
.nra-faq details{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 20px;margin-bottom:10px}
.nra-faq summary{cursor:pointer;font-weight:700;font-size:17px}
.nra-faq p{margin:10px 0 0;font-size:16px}
.nra-sources{margin-top:56px;padding-top:8px;border-top:1px solid var(--line)}
.nra-sources ol{padding-left:22px}
.nra-sources li{font-size:14px;line-height:1.6;color:var(--ink-soft);margin-bottom:10px;scroll-margin-top:84px}
.nra-sources li a{word-break:break-word}
.nra-method{font-size:14px;color:var(--ink-soft);background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin-top:20px;line-height:1.6}
.nra-related{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin:12px 0 0}
.nra-related a{display:block;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px 18px;text-decoration:none;color:var(--ink);font-weight:700;line-height:1.35}
.nra-related a:hover{border-color:var(--peach-strong)}
.nra-end{background:linear-gradient(135deg,var(--espresso) 0%,#6B3A24 100%);color:#fff;border-radius:24px;padding:36px 28px;margin:56px 0 0;text-align:center}
.nra-end h2{font-family:'Playfair Display',serif;color:#fff;margin:0 0 10px;font-size:29px}
.nra-end p{color:rgba(255,255,255,.85);margin:0 auto 20px;max-width:480px;font-size:16px;line-height:1.6}
.nra-legal{font-size:13px;line-height:1.6;color:var(--ink-soft);margin:36px 0 0}
.nra-foot{background:var(--dark,#2A2A2A);color:rgba(255,255,255,.65);padding:36px 24px;margin-top:64px;font-size:14px;line-height:1.7}
.nra-foot-in{max-width:1000px;margin:0 auto;display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between}
.nra-foot a{color:rgba(255,255,255,.85);text-decoration:none;margin-right:18px}
.nra-hub-group{margin:40px 0 0}
.nra-hub-group p.blurb{color:var(--ink-soft);margin:0 0 6px;font-size:16px}
@media(max-width:700px){.nra-fit{grid-template-columns:1fr}.nra-nav-links{display:none}.nra-body p,.nra-body li{font-size:16.5px}}
`;
