# VOLUMEN ATELIER — Luxury Bookbindery

## Brand
**VOLUMEN ATELIER** — "Bound for Centuries. Where manuscript meets mastery."

A fictional prestige bookbindery established 1887, with atelier in London's Clerkenwell and Rome.

## Tech Stack
- GSAP 3.12 (cdnjs) + ScrollTrigger
- Swiper 11 (jsdelivr)
- Google Fonts: IM Fell English + Jost

## Hero: Type D — Portraits + Stats
Split grid (1fr / 1fr):
- LEFT: Brand logotype (VOLUMEN ATELIER), tagline, sub-tagline, 4 animated stat counters, CTA buttons
- RIGHT: 2×2 portrait grid — master binder hands + gold-tooled spine + finished folio + craftsperson examining signatures

## Stats
- 137 Years / Of Unbroken Craft
- 4,200+ / Commissions Completed (animated with locale formatting)
- 23 Materials / Leathers, Silks, Vellum
- 6 Masters / Each 20+ Years Practice

## Sections
1. Hero D — Portraits + Stats
2. Manifesto — word-by-word scroll reveal (scrub)
3. Materials & Provenance — Swiper 11 carousel (5 material cards with provenance notes)
4. Commission Process — numbered vertical timeline (6 steps)
5. Portfolio — masonry grid of completed commissions
6. Master Binders — 6-up portrait grid with specialty + years
7. The Atelier — split-screen workshop photo + visit invitation
8. Bespoke Inquiry — commission form (3 fields)
9. Footer

## Color Rules
All CSS variables satisfy avg(R+G+B)/3 ≥ 20:
- --bg: #221510 (avg 23.7)
- --bg-mid: #2A1C12 (avg 29.3)
- --bg-panel: #311E14 (avg 33)
- --bg-section: #291A10 (avg 27.7)
- --gold: #C9A84C (avg 148.3)
- --vellum: #F5EDD8 (avg 232.7)

## GSAP Rules
- All gsap.from() with ScrollTrigger use immediateRender: false
- No opacity:0 on content elements in CSS
- Stat counter for 4200 uses toLocaleString formatting
- Manifesto reveal uses scrub:1.2 for cinematic scroll pacing
