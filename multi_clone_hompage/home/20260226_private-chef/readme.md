# TABLE PRIVÉE — Your Kitchen, Our Canvas

**Slug:** `20260226_private-chef`
**Type:** Multi-page (7 pages)
**Industry:** Ultra-luxury private chef & catering service
**Created:** 2026-02-26
**Tier:** PRO — £49

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — preloader (SVG knife draw), hero, stats, services teaser, chef teaser, philosophy, testimonials, booking CTA |
| `about.html` | The Chefs — lead chef biography, team profiles, kitchen philosophy, suppliers, awards & press |
| `menu.html` | The Menu — seasonal tasting menus, signature dishes, sample course listing, wine pairing, dietary accommodations |
| `process.html` | An Evening with Us — consultation, menu planning timeline, ingredient sourcing, evening schedule, white-glove standards |
| `contact.html` | Reserve Your Evening — booking form, availability calendar, how it works, contact info |
| `services.html` | Services — 4 service types with inclusions + pricing, process steps, gallery |
| `menus.html` | Menus (legacy) — season selector, dietary accommodations, signature gallery, custom request form |

## Navigation (Primary)

All primary pages link: `index.html` → `about.html` → `menu.html` → `process.html` → `contact.html`

## Color System

- `--bg: #181210` — avg 19.3 (borderline — no additional dark overlays stacked)
- `--surface: #221810` — avg 24.3
- `--accent: #D4A060` — aged gold
- `--accent2: #8B1A1A` — deep burgundy
- Footer: `background: var(--bg)` only — all pages

## Typography

- Heading: Cormorant Garamond (Google Fonts, ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500)
- Body: Lato (Google Fonts, wght@300;400;700)

## GSAP Rules Applied

- GSAP 3.12.2 + ScrollTrigger from cdnjs
- All `gsap.from()` calls with ScrollTrigger have `immediateRender: false` at top level (NOT inside scrollTrigger:{})
- No `opacity: 0` in CSS on content elements
- SplitText not used (avoids CDN premium dependency)
- Animation params: y: 20–28px, duration: 0.9–1.2s, ease: 'power2.out', stagger: 0.08–0.12, start: 'top 85%'

## Unsplash Images Used

| ID | Description |
|----|-------------|
| `1414235077428-338989a2e8c0` | Fine dining elegant table setting |
| `1556909114-f6e7ad7d3136` | Chef cooking in kitchen |
| `1551218808-94e220e084d2` | Plated dish luxury close-up |
| `1504674900247-0877df9cc836` | Fresh food ingredients |
| `1567620905732-2d1ec7ab7445` | Kitchen preparation |
| `1540189549336-e6e99d803c68` | Elegantly set dining table |
| `1484980972926-edee96e0960d` | Chocolate dessert |
| `1529543544282-ea669407fca3` | Risotto / pasta dish |
| `1510812431401-41d2bd2722f3` | Wine glasses / cellar |
| `1565958011703-44f9829ba187` | Dessert plating artisan |

## Thumbnail

- `images/thumbnail.webp` — 600px wide, 80% quality WebP
- `images/fullpage.png` — gitignored (full-page screenshot)

## docs/

- `docs/clone_plan.md` — build checklist with progress tracking
- `docs/originality_report.md` — brand, design and content originality declaration
- `docs/image_validation.md` — Unsplash image IDs with validation status
