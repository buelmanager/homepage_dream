# Hero Layout Types — Diversity Guide

Luxury landing pages MUST use one of the 6 hero types below.
Each page should use a DIFFERENT type — check existing pages before choosing.

---

## Existing Page → Hero Type Map

| Type | Pages Already Using It |
|------|------------------------|
| A: Cinematic Full-Screen | bakery, barbershop, boxing-gym, cocktail-bar, dance-academy, escape-room, nail-salon, rock-climbing, dive-center, golf-club, moto-garage, korean-bbq, ramen-shop, vintage-store, etc. (42 pages) |
| B: Parallax Full-Screen | bonsai-studio, caviar-house, coffee-roastery, glass-blowing, tea-ceremony, watch-atelier, whisky-distillery |
| C: Diagonal Split | alpine-chalet, private-cinema, yacht-charter |
| D: Portraits + Stats | aquarium-lounge, fine-dining, luxury-portrait-studio |
| E: Grid / Pattern Hero | laser-tag-arena, vr-arcade |
| F: Search / Interactive | dog-hotel, glamping-resort |

**Rule: Prefer types C, D, E, F for new pages. Only use A or B if the industry strongly demands it.**

---

## Type A: Cinematic Full-Screen (OVERUSED — avoid unless necessary)

Full-bleed background image with overlay, centered or left-aligned content.

```html
<!-- Structure -->
<section class="hero">
  <div class="hero-bg"></div>          <!-- fixed background image -->
  <div class="hero-overlay"></div>     <!-- dark gradient overlay -->
  <div class="hero-content">          <!-- center/left aligned text + CTA -->
    <div class="hero-eyebrow">...</div>
    <h1 class="hero-title">...</h1>
    <p class="hero-subtitle">...</p>
    <div class="hero-ctas">...</div>
  </div>
  <div class="hero-particles"></div>  <!-- optional floating elements -->
</section>
```

```css
.hero { position: relative; width: 100%; height: 100vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: -5%; background: url(...) center/cover; filter: brightness(0.65); }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(20,15,10,0.75) 0%, rgba(10,8,6,0.4) 100%); }
.hero-content { position: relative; z-index: 2; max-width: 680px; padding: 0 60px; }
```

---

## Type B: Parallax + Ken Burns Full-Screen

Multiple layered background images with mouse-parallax or scroll-driven movement.

```html
<section class="hero">
  <div class="hero-parallax-bg">
    <div class="parallax-layer layer-1"></div>
    <div class="parallax-layer layer-2"></div>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content">...</div>
  <div class="hero-floating">          <!-- floating quote / badge / seal -->
    <div class="float-badge">...</div>
  </div>
</section>
```

```css
.hero-parallax-bg { position: absolute; inset: -10%; }
.parallax-layer { position: absolute; inset: 0; background: url(...) center/cover; will-change: transform; }
.layer-1 { filter: brightness(0.7); }
.layer-2 { mix-blend-mode: overlay; opacity: 0.3; }
```

```js
// Mousemove parallax
document.querySelector('.hero').addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  gsap.to('.layer-1', { x: x * 0.5, y: y * 0.5, duration: 1, ease: 'power2.out' });
  gsap.to('.layer-2', { x: x * 1.2, y: y * 1.0, duration: 1, ease: 'power2.out' });
});
```

---

## Type C: Diagonal / Angled Split

Page split diagonally or at an angle — left side text/content, right side image panel.

```html
<section class="hero">
  <div class="hero-left">             <!-- solid bg or gradient left panel -->
    <div class="hero-content">...</div>
  </div>
  <div class="hero-right">           <!-- full-bleed photo right panel -->
    <div class="hero-img"></div>
    <div class="hero-right-overlay"></div>
  </div>
  <div class="hero-diagonal-line"></div>  <!-- SVG or CSS clip divider -->
</section>
```

```css
.hero { position: relative; width: 100%; height: 100vh; display: flex; overflow: hidden; }
.hero-left { width: 48%; background: var(--bg); display: flex; align-items: center; padding: 0 60px; position: relative; z-index: 2; clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%); }
.hero-right { flex: 1; position: relative; }
.hero-img { position: absolute; inset: 0; background: url(...) center/cover; filter: brightness(0.8); }
```

**Variation**: Use `clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%)` on right panel for reversed angle.

---

## Type D: Portraits + Stats Sidebar

Left content panel with animated stats, right panel with stacked portrait cards.

```html
<section class="hero">
  <div class="hero-content-panel">   <!-- left: headline + stats counters -->
    <div class="hero-eyebrow">...</div>
    <h1 class="hero-title">...</h1>
    <div class="hero-stats">
      <div class="stat-item"><span class="stat-num" data-target="240">0</span><span class="stat-label">...</span></div>
      ...
    </div>
    <div class="hero-cta">...</div>
  </div>
  <div class="hero-portraits">       <!-- right: 3 stacked/overlapping portrait cards -->
    <div class="portrait-card" style="background-image: url(...)"></div>
    <div class="portrait-card" style="background-image: url(...)"></div>
    <div class="portrait-card portrait-label">...</div>
  </div>
</section>
```

