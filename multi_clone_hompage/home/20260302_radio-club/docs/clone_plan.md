# Clone Plan — Frequency Amateur Radio Club

**Slug:** `20260302_radio-club`
**Date:** 2026-03-02
**Hero Layout:** F (Interactive Search Widget)

---

## Design Goals

1. Convey the technical precision and radio-operator culture of an amateur radio club
2. Hero Type F: frequency-band search widget creates immediate interactive engagement
3. Cyan-on-deep-navy palette evokes oscilloscope / spectrum analyser aesthetics
4. Bebas Neue display font gives industrial, high-signal-strength presence
5. Scanline CSS texture reinforces CRT / vintage radio aesthetic without being kitschy

---

## Section Architecture (index.html)

| # | Section | Design Notes |
|---|---------|-------------|
| 1 | Preloader | Wave-bar spectrum analyser animation, 7 bars, Bebas Neue logo |
| 2 | Nav | Fixed, blur backdrop, FREQ.ARC logo with cyan accent dot |
| 3 | Hero (F) | Split layout: frequency display left, search widget right, scanline bg |
| 4 | Features | 3-column grid with cyan top-border cards, icon-free |
| 5 | Collection Preview | 3-card equipment preview grid with band label badges |
| 6 | Process Steps | 4-step numbered pathway, horizontal layout |
| 7 | Stats Bar | Full-width accent-bg stat row: 340 members, 40 years, 178 DXCC, etc. |
| 8 | Philosophy | 3-column grid (display:grid, NOT flex) |
| 9 | Press / Testimonials | Swiper 11 carousel with member/operator quotes |
| 10 | CTA | Full-width dark section, Bebas Neue headline, join button |
| 11 | Footer | 4-column: brand, nav, station, bands |

---

## Hero Type F Implementation

```html
<div class="hero-layout">
  <!-- LEFT: Frequency display -->
  <div class="hero-content">
    <h1 class="hero-heading">FREQUENCY<br>AMATEUR RADIO</h1>
    <div class="hero-freq-display">
      <div class="freq-panel" id="freqDisplay">14.225 MHz — 20m SSB</div>
      <!-- alternates via GSAP every 3s -->
    </div>
  </div>
  <!-- RIGHT: Search widget -->
  <div class="hero-widget">
    <input type="text" placeholder="Find by band, mode, or frequency..." />
    <div class="widget-tags">HF / VHF / CW / SSB / FT8 / Emergency</div>
    <button>Search Bands</button>
  </div>
</div>
```

---

## Frequency Cycling JS

```js
const freqs = [
  { band: '20m', freq: '14.225 MHz', mode: 'SSB' },
  { band: '40m', freq: '7.074 MHz', mode: 'FT8' },
  { band: '80m', freq: '3.573 MHz', mode: 'FT8' },
  { band: '15m', freq: '21.074 MHz', mode: 'FT8' },
  { band: '160m', freq: '1.830 MHz', mode: 'CW' },
  { band: '2m', freq: '144.200 MHz', mode: 'SSB' },
];
let fi = 0;
setInterval(() => {
  fi = (fi + 1) % freqs.length;
  gsap.to('.freq-panel', { opacity: 0, duration: 0.4, onComplete: () => {
    // update text
    gsap.to('.freq-panel', { opacity: 1, duration: 0.4 });
  }});
}, 3000);
```

---

## Colour Compliance

| Check | Value | Status |
|-------|-------|--------|
| `--bg` avg(R,G,B) | avg(16,20,32) = 22.7 | PASS (≥20) |
| `--surface` avg | avg(24,30,42) = 32.0 | PASS |
| `--surface2` avg | avg(30,36,56) = 40.7 | PASS |
| All sections | var(--bg) / var(--surface) | PASS |
| Footer bg | var(--bg) | PASS |

---

## File Checklist

- [x] index.html — Hero F + 11 sections
- [x] about.html — History, Officers, Timeline, Values
- [x] collection.html — Shack, Equipment Grid, Antennas, Recommendations
- [x] process.html — Licence Pathway, Workshops, EmComm, Schedule
- [x] contact.html — Form, Info, Membership, Location
- [x] meta.json
- [x] readme.md
- [x] docs/clone_plan.md
- [x] docs/image_validation.md
- [x] docs/originality_report.md
