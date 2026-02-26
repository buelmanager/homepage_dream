# VELOX ATELIER — Custom Bicycle Atelier

**Slug:** `20260226_custom-bicycle`
**Type:** Multi-page (5 pages)
**Created:** 2026-02-26

## Brand
VELOX ATELIER is a fictional bespoke handbuilt bicycle atelier specializing in titanium and carbon frames with custom geometry. Based in Lyon, France. Tone: engineering precision, cycling culture luxury, minimal speed aesthetic.

## Pages
- `index.html` — Homepage with preloader, hero, stats, builds, process teaser, materials, testimonials, CTA
- `about.html` — The Atelier: founder story, philosophy, workshop tour, team, certifications
- `builds.html` — Build portfolio with filter (All/Road/Gravel/Track/Touring), 9 builds, deep-dive, client gallery
- `process.html` — 8-step process, 47-day timeline, FAQ accordion
- `contact.html` — Commission form, what happens next, studio visit booking, contact info

## Color System
- `--bg: #141414` (avg=20 — passes threshold)
- `--surface: #1C1C1C` (avg=28 — passes threshold)
- `--accent: #E8C840` (racing yellow)
- `--accent2: #A8A8A8` (titanium silver)
- Footer: `background: var(--bg)` only — no hardcoded dark hex

## GSAP Rules Applied
- GSAP 3.12.2 from cdnjs
- All `gsap.from()` with scrollTrigger have `immediateRender: false` at TOP LEVEL
- No `opacity: 0` set in CSS on content elements
- Scroll indicator shown via preloader callback AND setTimeout(4000)
- Preloader uses bicycle wheel SVG spin + spoke draw animation

## Unsplash Images Used
All images confirmed in known-valid list or standard public images:
- `1511994298241-3b73bc6c6f67` — bicycle road racing (hero, builds subhero)
- `1507035895480-2b3156c31fc8` — bicycle frame detail
- `1502744688674-c619d1586c9e` — cycling mountain (contact subhero)
- `1485965120184-e220f721d03e` — road bicycle side
- `1571068316344-75bc76f77890` — titanium material
- `1517649281203-dad836b7b7e7` — workshop tools
- `1544966503-7cc5ac882d5b` — cycling lifestyle (about subhero)
- `1558618666-fcd25c85cd64` — dark metallic/frame detail (process subhero)
