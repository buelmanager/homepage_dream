# MERIDIAN — Instruments of Passage

**Industry:** Haute Horlogerie / Bespoke Watch Atelier
**Brand:** MERIDIAN
**Location:** Glashütte, Germany (fictional)
**Tagline:** "Every Second Was Always Yours"

---

## Selected Industry & Concept

**Industry:** Haute horlogerie / bespoke watch atelier — absent from the existing 50+ template library.

**Concept:** MERIDIAN is a fictional independent watch atelier that positions itself around singular life events rather than heritage prestige or technical complexity. The central proposition:
*"We do not make watches for collectors. We make watches for people who have lived a moment worth marking permanently."*

Each MERIDIAN commission is tied to one specific moment in the client's life — marriage, birth of a child, founding of a company, survival of illness. This inversion of typical watch marketing (heritage prestige, technical specification, collection-building) creates an entirely original positioning in the category.

---

## Research Summary

| Brand | URL | Key Insight |
|-------|-----|-------------|
| Patek Philippe | https://www.patekphilippe.com | Generational narrative ("You never actually own...") — we inverted this to singular-event ownership |
| A. Lange & Söhne | https://www.alange-soehne.com | Glashütte precision + German restraint — borrowed location authenticity, rejected cold minimalism |
| F.P. Journe | https://www.fpjourne.com | Independent master watchmaker as brand — inspired the "one watchmaker per commission" model |
| Greubel Forsey | https://www.greubel-forsey.com | Dark cinematic aesthetic — inspired the warm-midnight palette direction (then differentiated via amber warmth) |

Full originality analysis: `docs/originality_report.md`

---

## Style Direction

**Keywords:** burnished-brass, midnight-warm, manuscript, atelier, poetic-precision, ceremony, restraint, Glashütte, editorial-serif, contemplative

**Tone:** Poetic realism. Every sentence grounded in physical craft — no abstract luxury boasting. Uses contrast (waiting vs. urgency, twenty-two watches vs. industry scale) to position through specificity.

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#0A0806` | Warm midnight black — aged ink |
| Surface | `#110E0A` | Cards, atelier section |
| Surface 2 | `#181310` | Hover states |
| Gold (Burnished Brass) | `#B8965A` | Primary accent — CTAs, labels, decor |
| Gold Light (Champagne) | `#D4B070` | Hover, headline italic, gradient ends |
| Gold Dark (Aged Bronze) | `#7D6030` | Borders, step accent, gradient start |
| Gold Pale | `rgba(184,150,90,0.10)` | Subtle card backgrounds |
| Ivory | `#EDE8DC` | Primary text — aged manuscript feel |
| Smoke | `#9A9184` | Body copy, secondary content |
| Muted | `#5A5348` | Labels, captions, placeholders |
| Border | `#1E1914` | Primary hairlines |
| Border 2 | `#2A2418` | Card borders, section dividers |

---

## Typography

| Font | Role | Weights | Source |
|------|------|---------|--------|
| Libre Baskerville | Display/Headings | 400 (regular), 400 (italic), 700 | Google Fonts |
| Barlow | Body / UI | 300, 400, 500, 600 | Google Fonts |
| Barlow Condensed | Labels / Caps / Nav | 300, 400, 500 | Google Fonts |

**Rationale:** Libre Baskerville is a humanist old-style serif with warmth and optical precision — appropriate for watchmaking without referencing Vogue/luxury-brand serifs (Sabon, Bodoni). Barlow provides a clean geometric complement at body size. Barlow Condensed gives the narrow utility text its distinct compressed character for labels, nav, and counters. No font in this combination is used by any of the 4 researched brands.

---

## Key UX / UI Decisions

1. **Hero with no product** — Every referenced brand shows the watch case in the hero. MERIDIAN shows only atmosphere: watch macro + movement depth layer + floating Roman numerals. Forces emotional engagement before commerce.

2. **Philosophy as horizontal drag-scroll** — Four philosophy cards (Precision, Waiting, Moment, Abundance) are presented in a drag-scrollable track. This section type appears in no referenced brand.

3. **Complications block as stats** — Rather than standard counter blocks, stats are framed in watch-dial language (label above = complication name, value below = readout). Turns site metrics into horological vocabulary.

4. **Collection: diagonal offset grid** — Four watch cards arranged in a 2×2 grid with alternating vertical offset (card 2 shifted down 80px, card 3 shifted up 80px). Creates diagonal reading rhythm instead of standard grid.

