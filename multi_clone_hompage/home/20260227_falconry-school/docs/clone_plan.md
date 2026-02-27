# Clone Plan — TALON Ancient Falconry School

**Template:** `20260227_falconry-school`
**Date:** 2026-02-27
**Designer:** AI-Generated (Claude Sonnet 4.6)

---

## Project Scope

A complete luxury multi-page website for an ancient falconry school. Five HTML pages with shared design system. The site targets high-net-worth individuals seeking exclusive nature-based experiences and traditional craft education.

---

## Design Decisions

### Hero Type G — Scroll-Driven Text Transform
The hero runs 200vh with a sticky inner element. Two Bebas Neue words ("TALON" and "SCHOOL") spread vertically as the user scrolls, creating a dramatic cinematic entrance. The background image parallaxes upward simultaneously. Both word-1 and word-2 transform using `gsap.set()` inside a `ScrollTrigger.onUpdate` callback with `scrub: true`.

### Color Palette — P8 Onyx Stone
All backgrounds are verified above the dark threshold minimum:
- `--bg: #181818` → avg (24+24+24)/3 = 24 ✅
- `--surface: #222222` → avg 34 ✅
- `--surface2: #2A2A2A` → avg 42 ✅

No hardcoded dark hex values in section backgrounds. Footer uses `background: var(--bg)` only.

### Animation A3 — Precision Slide
`x: -20` instead of `y` for horizontal slide-in. `immediateRender: false` is placed at the **top level** of every `gsap.from()` call, never inside `scrollTrigger: {}`. No `opacity: 0` set in CSS on any content elements.

---

## Page Architecture

```
index.html         ← Primary entry, full feature set
about.html         ← Heritage + Timeline + Team
collection.html    ← Programs list with full specs
process.html       ← Training method + 5 stages
contact.html       ← Enrollment form + FAQ + Location
```

---

## Section Map — index.html

1. Preloader — logo + loading bar
2. Scroll indicator — fixed, fades on scroll
3. Navbar — transparent → frosted glass on scroll
4. Hero G — 200vh sticky, Bebas Neue word spread
5. Stats — 4 metrics (40+ Species, UNESCO, 3000 Years, XII Masters)
6. Philosophy — 3-col CSS grid, three pillars
7. Programs — 2-col grid, 4 program cards
8. Mews — image grid + content, estate facility
9. Process — 5 numbered steps, timeline layout
10. Medieval Heritage — split image + content + quote
11. Testimonials — Swiper v11, 3-up on desktop
12. Enrollment form — inline success state
13. Footer — 4-col grid

---

## Technical Stack

| Technology | Version | CDN |
|---|---|---|
| GSAP | 3.12.2 | cdnjs.cloudflare.com |
| ScrollTrigger | 3.12.2 | cdnjs.cloudflare.com |
| Swiper | 11.x | cdn.jsdelivr.net |
| Google Fonts | — | fonts.googleapis.com |

---

## GSAP Critical Implementation Notes

```js
// CORRECT — immediateRender at top level
gsap.from('.el', {
  immediateRender: false,   // ← TOP LEVEL
  scrollTrigger: { trigger: '.el', start: 'top 85%' },
  opacity: 0,
  x: -20,
  duration: 0.75,
  ease: 'power3.out'
});

// BROKEN — never do this
gsap.from('.el', {
  scrollTrigger: {
    trigger: '.el',
    immediateRender: false  // ← IGNORED HERE, elements start invisible
  },
  opacity: 0
});
```

---

## Scroll Indicator Implementation

Two triggers ensure the scroll indicator is always visible:

```js
// 1. After preloader completes
gsap.to(preloader, {
  onComplete: () => {
    gsap.fromTo(scrollIndicator, { opacity: 0 }, { opacity: 1, duration: 0.6 });
  }
});

// 2. Timeout fallback (4000ms)
setTimeout(() => {
  if (scrollIndicator.style.opacity !== '1') {
    gsap.to(scrollIndicator, { opacity: 1, duration: 0.6 });
  }
}, 4000);
```
