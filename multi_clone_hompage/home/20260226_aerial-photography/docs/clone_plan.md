# ALTITUDE — Clone Plan

## Project Brief

Build a complete luxury multi-page landing page for ALTITUDE, a premium aerial photography and drone cinematography studio based in London.

## Concept Origin

Entirely original design concept. No direct page clone. Inspired by the aesthetic of high-end creative studio websites (Wired Studio, BeReal Agency, ARTHAUS) combined with aviation/HUD design language (dark navy, cyan accents, scan-line effects, tactical typography).

## Design Direction

### Colour Strategy
- Deep navy background (`#0E1520`) — evokes the sky at pre-dawn, technical depth
- Sky blue accent (`#40C0F0`) — references the sky, altitude, clarity
- Sun gold accent (`#F0C840`) — references the golden hour beloved by aerial cinematographers
- Light text on dark — maximum contrast, luxury feel

### Typography
- Space Grotesk: Technical, modern, slightly condensed — appropriate for aviation/tech
- Inter: Clean, highly legible body text — professional credibility

### Hero Concept
- Cinematic full-screen with aerial cityscape background
- HUD/scan-line overlay effect for technical drone-operator feel
- Floating altitude meter badge — unique brand touch
- Staggered letter reveal for brand name — creates anticipation

### Layout Philosophy
- Grid-based with 1.5px gap gutters (not borders) for clean panel separation
- Section alternation: `--bg` / `--surface` to create depth without harsh transitions
- Left-side fixed scroll indicator — premium editorial reference
- Drone SVG preloader — on-brand, unique

## Page Architecture

### index.html
1. Preloader (drone ascending SVG)
2. Navbar (fixed, glass scroll trigger)
3. Hero (cinematic, scan-line, letter stagger, altitude badge)
4. Featured Projects (6-card grid with hover overlay)
5. Services (4-card with hover top-border reveal)
6. Equipment (specs table + image)
7. Pilots (3-card profiles)
8. CTA section
9. Full footer

### about.html
1. Page hero (sky image)
2. Studio origin story (2-col text + image)
3. Core values (6 cards)
4. Full pilot profiles (expanded, with career bios)
5. Fleet details (4 platform cards with specs)
6. Certifications (4 badges)
7. CTA + footer

### portfolio.html
1. Page hero (architecture image)
2. Category filter bar (JS-powered, no reload)
3. Portfolio grid (12 items with hover overlay)
4. Featured case study (2-col layout)
5. Awards section
6. CTA + footer

### services.html
1. Page hero (equipment image)
2. 4 service categories (image + text cards)
3. 3-tier pricing (Essential / Professional / Cinema)
4. 5-step process diagram
5. Delivery turnaround grid
6. Airspace licensing zone table
7. CTA + footer

### contact.html
1. Page hero (aerial image)
2. Contact information column (sticky)
3. Tabbed form (Quote / General / Emergency)
4. FAQ accordion
5. Studio location card
6. Footer

## Technical Approach
- Pure HTML/CSS/JS — no framework dependencies
- GSAP via CDN for scroll animations
- Google Fonts via CDN
- All images via Unsplash with validated URLs
- Mobile-first responsive at 768px and 1024px breakpoints
