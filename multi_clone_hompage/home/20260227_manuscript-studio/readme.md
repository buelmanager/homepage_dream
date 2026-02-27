# SCRIPTORIUM — Illuminated Manuscript Studio

**Slug:** `20260227_manuscript-studio`
**Created:** 2026-02-27
**Tier:** Free
**Industry:** Fine Art / Medieval Manuscript Illumination
**Hero Layout:** Type G — Scroll-Driven Text Transform
**Palette:** P8 Onyx Stone
**Font Pair:** F9 Spectral + Mulish
**Animation:** A4 Dramatic

## Brand

**Studio:** SCRIPTORIUM
**Tagline:** Written in Gold, Read Through Ages
**Tone:** Monastic gravitas, medieval literary luxury, timeless written art
**Location:** Oxfordshire, England (fictional)

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Full home page with Hero G, Stats, Philosophy, Collection, Workshop, Process, Heritage, Testimonials, Form | 1200+ |
| `about.html` | Studio history, master illuminators, values, recognition | 600+ |
| `collection.html` | Four commission types: Book of Hours, Wedding, Heraldic, Poem Book | 620+ |
| `process.html` | Six-stage process detail, materials, timeline diagram, FAQ | 530+ |
| `contact.html` | Commission enquiry form with sidebar, ethos, info grid | 510+ |

## Design System

### Colors (P8 Onyx Stone)
```css
--bg: #181818;         /* avg RGB = 24 — passes threshold */
--surface: #222222;    /* avg RGB = 34 */
--surface2: #2A2A2A;   /* avg RGB = 42 */
--accent: #B0B0C0;
--accent-light: #D0D0E0;
--accent-dark: #808090;
--ivory: #EEEEF2;
--smoke: #909090;
--muted: #606060;
--border: #1E1E1E;
```

### Typography (F9)
- Serif: Spectral (300, 400, 600, italic 300)
- Sans: Mulish (300, 400, 500)
- Google Fonts CDN

### Hero — Type G
Scroll-driven text transform: the words SCRIPTO / RIUM scale outward and letter-spacing expands as the user scrolls through a 220vh sticky section. Background parallax included. Tagline and CTA fade on scroll.

### Animation (A4 Dramatic)
- `opacity: 0, y: 40, duration: 1.2, ease: 'power2.inOut', stagger: 0.15`
- All `gsap.from()` calls use `immediateRender: false`
- No `opacity: 0` in CSS on content elements
- Scroll indicator shown in preloader callback and `setTimeout(4000)`

## Technical

- SplitText polyfill (Club GSAP replacement) embedded in index.html
- GSAP 3.12.2 from cdnjs
- ScrollTrigger 3.12.2 from cdnjs
- Swiper 11 from jsDelivr
- Philosophy section uses CSS `display: grid` (3-col)
- Custom scrollbar via `::-webkit-scrollbar`
- Mobile responsive with hamburger nav
- Form submit handler (no backend, visual confirmation only)

## Images Required

Place in `images/` directory:
- `hero-1.webp` through `hero-4.webp`
- `product-1.webp` through `product-4.webp`
- `ambient-1.webp` through `ambient-3.webp`
- `thumbnail.webp` (600px wide, for manifest)

## Notes

- All sections maintain avg RGB > 15 (no dark section warnings)
- Footer uses `background: var(--bg)` only
- No hardcoded dark hex in any section background
