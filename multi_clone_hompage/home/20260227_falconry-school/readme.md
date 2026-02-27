# TALON — Ancient Falconry School

**Slug:** `20260227_falconry-school`
**Status:** PUBLISHED
**Tier:** Free
**Created:** 2026-02-27

---

## Overview

A complete luxury multi-page website for TALON, an ancient falconry school established in 1147. The site uses a dark Onyx Stone color palette, Bebas Neue display typography, and GSAP scroll-driven animations (Hero Type G — text transform with parallax).

---

## Pages

| File | Description | Min Lines |
|---|---|---|
| `index.html` | Homepage — Hero G + Stats + Philosophy + Programs + Mews + Process + Heritage + Testimonials + Enrollment | 1200+ |
| `about.html` | Heritage — Timeline + Master Falconer + UNESCO + Team | 600+ |
| `collection.html` | Programs — Full-width program rows with specs and includes | 600+ |
| `process.html` | Training Method — Five stages + Principles + Equipment | 500+ |
| `contact.html` | Enrollment — Full form + FAQ accordion + Location | 500+ |

---

## Design System

### Color Palette — P8 Onyx Stone
```css
--bg:           #181818;  /* avg 24 ✅ */
--surface:      #222222;  /* avg 34 ✅ */
--surface2:     #2A2A2A;  /* avg 42 ✅ */
--accent:       #B0B0C0;
--accent-light: #D0D0E0;
--accent-dark:  #808090;
--ivory:        #EEEEF2;
--smoke:        #909090;
--muted:        #606060;
--border:       #1E1E1E;
```

### Typography — F3 Bebas Neue + DM Sans
- Display: `'Bebas Neue', Impact, sans-serif`
- Body: `'DM Sans', system-ui, sans-serif`
- Google Fonts CDN

### Animation — A3 Precision Slide
- `opacity: 0, x: -20, duration: 0.75, ease: 'power3.out', stagger: 0.04`
- `immediateRender: false` at top level of all `gsap.from()` calls
- Hero Type G: scroll-driven parallax text spread + background parallax

---

## Key Features

- **Hero Type G**: 200vh sticky scroll section, words spread apart on scroll, bg parallax
- **GSAP ScrollTrigger**: All section animations use `immediateRender: false` correctly
- **SplitText Polyfill**: Inline class, no Club GSAP dependency
- **Swiper v11**: Testimonials carousel with autoplay and pagination
- **Custom scrollbar**: 4px accent-dark thumb
- **Preloader**: Logo + loading bar animation, 1.6s total
- **Scroll indicator**: Shown after preloader + setTimeout(4000) fallback
- **Mobile menu**: Full-screen overlay with hamburger toggle
- **FAQ accordion**: Smooth max-height transition
- **Enrollment form**: Inline success state, no page reload
- **Fully responsive**: Mobile breakpoints at 768px and 1024px

---

## Images Required

Place in `images/` folder:
- `hero-1.webp` through `hero-4.webp`
- `product-1.webp` through `product-4.webp`
- `ambient-1.webp` through `ambient-3.webp`
- `thumbnail.webp` (600px wide, for manifest)

---

## Brand

- **Name:** TALON
- **Tagline:** "The Oldest Bond Between Man and Raptor"
- **Established:** 1147 (fictional)
- **Location:** Aldric Estate, Northumberland, UK
- **Industry:** Traditional falconry school, raptor training, medieval hawking
- **Tone:** Medieval authority, predatory precision, ancient discipline
