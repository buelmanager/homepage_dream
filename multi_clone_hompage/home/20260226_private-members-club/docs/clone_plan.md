# Clone Plan — SANCTUM Private Members Club

**Project:** 20260226_private-members-club
**Status:** Complete

## Phases

### Phase 1: Research & Concept [x]
- [x] Define brand identity (SANCTUM, 1887, By Invitation Only)
- [x] Establish color system (warm dark palette, aged gold accent)
- [x] Select hero layout type (C — Diagonal Split)
- [x] Identify Unsplash image IDs for all sections

### Phase 2: Structure & CSS [x]
- [x] HTML skeleton with all 11 sections
- [x] CSS custom properties / design tokens
- [x] Responsive grid system
- [x] Typography hierarchy (Playfair Display + Lato)
- [x] Color system validation (all avg(R+G+B)/3 ≥ 20)

### Phase 3: Preloader [x]
- [x] Animated crest SVG with stroke-dashoffset draw animation
- [x] Letter-by-letter SANCTUM reveal
- [x] Tagline fade-in
- [x] Loading bar fill
- [x] GSAP hide on completion

### Phase 4: Navigation [x]
- [x] Fixed transparent → frosted scroll behavior
- [x] Monogram S logo
- [x] Nav links (Heritage, Membership, Facilities, Events, Members)
- [x] "Request Membership" CTA button

### Phase 5: Hero [x]
- [x] Full-screen atmospheric image background
- [x] Diagonal split overlay (Type C layout)
- [x] Gradient overlay (rgba ≤ 0.65 opacity)
- [x] Animated eyebrow, title, subtitle, description, actions
- [x] Floating rotating badge (Est. 1887)
- [x] Scroll hint indicator

### Phase 6: Stats [x]
- [x] 4-column grid: Est. 1887 / 340 Members / 12 Cities / 6 Michelin Stars
- [x] Playfair Display large numerals in accent gold
- [x] GSAP stagger entrance animation

### Phase 7: About / Heritage [x]
- [x] 2-column grid: image + text
- [x] Heritage image with decorative border frame
- [x] Year badge overlay element
- [x] Founder's quote block with accent border
- [x] GSAP slide-in animations

### Phase 8: Membership Tiers [x]
- [x] 3 cards: Associate / Fellow / Patron
- [x] Benefits list with accent dash markers
- [x] Price display
- [x] Featured card styling (Fellow)
- [x] "Most Distinguished" label
- [x] Hover states

### Phase 9: Facilities [x]
- [x] 4-column image grid: Library / Dining Room / Cognac Lounge / Rooftop
- [x] Hover image scale with overlay description reveal
- [x] Facility number and name labels
- [x] All images from validated Unsplash IDs

### Phase 10: Events [x]
- [x] Left column: section header + CTA
- [x] Right column: event list with date blocks
- [x] Event categories, names, venue details
- [x] Arrow indicators with hover state
- [x] 3 events: Symposium / Private View / Legacy Dinner

### Phase 11: Testimonials [x]
- [x] 3-column card grid
- [x] Large quotation mark in Playfair Display
- [x] Member quotes, initials avatars, name + title
- [x] Bottom accent line reveal on hover
- [x] GSAP entrance animations

### Phase 12: Apply Form [x]
- [x] 2-column layout: text + form
- [x] Diagonal pattern background
- [x] Form fields: name, email, profession, tier selection, introduction textarea
- [x] Confidentiality notice
- [x] Submit button with hover state

### Phase 13: Footer [x]
- [x] background: var(--bg) ONLY (no hardcoded hex)
- [x] 4-column layout: brand / club / global houses / contact
- [x] Legal links + copyright
- [x] Global house list (London, New York, Paris, Geneva, Singapore, Hong Kong)

### Phase 14: GSAP Animations [x]
- [x] All gsap.from() + scrollTrigger: immediateRender: false at TOP LEVEL
- [x] No opacity: 0 in CSS on content elements
- [x] SplitText polyfill embedded
- [x] Hero animations with delay after preloader
- [x] Scroll-triggered animations for all sections

### Phase 15: Left Scroll Indicator [x]
- [x] Fixed left position
- [x] Section number + section name
- [x] Fill line animation
- [x] IntersectionObserver-driven updates

### Phase 16: QA [x]
- [x] check-sections.py passed (no dark sections)
- [x] capture-page.py screenshot taken
- [x] thumbnail.jpg generated (600px, 75% quality)
- [x] Color system validated (all avg(R+G+B)/3 ≥ 20)
- [x] Footer background: var(--bg) confirmed
