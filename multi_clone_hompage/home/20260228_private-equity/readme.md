# VANTAGE CAPITAL PARTNERS — Private Equity Fund Template

**Slug:** `20260228_private-equity`
**Tier:** Premium · $49
**Created:** 2026-02-28
**Status:** PUBLISHED

---

## Overview

A complete luxury multi-page website for a private equity fund focused on luxury consumer, premium hospitality, and brand-driven businesses. Features a warm amber color palette, Playfair Display serif typography, and Type D (Portrait + Stats Grid) hero layout.

**Brand:** Vantage Capital Partners
**Tagline:** "Building exceptional companies. Creating enduring value."
**Founded:** 1998 | **AUM:** $12.4B | **Portfolio:** 89 companies

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — Type D hero with stats grid, philosophy, portfolio carousel, investment approach, track record, testimonials, gallery, CTA |
| `about.html` | Firm story, founding timeline, leadership team, culture, fund history |
| `collection.html` | Portfolio companies by sector — cards, list view, notable exits |
| `process.html` | Investment strategy — process pipeline, criteria tabs, value creation pillars, sector focus, ESG |
| `contact.html` | Contact channels, inquiry form, global offices, investor resources |

---

## Design System

### Color Palette — P1 (Warm Amber)
```css
--bg: #1C1208
--surface: #261A0A
--surface2: #301E0C
--accent: #C9973A
--accent-light: #DEB05A
--accent-dark: #A07828
--ivory: #F5EDD8
--smoke: #C8BC9A
--muted: #887858
--border: #2C2010
```

### Typography — F2
- **Heading:** Playfair Display (400, 700, italic 400)
- **Body:** Lato (300, 400, 700)
- Google Fonts: `family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700`

### Hero Layout — Type D: Portrait + Stats Grid
- `grid-template-columns: 1.2fr 0.8fr`
- Left: Cinematic portfolio imagery with overlay headline "BUILDING EXCEPTIONAL COMPANIES"
- Right: 2×2 stats grid — $12.4B AUM / 89 Portfolio Co. / 34 Exits / 22% Net IRR
- Header + footer bands frame the stats grid

### Animation — A4 Dramatic
- `y: 40`, `duration: 1.2`, `stagger: 0.15`, `ease: 'power2.inOut'`
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls

---

## CDN Dependencies

- GSAP 3.12.2 + ScrollTrigger (cdnjs.cloudflare.com)
- Swiper 11 (jsdelivr.net)
- Google Fonts (Playfair Display + Lato)

---

## Images Required

```
images/
├── hero-1.webp       (portfolio company boardroom / corporate interior)
├── hero-2.webp       (investment process / office environment)
├── hero-3.webp       (team / leadership portrait setting)
├── hero-4.webp       (luxury hospitality or consumer brand visual)
├── product-1.webp    (portfolio company — hospitality)
├── product-2.webp    (portfolio company — luxury consumer)
├── product-3.webp    (portfolio company — wellness / lifestyle)
├── product-4.webp    (portfolio company — fine food / beverage)
├── ambient-1.webp    (team culture / meeting environment)
├── ambient-2.webp    (brand experience / luxury environment)
├── ambient-3.webp    (market / global presence)
└── thumbnail.webp    (600px wide preview — git tracked)
```

---

## GSAP Rules Compliance

- [x] `immediateRender: false` at TOP LEVEL of every `gsap.from()` — never inside `scrollTrigger:{}`
- [x] NO `opacity: 0` on content elements in CSS
- [x] Scroll indicator shown in preloader `onComplete` AND `setTimeout(4000ms)`
- [x] Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)`
- [x] Portfolio/collection swiper has `overflow: visible`
- [x] Footer uses `background: var(--bg)` only — no hardcoded hex
- [x] SplitText polyfill embedded before Swiper JS

---

## Key Sections

### index.html
1. Preloader (animated SVG + loading bar)
2. Scroll indicator (fixed left side)
3. Navbar (transparent → scrolled frosted glass)
4. **Hero — Type D** (Portfolio imagery + Stats Grid)
5. Marquee (sector keywords + fund stats)
6. Philosophy (3-pillar grid)
7. Featured Portfolio (Swiper carousel)
8. Investment Approach (visual + 5-step process)
9. Track Record (4 KPIs + 3 exit cards)
10. Testimonials (Swiper with autoplay)
11. Ambient Gallery (mosaic layout)
12. Contact CTA (centered + contact details)
13. Footer (4-column + legal disclaimer)

---

## Notes

- All financial figures are fictional for template demonstration purposes
- Regulatory disclaimer included in footer
- Form on contact.html uses client-side JS only (no backend required)
- Counter animations in track record section
- Tab UI on process.html investment criteria section
