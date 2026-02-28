# Design System — APERTURE NOIR

## Brand Identity

**Brand Name**: APERTURE NOIR
**Tagline**: "Frame by Frame."
**Category**: Film Director & Cinematographer Portfolio
**Aesthetic**: Film noir, cinematic darkness, festival sophistication

---

## Color Palette — P2 Cool Obsidian

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#101420` | Page background (avg 21.3) |
| `--surface` | `#181E2A` | Section backgrounds, cards |
| `--surface2` | `#1E2438` | Nested cards, step elements |
| `--accent` | `#4EE8FF` | Primary accent, CTAs |
| `--accent-light` | `#8AF3FF` | Hover states |
| `--accent-dark` | `#22B8CC` | Subdued accents |
| `--ivory` | `#DCE8F0` | Primary text |
| `--smoke` | `#8090A0` | Secondary text |
| `--muted` | `#506070` | Labels, captions |
| `--border` | `#1A2234` | Borders and dividers |

**Color safety**: `--bg` avg RGB = 21.3 (above minimum 20). All section backgrounds checked safe.

---

## Typography — F5 Fraunces + Inter

### Import
```
family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500
```

### Usage
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | Fraunces | 300 | clamp(6rem, 14vw, 16rem) |
| Section titles | Fraunces | 300 | clamp(2rem, 4vw, 3.4rem) |
| Pull quotes | Fraunces italic | 300 | font-style: italic |
| Body text | Inter | 300 | 0.9–0.95rem, line-height 1.75–1.85 |
| Labels | Inter | 400 | 0.58–0.68rem, letter-spacing 0.2–0.35em |
| CTAs | Inter | 500 | 0.7rem, letter-spacing 0.2em |

---

## Animation — A3 Precise

**Entrance animation parameters:**
```js
gsap.from(el, {
  immediateRender: false,
  x: -20,           // NOT y — horizontal slide
  duration: 0.75,   // 0.75s
  stagger: 0.04,    // 40ms between elements
  ease: 'power3.out'
})
```

**Hero scroll animation (Type G):**
```js
// Text diverges outward on scroll
gsap.to('.title-line.line-1', {
  immediateRender: false,
  x: '-28vw',
  scale: 0.35,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: 1.2 }
});
```

**CRITICAL**: `immediateRender: false` MUST be at the TOP LEVEL of gsap.from(), never inside scrollTrigger object.

---

## Hero Type G — Scroll-Driven Text Transform

The hero uses `min-height: 200vh` with a `position: sticky` inner container that creates a scroll-pinned viewport while the page continues scrolling behind it.

**Key measurements:**
- Title font size: `clamp(6rem, 14vw, 16rem)`
- Line 1 scroll target: `x: '-28vw', scale: 0.35`
- Line 2 scroll target: `x: '28vw', scale: 0.35`
- Scrub: `1.2` for smooth but responsive feel
- Scroll range: `start: 'top top', end: '60% top'`

**Line 2 styling** uses outline text:
```css
color: transparent;
-webkit-text-stroke: 1px var(--ivory);
```

---

## Component Patterns

### Section Tags
```html
<div class="section-tag">Label Text</div>
```
```css
.section-tag {
  font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase;
  color: var(--accent); display: flex; align-items: center; gap: 14px;
}
.section-tag::before { content: ''; width: 32px; height: 1px; background: var(--accent); }
```

### Ghost Typography Background
Used in page headers and CTA sections:
```css
.bg-ghost-text {
  font-family: var(--font-serif);
  font-size: clamp(8rem, 18vw, 20rem);
  color: transparent;
  -webkit-text-stroke: 1px rgba(78,232,255,0.04);
  pointer-events: none; user-select: none;
}
```

### Film Strip Decoration
Horizontally scrolling filmstrip holes:
```css
@keyframes filmScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```
