export const SG_ARTICLE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap');
:root{--cream:#FCF6EF;--blush:#F9E8E3;--petal:#FFFAF6;--plum:#5A2A4C;--plum-soft:#7C4B6D;--plum-tint:#EBDCE6;--sage:#8FAE8F;--sage-deep:#5E8262;--sage-tint:#E4EEE1;--rose:#E8928E;--rose-deep:#B8504E;--rose-tint:#FBE1DD;--champagne:#E9C98F;--ink:#3A2235;--ink-soft:#6B5265;--line:#EFDDD6}
.sga{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--ink);min-height:100vh}
.sga a{color:var(--plum)}
.sga-nav{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;background:rgba(252,246,239,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}
.sga-brand{display:flex;align-items:center;gap:10px;text-decoration:none}
.sga-brand span{font-family:'Fraunces',serif;font-weight:700;font-size:20px;color:var(--plum)}
.sga-nav-links{display:flex;gap:22px;align-items:center}
.sga-nav-links a{font-size:14px;font-weight:600;color:var(--ink-soft);text-decoration:none}
.sga-nav-links a:hover{color:var(--plum)}
.sga .sga-btn{display:inline-flex;align-items:center;gap:8px;background:var(--plum);color:#fff;font-weight:700;font-size:15px;padding:11px 22px;border-radius:50px;text-decoration:none}
.sga .sga-btn:hover{background:var(--plum-soft)}
.sga .sga-btn-light{background:#fff;color:var(--plum)}
.sga-wrap{max-width:760px;margin:0 auto;padding:0 20px}
.sga-crumbs{font-size:13px;color:var(--ink-soft);padding:28px 0 8px}
.sga-crumbs a{color:var(--ink-soft)}
.sga-kicker{display:inline-block;background:var(--plum-tint);color:var(--plum);font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;padding:5px 12px;border-radius:50px;margin-bottom:16px}
.sga h1{font-family:'Fraunces',serif;font-weight:700;font-size:clamp(32px,5.4vw,50px);line-height:1.1;letter-spacing:-.8px;margin:0 0 16px}
.sga-dek{font-size:19px;line-height:1.6;color:var(--ink-soft);margin:0 0 20px}
.sga-quick{background:#fff;border:2px solid var(--plum-tint);border-left:6px solid var(--plum);border-radius:16px;padding:16px 20px;margin:0 0 18px}
.sga-quick strong{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--rose-deep)}
.sga-quick p{margin:6px 0 0;font-size:17px;line-height:1.65}
.sga-meta{font-size:13px;color:var(--ink-soft);padding-bottom:24px;border-bottom:1px solid var(--line)}
.sga-hero{margin:28px 0 8px}
.sga-hero img{width:100%;height:auto;border-radius:20px;border:1px solid var(--line);display:block}
.sga-toc{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 22px;margin:28px 0}
.sga-toc strong{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--rose-deep)}
.sga-toc ol{margin:10px 0 0;padding-left:20px;font-size:15px;line-height:1.9}
.sga-body h2{font-family:'Fraunces',serif;font-weight:700;font-size:clamp(25px,3.4vw,32px);line-height:1.2;letter-spacing:-.4px;margin:52px 0 14px;scroll-margin-top:84px}
.sga-body h3{font-family:'Fraunces',serif;font-weight:600;font-size:20px;margin:28px 0 8px}
.sga-body p,.sga-body li{font-size:17px;line-height:1.75}
.sga-body p{margin:0 0 16px}
.sga-body ul,.sga-body ol{padding-left:22px;margin:0 0 18px}
.sga-body li{margin-bottom:8px}
.sga-body sup a{font-size:12px;font-weight:700;text-decoration:none;padding:0 1px}
.sga-callout{border-radius:16px;padding:18px 22px;margin:8px 0 20px;border:1px solid var(--line)}
.sga-callout strong{display:block;font-family:'Fraunces',serif;font-size:17px;margin-bottom:6px}
.sga-callout p{margin:0;font-size:16px}
.sga-callout.safety{background:var(--rose-tint);border-color:#F1BDB8}
.sga-callout.disclosure{background:var(--sage-tint);border-color:#C9DBC5}
.sga-callout.note{background:var(--blush)}
.sga-tablewrap{overflow-x:auto;margin:8px 0 24px;border:1px solid var(--line);border-radius:16px;background:#fff}
.sga-table{border-collapse:collapse;width:100%;min-width:640px;font-size:14px;line-height:1.55}
.sga-table th{background:var(--plum);color:#fff;text-align:left;padding:12px 14px;font-family:'Fraunces',serif;font-size:15px}
.sga-table td{padding:12px 14px;border-top:1px solid var(--line);vertical-align:top}
.sga-table td:first-child{font-weight:800;background:var(--petal);min-width:110px}
.sga-cap{font-size:13px;color:var(--ink-soft);padding:10px 14px;border-top:1px solid var(--line)}
.sga-chart{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px 22px;margin:8px 0 24px}
.sga-chart h4{font-family:'Fraunces',serif;font-size:18px;margin:0 0 4px}
.sga-chart-sub{font-size:13px;color:var(--ink-soft);margin:0 0 16px}
.sga-bar{display:grid;grid-template-columns:minmax(120px,38%) 1fr;gap:12px;align-items:center;margin-bottom:10px;font-size:14px}
.sga-bar-track{background:var(--blush);border-radius:8px;height:26px;position:relative;overflow:hidden}
.sga-bar-fill{height:100%;border-radius:8px;background:var(--plum);display:flex;align-items:center;justify-content:flex-end;padding-right:8px;color:#fff;font-weight:800;font-size:13px;min-width:46px}
.sga-bar-fill.rose{background:var(--rose-deep)}
.sga-bar-fill.sage{background:var(--sage-deep)}
.sga-chart-src{font-size:12px;color:var(--ink-soft);margin:14px 0 0;line-height:1.5}
.sga-calc{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;margin:8px 0 24px}
.sga-calc label{font-weight:700;font-size:15px;display:block;margin-bottom:8px}
.sga-calc input{font:inherit;font-size:18px;padding:11px 14px;border:2px solid var(--plum-tint);border-radius:12px;width:100%;max-width:260px;background:var(--petal);color:var(--ink)}
.sga-calc input:focus{outline:none;border-color:var(--plum)}
.sga-calc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;margin-top:18px}
.sga-calc-cell{background:var(--blush);border-radius:14px;padding:14px}
.sga-calc-cell b{display:block;font-family:'Fraunces',serif;font-size:22px;color:var(--plum)}
.sga-calc-cell span{font-size:13px;color:var(--ink-soft)}
.sga-calc-note{font-size:13px;color:var(--ink-soft);margin:14px 0 0}
.sga-stores{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.sga-soon{display:inline-flex;align-items:center;font-weight:700;font-size:14px;padding:10px 18px;border-radius:50px;border:2px dashed var(--plum-soft);color:var(--plum-soft);cursor:not-allowed;white-space:nowrap}
.sga-soon.on-dark{border-color:rgba(255,255,255,.55);color:rgba(255,255,255,.85)}
.sga-inline-cta{display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap;background:var(--plum-tint);border-radius:18px;padding:20px 24px;margin:4px 0 8px}
.sga-inline-cta strong{font-family:'Fraunces',serif;font-size:18px;display:block;margin-bottom:4px}
.sga-inline-cta p{margin:0;font-size:15px;line-height:1.6;max-width:460px}
.sga-fit{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:8px 0 8px}
.sga-fit-col{border-radius:16px;padding:18px 20px;border:1px solid var(--line);background:#fff}
.sga-fit-col.good{background:var(--sage-tint);border-color:#C9DBC5}
.sga-fit-col.not{background:var(--blush)}
.sga-fit-col strong{font-family:'Fraunces',serif;font-size:17px;display:block;margin-bottom:8px}
.sga-fit-col ul{margin:0;padding-left:18px}
.sga-fit-col li{font-size:15px;line-height:1.6;margin-bottom:6px}
.sga-sobcalc{background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;margin:8px 0 24px}
.sga-sobcalc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.sga-sobcalc label{font-weight:700;font-size:14px;display:block;margin-bottom:6px}
.sga-sobcalc input{font:inherit;font-size:17px;padding:11px 14px;border:2px solid var(--plum-tint);border-radius:12px;width:100%;background:var(--petal);color:var(--ink)}
.sga-sobcalc input:focus{outline:none;border-color:var(--plum)}
.sga-big{text-align:center;background:linear-gradient(135deg,var(--plum) 0%,#8B3A6E 100%);color:#fff;border-radius:20px;padding:26px 16px;margin-top:20px}
.sga-big b{display:block;font-family:'Fraunces',serif;font-size:clamp(54px,12vw,88px);line-height:1;letter-spacing:-2px}
.sga-big span{font-size:15px;opacity:.85}
.sga-next{background:var(--sage-tint);border-radius:14px;padding:14px 18px;margin-top:14px;font-size:15px;line-height:1.55}
.sga-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.sga-chip{font-size:13px;font-weight:700;padding:6px 12px;border-radius:50px;background:var(--plum-tint);color:var(--plum)}
.sga-chip.todo{background:#fff;border:1px dashed var(--ink-soft);color:var(--ink-soft)}
.sga-err{color:var(--rose-deep);font-weight:700;margin-top:12px}
.sga-cal-ctl{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-end;margin-bottom:16px}
.sga-cal-ctl>div{min-width:170px;flex:1}
.sga-cal-ctl select,.sga-cal-ctl input{font:inherit;font-size:16px;padding:10px 12px;border:2px solid var(--plum-tint);border-radius:12px;width:100%;background:var(--petal);color:var(--ink)}
.sga-cal-ctl label{font-weight:700;font-size:14px;display:block;margin-bottom:6px}
.sga-calprint{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px}
.sga-calprint h3{margin:0 0 4px;font-family:'Fraunces',serif;font-size:22px}
.sga-calprint p.sub{margin:0 0 14px;font-size:14px;color:var(--ink-soft)}
.sga-calgrid{display:grid;gap:6px}
.sga-calcell{border:1.5px solid var(--plum-tint);border-radius:10px;padding:6px 4px;min-height:58px;text-align:center;break-inside:avoid;display:flex;flex-direction:column;justify-content:space-between}
.sga-calcell b{font-family:'Fraunces',serif;font-size:15px;color:var(--plum)}
.sga-calcell span{font-size:10px;color:var(--ink-soft)}
.sga-calcell i{display:block;width:16px;height:16px;border:1.5px solid var(--plum-soft);border-radius:50%;margin:2px auto 0}
.sga-printbtn{margin-top:14px;font:inherit;font-weight:700;font-size:15px;background:var(--plum);color:#fff;border:none;border-radius:50px;padding:11px 24px;cursor:pointer}
@media print{body *{visibility:hidden}.sga-calprint,.sga-calprint *{visibility:visible}.sga-calprint{position:absolute;left:0;top:0;width:100%;border:none}.sga-printbtn{display:none!important}}
.sga-shots{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin:28px 0 12px}
.sga-shot{margin:0;width:240px;max-width:60vw}
.sga-shot img{border-radius:26px;border:1px solid var(--line);box-shadow:0 12px 32px rgba(90,42,76,.14);display:block}
.sga-shot figcaption{font-size:13px;line-height:1.5;color:var(--ink-soft);margin-top:10px;text-align:center}
.sga-faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px 20px;margin-bottom:10px}
.sga-faq summary{cursor:pointer;font-family:'Fraunces',serif;font-weight:600;font-size:18px}
.sga-faq p{margin:10px 0 0;font-size:16px}
.sga-sources{margin-top:56px;padding-top:8px;border-top:1px solid var(--line)}
.sga-sources ol{padding-left:22px}
.sga-sources li{font-size:14px;line-height:1.6;color:var(--ink-soft);margin-bottom:10px;scroll-margin-top:84px}
.sga-sources li a{word-break:break-word}
.sga-method{font-size:14px;color:var(--ink-soft);background:var(--petal);border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin-top:20px;line-height:1.6}
.sga-related{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin:12px 0 0}
.sga-related a{display:block;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px;text-decoration:none;color:var(--ink);font-family:'Fraunces',serif;font-weight:600;line-height:1.35}
.sga-related a:hover{border-color:var(--plum)}
.sga-cta{background:linear-gradient(135deg,var(--plum) 0%,#8B3A6E 100%);color:#fff;border-radius:24px;padding:36px 28px;margin:56px 0 0;text-align:center}
.sga-cta h2{font-family:'Fraunces',serif;color:#fff;margin:0 0 10px;font-size:30px}
.sga-cta p{color:rgba(255,255,255,.82);margin:0 auto 22px;max-width:460px;font-size:16px;line-height:1.6}
.sga-foot{background:var(--ink);color:rgba(255,255,255,.6);padding:36px 24px;margin-top:72px;font-size:14px;line-height:1.7}
.sga-foot-in{max-width:1000px;margin:0 auto;display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between}
.sga-foot a{color:rgba(255,255,255,.8);text-decoration:none;margin-right:18px}
.sga-foot a:hover{color:#fff}
@media(max-width:700px){.sga-fit{grid-template-columns:1fr}.sga-nav-links{display:none}.sga-body p,.sga-body li{font-size:16.5px}.sga-bar{grid-template-columns:1fr}}
`;
