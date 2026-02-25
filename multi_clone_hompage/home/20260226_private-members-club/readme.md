# SANCTUM — By Invitation Only

**Category:** Private Members Club
**Brand:** SANCTUM
**Tagline:** By Invitation Only
**Created:** 2026-02-26

## Overview

Ultra-exclusive London-style private members club landing page.
Established 1887, Mayfair. Art, culture, and business networking
for the world's most distinguished individuals across 12 global cities.

## Sections

1. Preloader — animated crest SVG draw + letter-by-letter SANCTUM reveal
2. Navbar — fixed, transparent to frosted, monogram logo, nav links, CTA
3. Hero — diagonal split layout, atmospheric dark image, floating badge
4. Stats — Est. 1887 / 340 Members / 12 Cities / 6 Michelin Stars
5. About — Heritage story, vintage texture overlay, founder's quote
6. Membership Tiers — Associate / Fellow / Patron cards with benefits
7. Facilities — Library, Dining Room, Cognac Lounge, Rooftop Terrace
8. Events — 3 upcoming events (symposium, private view, legacy dinner)
9. Testimonials — 3 member quotes with initials avatars
10. Apply — Application form CTA
11. Footer — Contact, global houses, legal

## Color System

| Var | Hex | avg(R+G+B)/3 |
|-----|-----|--------------|
| --bg | #1A1612 | 21.3 ✅ |
| --surface | #231E19 | 28.0 ✅ |
| --accent | #C9A96E | 142.3 ✅ |
| --text | #F0EBE3 | 238.7 ✅ |

## Technical

- GSAP 3.12.2 + ScrollTrigger from cdnjs
- SplitText inline polyfill
- IntersectionObserver-driven left scroll indicator
- Hero parallax (requestAnimationFrame)
- Diagonal split hero layout (Type C)
- All gsap.from() + scrollTrigger: immediateRender: false at top level
- Footer: background: var(--bg) only
