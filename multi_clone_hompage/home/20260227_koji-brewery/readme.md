# KOJI — Ancient Spores, Living Flavors

**Slug:** `20260227_koji-brewery`
**Tier:** Free
**Category:** Food & Beverage / Luxury Landing Page
**Pages:** 5 (index, about, collection, process, contact)

---

## Overview

A complete luxury multi-page website for KOJI Fermentation Studio — an artisan koji brewery and fermentation house rooted in 400 years of Kyoto tradition. The site showcases Aspergillus oryzae cultivation, sake, miso, shio koji, and other fermented Japanese foods through a Dark Olive color palette and restrained, luxury-grade typography.

---

## Design Specifications

| Property | Value |
|---|---|
| Hero Layout | TYPE G — Scroll-Driven Text Transform |
| Color Palette | P10 Dark Olive |
| Primary Color | `#8AB56A` |
| Font Pair | F7 — Libre Baskerville + Source Sans 3 |
| Animation | A2 Whisper (duration:1.5, y:14, stagger:0.06) |
| Style | Luxury, Artisan, Japanese |

### Color Tokens

```css
--bg: #141810;
--surface: #1C2018;
--surface2: #222A1E;
--accent: #8AB56A;
--accent-light: #AACE8A;
--accent-dark: #5A8040;
--ivory: #E4EEE0;
--smoke: #889880;
--muted: #4E5E48;
--border: #181E14;
```

---

## Pages

### index.html
- Preloader with animated bar
- Scroll indicator (revealed after preloader + setTimeout 4000ms fallback)
- Navbar (transparent → frosted glass on scroll)
- Hero TYPE G: scroll-driven text transform with parallax on `.word-1`, `.word-2`, and hero background
- Stats section: 120+ Products, 400yr Method, 15 Strains, 1 Master Brewer
- Philosophy 3-column CSS grid (NOT flex)
- Product collection grid (4-col)
- Fermentation Chamber ambient feature
- Process steps with imagery
- Heritage section with image grid
- Testimonials (Swiper 11, 4 cards, autoplay)
- Order inquiry form
- Footer with 4-column layout + social icons

### about.html
- Brewery history timeline (Edo period to present)
- Master brewer profile (Hayashi Kenji)
- Koji science: amylases, proteases, lipases
- Studio values and principles

### collection.html
- Filter bar (UI only, no JS filter)
- 6-product grid: Shio Koji, Amazake, Mugi Miso, Sake Kasu, Shiro Shoyu Koji, Kome Koji
- Featured product spotlight (Mugi Miso 18-month Reserve)
- Seasonal releases (4 seasons)
- Chef's pairing guide table

### process.html
- Cinematic process hero with overlay
- 5-stage visual timeline
- Full step-by-step detail sections (alternating image/text layout)
- Muro chamber specifications
- 48-hour cultivation schedule grid

### contact.html
- Page header
- 4-option inquiry type selector
- Comprehensive contact form with radio buttons, selects, checkbox
- Studio contact details and hours
- Wholesale pricing tiers table
- 3-card masterclass offerings
- Location placeholder

---

## Technical Notes

- No `opacity: 0` set via CSS on content elements
- All `gsap.from()` calls include `immediateRender: false` at top level (NOT inside scrollTrigger)
- Scroll indicator revealed in preloader `onComplete` callback AND via `setTimeout(4000)` fallback
- Philosophy section uses `display: grid` (3-col)
- SplitText polyfill embedded inline before Swiper initialization
- Custom scrollbar via CSS (`scrollbar-width: thin; scrollbar-color`)
- All pages: mobile responsive with hamburger nav overlay
- CDNs: GSAP 3.12.2, Swiper 11, Google Fonts

---

## Images Required

Place in `images/` directory:

| File | Usage |
|---|---|
| `hero-1.webp` | Index hero background |
| `hero-2.webp` | Heritage section, brewer profile |
| `hero-3.webp` | Heritage grid, collection spotlight |
| `hero-4.webp` | Muro chamber, process harvest |
| `product-1.webp` | Shio Koji product card |
| `product-2.webp` | Amazake product card |
| `product-3.webp` | Mugi Miso product card |
| `product-4.webp` | Sake Kasu product card |
| `ambient-1.webp` | Chamber section, Shiro Shoyu card |
| `ambient-2.webp` | Process imagery, Kome Koji card |
| `ambient-3.webp` | Process hero, muro detail |
| `thumbnail.webp` | Manifest thumbnail (600px wide) |

---

## Brand Voice

- **Tone:** Reverent, ancient, living, patient
- **Keywords:** Ancient, living, spores, fermentation, umami, artisan, patience, koji, muro, tradition
- **Avoid:** Modern, fast, convenient, industrial, synthetic
