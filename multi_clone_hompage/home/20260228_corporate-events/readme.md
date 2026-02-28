# LUMINARY EVENTS — Ultra-Luxury Corporate Event Production

**Slug:** `20260228_corporate-events`
**Created:** 2026-02-28
**Type:** Multi-page (5 pages)
**Tier:** Free

---

## Brand Overview

**LUMINARY EVENTS** (Luminary Corporate Events & Experiences) is an ultra-luxury corporate event production company founded in London in 2001. The brand produces 2,400+ events across 180 countries with seven global studios.

**Tagline:** Every moment crafted. Every detail mastered.

---

## Design Specs

| Property | Value |
|---|---|
| Hero Layout | Type F — Interactive Depth-Layer |
| Color Palette | P7 — Deep Teal |
| Primary Background | `#0A1818` |
| Accent | `#4DCFB0` |
| Font Heading | Fraunces (serif, variable) |
| Font Body | Inter (sans-serif) |
| Animation | A5 Organic — `y: random(20,28)`, stagger: 0.09 |

---

## Pages

| File | Title | Key Sections |
|---|---|---|
| `index.html` | Home | Preloader, Hero (Type F), Marquee, Stats, Philosophy, Services, Process Preview, Gallery, Testimonials, CTA |
| `about.html` | About | Story, Values (6 cards), Team (4 members), Awards (6 entries) |
| `collection.html` | Event Experiences | Filter tabs, Featured Experience, 9 Collection Cards, 3-tier Packages |
| `process.html` | Our Process | 5-Stage Journey, Standards, Timeline, FAQ accordion |
| `contact.html` | Contact | Form with event type pills, Global Offices, Promise Strip |

---

## Hero — Type F Implementation

The hero implements a **TYPE F Interactive** layout:
- Full-screen hero image (`hero-1.webp`) at `filter: brightness(0.4)`
- Large animated headline: **"WE CREATE UNFORGETTABLE"** (Fraunces serif, SplitText word animation)
- Interactive event-type widget with 4 cards:
  - Annual Gala (star icon)
  - Product Launch (layers icon)
  - Leadership Summit (people icon)
  - Brand Experience (clock/globe icon)
- Each card has: icon + title + sub-description + hover glow + arrow reveal
- Active card state: `border-color: rgba(77,207,176,0.5)`, radial glow overlay
- GSAP hover: sibling cards fade to 0.7 opacity and scale to 0.98

---

## GSAP Compliance

- All `gsap.from()` calls have `immediateRender: false` at top level
- No CSS `opacity: 0` on content elements
- Scroll indicator: shown in preloader `onComplete` AND `setTimeout(4000)`
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Collection grid: `overflow: visible`
- Footer: `background: var(--bg)` only

---

## Color Variables

```css
--bg: #0A1818
--surface: #0F2020
--surface2: #142828
--accent: #4DCFB0
--accent-light: #7EEFD0
--accent-dark: #2BAF90
--ivory: #E8F5F2
--smoke: #A0C8C0
--muted: #607870
--border: #102222
```

---

## CDN Dependencies

- GSAP 3.12.2: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- ScrollTrigger: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`
- Swiper 11 (index.html only): `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`
- Google Fonts: Fraunces + Inter

---

## Image Requirements

Place in `images/` directory:
- `hero-1.webp` through `hero-4.webp` — corporate event/gala settings
- `product-1.webp` through `product-4.webp` — event type specific images
- `ambient-1.webp` through `ambient-3.webp` — venue/atmosphere shots
- `thumbnail.webp` — site thumbnail (600px wide)

**Keywords for sourcing:** corporate gala event, luxury conference setup, corporate keynote stage, premium event production, business dinner banquet, LED event stage, corporate awards ceremony
