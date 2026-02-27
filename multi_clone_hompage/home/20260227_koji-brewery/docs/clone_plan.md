# Clone Plan — KOJI Fermentation Studio

**Template:** `20260227_koji-brewery`
**Created:** 2026-02-27
**Status:** Complete

---

## Concept Brief

KOJI Fermentation Studio is an original luxury landing page concept for an artisan koji brewery. The brand is inspired by the centuries-old Japanese tradition of cultivating Aspergillus oryzae mold (koji) for the production of sake, miso, shoyu, and fermented condiments. No specific real-world brand was cloned; the concept is entirely original.

---

## Design Decisions

### Hero Layout: TYPE G
Selected for its scroll-driven text transformation behavior, which mirrors the slow, patient transformation process that is central to the koji brand narrative. The oversized typographic words "KOJI" and "LIVING" act as both brand statement and visual anchor.

**Implementation:**
- `.word-1` (KOJI) and `.word-2` (LIVING) receive independent parallax rates on scroll via ScrollTrigger scrub
- `.hero-bg` receives a counter-parallax movement (moves upward as user scrolls) at a slower rate
- Initial entrance animation uses GSAP timeline with staggered fade-and-rise

### Color Palette: P10 Dark Olive
The dark olive palette was chosen for its association with:
- The aged cedar of fermentation chambers (muro)
- Koji mold's characteristic green-olive mycelium at the reproductive stage
- Earth, nature, and biological living processes
- Japanese wabi-sabi aesthetics of purposeful imperfection

### Typography: F7 Libre Baskerville + Source Sans 3
- Libre Baskerville (serif): Used for all brand names, section titles, product names, and pull quotes. Its slight irregularity feels hand-crafted rather than corporate.
- Source Sans 3 (sans): Used for labels, body copy, navigation. Provides clean legibility against the dark backgrounds.

### Animation: A2 Whisper
Parameters: `duration:1.5, y:14, stagger:0.06, ease:'power1.out', immediateRender:false`
The slowest, most restrained animation style in the design system — appropriate for a brand built around patience and long fermentation times.

---

## Page Architecture

```
index.html          → Full experience entry point (1200+ lines)
about.html          → Brand story, brewer profile, koji science (700+ lines)
collection.html     → Product catalog, pairing guide (700+ lines)
process.html        → Cultivation process, muro specifications (700+ lines)
contact.html        → Inquiry form, wholesale, masterclasses (600+ lines)
```

---

## Section Map (index.html)

| Order | Section | Component Type |
|---|---|---|
| 1 | Preloader | Fixed overlay |
| 2 | Scroll Indicator | Fixed UI element |
| 3 | Navbar | Fixed header |
| 4 | Hero (TYPE G) | Full-viewport |
| 5 | Stats | 4-column grid |
| 6 | Philosophy | 3-column CSS grid |
| 7 | Product Collection | 4-column grid |
| 8 | Fermentation Chamber | Ambient full-width feature |
| 9 | Process | 2-column + steps list |
| 10 | Heritage | 2-column image/text |
| 11 | Testimonials | Swiper carousel |
| 12 | Order Form | 2-column |
| 13 | Footer | 4-column |

---

## GSAP Compliance Checklist

- [x] `immediateRender: false` at top level of all `gsap.from()` calls
- [x] No `opacity: 0` in CSS on content elements
- [x] Scroll indicator revealed in preloader `onComplete` AND `setTimeout(4000)` fallback
- [x] Philosophy grid: `display: grid` (NOT `display: flex`)
- [x] Collection grid: `overflow: visible` on parent
- [x] SplitText polyfill before any GSAP SplitText usage
- [x] Hero background parallax via ScrollTrigger scrub

---

## CDN Dependencies

```
GSAP 3.12.2 (gsap.min.js)          — cdnjs.cloudflare.com
GSAP 3.12.2 (ScrollTrigger.min.js) — cdnjs.cloudflare.com
Swiper 11 (swiper-bundle.min.css)   — cdn.jsdelivr.net
Swiper 11 (swiper-bundle.min.js)    — cdn.jsdelivr.net
Google Fonts                         — fonts.googleapis.com
```

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `max-width: 1024px` | Stats 4→2 col, Collection 4→2 col |
| `max-width: 768px` | Nav → hamburger, most grids → 1col, process image hidden |
| `max-width: 480px` | Inquiry grid 2→1 col |
