# KURETAKE — Bamboo Ryokan & Onsen

**Tagline:** Where Bamboo Whispers and Water Heals

## Overview

KURETAKE is a complete luxury multi-page website for a traditional Japanese bamboo ryokan and onsen located in Arashiyama, Kyoto. The site presents a fictitious but deeply researched hospitality brand founded in the Meiji Era (1890), operated by five generations of the Yamamoto family.

## Pages

| File | Description | Lines |
|---|---|---|
| `index.html` | Main landing page with Hero Type G scroll-driven text transform | 1250+ |
| `about.html` | Ryokan history since 1890, family lineage, bamboo forest setting | 620+ |
| `collection.html` | Full room detail: Bamboo Grand Suite, Garden View, Forest Bath Chamber, Matsu Wing | 680+ |
| `process.html` | Five-step guest journey, optional experiences, practical info | 580+ |
| `contact.html` | Reservation form, packages, access directions | 560+ |

## Design Specifications

- **Hero Layout:** Type G — Scroll-Driven Text Transform (word-level parallax divergence on scroll)
- **Color Palette:** P10 Dark Olive
- **Font Pair:** F4 — Cinzel (headings) + Crimson Pro (body)
- **Animation:** A2 Whisper — duration 1.5s, y 14px, stagger 0.06s, power1.out, immediateRender:false

## Color Palette — P10 Dark Olive

```css
--bg: #141810;        /* Primary background */
--surface: #1C2018;   /* Card/section backgrounds */
--surface2: #222A1E;  /* Alternating section backgrounds */
--accent: #8AB56A;    /* Primary accent — bamboo green */
--accent-light: #AACE8A; /* Hover states, light text */
--accent-dark: #5A8040;  /* Borders, subtle accents */
--ivory: #E4EEE0;    /* Primary text */
--smoke: #889880;    /* Secondary text */
--muted: #4E5E48;    /* Tertiary text, footnotes */
--border: #181E14;   /* All border colors */
```

## Technical Notes

- GSAP 3.12.2 via cdnjs with ScrollTrigger
- Swiper 11 for testimonials carousel (index.html)
- SplitText polyfill embedded (no Club GSAP CDN dependency)
- `immediateRender: false` on all `gsap.from()` with ScrollTrigger
- No `opacity: 0` set in CSS on content elements
- Philosophy grid uses CSS `display: grid` (not flex)
- Collection grid uses `overflow: visible`
- Footer background always `var(--bg)`
- Custom scrollbar: `scrollbar-width: thin; scrollbar-color: var(--accent-dark) var(--bg)`

## Responsive Breakpoints

- Mobile: 375px (single column, condensed padding)
- Tablet: 768px (adjusted grid columns, hamburger nav)
- Desktop: 1440px (full two-column layouts, visible desktop nav)

## Required Images

Place the following in the `images/` directory:

```
hero-1.webp      — Main hero background (bamboo grove / atmospheric)
hero-2.webp      — About page hero (forest path or ryokan exterior)
hero-3.webp      — Collection page hero (tatami room interior)
hero-4.webp      — Process/Rituals page hero (onsen or dawn scene)
product-1.webp   — Bamboo Grand Suite
product-2.webp   — Garden View Room
product-3.webp   — Forest Bath Chamber
product-4.webp   — Matsu Wing
ambient-1.webp   — Onsen bath or interior detail
ambient-2.webp   — Garden or nature detail
ambient-3.webp   — Heritage or texture detail
thumbnail.webp   — Site thumbnail (600px wide, git-tracked)
```

## Brand Details

- **Brand:** KURETAKE — 呉竹
- **Location:** Arashiyama Hills, Kyoto, Japan
- **Founded:** 1890 (Meiji Era)
- **Rooms:** 12 total (Bamboo Grand Suite · Garden View · Forest Bath Chamber · Matsu Wing)
- **Onsen:** 3 private baths (Rotenburo · Hinoki-buro · Kazoku-buro)
- **Dining:** Michelin-recognized kaiseki kitchen (12-course tasting menu)
- **Innkeeper:** Keiko Yamamoto (5th generation)

## Tier & Pricing

- Tier: free
- Price: 0
