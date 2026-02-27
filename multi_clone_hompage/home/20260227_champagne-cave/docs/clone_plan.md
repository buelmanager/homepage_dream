# Clone Plan — MAISON ÉCLAT Champagne Cave

## Project Brief

**Target:** Prestige champagne cave luxury website
**Hero Type:** G — Scroll-Driven Text Transform
**Palette:** P4 Deep Burgundy
**Font Pair:** F10 (EB Garamond + Nunito)
**Animation:** A2 Whisper
**Pages:** 5 (index, about, collection, process, contact)

---

## Design Inspiration Sources

- **Primary reference:** High-end French champagne maison websites (Krug, Salon, Selosse aesthetic)
- **Architecture:** Multi-page luxury estate site with sticky scroll hero
- **Tone:** Intimate French elegance, underground cave mystique, effervescent exclusivity

---

## Page Architecture

### index.html — Main Landing (1,350+ lines)
**Sections (in order):**
1. Preloader — monogram animation with expanding line
2. Scroll Indicator — fixed position, auto-shows post-preloader
3. Navbar — transparent → solid on scroll
4. Hero (Type G) — 200vh sticky scroll container, two large words split and transform
5. Stats Strip — 4 brand metrics (Founded, Hectares, Cuvées, Score)
6. Philosophy — 3-column grid (Terroir Sacré, Temps Infini, Main Humaine)
7. Collection — 3-column cuvée cards with hover lift
8. Atelier (Cave) — split: image left, content right with feature list
9. Process (Méthode) — 6 numbered steps with connecting border
10. Heritage — split: text left, timeline right with watermark text
11. Testimonials — Swiper carousel with press logos
12. Reservation Form — 2-column grid form
13. Footer — 4-column grid with brand, nav, experiences, contact

### about.html — Maison Story (700+ lines)
**Sections:**
1. Navbar
2. Page Hero — large title with decorative watermark
3. Founding Story — grid: text left, styled image right with frame
4. Winemaker Profile — grid: styled image left, content right with blockquote
5. Terroir — 3 cards + terroir map/stats
6. Awards — vertical score list
7. Footer

### collection.html — Cuvées (680+ lines)
**Sections:**
1. Navbar
2. Page Hero
3. Filter Bar — category filter buttons (JS filtering)
4. Featured Prestige — large 2-col layout with tasting notes, score badge
5. Full Collection Grid — 6 cuvée cards (3-col)
6. Food Pairings — 4-col pairing cards
7. Footer

### process.html — Méthode (600+ lines)
**Sections:**
1. Navbar
2. Page Hero
3. Overview Intro — centred text
4. 6 Detailed Steps — alternating image/content layout
5. Timeline Bar — horizontal segmented duration display
6. Philosophy Quote — centred with decorative quotemark watermark
7. Footer

### contact.html — Visites & Booking (620+ lines)
**Sections:**
1. Navbar
2. Page Hero
3. 6 Experience Cards — with prices, includes list, "Most Popular" badge
4. Booking Form — comprehensive 10-field form
5. Info Cards — Location, Hours, Contact (3-col grid)
6. Map Placeholder + Directions (3 transport modes)
7. Footer

---

## Scroll Hero Implementation (Type G)

### HTML Structure
```html
<section class="hero hero-text-driven" id="hero">
  <!-- Background: sticky below text layer -->
  <div class="hero-bg" style="background-image: url('images/hero-1.webp')"></div>
  <!-- Text: sticky OVER background, margin-top: -100vh to overlay -->
  <div class="hero-text-wrap">
    <div class="hero-word word-1">MAISON</div>
    <div class="hero-word word-2">ÉCLAT</div>
    <div class="hero-tagline">The Art of Effervescence</div>
    <div class="hero-cta"><a href="collection.html" class="btn-primary">Explore Cuvées</a></div>
  </div>
  <div class="hero-scroll-hint">↓ Scroll</div>
</section>
```

### CSS Key Rules
```css
.hero.hero-text-driven { min-height: 200vh; position: relative; }
.hero-bg { position: sticky; top: 0; height: 100vh; }
.hero-text-wrap { position: sticky; top: 0; height: 100vh; margin-top: -100vh; z-index: 2; padding: 0 80px; display: flex; flex-direction: column; justify-content: center; }
.hero-word { font-size: clamp(4rem, 15vw, 15rem); font-family: var(--font-serif); font-weight: 600; }
```

### GSAP Scroll Animation
```js
// word-1 scrolls LEFT and shrinks
gsap.to('.word-1', { x: '-25vw', scale: 0.4, opacity: 0.2,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '50% top', scrub: 1.2 }});
// word-2 scrolls RIGHT and shrinks
gsap.to('.word-2', { x: '25vw', scale: 0.4, opacity: 0.2,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '50% top', scrub: 1.2 }});
// tagline fades
gsap.to('.hero-tagline', { opacity: 0, y: -30,
  scrollTrigger: { trigger: '.hero', start: '20% top', end: '50% top', scrub: 1 }});
```

---

## GSAP Rules Applied

- `immediateRender: false` at top level — ✅ confirmed in all reveal animations
- No `opacity: 0` in CSS on content elements — ✅ confirmed
- Scroll indicator activated twice: preloader callback + setTimeout(4000) — ✅ confirmed
- SplitText inline polyfill — ✅ included before Swiper script
- A2 Whisper params: `duration: gsap.utils.random(1.4, 1.6), y: 14, stagger: 0.06, ease: 'power1.out'` — ✅ applied

---

## Layout Rules Applied

| Rule | Status |
|------|--------|
| Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)` | ✅ |
| Collection grid: `overflow: visible` | ✅ |
| Footer: `background: var(--bg)` only | ✅ |
| Custom scrollbar | ✅ |
| Mobile breakpoints: 480/768/1024px | ✅ |
| English-only content | ✅ |
| Original brand identity | ✅ |

---

## Originality Notes

All content is fully original:
- Brand name MAISON ÉCLAT is fictional
- All cuvée names are original (Lumière, Nuit Étoilée, Rêve Rosé, Aurore, Les Craies, Rosée du Matin)
- All tasting notes written originally
- Historical narrative is entirely fictional (Édouard Éclat, 1892, Caroline Lefèvre)
- Press quotes are fictional
- No content copied from any existing champagne brand
