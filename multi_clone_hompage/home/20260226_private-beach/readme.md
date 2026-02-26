# AZURA — Where the Sea Belongs to You
## Luxury Multi-Page Landing Page

### Overview
AZURA is an ultra-exclusive private beach club concept landing page built for the premium hospitality market. The site presents a members-only beach club located on a secluded Mediterranean island, conveying absolute luxury, privacy, and natural beauty through a deep ocean design palette with turquoise accents.

---

### Files
| File | Description |
|---|---|
| `index.html` | Main landing page with cinematic hero, 5 sections, preloader |
| `about.html` | Club history, island geography, team, philosophy |
| `experiences.html` | Beach, watersports, spa, dining experiences |
| `membership.html` | Tier comparison, application form, process |
| `contact.html` | Enquiry form, island access, day visit info |
| `meta.json` | Template metadata |
| `images/thumbnail.webp` | Template thumbnail (600px wide) |
| `docs/clone_plan.md` | Design plan and implementation notes |
| `docs/originality_report.md` | Originality and design uniqueness report |
| `docs/image_validation.md` | Unsplash image URL validation log |

---

### Design System
```
--bg:           #0F1E2E  (deep ocean, avg=30.3 ✓)
--surface:      #152438  (dark navy surface)
--accent:       #20BFCC  (Mediterranean turquoise)
--accent2:      #F0D080  (sand gold)
--text:         #EEF8FF
--text-muted:   #7090A8
```

**Fonts:**
- Headings: Cormorant Garamond (Google Fonts, 300/400/500/600)
- Body: Inter (Google Fonts, 300/400/500/600)

---

### Key Features
- Animated SVG wave preloader
- Ken Burns cinematic hero with horizontal text split
- Stats bar at hero bottom (4 animated metrics)
- Floating compass rose (SVG, continuously rotating)
- Fixed left-side scroll indicator with animated drop line
- GSAP ScrollTrigger animations on all sections
- Sticky sub-navigation on experiences page
- Benefit comparison table on membership page
- 4-step application process visualization
- Full contact + island access guide

---

### GSAP Implementation
All animations follow project rules:
- `immediateRender: false` placed at TOP LEVEL of all `gsap.from()` calls
- No `opacity: 0` set via CSS on content elements
- Scroll indicator shown in 2 places: preloader callback + setTimeout(4000ms)
- Stagger values: 0.08–0.12s, Y values: 20–40px max, durations: 0.9–1.2s

---

### Images (Unsplash)
All images reference Unsplash CDN with format/quality parameters. Primary image validated 200 OK:
- `photo-1507525428034-b723cf961d3e` — beach aerial (primary, verified)
- `photo-1529958030586-3aae4ca485ff` — fallback (pre-validated)

See `docs/image_validation.md` for full validation log.

---

### Browser Support
Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
Mobile responsive at 768px and 1024px breakpoints.
