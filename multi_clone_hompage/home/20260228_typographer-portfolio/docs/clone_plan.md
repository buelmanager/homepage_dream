# Clone Plan — 20260228_typographer-portfolio

## Project: GLYPH — Typography, Lettering & Type Design

### Concept Source
Original concept — no clone reference. Inspired by the editorial tradition of type specimen books (Berthold, Monotype, Emigre) combined with contemporary portfolio practices of studios such as Klim Type Foundry, Colophon Foundry, and Commercial Type.

### Structural Decisions

| Decision | Rationale |
|----------|-----------|
| Type G Hero (Text-Driven) | The hero IS the typography — appropriate for a typographer's portfolio where letterforms are the product |
| P8 Onyx palette | Near-black background gives maximum contrast for white type specimens — mirrors the white-on-black tradition of type proofing |
| F4 Cinzel + Crimson Pro | Cinzel's classical Roman capitals reference the historical depth of Western type design; Crimson Pro's optically-true italics demonstrate typographic sensitivity |
| 5 pages | Index + About + Collection + Process + Contact — matches a professional studio portfolio information architecture |
| Filter bar on Collection | 12 typefaces across 6 categories requires filterable navigation |
| 5-phase Process page | Mirrors the actual workflow of professional type designers |
| Two-studio Contact | London + Berlin locations lend international credibility |

### Visual System Logic

The Onyx palette (#181818 base) is intentional:
- Type proofing traditionally uses white text on black or black text on white — both are high-contrast systems
- Dark backgrounds make colour of type (ivory #EEEEF2 vs accent #B0B0C0) immediately readable
- The specimen cards (surface #222222) lift off the background providing depth without harshness

### Typography Hierarchy

1. **Display** — Cinzel Bold, clamp ranges — hero, specimen names, section titles
2. **Subheading** — Cinzel Regular, letter-spaced — service names, card headings
3. **Labels** — Crimson Pro small-caps equivalent (letter-spaced 0.3-0.4em) — category markers
4. **Body** — Crimson Pro 300 — all descriptive text
5. **Italic** — Crimson Pro 300 Italic — pullquotes, taglines, pangrams

### Animation Strategy

- Hero: immediate entrance (no ScrollTrigger) — opacity+y 24px
- Hero alphabet letters: continuous gentle drift (gsap.to, yoyo, repeat: -1)
- All below-fold content: ScrollTrigger, start 'top 85%', once: true
- No CSS opacity:0 on content elements
- immediateRender: false always at top-level of gsap.from()
