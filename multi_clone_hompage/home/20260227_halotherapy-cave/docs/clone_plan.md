# Clone Plan — HALITE Salt Cave Therapy

## Project Summary

**Template Slug:** `20260227_halotherapy-cave`
**Build Date:** 2026-02-27
**Status:** Complete

## Creative Brief

### Brand Identity
- **Brand Name:** HALITE (named after the mineral form of sodium chloride — rock salt)
- **Industry:** Himalayan salt cave halotherapy / wellness / respiratory therapy
- **Target Audience:** Adults with respiratory conditions, wellness-conscious consumers, couples, families with children with eczema/asthma, athletes
- **Brand Tone:** Mineral healing, crystalline clarity, quiet luxury, clinical credibility

### Design Decisions

#### Color Palette P7 — Deep Teal Rationale
The deep teal palette was chosen to evoke the mineral quality of Himalayan salt caves:
- Deep teal/dark bg (#0A1818) mirrors the shadowed interior of a cave
- Teal accent (#4DCFB0) references the mint-green luminescence of Himalayan crystal under amber light
- Ivory (#DCEFEC) provides the crystalline brightness of salt surfaces
- The palette avoids typical spa pink/beige — positioning HALITE as clinically credible rather than merely aesthetic

#### Typography F6 — DM Serif Display + Karla Rationale
- DM Serif Display: the italic variant provides an elegance appropriate to luxury wellness while remaining legible at large sizes
- Karla at 300 weight: clinical lightness, legible at small sizes for technical content
- The pairing creates tension between heritage (serif) and precision (geometric sans)

#### Hero Layout Type B — Parallax + Ken Burns
Selected over Type A (cinematic fullscreen) to create depth and movement specific to the cave experience. The dual-layer parallax suggests looking into the cave from outside, with the secondary layer creating a crystalline depth. Ken Burns animation maintains visual interest for returning visitors.

### Site Architecture

```
index.html          (Homepage)
├── about.html      (Halotherapy Science & Heritage)
├── collection.html (Sessions & Pricing)
├── process.html    (The 5-Step Experience)
└── contact.html    (Booking & Location)
```

### Content Strategy

All content originates from the brand brief. The halotherapy science, clinical references (Boczkowski 1843, Soviet speleotherapy research, clinical journals) are based on publicly documented history of halotherapy.

**Key messaging pillars:**
1. Ancient wisdom + clinical science
2. 84 trace minerals (the defining differentiator of Himalayan salt)
3. 4.5 micrometers (the therapeutic particle size — a clinical specificity that builds trust)
4. 98% client relief rate (brand claim)
5. The cave as sanctuary — not just therapy but transformation

## Technical Architecture

### CSS Architecture
- Custom properties only (no Tailwind, no utility classes)
- Grid-first layout (CSS Grid for philosophy, collection, stats)
- No CSS `opacity: 0` on content elements
- Custom scrollbar via `::-webkit-scrollbar`
- Mobile-first breakpoints: 1024px, 768px

### JavaScript Architecture
- GSAP 3.12.2 + ScrollTrigger
- Swiper 11 (testimonials)
- SplitText polyfill (inline, no CDN dependency)
- Vanilla JS only — no jQuery, no React

### Animation System (A2 — Whisper)
All scroll-triggered animations follow the same parameters:
```js
gsap.from(target, {
  immediateRender: false,  // CRITICAL: always at top level
  scrollTrigger: { trigger: section, start: 'top 78%', once: true },
  y: 14,
  opacity: 0,
  duration: 1.5,
  stagger: 0.06,
  ease: 'power1.out'
});
```

### Scroll Indicator Implementation
- Displayed in TWO places as per GSAP rules:
  1. After preloader completes (callback)
  2. `setTimeout(4000)` as fallback
- Hidden when user scrolls past 100px

## Section-by-Section Build Notes

### index.html

**Preloader**
- Branded with HALITE logotype
- Progress bar increments randomly (simulates asset loading)
- Transitions out with GSAP fade, then calls `animateHero()`

**Hero Type B**
- Two `.hero-layer` divs positioned `inset: -10%` for parallax room
- Layer 1: `animation: kenBurns 18s ease-in-out infinite alternate`
- Layer 2: `mix-blend-mode: luminosity`, `opacity: 0.35`
- Mousemove: GSAP `to()` with different multipliers per layer

**Stats Counter**
- `data-target` attribute stores numeric target
- `data-prefix` / `data-suffix` for formatted display
- GSAP fromTo on `{ val: 0 }` object — updates DOM in `onUpdate`

**Philosophy Grid**
- `display: grid; grid-template-columns: repeat(3, 1fr)` — explicit grid
- NOT flexbox (per GSAP rules for this template type)

**Collection Grid**
- `overflow: visible` on the grid container
- `aspect-ratio: 4/3` on cards

**Footer**
- `background: var(--bg)` — never hardcoded hex

### about.html

Structured around three content pillars:
1. Origin story (Wieliczka, Boczkowski)
2. Historical timeline (1843–2026)
3. Minerals grid + clinical evidence

### collection.html

Structured around:
1. Full-width session feature cards (alternating image sides)
2. 4-column pricing table
3. 3-column course packages
4. FAQ accordion (vanilla JS, no library)

### process.html

The centrepiece is the 5-step full-viewport journey — each step occupies a full viewport height with a split image/content layout. Steps alternate direction using `direction: rtl` on even-indexed steps.

### contact.html

Complex booking form with:
- Session picker cards (interactive selection with JS)
- Multi-section form (personal / session / scheduling / health)
- GSAP form success animation (form fades out, success block fades in)

## Quality Checklist

- [x] No `opacity: 0` in CSS on content elements
- [x] All `gsap.from()` calls have `immediateRender: false` at top level
- [x] Scroll indicator shown in two places (preloader callback + setTimeout)
- [x] Philosophy section uses CSS `display: grid`
- [x] Collection grid has `overflow: visible`
- [x] Footer uses `background: var(--bg)` — not hardcoded
- [x] SplitText polyfill embedded before Swiper
- [x] Mobile responsive at 1024px and 768px
- [x] Custom scrollbar implemented
- [x] English language only
- [x] All 5 pages complete
- [x] meta.json present and valid
- [x] thumbnail.webp reference in meta.json
