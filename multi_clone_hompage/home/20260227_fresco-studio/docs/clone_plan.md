# Clone Plan — INTONACO Fresco Studio

## Project Brief

**Template Slug:** `20260227_fresco-studio`
**Build Date:** 2026-02-27
**Builder:** Claude Sonnet 4.6

## Concept

INTONACO is a luxury multi-page website for a Renaissance fresco and mural painting studio. The brand premise is that true buon fresco — painting mineral pigments into freshly laid lime plaster — is an irreversible alchemical event that binds art to architecture for centuries. The studio trains painters using the 15th-century Florentine apprenticeship model and accepts no more than eight commissions annually.

The design translates this premise into visual language: a dark Midnight Purple palette that evokes candlelit chapels and aged plaster, Spectral's literary serif evoking illuminated manuscripts, and Dramatic animation timing that feels measured and grave.

## Page Architecture

### index.html (Landing Page)
- Preloader with studio name + animated loading line
- Scroll indicator (both preloader callback + setTimeout 4000ms)
- Sticky navbar with scroll-based background
- Hero Type E: full-height with animated geometric grid canvas (purple lines, accent nodes, diagonal accents) + hero image + overlays
- Stats strip: 340 commissions / 28 countries / 12 years / 47 masters
- Philosophy section: 6-card grid (3 columns, display: grid)
- Portfolio: 12-column asymmetric grid (5 commissions)
- Atelier: split left-image / right-text
- Process: 5-step horizontal grid
- Heritage: offset image composition with facts list
- Testimonials: Swiper 11 carousel with autoplay
- Commission inquiry form + sidebar info
- Footer: 4-column grid

### about.html (Studio)
- Page hero with ambient background overlay
- Founding story: split image + text with floating year tag
- Timeline: 7 events 2012–2024
- Masters: 6-person grid with credentials
- Values: 4-item icon grid
- Recognition: 6-award grid
- CTA banner

### collection.html (Commissions)
- Filter bar (tabs by category)
- Featured commission: asymmetric hero + sidebar pair
- Collection grid: 9 commission cards (3 columns) with hover details
- Category grid: 4 types with image backgrounds
- Stats strip
- Restoration programme section
- CTA banner

### process.html (Method)
- Overview: split text + quote + image
- 5 full-width alternating process steps (each with large number overlay)
- Pigment palette: 8-card material grid
- Giornata daily schedule: split layout with timeline
- CTA banner

### contact.html (Inquire)
- Comprehensive commission form (name, email, phone, country, type, scale, timeline, subject, message)
- Sidebar: contact info, offices
- How It Works: 3-step process
- FAQ: 7-item accordion
- Conservation care section
- Footer

## Hero Canvas Technical Specification

```javascript
// Grid lines — vertical and horizontal with gentle wave offset
ctx.strokeStyle = 'rgba(155,110,219,0.12)';
ctx.lineWidth = 0.8;

// Vertical: sin(time + i) wave offset
// Horizontal: cos(time + j) wave offset

// Accent nodes at every 3rd grid intersection
ctx.fillStyle = 'rgba(184,148,238, pulse)';
// Draw only when sin() > 0.7 for sparse dot pattern

// Diagonal accents — very faint
ctx.strokeStyle = 'rgba(155,110,219,0.05)';
```

Animation loop runs at requestAnimationFrame, time += 0.012 per frame.

## GSAP Animation Spec

```javascript
// A4 Dramatic
{
  immediateRender: false,
  opacity: 0,
  y: 40,
  duration: 1.2,    // range: 1.1–1.3
  ease: 'power2.inOut',
  stagger: 0.15,    // for groups
}
```

All ScrollTrigger calls use `start: 'top 80%'` (85% for denser sections), `once: true`.

## Color Usage Map

| Element | Color |
|---------|-------|
| Body background | `--bg: #130F1A` |
| Cards / surface | `--surface: #1C1626` |
| Hover state | `--surface2: #231D30` |
| Primary accent (CTA, highlights) | `--accent: #9B6EDB` |
| Light accent (labels, links) | `--accent-light: #B894EE` |
| Dark accent (large numbers) | `--accent-dark: #6840A8` |
| Primary text | `--ivory: #EAE0F8` |
| Secondary text | `--smoke: #907890` |
| Disabled / metadata | `--muted: #544860` |
| Borders / separators | `--border: #181420` |
| Footer background | `--bg` (never hardcoded) |

## Responsive Breakpoints

| Breakpoint | Grid Changes |
|-----------|-------------|
| 1440px+ | Full desktop layout |
| 1024px | 2-column adaptations, stacked sections |
| 768px | Mobile nav, single column forms |
| 480px | Single column stats, stacked CTAs |
