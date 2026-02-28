# Design Decisions — 20260228_wealth-management

## Hero Layout: Type D — Portrait + Stats Grid

**Decision:** The hero is a full-screen 50/50 split grid:
- LEFT side: A tall portrait image (`hero-1.webp`) of a senior advisor in consultation, using `object-position: top` to prioritize facial/upper body composition
- RIGHT side: Deep Burgundy `--surface` background containing brand text + a 2×2 stat card grid

**Rationale:**
- Type D is underrepresented in the template library (brief mandated this)
- For wealth management, a human portrait communicates trust and personal relationship — the core brand promise
- Stats presented as cards (not numbers in the body) give the hero gravitas: $48B / 1,200 / 95yrs / 99%
- The right side's dark surface creates contrast with the image while maintaining palette cohesion

**Stat Card Design:**
- `display: grid; grid-template-columns: 1fr 1fr` — 4 cards in 2 rows of 2
- `border-left: 2px solid var(--accent)` — the only colored accent on each card
- Serif numerals (`EB Garamond`) for the large stat number, sans-serif (`Nunito`) for the label

---

## Color Palette: P4 — Deep Burgundy

**Primary:** `#C96A8A` (rose-burgundy accent on near-black backgrounds)
- bg `#1A0A0E`: avg(26+10+14)/3 = 16.7 — very deep but appropriate for luxury finance
- surface `#241016`: avg(36+16+22)/3 = 24.7 — safe ✓
- surface2 `#2C1420`: avg(44+20+32)/3 = 32 — safe ✓

**Why Burgundy for Wealth Management:**
Traditional wealth management uses navy/charcoal. Choosing deep burgundy differentiates Ashworth Private as a firm with warmth, heritage, and human relationship — not cold institutional finance. The rose-burgundy accent reads as sophisticated without being harsh, consistent with the "enriching legacies" tagline's warmth.

**Accent Usage Pattern:**
- `var(--accent)` for: eyebrows, stat numbers, section lines, borders
- `var(--accent-light)` for: hover states, emphasized italic text in section titles
- `var(--accent-dark)` for: pressed/disabled states
- Never used for: background fills larger than button size

---

## Typography: F10 — EB Garamond + Nunito

**EB Garamond** — Classical oldstyle serif, authentic heritage feel
- Used for: brand name, headings, blockquotes, manifesto text, stat numbers, italic emphasis
- Italic variant creates elegance in pull-quotes and highlighted text (e.g., "enriching *legacies*")
- Creates clear connection to 1929 founding era without feeling archaic

**Nunito** — Humanist sans-serif with rounded terminals, warmth
- Used for: body copy, eyebrows, labels, form elements, navigation
- Weight 300 for body gives an airy, refined feel without compromising legibility
- Weight 500 for CTAs, labels — provides hierarchy without bold weight excess

**Type Hierarchy:**
```
Brand wordmark:    EB Garamond 400, 1.05rem, letter-spacing 0.28em
Section titles:    EB Garamond 400, clamp(2rem, 3.5vw, 3rem)
Manifesto quotes:  EB Garamond 400 italic, clamp(1.5rem, 2.6vw, 2.4rem)
Stat numbers:      EB Garamond 400, 2.6rem
Eyebrows:          Nunito 400, 0.6rem, letter-spacing 0.35–0.38em, uppercase
Body copy:         Nunito 300, 0.88–0.92rem, line-height 1.8–1.85
Labels/Tags:       Nunito 400–500, 0.58–0.68rem, letter-spacing 0.2em, uppercase
```

---

## Animation: A2 — Whisper

**Parameters:** `y: 14, duration: 1.5, stagger: 0.06, ease: 'power1.out'`

**Philosophy:** Wealth management clients expect gravitas, not flashy animation. The Whisper preset is the most restrained in the library — elements appear to settle gently into place rather than flying in.

- `y: 14px` — minimal vertical displacement, barely perceptible movement (NOT 40–60px)
- `duration: 1.5s` — very slow, deliberate reveals
- `stagger: 0.06s` — tight sequencing, elements appear nearly together but with subtle cascade
- `ease: 'power1.out'` — gentle deceleration, no drama

**GSAP Critical Rule Compliance:**
All animations use `immediateRender: false` at the TOP LEVEL of `gsap.from()` objects. Zero exceptions. This prevents the "invisible on scroll" bug that occurs when GSAP renders initial opacity:0 state before ScrollTrigger can override it.

---

## Section Architecture

### Index (Home)
1. Hero (Type D split)
2. Philosophy/Manifesto (center-aligned quote, full-width)
3. Pillars (3-column grid, foundational principles)
4. Services (Swiper carousel, 3-per-view)
5. Process (abbreviated 5-step timeline)
6. Testimonials (3-column cards)
7. Gallery (asymmetric grid: one 2-col + three 1-col)
8. CTA (full-width, radial decorative ring)
9. Footer

### Section Background Alternation
`--bg` → `--surface` → `--bg` → `--surface` → `--bg` → `--surface` → `--bg` → `--surface2` → `--bg`

All section dividers use `linear-gradient(90deg, transparent, rgba(201,106,138,0.25–0.35), transparent)` for a subtle horizontal rule effect.

---

## Brand Voice Notes

**ASHWORTH PRIVATE** reads as:
- Quietly authoritative (never boastful)
- Deeply private (no performance marketing)
- Generationally focused (decades, not quarters)
- Human at its core (legacies, families, relationships)

Copy is written in the voice of an institution that does not need to sell itself — one that expects clients to qualify for the privilege of working with it, not the reverse.

Key copy choices:
- "We serve fewer than 1,200 families — by design."
- "The discovery consultation carries no obligation. We believe the right decision takes time and trust."
- "Great wealth demands great stewardship, not speculation."
