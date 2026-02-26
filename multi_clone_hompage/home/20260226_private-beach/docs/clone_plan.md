# AZURA — Clone Plan & Implementation Notes

## Project Summary
- **Slug:** 20260226_private-beach
- **Concept:** Ultra-exclusive private beach club, Mediterranean island
- **Tagline:** "Where the Sea Belongs to You"
- **Pages:** 5 (index, about, experiences, membership, contact)
- **Date Created:** 2026-02-26

---

## Design Concept

### Brand Identity
AZURA communicates ultra-luxury through restraint. The design avoids visual noise in favor of space, typography, and the natural imagery of the Mediterranean. The color palette draws from deep sea at night (--bg), sunlit shallows (--accent), and warm sand (--accent2).

### Hero Type
**Type A — Cinematic Full-Screen** with Ken Burns zoom animation on an aerial beach photograph. Modified with:
- Horizontal text split ("WHERE THE SEA / BELONGS TO YOU")
- Stats bar at bottom of hero
- Floating compass rose element (top-right, SVG, continuous rotation)
- Scroll indicator (fixed left, animated drop line)

### Typography Hierarchy
1. **Display / Hero:** Cormorant Garamond, 300 weight, tracking 0.05em
2. **Section titles:** Cormorant Garamond, 300 weight, clamp(2.2rem, 4vw, 3.6rem)
3. **Labels:** Inter, 500 weight, 0.65–0.72rem, 0.3–0.4em tracking, uppercase
4. **Body:** Inter, 400 weight, 0.9–0.95rem, line-height 1.75–1.85
5. **Buttons:** Inter, 600 weight, 0.72–0.75rem, 0.18em tracking, uppercase

---

## Page-by-Page Plan

### index.html
- Preloader: SVG wave path animation (stroke-dashoffset draw)
- Hero: Cinematic + Ken Burns + stats bar + compass rose
- Section 1 — The Cove: 2-col grid (image + text with features)
- Section 2 — Experiences: 4-col card grid with hover reveal
- Section 3 — Private Cabanas: 3-col card grid with specs
- Section 4 — The Dining: 2-col grid (image + highlights list)
- Section 5 — Membership: 3-col tier overview
- Footer: 4-col with Members Portal link

### about.html
- Sub-hero: aerial ocean photography
- Origin section: 2-col (image + editorial body)
- Island stats: 4-col grid with large numbers
- Island map: image + 4 detail cards
- Philosophy: 3-col with Roman numerals
- Team: 3-col portrait grid
- CTA banner

### experiences.html
- Sub-hero: watersports photography
- Sticky sub-navigation (Beach / Watersports / Spa / Dining)
- Beach: 2 feature rows with alternating layout
- Watersports: 3-col card grid (6 cards)
- Spa: 2-col (image + treatment list)
- Dining: showcase mosaic + 3-col info grid

### membership.html
- Sub-hero: beach aerial photography
- Intro: 2-col editorial
- 3 tier cards (Cove / Azura / Estate) with full feature lists
- Benefits comparison table (HTML table)
- 4-step process visualization
- Application form + contact aside

### contact.html
- Sub-hero: coast photography
- 4-col info strip (office, phone, email, season)
- Contact form + aside blocks
- Island access: 4-col access cards
- Day visit: 2-col feature

---

## GSAP Animation Plan

### Global Rules
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls
- No CSS `opacity: 0` on content elements
- Scroll indicator shown via preloader callback + setTimeout(4000ms)

### Animation Parameters (all pages)
- y movement: 20–40px
- duration: 0.9–1.2s
- ease: 'power2.out'
- stagger: 0.08–0.12s
- ScrollTrigger start: 'top 80%' or 'top 85%'

### Hero (index only)
- Sequential timeline: eyebrow → title lines → tagline → CTAs → stats
- No ScrollTrigger on hero (plays after preloader)

---

## Color Compliance

| Variable | Hex | R | G | B | avg | Status |
|---|---|---|---|---|---|---|
| --bg | #0F1E2E | 15 | 30 | 46 | 30.3 | PASS ✓ |
| --surface | #152438 | 21 | 36 | 56 | 37.7 | PASS ✓ |

All sections use var(--bg) or var(--surface) as background — no hardcoded dark hex values.
Footer uses var(--bg) only.

---

## Responsive Breakpoints
- 1024px: Multi-column grids collapse to 1–2 columns
- 768px: Single column, nav hidden, padding reduced
