# AURUM — Master Gilding Atelier

**Slug:** `20260227_gilding-atelier`
**Status:** PUBLISHED
**Tier:** Free
**Created:** 2026-02-27

## Overview

A complete luxury multi-page website for AURUM, a fictional master gilding atelier. The site presents gold leaf gilding, art restoration, furniture gilding, and architectural gilding services with museum-grade credibility and a typographically driven luxury aesthetic.

## Design System

- **Hero Layout:** TYPE G — Scroll-Driven Text Transform (two hero words diverge horizontally on scroll, driven by GSAP ScrollTrigger scrub)
- **Color Palette:** P9 Rust Ember (`--bg: #1C1008`, `--accent: #D4612A`, `--ivory: #F0E4DC`)
- **Typography:** Cinzel (headings, labels, UI) + Crimson Pro (body, italic quotes)
- **Animation:** A5 Organic — `y: gsap.utils.random(20,28)`, `duration: gsap.utils.random(1.0,1.4)`, `ease: 'power2.out'`, `stagger: 0.09`, `immediateRender: false`
- **Components:** Swiper testimonials slider, counter animation, parallax hero background

## Pages

| File | Description | Min Lines |
|------|-------------|-----------|
| `index.html` | Full landing page — all sections | 1200+ |
| `about.html` | Master gilder background, timeline, museum partners, awards | 600+ |
| `collection.html` | Four services with full detail, gold types reference | 600+ |
| `process.html` | Four gilding stages in full technical detail, water vs oil comparison | 500+ |
| `contact.html` | Commission request form, visit information, how-it-works | 500+ |

## Sections (index.html)

1. Preloader (emblem + loading bar + label)
2. Scroll Indicator (line + label, auto-hides on scroll)
3. Navbar (sticky, scrolled state, links to all pages)
4. Hero TYPE G (200vh height, sticky background, GSAP scroll-apart words)
5. Stats (200+ Restored Works, 35 Years, 6 Gold Types, 14 Museum Partners)
6. Philosophy (3-column CSS grid — not flex)
7. Services Collection (2×2 image grid with overlay)
8. Workshop Feature (split layout — image + content)
9. Process Overview (4-step horizontal timeline)
10. Heritage (2-column with background watermark text)
11. Testimonials (Swiper carousel, 4 cards, autoplay)
12. Commission CTA (centred with decorative rings)
13. Footer (4-column with brand, nav, services, contact)

## GSAP Critical Rules Observed

- `immediateRender: false` at **top level** of all `gsap.from()` calls
- No `opacity: 0` set in CSS on any content element
- Scroll indicator shown in two places: preloader callback + `setTimeout(4000)`
- Philosophy grid uses `display: grid` (not flex)
- SplitText polyfill embedded (Club GSAP not available on CDN)

## CDN Dependencies

- Google Fonts: Cinzel + Crimson Pro
- GSAP 3.12.2 (gsap.min.js + ScrollTrigger.min.js) — cdnjs
- Swiper 11 (CSS + JS) — jsdelivr

## Image Slots

All images are referenced from `images/` using local paths:
- `hero-1.webp` through `hero-4.webp` — full-bleed hero and feature images
- `product-1.webp` through `product-4.webp` — service card images
- `ambient-1.webp` through `ambient-3.webp` — atmospheric detail images
- `thumbnail.webp` — manifest thumbnail (600px wide)

## Brand Voice

- Brand name: **AURUM**
- Tagline: *Gold Applied with Reverence*
- Founder persona: Édouard Merillon, MOF 1994, trained at Ateliers Dupont / Louvre
- Tone: ancient Roman grandeur, precision craft, museum authority, patience as philosophy
- All copy is original — no Lorem Ipsum, no AI boilerplate phrases
