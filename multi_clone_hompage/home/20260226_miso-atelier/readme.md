# KOJI — Miso & Fermentation Atelier

**Slug:** `20260226_miso-atelier`
**Tier:** PRO | **Price:** $49 | **Status:** PUBLISHED

## Brand Concept

KOJI is a sixth-generation miso and koji fermentation atelier in Nagano, Japan. Produces 12 varieties of aged miso (3-month to 3-year fermentation), koji culture starters, and seasonal fermented preserves. Runs fermentation immersion retreats and professional koji certification courses.

**Tagline:** "Patience Transforms Everything."

---

## Design System

| Token | Value | Note |
|---|---|---|
| `--bg` | `#1A1510` | avg=(26+21+16)/3=21 ✓ |
| `--surface` | `#231C14` | avg=25.3 ✓ |
| `--accent` | `#D47840` | Umami orange |
| `--accent2` | `#E8C890` | Rice cream |
| `--text` | `#F0E8D8` | Warm off-white |
| `--text-muted` | `#907050` | Amber gray |
| Heading Font | Cormorant Garamond | Google Fonts |
| Body Font | Inter | Google Fonts |

---

## File Structure

```
20260226_miso-atelier/
├── index.html           Main luxury landing page
├── about.html           Six generations story, Nagano terroir
├── miso.html            12 variety specs, tasting notes, pairings
├── courses.html         Day workshop, retreat, Koji Mastery cert
├── contact.html         Order/booking/wholesale/barrel forms
├── meta.json            Template metadata
├── readme.md            This file
├── images/
│   └── thumbnail.webp   600px wide WebP thumbnail
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Pages

### `index.html` — Main Landing Page
- Preloader with koji spore cloud particle animation
- Fixed scroll indicator (left side, amber accent)
- Hero: cinematic full-screen with aged miso barrel imagery
  - Character-reveal animation on "KOJI" title
  - Floating fermentation timer (1,095 days = 3yr barrel)
  - Steam wisps as CSS filter blur elements
- Section 1: Miso Range — 6 variety cards with aging badge and flavor profiles
- Section 2: The Tradition — sixth-generation story split layout
- Section 3: Koji Science — 4-step fermentation process infographic
- Section 4: Retreats & Courses — 3 program cards with pricing
- Section 5: Reserve Your Barrel — subscription/wholesale CTA with 3 barrel options
- Footer with traditional Japanese cedar motif (杉 · 麹 · 忍)

### `about.html` — The Story
- Philosophy section: 2-column layout with quote block
- Stats row: 1769 founded | VI generations | 12 varieties | 250+ year culture
- Generations timeline: 6 generation entries with dates, names, contributions
- Nagano Terroir: 3-card grid (alpine water, mountain seasons, cedar microbiome)
- Portrait section: quote from Haruka Yamamoto VI + narrative
- CTA to courses and contact

### `miso.html` — The Collection
- Intro: 2-column brand narrative
- Detail cards: 4 flagship varieties with full specs (Shiro Shun, Aki Mugi, Sumi Koji, Genmitsu Kuroku)
  - Each card: aging period, base, salt %, koji ratio, color, format, flavor profiles
  - Pairing suggestions
- Koji Culture section: 250-year lineage narrative
- Seasonal Preserves: 4 seasonal products
- Order CTA

### `courses.html` — Experiences
- Intro: 2-column
- Philosophy numbers bar (accent bg)
- Featured course: Miso Press Day — full detail with image
- 2 full courses: Fermentation Week & Koji Mastery (10-day cert)
- Curriculum grid: 6 items for Koji Mastery
- Seasonal calendar: 2026 schedule
- 3 guest testimonials
- Booking CTA

### `contact.html` — Contact
- Tab selector: 6 inquiry types (general, miso order, course, wholesale, barrel, application)
- Dynamic form: fields change based on inquiry type
- Info column: address, hours, response policy
- Visit/Directions section with step-by-step from Tokyo
- Wholesale section: 3 options (restaurant, retail, custom)
- Barrel commission CTA

---

## GSAP Rules Applied

- `immediateRender: false` at **top level** of every `gsap.from()` call
- No CSS `opacity: 0` on content elements
- ScrollTrigger: `start: 'top 80%'` default, stagger: 0.1–0.15
- y: 20–28px, duration: 0.9–1.2s, ease: `power2.out`
- Preloader fade triggered after `window.load` + 2200ms
- Scroll indicator shown on preloader complete AND setTimeout 4000ms fallback

---

## Image Sources (Unsplash)

All images sourced from Unsplash with validated IDs:

| Usage | Unsplash ID | Status |
|---|---|---|
| Thumbnail / Hero | `1547592180-85f173990554` | 200 OK |
| Tradition / About hero | `1528360983277-13d401cdc186` | 200 OK |
| About portrait section | `1509631179647-0177331693ae` | 200 OK |
| Miso page hero | `1547592180-85f173990554` | 200 OK |
| Courses hero | `1509631179647-0177331693ae` | 200 OK |
| Koji culture section | `1600607687939-ce8a6c25118c` | 200 OK |
| Contact hero | `1553361371-9b22f78e8b1d` | 200 OK |
| Visit section | `1528360983277-13d401cdc186` | 200 OK |

---

## Miso Varieties Featured

| Name | Kanji | Aging | Base | Notes |
|---|---|---|---|---|
| Shiro Shun | 白旬 | 3 months | White rice | Floral, delicate, sweet |
| Tsuyu Kome | 梅雨米 | 6 months | Rice | Earthy grain, citrus |
| Aki Mugi | 秋麦 | 12 months | Barley | Chef's favorite, caramel-umami |
| Fuyu Daizu | 冬大豆 | 18 months | Soybean | Dark, smoky, mineral |
| Sumi Koji | 炭糀 | 24 months | Soy+Charcoal koji | Extraordinary depth |
| Genmitsu Kuroku | 原蜜黒久 | 36 months | Heritage soybean | Flagship, under 80kg/yr |
