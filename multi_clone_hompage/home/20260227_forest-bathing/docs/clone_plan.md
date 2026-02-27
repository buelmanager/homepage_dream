# Clone Plan — SHINRIN Forest Bathing Retreat

**Template:** `20260227_forest-bathing`
**Date:** 2026-02-27
**Designer:** Claude Code (AI-generated)
**Status:** Complete

---

## Design Brief

### Brand Identity
- **Name:** SHINRIN (from Japanese: 森林, "forest")
- **Tagline:** "Let the Forest Breathe You"
- **Industry:** Shinrin-yoku / Forest Therapy Retreat
- **Target Audience:** Burnout professionals, wellness seekers, corporate wellness buyers, nature-immersion enthusiasts aged 28–60

### Visual Direction
The design draws from the aesthetic intersection of:
- Japanese wabi-sabi minimalism (empty space, natural materials, impermanence)
- Pacific Northwest luxury outdoor brands (REI x Aesop sensibility)
- High-end wellness retreats (Six Senses, Aman, COMO Hotels forest spas)

The result is a dark, earthy luxury — not the white-and-gold luxury of traditional hospitality brands, but a green-black richness that evokes the forest floor, ancient bark, and filtered canopy light.

---

## Color Palette — P10 Dark Olive

```css
--bg: #141810;         /* Near-black with green cast — avg 18.3 ✓ */
--surface: #1C2018;    /* Slightly lighter card bg — avg 22.0 ✓ */
--surface2: #222A1E;   /* Hover states, form inputs — avg 24.7 ✓ */
--accent: #8AB56A;     /* Forest green — primary interactive */
--accent-light: #AACE8A; /* Lighter green — hover, highlights */
--accent-dark: #5A8040;  /* Darker green — scrollbar, borders */
--ivory: #E4EEE0;      /* Off-white with green cast — body text */
--smoke: #889880;      /* Muted body text */
--muted: #4E5E48;      /* Disabled states, metadata */
--border: #181E14;     /* Subtle dividers */
```

**Color Check:** All section backgrounds exceed DARK_THRESHOLD=15.
- `--bg` avg: (20+24+16)/3 = 20.0 ✓
- `--surface` avg: (28+32+24)/3 = 28.0 ✓
- `--surface2` avg: (34+42+30)/3 = 35.3 ✓

---

## Typography — F5 Fraunces + Inter

### Fraunces (Optical-size serif, variable)
- Used for: Hero titles, section headers, testimonials, pull quotes, brand logo, large numbers
- Weight: 300 (light) — elegant, literary
- Style: Italic variant for emphasis and taglines
- Optical sizes: opsz 9..144 for fine-tuned rendering at all sizes

### Inter (Geometric sans-serif)
- Used for: Body text, labels, navigation, metadata, form elements
- Weight: 300 (body), 400 (UI), 500 (CTAs, emphasis)
- Character: Clean, contemporary, highly legible at small sizes

---

## Hero Layout — Type B

**Parallax + Ken Burns with mousemove interaction:**

```
Layer 1: hero-1.webp — brightness(0.6) — Ken Burns animation A (18s)
Layer 2: hero-2.webp — soft-light blend mode — Ken Burns animation B (22s)
Overlay: CSS gradient (135deg, rgba to transparent to rgba)
Mousemove: JS event listener → gsap.to() layers in opposite directions
```

**Ken Burns keyframes:**
- Layer 1: `scale(1) → scale(1.08) translate(-2%, 1%)`
- Layer 2: `scale(1.05) translate(1%, -1%) → scale(1) translate(-1%, 2%)`

**Mousemove parallax parameters:**
- Layer 1: x: xRatio × -28, y: yRatio × -18 (slower, deeper)
- Layer 2: x: xRatio × 18, y: yRatio × 12 (faster, opposite direction)

---

## Animation System — A5 Organic

All GSAP animations use:
```js
{
  immediateRender: false,            // CRITICAL — never at opacity:0 before scroll
  y: gsap.utils.random(20, 28),     // Slight variation per element
  duration: gsap.utils.random(1.0, 1.4),
  ease: 'power2.out',
  stagger: 0.09
}
```

**Scroll-triggered sections:**
- Stats grid → fade-up stagger
- Philosophy cards → fade-up stagger
- Experience cards → fade-up stagger
- Process steps → slide-right (x: -24)
- Heritage images → parallax scrub (y: -60)
- Studio background → parallax scrub (y: -80)
- Studio content → fade-up stagger
- Booking form → fade-up stagger
- Footer → fade-up stagger

---

## Page Architecture

### index.html (1200+ lines)
Full luxury homepage with 13 sections. Swiper testimonials, booking form, all navigation.

### about.html (700+ lines)
Deep dive into: forest sanctuary description, clinical research data, lead guide biography and credentials, Shinrin-yoku origin timeline, forest ecological facts.

### collection.html (700+ lines)
Four experience cards with full detail: descriptions, inclusions, pricing, CTAs. What-to-bring preparation guide.

### process.html (700+ lines)
Six-phase ANFT protocol explained in depth. Sample guide invitations. ANFT certification explanation. Accordion FAQ with 6 Q&As.

### contact.html (600+ lines)
Full booking inquiry form with: accessibility checkboxes, open-text intention field, success state. Location/directions section. Experience quick-reference comparison table.

---

## GSAP Compliance Checklist

- [x] No `opacity: 0` in CSS on any content element
- [x] All `gsap.from()` with `scrollTrigger` include `immediateRender: false` at TOP LEVEL
- [x] SplitText polyfill inline (not Club GSAP CDN)
- [x] Scroll indicator shown in preloader callback AND setTimeout(4000)
- [x] Philosophy section uses CSS `display: grid` (not flexbox)
- [x] Ken Burns layers use CSS animation (not GSAP) to avoid conflict with mousemove
- [x] No `gsap.set()` to `opacity: 0` on page load
