# Clone Plan — MERIDIAN GALLERY

**Task:** Build luxury landing page for contemporary fine art gallery
**Status:** COMPLETE
**Date:** 2026-02-26

---

## Checklist

- [x] Project directory created (`20260226_art-gallery/`)
- [x] Images directory created (`images/`)
- [x] Docs directory created (`docs/`)
- [x] `index.html` written (~2000+ lines, all sections, inline CSS+JS)
- [x] Preloader section — SVG frame line drawing animation
- [x] Navbar — minimal, wordmark logo, scroll state, CTA button
- [x] Hero section — 2-column editorial layout, exhibition tag, stats
- [x] Marquee strip — dark bg, scrolling text
- [x] Current Exhibition section — large image + full description
- [x] Artists section — 3x2 grid, portrait images, grayscale hover
- [x] Collection Highlights — masonry 3-column grid, 6 artworks
- [x] Art Fairs — dark section, numbered list, 4 fairs
- [x] About section — 2-column, story + values grid
- [x] Contact/Visit — hours, address, inquiry form
- [x] Footer — surface bg, 4-column layout, social, legal
- [x] Scroll indicator — fixed left, dark lines, section counter
- [x] Color system verified (light theme, avg ≥ 20)
- [x] GSAP 3.12.2 + ScrollTrigger from cdnjs
- [x] All `gsap.from()` with scrollTrigger use `immediateRender: false` at top level
- [x] No `opacity: 0` in CSS on content elements
- [x] SplitText inline polyfill embedded
- [x] Responsive CSS (1100px and 640px breakpoints)
- [x] `meta.json` written
- [x] `readme.md` written
- [x] `docs/clone_plan.md` written
- [x] `docs/originality_report.md` written
- [x] `docs/image_validation.md` written
- [x] `check-sections.py` run — all sections PASS
- [x] `capture-page.py` run — `fullpage.png` generated
- [x] `sips` thumbnail generated — `thumbnail.jpg`

---

## Implementation Notes

### Light Theme Strategy
This template is a deliberate departure from the library's predominantly dark templates. The warm white (`#F7F4EF`) background with cream surface (`#EFEBE4`) creates a gallery-white atmosphere appropriate for an art gallery brand. Both values exceed the avg(R+G+B)/3 ≥ 20 threshold significantly.

### GSAP Critical Rules Applied
All scroll-triggered animations use `immediateRender: false` at the TOP LEVEL of `gsap.from()` vars (not inside `scrollTrigger: {}`). This prevents the flash-of-invisible-content bug.

### Art Fairs Section (Dark)
The `#artfairs` section uses `background: var(--accent)` = `#1A1A1A` as a deliberate design accent. This is a content section with full contrast text, not a background calibration concern.

### Footer
Footer uses `background: var(--surface)` = `#EFEBE4` (avg 234) as required. Never hardcoded hex.
