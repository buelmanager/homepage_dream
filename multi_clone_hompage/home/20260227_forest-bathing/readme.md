# SHINRIN — Forest Bathing Retreat

**Slug:** `20260227_forest-bathing`
**Created:** 2026-02-27
**Tier:** Free
**Category:** Multi-page luxury landing

---

## Brand Overview

**SHINRIN** is a certified Shinrin-yoku (Japanese forest bathing) retreat set in 800 acres of never-logged old-growth forest in Oregon's Pacific Northwest. The brand merges ancient Japanese forest medicine with quiet luxury aesthetics.

- **Tagline:** "Let the Forest Breathe You"
- **Industry:** Shinrin-yoku forest therapy, nature immersion retreat
- **Tone:** Organic healing, quiet luxury, ancient forest wisdom
- **Color Palette:** P10 — Dark Olive (`--bg: #141810`, `--accent: #8AB56A`)
- **Typography:** F5 — Fraunces (serif) + Inter (sans)
- **Hero Layout:** Type B — Parallax + Ken Burns with mousemove JS parallax
- **Animation:** A5 — Organic (`y: random(20,28)`, `ease: power2.out`, `stagger: 0.09`)

---

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Main homepage with all major sections | 1200+ |
| `about.html` | Guide background, forest science, origins timeline | 600+ |
| `collection.html` | Four experience offerings in full detail | 600+ |
| `process.html` | Six-phase walk protocol, invitations, FAQ | 500+ |
| `contact.html` | Booking form with inquiry system | 500+ |

---

## Sections (index.html)

1. **Preloader** — Logo + animated loading bar + "Entering the Forest"
2. **Scroll Indicator** — Fixed right-side scroll line, shown after preloader + setTimeout(4000)
3. **Navbar** — Fixed, transparent → frosted on scroll
4. **Hero (Type B)** — Two-layer parallax (hero-1.webp + hero-2.webp), Ken Burns animation, mousemove JS parallax, floating certification badge
5. **Stats** — 4-column grid: 1982 / 800+ Acres / 48% cortisol reduction / 2,400 guests
6. **Philosophy** — 3-column CSS grid with three forest therapy pillars
7. **Experience Collection** — 2×2 image grid with hover reveals
8. **Forest Studio** — Full-width ambient image with overlay content
9. **Process/Walk** — 4-step sticky-image layout
10. **Heritage** — Overlapping image composition + founder quote
11. **Testimonials** — Swiper.js carousel with fade effect
12. **Booking Form** — Two-column with form validation
13. **Footer** — 4-column grid with navigation

---

## Images Required

Place in `images/` directory:

| Filename | Usage |
|----------|-------|
| `hero-1.webp` | Hero layer 1 (primary background) |
| `hero-2.webp` | Hero layer 2 (Ken Burns overlay) |
| `hero-3.webp` | About page hero |
| `hero-4.webp` | Contact/CTA sections |
| `product-1.webp` | Half-Day Forest Bath card |
| `product-2.webp` | Full Immersion Day card |
| `product-3.webp` | Moonlit Walk card |
| `product-4.webp` | Corporate Restoration card |
| `ambient-1.webp` | Forest Studio section, About page |
| `ambient-2.webp` | Process section, page hero |
| `ambient-3.webp` | Heritage section, Guide photo |
| `thumbnail.webp` | Template thumbnail (600px wide) |

---

## Technical Details

- **GSAP 3.12.2** via cdnjs CDN
- **ScrollTrigger** registered plugin
- **Swiper 11** via jsdelivr CDN
- **SplitText polyfill** inline (not Club GSAP — works on all CDNs)
- `immediateRender: false` on all `gsap.from()` with ScrollTrigger
- No `opacity: 0` set in CSS on content elements
- Custom scrollbar (4px, accent-dark)
- Mobile responsive at 1024px and 768px breakpoints
- Form submission handled client-side with success state toggle

---

## CDNs Used

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```
