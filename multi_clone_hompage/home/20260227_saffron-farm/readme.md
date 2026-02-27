# ZAFARAN — Saffron Estate

**Slug:** `20260227_saffron-farm`
**Status:** PUBLISHED
**Tier:** Free
**Industry:** Food & Beverage — Luxury Spice Estate

## Brand

ZAFARAN is a luxury saffron farm and Persian spice estate. The brand centers on direct-harvest Super Negin saffron from the Gonabad district of South Khorasan, Iran. Tagline: "The World's Most Precious Spice."

## Design System

| Token | Value |
|---|---|
| Palette | P9 — Rust Ember |
| --bg | #1C1008 |
| --surface | #261608 |
| --surface2 | #2E1C0A |
| --accent | #D4612A |
| --accent-light | #E8884A |
| --accent-dark | #9C3C14 |
| --ivory | #F0E4DC |
| --smoke | #A07860 |
| Hero Layout | TYPE G — Scroll-Driven Text Transform |
| Font Pair | F10 — EB Garamond + Nunito |
| Animation | A5 — Organic |

## Pages

| File | Description | Lines |
|---|---|---|
| index.html | Main landing page with Hero G, stats, philosophy, products, estate, harvest, heritage, testimonials, order form | 1,200+ |
| about.html | Farm history, Khorasan province, Shirazi family story, estate gallery | 600+ |
| collection.html | Full product catalog: Super Negin, Negin, Pushal, Tea Blend, Gift Sets with filter tabs | 600+ |
| process.html | 5-stage harvest timeline: planting → flowering → dawn pick → separation → grading | 500+ |
| contact.html | Tabbed order form (retail / wholesale / sample), location section, certifications | 500+ |

## Technical

- GSAP 3.12.2 + ScrollTrigger via cdnjs
- Swiper 11 via jsdelivr for testimonials carousel
- SplitText polyfill (inline, no Club GSAP required)
- Google Fonts: EB Garamond + Nunito
- No `opacity:0` in CSS — all via `immediateRender:false` in gsap.from()
- Philosophy section: `display:grid` (3-col)
- Collection section: `overflow:visible`
- Footer: `background:var(--bg)` only
- Custom scrollbar (accent color)
- Mobile hamburger nav on all pages
- Scroll indicator with preloader callback + setTimeout(4000)
- ISO 3632 references throughout for authenticity

## Images Required

Place in `images/` directory:

| File | Usage |
|---|---|
| hero-1.webp | Index hero background |
| hero-2.webp | About page hero, estate accent image |
| hero-3.webp | Process page step images |
| hero-4.webp | Contact page hero, collection page |
| product-1.webp | Super Negin product |
| product-2.webp | Negin grade product |
| product-3.webp | Persian Tea Blend |
| product-4.webp | Estate Gift Set |
| ambient-1.webp | Estate fields, gallery |
| ambient-2.webp | Persian heritage section, harvest |
| ambient-3.webp | Separation process, family section |
| thumbnail.webp | Manifest thumbnail (600px wide) |
