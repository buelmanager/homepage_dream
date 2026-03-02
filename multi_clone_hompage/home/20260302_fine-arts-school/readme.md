# Atelier des Beaux-Arts

**Category:** Fine Arts Education
**Tier:** Free
**Hero Layout:** Type D (Portraits + Stats Grid)
**Color Palette:** Purple / Deep Violet
**Fonts:** Spectral (serif) + Mulish (sans)

## Brand

Atelier des Beaux-Arts is a prestigious fine arts school in Paris founded in 1926. It offers intensive programs in Painting, Sculpture, Printmaking, and Contemporary Practice for a small cohort of serious artists from around the world.

## Pages

- `index.html` — Full landing page with hero, stats, philosophy, programs, faculty, timeline, history, testimonials, enrollment form, footer
- `about.html` — School story, values, faculty profiles
- `collection.html` — Four programs with detailed descriptions and requirements
- `process.html` — Admissions process (5 steps), requirements, FAQ
- `contact.html` — Contact info + enquiry form

## Technical Notes

- Hero Type D: Split-column layout with portrait grid (3 images) and stat counters
- GSAP ScrollTrigger with `immediateRender: false` on all scroll animations
- SplitText polyfill embedded inline
- Swiper testimonials carousel (3 slides)
- Stat counters animate on scroll
- No CSS `opacity: 0` on content elements
- Footer uses `background: var(--bg)` only
- Philosophy grid uses `display: grid`

## Images (Unsplash)

- Art studio: 1460661419201-fd4cecdf8a8b
- Artist portrait: 1513364776144-60967b0f800f
- Sculpture: 1543076447-215ad9ba6923
- Fine art portrait: 1524504388940-b1c1722653e1
- Model portrait: 1515886657613-9f3515b0c78f
