# Clone Plan — BENTO BIJOU

## Project Brief

**Template:** BENTO BIJOU — The Art of Japanese Bento
**Slug:** `20260226_bento-atelier`
**Tier:** PRO ($49)
**Created:** 2026-02-26

---

## Concept Summary

BENTO BIJOU is a fictional luxury artisan bento studio located in Nishiki Market, Kyoto. The brand is positioned at the intersection of Japanese culinary tradition, high-end corporate gifting, and experiential hospitality (workshops). The visual language draws from Japanese lacquerware aesthetics — dark matte grounds, vermilion accents, gold details, and refined serif typography.

---

## Reference Inspirations

The design draws from the aesthetic language of:
- Kyoto kaiseki restaurant websites (dark palette, seasonal storytelling)
- Japanese lacquerware / Wajima-nuri brand identities
- Luxury food gifting brands (Fortnum & Mason, Fauchon)
- High-end Japanese travel experience sites

No pages were directly cloned or scraped. All content, layout, and visual concepts were created original.

---

## Page Architecture

### index.html
- **Hero type:** A — Cinematic full-screen
- **Preloader:** Chopstick cross animation + gold progress bar
- **Scroll indicator:** Fixed left, gold line + rotated "Scroll" text
- **Sections:**
  1. Seasonal Collection — 4-column card grid with hover reveal
  2. The Craft — Two-image stack + 3-step process text
  3. For Every Occasion — 3-card grid (wedding / corporate / ceremony)
  4. The Workshop — Image + feature list layout
  5. Order Today CTA — Full-width vermilion band with Japanese kanji watermark
- **Footer:** 4-column with Japanese motif divider

### about.html
- **Hero:** Overhead studio shot parallax
- **Sections:**
  1. Story — Split grid with founder quote, 3 body paragraphs, year badge
  2. Artisans — 3-column portrait grid with overlay info cards
  3. Philosophy — 2+4 grid (text + 4 philosophy items with Japanese characters)
  4. Timeline — Center-line chronology 1988–2024

### collection.html
- **Hero:** Bento/food overhead image
- **Filter bar:** 7 toggle buttons (All, Spring, Summer, Autumn, Winter, Corporate, Wedding)
- **Sections:**
  1. Seasonal Editions — 3-column card grid with image + text body
  2. Bespoke Commissions — 2-column featured cards
  3. For Every Purpose — 2-column occasion panels
  4. The Box is Part of the Gift — Split layout with material list

### workshops.html
- **Hero:** Studio/workshop image
- **Sections:**
  1. Intro — Split layout with 4 stats
  2. Choose Your Class — 3-column pricing cards with detail tables
  3. Sample Schedule — Split with timeline curriculum
  4. Team Events — Half-split image + feature list
  5. Testimonials — 3-column review cards

### contact.html
- **Hero:** Kyoto food market image
- **Inquiry type tabs:** 3 tabs (Bento / Workshop / Corporate) with JS switching
- **Form:** Full contact form with conditional labels
- **Sidebar:** Address, hours, lead times, contact links
- **Map placeholder:** Stylized grid map with marker
- **FAQ:** 2-column 6-item grid

---

## Technical Specifications

| Feature | Implementation |
|---|---|
| CSS Framework | Vanilla CSS with custom properties |
| Animation | GSAP 3.12.5 + ScrollTrigger |
| Fonts | Cormorant Garamond + Inter via Google Fonts |
| Images | Unsplash CDN (all validated) |
| SplitText | Inline polyfill class |
| Responsive | 1024px and 640px breakpoints |
| No `opacity:0` on content | Confirmed — all starts visible |
| `immediateRender: false` | Confirmed — top-level in all animations |

---

## Color Validation

| Variable | Hex | R | G | B | Avg | Pass? |
|---|---|---|---|---|---|---|
| `--bg` | `#181810` | 24 | 24 | 16 | 21.3 | YES (≥ 20) |
| `--surface` | `#201E14` | 32 | 30 | 20 | 27.3 | YES |
| `--accent` | `#E84820` | 232 | 72 | 32 | 112 | N/A (accent) |
| `--accent2` | `#F0C840` | 240 | 200 | 64 | 168 | N/A (accent) |
