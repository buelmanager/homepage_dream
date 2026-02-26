# OBSCURA — Night Photography Academy & Expeditions

**Tagline:** Find the Light in Total Darkness

A luxury multi-page landing page for an elite night photography academy offering masterclasses, guided dark-sky expeditions, and astrophotography workshops.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page with star-field preloader, cinematic hero, portfolio gallery, academy overview, expeditions, master photographers, CTA |
| `about.html` | Academy story, timeline, awards, full faculty profiles |
| `workshops.html` | Workshop types, schedule table, what's included |
| `expeditions.html` | Global dark-sky expeditions, SVG world map, equipment guide |
| `contact.html` | Enrollment form, inquiry types, private hire, FAQ accordion |

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#15151E` (avg 24 — passes dark section check) |
| `--surface` | `#1C1C2A` |
| `--accent` | `#8060FF` (electric indigo) |
| `--accent2` | `#F0C840` (star gold) |
| `--text` | `#F0EEFF` |
| `--text-muted` | `#7060A0` |
| Heading font | Space Grotesk (Google Fonts) |
| Body font | Inter (Google Fonts) |

## Brand: OBSCURA

- **Founded:** 2013 (fictional)
- **Specialty:** Night photography — Milky Way, light painting, urban night, astrophotography
- **Faculty:** Dr. Elena Varek, Marcus Obi, Hana Sato, Ravi Menon, Dr. Yuki Tanaka, James Thornton
- **Expeditions:** Iceland, Sahara, Atacama, Himalayas (+ 8 more)
- **Stats:** 12 dark sky locations, 3000+ graduates, 47 awards

## Technical Notes

- GSAP 3.12.5 + ScrollTrigger loaded from cdnjs CDN
- `immediateRender: false` at top level of all `gsap.from()` calls (NOT inside scrollTrigger)
- No CSS `opacity: 0` on any content elements
- Star-field preloader uses JS-generated DOM elements with CSS animation
- Aperture SVG icon: pure inline SVG, CSS rotation animation
- SplitText not used (Club GSAP premium) — character animation handled via individual `<span>` elements
- All links are real page links (`index.html`, `about.html`, etc.) — no `href="#"`
- Fully responsive with mobile breakpoints at 900px and 600px
- Fixed scroll indicator with purple accent, hidden on mobile

## Images

All images sourced from Unsplash (free license, attribution not required for commercial use).
Primary thumbnail: `photo-1519681393784-d120267933ba` (Milky Way)

## File Structure

```
20260226_night-photography/
├── index.html
├── about.html
├── workshops.html
├── expeditions.html
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
