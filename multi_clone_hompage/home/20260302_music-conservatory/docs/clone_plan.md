# Clone Plan — Altissimo Conservatory

## Concept
A world-class classical music conservatory landing page. The design evokes the prestige and gravity of institutions like Juilliard and the Royal College of Music, using deep Midnight Purple tones and elegant Spectral serif typography.

## Design Decisions
- Hero Type D (Portraits + Stats): Conveys prestige through the "who" — faculty, students, performance outcomes
- P6 Midnight Purple: Deep, refined, resonant — mirrors the experience of concert hall darkness
- F9 Spectral + Mulish: Spectral's refined Italian editorial quality + Mulish's clean readability
- A4 Dramatic: y:40px reveals with slower stagger — creates the gravitas befitting a century-old institution

## Key Sections
1. Portraits+Stats hero with 3-column stat counters
2. Strip stats (alumni, disciplines, performances, winners)
3. Philosophy grid — 3 musical pillars
4. Programs 2×2 grid — 4 disciplines
5. Atelier section with parallax image
6. 5-step admissions process
7. Heritage milestones 1892–2001
8. Testimonials swiper
9. Enrollment form

## Technical Notes
- immediateRender: false on all GSAP from() calls
- SplitText polyfill (no CDN)
- Swiper for testimonials carousel
- Stat counters via GSAP textContent snap
