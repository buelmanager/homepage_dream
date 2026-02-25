# Clone Plan — VOSSLER & SON (luthier-atelier)

## Concept Summary

A luxury single-page landing for a fictional 4th-generation master luthier atelier.
The page draws on the heritage and aesthetics of Cremona stringed-instrument making —
warm amber tones, serif typography, meticulous detail, and slow purposeful animations.

---

## Layout Architecture

```
[Preloader]            SVG violin draw + brand reveal
[Navbar]               Fixed, minimal
[Hero]                 Cinematic full-screen — Type A
[Heritage]             2-col: text + timeline
[Instruments]          3-col card grid
[Process]              7-col horizontal step layout
[Notable Instruments]  3-col card grid
[Workshop Visit]       2-col: gallery + form
[Testimonials]         3-col quote cards
[Commission]           2-col: features + form
[Footer]               4-col footer
```

---

## Hero Type

**Type A — Cinematic Full-Screen**
- Full viewport height
- Background image with subtle zoom animation (18s)
- Gradient overlay (max 0.65 opacity)
- Oversized italic headline
- Floating Est. badge bottom-right
- Scroll hint at bottom center

---

## Scroll Indicator

Fixed left column. 8 amber dots, one per section. Active dot glows amber.
Section label appears on hover and active state.

---

## Color Decisions

Background darkest (`--bg: #1E1509`) chosen for warm amber glow — matches the
natural resin and varnish imagery of the craft. All variants verified avg ≥ 20.

---

## Typography Rationale

- `Playfair Display` — Italic for headlines reflects the elegance and slight formality
  of classical instrument provenance. Widely used in luxury brand contexts.
- `Crimson Pro` — A humanist serif for body text; warm, legible at small sizes,
  and appropriate for a heritage craft brand.

---

## Animation Strategy

All reveal animations use scroll-triggered GSAP with:
- `y: 20–28px` initial offset
- `duration: 0.9–1.1s`
- `ease: 'power2.out'`
- `stagger: 0.08–0.12` for grid items
- `start: 'top 82–85%'` — moderate trigger point
- `immediateRender: false` on all scroll-triggered `from()` calls

Hero animations run after preloader completes (no scroll trigger — timeline-based).

---

## Forms

Two forms included:
1. **Workshop Visit Booking** — Name, email, instrument, date, notes
2. **Commission Enquiry** — Full intake form: name, contact, instrument, repertoire, budget, message

Both use `onsubmit="return false;"` (demo/no-backend).

---

## Fictional Data

All persons, soloists, and instruments are entirely fictional:
- Isabelle Fontaine-Renard — Principal Soloist, Orchestre de Paris
- Rafael Dąbrowski — Solo Cellist, Berlin Staatskapelle
- Yuki Tanigawa — Principal Viola, NHK Symphony Orchestra
- Instruments: "Amber Dusk" (2019), "Montagna" (2021), "Golden Hour" (2023)
