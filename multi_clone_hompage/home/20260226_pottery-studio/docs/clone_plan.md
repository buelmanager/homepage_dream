# Clone Plan — TERRA FORMA Pottery Studio

## Status: COMPLETE

All tasks completed 2026-02-26.

---

## Checklist

### Setup
- [x] Create directory structure (`/home/20260226_pottery-studio/`)
- [x] Create `/images/` subdirectory
- [x] Create `/docs/` subdirectory

### Pages
- [x] `index.html` — Homepage with preloader, hero, stats, collection grid, process, classes teaser, testimonials, CTA, footer
- [x] `about.html` — Our Story: subhero, founding story 2-col, master potter profile, philosophy 4 pillars, gallery, awards timeline, footer
- [x] `collection.html` — Subhero, filter tabs (All/Vessels/Bowls/Plates/Sculptural), 12-item masonry grid, piece modal, bespoke CTA, footer
- [x] `classes.html` — Subhero, 4 class types, schedule table, what to expect, 2 instructor profiles, booking form, footer
- [x] `contact.html` — Subhero, studio address, Google Maps embed, hours, commission inquiry form, visit booking, footer

### Shared Elements
- [x] Consistent navbar across all 5 pages (logo + 5 links + "Commission" CTA)
- [x] Active state on each page's nav link
- [x] Consistent footer with `background: var(--bg)` only
- [x] GSAP 3.12.2 + ScrollTrigger from cdnjs on all pages
- [x] `immediateRender: false` at top level of all gsap.from() with scrollTrigger
- [x] No `opacity: 0` in CSS on content elements
- [x] Inline SplitText polyfill on index.html
- [x] Responsive layout for mobile/tablet/desktop

### Color Compliance
- [x] `--bg: #1E1710` avg=21.3 (≥20 pass)
- [x] `--surface: #271E14` avg=24.3 (≥20 pass)
- [x] All section backgrounds use CSS variables only
- [x] Footer: `background: var(--bg)` — no hardcoded dark hex
- [x] Hero overlay ≤ 0.65 opacity (max 0.62 used)
- [x] All subhero overlays ≤ 0.65 opacity

### Scroll Indicator (index.html)
- [x] Fixed left position
- [x] Terracotta accent color
- [x] IntersectionObserver-driven section detection
- [x] 5 dot markers matching 5 data-section elements
- [x] Visible after preloader callback + setTimeout 4000ms

### Features
- [x] Clay wheel SVG animation preloader (index.html)
- [x] Hero parallax background
- [x] Stats counter animation
- [x] Collection masonry grid
- [x] Collection filter tabs (client-side, no reload)
- [x] Piece detail modal with full specs
- [x] Schedule table (classes.html)
- [x] Booking form with JS confirmation
- [x] Commission inquiry form with JS confirmation
- [x] Google Maps embed (contact.html)
- [x] Awards timeline (about.html)

### Documentation
- [x] `meta.json` — tier:PRO, language:English, tags
- [x] `readme.md`
- [x] `docs/clone_plan.md`
- [x] `docs/originality_report.md`
- [x] `docs/image_validation.md`

### QA
- [x] `python3 scripts/check-sections.py 20260226_pottery-studio` — all sections pass
- [x] `python3 scripts/capture-page.py 20260226_pottery-studio` — fullpage.png generated
- [x] `thumbnail.webp` generated from fullpage.png
