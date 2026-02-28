# Clone Plan — 20260228_venture-capital (APEX Ventures)

**Date:** 2026-02-28
**Template Slug:** 20260228_venture-capital
**Industry:** Boutique Venture Capital

---

## Brief Summary

Design a premium, dark-themed multi-page website for APEX, a boutique venture capital firm specializing in deep-tech, climate, and AI startups. The site must communicate institutional authority, technical credibility, and founder-first values. The aesthetic is Cool Obsidian (dark navy background, cyan accent) with Bebas Neue display type and DM Sans body copy.

---

## Forced Constraints

| Constraint | Value |
|---|---|
| Hero Layout | F — Interactive/Depth-Layer |
| Color Palette | P2 — Cool Obsidian |
| Font Pair | F3 — Bebas Neue + DM Sans |
| Animation | A3 — Precise (x:-20, 0.75s, stagger:0.04, power3.out) |
| Tier | free |
| Price | 0 |

---

## Section Plan

### index.html (Main Landing)

| Section | Purpose | Notes |
|---|---|---|
| Preloader | Brand reveal, progress bar | "APEX" logotype, cyan bar |
| Nav | Fixed navigation | Transparent → blurred on scroll |
| Hero (Type F) | Primary conversion + brand statement | Parallax bg, depth particles, "We Back" widget |
| Stats Ticker | Social proof at a glance | Animated marquee: $2.4B / 127 / 23 / 18 |
| Philosophy | Conviction-over-consensus manifesto | 3-column grid, numbered cards |
| Portfolio Preview | Teaser of best investments | 3-card grid with image + tag |
| Process Preview | How we work | 4-step horizontal layout |
| Numbers | Track record in hard stats | 4-up grid with large numerals |
| Testimonials | Founder validation | Swiper carousel, 3 testimonials |
| Gallery | Atmospheric visuals | 5-image CSS grid, hover zoom |
| CTA Strip | Convert to deal submission | Cyan background, dark CTA button |
| Footer | Navigation, legal | var(--bg) only, no hardcoded hex |

### about.html

| Section | Purpose |
|---|---|
| Page Hero | Split headline layout |
| Hero Image Strip | Full-width atmospheric photo |
| Story | Timeline of fund milestones (2008–2024) |
| Values | 6 core principles in grid |
| Team | 4 partners with photo + bio |
| Advisors | 6 advisory council members |
| LP CTA | Invitation for limited partners |

### collection.html (Portfolio)

| Section | Purpose |
|---|---|
| Page Hero | Stats: 127 companies, 23 IPOs, 18 unicorns |
| Filter Bar | Sticky tabs: All / Deep Tech / Climate / AI |
| Portfolio Grid | 9-card filterable grid with JS category filter |
| Featured Spotlight | Axiom Fusion case study |
| Exit Stories | 4 notable exits with returns |
| Deal CTA | Submit your company |

### process.html (Investment Process)

| Section | Purpose |
|---|---|
| Page Hero | Process introduction |
| Timeline | 5-phase vertical timeline with connecting lines |
| Criteria | 6 investment criteria in grid |
| Parameters | Investment terms table (check size, stages, etc.) |
| FAQ | Accordion with 5 questions |
| CTA | Deal submission prompt |

### contact.html

| Section | Purpose |
|---|---|
| Page Hero | With background image |
| 3-Tab Form | Founders / LP / General with separate form fields |
| Sidebar | Contact emails, office addresses, 5-day promise card |
| Map Image | Ambient atmospheric image with overlay text |

---

## Image Usage Map

| Image File | Primary Usage | Secondary Usage |
|---|---|---|
| hero-1.webp | index.html hero background | collection.html featured spotlight |
| hero-2.webp | index.html gallery, about.html strip | contact.html hero background |
| hero-3.webp | index.html gallery | process.html terms section |
| hero-4.webp | index.html gallery | about.html team card |
| product-1.webp | Portfolio card — Deep Tech (Axiom) | |
| product-2.webp | Portfolio card — Climate (Carbyne) | |
| product-3.webp | Portfolio card — AI (Neural Foundry) | |
| product-4.webp | Portfolio card — Carbon | index.html gallery |
| ambient-1.webp | Testimonial avatar | about.html story section |
| ambient-2.webp | Testimonial avatar | about.html team card |
| ambient-3.webp | Testimonial avatar | contact.html map section |

---

## Typography Scale

| Element | Font | Size | Weight | Letter-spacing |
|---|---|---|---|---|
| Logo | Bebas Neue | 28px | — | 0.15em |
| Hero H1 | Bebas Neue | 72–130px fluid | — | 0.02em |
| Section Heading | Bebas Neue | 44–80px fluid | — | 0.03em |
| Card Title | Bebas Neue | 22–40px | — | 0.04em |
| Number | Bebas Neue | 48–64px | — | 0.02em |
| Eyebrow | DM Sans | 10px | 500 | 0.4em |
| Body | DM Sans | 14–15px | 300 | — |
| Caption | DM Sans | 11–12px | 400/500 | 0.2em |

---

## Animation Timing Reference (A3 Precise)

```js
// Standard entrance
gsap.from('.element', {
  immediateRender: false,
  x: -20,
  duration: 0.75,
  stagger: 0.04,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.section',
    start: 'top 85%'
  }
});
```

All hero animations run with `delay: 0.2–0.75s` (no scrollTrigger, immediate after preloader).

---

## Quality Checklist

- [x] `immediateRender: false` at top level of every `gsap.from()`
- [x] No `opacity: 0` in CSS on content elements
- [x] Scroll indicator shown in preloader `onComplete` AND `setTimeout(4000)`
- [x] Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)` (not flex)
- [x] Portfolio grid: `overflow: visible`
- [x] Footer: `background: var(--bg)` only
- [x] SplitText polyfill inline before Swiper
- [x] All images: `images/` local paths only (no external URLs)
- [x] All 5 pages complete
- [x] meta.json correct format
- [x] docs/ complete
