# RESONANCE — Sound Healing Studio

**Slug:** `20260227_sound-therapy`
**Category:** Wellness / Sound Therapy
**Tier:** Free
**Created:** 2026-02-27

---

## Overview

A complete luxury multi-page website for **RESONANCE**, a crystal singing bowl sound therapy studio based in Brooklyn, New York. The site embodies the mystical, frequency-focused aesthetic of the healing arts industry — marrying ancient Tibetan tradition with modern vibrational science.

---

## Design System

| Property | Value |
|----------|-------|
| Color Palette | P6 — Midnight Purple |
| Primary BG | `#130F1A` |
| Accent | `#9B6EDB` (amethyst) |
| Font Serif | Fraunces (300, 600, italic) |
| Font Sans | Inter (300, 400, 500) |
| Hero Layout | TYPE E — Animated concentric circles canvas |
| Animation | A2 — Whisper (duration: 1.5s, y: 14, stagger: 0.06) |

---

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Home — hero canvas, stats, philosophy, sessions, chamber, process, heritage, testimonials, booking form, footer | 1200+ |
| `about.html` | Studio — founder bio, science of crystal bowls, team, certifications | 600+ |
| `collection.html` | Sessions — full detail cards, add-ons, FAQ accordion | 600+ |
| `process.html` | Journey — 5-step ritual protocol, preparation, what to expect, aftercare timeline | 500+ |
| `contact.html` | Booking — full booking form, sidebar info, location, direct contact channels | 500+ |

---

## Key Features

- **Hero TYPE E**: Animated expanding concentric circle rings on HTML5 canvas, simulating sound wave propagation. Rings spawn and expand from center with GSAP-free requestAnimationFrame loop.
- **SplitText Polyfill**: Inline polyfill class for char-by-char hero title animation without Club GSAP dependency.
- **Swiper.js**: Testimonial carousel with custom prev/next buttons.
- **FAQ Accordion**: Pure JS accordion on collection page.
- **Form with Success State**: Contact form with inline success message and GSAP entrance animation.
- **Custom Scrollbar**: 6px purple accent scrollbar.
- **Mobile Responsive**: All breakpoints handled at 1024px and 768px.

---

## Brand

- **Studio:** RESONANCE — Sound Healing Studio
- **Location:** 147 Dean Street, Brooklyn NY 11217
- **Tagline:** "Vibrate Into Wholeness"
- **Industry:** Crystal singing bowl sound therapy, vibrational healing
- **Tone:** Mystical healing, frequency luxury, cosmic consciousness

---

## Sessions Offered

1. Private Sound Bath — 90 min, 1:1, from $180
2. Group Sound Ceremony — 120 min, up to 12 people, from $65/person
3. Chakra Alignment — 75 min, 1:1, pendulum assessment, from $145
4. Sleep Journey — 60 min, delta-wave induction, from $120

---

## Images Required

Place the following in `images/`:

- `hero-1.webp` — Atmospheric sound chamber or bowls in purple light
- `hero-2.webp`, `hero-3.webp`, `hero-4.webp` — Additional hero variants
- `product-1.webp` — Private Sound Bath session visual
- `product-2.webp` — Group Sound Ceremony visual
- `product-3.webp` — Chakra Alignment visual
- `product-4.webp` — Sleep Journey visual
- `ambient-1.webp` — Sound chamber interior
- `ambient-2.webp` — Crystal bowls close-up
- `ambient-3.webp` — Healing/meditation scene
- `thumbnail.webp` — 600px wide site thumbnail (generated via cwebp)

---

## Technical Notes

- No `opacity: 0` CSS on content elements
- All `gsap.from()` calls include `immediateRender: false` at top level
- `SplitText` is an inline polyfill (no Club GSAP CDN dependency)
- Swiper loaded from `cdn.jsdelivr.net/npm/swiper@11`
- GSAP loaded from `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2`
- Scroll indicator shown after preloader and via `setTimeout(4000)` failsafe
- Philosophy section uses `display: grid` (3-column CSS grid, not flex)
