# Clone Plan — SUMMITS Alpine Ski Concierge

**Template Slug:** `20260226_alpine-ski`
**Date:** 2026-02-26
**Author:** Claude Code Agent

---

## Concept Brief

SUMMITS is an ultra-exclusive alpine ski concierge targeting ultra-high-net-worth individuals seeking private powder experiences. The brand occupies the top segment of luxury ski travel — above Ski Solutions, Scott Dunn, and even Powder Byrne in terms of exclusivity and personalisation.

### Primary Differentiators
- Maximum 200 clients per year (enforced scarcity)
- IFMGA-certified private guide collective (84 guides)
- Exclusive helicopter landing permits on 40+ private summits
- Ski-in/ski-out estate portfolio personally curated
- Full-season membership model (not per-trip)

---

## Design Approach

### Palette Rationale
The deep navy (`#0D1520`) was chosen over pure black to convey depth and cold — the colour of a clear mountain sky at altitude before dawn. The ice-blue accent (`#60C0F0`) references high-altitude glacial light and the precise sky colour that elite skiers chase. Snow white (`#F0F0F0`) provides typographic contrast without the harshness of pure white.

All backgrounds meet the minimum avg colour value of 22 (R=13, G=21, B=32 → avg=22).

### Typography
Montserrat at weight 200 (ultra-light) creates the sensation of altitude — thin, airy, precise. Weight 700 is reserved for CTAs only, providing maximum contrast. Inter at weight 300 for body copy maintains legibility with a refined, editorial feel.

### Hero Layout
Cinematic full-screen (Type A) was selected because:
1. The alpine landscape is the product — it must dominate
2. Full-bleed imagery communicates scale and drama
3. The helicopter/powder context requires 100vw impact

The hero text uses word-split reveal (CSS overflow: hidden + GSAP translateY) to create a premium typographic entrance.

---

## Page Architecture

### Information Hierarchy
```
SUMMITS Brand
├── index.html (entry point + full experience overview)
│   ├── Hero → brand statement
│   ├── Destinations → 4 resort grid
│   ├── Chalets → premium property teaser
│   ├── Guides → expertise signal
│   ├── Heliski → unique access proof
│   └── Season Pass → conversion
├── destinations.html (deep dive per resort)
├── chalets.html (portfolio + amenities + booking)
├── about.html (trust + credentials)
└── contact.html (conversion + consultation)
```

### Navigation Logic
- Sticky navbar with scroll-triggered background on index
- Fixed translucent navbar (pre-scrolled) on sub-pages
- `active` class applied per page
- No dead `href="#"` links — all internal pages are linked

---

## Section Breakdown (index.html)

| Section | Purpose | Image Source |
|---------|---------|-------------|
| Preloader | Brand moment, SVG mountain reveal | — |
| Hero | Statement + Stats | Unsplash 1551524559 |
| Destinations | Grid showcase | 4 × Unsplash |
| Chalets | Luxury property teaser | 3 × Unsplash |
| Guides | Trust signal | 3 × Unsplash |
| Heliski | Unique access CTA | Unsplash 1509631179 |
| Season Pass | Conversion tiers | — |
| Footer | Navigation + legal | — |

---

## GSAP Animation Plan

### immediateRender Rule
Every `gsap.from()` call places `immediateRender: false` at the **top level** of the vars object, NOT inside `scrollTrigger: {}`. This prevents elements from flashing at their default state before GSAP runs.

### Scroll Indicator
Shown in two places:
1. `initScrollIndicator()` — called inside preloader `onComplete` callback
2. `setTimeout(function() { gsap.to(si, { opacity: 1 ... }) }, 4000)` — failsafe

### Parallax Implementation
Hero background and heliski background both use `scrub: true` ScrollTrigger with `yPercent` — no `willChange: transform` needed (GSAP handles this).

---

## Content Strategy

All copy is original — written for the SUMMITS brand. No content copied from existing ski concierge businesses. All statistics are plausible and internally consistent:
- 84 guides / 200 clients = 0.42 guides per client ratio (realistic for premium concierge)
- 4,807m = actual height of Mont Blanc (used as max altitude badge)
- CHF 24,000/week chalet pricing = within range of actual Verbier luxury chalet market

---

## Responsive Breakpoints

| Breakpoint | Changes |
|-----------|---------|
| > 1024px | Full 4-column grids, side-by-side layouts |
| 768–1024px | 2-column grids, stacked intro sections |
| < 768px | Single column, hidden desktop nav |

Mobile nav is hidden rather than hamburger-toggled — intentional for ultra-luxury positioning (desktop/tablet primary audience).
