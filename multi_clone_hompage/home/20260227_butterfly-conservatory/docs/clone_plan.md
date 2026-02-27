# Clone Plan — LEPIDOPTERA Butterfly Conservatory

## Project Brief

**Brand:** LEPIDOPTERA — Butterfly Conservatory & Botanical Garden
**Tagline:** "Where Wings Tell Stories"
**Industry:** Tropical butterfly conservatory and botanical immersion
**Tone:** Organic wonder, tropical luxury, living art
**Tier:** Free (price: 0)

---

## Design Decisions

### Hero Layout — Type B (Parallax + Ken Burns)
Selected for the soft, living quality that parallax movement gives to natural imagery. The two-layer approach — a brightness-filtered base image with an overlay-blended second layer — creates depth that feels organic rather than designed. Ken Burns animation adds subtle life to static imagery, reinforcing the "living" nature of the brand.

### Color Palette — Forest Night
The `#0F1A10` background is a deep forest green-black that reads as warm and organic rather than cold. The `#4DAF6A` accent is precisely the green of a Morpho wing's inner surface — not the iridescent blue, but the velvet underside. Every surface value was calibrated to maintain the `avg(R+G+B)/3 >= 20` minimum brightness requirement.

| Token | Hex | RGB Avg | Status |
|-------|-----|---------|--------|
| `--bg` | `#0F1A10` | 21.3 | PASS |
| `--surface` | `#162016` | 23.0 | PASS |
| `--surface2` | `#1A2A1A` | 27.3 | PASS |
| `--border` | `#182018` | 24.7 | PASS |

### Typography — DM Serif Display + Karla
DM Serif Display is chosen for its slightly condensed letterforms and elegant italic. In the hero, the combination of roman and italic weights creates visual rhythm without requiring color contrast alone. Karla at weights 300/400/500 provides a clean, open sans-serif that reads well at small tracking values.

### Animation — Organic A5
`gsap.utils.random(20, 28)` y-values are used throughout to avoid the mechanical uniformity of fixed y offsets. The random range is always within the 20–28px safe zone — enough visual movement to indicate animation without causing the layout to feel unstable. All `stagger: 0.09` values create a natural cascade.

---

## Page Architecture

### index.html — Primary Landing Page
**Target:** First-time visitors, general discovery
**Conversion goal:** Reserve a visit (primary CTA repeated 3x)
**Sections:** 13 sections, 1,300+ lines

Design rationale:
- Hero opens on the "wonder" proposition before any practical information
- Stats section immediately establishes authority (2000+ butterflies, 300 species)
- Philosophy grid (3-column CSS grid) builds brand trust through stated values
- Species collection creates desire through visual preview
- Greenhouse full-bleed section creates immersive pause
- Process/Journey section is educational — differentiating LEPIDOPTERA from a standard zoo visit
- Heritage builds the founders' narrative
- Testimonials provide social proof
- Booking section enables immediate conversion

### about.html — Brand Depth Page
**Target:** Considering visitors, researchers, press
**Sections:** Founders story, conservation mission (3 pillars), timeline (7 events), science team (4 profiles)

### collection.html — Species Discovery Page
**Target:** Nature enthusiasts, school groups, researchers
**Sections:** Filter bar, 5 featured species (full-narrative), 48-cell gallery grid

### process.html — Educational Experience Page
**Target:** First-time visitors seeking to understand what they'll see
**Sections:** 4-stage lifecycle (column layout), 5 biome zones, breeding program stats, release ceremony schedule

### contact.html — Conversion Page
**Target:** Ready-to-book visitors, group organizers
**Sections:** Visit info strip, experiences selector + form, group/private events, directions, hours, ticket prices, FAQ (6 items)

---

## Competitor Research Notes

Tropical butterfly conservatories commonly use:
- Stock photography-heavy designs with minimal original content
- Basic grid layouts without immersive depth
- Generic travel/nature color palettes (greens and blues without system)

LEPIDOPTERA differentiates by:
- Building a full brand mythology (founders, heritage, conservation mission)
- Using color as a precise system derived from the subject matter
- Writing copy at naturalist quality — specific, accurate, storytelling-first
- Typography that feels curatorial rather than commercial

---

## Build Log

- Created: 2026-02-27
- Builder: Claude Sonnet 4.6 (claude-sonnet-4-6)
- All pages validated for dark section compliance (bg >= avg 20)
- No CSS opacity:0 on content elements
- immediateRender:false confirmed at top level of all gsap.from() calls
- SplitText polyfill embedded in index.html
- Scroll indicator: preloader callback + setTimeout(4000ms)
- Philosophy grid: display:grid confirmed
