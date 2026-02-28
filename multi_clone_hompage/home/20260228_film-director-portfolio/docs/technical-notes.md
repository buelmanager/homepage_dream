# Technical Notes — APERTURE NOIR

## GSAP Implementation

### Critical Rule: immediateRender Placement
All `gsap.from()` calls with `scrollTrigger` MUST have `immediateRender: false` at the **top level** of the vars object, NOT inside the scrollTrigger config.

```js
// CORRECT
gsap.from('.el', {
  immediateRender: false,   // ← TOP LEVEL
  x: -20,
  duration: 0.75,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.section', start: 'top 80%', once: true }
});

// BROKEN — elements will flash/blink
gsap.from('.el', {
  x: -20,
  scrollTrigger: {
    trigger: '.section',
    immediateRender: false,  // ← WRONG LOCATION, ignored
    start: 'top 80%'
  }
});
```

### Libraries Used
- GSAP 3.12.5 (CDN: cdnjs.cloudflare.com)
- ScrollTrigger plugin (same CDN)
- SplitText: Not used in this template (not needed for Type G hero)

### Animation Parameters
- Duration: `0.75s` (A3 Precise spec)
- Translation: `x: -20` (horizontal slide, NOT y)
- Stagger: `0.04` (40ms between items)
- Ease: `'power3.out'`

---

## Hero Type G — Technical Details

### Structure
```html
<section class="hero hero-g" id="hero">
  <!-- Sticky background image layer -->
  <div class="hero-bg">...</div>

  <!-- Sticky text container — GSAP scroll target -->
  <div class="hero-text-wrap">
    <h1 class="hero-title">
      <span class="title-line line-1">APERTURE</span>
      <span class="title-line line-2">NOIR</span>
    </h1>
  </div>

  <!-- Decorative filmstrip at bottom -->
  <div class="hero-filmstrip">...</div>
</section>
```

### CSS: How Sticky Scroll Works
```css
.hero { min-height: 200vh; position: relative; }
.hero-text-wrap { position: sticky; top: 0; height: 100vh; }
```
The `.hero` element is 200vh tall. The `.hero-text-wrap` sticks to the viewport as the user scrolls through the extra 100vh, giving ScrollTrigger a scroll range to work with.

### GSAP: Scroll-Driven Text Animation
```js
// Line 1 slides LEFT
gsap.to('.title-line.line-1', {
  immediateRender: false,
  x: '-28vw',
  scale: 0.35,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: 1.2 }
});

// Line 2 slides RIGHT
gsap.to('.title-line.line-2', {
  immediateRender: false,
  x: '28vw',
  scale: 0.35,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: 1.2 }
});
```

---

## Preloader: Film Countdown

The preloader uses a JavaScript countdown from 3 → 2 → 1 → ▶ symbol, mimicking a film countdown leader sequence.

```js
function runCountdown() {
  countdownEl.textContent = count;
  if (count > 0) {
    count--;
    setTimeout(runCountdown, 650); // ~650ms per number
  } else {
    countdownEl.textContent = '▶';
    setTimeout(hidePreloader, 350);
  }
}
```

Total preloader time: ~2.5 seconds.

---

## Scroll Indicator

Two triggers for the scroll indicator (as required by GSAP rules):
1. **Trigger 1**: Inside the preloader `hidePreloader()` callback
2. **Trigger 2**: `setTimeout(() => indicator.classList.add('visible'), 4000)` — fallback

Auto-hides after user scrolls past 200px.

---

## Filmography Filter

Pure JavaScript, no dependencies:
```js
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('tr[data-type]').forEach(row => {
      row.style.display = (filter === 'all' || row.dataset.type === filter) ? '' : 'none';
    });
  });
});
```

---

## Images

### Format
All images: `.webp` format, converted from source JPEG using `cwebp -q 82 -resize 1920 0`

### Thumbnail
- `thumbnail.webp` → production-ready, git-tracked
- `thumbnail.jpg` → gitignored, never use
- `fullpage.png` → gitignored (too large for Vercel)

### Generation
```bash
# Capture fullpage.png (for check-sections.py)
python3 scripts/capture-page.py 20260228_film-director-portfolio

# Check for dark sections
python3 scripts/check-sections.py 20260228_film-director-portfolio

# Generate thumbnail
python3 scripts/capture-hero.py 20260228_film-director-portfolio
```

---

## Color Safety

All section backgrounds verified against DARK_THRESHOLD (row avg ≥ 15, run ≥ 120px):

| Section | Background | RGB Avg |
|---|---|---|
| Body / Hero | #101420 | 21.3 ✓ |
| Surface sections | #181E2A | 25.7 ✓ |
| Surface2 | #1E2438 | 30.0 ✓ |
| Footer | var(--bg) = #101420 | 21.3 ✓ |

Footer uses `background: var(--bg)` only — never hardcoded dark hex values.

---

## Browser Support

- Chrome/Edge 88+ (full support, including CSS `position: sticky` + GSAP)
- Firefox 78+ (full support)
- Safari 14+ (full support, `-webkit-text-stroke` works)
- Mobile: Responsive at 768px and 1024px breakpoints
