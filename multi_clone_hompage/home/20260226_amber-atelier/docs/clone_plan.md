# Clone Plan — INCLUSIONS Baltic Amber Atelier

## Project Overview

**Template:** `20260226_amber-atelier`
**Date Created:** 2026-02-26
**Type:** Multi-page luxury landing page (5 HTML files)
**Category:** Jewelry / Artisanal Craft / Luxury

---

## Concept Development

### Brand Identity
- **Name:** INCLUSIONS
- **Location:** ul. Mariacka 24, Gdańsk, Poland
- **Speciality:** Baltic amber with prehistoric inclusions, 18k gold settings
- **USP:** Scientific provenance (FTIR + paleontological certification) combined with master goldsmithing
- **Target audience:** Ultra-high-net-worth collectors, fine jewelry enthusiasts, museum gift acquisition

### Tagline Development
Selected: **"Forty Million Years of Perfect Light"**
Alternatives considered:
- "Where Prehistory Meets Gold"
- "Preserved in Light, Set in Gold"
- "Ancient Time, Timeless Craft"

---

## Design Architecture

### Color Rationale
The amber palette was chosen to evoke the luminous, warm quality of Baltic amber itself:
- `--bg: #201408` — deep burnt umber, avg 20 (minimum passing threshold)
- `--surface: #2C1E10` — slightly lighter warm dark, avg 30
- `--accent: #F0A020` — primary amber gold (R=240, G=160, B=32)
- `--accent2: #F8D890` — pale amber shimmer for highlights
- `--text-muted: #906040` — mid-tone sienna for secondary text

### Typography Selection
- **Cormorant Garamond:** Elegant old-style serif — appropriate for luxury provenance, ancient geological timeframes. Used at weight 300 for maximum refinement.
- **Inter:** Clean modern sans-serif for body text and UI elements. Creates classical vs. modern contrast.

### Hero Approach
**Cinematic Full-Screen (Type A)** selected because:
- Amber macro photography creates immediate visual impact
- The radial amber glow overlay mimics backlit amber held to light — brand-accurate metaphor
- Floating age badge ("~45,000,000 yrs") anchors prehistoric narrative immediately
- Letter reveal animation for "INCLUSIONS" creates dramatic, slow unveiling

---

## Page Architecture

| Page | Primary Goal | Key Sections |
|---|---|---|
| `index.html` | Brand statement + discover | Hero, Featured Pieces, Geological Story, Inclusions Gallery, Gold Setting, Commission CTA |
| `about.html` | Trust building | Origin story, Stats, Team specialists, Heritage timeline |
| `collection.html` | Browse & desire | Filter bar, Full gallery, Rare inclusions, Authentication |
| `process.html` | Education & confidence | 6-step process, Sourcing, Goldsmithing craft, Certification docs |
| `contact.html` | Conversion | Tabbed inquiry form, Services, Location |

---

## Section-by-Section Plan (index.html)

### Preloader
- CSS-only amber droplet forming animation
- `dropletForm` keyframe: scaleY progression simulating droplet condensing from tree
- Shimmer highlight for organic realism
- GSAP fadeout on `window.load`, delay 1.8s

### Hero
- Background: Unsplash macro amber `photo-1515562141207-7a88fb7ce338`
- Overlay: dual radial gradient (amber glow center) + linear darkening
- Particles: 18 JS-generated `div.particle` elements with randomized positions and CSS animation
- Title: Individual `<span>` char reveal via GSAP delay stagger
- Floating badge: CSS `badgeFloat` animation at 3s cycle
- Parallax: `window.scroll` → `translateY` on `.hero-bg`

### Featured Pieces Grid
- CSS Grid: `2fr 1fr` on left column (large card spanning 2 rows), `1fr` for remaining
- `piece-card.large` uses `grid-row: span 2`
- Hover: image scale(1.06), overlay lift, `piece-info` translateY(0)

### The Amber Section
- Split grid: visual left (main img + accent img positioned), content right
- Amber stat block with large number (40–60M yrs)
- 3 feature bullets with SVG icon boxes

### Rare Inclusions Grid
- CSS Grid: `2fr 1fr 1fr` with `hero-item` spanning 2 rows
- Each item: image + gradient overlay + absolute caption label

### Gold Setting
- Split: content left (4-step list), visual right (img with gold badge)
- Badge: absolute positioned amber square top-left of image

### Commission CTA
- Full-width centered, radial amber glow background effect
- Two CTAs: primary (contact) + outline (process)

---

## Animation Plan

All GSAP animations use `immediateRender: false` at top level.

| Element | Trigger | Animation |
|---|---|---|
| Preloader | `window.load` | `opacity: 0`, delay 1.8s |
| Hero title chars | After preloader | `y: 30 → 0`, stagger 0.06s |
| Scroll indicator | Post-preloader + setTimeout 4000 | Class `visible` |
| Pieces grid | `top 82%` | `opacity: 0, y: 40`, stagger 0.1 |
| Amber visual | `top 80%` | `opacity: 0, x: -40` |
| Amber content | `top 80%` | `opacity: 0, x: 40` |
| Amber features | `top 85%` | `opacity: 0, y: 20`, stagger 0.12 |
| Inclusions grid | `top 82%` | `opacity: 0, y: 30`, stagger 0.1 |
| Gold content | `top 80%` | `opacity: 0, x: -40` |
| Gold visual | `top 80%` | `opacity: 0, x: 40` |
| Process steps | `top 85%` | `opacity: 0, y: 20`, stagger 0.1 |
| Commission CTA | `top 80%` | `opacity: 0, y: 30` |

---

## Navigation Architecture

```
INCLUSIONS (logo → index.html)
├── Collection → collection.html
├── Process → process.html
├── About → about.html
├── Contact → contact.html
└── [Inquire] → contact.html (CTA button)
```

All `href` values point to real HTML files — no `href="#"` anchors used.
Active page state applied via `.active` class on nav links.

---

## Responsive Breakpoints

| Breakpoint | Grid Changes |
|---|---|
| `≤ 1024px` | Pieces: 2-col; Amber/Gold: single-col; Inclusions: 2-col; Footer: 2-col |
| `≤ 768px` | All grids: 1-col; Nav links hidden; scroll indicator hidden; padding reduced to 24px |

---

## Quality Checklist

- [x] Background avg ≥ 20 (--bg: avg exactly 20)
- [x] Surface avg ≥ 15 (--surface: avg 30)
- [x] Footer uses `var(--bg)` only, no hardcoded dark hex
- [x] No CSS `opacity: 0` on content elements
- [x] `immediateRender: false` at top level of all `gsap.from()` calls
- [x] Scroll indicator shown in preloader callback AND setTimeout 4000ms
- [x] All `href` values point to actual pages (no `#` anchors)
- [x] Active nav state on each page
- [x] All 5 pages have complete footer
- [x] All images have descriptive `alt` attributes
- [x] `loading="lazy"` on all below-fold images
- [x] GSAP loaded from cdnjs (no premium plugins required)
- [x] No SplitText used (would require Club GSAP CDN)
- [x] thumbnail.webp generated at 600×400, ~12KB
