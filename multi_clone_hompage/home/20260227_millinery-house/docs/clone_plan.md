# Clone Plan — CHAPEAU NOIR Millinery House

## Reference Concept

This template draws inspiration from the visual language of Parisian haute couture houses and luxury fashion brands — specifically their use of monochromatic palettes, serif typography with high stroke contrast, and restrained editorial photography. No single real-world website was cloned or directly referenced.

## Design Decisions

### Palette Choice
Onyx Stone (P8) was selected for millinery because:
- Black hat-making has an inherent monochromatic logic
- Silver-grey accents (--accent: #B0B0C0) evoke polished metal hat pins, mirror stands, and steam
- The palette reads as genuinely Parisian — austere, editorial, certain of itself

### Typography
Bodoni Moda was chosen because:
- Its extreme thick-thin stroke contrast mirrors the structural contrast of hat-making (rigid crown, soft brim)
- It is the most couture-adjacent Google Font, referencing Didot and Bodoni used by French fashion houses
- The optical size axis (opsz 6–96) allows it to scale beautifully from display headings to body labels

### Hero Layout — Type B
The parallax hero was chosen over cinematic full-screen (Type A) because:
- Millinery is inherently multi-layered (hat stacked on head, feather stacked on hat)
- The mousemove parallax creates a sense of depth that mirrors the dimensional quality of sculpted headwear
- Ken Burns provides motion without animation gimmicks, keeping focus on the imagery

### Page Architecture
- 5 pages chosen to cover: brand (index), provenance (about), product (collection), craft (process), conversion (contact)
- Each sub-page uses the same design system but has a distinct structural personality
- Process page is the most content-heavy, reflecting the craft-forward nature of bespoke millinery

## Structural Map

| Page | Primary Sections | Word Count Target |
|------|-----------------|-------------------|
| index.html | 13 sections | 1,800+ words |
| about.html | 5 sections | 1,200+ words |
| collection.html | 4 sections + filter | 800+ words |
| process.html | 7 sections | 1,500+ words |
| contact.html | 4 sections + FAQ | 900+ words |

## Component Reuse

- Navbar: identical across all 5 pages (active state differs)
- Footer: simplified version on sub-pages (full version on index)
- Section eyebrow pattern: consistent 0.65rem, 0.4em letter-spacing, var(--accent) color
- Card pattern: image + info block, consistent hover behaviour

## Animation Strategy

A4 Dramatic persona applied consistently:
- All scroll reveals: `y: 40, duration: 1.2, ease: 'power2.inOut', stagger: 0.15`
- Hero entrance: SplitText char-by-char with 0.04 stagger
- Directional reveals: x:-60 for left-entry images, x:60 for right-entry images
- No CSS opacity:0 on any content element
