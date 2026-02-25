# Clone Plan — Aurora Lodge (BOREALIS)

## Phase Overview

- [x] **Phase 0 — Research & Concept**
  - [x] Define brand identity: BOREALIS, ultra-luxury arctic lodge
  - [x] Select color system passing avg(R+G+B)/3 ≥ 20 threshold
  - [x] Choose typography: Cormorant Garamond + Inter
  - [x] Plan 11-section page architecture

- [x] **Phase 1 — Structure & Layout**
  - [x] Create directory structure: `multi_clone_hompage/home/aurora-lodge/`
  - [x] Create `images/` and `docs/` subdirectories
  - [x] Write full HTML skeleton with all 11 sections
  - [x] Implement CSS custom properties and reset

- [x] **Phase 2 — Visual Design**
  - [x] Color system: --bg #141830, --surface #1C2240, --accent #1DB4A0, --gold #E8935A
  - [x] Preloader with SVG aurora path stroke animation
  - [x] Canvas-based procedural aurora animation (5 sinusoidal gradient bands)
  - [x] Mountain silhouette SVG parallax in hero
  - [x] Frosted glass navbar on scroll
  - [x] Fixed left scroll indicator with fill animation

- [x] **Phase 3 — Sections**
  - [x] Hero — full-screen, canvas aurora, parallax BG, floating badge, scroll indicator
  - [x] Stats — 4 animated counters
  - [x] Experiences — 3 hover cards with reveal description
  - [x] Accommodations — 2 cards + slide-in detail panel
  - [x] The Journey — 4-step timeline with connecting line
  - [x] Testimonials — 3-slide auto-advancing slider
  - [x] Gallery — 6-image masonry with lightbox
  - [x] Reserve — CTA + contact form with aurora overlay
  - [x] Footer — 4-column, background: var(--bg)

- [x] **Phase 4 — Animation & Interactivity**
  - [x] GSAP 3.12.2 + ScrollTrigger from cdnjs CDN
  - [x] Inline SplitText polyfill (hero title char reveal)
  - [x] All gsap.from() with scrollTrigger use immediateRender: false at top level
  - [x] Counter animation on stats section
  - [x] Testimonial slider with auto-advance + dot navigation
  - [x] Gallery lightbox with keyboard navigation
  - [x] Accommodation slide-in panel
  - [x] Hero parallax scroll
  - [x] Preloader percent counter

- [x] **Phase 5 — Color Validation**
  - [x] --bg: #141830 → avg = (20+24+48)/3 = 30.7 ✅
  - [x] --surface: #1C2240 → avg = (28+34+64)/3 = 42.0 ✅
  - [x] Footer: background: var(--bg) ✅ (not hardcoded)
  - [x] Hero overlay: rgba opacity 0.50 / 0.35 / 0.65 ✅ (max ≤ 0.65)
  - [x] No section uses pure black or avg < 15 background

- [x] **Phase 6 — Supporting Files**
  - [x] meta.json
  - [x] readme.md
  - [x] docs/clone_plan.md
  - [x] docs/originality_report.md
  - [x] docs/image_validation.md

- [x] **Phase 7 — QA**
  - [x] Run check-sections.py validation
  - [x] Capture screenshot with capture-page.py
  - [x] Generate thumbnail.jpg with sips
