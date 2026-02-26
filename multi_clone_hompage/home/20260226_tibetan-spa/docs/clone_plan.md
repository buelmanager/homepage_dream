# Clone Plan — MANDALA Tibetan Healing Sanctuary

## Concept Brief

**Brand:** MANDALA
**Tagline:** Ancient Healing. Elevated Living.
**Category:** Luxury Wellness / Spa / Retreat
**Tier:** PRO ($49)
**Pages:** 5 (multi-page)

---

## Design Direction

### Mood Board Reference

- Tibetan monastery interior photography
- Thangka silk painting palette (saffron, indigo, copper)
- High-altitude landscape imagery (Himalayan mist, stone, light)
- Tibetan Buddhist iconography (mandala patterns, prayer wheels, lotus)

### Colour Palette

| Token | Hex | Notes |
|-------|-----|-------|
| Background | `#1C1510` | Warm deep brown — avg 21.7, safe above threshold 15 |
| Surface | `#261C14` | Slightly lighter for section contrast |
| Accent | `#D4A020` | Saffron gold — primary brand colour |
| Accent 2 | `#C08040` | Copper — secondary warm metallic |
| Text | `#F0E8D8` | Warm ivory |
| Text Muted | `#907060` | Subdued warm brown-grey |

### Typography

- **Heading:** IM Fell English — Old-style serif with italic variants, adds antiquity and gravitas
- **Body:** Inter — Clean, legible, modern contrast to the heritage heading font

---

## Page Architecture

### index.html — Main Landing Page

**Sections:**
1. Preloader — SVG animated mandala spinning
2. Navigation — Fixed transparent, scrolled solid
3. Hero — Cinematic full-screen, parallax layers, mist overlays, letter-stagger brand reveal, prayer wheel decoration
4. Healing Arts — 4 treatment icon cards (grid layout)
5. The Sanctuary — Image + text split, monastery statistics
6. Retreat Journeys — 3 package preview cards
7. Ancient Wisdom — Full-width typography manifesto
8. Masters & Practitioners — 4 portrait cards
9. Footer

**Hero Approach:** Hero Type A (Cinematic Full-Screen)
- Background image with 3-layer mist system (gradient fog)
- Brand name split into individual `<span>` letters for GSAP stagger
- Floating prayer wheel SVG (right-aligned, slow rotation)
- Left-side scroll indicator with animated line

### about.html

**Sections:**
1. Page hero (65vh, different background image)
2. Monastery history + timeline
3. Healing philosophy (The Four Pillars of Tibetan Medicine)
4. Master healers (2-column layout with portraits)
5. Stats / certifications

### treatments.html

**Sections:**
1. Page hero
2. Four signature treatments (alternating image + text layout)
3. Three complementary therapies (grid)
4. Booking CTA

### retreat.html

**Sections:**
1. Page hero
2. Three retreat packages (full-bleed horizontal blocks, alternating direction)
3. Accommodation suites (3 card grid)
4. Sample daily itinerary (timeline layout)
5. Travel logistics (4 info cards)
6. CTA

### contact.html

**Sections:**
1. Page hero
2. Contact form with tabs (Treatment Booking / Retreat Inquiry / General)
3. Travel information (4 location cards)

---

## GSAP Animation Strategy

All animations use `immediateRender: false` at the TOP LEVEL of `gsap.from()` — never inside `scrollTrigger: {}`.

```js
// CORRECT PATTERN (used throughout)
gsap.from('.element', {
  immediateRender: false,
  scrollTrigger: { trigger: '.element', start: 'top 85%' },
  duration: 0.9,
  y: 24,
  opacity: 0,
  ease: 'power2.out'
});
```

Animation parameters maintained throughout:
- `y`: 20–28px
- `duration`: 0.9–1.2s
- `ease`: `power2.out` or `power3.out`
- `stagger`: 0.08–0.12
- `start`: `top 85%`

---

## Image Strategy

- All images from Unsplash CDN with `?w=900&q=80&auto=format&fit=crop` parameters
- Hero: wide landscape images (w=1800)
- Treatment sections: portrait ratio (4/5 aspect-ratio)
- Cards: landscape ratio (4/3 or 3/4)
- Primary thumbnail source: `photo-1524504388940-b1c1722653e1` (confirmed 200 status)

---

## Originality Elements

- Custom SVG mandala pattern for preloader (hand-drawn, not sourced)
- Custom prayer wheel SVG decoration
- Custom healing art icons (4 bespoke SVG paths)
- Entirely original copywriting — no lorem ipsum
- Unique healing philosophy content (Lung/Tripa/Beken framework)
- Authentic Tibetan medicine references (Gyushi, constitutional typing)
- Custom tab-switching contact form with three distinct form types
