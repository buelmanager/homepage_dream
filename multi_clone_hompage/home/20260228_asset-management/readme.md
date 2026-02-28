# STRATUM CAPITAL — Institutional Asset Management Template

**Slug:** `20260228_asset-management`
**Created:** 2026-02-28
**Tier:** Free
**Status:** Published

---

## Brand Overview

**Brand Name:** Stratum Capital Management
**Industry:** Institutional asset management and alternative investment advisory
**Tagline:** "Capital that works harder. Returns that matter more."

---

## Design System

| Property | Value |
|---|---|
| Hero Layout | Type F — Interactive Metrics Dashboard |
| Color Palette | P2 — Cool Obsidian |
| Font Pair | F9 — Spectral + Mulish |
| Animation Profile | A2 — Whisper (y:14, duration:1.5, stagger:0.06) |

### Colors
- `--bg: #101420`
- `--surface: #181E2A`
- `--surface2: #1F2535`
- `--accent: #4EE8FF`
- `--accent-light: #7FF0FF`
- `--ivory: #E8F4F8`
- `--smoke: #A0B8C0`
- `--muted: #607880`

### Typography
- Heading: Spectral (serif, 300/400/600 weights)
- Body: Mulish (sans-serif, 300/400/500 weights)

---

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage with Type F hero (metrics dashboard), philosophy grid, strategies preview, process, testimonials, gallery |
| `about.html` | Firm history timeline, values, leadership team, global office presence |
| `collection.html` | All five investment strategies with full detail cards and performance table |
| `process.html` | Four-stage investment process deep-dive, ESG integration, risk management |
| `contact.html` | Investor relations form, direct contacts, IR document library |

---

## Key Features

### Hero (Type F)
Full-screen background image (hero-1.webp) at brightness 0.35 with centered headline and glassmorphism metrics dashboard showing four animated counters:
- $340B AUM
- 2.4M Investors
- 42 Years
- 8.7% Avg Annual Return

Counters animate on preloader completion using `gsap.to({ val: 0 }, ...)` pattern.

### Animation Compliance (A2 Whisper)
All scroll animations use:
```js
gsap.from(target, {
  immediateRender: false,  // ALWAYS at top level
  scrollTrigger: { trigger, start: 'top 85%', once: true },
  y: 14,
  autoAlpha: 0,
  duration: 1.5,
  ease: 'power1.out',
  stagger: 0.06
});
```

### GSAP Rules Compliance
- `immediateRender: false` at top level of every `gsap.from()` — not inside scrollTrigger
- No `opacity: 0` set on content elements in CSS
- Scroll indicator shown in preloader onComplete AND setTimeout(4000ms) fallback
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Collection grid: `overflow: visible`
- Footer: `background: var(--bg)` only

---

## Images Required

Place in `/images/` directory:

| File | Usage |
|---|---|
| `hero-1.webp` | Homepage hero background |
| `hero-2.webp` | Intro section + About page hero |
| `hero-3.webp` | Process page hero background |
| `hero-4.webp` | Gallery section |
| `product-1.webp` | Global Equities strategy |
| `product-2.webp` | Fixed Income strategy |
| `product-3.webp` | Private Credit strategy |
| `product-4.webp` | Real Assets strategy |
| `ambient-1.webp` | Headquarters / office ambient |
| `ambient-2.webp` | Research / trading ambient |
| `ambient-3.webp` | ESG / client engagement ambient |

---

## Investment Strategies

1. **Global Equities** — $152B AUM, 9.4% 10-year net return, benchmark MSCI ACWI
2. **Fixed Income & Credit** — $88B AUM, 6.8% 10-year net return
3. **Private Credit** — $62B AUM, 11.2% vintage-weighted IRR, 0.3% historical loss rate
4. **Real Assets & Infrastructure** — $38B AUM, 8.1% 10-year net return
5. **Hedge Strategies** — $24B AUM, 7.3% 10-year net return, beta 0.15

---

## CDN Dependencies

- GSAP 3.12.2: `cdnjs.cloudflare.com`
- ScrollTrigger 3.12.2: `cdnjs.cloudflare.com`
- Swiper 11: `cdn.jsdelivr.net`
- Google Fonts: Spectral + Mulish
