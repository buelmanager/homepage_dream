# Clone Plan — ALBA Bridal Couture Atelier

## Project Overview

**Template:** `20260227_bridal-couture`
**Date Created:** 2026-02-27
**Type:** Multi-page luxury landing page (5 HTML files)
**Category:** Fashion / Bridal / Couture / Luxury

---

## Concept Development

### Brand Identity
- **Name:** ALBA — from the Latin for "dawn" and "white" — both appropriate for a bridal house
- **Location:** 12 Rue de Passy, 75016 Paris, France
- **Speciality:** Bespoke bridal couture, one gown per bride, eighteen months, twelve fittings
- **USP:** Paris haute couture training pedigree + severe limitation of annual commissions = perceived exclusivity
- **Target audience:** Ultra-high-net-worth brides globally, primarily Europe, USA, Middle East, Japan

### Tagline Development
Selected: **"Your Most Beautiful Day, Begins Here"**
Alternatives considered:
- "Made for Her. Only Her."
- "The Gown That Disappears Into the Woman"
- "Where Couture Meets the Intimate"

---

## Design Architecture

### Color Rationale — P4 Deep Burgundy
The burgundy palette was chosen to evoke romance without cliché pink, luxury without harshness:
- `--bg: #1A0A0E` — deep burgundy-black, creates the cinematic dark atmosphere of haute couture
- `--surface: #241016` — slightly lifted, used for cards and alternating sections
- `--accent: #C96A8A` — dusty rose-burgundy: feminine, couture, not saccharine
- `--ivory: #F0DCE4` — warm pinkish ivory: the colour of uncut silk, not cold white
- `--smoke: #A08088` — rose-grey: sophisticated secondary text colour

### Typography Selection — F8 Bodoni Moda + Work Sans
- **Bodoni Moda:** Optical-size variable serif with high contrast. Used for all headings, hero title, and editorial pull-quotes. At large optical sizes (opsz 96) the hairline serifs create maximum luxury impression. The italic variant adds romantic softness.
- **Work Sans:** Geometric humanist sans-serif. Weight 300 for body text creates lightness; weight 500 for CTAs and labels provides clarity. The pairing creates a tension between classical couture (Bodoni) and modern atelier (Work Sans) that mirrors the brand's own positioning.

### Hero Approach — Type E Grid/Pattern Canvas
Type E selected because:
- The lace/diamond dot pattern on canvas provides a bespoke couture visual language — referencing actual lace construction patterns
- The animated drift (upward floating) creates motion without distracting from the central brand statement
- Corner accent frames (CSS `::before`/`::after`) mimic fashion photography borders and couture atelier aesthetics
- Distinct from all Type A cinematic heroes, which would be the obvious choice for bridal

---

## Page Architecture

| Page | Primary Goal | Key Sections |
|---|---|---|
| `index.html` | Brand statement + emotional aspiration | Hero(E), Stats, Philosophy(grid), Collection, Atelier, Process, Heritage, Testimonials, CTA |
| `about.html` | Trust — founder credibility, Parisian authority | Stats, Origin story, Team, Paris credentials, Timeline |
| `collection.html` | Desire + browse | Filter bar, 5 gown lines, Fabrics, Commission note |
| `process.html` | Education — justify 18-month lead time | 6-act process, Fitting schedule, Mill sourcing, Delivery contents |
| `contact.html` | Conversion — consultation request | Tabbed form, Contact sidebar, Services grid |

---

## Section-by-Section Plan (index.html)

### Preloader
- Dual-ring CSS animation in accent colours
- Inner ring rotates in opposite direction at different speed — sophisticated motion
- GSAP fade-out on `window.load`, delay 1.6s

### Hero (Type E)
- Background: local `images/hero-1.webp`
- Canvas: diamond/lace dot pattern, 44px grid, diamond offset per row
- Overlay: dual radial+linear gradient darkening from edges
- Corner accents: pure CSS `::before`/`::after` L-shaped corners
- Title: SplitText polyfill char-by-char reveal, stagger 0.08s
- Parallax: window.scroll → translateY on `.hero-bg`

### Stats Bar
- 4 KPIs: 500+ Brides / 18 Months Lead Time / 12 Fittings / Paris Trained
- CSS Grid 4 columns, border-right dividers

