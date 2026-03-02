# Originality Report — The Folio Society of Letters

## Design Originality

### Hero Type G Implementation
Three-word scroll-driven hero — "READING / is the Grandest / ADVENTURE" — uses mixed case and italic for visual rhythm that directly reflects the literary tone. Distinct from standard Type G single-brand-name implementations.

### Typography Character
Libre Baskerville in italic with strong `<em>` usage creates a book-spine, editorial quality. Combined with Source Sans 3 for body text — the contrast is intentionally academic.

### Events Programme Page
`process.html` repurposed as a literary events calendar with date-forward grid rows — an original structural choice for the society context. The visual language (large day number, divider line, title, CTA) is clean and functional.

### Content Voice
Copy throughout maintains a distinct literary voice — measured, slightly formal, self-aware. "We welcome letters... though we confess to a slight preference for well-crafted prose" is emblematic.

## Technical Compliance
- Hero Type G: correct `position: fixed` for .hero-bg, `position: sticky` for .hero-text-wrap
- GSAP `immediateRender: false` at top level on all from() animations
- Footer uses `background: var(--bg)` only
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Collection/library grids: `overflow: visible`
- No CSS opacity:0 on content elements
