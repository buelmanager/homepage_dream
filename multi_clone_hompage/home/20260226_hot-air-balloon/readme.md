# ZEPHYR — Rise Above Everything

Ultra-luxury hot air balloon experiences website. 5-page multi-page template.

## Pages
- `index.html` — Homepage with preloader, hero, stats, experiences teaser, destinations, champagne feature, testimonials, CTA
- `about.html` — Founding story, safety record, fleet, pilot team, certifications
- `experiences.html` — 4 experiences with specs, gallery, pricing table
- `process.html` — Your Journey: booking steps, 6-step flight day timeline (weather briefing, launch, flight, landing, celebration), what to bring, FAQ
- `destinations.html` — 6 destinations with interactive selector
- `contact.html` — Booking form, what to expect, weather policy

## Color System
- `--bg: #0E1520` (avg 21.7 — PASS)
- `--surface: #161E2E` (avg 28 — PASS)
- `--accent: #F0A030` (sunrise amber)
- `--accent2: #E85A30` (hot coral)

## Technical
- GSAP 3.12.2 + ScrollTrigger from cdnjs
- All `gsap.from()` with scrollTrigger use `immediateRender: false` at top level
- No `opacity: 0` in CSS
- Animated CSS gradient sunrise hero with SVG balloon parallax
- Animated CSS gradient sunrise + balloon float animation on hero
- Interactive destination selector with tab switching (destinations.html)
- Footer always `background: var(--bg)` only

## Brand
- Founded 1998 by ex-military pilot Captain James Hartley
- 3 balloon fleet: Aurora (flagship), Soleil (private charter), Zénith (corporate)
- 3 master pilots: Hartley, Beaumont, Al-Rashid
- 6 destinations: Cappadocia, Provence, Napa, Serengeti, Masai Mara, Loire Valley
- 4 experiences: Sunrise Champagne ($680pp), Private Charter ($3,800), Honeymoon ($2,200), Corporate ($8,500)
