# TAKE — Bamboo Craft Atelier

**Slug:** `20260227_bamboo-craft`
**Status:** PUBLISHED
**Tier:** Free
**Created:** 2026-02-27

## Overview

A complete luxury multi-page website for a traditional Japanese bamboo craft atelier. The site presents TAKE — an imagined Kyoto atelier run by third-generation master craftsman Kenji Yamamoto — using Japanese minimalism, zen aesthetics, and organic animation to communicate the brand's depth and heritage.

## Design System

| Token | Value |
|---|---|
| Palette | P10 — Dark Olive |
| `--bg` | `#141810` |
| `--surface` | `#1C2018` |
| `--surface2` | `#222A1E` |
| `--accent` | `#8AB56A` |
| `--accent-light` | `#AACE8A` |
| `--accent-dark` | `#5A8040` |
| `--ivory` | `#E4EEE0` |
| `--smoke` | `#889880` |
| `--muted` | `#4E5E48` |
| Font Serif | DM Serif Display |
| Font Sans | Karla |
| Hero Type | G — Scroll-Driven Text Transform |
| Animation | A5 — Organic |

## Pages

| File | Description | Lines |
|---|---|---|
| `index.html` | Home — Hero G, Stats, Philosophy, Collection, Workshop, Process, Heritage, Testimonials, Commission Form, Footer | 1200+ |
| `about.html` | Master craftsman story, lineage timeline, Kyoto heritage, sustainability, awards | 600+ |
| `collection.html` | Five categories with filter tabs: Baskets, Tea Utensils, Vases, Furniture, Screens | 620+ |
| `process.html` | Five-stage process: Harvesting, Drying, Splitting, Weaving, Finishing + Materials Guide + Tools | 530+ |
| `contact.html` | Commission form, FAQ, visit information | 520+ |

## Technical Specifications

- All GSAP `gsap.from()` animations use `immediateRender: false` at top level
- No `opacity: 0` in CSS — all visibility controlled by GSAP
- SplitText inline polyfill class embedded in index.html
- Swiper 11 used for testimonials carousel
- Scroll indicator shown in preloader callback AND setTimeout(4000ms) fallback
- Philosophy section uses `display: grid` (3-column CSS grid, not flex)
- Collection grid uses `overflow: visible`
- Custom scrollbar via `::-webkit-scrollbar`
- Mobile responsive with hamburger nav and mobile-nav overlay
- Google Fonts: DM Serif Display + Karla
- CDN: GSAP 3.12.2 (cdnjs), Swiper 11 (jsdelivr)

## Hero Type G — Scroll-Driven Text Transform

The hero uses two key GSAP scroll behaviours:
1. `hero-bg` parallax: yPercent 30, scrub, from `top top` to `bottom top`
2. `hero-text-wrap` fade+rise: yPercent 40, autoAlpha 0, scrub, from `top top` to `50% top`

The large Japanese kanji "竹" (take) appears as the secondary word-2 in accent colour, alongside the Roman "TAKE" as word-1 at 14rem scale.

## Image Placeholders

All images reference local `images/` paths. Required files:
- `images/hero-1.webp` through `hero-4.webp`
- `images/product-1.webp` through `product-4.webp`
- `images/ambient-1.webp` through `ambient-3.webp`
- `images/thumbnail.webp` (for manifest)

## Brand Identity

- **Brand Name:** TAKE (竹 — bamboo in Japanese)
- **Tagline:** Rooted in Tradition, Rising with Purpose
- **Master Craftsman:** Kenji Yamamoto (fictional)
- **Location:** Higashiyama district, Kyoto
- **Industry:** Traditional Japanese bamboo craft — basketry, tea utensils, ikebana vases, furniture, screens
- **Tone:** Zen minimalism, wabi-sabi, Japanese artisan heritage, living material luxury

## Content Strategy

The copywriting employs a deliberate cadence that mirrors the patient nature of the craft itself:
- Short declarative section labels in spaced uppercase
- Long-form descriptive paragraphs that build sensory context
- Japanese terms used with immediate English clarification
- Prices in Japanese Yen to reinforce geographic authenticity
- Philosophical sections frame the making process as a spiritual practice
