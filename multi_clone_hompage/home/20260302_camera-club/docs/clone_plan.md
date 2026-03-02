# Clone Plan — The Aperture Society

## Source Inspiration
Original design. Inspired by fine art photography school websites (ICP, RPS) and gallery/print house branding. No direct clone.

## Design Decisions

### Hero (Type D — Portraits + Stats Grid)
Left panel: content with eyebrow, title, tagline, three stat counters (Members/Exhibitions/Years), and CTAs. Right panel: portrait grid with 3 image cards — first card spans two rows (pc-large). Images use a subtle grayscale filter that clears on hover.

### Film Strip
A CSS-only film strip between hero and stats — alternating holes and frames using repeating flex layout. A purely decorative typographic/design element that reinforces the photographic identity.

### Gallery Pages
Collection.html uses a 3-column grid of portrait-format cards with grayscale-to-colour hover effect — a signature of this template.

### Philosophy Cards
Open aperture symbol icons (◎ ⊞ ▣) used instead of standard icons — reinforce optical/camera theme.

## Technical Notes
- Hero D grid: grid-template-columns 1fr 1fr
- Portrait grid: repeat(2,1fr) with pc-large grid-row: span 2
- Hero stat counters fire at page load (setTimeout 1.3s delay)
- All GSAP immediateRender at top level
- Footer background: var(--bg)
