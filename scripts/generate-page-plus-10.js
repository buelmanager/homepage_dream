const fs = require('fs');
const path = require('path');

const BASE_DIR = '/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home';

const PAGES = [
  {
    folder: 'page_01-noodle-lab',
    industry: 'Food and Beverage',
    domain: 'Modern ramen bar',
    title: 'NOODLE LAB | Modern Ramen Bar',
    style: 'Industrial warm ticket-system',
    sections: ['Hero', 'Menu Lab', 'Broth Matrix', 'Counter Live', 'Night Reviews', 'Events', 'Location', 'Reservation'],
    images: {
      hero: 'https://images.pexels.com/photos/33090018/pexels-photo-33090018.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/4354410/pexels-photo-4354410.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildRamen,
  },
  {
    folder: 'page_02-fashion-editorial',
    industry: 'Fashion',
    domain: 'Boutique fashion house',
    title: 'SABLE EDITION | Boutique Fashion House',
    style: 'Editorial magazine grid',
    sections: ['Hero', 'Capsules', 'Runway Frames', 'Lookbook Rail', 'Atelier Notes', 'Fabric Index', 'Delivery', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildFashion,
  },
  {
    folder: 'page_03-eco-travel-atlas',
    industry: 'Travel',
    domain: 'Eco travel studio',
    title: 'ATLAS GREEN | Eco Travel Studio',
    style: 'Map-first route interface',
    sections: ['Hero', 'Philosophy', 'Route Builder', 'Local Stays', 'Impact Dashboard', 'Travel Stories', 'FAQ', 'Plan Trip'],
    images: {
      hero: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildTravel,
  },
  {
    folder: 'page_04-ai-command-center',
    industry: 'Technology',
    domain: 'AI productivity platform',
    title: 'COMMAND LAYER | AI Productivity Suite',
    style: 'Terminal-inspired control UI',
    sections: ['Hero', 'Workflow Cards', 'Command Palette', 'Security', 'Integrations', 'Pricing', 'Case Signals', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/879201/pexels-photo-879201.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildAI,
  },
  {
    folder: 'page_05-breath-yoga-studio',
    industry: 'Wellness',
    domain: 'Yoga and breath studio',
    title: 'BREATHFIELD | Yoga and Breath Studio',
    style: 'Calm organic curves and rituals',
    sections: ['Hero', 'Breath Ritual', 'Class Calendar', 'Teachers', 'Studio View', 'Membership', 'FAQ', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildYoga,
  },
  {
    folder: 'page_06-vinyl-record-archive',
    industry: 'Retail',
    domain: 'Record store and archive',
    title: 'ARC/IVE | Vinyl Record Store',
    style: 'Retro crate-digging storefront',
    sections: ['Hero', 'New Arrivals', 'Genre Crates', 'Listening Booths', 'Services', 'Events', 'Visit', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildVinyl,
  },
  {
    folder: 'page_07-skincare-formula-lab',
    industry: 'Beauty',
    domain: 'Skincare lab brand',
    title: 'FORMULA/01 | Skincare Lab Brand',
    style: 'Clinical cards and formula UI',
    sections: ['Hero', 'Routine Builder', 'Products', 'Ingredient Atlas', 'Clinical Proof', 'Sustainability', 'FAQ', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/10359397/pexels-photo-10359397.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildSkincare,
  },
  {
    folder: 'page_08-architecture-atelier',
    industry: 'Architecture',
    domain: 'Architecture and visualization studio',
    title: 'LINEWORK ATELIER | Architecture Studio',
    style: 'Blueprint-inspired portfolio',
    sections: ['Hero', 'Projects', 'Approach', 'Materials Wall', 'Studio Team', 'Process', 'Awards', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildArchitecture,
  },
  {
    folder: 'page_09-amber-brew-taproom',
    industry: 'Food and Beverage',
    domain: 'Craft brewery taproom',
    title: 'AMBER LANE | Brewery Taproom',
    style: 'Amber chalkboard tap board',
    sections: ['Hero', 'Tap Board', 'Seasonals', 'Taproom Space', 'Brewery Tours', 'Merch', 'Location', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/5848483/pexels-photo-5848483.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildBrewery,
  },
  {
    folder: 'page_10-kids-stem-camp',
    industry: 'Education',
    domain: 'Kids STEM camp',
    title: 'BUILDWAVE | Kids STEM Camp',
    style: 'Playful geometric learning boards',
    sections: ['Hero', 'Tracks', 'Build Gallery', 'Daily Schedule', 'Safety', 'Pricing', 'Parent FAQ', 'Contact'],
    images: {
      hero: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=2200',
      secondary: 'https://images.pexels.com/photos/19359972/pexels-photo-19359972.jpeg?auto=compress&cs=tinysrgb&w=1800',
    },
    build: buildStem,
  },
];

function shell({ title, description, fontLink, css, body, script }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontLink}" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
${body}
${script}
</body>
</html>`;
}

function readyScript(extra = '') {
  return `<script>
window.__PAGE_READY__ = false;
const pre = document.getElementById('preloader');
const complete = () => {
  if (pre) {
    pre.style.opacity = '0';
    setTimeout(() => pre.remove(), 360);
  }
  setTimeout(() => { window.__PAGE_READY__ = true; }, 500);
};
Promise.race([
  new Promise((resolve) => window.addEventListener('load', resolve, { once: true })),
  new Promise((resolve) => setTimeout(resolve, 4200)),
]).then(() => setTimeout(complete, 650));
${extra}
</script>`;
}

function readmeFor(page) {
  return `# ${page.title}

## Overview
A unique single-page homepage template for ${page.domain}.

## Industry
${page.industry}

## Domain
${page.domain}

## Language
English

## Visual Style
${page.style}

## Sections (${page.sections.length})
${page.sections.map((s) => `- ${s}`).join('\n')}

## Image Source
- Free images from Pexels
- Hero: ${page.images.hero}
- Secondary: ${page.images.secondary}

## Notes
- Custom loader per page
- Responsive layout for desktop and mobile
- ` + '`window.__PAGE_READY__`' + ` is set after loader and intro animation
`;
}

function buildRamen(p) {
  const css = `
:root{--bg:#0f0b0b;--fg:#f4ece2;--muted:#c2b3a2;--line:rgba(255,255,255,.12);--a:#ff4b2b;--b:#ffb347}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:'Space Grotesk',sans-serif}
a{text-decoration:none;color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 20px}
#preloader{position:fixed;inset:0;background:#120d0d;display:grid;place-items:center;z-index:1000;transition:.35s}
.steam{width:120px;height:120px;position:relative}.steam i{position:absolute;bottom:18px;left:50%;width:16px;height:60px;margin-left:-8px;border-radius:20px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.35));animation:s 1.2s infinite}.steam i:nth-child(2){left:35%;animation-delay:.2s}.steam i:nth-child(3){left:65%;animation-delay:.4s}
.steam b{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:90px;height:32px;border:2px solid var(--line);border-radius:0 0 60px 60px}
@keyframes s{0%{transform:translateY(10px);opacity:0}50%{opacity:.6}100%{transform:translateY(-18px);opacity:0}}
.hero{min-height:100vh;display:grid;align-items:end;background:linear-gradient(180deg,rgba(0,0,0,.2),var(--bg)),url('${p.images.hero}') center/cover;padding:120px 0 70px}
.hero h1{font-family:'Bebas Neue',sans-serif;letter-spacing:.06em;font-size:clamp(54px,9vw,126px);line-height:.9;margin:0}
.hero p{max-width:560px;color:var(--muted)}
.ribbon{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.pill{padding:7px 12px;border:1px solid var(--line);border-radius:999px;font-size:12px}
.grid{display:grid;gap:14px;grid-template-columns:1.2fr .8fr;margin-top:22px}.panel{border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.03);padding:16px}
.ticket{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.k{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.mono{font-family:'IBM Plex Mono',monospace}.section{padding:84px 0;border-top:1px solid var(--line)}
.section h2{font-family:'Bebas Neue';font-size:48px;letter-spacing:.05em;margin:0 0 8px}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}.card{border:1px solid var(--line);border-radius:14px;padding:14px;background:rgba(255,255,255,.03)}
.map{min-height:230px;border-radius:14px;background:linear-gradient(140deg,rgba(255,75,43,.2),rgba(255,179,71,.14)),url('${p.images.secondary}') center/cover;border:1px solid var(--line)}
.form{display:grid;gap:10px}.form input,.form textarea{background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:12px;padding:10px;color:var(--fg)}
.btn{border:0;border-radius:999px;padding:10px 16px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700;cursor:pointer}
@media (max-width:920px){.grid,.cards{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><div class="wrap"><h1>NOODLE LAB</h1><p>Late-night ramen bar with a ticket-first ordering system and rotating broth drops.</p><div class="ribbon"><span class="pill">Ticket Menu</span><span class="pill">Open till 02:00</span><span class="pill">Counter Focused</span></div><div class="grid"><div class="panel"><div class="ticket"><div><div class="k">Base</div><strong>Shoyu Tonkotsu</strong></div><div><div class="k">Heat</div><strong>I II III IV</strong></div><div><div class="k">Queue</div><strong class="mono">#042</strong></div></div></div><div class="panel mono">Tonight drop: Black garlic shio at 21:00</div></div></div></section>
<section class="section"><div class="wrap"><h2>MENU LAB</h2><div class="cards"><article class="card"><strong>Lab Classic</strong><p>Thick broth, spring noodles, slow egg.</p></article><article class="card"><strong>Citrus Smoke</strong><p>Yuzu salt broth with charred chicken.</p></article><article class="card"><strong>Miso Ember</strong><p>Red miso depth with chili butter.</p></article></div></div></section>
<section class="section"><div class="wrap"><h2>BROTH MATRIX</h2><div class="cards"><article class="card mono">Richness 78%</article><article class="card mono">Spice 42%</article><article class="card mono">Aroma 88%</article></div></div></section>
<section class="section"><div class="wrap"><h2>COUNTER LIVE</h2><p>High turnover seating with chef-side views and direct pickup flow.</p></div></section>
<section class="section"><div class="wrap"><h2>NIGHT REVIEWS</h2><div class="cards"><article class="card">"Focused menu, serious flavor."</article><article class="card">"Best solo dinner spot after midnight."</article><article class="card">"The drop menu is always worth waiting for."</article></div></div></section>
<section class="section"><div class="wrap"><h2>EVENTS</h2><p class="mono">Thu Tasting Flight / Sat Guest Broth Night / Sun Noodle Workshop</p></div></section>
<section class="section"><div class="wrap"><h2>LOCATION</h2><div class="map"></div></div></section>
<section class="section"><div class="wrap"><h2>RESERVATION</h2><form class="form" onsubmit="return false"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Preferred time"></textarea><button class="btn">Request table</button></form></div></section>
`;

  return shell({
    title: p.title,
    description: 'Ramen landing page with ticket-style menu system.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&family=Space+Grotesk:wght@400;500;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildFashion(p) {
  const css = `
:root{--bg:#f5f2ec;--ink:#1d1a18;--muted:#5e5b57;--line:#d3ccc1;--a:#2f2b36;--b:#bca7d6}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:'Manrope',sans-serif}a{text-decoration:none;color:inherit}
#preloader{position:fixed;inset:0;background:#f5f1ea;display:grid;place-items:center;z-index:1000;transition:.35s}
.spool{width:92px;height:92px;border:2px solid var(--line);border-radius:50%;position:relative}.spool:after{content:'';position:absolute;left:-35px;right:-35px;top:50%;height:2px;background:linear-gradient(90deg,transparent,#1d1a18,transparent);animation:t 1s linear infinite}
@keyframes t{to{transform:translateX(24px)}}
nav{position:sticky;top:0;background:rgba(245,242,236,.86);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);z-index:10}
.bar{max-width:1200px;margin:0 auto;padding:12px 20px;display:flex;justify-content:space-between;align-items:center}.brand{font-family:'Playfair Display';font-size:28px}
.hero{max-width:1200px;margin:0 auto;padding:38px 20px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.cover{min-height:520px;background:url('${p.images.hero}') center/cover;border-radius:16px}
.editorial{border:1px solid var(--line);border-radius:16px;padding:22px;background:linear-gradient(180deg,#fff,rgba(255,255,255,.62))}
.editorial h1{font-family:'Playfair Display';font-size:clamp(42px,6vw,86px);line-height:.9;margin:0 0 12px}
.section{max-width:1200px;margin:0 auto;padding:72px 20px;border-top:1px solid var(--line)}
.section h2{font-family:'Playfair Display';font-size:38px;margin:0 0 10px}
.mag{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.tile{min-height:210px;border:1px solid var(--line);background:#fff;border-radius:12px;padding:12px;display:flex;align-items:flex-end}
.rail{display:grid;grid-template-columns:repeat(4,minmax(180px,1fr));gap:10px}.rail article{background:#fff;border:1px solid var(--line);padding:14px;border-radius:12px}
.swatch{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.swatch div{height:84px;border-radius:10px;border:1px solid var(--line)}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:12px}.contact input,.contact textarea{width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;background:#fff}
.btn{margin-top:8px;padding:10px 15px;border:0;border-radius:999px;background:var(--a);color:#fff}
@media (max-width:920px){.hero{grid-template-columns:1fr}.mag,.rail,.swatch{grid-template-columns:1fr 1fr}.contact{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<nav><div class="bar"><div class="brand">Sable Edition</div><div>Capsules · Atelier · Contact</div></div></nav>
<section class="hero"><div class="cover"></div><article class="editorial"><h1>Editorial
Capsule
Culture</h1><p>A boutique fashion house built around limited capsule windows and atelier-grade finishing.</p><p><strong>Current drop:</strong> Night Silk 01</p></article></section>
<section class="section"><h2>CAPSULES</h2><div class="mag"><div class="tile">Drop 01</div><div class="tile">Drop 02</div><div class="tile">Drop 03</div><div class="tile">Drop 04</div><div class="tile">Drop 05</div></div></section>
<section class="section"><h2>RUNWAY FRAMES</h2><div class="rail"><article>Frame 01: long coat + mineral knit</article><article>Frame 02: low contrast tailoring</article><article>Frame 03: satin drape and hard shoulder</article><article>Frame 04: relaxed trouser architecture</article></div></section>
<section class="section"><h2>LOOKBOOK RAIL</h2><p>Scroll-ready visual storytelling with magazine pacing instead of product cards.</p></section>
<section class="section"><h2>ATELIER NOTES</h2><p>Edge finishing, cut balance, movement lines, and care instructions are surfaced as design notes.</p></section>
<section class="section"><h2>FABRIC INDEX</h2><div class="swatch"><div style="background:#ece7df"></div><div style="background:#d8ccd4"></div><div style="background:#c6d7d2"></div><div style="background:#f0eee8"></div></div></section>
<section class="section"><h2>DELIVERY</h2><p>Small-run fulfillment with transparent production windows and concise updates.</p></section>
<section class="section"><h2>CONTACT</h2><div class="contact"><div><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Styling request"></textarea><button class="btn">Send request</button></div><div style="min-height:260px;background:url('${p.images.secondary}') center/cover;border-radius:12px;border:1px solid var(--line)"></div></div></section>
`;

  return shell({
    title: p.title,
    description: 'Boutique fashion editorial homepage concept.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Playfair+Display:wght@500;700;800&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildTravel(p) {
  const css = `
:root{--bg:#09150f;--fg:#eaf6ee;--muted:#a5c5b0;--line:rgba(234,246,238,.16);--a:#3bd47f;--b:#7ec7ff}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(900px 500px at 10% 5%,rgba(59,212,127,.12),transparent),var(--bg);color:var(--fg);font-family:'Inter',sans-serif}
#preloader{position:fixed;inset:0;background:#0a1811;display:grid;place-items:center;z-index:1000;transition:.35s}
.compass{width:100px;height:100px;border:2px solid var(--line);border-radius:50%;position:relative}.needle{position:absolute;left:50%;top:50%;width:3px;height:48px;background:linear-gradient(var(--a),var(--b));transform-origin:50% 80%;animation:n 1.2s ease-in-out infinite}
@keyframes n{0%{transform:translate(-50%,-80%) rotate(-25deg)}50%{transform:translate(-50%,-80%) rotate(20deg)}100%{transform:translate(-50%,-80%) rotate(-25deg)}}
.hero{min-height:84vh;padding:110px 22px 60px;max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.1fr .9fr;gap:14px}
.photo{border:1px solid var(--line);border-radius:16px;background:url('${p.images.hero}') center/cover}
.pitch{border:1px solid var(--line);border-radius:16px;padding:20px;background:rgba(255,255,255,.02)}
.pitch h1{font-family:'Fraunces',serif;font-size:clamp(42px,6vw,82px);line-height:.92;margin:0 0 14px}
.sec{max-width:1180px;margin:0 auto;padding:70px 22px;border-top:1px solid var(--line)}
.sec h2{font-family:'Fraunces',serif;font-size:36px;margin:0 0 10px}
.route{display:grid;grid-template-columns:.8fr 1.2fr;gap:12px}.panel{border:1px solid var(--line);border-radius:14px;padding:14px;background:rgba(255,255,255,.03)}
.map{min-height:240px;border-radius:14px;border:1px solid var(--line);background:linear-gradient(160deg,rgba(59,212,127,.22),rgba(126,199,255,.16)),url('${p.images.secondary}') center/cover}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.metrics article{border:1px solid var(--line);padding:12px;border-radius:12px}
.faq{display:grid;gap:8px}.faq details{border:1px solid var(--line);border-radius:10px;padding:10px;background:rgba(255,255,255,.03)}
.form{display:grid;grid-template-columns:1fr 1fr;gap:10px}.form input,.form textarea{padding:10px;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--fg)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700}
@media(max-width:920px){.hero,.route{grid-template-columns:1fr}.metrics{grid-template-columns:1fr 1fr}.form{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><div class="pitch"><h1>Atlas Green</h1><p>Slow routes, local hosts, and low-impact travel logic built as a living map.</p><p><strong>Trip profile:</strong> coast + train + small stay</p></div><div class="photo"></div></section>
<section class="sec"><h2>PHILOSOPHY</h2><p>Travel design that starts with community benefit and carbon-aware movement.</p></section>
<section class="sec"><h2>ROUTE BUILDER</h2><div class="route"><div class="panel"><p>Pace: Slow</p><p>Terrain: Coast</p><p>Stay type: Local guesthouse</p></div><div class="map"></div></div></section>
<section class="sec"><h2>LOCAL STAYS</h2><p>Independent guesthouses and eco lodges with transparent host details.</p></section>
<section class="sec"><h2>IMPACT DASHBOARD</h2><div class="metrics"><article><strong>82%</strong><br>Transit first</article><article><strong>74%</strong><br>Local partners</article><article><strong>6.2</strong><br>Avg days</article><article><strong>36</strong><br>Seasonal hosts</article></div></section>
<section class="sec"><h2>TRAVEL STORIES</h2><p>Field journals from routes tested in low-season and local-led contexts.</p></section>
<section class="sec"><h2>FAQ</h2><div class="faq"><details open><summary>Can I customize routes?</summary><p>Yes. Every route can be adjusted for pace and transport choices.</p></details><details><summary>Do you support group trips?</summary><p>Yes, with capped group sizes and local guide pairing.</p></details></div></section>
<section class="sec"><h2>PLAN TRIP</h2><form class="form" onsubmit="return false"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Destination ideas"></textarea><button class="btn">Build my route</button></form></section>
`;

  return shell({
    title: p.title,
    description: 'Eco travel homepage with route-planning UI.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildAI(p) {
  const css = `
:root{--bg:#05070d;--fg:#e9f1ff;--muted:#98a9cd;--line:rgba(233,241,255,.13);--a:#4a7dff;--b:#00d9ff}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(1000px 600px at 80% -10%,rgba(74,125,255,.16),transparent),var(--bg);color:var(--fg);font-family:'Manrope',sans-serif}
#preloader{position:fixed;inset:0;background:#060911;display:grid;place-items:center;z-index:1000;transition:.35s}
.boot{width:170px;height:90px;border:1px solid var(--line);border-radius:14px;position:relative;overflow:hidden}.boot:before{content:'';position:absolute;left:-60px;right:-60px;top:18px;height:2px;background:linear-gradient(90deg,transparent,var(--b),transparent);animation:scan 1.1s linear infinite}
@keyframes scan{to{transform:translateY(42px)}}
.hero{max-width:1180px;margin:0 auto;padding:110px 22px 64px;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.console{border:1px solid var(--line);border-radius:14px;padding:16px;background:rgba(255,255,255,.02)}
.console h1{font-family:'Sora',sans-serif;font-size:clamp(40px,5vw,70px);margin:0 0 12px;line-height:.95}
.term{font-family:'IBM Plex Mono',monospace;border:1px solid var(--line);border-radius:12px;background:#0b0f1a;padding:12px;min-height:220px}
.photo{border-radius:14px;border:1px solid var(--line);background:url('${p.images.hero}') center/cover}
.sec{max-width:1180px;margin:0 auto;padding:68px 22px;border-top:1px solid var(--line)}
.sec h2{font-family:'Sora',sans-serif;margin:0 0 10px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.card{border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.02);padding:12px}
.chips{display:flex;flex-wrap:wrap;gap:8px}.chip{padding:8px 10px;border:1px solid var(--line);border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:12px}
.price{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.price article{border:1px solid var(--line);border-radius:12px;padding:12px}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:10px}.contact input,.contact textarea{width:100%;padding:10px;background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:10px;color:var(--fg)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700}
@media(max-width:940px){.hero,.contact{grid-template-columns:1fr}.grid,.price{grid-template-columns:1fr}}
`;

  const extra = `
const prompt = document.getElementById('cmdInput');
const out = document.getElementById('cmdOut');
if (prompt && out) {
  prompt.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      out.textContent = '> ' + prompt.value + '\\nResult: command queued';
      prompt.value = '';
    }
  });
}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><div class="console"><h1>Command Layer</h1><p>Operator-first AI workspace for briefs, summaries, and release workflows.</p><div class="term"><div>> system boot...</div><div>> workspace ready</div><div id="cmdOut">> type command below</div><input id="cmdInput" style="margin-top:10px;width:100%;background:#0b0f1a;border:1px solid var(--line);color:var(--fg);padding:8px;border-radius:8px" placeholder="new brief"/></div></div><div class="photo"></div></section>
<section class="sec"><h2>WORKFLOW CARDS</h2><div class="grid"><article class="card"><strong>Brief to tasks</strong><p>Turn high-level prompts into checklist blocks.</p></article><article class="card"><strong>Meeting summary</strong><p>Extract decisions and owners in one pass.</p></article><article class="card"><strong>Release gate</strong><p>Run preflight checks before deployment.</p></article></div></section>
<section class="sec"><h2>COMMAND PALETTE</h2><p>Keyboard-first interaction model with transparent output previews.</p></section>
<section class="sec"><h2>SECURITY</h2><div class="grid"><article class="card">Role-based access</article><article class="card">Audit trails</article><article class="card">Data minimization</article></div></section>
<section class="sec"><h2>INTEGRATIONS</h2><div class="chips"><span class="chip">Slack</span><span class="chip">Notion</span><span class="chip">GitHub</span><span class="chip">Figma</span><span class="chip">Linear</span><span class="chip">Calendar</span></div></section>
<section class="sec"><h2>PRICING</h2><div class="price"><article><strong>Starter</strong><p>$19</p></article><article><strong>Studio</strong><p>$49</p></article><article><strong>Scale</strong><p>Custom</p></article></div></section>
<section class="sec"><h2>CASE SIGNALS</h2><p>Teams report shorter planning loops and cleaner handoff notes.</p></section>
<section class="sec"><h2>CONTACT</h2><div class="contact"><div><input placeholder="Name"><input placeholder="Work email"><textarea rows="4" placeholder="Use case"></textarea><button class="btn">Book demo</button></div><div style="min-height:260px;border:1px solid var(--line);border-radius:12px;background:url('${p.images.secondary}') center/cover"></div></div></section>
`;

  return shell({
    title: p.title,
    description: 'AI productivity landing page with command-oriented interface.',
    fontLink: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Manrope:wght@400;600;700&family=Sora:wght@500;700&display=swap',
    css,
    body,
    script: readyScript(extra),
  });
}

function buildYoga(p) {
  const css = `
:root{--bg:#f4efe5;--fg:#1e2b26;--muted:#5d7268;--line:rgba(30,43,38,.12);--a:#2f8f6d;--b:#9ac8ff}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(900px 400px at 20% 0%,rgba(47,143,109,.14),transparent),var(--bg);color:var(--fg);font-family:'Outfit',sans-serif}
#preloader{position:fixed;inset:0;background:#f6f1e8;display:grid;place-items:center;z-index:1000;transition:.35s}
.ink{width:100px;height:100px;border-radius:50%;border:2px solid var(--line);position:relative}.ink:after{content:'';position:absolute;left:50%;top:14px;width:14px;height:14px;border-radius:0 50% 50% 50%;transform:translateX(-50%) rotate(45deg);background:var(--a);animation:d 1.2s infinite}
@keyframes d{0%{transform:translateX(-50%) translateY(0) rotate(45deg)}60%{transform:translateX(-50%) translateY(45px) rotate(45deg)}100%{transform:translateX(-50%) translateY(0) rotate(45deg)}}
.hero{max-width:1180px;margin:0 auto;padding:110px 22px 60px;display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:center}
.copy h1{font-family:'Cormorant Garamond',serif;font-size:clamp(50px,7vw,90px);line-height:.88;margin:0}
.photo{min-height:420px;border-radius:26px;border:1px solid var(--line);background:url('${p.images.hero}') center/cover}
.sec{max-width:1180px;margin:0 auto;padding:70px 22px;border-top:1px solid var(--line)}
.sec h2{font-family:'Cormorant Garamond';font-size:44px;margin:0 0 8px}
.breath{display:grid;grid-template-columns:.9fr 1.1fr;gap:12px}.orb{width:220px;height:220px;border-radius:50%;margin:auto;background:radial-gradient(circle at 30% 30%,rgba(47,143,109,.32),rgba(47,143,109,.08) 50%,rgba(255,255,255,.5));animation:b 7s ease-in-out infinite;border:1px solid var(--line)}
@keyframes b{0%{transform:scale(.92)}50%{transform:scale(1.06)}100%{transform:scale(.92)}}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.card{border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.62);padding:12px}
.gallery{display:grid;grid-template-columns:1.2fr .8fr;gap:10px}.g{min-height:200px;border:1px solid var(--line);border-radius:16px;background-size:cover;background-position:center}
.form{display:grid;grid-template-columns:1fr 1fr;gap:10px}.form input,.form textarea{padding:10px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.7)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700}
@media(max-width:920px){.hero,.breath,.gallery,.form{grid-template-columns:1fr}.cards{grid-template-columns:1fr 1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><div class="copy"><h1>Breathfield</h1><p>Calm sequences for breath, movement, and recovery in a softly lit studio.</p></div><div class="photo"></div></section>
<section class="sec"><h2>BREATH RITUAL</h2><div class="breath"><div class="orb"></div><div><p>Inhale for 4, hold for 2, exhale for 6. A one-minute reset ritual.</p><p style="color:var(--muted)">Use this as a visual pacing guide before class.</p></div></div></section>
<section class="sec"><h2>CLASS CALENDAR</h2><div class="cards"><article class="card">Slow Flow<br><small>45 min</small></article><article class="card">Core + Breath<br><small>50 min</small></article><article class="card">Restorative<br><small>60 min</small></article><article class="card">Power Practice<br><small>45 min</small></article></div></section>
<section class="sec"><h2>TEACHERS</h2><p>Mara (Restorative), Jun (Vinyasa), Sana (Breathwork)</p></section>
<section class="sec"><h2>STUDIO VIEW</h2><div class="gallery"><div class="g" style="background-image:url('${p.images.secondary}')"></div><div class="g" style="background:linear-gradient(140deg,rgba(47,143,109,.22),rgba(154,200,255,.22))"></div></div></section>
<section class="sec"><h2>MEMBERSHIP</h2><div class="cards"><article class="card">Starter<br><small>4 classes / month</small></article><article class="card">Studio<br><small>Unlimited classes</small></article><article class="card">Private<br><small>1:1 sessions</small></article><article class="card">Retreat<br><small>Weekend intensive</small></article></div></section>
<section class="sec"><h2>FAQ</h2><p>Walk-ins accepted when capacity allows. Mat rental available onsite.</p></section>
<section class="sec"><h2>CONTACT</h2><form class="form" onsubmit="return false"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Class interest"></textarea><button class="btn">Join studio</button></form></section>
`;

  return shell({
    title: p.title,
    description: 'Yoga and breathwork homepage with calm ritual-driven UI.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;700&family=Outfit:wght@400;500;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildVinyl(p) {
  const css = `
:root{--bg:#11100d;--fg:#f3ece2;--muted:#baa98e;--line:rgba(243,236,226,.16);--a:#ff7a2f;--b:#6fe2ff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:'Work Sans',sans-serif}
#preloader{position:fixed;inset:0;background:#14120e;display:grid;place-items:center;z-index:1000;transition:.35s}
.vinyl{width:110px;height:110px;border-radius:50%;border:2px solid var(--line);position:relative;animation:r 1.5s linear infinite}.vinyl:before{content:'';position:absolute;inset:22px;border:1px solid var(--line);border-radius:50%}.vinyl:after{content:'';position:absolute;inset:44px;border-radius:50%;background:var(--a)}@keyframes r{to{transform:rotate(360deg)}}
.hero{max-width:1180px;margin:0 auto;padding:108px 22px 62px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hero .image{border-radius:16px;border:1px solid var(--line);background:url('${p.images.hero}') center/cover;min-height:420px}
.hero .copy{border:1px solid var(--line);border-radius:16px;padding:16px;background:rgba(255,255,255,.03)}
.hero h1{font-family:'Oswald',sans-serif;font-size:clamp(44px,6vw,84px);line-height:.9;margin:0 0 12px}
.sec{max-width:1180px;margin:0 auto;padding:68px 22px;border-top:1px solid var(--line)}.sec h2{font-family:'Oswald';font-size:40px;margin:0 0 8px}
.arr{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.arr article{border:1px solid var(--line);border-radius:12px;padding:12px;background:rgba(255,255,255,.03)}
.tags{display:flex;gap:8px;flex-wrap:wrap}.tags span{padding:8px 10px;border:1px solid var(--line);border-radius:999px;font-family:'Space Mono',monospace;font-size:12px}
.booths{display:grid;grid-template-columns:1fr 1fr;gap:10px}.booths .box{min-height:220px;border-radius:12px;border:1px solid var(--line)}
.form input,.form textarea{width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--fg);margin-bottom:8px}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700}
@media(max-width:920px){.hero,.booths{grid-template-columns:1fr}.arr{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><div class="copy"><h1>ARC/IVE</h1><p>Independent vinyl store with curated crates, listening booths, and record care service.</p><div class="tags"><span>Jazz</span><span>House</span><span>Ambient</span><span>Rock</span></div></div><div class="image"></div></section>
<section class="sec"><h2>NEW ARRIVALS</h2><div class="arr"><article>Blue Hour Sessions</article><article>Basement Pulse</article><article>Slow Light</article></div></section>
<section class="sec"><h2>GENRE CRATES</h2><p>Filter by genre and decade to browse like physical crate digging.</p></section>
<section class="sec"><h2>LISTENING BOOTHS</h2><div class="booths"><div class="box" style="background:url('${p.images.secondary}') center/cover"></div><div class="box" style="background:linear-gradient(145deg,rgba(255,122,47,.2),rgba(111,226,255,.14))"></div></div></section>
<section class="sec"><h2>SERVICES</h2><div class="arr"><article>Ultrasonic cleaning</article><article>Record grading</article><article>Trade-in valuation</article></div></section>
<section class="sec"><h2>EVENTS</h2><p>Listening night, label spotlight, and weekend selector sessions.</p></section>
<section class="sec"><h2>VISIT</h2><p class="mono">Tue-Sun 12:00-22:00 · 12 Archive Street</p></section>
<section class="sec"><h2>CONTACT</h2><form class="form" onsubmit="return false"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Record request"></textarea><button class="btn">Send request</button></form></section>
`;

  return shell({
    title: p.title,
    description: 'Retro record-store landing page with crate filtering concept.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildSkincare(p) {
  const css = `
:root{--bg:#f4f7fc;--fg:#102039;--muted:#5d6d87;--line:#d7e0ee;--a:#2d6fff;--b:#22d4b7}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:'Inter',sans-serif}
#preloader{position:fixed;inset:0;background:#f8fbff;display:grid;place-items:center;z-index:1000;transition:.35s}
.drop{width:22px;height:22px;border-radius:0 50% 50% 50%;transform:rotate(45deg);background:linear-gradient(var(--a),var(--b));animation:p 1.2s ease-in-out infinite}@keyframes p{0%{transform:rotate(45deg) translateY(0)}50%{transform:rotate(45deg) translateY(18px)}100%{transform:rotate(45deg) translateY(0)}}
.hero{max-width:1180px;margin:0 auto;padding:100px 22px 58px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hero .left{border:1px solid var(--line);border-radius:16px;padding:16px;background:#fff}.hero h1{font-family:'Unbounded';font-size:clamp(36px,5vw,62px);line-height:1.02;margin:0 0 10px}
.hero .right{border:1px solid var(--line);border-radius:16px;background:url('${p.images.hero}') center/cover;min-height:420px}
.sec{max-width:1180px;margin:0 auto;padding:66px 22px;border-top:1px solid var(--line)}.sec h2{font-family:'Unbounded';font-size:28px;margin:0 0 10px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.box{border:1px solid var(--line);border-radius:12px;background:#fff;padding:12px}
.atlas{display:grid;grid-template-columns:1fr 1fr;gap:10px}.chips{display:flex;flex-wrap:wrap;gap:8px}.chips button{border:1px solid var(--line);border-radius:999px;background:#fff;padding:8px 10px;cursor:pointer}
.note{border:1px solid var(--line);border-radius:12px;background:#fff;padding:12px}
.form{display:grid;grid-template-columns:1fr 1fr;gap:10px}.form input,.form textarea{padding:10px;border:1px solid var(--line);border-radius:10px;background:#fff}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700;color:#07111f}
@media(max-width:920px){.hero,.atlas,.form{grid-template-columns:1fr}.grid{grid-template-columns:1fr}}
`;

  const extra = `
const note = document.getElementById('note');
document.querySelectorAll('[data-note]').forEach(function(btn){
  btn.addEventListener('click', function(){
    if (note) note.textContent = btn.getAttribute('data-note');
  });
});
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><article class="left"><h1>Formula / 01</h1><p>Clinical visual language with easy routines and ingredient-first communication.</p></article><div class="right"></div></section>
<section class="sec"><h2>ROUTINE BUILDER</h2><div class="grid"><article class="box">AM: Cleanser + Serum + SPF</article><article class="box">PM: Cleanser + Active + Cream</article><article class="box">Recovery: Mist + Barrier Cream</article></div></section>
<section class="sec"><h2>PRODUCTS</h2><div class="grid"><article class="box">Cleanser 01</article><article class="box">Serum 02</article><article class="box">Moisture 03</article></div></section>
<section class="sec"><h2>INGREDIENT ATLAS</h2><div class="atlas"><div class="chips"><button data-note="Niacinamide supports tone balance.">Niacinamide</button><button data-note="Ceramides support barrier recovery.">Ceramides</button><button data-note="Panthenol helps calm dry skin.">Panthenol</button><button data-note="Squalane adds lightweight moisture.">Squalane</button></div><article class="note" id="note">Select an ingredient to read the lab note.</article></div></section>
<section class="sec"><h2>CLINICAL PROOF</h2><div class="grid"><article class="box">Hydration +29%</article><article class="box">Texture smoothness +18%</article><article class="box">User comfort 92%</article></div></section>
<section class="sec"><h2>SUSTAINABILITY</h2><p>Refill-ready packaging and material transparency by lot.</p></section>
<section class="sec"><h2>FAQ</h2><p>Patch testing is recommended for first-time active routines.</p></section>
<section class="sec"><h2>CONTACT</h2><form class="form" onsubmit="return false"><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Skin concern"></textarea><button class="btn">Get routine</button></form></section>
`;

  return shell({
    title: p.title,
    description: 'Skincare brand homepage with ingredient-driven UI.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Unbounded:wght@500;700&display=swap',
    css,
    body,
    script: readyScript(extra),
  });
}

function buildArchitecture(p) {
  const css = `
:root{--bg:#0a0c11;--fg:#e9eefb;--muted:#9fabca;--line:rgba(233,238,251,.14);--a:#c7f9cc;--b:#ffd166}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:'IBM Plex Sans',sans-serif}
#preloader{position:fixed;inset:0;background:#0b0e16;display:grid;place-items:center;z-index:1000;transition:.35s}
.gridloader{width:150px;height:90px;border:1px solid var(--line);background:linear-gradient(var(--line) 1px,transparent 1px) 0 0/16px 16px,linear-gradient(90deg,var(--line) 1px,transparent 1px) 0 0/16px 16px;position:relative}.gridloader:after{content:'';position:absolute;left:0;right:0;top:12px;height:2px;background:linear-gradient(90deg,transparent,var(--b),transparent);animation:l 1.2s linear infinite}@keyframes l{to{transform:translateY(54px)}}
.hero{max-width:1220px;margin:0 auto;padding:104px 22px 62px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hero .copy{border:1px solid var(--line);border-radius:14px;padding:16px;background:rgba(255,255,255,.02)}.hero h1{font-family:'Montserrat';font-size:clamp(42px,6vw,80px);line-height:.9;margin:0 0 12px;text-transform:uppercase}
.hero .img{border:1px solid var(--line);border-radius:14px;min-height:420px;background:url('${p.images.hero}') center/cover}
.sec{max-width:1220px;margin:0 auto;padding:66px 22px;border-top:1px solid var(--line)}.sec h2{font-family:'Montserrat';font-size:32px;margin:0 0 10px;text-transform:uppercase}
.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.projects article{border:1px solid var(--line);border-radius:12px;overflow:hidden}
.projects .ph{height:150px;background:linear-gradient(140deg,rgba(199,249,204,.18),rgba(255,209,102,.12))}
.materials{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.materials article{border:1px solid var(--line);border-radius:12px;padding:12px;background:rgba(255,255,255,.02)}
.process{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.process div{border:1px solid var(--line);padding:12px;border-radius:10px}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:10px}.contact input,.contact textarea{width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.02);color:var(--fg)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700;color:#0b0e16}
@media(max-width:920px){.hero,.contact{grid-template-columns:1fr}.projects,.materials,.process{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><article class="copy"><h1>Linework Atelier</h1><p>Architecture portfolio with blueprint rhythm and material-first storytelling.</p></article><div class="img"></div></section>
<section class="sec"><h2>PROJECTS</h2><div class="projects"><article><div class="ph"></div><p style="padding:10px">Civic Lobby</p></article><article><div class="ph"></div><p style="padding:10px">Micro Hotel</p></article><article><div class="ph"></div><p style="padding:10px">Gallery House</p></article></div></section>
<section class="sec"><h2>APPROACH</h2><p>Spatial logic, daylight behavior, and material continuity are treated as one system.</p></section>
<section class="sec"><h2>MATERIALS WALL</h2><div class="materials"><article>Brushed concrete</article><article>Smoked oak</article><article>Anodized aluminum</article></div></section>
<section class="sec"><h2>STUDIO TEAM</h2><p>Architecture, visualization, and material research under one production flow.</p></section>
<section class="sec"><h2>PROCESS</h2><div class="process"><div>Brief</div><div>Concept</div><div>Development</div><div>Delivery</div></div></section>
<section class="sec"><h2>AWARDS</h2><p>Regional design awards for adaptive interior and civic transformation projects.</p></section>
<section class="sec"><h2>CONTACT</h2><form class="contact" onsubmit="return false"><div><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Project scope"></textarea><button class="btn">Start project</button></div><div style="min-height:260px;border:1px solid var(--line);border-radius:12px;background:url('${p.images.secondary}') center/cover"></div></form></section>
`;

  return shell({
    title: p.title,
    description: 'Architecture studio homepage with blueprint-inspired interface.',
    fontLink: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Montserrat:wght@500;700;800&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildBrewery(p) {
  const css = `
:root{--bg:#130c07;--fg:#fff2df;--muted:#c6af93;--line:rgba(255,242,223,.16);--a:#ffb703;--b:#fb5607}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(900px 500px at 10% -10%,rgba(255,183,3,.16),transparent),var(--bg);color:var(--fg);font-family:'Inter',sans-serif}
#preloader{position:fixed;inset:0;background:#1a1009;display:grid;place-items:center;z-index:1000;transition:.35s}
.pour{width:120px;height:86px;position:relative}.pour:before{content:'';position:absolute;left:10px;top:6px;width:60px;height:12px;border-radius:10px;border:1px solid var(--line)}.pour:after{content:'';position:absolute;right:14px;bottom:0;width:34px;height:62px;border-radius:10px;border:2px solid var(--line);box-shadow:inset 0 -36px 0 rgba(255,183,3,.7);animation:f 1.4s ease-in-out infinite}@keyframes f{0%,100%{box-shadow:inset 0 -14px 0 rgba(255,183,3,.65)}50%{box-shadow:inset 0 -48px 0 rgba(255,183,3,.92)}}
.hero{max-width:1180px;margin:0 auto;padding:106px 22px 60px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.copy{border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.03);padding:16px}.copy h1{font-family:'Archivo Black';font-size:clamp(42px,6vw,74px);line-height:.9;margin:0 0 12px;text-transform:uppercase}
.image{border:1px solid var(--line);border-radius:14px;min-height:420px;background:url('${p.images.hero}') center/cover}
.sec{max-width:1180px;margin:0 auto;padding:66px 22px;border-top:1px solid var(--line)}.sec h2{font-family:'Archivo Black';font-size:32px;margin:0 0 10px;text-transform:uppercase}
.taps{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.tap{border:1px solid var(--line);border-radius:12px;padding:12px;background:rgba(255,255,255,.03)}
.board{font-family:'Space Mono',monospace;background:#0f0a06;border:1px dashed var(--line);border-radius:12px;padding:12px}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.cards article{border:1px solid var(--line);border-radius:12px;padding:12px;background:rgba(255,255,255,.03)}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:10px}.contact input,.contact textarea{width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.03);color:var(--fg)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700;color:#2d1605}
@media(max-width:920px){.hero,.contact{grid-template-columns:1fr}.taps,.cards{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><article class="copy"><h1>Amber Lane</h1><p>Craft taproom with rotating pours, brewery tours, and a warm industrial atmosphere.</p></article><div class="image"></div></section>
<section class="sec"><h2>TAP BOARD</h2><div class="taps"><article class="tap"><strong>Cinder Pale</strong><p>ABV 5.2% · Citrus pine finish</p></article><article class="tap"><strong>Night Porter</strong><p>ABV 7.0% · Cocoa roast body</p></article></div></section>
<section class="sec"><h2>SEASONALS</h2><div class="board">Citrus IPA / Cherry Sour / Smoked Lager</div></section>
<section class="sec"><h2>TAPROOM SPACE</h2><div style="min-height:250px;border-radius:12px;border:1px solid var(--line);background:url('${p.images.secondary}') center/cover"></div></section>
<section class="sec"><h2>BREWERY TOURS</h2><div class="cards"><article>Brew floor walkthrough</article><article>Tasting flight</article><article>Pairing session</article></div></section>
<section class="sec"><h2>MERCH</h2><div class="cards"><article>Glass set</article><article>Cap</article><article>Poster</article></div></section>
<section class="sec"><h2>LOCATION</h2><p>12 Grain District, Warehouse 4</p></section>
<section class="sec"><h2>CONTACT</h2><form class="contact" onsubmit="return false"><div><input placeholder="Name"><input placeholder="Email"><textarea rows="4" placeholder="Tour request"></textarea><button class="btn">Book table</button></div><div class="board">Open Tue-Sun 15:00-01:00</div></form></section>
`;

  return shell({
    title: p.title,
    description: 'Craft brewery homepage with tap-board visual style.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function buildStem(p) {
  const css = `
:root{--bg:#06132e;--fg:#f4f9ff;--muted:#b8cbe8;--line:rgba(244,249,255,.18);--a:#00d1ff;--b:#ff4d6d}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(900px 500px at 0% 0%,rgba(0,209,255,.2),transparent),var(--bg);color:var(--fg);font-family:'Plus Jakarta Sans',sans-serif}
#preloader{position:fixed;inset:0;background:#081834;display:grid;place-items:center;z-index:1000;transition:.35s}
.spark{width:90px;height:90px;position:relative}.spark i{position:absolute;width:14px;height:14px;border-radius:4px;background:linear-gradient(var(--a),var(--b));transform:rotate(45deg);animation:k 1.1s ease-in-out infinite}.spark i:nth-child(1){left:20px;top:30px}.spark i:nth-child(2){left:45px;top:15px;animation-delay:.18s}.spark i:nth-child(3){left:52px;top:48px;animation-delay:.3s}@keyframes k{0%,100%{transform:rotate(45deg) scale(.8)}50%{transform:rotate(45deg) scale(1.25)}}
.hero{max-width:1180px;margin:0 auto;padding:106px 22px 62px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.copy{border:1px solid var(--line);border-radius:18px;padding:16px;background:rgba(255,255,255,.03)}.copy h1{font-family:'Bungee';font-size:clamp(34px,5vw,60px);line-height:1.02;margin:0 0 12px}
.image{border:1px solid var(--line);border-radius:18px;min-height:380px;background:url('${p.images.hero}') center/cover}
.sec{max-width:1180px;margin:0 auto;padding:66px 22px;border-top:1px solid var(--line)}.sec h2{font-family:'Bungee';font-size:30px;margin:0 0 10px}
.tracks{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.track{border:1px solid var(--line);border-radius:14px;padding:12px;background:linear-gradient(145deg,rgba(0,209,255,.12),rgba(255,77,109,.10))}
.gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.gallery article{border:1px solid var(--line);border-radius:12px;min-height:140px;background:rgba(255,255,255,.03);display:grid;place-items:center}
.schedule{display:grid;gap:8px}.schedule div{border:1px solid var(--line);border-radius:10px;padding:10px;background:rgba(255,255,255,.03)}
.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.pricing article{border:1px solid var(--line);border-radius:12px;padding:12px}
.form{display:grid;grid-template-columns:1fr 1fr;gap:10px}.form input,.form textarea{padding:10px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.03);color:var(--fg)}
.btn{padding:10px 16px;border:0;border-radius:999px;background:linear-gradient(120deg,var(--a),var(--b));font-weight:700;color:#0a1020}
@media(max-width:920px){.hero,.form{grid-template-columns:1fr}.tracks,.gallery,.pricing{grid-template-columns:1fr}}
`;

  const body = `
<div id="preloader"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.82">Loading</div></div>
<section class="hero"><article class="copy"><h1>Buildwave Camp</h1><p>Hands-on STEM camp with robotics, game design, and prototype demo days.</p></article><div class="image"></div></section>
<section class="sec"><h2>TRACKS</h2><div class="tracks"><article class="track">Robotics Lab</article><article class="track">Game Studio</article><article class="track">AI Maker</article><article class="track">Circuit Lab</article></div></section>
<section class="sec"><h2>BUILD GALLERY</h2><div class="gallery"><article>Rover</article><article>Mini Arcade</article><article>Plant Sensor</article></div></section>
<section class="sec"><h2>DAILY SCHEDULE</h2><div class="schedule"><div>09:00 Arrival + brief</div><div>10:00 Build sprint</div><div>12:00 Lunch break</div><div>13:00 Test + iterate</div><div>15:30 Demo + pickup</div></div></section>
<section class="sec"><h2>SAFETY</h2><p>Low student-instructor ratio, supervised tools, and verified pickup procedures.</p></section>
<section class="sec"><h2>PRICING</h2><div class="pricing"><article>Starter Week<br>$210</article><article>Full Camp<br>$390</article><article>Extended Care<br>$90</article></div></section>
<section class="sec"><h2>PARENT FAQ</h2><p>All equipment is provided. Students keep final project kits.</p></section>
<section class="sec"><h2>CONTACT</h2><form class="form" onsubmit="return false"><input placeholder="Parent name"><input placeholder="Email"><textarea rows="4" placeholder="Student age and interests"></textarea><button class="btn">Reserve seat</button></form></section>
`;

  return shell({
    title: p.title,
    description: 'Kids STEM camp homepage with playful modular interface.',
    fontLink: 'https://fonts.googleapis.com/css2?family=Bungee&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap',
    css,
    body,
    script: readyScript(),
  });
}

function generate() {
  const urls = [];

  for (const page of PAGES) {
    const folder = path.join(BASE_DIR, page.folder);
    fs.mkdirSync(path.join(folder, 'images'), { recursive: true });

    const html = page.build(page);
    fs.writeFileSync(path.join(folder, 'index.html'), html);
    fs.writeFileSync(path.join(folder, 'readme.md'), readmeFor(page));

    urls.push(page.images.hero, page.images.secondary);
  }

  fs.writeFileSync(path.join(__dirname, 'page-plus-10-image-urls.txt'), urls.join('\n') + '\n');
}

generate();
