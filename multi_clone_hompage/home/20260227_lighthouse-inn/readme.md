# MERIDIAN — Lighthouse Inn

**Where Land Meets the Infinite Sea**

A complete luxury multi-page website for a historic 1887 lighthouse converted to a boutique coastal inn. Five HTML pages, Arctic Slate color palette, Playfair Display typography, GSAP ScrollTrigger animations, and a Swiper testimonials carousel.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — Hero B parallax, stats, philosophy grid, room collection, Captain's Quarters feature, guest journey, heritage, testimonials, reservation form |
| `about.html` | Brand story — lighthouse history 1887, keeper timeline, keeper family profiles, core values |
| `collection.html` | Room collection — Keeper's Suite, Lantern Room, Fog Horn Loft, Tide Room, amenities grid |
| `process.html` | Experience — immersive 4-step journey, Keeper's Table dining with sample menu, curated experiences |
| `contact.html` | Reservation form — full booking form with occasions, experiences, map section |

## Design Spec

- **Hero Layout**: Type B (Parallax + Ken Burns, dual-layer, mousemove parallax)
- **Color Palette**: P5 Arctic Slate (`--bg: #141820`, `--accent: #A0C4D8`)
- **Font Pair**: F2 — Playfair Display (serif) + Lato (sans-serif)
- **Animation**: A1 Standard (`opacity:0, y:24, duration:1.1, ease:'power2.out', stagger:0.10, immediateRender:false`)
- **Tier**: free / Price: $0

## Brand

- **Name**: MERIDIAN — Lighthouse Inn
- **Tagline**: "Where Land Meets the Infinite Sea"
- **Industry**: Historic lighthouse converted boutique coastal inn
- **Location**: Cape Meridian, Maine, USA (fictional)
- **Established**: 1887 (fictional)

## Technical

- GSAP 3.12.2 + ScrollTrigger (cdnjs CDN)
- Swiper 11 (jsDelivr CDN)
- Google Fonts (Playfair Display + Lato)
- SplitText polyfill (inline, no Club GSAP dependency)
- Mobile responsive (breakpoints: 1024px, 768px, 480px)
- Custom scrollbar (accent-dark thumb)
- No `opacity:0` CSS rules on content elements
- All `gsap.from()` calls use `immediateRender: false`
- Footer always uses `background: var(--bg)`

## Images Required

Place the following images in `images/`:

```
hero-1.webp    — Main lighthouse / ocean scene (hero layer 1)
hero-2.webp    — Atmospheric overlay (hero layer 2)
hero-3.webp    — Lighthouse exterior / coastal arrival
hero-4.webp    — Keeper's Table / dining interior
product-1.webp — Keeper's Suite room
product-2.webp — Lantern Room
product-3.webp — Fog Horn Loft
product-4.webp — Tide Room
ambient-1.webp — Captain's Quarters / interior feature
ambient-2.webp — Heritage / maritime atmosphere
ambient-3.webp — Coastal / farewell scene
thumbnail.webp — Site thumbnail (600px wide)
```

## Room Rates

| Room | Rate |
|------|------|
| Keeper's Suite | from $850/night |
| Captain's Quarters | from $680/night |
| Lantern Room | from $490/night |
| Fog Horn Loft | from $380/night |
| Tide Room | from $310/night |
