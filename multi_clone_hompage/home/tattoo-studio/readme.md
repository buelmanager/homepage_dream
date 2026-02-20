# CIPHER INK — Fine Art Tattoo Studio

**Industry:** Fine Art Tattoo Studio
**Brand:** CIPHER INK
**Tagline:** "Every Line Has Meaning"

---

## Industry Rationale

Tattoo studio is completely absent from the existing template library. It offers a completely distinct visual direction from everything present:
- barbershop = grooming, clean
- luxury-spa = soft, wellness
- nail-salon = feminine, pastel
- bespoke-tailor = tailored, navy

Tattoo studio = bold, dark, graphic, countercultural-meets-fine-art. The aesthetic contrast is maximum.

---

## Style Concept

**Concept:** A New York Lower East Side fine art tattoo studio — by-appointment-only, gallery-adjacent, with resident artists who could show in Chelsea. Think: the intersection of underground culture and museum-grade craft.

**Mood:** Neo-noir. Precision. Obsession with craft.

---

## Color Palette

| Name        | Hex       | Usage                              |
|-------------|-----------|------------------------------------|
| Background  | `#080808` | Near-pure black main background    |
| Surface     | `#111111` | Cards, stats bar, contact section  |
| Surface 2   | `#181818` | Hover states                       |
| Crimson     | `#B91C1C` | Primary accent — CTAs, highlights  |
| Crimson Lt  | `#DC2626` | Hover states, gradient end         |
| Ivory       | `#F0EDE6` | Primary text                       |
| Muted       | `#7A776F` | Secondary text, labels             |
| Border      | `#1E1E1E` | Dividers                           |
| Border 2    | `#2A2A2A` | Card borders, hover borders        |

---

## Font Choices

| Font              | Role     | Weights               | Source       |
|-------------------|----------|-----------------------|--------------|
| Playfair Display  | Headings | 400, 500, 700, 900 (+ italics) | Google Fonts |
| Space Grotesk     | Body/UI  | 300, 400, 500, 600    | Google Fonts |

**Rationale:** Playfair Display's high contrast and editorial weight mirrors the drama of tattoo art. Space Grotesk's structured letterforms give a precision-tool feeling to labels and UI text.

---

## Image Sourcing

All images from Unsplash (free license):

| Section         | Photo ID / URL                              | Subject                  |
|-----------------|---------------------------------------------|--------------------------|
| Hero background | `photo-1598300042247-d088f8ab3a91`          | Dark tattoo art          |
| Obsidian Serpent| `photo-1598300042247-d088f8ab3a91`          | Tattoo close-up          |
| Botanical Studies| `photo-1565058379802-bbe93b2f703a`         | Fine line botanical      |
| The Lioness     | `photo-1531746020798-e6953c6e8e04`          | Portrait realism         |
| Metatron's Grid | `photo-1581803118522-7b72a50f7e9f`          | Geometric tattoo         |
| Koi Ascending   | `photo-1521067541567-f597b4ba6901`          | Japanese art             |
| Midnight Rose   | `photo-1598300042247-d088f8ab3a91`          | Neo-traditional          |

---

## What Changed vs. Architecture Template

| Element          | Architecture (Source)           | CIPHER INK (This)                      |
|------------------|---------------------------------|----------------------------------------|
| Brand            | FORMA ARCHITECTS                | CIPHER INK Fine Art Tattoo Studio      |
| Color accent     | Orange #FF6B35                  | Crimson #B91C1C                        |
| Typography       | Archivo + IBM Plex Sans         | Playfair Display + Space Grotesk       |
| Preloader SVG    | Building wireframe              | Compass/needle cross with inner diamond|
| Hero decor       | Blueprint building outlines     | Cross-hair / mandala geometric SVG     |
| Hero accent      | None                            | Vertical red bar on left edge          |
| Stats            | Projects/Awards/Years/Scale     | Pieces/Years/Artists/Styles            |
| Services (8)     | Architecture service types      | 8 tattoo disciplines/styles            |
| Projects (6)     | 6 real estate buildings         | 6 featured tattoo artworks with modal  |
| Modal content    | Project year/type               | Style/Placement/Duration/Artist        |
| Timeline         | Construction phases             | Consultation→Design→Approval→Session→Aftercare |
| Awards carousel  | Architecture prizes             | Inked Mag, NYT, Vogue, Tattoo Life     |
| FAQ              | Architecture/permit questions   | Booking/pricing/pain/aftercare Q&A     |
| Contact CTA      | "Project Consultation"          | "Book a Session"                       |
| Address          | Seoul, Gangnam                  | New York, Lower East Side              |
| All content      | Partially Korean                | 100% English                           |

---

## Run Instructions

Static HTML — no build required.

```bash
open index.html
# or
npx serve .
# or
python3 -m http.server 8080
```

**CDN Dependencies (no install):**
- Swiper 11
- GSAP 3.12
- Google Fonts

---

## Key Features

- Needle/compass SVG preloader with crimson stroke animation
- Vertical red accent bar on hero left edge
- Cross-hair mandala geometric SVG hero decorations
- CountUp stats (4800+ pieces, 12 years, 9 artists, 8 styles)
- 8 tattoo style cards with left-border slide reveal on hover
- 6 portfolio cards with grayscale-to-color transition on hover
- Full work detail modal (style, placement, duration, artist)
- 5-stage crafting process bars (animated on scroll)
- 6 press/award Swiper cards
- FAQ accordion with crimson active state
- Appointment booking form with success state
- Custom crimson scrollbar
- Full-screen mobile overlay menu
- Responsive at 1024 / 768 / 480px
