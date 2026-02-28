# ASHWORTH PRIVATE — Wealth Management Template

**Brand:** Ashworth Private Wealth
**Slug:** `20260228_wealth-management`
**Tier:** Free
**Industry:** Private Wealth Management / Multi-Family Office
**Hero Layout:** Type D — Portrait + Stats Grid
**Color Palette:** P4 — Deep Burgundy
**Fonts:** EB Garamond (headings) + Nunito (body)
**Animation:** A2 Whisper (y:14, duration:1.5, stagger:0.06, ease:power1.out)

---

## Brand Identity

- **Brand Name:** ASHWORTH PRIVATE (Ashworth Private Wealth)
- **Tagline:** "Preserving wealth. Enriching legacies."
- **Founded:** 1929
- **AUM:** $48 Billion
- **Families Served:** 1,200
- **Client Retention:** 99%
- **Minimum:** $25M investable assets

---

## Pages

| File | Title | Description |
|---|---|---|
| `index.html` | Home | Hero Type D with advisor portrait + 4 stat cards; philosophy, pillars, services swiper, process timeline, testimonials, gallery, CTA |
| `about.html` | About / Our Story | Founder split, manifesto, values grid (6 cards), history timeline (6 milestones), leadership team (4 partners) |
| `collection.html` | Wealth Solutions | 5 full-width alternating service sections: Portfolio, Estate/Trust, Family Office, Tax, Philanthropy + advisory standards grid |
| `process.html` | Our Process | 5-stage wealth planning journey with detail sub-items, FAQ grid (6 questions), philosophy quote |
| `contact.html` | Contact | Split-hero with form (left image, right form), 3-city offices grid, commitment section |

---

## Design Specifications

### Color Palette (P4 — Deep Burgundy)
```css
--bg:           #1A0A0E;
--surface:      #241016;
--surface2:     #2C1420;
--accent:       #C96A8A;
--accent-light: #E090A8;
--accent-dark:  #A04A68;
--ivory:        #F5EEF0;
--smoke:        #C8B0B8;
--muted:        #887080;
--border:       #281218;
```

### Typography
- Heading: `EB Garamond` (400, 600, italic 400)
- Body: `Nunito` (300, 400, 500)
- Google Fonts: `family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500`

### Hero Layout — Type D
- `display: grid; grid-template-columns: 1fr 1fr`
- LEFT: `hero-1.webp` with `object-position: top` — senior advisor with client
- RIGHT: `--surface` background, hero text + 2×2 stat grid
- Stat cards: $48B AUM / 1,200 Families / 95yrs / 99%

---

## Image Requirements

| File | Usage |
|---|---|
| `images/hero-1.webp` | Hero portrait (advisor with client), object-position: top |
| `images/hero-2.webp` | About banner, leadership card |
| `images/hero-3.webp` | Founder portrait, leadership card |
| `images/hero-4.webp` | Contact hero image, leadership card |
| `images/product-1.webp` | Portfolio Management service |
| `images/product-2.webp` | Estate Planning service |
| `images/product-3.webp` | Family Office service |
| `images/product-4.webp` | Tax Optimization service |
| `images/ambient-1.webp` | Process banner, Philanthropy card, gallery |
| `images/ambient-2.webp` | Gallery, Philanthropy service |
| `images/ambient-3.webp` | Gallery panel |
| `images/thumbnail.webp` | Preview thumbnail (600px wide) |

---

## GSAP Rules Compliance

- `immediateRender: false` at **top level** of every `gsap.from()` — never inside scrollTrigger
- NO `opacity: 0` in CSS on content elements
- Scroll indicator: shown in `preloader onComplete` AND `setTimeout(4000)`
- Philosophy pillars grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Services collection: `overflow: visible`
- Footer: `background: var(--bg)` only — no hardcoded hex

---

## CDN Dependencies

```html
<!-- GSAP 3.12.2 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper 11 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500&display=swap" rel="stylesheet" />
```

SplitText polyfill is embedded inline in `index.html` (GSAP Club premium — not on CDN).
