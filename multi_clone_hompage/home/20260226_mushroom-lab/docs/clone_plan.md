# Clone Plan — MYCEL Mushroom Lab

## Status: COMPLETE

**Progress:** 12/12 tasks complete

---

## Tasks

- [x] Project directory structure created
- [x] Color system defined and validated (all avg ≥ 20)
- [x] Preloader — mycelium SVG network animation
- [x] Navbar — dark green minimal, fixed, scroll behavior
- [x] Hero — cinematic macro bg, SplitText headline, floating stats
- [x] Species section — 6 cards with hover reveal
- [x] The Lab — 5-stage cultivation process
- [x] Subscriptions — 3 tier cards with featured highlight
- [x] Restaurant Partners — Michelin logos + wholesale stats
- [x] Foraging Kits — 4 DIY kit cards
- [x] Science — mycelium benefits + compound tags
- [x] Gallery — 6 macro photos
- [x] Order form — subscription signup
- [x] Footer — brand + links + certifications

---

## GSAP Compliance Checklist

- [x] GSAP 3.12.2 from cdnjs
- [x] ScrollTrigger registered
- [x] SplitText inline polyfill embedded
- [x] All gsap.from() with scrollTrigger: immediateRender: false at TOP LEVEL
- [x] No opacity: 0 in CSS for content elements
- [x] Scroll indicator visible: preloader callback + setTimeout(4000)
- [x] Hero parallax: scrub: true (no immediateRender needed)

---

## Color Validation

| Variable     | Hex       | R   | G   | B   | Avg   | Pass |
|-------------|-----------|-----|-----|-----|-------|------|
| --bg        | #181E14   | 24  | 30  | 20  | 24.7  | YES  |
| --surface   | #202817   | 32  | 40  | 23  | 31.7  | YES  |
| --surface2  | #263020   | 38  | 48  | 32  | 39.3  | YES  |
| --accent    | #7EC84A   | 126 | 200 | 74  | 133.3 | YES  |
| --accent2   | #C8A060   | 200 | 160 | 96  | 152.0 | YES  |
| --text      | #EAF2E0   | 234 | 242 | 224 | 233.3 | YES  |
| --text-muted| #7A9860   | 122 | 152 | 96  | 123.3 | YES  |

All section backgrounds:
- Hero: #181E14 with overlay → filtered image, bg base passes
- Species: #202817 (surface) → avg 31.7 ✅
- The Lab: #181E14 → avg 24.7 ✅
- Subscriptions: #202817 → avg 31.7 ✅
- Restaurants: #181E14 → avg 24.7 ✅
- Foraging: #202817 → avg 31.7 ✅
- Science: #181E14 → avg 24.7 ✅
- Gallery: #202817 → avg 31.7 ✅
- Order: #181E14 → avg 24.7 ✅
- Footer: var(--bg) = #181E14 → avg 24.7 ✅

---

## Originality Score: 94/100

See: `docs/originality_report.md`
