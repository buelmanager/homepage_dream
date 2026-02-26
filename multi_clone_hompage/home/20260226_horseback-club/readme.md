# GALLOP & GRACE — Luxury Equestrian Club

**Date:** 2026-02-26
**Slug:** 20260226_horseback-club
**Type:** Multi-page (5 pages)

## Brand
Ultra-luxury private equestrian club and riding school. Established 1952, Surrey England.
Tone: Aristocratic heritage, equestrian elegance, countryside luxury.

## Pages
- `index.html` — Homepage with preloader, hero, stats, programs teaser, horses teaser, facilities, testimonials, membership CTA
- `about.html` — Heritage, timeline, estate, head trainer biography, philosophy, conservation
- `horses.html` — 9-horse profiles grid with breed filter, care philosophy, breeding programme, boarding services
- `programs.html` — 6 programs, instructor profiles, competition calendar, lesson booking form
- `contact.html` — 3 membership tiers, location/directions, visiting hours, membership application form

## Color System
- bg: #1A1510 (avg 21.3 — PASS)
- surface: #231C14 (avg 25 — PASS)
- accent: #C8903C
- accent2: #6B8C3A
- text: #F5EDD8
- text_muted: #9A8060

## Technical
- GSAP 3.12.2 + ScrollTrigger from cdnjs
- All gsap.from() + scrollTrigger: immediateRender: false at TOP LEVEL
- No opacity: 0 in CSS on content elements
- Footer: background: var(--bg) only
