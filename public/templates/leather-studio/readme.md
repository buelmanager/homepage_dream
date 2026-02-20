# VERAK ATELIER — Luxury Leather Studio Landing Page

**Template slug:** `leather-studio`
**Tier:** PRO — $49
**Status:** PUBLISHED
**Hero type:** C — Diagonal Split

---

## Brand Identity

- **Brand name:** VERAK ATELIER
- **Tagline:** "Shaped by hand. Worn by time."
- **Secondary tagline:** "We make fewer things, better."
- **Voice:** Quiet authority. Short sentences. No exclamation marks. No discount language.
- **Location:** Södermalm, Stockholm, Sweden

---

## Color Palette

| Role | Hex | Notes |
|------|-----|-------|
| `--bg` | `#1A1410` | Midnight Hide — avg RGB 21.3, passes ≥ 20 check |
| `--bg-deep` | `#0E0B08` | Deepest background |
| `--surface` | `#221814` | Surface panels — avg RGB 22.3, passes |
| `--surface2` | `#2C2018` | Dark Walnut — split panels |
| `--amber` | `#C4935A` | Burnished Amber — primary accent |
| `--amber-lt` | `#D4A870` | Light amber for hover states |
| `--amber-dk` | `#8B6B4A` | Saddle — muted accent, dividers |
| `--parchment` | `#F2EDE4` | Primary text on dark backgrounds |
| `--ivory` | `#E8E2D8` | Secondary light text |
| `--smoke` | `#9A9080` | Body copy, subdued text |

---

## Typography

- **Display:** Playfair Display (400, 400 italic, 500, 600, 700) — Google Fonts
- **Body/UI:** Inter (300, 400, 500, 600) — Google Fonts
- **Rationale:** Playfair's high-contrast serifs mirror a leather skiver edge; Inter grounds the layout in contemporary readability.

---

## Hero — Type C: Diagonal Split

```
LEFT PANEL (z-index:2, clip-path diagonal)     RIGHT PANEL (full-bleed photo)
┌─────────────────────────┐╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┐
│  VERAK                  ║                      │
│  ATELIER                ║  leather product     │
│  ──────                 ║  photography         │
│  "Shaped by hand.       ║  brightness: 0.82    │
│   Worn by time."        ║                      │
│                         ║  gradient overlay    │
│  [Briefcases] [Wallets] ║  270deg left fade    │
│  [Journals] [Bespoke]   ║                      │
│                         ║                      │
│  [ Explore Collection ] ║                      │
└─────────────────────────╲╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┘
     width:52%                    width:60%
     clip-path: polygon(0 0, 100% 0, 86% 100%, 0 100%)
     thin amber diagonal line (2px) traces the cut edge
```

---

## 13 Sections

1. **Preloader** — SVG leather needle/stitch mark draw animation (strokeDashoffset), "VERAK ATELIER" label, amber progress bar
2. **Scroll Indicator** (left fixed) — animated amber pulse line, "Scroll" label, vertical writing mode
3. **Navbar** (fixed) — transparent → frosted glass on scroll; full-screen mobile menu
4. **Hero** (Type C diagonal split) — brand name, tagline, category pills, CTA; diagonal amber accent line; hero scroll hint (2nd scroll indicator instance)
5. **Stats Strip** — 4 animated counters: 33 years, 4800+ pieces, 18mo hide aging, 12 annual commissions
6. **Philosophy** — editorial quote, 3-column grid (display:grid; overflow:visible); numbered cards with hover amber accent
7. **Collection Grid** — 2×2 asymmetric layout (1st item spans 2 rows, 4th spans 2 cols); overflow:visible; hover scale + detail reveal
8. **Atelier** — 2-column image/content split; 3 feature rows with icon, title, description; visual badge overlay
9. **Process** — 5-step horizontal timeline with connecting line, numbered dots, hover states
10. **Heritage** — vertical milestones timeline (1991–2021); left amber line, hover dot expansion
11. **Press** — Swiper 11 carousel (1/2/3 slides by breakpoint), autoplay, amber pagination; 4 publication quotes
12. **Commission Form** — 2-column layout; left: section copy + blockquote + meta info; right: full form (name, email, type, vision, budget, timeline)
13. **Footer** — `background: var(--bg)` strictly; 4-column grid; social icons; legal links

---

## GSAP Implementation

- GSAP 3.12.5 via cdnjs.cloudflare.com
- ScrollTrigger registered via `gsap.registerPlugin(ScrollTrigger)`
- **All `gsap.from()` calls include `immediateRender: false`** — no flash of invisible content
- No `opacity:0` set in CSS on any content elements
- Animations: hero stagger reveal, scroll-triggered section entrances, stats counters, parallax hero image
- Custom cursor with lagged ring follower (requestAnimationFrame)

---

## Scroll Indicators (2 instances)

1. `#scroll-indicator` — fixed left side, animated amber pulse line, visible until 200px scroll depth
2. `.hero-scroll-hint` — inside hero section, bottom-right, animated line + "Scroll to explore" text

---

## Validated Images (all 200 OK)

| Usage | URL |
|-------|-----|
| Hero right panel | `photo-1553361371-9b22f78e8b1d` (leather bag dramatic light) |
| Collection 1 | `photo-1584917865442-de89df76afd3` (leather briefcase) |
| Collection 2 | `photo-1529958030586-3aae4ca485ff` (dark wallet) |
| Collection 3 | `photo-1512327536842-5aa37d1ba3e3` (leather journal) |
| Collection 4 | `photo-1543076447-215ad9ba6923` (messenger bag) |
| Atelier | `photo-1551488831-00ddcb6c6bd3` (workshop interior) |

All hero images: `filter: brightness(0.82)` — passes ≥ 0.75 requirement.

---

## Color Rule Compliance

| Rule | Value | Status |
|------|-------|--------|
| `--bg` avg(R+G+B)/3 ≥ 20 | `#1A1410` → (26+20+16)/3 = 20.7 | PASS |
| `--surface` avg ≥ 20 | `#221814` → (34+24+20)/3 = 26.0 | PASS |
| Footer background | `var(--bg)` only | PASS |
| Hero image brightness | 0.82 | PASS (≥0.75) |

---

## Dependencies

```
GSAP 3.12.5         https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
ScrollTrigger       https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js
SplitText           https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js
Swiper 11           https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js
Playfair Display    Google Fonts
Inter               Google Fonts
```

---

## File Structure

```
leather-studio/
├── index.html      — complete self-contained landing page
├── meta.json       — template metadata for marketplace
└── readme.md       — this file
```

---

*Generated: 2026-02-20 — VERAK ATELIER luxury leather studio template*
