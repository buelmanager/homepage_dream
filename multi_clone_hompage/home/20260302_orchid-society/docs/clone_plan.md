# Clone Plan — Orchidea Rare Society

## Overview
Private botanical society landing page targeting rare orchid collectors, horticultural enthusiasts, and botanical society members. Premium-tier multi-page site with 5 HTML files.

## Design Decisions
- Hero Type E selected for its clean, elegant pattern aesthetic suited to botanical precision
- Deep rose-black palette (#1A0A0E) evokes dark greenhouse environments with exotic blooms
- DM Serif Display with italic flourishes adds organic, botanical character
- Grid canvas animation creates subtle structural elegance without distracting from content

## Page Architecture
- `index.html`: Full 13-section homepage showcasing all aspects of the society
- `about.html`: Team profiles and core values — builds trust and credibility
- `collection.html`: Species database with filter UI — the core product display
- `process.html`: Detailed 5-stage cultivation protocol — demonstrates expertise
- `contact.html`: Membership enquiry and contact form — conversion page

## Image Strategy
- Primary: Unsplash IDs 1490750802-0045a7b4f5a5 and 1516912481800-cf9a4ac4fa4b
- Fallback variations achieved through URL parameter modifications (sat, bri, hue)
- All images validated before embedding

## GSAP Implementation
- Hero animations trigger post-preloader (delay: 2.2s)
- ScrollTrigger animations use `once: true` and `immediateRender: false`
- No CSS opacity:0 on content elements
- Scroll indicator visible in 2 places: preloader callback + setTimeout 4000ms
