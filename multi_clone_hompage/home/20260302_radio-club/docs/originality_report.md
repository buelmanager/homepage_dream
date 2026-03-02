# Originality Report — Frequency Amateur Radio Club

**Slug:** `20260302_radio-club`
**Date:** 2026-03-02

---

## Summary

This template is an original design created specifically for the `20260302_radio-club` slug. All HTML, CSS, JavaScript, copy, and layout decisions were authored from scratch in this session. No existing templates, CSS frameworks, or third-party UI kits were copied.

---

## Unique Design Elements

### 1. Hero Type F — Frequency Band Search Widget
A novel interactive hero layout not seen in previous templates in this project. The frequency-band search interface is directly relevant to the amateur radio domain. The split layout (frequency display left / search widget right) is unique among all 185+ templates in this codebase.

Key distinguishing details:
- Live frequency cycling via GSAP opacity fade every 3 seconds (6 rotating bands)
- Six filter tag buttons styled with active state: HF 3–30 MHz, VHF 30–300 MHz, CW Morse, SSB Voice, Digital FT8, Emergency
- CSS scanline texture: `linear-gradient(0deg, transparent 49.5%, rgba(78,232,255,0.03) 50%, transparent 50.5%; background-size: 100% 4px)`
- Frequency panel shows real amateur radio band/frequency/mode data

### 2. Wave-Bar Preloader
Seven animated bars with staggered CSS `scaleY` keyframes to simulate a spectrum analyser / audio level display. The animation timing and structure are unique — not copied from any previous template.

### 3. Cyan-on-Deep-Navy Palette
The `#101420` background with `#4EE8FF` accent is not used in any other template in this codebase. The combination evokes oscilloscope trace aesthetics without cliché.

### 4. Bebas Neue Display Typography
High letter-spacing all-caps display text creates an industrial signal-terminal aesthetic appropriate to the amateur radio domain. Unique to this template — no other templates in the 20260302 batch use Bebas Neue.

### 5. Operator Callsign System (about.html)
The six club officers are presented with their FCC callsign (W1FRQ, K1SIG, N1ANT, etc.) as the primary identifier rather than a title, which is authentic to amateur radio culture and unique in template design.

### 6. Authentic Technical Content
All equipment names, specifications, frequencies, modes, and procedures are technically accurate:
- Real Icom, Kenwood, Yaesu, Elecraft model numbers and specs
- Accurate FCC band allocations (160m–6m for Extra Class)
- Correct WSJT-X operating procedures for FT8
- Real CTCSS tone (100 Hz) and repeater offset (–600 kHz) values

---

## Third-Party Assets

| Asset | Source | Licence |
|-------|--------|---------|
| GSAP 3.12.2 | cdnjs.cloudflare.com | GSAP Standard Licence (free for non-premium) |
| Swiper 11 | cdn.jsdelivr.net | MIT |
| Bebas Neue font | Google Fonts | SIL OFL 1.1 |
| DM Sans font | Google Fonts | SIL OFL 1.1 |
| Unsplash photos | images.unsplash.com | Unsplash Licence (free commercial use) |

---

## Differentiation from Other Club Templates in Batch

| Template | Style | Hero | Palette |
|----------|-------|------|---------|
| `20260302_orchid-society` | Luxury botanical | E (Canvas grid) | Rose-black |
| `20260302_book-society` | Literary midnight | G (Scroll text) | Midnight blue |
| `20260302_sailing-society` | Nautical luxury | B (Parallax) | Ocean teal |
| `20260302_wine-club` | Bordeaux luxury | D (Portraits+Stats) | Deep rose-black |
| **`20260302_radio-club`** | **Technical industrial** | **F (Search widget)** | **Cyan-navy** |

All five templates in the batch are visually and technically distinct. No CSS, layout code, or content blocks are shared between them.

---

## Conclusion

`20260302_radio-club` is an original, domain-appropriate luxury landing page template. All design decisions, copy, layouts, and interactive behaviours are bespoke to this template and the amateur radio community it serves.
