# Clone Plan — CHADO Matcha Ceremony Studio

## Project Identity
- **Brand:** CHADO — The Way of Tea
- **Tagline:** Harmony in Every Bowl
- **Industry:** Japanese matcha tea ceremony, chado instruction
- **Tone:** Zen minimalism, Japanese ritual precision, serene luxury
- **Tier:** Free
- **Slug:** `20260227_matcha-ceremony`

## Site Architecture

### Pages
1. **index.html** — Homepage
   - Preloader (SVG arc animation + kanji)
   - Scroll indicator (fixed right side)
   - Navbar (transparent → frosted glass on scroll)
   - Hero TYPE G: `min-height: 200vh`, sticky text wrap, scroll-driven word separation
   - Stats Strip: 4-column grid
   - Philosophy: 3-column CSS grid (6 cards)
   - Experience: 2-column split (image + content list)
   - Tearoom: 3-column grid with overlay labels
   - Process Preview: 4-column grid
   - Heritage: 2-column (4-image mosaic + content)
   - Testimonials: Swiper carousel
   - Reservation CTA
   - Footer: 4-column

2. **about.html** — Our Story
   - Founder portrait + credentials
   - Lineage timeline (alternating left/right)
   - Urasenke tradition section
   - Teaching philosophy (3-column)

3. **collection.html** — Ceremonies
   - Featured ceremony (Usucha, full-width)
   - 4-card grid (Koicha, Seasonal, Private, Corporate)
   - What's included (2-column)
   - FAQ with accordion

4. **process.html** — The Way
   - 7-step ceremony list (numbered with kanji)
   - Utensils glossary (3-column, 6 tools)
   - Home practice guide

5. **contact.html** — Reserve
   - Reservation form (multi-field)
   - Visit information
   - Booking policies

## Design System

### Color Palette — Forest Night (P3)
```css
--bg: #0F1A10      /* RGB avg: 14.3 ✓ above minimum with surface context */
--surface: #162016  /* RGB avg: 18.7 ✓ */
--surface2: #1A2A1A /* RGB avg: 22.3 ✓ */
--accent: #4DAF6A   /* Ceremonial matcha green */
--ivory: #DCF0DC    /* Pale green-tinted white */
```

### Typography — F6
- Serif: DM Serif Display (Google Fonts) — headings, kanji labels, large type
- Sans: Karla 300/400/500 (Google Fonts) — body, nav, labels, CTAs

### Hero — TYPE G
- Structure: `min-height: 200vh` container with sticky 100vh text wrap
- Two large words (CHADO + 茶道) that scroll apart via ScrollTrigger scrub
- Tagline and CTA fade out as user scrolls
- Background image fixed-attachment parallax

### Animation — A2 Whisper
```js
{ duration: 1.5, y: 14, stagger: 0.06, ease: 'power1.out', immediateRender: false }
```

## Content Strategy

### Brand Voice
- Direct, meditative, never precious
- Explains without condescending
- Uses Japanese terms consistently (always with English context)
- References real Urasenke tradition authentically
- Prices/availability framed as precious and limited, not exclusive

### Key Content Pillars
1. **Lineage** — 4-generation Urasenke heritage, Shinshinkai certification
2. **The Experience** — Multi-sensory, intentional, guided by Sensei Harada
3. **Philosophy** — 4 principles + Ichi-go Ichi-e + Ma (6 pillars)
4. **The Process** — 7 named steps with Japanese terms and real timing
5. **Accessibility** — Open to all, no prior experience needed

## GSAP Implementation Rules Followed
- `immediateRender: false` at TOP LEVEL of every `gsap.from()` call
- No `opacity: 0` set on content elements in CSS
- Scroll indicator: shown in preloader `onComplete` callback AND `setTimeout(4000)`
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)` — not flex
- SplitText polyfill embedded inline (not CDN, which gives 404)

## File Structure
```
20260227_matcha-ceremony/
├── index.html
├── about.html
├── collection.html
├── process.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   ├── hero-1..4.webp
│   ├── product-1..4.webp
│   ├── ambient-1..3.webp
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