```css
.hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; align-items: center; }
.hero-content-panel { padding: 120px 60px 120px 80px; }
.hero-portraits { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 40px; height: 100vh; }
.portrait-card { background-size: cover; background-position: center; border-radius: 4px; }
.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 40px 0; }
.stat-num { font-size: 3rem; font-family: var(--font-serif); }
```

```js
// Counter animation
document.querySelectorAll('.stat-num').forEach(el => {
  const target = +el.dataset.target;
  gsap.from(el, { textContent: 0, duration: 2, ease: 'power2.out',
    snap: { textContent: 1 },
    scrollTrigger: { trigger: el, start: 'top 80%', once: true }
  });
});
```

---

## Type E: Grid / Pattern Background Hero

Animated geometric grid, hexagon pattern, or technical grid as the hero background.

```html
<section class="hero">
  <canvas class="hero-grid-canvas"></canvas>  <!-- animated grid via JS canvas -->
  <div class="hero-overlay"></div>
  <div class="hero-content">...</div>
  <div class="hero-corner-accents">
    <div class="corner tl"></div><div class="corner tr"></div>
    <div class="corner bl"></div><div class="corner br"></div>
  </div>
</section>
```

```css
.hero { position: relative; height: 100vh; display: flex; align-items: center; background: var(--bg); overflow: hidden; }
.hero-grid-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.3; }
.hero-corner-accents .corner { position: absolute; width: 60px; height: 60px; border-color: var(--accent); border-style: solid; }
.corner.tl { top: 30px; left: 30px; border-width: 2px 0 0 2px; }
.corner.tr { top: 30px; right: 30px; border-width: 2px 2px 0 0; }
.corner.bl { bottom: 30px; left: 30px; border-width: 0 0 2px 2px; }
.corner.br { bottom: 30px; right: 30px; border-width: 0 2px 2px 0; }
```

```js
// Canvas grid animation
const canvas = document.querySelector('.hero-grid-canvas');
const ctx = canvas.getContext('2d');
function drawGrid() {
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  const size = 60; ctx.strokeStyle = 'rgba(180,150,90,0.15)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < canvas.width; x += size) {
    for (let y = 0; y < canvas.height; y += size) {
      ctx.strokeRect(x, y, size, size);
    }
  }
}
drawGrid(); window.addEventListener('resize', drawGrid);
```

**Variations**: Hexagon grid, particle network, flowing lines, constellation map.

---

## Type F: Interactive / Search Hero

Hero with an embedded search bar, filter chips, or interactive element.

```html
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">...</div>
    <h1 class="hero-title">...</h1>
    <div class="hero-search-widget">
      <div class="search-field">
        <input type="text" placeholder="Search...">
        <button class="search-btn">...</button>
      </div>
      <div class="search-tags">
        <span class="tag">Option 1</span>
        <span class="tag">Option 2</span>
        <span class="tag">Option 3</span>
      </div>
    </div>
  </div>
</section>
```

```css
.hero-search-widget { background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; margin-top: 32px; max-width: 600px; }
.search-field { display: flex; gap: 0; }
.search-field input { flex: 1; background: transparent; border: none; outline: none; color: var(--ivory); font-size: 1rem; }
.search-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.tag { padding: 6px 14px; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }
.tag:hover { border-color: var(--accent); color: var(--accent); }
```

**Use for**: booking-focused businesses (hotel, resort, clinic, gym membership)

---

## Type G: Scroll-Driven Text Transform (NEW)

Large typographic hero where text size/position is driven by scroll position.

```html
<section class="hero hero-text-driven" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-text-wrap">
    <div class="hero-word word-1">WORD</div>
    <div class="hero-word word-2">ONE</div>
    <div class="hero-tagline">Subtitle line here</div>
    <div class="hero-cta">...</div>
  </div>
  <div class="hero-scroll-hint">↓</div>
</section>
```

```css
.hero-text-driven { min-height: 200vh; }
.hero-text-wrap { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 0 80px; }
.hero-word { font-family: var(--font-serif); font-size: clamp(5rem, 18vw, 18rem); line-height: 0.85; font-weight: 900; text-transform: uppercase; }
```

```js
gsap.to('.word-1', {
  x: '-30vw', scale: 0.4, opacity: 0.3,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '50% top', scrub: 1 }
});
gsap.to('.word-2', {
  x: '30vw', scale: 0.4, opacity: 0.3,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '50% top', scrub: 1 }
});
```

---

## Hero Type Selection Rule

When building a new page, select the type that:
1. Is used LEAST across all existing pages
2. Fits the industry personality:
   - Service/booking businesses → F (Interactive)
   - Visual/artistic businesses → C (Diagonal) or D (Portraits)
   - Technical/modern businesses → E (Grid)
   - Editorial/fashion/luxury fashion → G (Text-driven)
   - Nature/experience businesses → B (Parallax)
   - Only use A if none of the above fit

**Target distribution for NEW pages (20 new pages):**
- Type C (Diagonal): 4 pages
- Type D (Portraits): 4 pages
- Type E (Grid): 3 pages
- Type F (Interactive): 3 pages
- Type G (Text-driven): 3 pages
- Type B (Parallax): 3 pages
