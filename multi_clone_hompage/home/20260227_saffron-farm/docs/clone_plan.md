# Clone Plan — ZAFARAN Saffron Estate

**Date:** 2026-02-27
**Slug:** 20260227_saffron-farm
**Type:** Original multi-page luxury landing site (not a clone)

## Concept Origin

This is an original concept site — not cloned from any existing public website. The ZAFARAN brand, layout, and content were designed from scratch using the project's standard design brief system.

**Inspiration references (structural only, no copying):**
- Persian luxury brand aesthetics (Norooz, Parsa Saffron)
- Agricultural estate websites (Mas Salagros, Belazu)
- Spice provenance storytelling (Diaspora Co., Burlap & Barrel)

## Page Architecture

```
index.html          (main landing, Hero TYPE G)
├── about.html      (estate story, family, values, gallery)
├── collection.html (product catalog, filters, gift sets)
├── process.html    (harvest timeline, ISO grading)
└── contact.html    (tabbed forms: retail / wholesale / sample)
```

## Hero Strategy — TYPE G

Type G is a scroll-driven text transform where the brand name letters separate and scale at different rates as the user scrolls, creating a cinematic depth effect. Implementation:

- `word-1` (ZAFAR) moves left and shrinks slightly
- `word-2` (AN in accent color) moves right and grows slightly
- Background parallax via `yPercent: 20` on scroll
- Both words animate IN from y:60 on page load
- Tagline and CTA animate in with stagger delay

## Content Decisions

- **Brand name split:** ZAFAR / AN — visually emphasizes the Persian suffix "-an" while creating a typographic contrast (ivory + accent)
- **Stats section:** 3 stigmas / flower, 70,000 flowers / kg, Khorasan origin, 3,500 year history — all factually accurate for saffron
- **ISO 3632 grading:** Referenced throughout for professional credibility
- **Testimonial personas:** Chef, hotelier, spice merchant, food writer — realistic buyer archetypes

## Design Token Application

| Section | Background | Accent Use |
|---|---|---|
| Hero | Hero image + overlay | Word-2 color |
| Stats | --surface | Stat numbers |
| Philosophy | --bg | Card top border hover |
| Collection | --surface | Badges, prices |
| Estate | --bg | Divider, buttons |
| Process | --surface | Step numbers |
| Heritage | --bg / --surface2 | Timeline years |
| Testimonials | --surface | Quote marks |
| Order | --bg | Icons, CTA button |
| Footer | --bg only | Column headers |
