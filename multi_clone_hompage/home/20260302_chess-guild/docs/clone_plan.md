# Clone Plan — The Grand Chess Guild

## Source Inspiration
Original design. Inspired by elite private members' clubs and classical institution websites. No direct clone.

## Design Decisions

### Hero (Type G — Scroll-Driven Text Transform)
Uses GRAND and CHESS as the two diverging words. Background image desaturated to near-monochrome (filter: brightness(0.18) saturate(0.7)). A horizontal rule and italic tagline appear between the words and CTA, fading separately on scroll.

### Chess Aesthetic
- Unicode chess pieces used as icons throughout (♚♛♜♞)
- Checkered CSS stripe as section break element
- Cinzel for headlines — evokes classical Roman inscriptions appropriate for a guild
- Review cards use left-border accent style

### Colour Strategy
Same base palette as vintage-auto-club (#181818) but typography and decorative system are entirely different. Silver accent (#B0B0C0) reads as polished marble.

### Section Order
Standard 13-section order. Timeline uses Roman numerals I–V instead of 01–05 for classical character.

## Technical Notes
- All GSAP immediateRender at top level
- Footer background: var(--bg)
- Philosophy: display:grid 3 columns
