# Clone Plan — Stellaris Space Centre

## Source Inspiration
Original fictional concept. Aerospace/institutional aesthetic inspired by NASA, ESA and JAXA public communications — reimagined as a dark luxury template with premium editorial design sensibility.

## Differentiation
- Deep navy (#101420) + cyan (#4EE8FF) palette: shared hue with science-pavilion but distinct through larger typography scale and scroll-driven hero mechanic
- Type G scroll text transform hero — sticky 200vh section with GSAP scrub scale: unique in the collection (no other page uses this pattern)
- Bebas Neue at extreme scale (clamp 4rem → 14rem) creates cinematic, monumental character distinct from other Bebas pages
- Star field canvas with twinkling sine-wave opacity: space-specific, not used elsewhere
- Mission portfolio / satellite constellation content architecture: authentic space agency information design

## Technical Notes
- Hero: `min-height: 200vh`, `position: sticky; top: 0; height: 100vh` text wrap, GSAP `scrub: 1` scale transform
- Star field: `requestAnimationFrame` loop, `Math.sin(t * speed)` twinkling, 150 stars
- Scroll transform: `gsap.to([word1, word2, word3], { scale: 1.15, opacity: 0.7, scrollTrigger: { scrub: 1 } })`
- No canvas dependency for hero readability — star field is purely decorative layer
- A3 personality (x-slide) for sub-page animations
