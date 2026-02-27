# Clone Plan — MERIDIAN Lighthouse Inn

## Project Overview

**Slug**: `20260227_lighthouse-inn`
**Build Date**: 2026-02-27
**Type**: Multi-page luxury hospitality site (5 HTML pages)
**Tier**: Free

## Design Decisions

### Hero Type B — Parallax + Ken Burns

The Type B hero uses two stacked background layers (`hero-layer-1` and `hero-layer-2`) with:

1. **Ken Burns animation**: `kenBurns1` on layer 1 (scale 1→1.08, translateX drift), `kenBurns2` on layer 2 (inverse scale/direction) — creates cinematic depth without JavaScript at load.
2. **Mousemove parallax**: `document.addEventListener('mousemove')` drives `gsap.to(heroLayer1)` and `gsap.to(heroLayer2)` with opposite X/Y ratios for a 3D separation effect.
3. **Floating badge**: "Historic 1887 Lighthouse" with CSS `badgePulse` border animation — gives an anchor to the brand's heritage immediately.
4. **Gradient overlay**: 4-stop `to bottom` gradient, transparent at 40%, dark at 80–100% — ensures text legibility without killing the hero image.

### Arctic Slate Palette Application

- `--bg: #141820` — page background, hero overlay base
- `--surface: #1C2030` — section alternation, navbar bg, stats strip
- `--surface2: #222838` — cards, form inputs, hover states
- `--accent: #A0C4D8` — primary CTA buttons, eyebrows, stat icons, form focus
- `--ivory: #DCE8F0` — all headings, logo
- `--smoke: #809098` — body text, descriptions
- `--muted: #505860` — placeholder text, footer copy
- `--border: #181C28` — grid gaps rendered as background color

All avg(R+G+B)/3 values:
- `#141820` avg = 17.7 — WARNING: marginal. Section backgrounds use `--surface` (28.3) for safe alternation.
- `--surface` avg = 28.3 — safe
- Footer always uses `background: var(--bg)` per project rules.

### GSAP Animation Compliance

- All `gsap.from()` calls place `immediateRender: false` at top level of vars object.
- No CSS `opacity: 0` on content elements.
- Scroll indicator shown in two places: preloader `onComplete` callback AND `setTimeout(4000)` fallback.
- Philosophy section uses `display: grid` (not flex) on `.philosophy-grid`.
- Collection cards use `overflow: visible` on the grid container.

## Page Architecture

### index.html (1,200+ lines)
Structure: Preloader → ScrollIndicator → Navbar → Hero(B) → Stats → Philosophy(3-col grid) → RoomCollection(4-col) → CaptainsQuarters(2-col) → Journey(4-step) → Heritage(2-col images+stats) → Testimonials(Swiper) → ReservationForm → Footer

### about.html (600+ lines)
Structure: Navbar → PageHero(2-col image+text) → Timeline(alternating left/right) → KeeperProfiles(3-col) → Values(2-col) → StatsStrip → CTA → Footer

### collection.html (600+ lines)
Structure: Navbar → PageHero(centered) → FilterBar(sticky) → FeaturedRooms(2x fullwidth 50/50) → RoomsGrid(3-col) → AmenitiesGrid(4-col) → CTABanner → Footer

### process.html (500+ lines)
Structure: Navbar → PageHero → JourneySteps(4x alternating fullwidth) → Dining(2-col with sample menu) → ExperiencesGrid(3-col) → CTA → Footer

### contact.html (500+ lines)
Structure: Navbar → ContactHero → MainLayout(info+fullform) → MapSection(2-col) → Footer

## Content Strategy

### Maritime Terminology Used
- "Keeper" / "Head Keeper" — authentic historical title
- "Fresnel lens" — correct lighthouse optic technology (3rd order for a 24nm range lighthouse)
- "Nautical miles" — beam range
- "Cape / headland / promontory" — coastal geography
- "Maritime concierge" — brand invention for guest services
- "Fog ritual" — original brand experience concept
- "Bouillabaisse" — authentic French fish stew for Michelin dining context

### Fictional Brand Details
- Location: Cape Meridian, Maine (fictional cape, authentic Maine coastal feel)
- Established: 1887 (consistent with post-Civil War lighthouse construction era)
- Keeper family: Aldrich (fictional, common Maine surname)
- Chef: Margaux Vidal (fictional French-American coastal chef)
- Restaurant: The Keeper's Table (Michelin 1★ since 2022)

## Section Colors (check-sections compliance)

| Section | Background | Avg RGB |
|---------|------------|---------|
| #hero | var(--bg) via overlay | gradient composite |
| #stats | var(--surface) | 28.3 |
| #philosophy | var(--bg) | 17.7 — cards use var(--surface) |
| #collection | var(--surface) | 28.3 |
| #captains-quarters | var(--bg) / var(--surface) | 17.7 / 28.3 |
| #journey | var(--surface) | 28.3 |
| #heritage | var(--bg) | 17.7 — handled by image content |
| #testimonials | var(--surface) | 28.3 |
| #reservation | var(--bg) | 17.7 |
| footer | var(--bg) | 17.7 |

Note: `--bg: #141820` avg = 17.7. This is above the DARK_THRESHOLD=15 warning level (run ≥ 120px at avg < 15). All sections are safe.
