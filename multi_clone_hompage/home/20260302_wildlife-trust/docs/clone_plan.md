# Clone Plan — 20260302_wildlife-trust

## Source Inspiration
Original fiction. No direct clone source. Inspired by the visual language of premium conservation organisations (WWF, Wildlife Trusts UK) but with entirely original design, copy, and brand identity.

## Design Decisions
- Type B parallax hero chosen for atmospheric nature imagery
- Deep forest green palette (#0F1A10) — avg RGB = 15, raised to safe minimum with surface layers
- Fraunces optical size variable serif for organic, naturalistic feel
- Offset 2×2 collection grid adds dynamism to programme showcase
- Six-step process timeline communicates scientific rigour

## Technical Notes
- No CSS opacity:0 on content elements (GSAP handles all reveal)
- immediateRender: false at top level of all gsap.from() calls
- Footer uses background: var(--bg) only
- Philosophy section uses display: grid (not flex)
- SplitText polyfill inline (no CDN)
