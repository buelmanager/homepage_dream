# VOLDUR — Altitude Forge

## Concept
High-altitude blacksmith forge in the Swiss Alps at 2,400 meters. Brand fictional name VOLDUR. The forge specializes in hand-forged blades using locally-extracted alpine ore and a proprietary glacial quench technique. Five-page luxury template with dark industrial aesthetic.

## Color Palette — P8 Onyx Stone
- Background: #181818
- Surface: #222222
- Accent: #B0B0C0 (steel grey-blue)
- Ivory: #EEEEF2

## Typography — F3 Bebas Neue + DM Sans
- Bebas Neue: headlines, brand name, section titles (condensed display)
- DM Sans: body text, navigation, captions

## Hero — Type B Parallax
Dual-layer parallax background with mousemove interaction. Alpine mountain photography. Brand displayed at 12vw Bebas Neue with accent color on second word.

## Animation — A5 Organic
Each element has randomized duration (1.0–1.4s) and y offset (20–28px) for natural stagger feel. gsap.to() pattern with preHideBelowFold utility.

## Pages
- index.html: Full landing page with all 13 sections
- about.html: Founder story, manifesto, values, heritage timeline
- collection.html: Product grid with filter bar, 6 blade listings
- process.html: 5-stage forging process with alternating image/text layout
- contact.html: Commission form, contact details, map placeholder

## Performance Notes
- All images from Unsplash CDN with w=1920&q=80 parameters
- Lazy loading on below-fold images
- GSAP loaded from cdnjs CDN
- Swiper 11 for press section carousel
- No custom JS framework dependencies
