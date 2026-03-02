# Clone Plan — Alpine Meridian Club

## Source Inspiration
Original design. Inspired by high-end outdoor apparel brands (Patagonia, Arc'teryx) and expedition outfitter websites. No direct clone.

## Design Decisions

### Hero (Type B — Parallax)
Two background layers with different parallax speeds create depth. Layer-1 (main mountain image) moves slower; Layer-2 (atmospheric overlay) moves faster and uses mix-blend-mode: overlay. Mousemove event adds lateral parallax for interactivity.

### Colour Strategy
Dark forest green base (#0F1A10) — deepest of all five pages, evoking dense alpine forest at night. Vivid #4DAF6A accent is bright alpine meadow green, high contrast and optimistic.

### Altitude Bar
Small altitude indicator in hero bottom-right (8,200m asl) — a signature detail that reinforces the alpine identity.

### Expedition Calendar Layout
Uses a horizontal row layout with image, description, and metadata columns — more documentary/functional than the grid-based collection view used in other pages.

## Technical Notes
- All GSAP immediateRender: false at top level
- Footer background: var(--bg) only
- Philosophy grid: display:grid 3-col
- Collection overflow: visible
