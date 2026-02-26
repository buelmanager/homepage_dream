# Clone Plan — INK HOUSE Calligraphy Atelier

**Template:** `20260226_calligraphy-atelier`
**Build Date:** 2026-02-26
**Builder:** Claude (AI-assisted build)

---

## Concept Origin

INK HOUSE is an original concept drawing inspiration from the traditions of London's luxury craft ateliers — specifically the category of bespoke calligraphy studios that occupy the premium tier of the wedding stationery and fine handwriting market.

Reference institutions (concept only, not cloned):
- The Calligraphy Centre at the V&A
- London Calligraphy workshops (various independent practitioners)
- The broader aesthetic language of: luxury pen brands (Montblanc, Pelikan), high-end stationery houses (Smythson, Crane & Co.), and English craft ateliers

**No single existing website was cloned.** The template represents an original composition.

---

## Design Decisions

### Hero Approach: Cinematic (Type A)
Selected because calligraphy is inherently a visual, intimate craft — close-up photography of ink and paper creates immediate emotional connection.

SVG path-draw animation was chosen for the title reveal to mirror the act of hand-lettering — letterforms emerging stroke by stroke.

### Colour Palette Rationale
- Charcoal `#141414` background (avg 20 — passes dark threshold) creates the atmosphere of a darkened paper stock or leather-bound journal
- Copper `#C87840` accent references traditional ink tones and metallic nibs
- Parchment cream `#E8D8C0` provides warmth without compromising the luxury dark aesthetic

### Typography
- Cormorant Garamond: chosen for its calligraphic DNA — the letterforms echo the quill-drawn serifs of Renaissance manuscripts
- Inter: provides clear contrast as a neutral, highly legible body face

### Navigation Structure
Five pages chosen to cover the full customer journey:
1. index.html — emotional introduction + broad overview
2. about.html — trust building, authority, and story
3. services.html — conversion-focused product detail
4. workshops.html — education revenue stream
5. contact.html — all conversion paths in one place

---

## Section-by-Section Plan (index.html)

| Section | Purpose | GSAP Animation |
|---------|---------|---------------|
| Preloader | Brand imprinting | SVG ring draw, ink drop fill, splash particles |
| Hero | Emotional hook | Path-draw title, stat counter entrance |
| Services | Overview of offering | Staggered card entrance from below |
| Portfolio | Social proof | Staggered image entrance |
| Workshops | Education upsell | Card entrance |
| Artisans | Authority / trust | Split entrance (left/right) |
| CTA | Conversion | Fade up |

---

## Layout Decisions

- Portfolio uses a 12-column CSS grid with asymmetric spanning for editorial feel
- Service blocks on services.html use alternating direction (image left / right) to create rhythm without monotony
- Workshop scripts use a tab component to prevent scroll fatigue with 4 similar structures
- Contact page uses 3-tab form to segment enquiry types cleanly

---

## Responsive Strategy

| Breakpoint | Changes |
|-----------|---------|
| > 1024px | Full layout |
| 1024px | 2-column grids, nav links visible |
| 768px | Single column, nav hidden, reduced padding |

---

## GSAP Implementation Notes

All animations comply with the project-wide GSAP rules:
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls that include `scrollTrigger`
- `once: true` on all ScrollTrigger instances to prevent replay
- No `opacity: 0` set via CSS on content elements
- Preloader GSAP timeline uses `onComplete` callback for scroll indicator visibility
- Ink particles use `yoyo: true` with `repeat: -1` for ambient float effect
