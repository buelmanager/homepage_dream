# IGNIS — Volcanic Thermal Spa & Wellness

**Born from the Earth's Core.**

A luxury multi-page landing page for IGNIS, a fictional volcanic thermal spa built above an active geothermal vent in Iceland's southern highlands.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page with lava preloader, hero, 5 sections, footer |
| `about.html` | Origin story, geothermal science, sustainability, team |
| `experiences.html` | Four experiences: pools, volcanic ash, obsidian steam, aurora pods |
| `retreat.html` | 3 retreat packages, seasonal calendar, what's included, private hire |
| `contact.html` | Booking inquiry form, arrival logistics, gift vouchers, FAQ |

---

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#231212` (avg 23.7 — passes dark check) |
| `--surface` | `#2E1818` |
| `--accent` | `#FF6030` (lava orange) |
| `--accent2` | `#F0C080` (warm glow) |
| `--text` | `#F5EEE8` |
| `--text-muted` | `#A06050` |
| Heading Font | Fraunces (Google Fonts, serif) |
| Body Font | Inter |

---

## Technical Notes

- GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- All `gsap.from()` with ScrollTrigger use `immediateRender: false` at TOP LEVEL (not inside scrollTrigger object)
- No CSS `opacity: 0` on content elements
- Preloader: CSS-only lava rise animation, brand reveal at 2.8s
- Scroll indicator: left-fixed, orange accent, shown after preloader + setTimeout(4000ms) fallback
- Hero parallax via JS scroll event
- All internal links use real `.html` paths — no `href="#"` stubs
- Images: Unsplash CDN with validated IDs
- Thumbnail: `images/thumbnail.webp` (35KB, 600px wide)

---

## Unsplash Images Used

All images validated as HTTP 200:

| Usage | Unsplash ID |
|-------|-------------|
| Hero / Thumbnail | `photo-1501854140801-50d01698950b` |
| Geology / Pools | `photo-1545569341-9eb8b30979d9` |
| Volcanic Treatments | `photo-1571019613454-1cb2f99b2d8b` |
| Aurora Pods BG | `photo-1531366936337-7c912a4589a7` |
| Night Sky / Aurora | `photo-1519681393784-d120267933ba` |
| Mountain / Landscape | `photo-1506905925346-21bda4d32df4` |
| Origin Story | `photo-1559827291-72ee739d0d9a` |

---

## File Structure

```
20260226_volcanic-spa/
├── index.html
├── about.html
├── experiences.html
├── retreat.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Brand Concept

IGNIS is a luxury volcanic thermal spa built directly above an active geothermal vent in Iceland. Guests bathe in naturally heated mineral pools, receive volcanic ash treatments, steam in obsidian chambers, and sleep in glass-ceiling pods watching the aurora borealis. The brand identity draws on the primal power of Iceland's volcanic geology, expressed through deep crimson tones, lava-orange accents, and a typeface (Fraunces) that carries both antiquity and elegance.
