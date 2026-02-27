# DENTELLE — Bobbin Lace Studio

**Slug:** 20260227_lace-studio
**Tagline:** Patience Woven into Perfection
**Industry:** Handmade bobbin lace / traditional craft / luxury textile
**Tier:** Free
**Status:** Published

---

## Design Specifications

| Property | Value |
|---|---|
| Hero Layout | TYPE G — Scroll-Driven Text Transform |
| Color Palette | P5 Arctic Slate |
| Font Pair | F9 — Spectral + Mulish |
| Animation | A1 Standard (y:24, dur:1.1, ease:power2.out) |
| Primary Color | #A0C4D8 |

### Color Palette

```css
--bg: #141820;
--surface: #1C2030;
--surface2: #222838;
--accent: #A0C4D8;
--accent-light: #C4DCE8;
--accent-dark: #6090B0;
--ivory: #DCE8F0;
--smoke: #809098;
--muted: #505860;
--border: #181C28;
```

### Typography

- Serif: Spectral (300, 400, 600, italic 300)
- Sans: Mulish (300, 400, 500)
- Google Fonts CDN

---

## Pages

| File | Description | Lines |
|---|---|---|
| index.html | Main landing page — Hero G, Stats, Philosophy, Collection, Workshop, Process, Heritage, Testimonials, Commission Form | 1200+ |
| about.html | Studio story, lacemaker lineage, museum partnerships, timeline, values | 600+ |
| collection.html | Five lace traditions: Bruges Bobbin, Venetian Point, Torchon, Chantilly, Honiton | 650+ |
| process.html | Full 5-step process, tools, thread guide, commission timeline | 550+ |
| contact.html | Commission form, inquiry types, location, care guide | 540+ |

---

## Brand Identity

- **Brand:** DENTELLE — Bobbin Lace Studio
- **Tagline:** Patience Woven into Perfection
- **Tone:** Fragile precision, Flemish heritage, delicate luxury
- **Location:** Bruges, Belgium (fictional studio)
- **Traditions:** Bruges Bobbin, Venetian Point, Torchon, Chantilly, Honiton

---

## Required Images

Place the following images in the `images/` folder:

| File | Usage |
|---|---|
| hero-1.webp | Hero background |
| hero-2.webp | Master lacemaker portrait |
| hero-3.webp | Sophie Van Damme portrait |
| hero-4.webp | Ines Claes portrait |
| product-1.webp | Bruges collar |
| product-2.webp | Venetian Point cuffs |
| product-3.webp | Torchon panel |
| product-4.webp | Chantilly veil |
| ambient-1.webp | Workshop interior / lineage |
| ambient-2.webp | Close-up bobbins / thread |
| ambient-3.webp | Bruges canal / location |
| thumbnail.webp | Template thumbnail (600px wide) |

---

## Technical Notes

- No `opacity: 0` in CSS on content elements
- All `gsap.from()` calls include `immediateRender: false` at top level
- SplitText polyfill embedded inline (Club GSAP not available on CDN)
- Scroll indicator shown in preloader callback AND setTimeout(4000ms)
- Philosophy grid uses `display: grid` (not flex)
- Collection overflow set to `overflow: visible`
- Custom scrollbar via `::-webkit-scrollbar`
- Mobile-responsive at 1024px and 768px breakpoints
- Swiper 11 for testimonials carousel (index.html only)

---

## Dependencies (CDN)

```html
<!-- Fonts -->
https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,300&family=Mulish:wght@300;400;500

<!-- GSAP -->
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js

<!-- Swiper (index.html only) -->
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js
```
