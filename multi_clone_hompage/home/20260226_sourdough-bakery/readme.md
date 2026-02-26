# LEVAIN — Time, Grain, and Living Culture

A luxury multi-page landing page for LEVAIN, an artisan sourdough bakery and bread school set in Paris.

## Brand

- **Name:** LEVAIN
- **Concept:** Luxury artisan sourdough bakery. Every loaf crafted with 30-year-old starter cultures, stone-milled heritage grain, and 48-hour cold fermentation. Intimate bread-making masterclasses.
- **Tagline:** "Time, Grain, and Living Culture."
- **Location:** Paris, France (Est. 1994)

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — preloader, cinematic hero, 5 sections, footer |
| `about.html` | Brand story, timeline, starter culture, heritage grain varieties, baker profiles |
| `bread.html` | Bread range with 6 product cards, seasonal feature, baking process, nutrition |
| `classes.html` | 4 masterclass cards, schedule table, private sessions, testimonials |
| `contact.html` | Visit info, bread pre-order form, class booking form, subscription sign-up |

## Design System

```
--bg:         #1F1A10  (avg 24.3 — passes dark threshold check)
--surface:    #2A231A
--accent:     #C89040  (wheat gold)
--accent2:    #E8C090  (light wheat)
--text:       #F5EDD8
--text-muted: #907050
```

**Fonts:** Playfair Display (headings) · Inter (body)

## Technical Notes

- All GSAP animations use `immediateRender: false` at top level (GSAP bug prevention)
- No CSS `opacity: 0` on content elements
- GSAP 3.12.5 + ScrollTrigger via cdnjs CDN
- Google Fonts via preconnect
- Responsive breakpoint at 900px
- All images served from Unsplash CDN with explicit dimensions

## Primary Unsplash Images

| URL | Usage |
|-----|-------|
| `photo-1509440159596-0249088772ff` | Hero, primary bread shots |
| `photo-1584917865442-de89df76afd3` | Dark rye, fallback |
| `photo-1558618666-fcd25c85cd64` | Einkorn, scoring class |
| `photo-1524504388940-b1c1722653e1` | Starter culture, heritage grain |
| `photo-1553361371-9b22f78e8b1d` | Spelt levain, private sessions |
| `photo-1528360983277-13d401cdc186` | Baker Marcel portrait |
| `photo-1551488831-00ddcb6c6bd3` | Baker Élise portrait |
| `photo-1503342394128-c104d54dba01` | Baker Kenji portrait |
| `photo-1512327536842-5aa37d1ba3e3` | Paris map/visit section |
| `photo-1572635196237-14b3f281503f` | Emmer farro, testimonial |

## File Structure

```
20260226_sourdough-bakery/
├── index.html
├── about.html
├── bread.html
├── classes.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
