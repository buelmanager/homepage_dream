# TERRAE NOIRE — Luxury Truffle Maison

## Brand
**TERRAE NOIRE** — "From Forest Floor to the Finest Table"

A fictional prestige truffle house sourcing from Périgord, Umbria, Istria, and Alba.

## Tech Stack
- GSAP 3.12 (cdnjs) + ScrollTrigger
- Swiper 11 (jsdelivr)
- Google Fonts: Cormorant Garamond + Jost

## Hero: Type D — Portraits + Stats
Split grid (1fr / 1fr):
- LEFT: Brand logotype, tagline, 4 animated stat counters (32 years, 7 varieties, 4 regions, 3 Michelin stars), CTA buttons
- RIGHT: 2×2 portrait grid — 2 chef portraits + 2 truffle dish photographs

## Sections
1. Hero D — Portraits + Stats (GSAP entrance + scroll counter animation)
2. The Truffle Codex — full-width manifesto with word-by-word scroll reveal
3. Species & Seasons — Swiper 11 horizontal card carousel (4 truffle varieties)
4. Sourcing Provenance — split-screen map + forager story
5. Chef Partnerships — 3-column portrait hover cards
6. The Atelier — process steps + image grid
7. Press & Accolades — logo/name strip
8. Private Reserve — grade system + inquiry form
9. Footer

## Color Rules
All CSS variables satisfy avg(R+G+B)/3 ≥ 20:
- --bg: #1A1F18 (avg 27)
- --bg-mid: #1E2A1C (avg 33)
- --bg-panel: #222E20 (avg 37)
- --bg-section: #1C2419 (avg 29.6)
- --gold: #C49A3C (avg 136.7)
- --cream: #F2EDD7 (avg 231.3)

## GSAP Rules
- All gsap.from() with ScrollTrigger use immediateRender: false
- No opacity:0 on content elements in CSS
- Stat counters use snap:{textContent:1} for integer animation
