# Clone Plan — TABLE PRIVÉE

**Slug:** 20260226_private-chef
**Created:** 2026-02-26

## Progress: 7/7

Updated: 2026-02-26

## Checklist

- [x] Directory structure created (`/images`, `/docs`)
- [x] Color system defined — bg #181210 avg≈19.3, surface #221810 avg≈24.3, no additional overlays stacked
- [x] `index.html` — Homepage with SVG knife preloader, hero, stats, services teaser, chef teaser, philosophy, testimonials, booking CTA, footer
- [x] `about.html` — The Chefs with subhero, lead biography (credentials timeline), team grid, kitchen philosophy, supplier network (8 suppliers), awards & press, footer
- [x] `menu.html` — The Menu with subhero, seasonal tasting menus (3 cards), signature dishes (4 grid), sample 7-course menu with allergens, wine pairing (4 selections), dietary accommodations (4 cards), CTA band
- [x] `process.html` — An Evening with Us with subhero, 4-step process overview, consultation detail, menu planning timeline, ingredient sourcing (3-grid), evening schedule (6 stages), white-glove standards, CTA band
- [x] `contact.html` — Reserve Your Evening with subhero, 4 event type cards, booking inquiry form (full fields), pricing tiers (3 cards), FAQ accordion (6 items), contact info, footer
- [x] `services.html` — Services with 4 service types, inclusions, pricing, process steps, CTA
- [x] `menus.html` — Menus with season selector, dietary accommodations, signature gallery, form
- [x] `meta.json` — Full PRO tier format with all required fields
- [x] `readme.md` — Complete 7-page documentation
- [x] `docs/clone_plan.md` — This file
- [x] `docs/originality_report.md` — Brand, design, content originality declaration
- [x] `docs/image_validation.md` — All image IDs validated
- [x] GSAP `immediateRender: false` at top level in all pages — verified
- [x] No `opacity: 0` in CSS on content elements — all pages
- [x] Footer `background: var(--bg)` only — all pages
- [x] Primary nav: index → about → menu → process → contact — consistent in new pages
- [x] `images/thumbnail.webp` — 31KB WebP, 600px wide
- [x] `images/fullpage.png` — gitignored

## Nav Structure (Primary 5 Pages)

```
Home (index.html) | The Chefs (about.html) | Menus (menu.html) | Our Process (process.html) | Contact (contact.html)
```

## Key Design Decisions

1. bg #181210 avg≈19.3 — slightly below 20 threshold. Compensated by NO additional dark overlays on any section or footer. Surfaces use var(--surface) = #221810 avg≈24.3 for cards.
2. Roman numeral philosophy items (I / II / III) — distinctive typographic motif
3. SVG knife-draw preloader — unique per MEMORY.md "no duplicate preloaders"
4. Wine pairing section in menu.html — adds premium content depth
5. Timeline-based evening schedule in process.html — narrative structure
6. FAQ accordion in contact.html — reduces friction for high-value enquiries
