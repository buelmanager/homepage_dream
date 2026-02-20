# AURUM — Fine Jewelry Atelier

**Industry:** Luxury Fine Jewelry Boutique
**Brand:** AURUM

---

## Rationale for Industry Selection

Jewelry is an ideal transformation of the architecture template because:
- Both industries center on **craftsmanship, precision, and lasting value**
- The Gantt-style timeline maps naturally to a jewelry crafting process
- The portfolio grid (projects) becomes a beautiful piece showcase with modal detail views
- The awards carousel becomes a press/recognition section, which real jewelry houses actively leverage
- Dark luxury aesthetic translates perfectly — architecture's charcoal/orange becomes midnight/gold

---

## Style Concept & UI Direction

**Concept:** A New York fine jewelry atelier with European heritage — reminiscent of houses like Cartier, Tiffany, or Boucheron, but with a contemporary independent spirit.

**UI Direction:**
- Deep midnight backgrounds (`#080612`) with warm antique gold accents
- Editorial serif typography (`Cormorant Garamond`) for headings — evokes luxury print media
- Clean sans-serif (`Jost`) for body copy — modern, precise
- Gem-facet SVG motifs replace the architectural blueprint drawings
- Diamond-path SVG preloader animates like a jeweler drawing a gem outline
- Piece cards use warm color grading (slight desaturation, warm cast) that lifts to full color on hover
- Modal shows detailed piece specs (metal, stone, year, collection)
- Process bars represent crafting stages instead of construction phases
- Contact section framed as "appointment booking" — consistent with how luxury boutiques operate

---

## Color Palette

| Name          | Hex       | Usage                               |
|---------------|-----------|-------------------------------------|
| Background    | `#080612` | Main page background                |
| Surface       | `#110E1D` | Cards, stats bar, contact section   |
| Surface 2     | `#1A1630` | Hover state for cards               |
| Gold          | `#C9A96E` | Primary accent — CTAs, highlights   |
| Gold Light    | `#E2C99A` | Hover accents, gradient endpoints   |
| Gold Dark     | `#9A7845` | Gradient start, borders on hover    |
| Ivory         | `#F0EDE6` | Primary text                        |
| Ivory Muted   | `#8C8679` | Secondary text, labels              |
| Border        | `#2A2240` | Dividers, card borders              |
| Border Glow   | `rgba(201,169,110,0.3)` | Hover border glow      |

---

## Font Choices

| Font                  | Role      | Weights Used               | Source       |
|-----------------------|-----------|----------------------------|--------------|
| Cormorant Garamond    | Headings  | 300, 400, 500, 600, 700 (+ italics) | Google Fonts |
| Jost                  | Body/UI   | 300, 400, 500, 600         | Google Fonts |

**Rationale:** Cormorant Garamond is the go-to editorial serif for luxury brands — it has exquisite optical size behavior, beautiful italics, and genuine old-style character. Jost provides a modern, geometric counterpoint without competing with the serif.

---

## Image Sourcing Approach

All images sourced from **Unsplash** (free-to-use, high quality):

| Section         | Unsplash Photo ID                          | Subject                      |
|-----------------|-------------------------------------------|------------------------------|
| Hero background | `photo-1573408301185-9519f94815ab`        | Luxury jewelry lifestyle     |
| Celestia Ring   | `photo-1605100804763-247f67b3557e`        | Diamond ring close-up        |
| Aurora Necklace | `photo-1611085583191-a3b181a88401`        | Gold necklace                |
| Lumina Drops    | `photo-1535632066927-ab7c9ab60908`        | Sapphire earrings            |
| Empress Cuff    | `photo-1515562141207-7a88fb7ce338`        | Gold bracelet                |
| Heritage Signet | `photo-1573408301185-9519f94815ab`        | Fine jewelry ring            |
| Infinity Band   | `photo-1492707892479-7bc8d5a4ee93`        | Diamond band                 |

Images loaded with `?w=800&q=85` for performance optimization.

---

## What Changed vs. Original Architecture Template

| Element              | Architecture (Original)          | AURUM (Transformed)                    |
|----------------------|----------------------------------|----------------------------------------|
| Brand name           | FORMA ARCHITECTS                 | AURUM Fine Jewelry Atelier             |
| Color system         | Charcoal + orange (#FF6B35)      | Midnight + antique gold (#C9A96E)      |
| Typography           | Archivo + IBM Plex Sans          | Cormorant Garamond + Jost              |
| Preloader SVG        | Building wireframe drawing       | Gem/diamond facet drawing              |
| Hero imagery         | Architecture interior            | Luxury jewelry lifestyle               |
| Hero graphic element | Blueprint building silhouettes   | Gem-facet geometric SVG patterns       |
| Stats               | Projects/Awards/Years/Scale      | Pieces Crafted/Years/Artisans/Origins  |
| Services section     | 8 architectural services         | 8 jewelry categories/collections       |
| Projects section     | 6 real estate/buildings          | 6 signature jewelry pieces with specs  |
| Modal content        | Project type + year + description| Metal, stone, year, collection + desc  |
| Timeline (Gantt)     | Construction phases (weeks)      | Crafting stages (weeks)                |
| Awards carousel      | Architecture competitions        | Vogue, Harper's, JCK press & awards    |
| FAQ                  | Architecture questions           | Jewelry/bespoke/ethics questions       |
| Contact form         | Project type + scale             | Inquiry type + preferred budget        |
| CTA                  | "Project Consultation"           | "Book Appointment"                     |
| City references      | Seoul, Gangnam                   | New York, Fifth Avenue                 |
| All content language | Korean names retained (partial)  | 100% English                           |

---

## Run / Build Instructions

This is a **single-file static HTML template**. No build step required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally
npx serve .
# or
python3 -m http.server 8080
# then open http://localhost:8080
```

**Dependencies (CDN — no install needed):**
- Swiper 11 (carousel)
- GSAP 3.12 + ScrollTrigger (animations)
- Google Fonts (Cormorant Garamond, Jost)

---

## Key Features

- **Animated gem SVG preloader** — gold stroke draws a gem/diamond shape on load
- **Parallax hero** — background image subtly zooms in as page loads
- **Gem-facet decorative geometry** — SVG line patterns evoke gemstone facet maps
- **CountUp stats** — numbers animate up when scrolled into view
- **Stagger-reveal cards** — collection and piece cards fade in with offset timing
- **3D hover on piece cards** — warm color lift + overlay deepens on hover
- **Piece modal** — click any piece card for full specs and high-res image
- **Crafting process bars** — animated Gantt-style bars represent crafting timeline
- **Press carousel** — Swiper.js free-scroll for press/award cards
- **FAQ accordion** — smooth expand/collapse with rotate icon
- **Appointment booking form** — with success state feedback
- **Custom scrollbar** — gold thumb matching brand palette
- **Mobile menu** — full-screen overlay with large serif navigation
- **Responsive** — optimized layouts at 1024px, 768px, 480px

---

*Template cloned and transformed from the FORMA ARCHITECTS architecture template.*
*All content is English. All images are Unsplash (free to use).*
