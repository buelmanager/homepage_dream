# WABI — Kintsugi Studio

**"Broken, But More Beautiful"**

A luxury multi-page website for a kintsugi pottery repair studio rooted in Japanese wabi-sabi tradition.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage with TYPE G scroll-driven hero, stats, philosophy grid, services, studio, process, heritage, testimonials, commission form |
| `about.html` | Founder story, timeline, philosophy deep-dive, values, CTA |
| `collection.html` | Full services detail — Emergency Repair, Full Restoration, Workshops, Gold Type Selection |
| `process.html` | Five-stage kintsugi process, materials, FAQ accordion |
| `contact.html` | Commission form with piece submission, workshop dates, studio location |

## Design System

### Color Palette — P9 Rust Ember
```css
--bg: #1C1008
--surface: #261608
--surface2: #2E1C0A
--accent: #D4612A
--accent-light: #E8884A
--accent-dark: #9C3C14
--ivory: #F0E4DC
--smoke: #A07860
--muted: #604840
--border: #201408
```

### Typography — F10
- **Serif**: EB Garamond (400, 400 italic, 600)
- **Sans**: Nunito (300, 400, 600)

### Hero Layout — TYPE G
Scroll-driven text transform: large typographic words (WABI / SABI) with parallax scroll behavior, word-level Y-transform on scroll, tagline fade-out driven by ScrollTrigger scrub.

### Animation — A5 Organic
```js
y: gsap.utils.random(20, 28)
duration: gsap.utils.random(1.0, 1.4)
ease: 'power2.out'
stagger: 0.09
immediateRender: false
```

## Technical Notes

- GSAP 3.12.2 + ScrollTrigger from cdnjs
- Swiper 11 for testimonials carousel
- SplitText polyfill (inline, no CDN dependency)
- `immediateRender: false` always at top level of gsap.from() vars
- No `opacity: 0` in CSS on content elements
- Scroll indicator: shown in preloader callback + setTimeout(4000ms) fallback
- Philosophy grid: CSS `display: grid` (not flex)
- Custom scrollbar: 6px, accent-dark color

## Brand

- **Name**: WABI — Kintsugi Studio
- **Tagline**: Broken, But More Beautiful
- **Founder**: Hiroshi Tanaka (fictional)
- **Location**: Shoreditch, London (Tokyo-inspired)
- **Founded**: 1994, Kyoto
- **Industry**: Kintsugi gold repair, Japanese ceramic restoration

## Images Required

Place in `images/` directory:
- `hero-1.webp` — `hero-4.webp`: Hero/atmospheric shots
- `product-1.webp` — `product-4.webp`: Service/product imagery
- `ambient-1.webp` — `ambient-3.webp`: Studio atmosphere shots
- `thumbnail.webp`: Site thumbnail (600px wide, generated via cwebp)

## File Count

5 HTML pages + meta.json + readme.md + 3 docs files = 10 files total (excluding images)
