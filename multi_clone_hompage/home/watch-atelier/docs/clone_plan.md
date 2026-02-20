# MERIDIAN — Watch Atelier Clone Plan

**Industry:** Haute Horlogerie / Bespoke Watch Atelier
**Brand:** MERIDIAN
**Folder:** `watch-atelier`
**Start Date:** 2026-02-19

---

## Phase 1: Research & Concept

- [x] Identify industry (haute horlogerie — not in existing 50+ library)
- [x] Create docs/clone_plan.md
- [x] Research ≥3 relevant websites (Patek Philippe, A. Lange & Söhne, F.P. Journe, Greubel Forsey)
- [x] Extract positioning, UX, visual insights
- [x] Define original concept diverging from sources (singular life-event ownership vs. generational/prestige)

## Phase 2: Design System

- [x] Define color palette (warm midnight #0A0806 + burnished brass #B8965A)
- [x] Select typography pair (Libre Baskerville + Barlow + Barlow Condensed)
- [x] Define section structure (original order: no reference mirrors it)
- [x] Define hero concept (floating Roman numerals + depth parallax + SplitText)
- [x] Define scroll indicator behavior (left-side 8-section with progress lines)
- [x] Define animation strategy (SplitText + parallax + stagger + scrub)

## Phase 3: Image Validation

- [x] Collect 20 candidate Unsplash image URLs
- [x] Validate each via HTTP HEAD (Python 3 urllib)
- [x] Reject 5 failed (404) URLs
- [x] Assign 11 validated URLs to sections
- [x] Save docs/image_validation.md

## Phase 4: Implementation

- [x] Build preloader (watch dial SVG with hands, tick marks, stroke draw)
- [x] Build navbar (with mobile burger + fullscreen menu)
- [x] Build hero (3 layers: cinematic bg + depth movement + floating numerals; SplitText + parallax)
- [x] Build left-side scroll indicator (8 sections, progress lines, labels)
- [x] Build philosophy horizontal drag-scroll (4 cards)
- [x] Build complications section (watch-dial stats with countup)
- [x] Build collection section (diagonal offset grid, 4 cards + hover reveals)
- [x] Build atelier section (split image + copy + detail grid)
- [x] Build commission process (5-step timeline)
- [x] Build heritage timeline
- [x] Build press carousel (Swiper)
- [x] Build inquiry form section
- [x] Build footer
- [x] Implement GSAP ScrollTrigger animations (reveal, parallax, stagger, scrub)
- [x] Implement mobile responsive behavior
- [x] Implement prefers-reduced-motion

## Phase 5: Documentation

- [x] Write docs/originality_report.md
- [x] Write readme.md
- [x] Write meta.json

## Phase 6: Screenshot & Final QA

- [x] Run Playwright fullpage screenshot → images/fullpage.png
- [x] Verify all required files exist
- [x] Verify all images return 2xx (11/11 used images validated PASS)
- [x] Verify English-only content
- [x] Verify scroll indicator (8 sections, progress lines, labels)
- [x] Verify animations defined (GSAP ScrollTrigger, SplitText, parallax)
- [x] Update this file to 100% complete

---

## Status: ✅ COMPLETE — 2026-02-19
