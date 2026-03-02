# L'École du Nez — 20260302_perfume-school

**Brand**: L'École du Nez
**Tagline**: The Art of Invisible Sculpture
**Category**: School / Education — Perfumery
**Tier**: Free
**Hero Layout**: Type G (Scroll Text Transform)
**Color Palette**: Deep rose-black (#1A0A0E) with dusty pink accent (#C96A8A)
**Fonts**: Bodoni Moda (serif) + Work Sans (sans)
**Animation**: A2 Whisper (y:14, 1.5s, power1.out)

## Pages
- `index.html` — Full landing page with Type G scroll-driven hero
- `about.html` — School philosophy and founding story
- `collection.html` — Course catalogue
- `process.html` — The Five Stages of the Nose
- `contact.html` — Split-screen contact

## Technical Notes
- Hero: Type G — sticky text wrap with GSAP scrub-driven word separation
- Hero background: fixed position, filter:brightness(0.25)
- GSAP: A2 Whisper style + ScrollTrigger scrub for hero text transform
- Footer background: var(--bg)
- Philosophy grid: display:grid 3-col
- Programs grid: overflow:visible