5. **Commission form asks about a moment, not a model** — The inquiry textarea prompt is "Describe the moment you wish to mark." This single question embodies the entire brand position.

6. **"Against Abundance" philosophy card** — Positions 22 watches/year as a deliberate moral choice, not a capacity limit. Inverts the industry convention of boasting heritage volume.

7. **One watchmaker per commission** — Stated explicitly in copy. Reinforces artisan identity over industrial efficiency.

8. **Geneva Seal refusal narrative** — Heritage timeline includes a 2011 entry where the atelier "respectfully declines" certification, preferring an internal standard more stringent than any external body. Turns a limitation into a differentiator.

---

## Animation & Interaction Summary

### Hero
- **SplitText entrance:** Each character in headline animates in with `rotationX: -60` and stagger `0.035s`
- **Floating Roman numerals:** 6 numerals positioned at varying depths with gentle sine-wave float loops (4–6s cycles)
- **Mouse parallax:** Background, depth layer, and numerals respond to mouse movement at different speeds (depth = 12px, numerals = 20–40px depending on position)
- **Scroll parallax:** Background shifts `yPercent: 25`, depth layer `yPercent: 15` on scroll via GSAP ScrollTrigger scrub

### Left-Side Scroll Indicator
- 8 sections tracked (01–08)
- Each section has a dot + number + label
- Active dot glows gold, label slides in on active/hover
- Progress lines between dots fill gold when sections above active
- IntersectionObserver-equivalent via GSAP ScrollTrigger position comparison

### Section Animations
- **Generic reveals:** `opacity: 0 → 1`, `y: 28 → 0`, `0.9s power2.out` via ScrollTrigger `start: 'top 82%'`
- **Watch cards:** Staggered `0.12s`, with `scale: 0.97 → 1` for subtle zoom effect
- **Process steps:** `x: -20 → 0` slide from left, triggered per-step
- **Atelier image:** Scroll-scrubbed `translateY(-40px)` parallax while maintaining `scale(1.06)` for edge fill
- **Timeline items:** `x: -16 → 0` per item with `0.08s` delay cascade
- **Inquiry section:** Left panel slides from `x: -40`, right from `x: 40`
- **CountUp:** Triggered once on `#complications` entering `top 75%`

### Custom Cursor
- Small gold dot + 32px ring (desktop only)
- Ring expands to 48px on interactive elements

### Mobile
- Mouse parallax disabled
- SplitText animation remains, other animations simplified
- Prefers-reduced-motion: All animations disabled at `0.01ms` via media query

---

## Performance & Accessibility Notes

- All below-fold images use `loading="lazy"`
- `alt` text on every image
- `prefers-reduced-motion` CSS resets all animations
- Semantic HTML: `<header>`, `<footer>`, `<section>`, `<nav>`, `<form>`, `<blockquote>`
- Color contrast: gold `#B8965A` on `#0A0806` passes AA for large text
- Focus-visible transitions on all interactive elements
- Custom scrollbar matches brand palette (4px gold-dark track)
- Mobile fullscreen menu with `role="dialog"` and `aria-modal="true"`
- Form uses `<label>` elements with proper `for`/`id` associations
- No framework dependency — vanilla JS + GSAP + Swiper (CDN)

---

## Run / Build Instructions

Static HTML — zero build required.

```bash
open index.html
# or
npx serve .
# or
python3 -m http.server 8080
```

**CDN dependencies (no install):**
- GSAP 3.12.2 + ScrollTrigger + SplitText (animations)
- Swiper 11 (press carousel)
- Google Fonts (Libre Baskerville + Barlow + Barlow Condensed)

---

## Image Sources

All images Unsplash (free license). Full validation: `docs/image_validation.md`.
15 of 20 candidates passed HTTP validation. 5 excluded (404).

| Section | Subject |
|---------|---------|
| Hero background | Watch macro — extreme close-up |
| Hero depth layer | Watch movement detail |
| Collection Ref. 01 | Luxury dress watch |
| Collection Ref. 02 | Watch on wrist |
| Collection Ref. 03 | Close-up complications |
| Collection Ref. 04 | Guilloché dial |
| Atelier main | Watchmaker's hands |
| Atelier detail 1 | Movement close-up |
| Atelier detail 2 | Mechanical gears |
| Heritage background | Watch collection |
| Inquiry form bg | Dark atmospheric workspace |
