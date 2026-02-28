# APEX Ventures — Boutique VC Landing Site

**Slug:** `20260228_venture-capital`
**Created:** 2026-02-28
**Tier:** Free
**Status:** PUBLISHED

---

## Brand Overview

**Brand Name:** APEX (Apex Ventures)
**Industry:** Boutique Venture Capital
**Tagline:** "We back the builders who change industries"
**Focus:** Deep-tech, climate tech, and artificial intelligence startups

### Key Stats
- $2.4B AUM
- 127 Portfolio Companies
- 23 Successful IPOs
- 18 Unicorn Exits
- Founded 2008

---

## Design System

### Color Palette: P2 — Cool Obsidian
| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#101420` | Page background |
| `--surface` | `#181E2A` | Cards, sections |
| `--surface2` | `#1F2535` | Hover states |
| `--accent` | `#4EE8FF` | Primary accent, CTAs |
| `--accent-light` | `#7FF0FF` | Hover accent |
| `--accent-dark` | `#2BC5E0` | Dark accent |
| `--ivory` | `#E8F4F8` | Primary text |
| `--smoke` | `#A0B8C0` | Secondary text |
| `--muted` | `#607880` | Tertiary text, labels |
| `--border` | `#1C2535` | Borders, dividers |

### Font Pair: F3 — Bebas Neue + DM Sans
- **Heading:** Bebas Neue (`--font-serif`)
- **Body:** DM Sans 300/400/500 (`--font-sans`)
- **Google Fonts:** `family=Bebas+Neue&family=DM+Sans:wght@300;400;500`

### Animation: A3 — Precise
- `x: -20` (slide from left)
- `duration: 0.75s`
- `stagger: 0.04s`
- `ease: 'power3.out'`
- `immediateRender: false` (always at top level of gsap.from())

### Hero Layout: Type F — Interactive / Depth-Layer
- Large dark background image with `brightness(0.45)` filter
- Mousemove-driven parallax on hero background image
- Floating depth particles (20 SVG dots) responding to mouse
- Right panel: "We Back" interactive widget with 3 animated category chips
  - Deep Tech (47 companies)
  - Climate (38 companies)
  - AI (42 companies)
- Chips auto-rotate every 3 seconds, glow on hover/active

---

## File Structure

```
20260228_venture-capital/
├── index.html          Main landing page (1,700+ lines)
├── about.html          About / Team / Story page (500+ lines)
├── collection.html     Portfolio page with filter (500+ lines)
├── process.html        Investment process page (400+ lines)
├── contact.html        Contact / Deal submission page (500+ lines)
├── meta.json           Template metadata
├── readme.md           This file
├── images/
│   ├── hero-1.webp     Hero background (main)
│   ├── hero-2.webp     About hero / gallery
│   ├── hero-3.webp     Team / process images
│   ├── hero-4.webp     Gallery / team photos
│   ├── product-1.webp  Portfolio card — Deep Tech
│   ├── product-2.webp  Portfolio card — Climate
│   ├── product-3.webp  Portfolio card — AI
│   ├── product-4.webp  Portfolio card — Carbon
│   ├── ambient-1.webp  Testimonial avatar / gallery
│   ├── ambient-2.webp  Testimonial avatar / team
│   └── ambient-3.webp  Contact map / team
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## CDN Stack

| Library | URL |
|---|---|
| GSAP 3.12.2 | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js` |
| ScrollTrigger | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js` |
| Swiper 11 CSS | `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css` |
| Swiper 11 JS | `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js` |
| Google Fonts | `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500` |

---

## GSAP Critical Rules Followed

1. `immediateRender: false` placed at **top level** of every `gsap.from()` — not inside `scrollTrigger:{}`
2. No `opacity: 0` in CSS on any content elements
3. Scroll indicator shown in BOTH preloader `onComplete` AND `setTimeout(4000)`
4. Philosophy/values grids use `display: grid; grid-template-columns: repeat(3, 1fr)` — NOT flex
5. Portfolio grid uses `overflow: visible`
6. Footer background: `var(--bg)` only — no hardcoded hex
7. SplitText polyfill embedded inline before Swiper script

---

## Page Summary

### index.html — Main Landing
- Preloader with animated progress bar
- Type F hero with depth-layer parallax + "We Back" interactive widget
- Stats ticker (scrolling marquee)
- Philosophy section (3-column grid)
- Portfolio preview (3 cards)
- Process preview (4-step horizontal)
- Numbers / track record section
- Testimonials (Swiper carousel)
- Ambient gallery grid
- CTA strip (cyan background)
- Full footer

### about.html — About
- Page hero with headline split
- Full-width hero image strip
- Story section with timeline milestones (2008–2024)
- Values section (6-card grid)
- Team section (4 partners)
- Advisory council (6 advisors)
- LP invitation CTA

### collection.html — Portfolio
- Page hero with stats
- Filter bar (sticky, tabbed by category)
- 9-card filterable portfolio grid
- Featured company spotlight (Axiom Fusion)
- Exit stories (4-card grid)
- Deal submission CTA

### process.html — Investment Process
- Page hero
- 5-phase process timeline with vertical connector
- Investment criteria (6-card grid)
- Investment parameters table
- FAQ accordion
- CTA

### contact.html — Contact
- Hero with background image
- 3-tab contact form (Founders / LP / General)
- Sidebar with contact info, offices, response time
- Map/ambient image section
- Form success states
