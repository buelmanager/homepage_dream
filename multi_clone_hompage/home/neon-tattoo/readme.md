# Voltage Ink — Neon Tattoo Luxury Landing Page

**Brand:** Voltage Ink (fictional)
**Tagline:** Fine Art Tattooing Under the Neon
**Industry:** Luxury Tattoo Studio / Fine Art Body Art
**Hero Type:** Type E — Image Grid Background + Center Text Box

## Brand Identity

Voltage Ink is a fictional luxury fine art tattoo studio occupying a converted electrical substation in East Los Angeles. Founded by fictional artist Ryo Kessler (a Japanese-German hybrid background, trained in Kyoto irezumi), the studio specialises in UV-reactive neon ink work combined with traditional Japanese tattooing iconography and structure.

**Color Palette:**
- Background: `#0D0D0D` (near-black, warm)
- Surface: `#161616` (dark charcoal)
- Neon Pink: `#FF2D78` (electric magenta)
- Neon Cyan: `#00F5FF` (electric blue-green)
- Neon Violet: `#BF5FFF` (electric purple)
- Warm Yellow: `#FFEC5C` (electric yellow)
- Ghost text: `#C8C8C8`
- Muted: `#5A5A5A`

**Typography:**
- Display: Bebas Neue (industrial condensed caps — urban electricity)
- Serif: DM Serif Display (art-world editorial gravity)
- Body: Space Grotesk (technical precision, contemporary feel)

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page with 6-image grid hero + center neon box, stats strip, 3-col philosophy with per-column neon colour, 2x2 portfolio, 2-col atelier, 5-step process timeline, heritage quote, press carousel, booking form |
| `about.html` | Manifesto, founder Ryo Kessler story, convictions grid, 4-point history timeline |
| `collection.html` | 6-item 3x2 portfolio grid, quality/ink section, CTA |
| `process.html` | 5-step commission timeline, materials grid, gallery, CTA |
| `contact.html` | Booking form, info panel with wait times, LA location map placeholder |

## Design Distinctives

- Near-black palette (not dark navy or charcoal — true deep night)
- Three neon accent colours used simultaneously (unusual for luxury brands)
- Grid hero (Type E) creates an immersive portfolio wall as the first impression
- Typography: ALL CAPS Bebas Neue for headings contrasts with italic DM Serif Display for body
- Neon glow CSS shadows on key elements (cursor, headings, borders)
- "Book" not "Buy" — emphasises commission model over retail

## Tech Stack

- GSAP 3.12.2 + ScrollTrigger
- SplitText polyfill (inline)
- Swiper 11 (press carousel)
- Google Fonts: Bebas Neue, DM Serif Display, Space Grotesk
- Unsplash images (confirmed valid IDs)
- Pure HTML/CSS/JS — no build step
