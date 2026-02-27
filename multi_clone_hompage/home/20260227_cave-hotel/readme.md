# GROTTO — Luxury Cave Hotel

**Slug:** `20260227_cave-hotel`
**Brand:** GROTTO — Carved by Time, Perfected for You
**Category:** Luxury Cave Hotel / Hospitality
**Tier:** Free
**Language:** English

---

## Design Specification

| Property | Value |
|----------|-------|
| Hero Layout | Type B — Parallax + Ken Burns, two layered backgrounds, mousemove parallax |
| Color Palette | P6 — Midnight Purple |
| Font Pair | F4 — Cinzel (serif heading) + Crimson Pro (body) |
| Animation | A1 — Standard (opacity:0, y:24, duration:1.1, ease:power2.out, stagger:0.10) |

### Color Palette — P6 Midnight Purple
```css
--bg: #130F1A;
--surface: #1C1626;
--surface2: #231D30;
--accent: #9B6EDB;
--accent-light: #B894EE;
--accent-dark: #6840A8;
--ivory: #EAE0F8;
--smoke: #907890;
--muted: #544860;
--border: #181420;
```

### Typography — F4
- **Heading:** `Cinzel`, serif (weights 400, 600, 700)
- **Body:** `Crimson Pro`, Georgia, serif (300, 400, italic 300)
- Google Fonts: `family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;1,300`

---

## Pages

| File | Description | Min Lines |
|------|-------------|-----------|
| `index.html` | Main landing page — all sections | 1200+ |
| `about.html` | Hotel history, geology, founders | 600+ |
| `collection.html` | Suite types: 4 categories, 15 suites | 600+ |
| `process.html` | Arrival experience, dining, spa | 500+ |
| `contact.html` | Reservation form, FAQ, location | 500+ |

---

## Sections (index.html)

1. **Preloader** — SVG cave icon (triangle/mountain motif), animated stroke-dasharray, brand text + progress bar + tagline
2. **Scroll Indicator** — Fixed left, pulse animation, auto-visible after preloader
3. **Navbar** — Fixed, transparent → frosted glass on scroll, logo + links + CTA button
4. **Hero (Type B)** — Two-layer parallax: hero-1.webp (brightness 0.55) + hero-2.webp (overlay blend), Ken Burns animations, mousemove parallax, floating badge "Ancient Cappadocia 3000 BC"
5. **Stats** — 4 columns: 15 Cave Suites / 3000 BC Rock / 5-Star / 8 Private Pools
6. **Philosophy** — 3-column CSS grid, three principles: Ancient Geology, The Cave's Quiet, Sacred Ceremony
7. **Suite Collection** — 2×2 grid, hover reveal descriptions, 4 suite types
8. **Stone Atelier** — Split layout, dual images with accent box, artisan feature list
9. **Process/Stay Journey** — 4-step horizontal layout with connecting line
10. **Heritage/History** — Parallax background, 4-event vertical timeline
11. **Testimonials** — Swiper carousel, 4 guest stories, auto-rotate
12. **Reservation Form** — Split: info + form, full inquiry fields
13. **Footer** — 4-column grid, socials, full nav, address, legal

---

## GSAP Rules Compliance

- All `gsap.from()` with ScrollTrigger use `immediateRender: false` at TOP LEVEL of vars object
- No `opacity: 0` set via CSS on animated content elements
- Scroll indicator shown in preloader callback AND `setTimeout(4000)`
- Philosophy grid uses `display: grid` (not flex)
- SplitText polyfill class included before Swiper scripts

---

## CDN Dependencies

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

## Images Required

Place in `/images/` folder:

| File | Usage |
|------|-------|
| `hero-1.webp` | Hero layer 1 (primary background, brightness 0.55) |
| `hero-2.webp` | Hero layer 2 (overlay blend for parallax depth) |
| `hero-3.webp` | About page hero background |
| `hero-4.webp` | Contact page hero background |
| `product-1.webp` | Grotto Suite card image |
| `product-2.webp` | Cave Pool Suite card image |
| `product-3.webp` | Cathedral Cave card image |
| `product-4.webp` | Royal Cavern card image |
| `ambient-1.webp` | Atelier section + geology page |
| `ambient-2.webp` | Atelier section secondary + experience page hero |
| `ambient-3.webp` | Heritage/history section background + spa section |
| `thumbnail.webp` | Template thumbnail (600px wide, 80% quality) |

---

## Brand Voice

- **Tone:** Ancient mystery, subterranean luxury, timeless stone elegance
- **Industry:** Luxury cave hotel carved into ancient Cappadocian volcanic tuff
- **Location:** Göreme Valley, Cappadocia, Turkey
- **Suites:** 15 total — Grotto Suite (€1,200), Cave Pool (€2,400), Cathedral Cave (€3,800), Royal Cavern (€6,500)
- **Brand Tagline:** "Carved by Time, Perfected for You"