### Philosophy Grid
- **CSS Grid 3 columns** (not flex — per project rules)
- Cards with top-border accent line and large faded numerals
- Content: three pillars (The First Conversation / Living Fabric / The Fitting as Ritual)

### Gown Collection
- Asymmetric CSS Grid: `1.6fr 1fr 1fr`
- Large card spans 2 rows, has minimum height 640px
- Hover: image scale, overlay darkens, card-info translateY

### Atelier Split
- 2-column grid, main image + accent image positioned absolutely bottom-right
- 3 feature items with icon boxes

### Process Timeline
- 6 steps horizontal, connecting line `::before`
- Roman numerals in circular containers
- Text + body copy per step

### Heritage Split
- 2-column: content (text + pull-quote) + visual (tall image + badge overlay)
- Founder quote in bordered block

### Testimonials (Swiper)
- 4 testimonial cards in Swiper carousel
- Opening quotation mark as decorative element via `::before`
- Autoplay 6s, paginated

### Consultation CTA
- Radial glow background via `::before` pseudo-element
- Two CTAs: primary + outline

---

## Animation Plan (A4 Dramatic)

All GSAP animations: `immediateRender: false` at top level.

| Element | Trigger | Animation |
|---|---|---|
| Preloader | `window.load` | `opacity: 0`, delay 1.6s |
| Hero chars | After preloader | `y: 40 → 0`, stagger 0.08s, duration 1.2 |
| Hero eyebrow, subtitle, CTA | After preloader | `y: 24 → 0`, sequential delay |
| Scroll indicator | Post-preloader + setTimeout 4000 | class `visible` |
| Stats items | `top 82%` | `opacity: 0, y: 40`, stagger 0.15 |
| Philosophy header | `top 80%` | `opacity: 0, y: 40` |
| Phil cards | `top 82%` | `opacity: 0, y: 40`, stagger 0.15 |
| Gown cards | `top 80%` | `opacity: 0, y: 40`, stagger 0.15 |
| Atelier visual | `top 80%` | `opacity: 0, x: -40` |
| Atelier content | `top 80%` | `opacity: 0, x: 40` |
| Process steps | `top 82%` | `opacity: 0, y: 40`, stagger 0.15 |
| Heritage content | `top 80%` | `opacity: 0, x: -40` |
| Heritage visual | `top 80%` | `opacity: 0, x: 40` |
| CTA elements | `top 80%` | `opacity: 0, y: 40`, stagger 0.15 |

---

## Navigation Architecture

```
ALBA (logo → index.html)
├── Collection → collection.html
├── Atelier → process.html
├── Our Story → about.html
└── [Begin Journey] → contact.html (CTA button)
```

All `href` values point to real HTML files. Active page state via `.active` class on each page.

---

## Responsive Breakpoints

| Breakpoint | Grid Changes |
|---|---|
| `≤ 1100px` | Stats: 2×2; Philosophy: 2-col; Collection: 2-col; Process: 3 steps wide; Footer: 2-col |
| `≤ 768px` | All grids: 1-col; Nav hidden; scroll indicator hidden; padding reduced to 24px |

---

## Quality Checklist

- [x] No CSS `opacity: 0` on content elements
- [x] `immediateRender: false` at top level of all `gsap.from()` calls
- [x] Scroll indicator shown in preloader callback AND setTimeout 4000ms
- [x] Philosophy section uses CSS Grid (`display: grid`), not flex
- [x] All `href` values point to actual pages (no bare `#` anchors)
- [x] Active nav state on each page
- [x] All 5 pages have footer
- [x] All images have descriptive `alt` attributes
- [x] `loading="lazy"` on all below-fold images
- [x] GSAP loaded from cdnjs (no premium plugins)
- [x] SplitText polyfill embedded (not Club GSAP CDN)
- [x] Swiper loaded from jsDelivr CDN
- [x] Custom scrollbar defined
- [x] Mobile responsive with media queries at 1100px and 768px
- [x] English only — no mixed languages
- [x] Footer uses `var(--bg)` only — no hardcoded dark hex
- [x] Canvas animation uses `requestAnimationFrame` loop
- [x] Canvas resizes on window resize
