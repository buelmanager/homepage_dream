# MERIDIEM — Strategy That Transforms

**Premium Management Consulting Firm — Multi-Page Website Template**

---

## Overview

MERIDIEM is a complete luxury multi-page website template for a global strategy and management consulting firm. Built for Fortune 500 advisors, boutique strategy firms, and high-growth company consultancies.

**Brand:** Meridiem Strategy Partners
**Tagline:** Strategy that transforms. Results that endure.
**Industry:** Management Consulting / Professional Services

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — Hero (Type F interactive service selector), Philosophy, Services, Numbers, Approach, Testimonials, Gallery, CTA |
| `about.html` | About — Firm story, timeline, values, leadership team, global presence, careers CTA |
| `collection.html` | Practice Areas — 4 practice area deep-dives with filter, industries, results strip |
| `process.html` | Our Approach — Full Meridiem Method (4 phases), principles, case study, proprietary tools |
| `contact.html` | Contact — Contact form, office directory (6 global offices), FAQ accordion |

---

## Design System

### Color Palette — P5 Arctic Slate
```
--bg: #141820
--surface: #1C2030
--surface2: #222840
--accent: #A0C4D8
--accent-light: #C0DCE8
--accent-dark: #709AB8
--ivory: #E8EEF2
--smoke: #A8B4C0
--muted: #687480
--border: #1E2638
```

### Typography — F6 DM Serif Display + Karla
- Headings: DM Serif Display (italic for emphasis)
- Body: Karla (weights 300, 400, 500)
- Google Fonts: `family=DM+Serif+Display:ital@0;1&family=Karla:wght@300;400;500`

### Hero Layout — Type F (Interactive Service Selector)
Full-screen cinematic hero with:
- Background image `hero-1.webp` at `brightness(0.4)`
- Large floating "TRANSFORM" typographic overlay (opacity 0.06)
- Interactive service selector widget with 4 tabs: Strategy / Operations / Digital / Transformation
- Each tab reveals a one-line description on click; tab glows with `--accent` on hover/active

### Animation — A1 Standard
- `y: 24px`, `duration: 1.1s`, `stagger: 0.10`, `ease: 'power2.out'`
- `immediateRender: false` at TOP LEVEL of every `gsap.from()` call

---

## CDN Dependencies
- GSAP 3.12.2 + ScrollTrigger (cdnjs)
- Swiper 11 (jsdelivr) — testimonials slider on index.html only
- Google Fonts (googleapis)

---

## Images Required
```
images/
├── hero-1.webp      (Primary hero — consulting office/boardroom)
├── hero-2.webp      (Approach section — team in session)
├── hero-3.webp      (About/Story — leadership)
├── hero-4.webp      (Careers/Contact page hero)
├── product-1.webp   (Leadership portrait 1)
├── product-2.webp   (Leadership portrait 2)
├── product-3.webp   (Leadership portrait 3)
├── product-4.webp   (Leadership portrait 4)
├── ambient-1.webp   (Gallery / About page hero bg)
├── ambient-2.webp   (Case study / Leadership)
├── ambient-3.webp   (Leadership portrait 6)
└── thumbnail.webp   (Template thumbnail — 600px wide)
```

---

## Key Features
- Type F interactive hero with animated service selector tabs
- Counter animation on stats (1,200 / 40 / 98% / 30 years)
- Swiper testimonials with custom navigation and pagination
- Practice area filter (All / Strategy / Operations / Digital / Transformation)
- 4-phase methodology accordion (Diagnose / Design / Deliver / Embed)
- FAQ accordion on contact page
- Contact form with simulated submit success state
- 6 global office cards
- Responsive at 1024px breakpoint
- SplitText polyfill (inline, all pages)
- Footer: `background: var(--bg)` — no hardcoded hex

---

## Stats Displayed
- 1,200 Consultants
- 40 Countries
- 98% Client Retention
- 30 Years

---

*Generated: 2026-02-28*
*Tier: Free*
