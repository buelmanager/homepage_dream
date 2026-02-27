# Clone Plan — CANOPY Forest Treehouse Lodge

## Design Brief Summary

**Template ID:** `20260227_treehouse-lodge`
**Brand:** CANOPY — Forest Treehouse Lodge
**Tagline:** "Above the World, Within the Wild"
**Industry:** Exclusive eco-luxury treehouse lodge in ancient forest canopy
**Tier:** Free

---

## Reference Concept Sources

This template draws design inspiration from the following conceptual areas — NOT direct clones:

| Concept Area | Inspiration Source | How We Diverged |
|---|---|---|
| Forest lodge aesthetic | General eco-luxury hospitality | Entirely new brand identity — CANOPY |
| Dark forest palette | Nature-led design trends | Custom P3 Forest Night palette, not derived from any single source |
| Parallax hero | Common web pattern (Type B) | Custom mousemove + Ken Burns dual-layer implementation |
| Treehouse hospitality | General travel sector | Fictional brand, fictional location, original copy |

---

## Technical Architecture

### Page Structure
```
index.html      → Full landing page (13 sections, ~1250 lines)
about.html      → Brand story + founders + timeline (620 lines)
collection.html → 12 treehouses + amenities + comparison (650 lines)
process.html    → Booking journey + FAQ + dining (550 lines)
contact.html    → Reservation form + season guide (530 lines)
```

### CSS Strategy
- All CSS is inline `<style>` within each HTML file — no external CSS file
- CSS custom properties via `:root` shared across all pages
- Mobile-first responsive via `@media` max-width breakpoints
- No CSS frameworks — pure vanilla CSS

### JavaScript Strategy
- GSAP 3.12.2 (cdnjs CDN) + ScrollTrigger plugin
- Swiper 11 (jsdelivr CDN) — testimonials only
- SplitText: inline polyfill class (not Club GSAP premium)
- No jQuery, no other JS frameworks
- All animation uses `gsap.from()` with `immediateRender:false` at top level

### Animation Pattern (A5 Organic)
```javascript
gsap.from(targets, {
  immediateRender: false,        // TOP LEVEL — critical
  y: gsap.utils.random(20, 28),
  duration: gsap.utils.random(1.0, 1.4),
  ease: 'power2.out',
  stagger: 0.09,
  scrollTrigger: {
    trigger: '.section',
    start: 'top 85%'
  }
});
```

### Hero Type B Implementation
```javascript
// Ken Burns layer-1
gsap.to('.hero-layer-1', { scale: 1.08, duration: 25, ease: 'none', repeat: -1, yoyo: true });

// Mousemove parallax
hero.addEventListener('mousemove', (e) => {
  const dx = (e.clientX - cx) / rect.width;
  const dy = (e.clientY - cy) / rect.height;
  gsap.to(layer1, { x: dx * -18, y: dy * -12, duration: 1.4, ease: 'power1.out' });
  gsap.to(layer2, { x: dx * 28, y: dy * 18, duration: 1.8, ease: 'power1.out' });
});
```

---

## Color Calibration

### Forest Night Palette Check

| Variable | Hex | RGB Avg | Status |
|---|---|---|---|
| `--bg` | `#0F1A10` | (15+26+16)/3 = 19.0 | Within tolerance (threshold 15) |
| `--surface` | `#162016` | (22+32+22)/3 = 25.3 | Safe |
| `--surface2` | `#1A2A1A` | (26+42+26)/3 = 31.3 | Safe |
| `--accent` | `#4DAF6A` | — | Brand color, not background |
| `--border` | `#182018` | (24+32+24)/3 = 26.7 | Safe for border use |

Note: `--bg` at avg 19.0 is above the minimum threshold of 15. No dark section warnings expected.

### Section Background Assignments
- `#hero` → natural (image-based)
- `#stats` → `var(--surface)` — avg 25.3
- `#philosophy` → `var(--bg)` — avg 19.0
- `#collection` → `var(--surface)` — avg 25.3
- `#atelier` → `var(--bg)` — avg 19.0
- `#process` → `var(--surface)` — avg 25.3
- `#heritage` → `var(--bg)` — avg 19.0
- `#testimonials` → `var(--surface)` — avg 25.3
- `#reservation` → `var(--bg)` — avg 19.0
- `footer` → `var(--bg)` — avg 19.0

---

## Layout Decisions

### Philosophy Section — 3-col CSS Grid (NOT flex)
```css
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
```

### Collection Section — overflow:visible
```css
#collection { overflow: visible; }
.collection-grid { overflow: visible; }
```

### Stats Strip — 4-col grid
```css
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
```

---

## Preloader & Scroll Indicator

### Preloader Sequence
1. Bar animates to 100% via CSS transition (2.2s)
2. After 2400ms: GSAP fade out preloader
3. On complete: show scroll indicator, fire hero animations
4. Fallback: `setTimeout(4000)` ensures scroll indicator appears even if preloader fails

### Scroll Indicator Visibility
```javascript
// In preloader complete callback
showScrollIndicator();

// Fallback
setTimeout(() => { showScrollIndicator(); }, 4000);

// Hide on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) scrollIndicator.classList.add('hidden');
});
```

---

## Accessibility & Quality

- All images have descriptive `alt` attributes
- Color contrast: ivory (#DCF0DC) on dark bg passes WCAG AA
- Form labels properly associated via `for` / `id`
- Navigation has `aria-label` on icon links
- Mobile hamburger opens full-screen menu overlay
- FAQ accordion uses CSS max-height transition (no layout shift)
- Swiper pagination has proper ARIA roles (via Swiper library)

---

## Build Date

2026-02-27
