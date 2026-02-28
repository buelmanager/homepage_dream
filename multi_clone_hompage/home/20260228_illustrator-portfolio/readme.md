# VELVET INK — Luxury Illustration Portfolio

**Slug**: `20260228_illustrator-portfolio`
**Created**: 2026-02-28
**Tier**: Free
**Status**: Complete

---

## Overview

VELVET INK is a luxury illustration and digital art portfolio for fictional London-based illustrator Elara Voss. The design uses a deep midnight purple palette with Spectral serif and Mulish sans-serif fonts, and GSAP A4 Dramatic animations.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — Type D Hero (Portrait + Stats Grid), Artist bio, Mediums, Portfolio 3x3, Clients, Process, Pricing |
| `about.html` | Artist Statement, Philosophy (3 pillars), Exhibition History, Publications |
| `collection.html` | Portfolio by category: Editorial, Book Covers, Personal Works — gallery + lightbox CTA |
| `process.html` | 6-step process timeline, Materials & Tools, FAQ |
| `contact.html` | Commission form, Sidebar info, Usage Rights |

## Design System

| Token | Value |
|-------|-------|
| --bg | #130F1A |
| --surface | #1C1626 |
| --surface2 | #231D30 |
| --accent | #9B6EDB |
| --accent-light | #B894EE |
| --accent-dark | #6840A8 |
| --ivory | #EAE0F8 |
| --smoke | #907890 |
| --font-serif | Spectral |
| --font-sans | Mulish |

## Hero Layout

**Type D — Portraits + Stats Grid**

Left panel: brand name (VELVET INK), eyebrow, tagline, 3-column stats (12+ Years, 300+ Commissions, 48 Countries), CTA buttons.

Right panel: 2x3 portrait card grid with 4 illustration images + 1 editorial quote card.

## Images

22 images sourced from Unsplash (all validated HTTP 200), converted to WebP at 82% quality and 1920px width.

## Animation

A4 Dramatic: duration 1.2s, y: 40px, stagger: 0.15, ease: power2.inOut, immediateRender: false (at top-level of gsap.from, NOT inside scrollTrigger).

## Notes

- SplitText inline polyfill (no Club GSAP dependency)
- Footer: `background: var(--bg)` — no hardcoded dark hex
- No CSS opacity:0 on content elements before GSAP
- Scroll indicator shown in preloader callback + setTimeout 4000ms
