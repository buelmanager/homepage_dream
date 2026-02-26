# SUMMITS — Alpine Ski Concierge

**Slug:** `20260226_alpine-ski`
**Tier:** PRO ($49)
**Status:** PUBLISHED
**Created:** 2026-02-26

---

## Brand Concept

SUMMITS is an ultra-exclusive alpine ski concierge service curating private powder experiences in Verbier, Chamonix, Zermatt, and Aspen. The service caters to guests who seek private guides, helicopter access, ski-in/ski-out chalets, and Michelin-starred mountain dining.

**Tagline:** *"The Mountain Remembers No One. We Remember You."*

---

## Design System

| Token | Value | Notes |
|-------|-------|-------|
| `--bg` | `#0D1520` | avg 22 — passes dark threshold |
| `--surface` | `#141C2C` | Section surface |
| `--accent` | `#60C0F0` | Alpine sky blue |
| `--accent2` | `#F0F0F0` | Snow white |
| `--text` | `#EEF4FF` | Primary text |
| `--text-muted` | `#607090` | Secondary text |
| Heading Font | Montserrat 200/400/700 | Google Fonts |
| Body Font | Inter 300/400/500 | Google Fonts |

---

## File Structure

```
20260226_alpine-ski/
├── index.html           — Main landing page (hero, destinations, chalets, guides, heliski, CTA)
├── about.html           — Brand story, philosophy, guide team, credentials
├── destinations.html    — Verbier / Chamonix / Zermatt / Aspen destination pages
├── chalets.html         — Private chalet portfolio, amenities, booking process
├── contact.html         — Booking inquiry, season membership, private consultation
├── meta.json            — Template metadata
├── readme.md            — This file
├── images/
│   └── thumbnail.webp   — 600px wide, 80% quality WebP
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Pages Summary

### index.html
- SVG mountain silhouette preloader with path-draw animation
- Fixed scroll indicator (left, animated)
- Cinematic full-screen hero with Unsplash alpine imagery
- Hero stats: 4 resorts / 84 guides / 200km private runs
- Altitude badge (4,807m)
- Featured Destinations grid (4 cards)
- Chalet showcase with featured layout
- Guide profiles (3 cards)
- Helicopter access full-bleed section with parallax
- 3-tier Season Pass CTA
- Footer with full nav

### about.html
- Page hero: alpine dawn image
- Brand story with pull quote
- Philosophy pillars (3 cards)
- Full guide collective grid (4 guides)
- Credentials stats (84 guides, 1,400+ seasons, 200 clients, 100% safety)

### destinations.html
- Sticky in-page nav (Verbier / Chamonix / Zermatt / Aspen)
- Full destination sections with specs, highlights, image badge
- Destination comparison table
- Active nav highlight on scroll

### chalets.html
- Property listings with full specs (bedrooms, guests, area, price)
- Amenities grid (8 categories)
- 4-step booking process

### contact.html
- Multi-field booking inquiry form
- Contact details and office locations
- Private consultation CTA (with mountain bg)
- Season membership tiers with enquiry

---

## GSAP Implementation

All animations follow the mandatory rules:
- `immediateRender: false` at TOP LEVEL of `gsap.from()` calls
- No `opacity: 0` set via CSS on content elements
- Scroll indicator visible in 2 places (preloader callback + setTimeout 4000ms)
- Parallax on hero and heliski backgrounds via scrub ScrollTrigger
- Stagger animations on grids: 0.08–0.12s
- Animation parameters: y: 20–40px, duration: 0.9–1.2s, ease: power2.out/power3.out

---

## Images Used

All images sourced from Unsplash (free to use, attribution not required for template use):

| Usage | Unsplash ID |
|-------|-------------|
| Hero (index) | 1551524559-8af4e6624178 |
| Destinations nav | 1558769132-cb1aea458c5e |
| Verbier | 1512327536842-5aa37d1ba3e3 |
| Chamonix | 1524504388940-b1c1722653e1 |
| Zermatt | 1558618666-fcd25c85cd64 |
| Aspen | 1529958030586-3aae4ca485ff |
| Chalet Verbier | 1600607687939-ce8a6c25118c |
| Chalet Chamonix | 1528360983277-13d401cdc186 |
| Chalet Aspen | 1553361371-9b22f78e8b1d |
| Heliski | 1509631179647-0177331693ae |
| About hero | 1469334031218-e382a71b716b |
| Story image | 1543076447-215ad9ba6923 |
| Contact hero | 1582719508461-905c673771fd |
| Guide 1 | 1485125639709-a60c3a500bf1 |
| Guide 2 | 1555529669-e69e7aa0ba9a |
| Guide 3 | 1503342394128-c104d54dba01 |
| Guide 4 | 1572635196237-14b3f281503f |
