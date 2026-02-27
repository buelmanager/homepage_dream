# Clone Plan — FILAMENT Silk Weaving Atelier

**Slug:** `20260227_silk-weaving`
**Created:** 2026-02-27
**Status:** COMPLETE

## Concept

A luxury multi-page digital presence for FILAMENT, a fictional heritage silk weaving atelier established in Lyon in 1982. The brand communicates artisanal precision, textile heritage, and a cool ethereal luxury tone appropriate to the highest echelon of the handmade textile market.

## Design Decisions

### Color Palette — P5 Arctic Slate
Chosen for its alignment with the cool shimmer of silk. The blue-grey accent (`#A0C4D8`) evokes raw silk's natural light-diffusing quality. Deep navy-black backgrounds (`#141820`) create the sense of a dimly lit atelier or luxury showroom.

### Typography — F7 Libre Baskerville + Source Sans 3
Libre Baskerville (serif) brings classical typographic authority to headings and the brand mark — referencing the long history of printing and textile catalogues. Source Sans 3 (sans-serif) at weight 300 provides airy, legible body text that doesn't compete with the imagery.

### Hero Type B — Parallax
Two layered background images with mousemove-driven parallax depth at different speeds (layer-1: ×18/12px, layer-2: ×28/18px). The floating badge ("Heritage Weavers Since 1982") rotates via CSS animation and uses an SVG textPath circle for the circular text.

### Animation — A1 Standard
All scroll-triggered animations use: `opacity:0, y:24, duration:1.1, ease:'power2.out', stagger:0.10, immediateRender:false`

## Page Architecture

```
index.html
  ├── Preloader (animated count bar)
  ├── Scroll Indicator (fixed, fades on scroll)
  ├── Navbar (transparent → frosted on scroll)
  ├── Hero (Type B — dual-layer parallax)
  │   └── Floating badge (SVG circular text)
  ├── Stats Strip (40+ Years / 200+ Patterns / 8 Master Weavers / 12 Countries)
  ├── Philosophy (CSS grid 3-col)
  ├── Collection Grid (featured silks)
  ├── Atelier Section (visual stack + features)
  ├── Process (5-step horizontal)
  ├── Heritage Timeline (split layout)
  ├── Testimonials (Swiper carousel)
  ├── Commission Form (split layout)
  └── Footer (4-col grid)

about.html
  ├── Studio history narrative
  ├── Founder quote block
  ├── 8 Master Weaver profiles (grid)
  ├── Loom Heritage (visual + stats)
  └── Values (3-col grid)

collection.html
  ├── Filter tabs
  ├── Dupioni Silk (featured detail)
  ├── Charmeuse Silk (featured detail)
  ├── Jacquard Silk (featured detail)
  ├── Organza + Custom (2-col cards)
  └── Bespoke consultation CTA

process.html
  ├── Process overview header
  ├── Stage 1: Reeling (detailed)
  ├── Stage 2: Dyeing (detailed)
  ├── Stage 3: Warping (detailed)
  ├── Stage 4: Weaving (detailed)
  ├── Stage 5: Finishing (detailed)
  ├── Materials philosophy (3-col)
  └── Quality metrics grid

contact.html
  ├── Commission enquiry form (full)
  ├── FAQ accordion
  ├── Studio contact details
  └── Visit the atelier section
```

## Technical Implementation Notes

- SplitText polyfill included inline before Swiper CDN
- GSAP ScrollTrigger registered via `gsap.registerPlugin(ScrollTrigger)`
- Preloader fires hero animation on completion; scroll indicator shown via preloader callback and setTimeout(4000) fallback
- Hero parallax uses rAF loop with lerp (0.06 / 0.04) for smooth, lag-free tracking
- Navbar state changes via `window.addEventListener('scroll')` adding `.scrolled` class
- FAQ accordion uses vanilla JS toggle; Swiper initialized with 3 breakpoints
- Form submit intercepted to show confirmation state without page reload
