# Clone Plan — 20260228_private-equity

## Project Brief

**Type:** Multi-page luxury landing site
**Industry:** Private equity / financial services
**Brand:** Vantage Capital Partners
**Date:** 2026-02-28

---

## Design Decision Log

### Hero Layout: Type D — Portrait + Stats Grid

**Rationale:** Type D selected per forced constraint (F/D layouts underrepresented in library at time of build). Private equity firms rely heavily on credibility signals — institutional data (AUM, returns, portfolio count) presented in a structured stat grid is the ideal visual language for this sector. Left-side dramatic imagery with overlay headline creates emotional gravitas; right-side stats grid creates rational trust.

**Implementation:**
- `grid-template-columns: 1.2fr 0.8fr` — asymmetric split, image-heavy
- Left: hero-1.webp with warm amber overlay, layered headline and CTA
- Right: `--surface` background, 2×2 stat grid with hover states
- Stats: $12.4B AUM / 89 Portfolio Co. / 34 Exits / 22% Net IRR

### Color Palette: P1 — Warm Amber

**Rationale:** Warm amber chosen deliberately over cooler palettes (navy, charcoal) common in finance. The sector typically uses conservative blues/grays — a warm, amber-gold palette differentiates Vantage Capital while maintaining premium credibility. The color story evokes heritage, craftsmanship, and enduring value — all on-brand for a luxury-focused PE firm.

**Base colors:**
- `--bg: #1C1208` — deep warm dark, avg ~20 (above minimum)
- `--surface: #261A0A` — slightly lighter panel layer
- `--accent: #C9973A` — warm amber gold, primary CTA and highlight

### Typography: F2 — Playfair Display + Lato

**Rationale:** Playfair Display's editorial elegance brings a publishing-house gravitas suited to financial communications and luxury brand environments. Lato's geometric warmth complements without competing. The combination reads as authoritative yet approachable — ideal for a firm that wants to be seen as a trusted long-term partner, not a cold financial institution.

### Animation: A4 — Dramatic

**Rationale:** Private equity firms manage patient, long-term capital. The Dramatic animation personality (y:40, duration:1.2, ease:power2.inOut) reinforces this measured, confident character. Not flashy — deliberate and unhurried. Each element arrives with weight.

---

## Sector-Specific Content Decisions

### Investment Universe
Focused on three sectors the brief specified:
1. Luxury Consumer (fashion, leather goods, jewelry, fragrance)
2. Premium Hospitality (boutique hotels, beach clubs, private members clubs)
3. Wellness & Lifestyle (premium fitness, spa, longevity medicine)

Fictional portfolio companies created with realistic metrics:
- Meridian Resorts Group (3.8× MOIC, $680M entry)
- Luminary Brands ($1.2B revenue, 28% EBITDA margins)
- Arcadian Wellness (47 locations, 92% retention)
- Cellier Fine Wines (€380M revenue, 4.1× partial MOIC)

### Realized Exits (track record)
Three flagship exits chosen to tell a narrative arc:
- Provenance Hotels (IPO exit — highest profile)
- Maison Aubert (strategic sale — highest multiple: 6.1×)
- Terroir Collective (competitive auction — demonstrates process)

---

## Multi-Page Architecture

### index.html — Home
Full narrative arc from hero → proof points → CTA.
Demonstrates full brand story in one scroll.

### about.html — Firm Story
Founding 1998 → chronological timeline → leadership team → culture → fund history.
Builds human connection and institutional trust.

### collection.html — Portfolio
Sector-organized grid + list view + dedicated exits section.
Demonstrates breadth and selectivity simultaneously.

### process.html — Investment Strategy
Process pipeline visualization → criteria tabs → value creation pillars → sector focus → ESG.
Speaks directly to prospective portfolio company founders and LP due diligence teams.

### contact.html — Contact
Four-channel contact system + detailed form with inquiry type selector → four global offices → investor resources.
Structured to route each visitor type to the appropriate response.

---

## Originality Notes

- All company names, financial figures, and portfolio details are original fiction
- No direct cloning of any existing PE firm's website design or content
- Brand name "Vantage Capital" is fictional
- All testimonial quotes are original creative writing
- Color palette, typography, and layout system are defined by project design brief constraints
