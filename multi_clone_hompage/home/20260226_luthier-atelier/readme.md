# VOSSLER & SON — Instruments of Legacy

**Slug:** `20260226_luthier-atelier`
**Tier:** PRO
**Industry:** Luthier / Fine Instrument Making
**Language:** English
**Type:** Single-page landing

---

## Brand

**VOSSLER & SON** — A fictional 4th-generation master luthier atelier in Mittenwald, Bavaria, rooted in the Cremona tradition. Est. 1887. Bespoke violins, violas, and cellos for concert soloists worldwide.

---

## Color System

| Variable      | Hex       | avg(R+G+B)/3 | Status |
|---------------|-----------|--------------|--------|
| `--bg`        | `#1E1509` | 20.0         | PASS   |
| `--surface`   | `#271B0C` | 26.0         | PASS   |
| `--surface2`  | `#2F2010` | 31.7         | PASS   |
| `--surface3`  | `#352515` | 37.0         | PASS   |
| `--accent`    | `#C8821A` | amber varnish| —      |
| `--accent2`   | `#E8C488` | light wood   | —      |

---

## Sections

1. **Preloader** — SVG violin outline draw animation + brand reveal
2. **Navbar** — Fixed, minimal, with "Commission an Instrument" CTA
3. **Hero** — Full-screen cinematic workshop image + oversized italic headline + floating "Est. 1887" badge
4. **Heritage** — 4-generation story + timeline (1887 → 1934 → 1971 → 2009 → Now)
5. **Instruments** — 3 cards: Violin / Viola / Cello with specs and pricing
6. **Process** — 7-step horizontal process timeline (Selection → Delivery)
7. **Notable Instruments** — 3 featured commissions for fictional soloists
8. **Workshop Visit** — Gallery grid + booking appointment form
9. **Testimonials** — 3 quotes from fictional concert soloists
10. **Commission** — CTA with features list + full commission enquiry form
11. **Footer** — `background: var(--bg)` only

---

## Fonts

- Headings: `Playfair Display` — Italic + weights 400/600/700
- Body: `Crimson Pro` — Weights 300/400/600, italic variants

---

## Animation

- Library: GSAP 3.12.2 + ScrollTrigger (cdnjs CDN)
- Inline SplitText polyfill
- All `gsap.from()` with scrollTrigger use `immediateRender: false` at top level
- No `opacity: 0` set in CSS
- Scroll indicator: fixed left, amber dots with section labels on hover/active

---

## Images (Unsplash)

| ID                        | Usage                        |
|---------------------------|------------------------------|
| `1511512578047-dfb367046420` | Hero — violin being crafted |
| `1465821185474-20f201100d6e` | Instrument card — Violin    |
| `1558584673-f7bfb8a10e80`    | Instrument card — Viola     |
| `1513883049090-d0b7439799bf` | Instrument card — Cello     |
| `1507838153414-b4b713384a76` | Notable — Isabelle (Violin) |
| `1493225457124-a3eb161ffa5f` | Notable — Rafael (Cello)    |
| `1518609878373-06d740f60d8b` | Notable — Yuki (Viola)      |
| `1548550023-2631f049773f`    | Workshop gallery — large    |
