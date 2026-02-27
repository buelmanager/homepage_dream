# Clone Plan — VAIDYA Ayurveda Spa

## Project Overview

**Template Slug**: `20260227_ayurveda-spa`
**Build Date**: 2026-02-27
**Category**: Luxury Spa & Wellness
**Pages**: 5 (index, about, collection, process, contact)

## Design Strategy

### Brand Concept
VAIDYA is an original luxury brand for an authentic Ayurveda healing spa. The name means "physician" or "healer" in Sanskrit, immediately establishing the medical legitimacy and traditional depth of the practice.

### Hero Selection — Type B (Parallax)
Chosen for Ayurveda because:
- Parallax layers evoke the layered nature of Ayurvedic healing (body, mind, spirit)
- Ken Burns motion on slow botanical images creates a meditative, unhurried quality
- Mousemove parallax adds subtle interactivity without jarring the healing tone
- Two-layer composition allows textural depth without complexity

### Color Palette — P7 Deep Teal
- Deep teal chosen for Ayurveda: evokes healing waters (Kerala backwaters), medicinal herbs, the cooling of Pitta dosha
- `#4DCFB0` accent: reminiscent of Tulsi (holy basil) leaves, Brahmi water extract
- Deep `#0A1818` background: suggests the quietude of pre-dawn practice, the depth of ancient forests
- Avoided green-only palette (too wellness-generic) in favor of teal (more sophisticated, less predictable)

### Typography — F5 (Fraunces + Inter)
- Fraunces: serif with optical size axis, slightly eccentric letterforms — suggests wisdom, depth, vintage quality without being archaic
- Inter: clean, readable, highly legible — professional medical credibility alongside spiritual depth
- Combination evokes the duality of Ayurveda: ancient wisdom + living practice

### Animation — A2 Whisper
- Longest duration persona (1.4–1.6s) appropriate for a healing spa
- 14px y-offset: barely perceptible, like a breath
- 0.06 stagger: elements arrive one after another like waves
- `power1.out`: gentle deceleration, no bounce or snap

## Section Structure Decisions

### index.html Sections
1. **Preloader**: Dual-ring mandala spinner (geometric, sacred geometry reference) + brand + tagline
2. **Scroll Indicator**: Fixed right edge, appears after preloader + setTimeout(4000)
3. **Navbar**: Transparent hero → frosted glass after scroll (95% opacity + blur(20px))
4. **Hero**: Two parallax layers. Layer-1 (primary image, brightness 0.5, Ken Burns). Layer-2 (blend overlay, opacity 0.3, mousemove secondary)
5. **Stats Strip**: `--surface` background. Grid 4 columns. Numbers evoke trust and scale.
6. **Philosophy**: 3-column grid (MANDATORY display:grid, NOT flex). Cards have accent underline reveal on hover.
7. **Treatments**: Image-left, treatment-list-right. Each treatment has duration badge.
8. **Atelier**: Full-bleed split. Images stacked left. Text right with `--surface` background.
9. **Process**: 6-step grid (2 rows × 3 columns). Large ghost numbers + step text.
10. **Heritage**: Background image with heavy brightness filter. Timeline with years.
11. **Testimonials**: Swiper carousel with 3-up on desktop.
12. **Booking Form**: Side-by-side info + form.
13. **Footer**: 4-column grid. `background: var(--bg)` ONLY.

### Sub-page Structure
- **about.html**: Founder hero, value grid (4-col), practitioners (3-col), lineage
- **collection.html**: Filter tabs, featured treatment, treatment grid, herbs section, programs
- **process.html**: Intro split, 6 journey steps (full-width), dosha guide, expectations
- **contact.html**: Booking options, form, locations grid, FAQ

## Technical Implementation Notes

### GSAP Patterns
All animations use identical structure:
```js
gsap.from('.element', {
  immediateRender: false,  // ALWAYS at top level
  y: 14,
  opacity: 0,
  duration: 1.5,
  ease: 'power1.out',
  scrollTrigger: { trigger: '.section', start: 'top 85%' }
});
```

### Parallax Implementation
```js
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const xRatio = (e.clientX / window.innerWidth - 0.5);
  const yRatio = (e.clientY / window.innerHeight - 0.5);
  gsap.to('.layer-1', { x: xRatio * -20, y: yRatio * -15, duration: 1.2, ease: 'power1.out' });
  gsap.to('.layer-2', { x: xRatio * -40, y: yRatio * -30, duration: 1.4, ease: 'power1.out' });
});
```

### SplitText Polyfill
Embedded in index.html to avoid Club GSAP CDN (404 on public CDNs). Provides char/word splitting for potential title animations.

## Content Authenticity

All Ayurvedic terminology is accurate:
- Treatments: Abhyanga, Shirodhara, Panchakarma, Pinda Sweda, Pizhichil, Udvartana, Kati Basti, Navarakizhi, Nasya, Talam all correctly described
- Herbs: Brahmi, Ashwagandha, Shatavari, Guduchi — accurate botanical names and uses
- Concepts: Dosha, Prakriti, Vikriti, Dhatu, Ama, Agni, Ojas — correctly defined
- Classical texts referenced: Charaka Samhita, Ashtanga Hridayam, Sushruta Samhita
- Kerala tradition: Ashtavaidya families, Kottakkal Arya Vaidya Sala — real institutions
- Panchakarma five actions: Vamana, Virechana, Basti, Nasya, Raktamokshana — accurate
