# Clone Plan — DUENDE Flamenco Academy

## Concept

DUENDE is an original luxury landing page concept for a world-class flamenco dance academy in Seville, Spain. It is not a clone of any existing website — it is a wholly original design built to the luxury template conventions of the homepage_dream project.

## Brand Reference

The brand and content concept is inspired by the aesthetics and positioning of:
- Real Conservatorio de Arte Dramático de Sevilla
- Bienal de Flamenco de Sevilla
- Shawl & Stoke (luxury dance studio template references)

No content, code, or visual design has been copied from any of these references. All content is original.

## Hero Layout Selection

**Type C — Diagonal Split** (following `hero-layouts.md` guidelines)

Rationale: The diagonal split hero creates immediate visual drama with the dancer silhouette on the left and bold typographic title on the right. This layout has been used for hat-atelier, kimono-atelier, leather-studio, lacquer-studio — appropriate for craft/art academies with strong visual identity.

## Page Architecture

```
index.html          — Main landing page (public entry point)
  ├── performances.html — Event calendar + tablao series
  ├── about.html        — History + faculty + philosophy
  ├── classes.html      — Program tiers + schedule + FAQ
  └── contact.html      — Enrollment form + visit information
```

## Design Decisions

1. **Color palette**: Deep crimson (`#CC2020`) with gold (`#F0C040`) — evokes passion, drama, and tradition without being generic "Spanish" clichés.

2. **Typography**: Cinzel (Roman-influenced serif) for headings conveys classical authority. Raleway (geometric sans) for body provides modern contrast and legibility.

3. **Layout philosophy**: Content-dense but visually spacious. Long sections with generous padding. No infinite scroll gimmicks — each section has clear purpose and distinct visual character.

4. **Animation**: Subtle, purposeful GSAP animations. No decorative animation that distracts from content. Scroll-triggered reveals, hero letter stagger, and image scale transitions.

5. **Preloader**: Rose/fan petal SVG animation — directly references flamenco imagery without being a photograph.

## Content Strategy

- All text is original and written in the voice of a high-end arts institution
- Spanish terms (palo, tablao, cante, toque, zapateado, braceo) are used accurately and explained in context
- Pricing in Euros (€) appropriate for European market
- Real venue names (Teatro de la Maestranza, La Carbonería, El Arenal) used to establish authenticity

## Technical Implementation

- Pure HTML/CSS/JS — no framework dependencies
- GSAP CDN for scroll animations
- Google Fonts for typography
- Unsplash CDN for imagery
- Fully responsive at 4rem horizontal padding
- All internal links functional between pages
