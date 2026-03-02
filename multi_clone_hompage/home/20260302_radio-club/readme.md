# Frequency Amateur Radio Club — Template

**Slug:** `20260302_radio-club`
**Hero Layout:** F — Interactive Search Widget
**Style:** Technical / Industrial
**Tier:** Premium ($49)

---

## Brand

- **Brand Name:** Frequency Amateur Radio Club
- **Tagline:** Connecting Minds Across the Spectrum
- **Club Callsign:** W1FRQ
- **Founded:** 1984
- **Industry:** Amateur Radio / Technical Club

---

## Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#101420` | Page background (deep navy) |
| `--surface` | `#181E2A` | Card / section background |
| `--surface2` | `#1E2438` | Alternate section background |
| `--accent` | `#4EE8FF` | Cyan — primary interactive colour |
| `--accent-light` | `#8AF3FF` | Hover states |
| `--accent-dark` | `#22B8CC` | Pressed states |
| `--ivory` | `#DCE8F0` | Body text |
| `--smoke` | `#8090A0` | Secondary text |
| `--muted` | `#506070` | Placeholder / disabled |
| `--border` | `#1A2234` | Border / divider |

---

## Typography

- **Display:** Bebas Neue (all-caps, high letter-spacing, industrial)
- **Body:** DM Sans (300/400/500 weights, clean and readable)
- **Google Fonts:** `family=Bebas+Neue&family=DM+Sans:wght@300;400;500`

---

## Hero Type F — Interactive Search Widget

The hero presents a frequency-band search interface with:

1. **Left panel:** Brand heading, tagline, two live frequency display panels showing alternating band data (14.225 MHz SSB, 7.074 MHz FT8, 3.573 MHz FT8, etc.) with GSAP fade cycling every 3 seconds.
2. **Right panel:** Search widget with text input ("Find by band, mode, or frequency..."), six filter tag buttons (HF 3–30 MHz, VHF 30–300 MHz, CW Morse, SSB Voice, Digital FT8, Emergency), and "Search Bands" CTA.
3. **Background:** Deep navy with CSS scanline texture (`linear-gradient(0deg, transparent 49.5%, rgba(78,232,255,0.03) 50%)`) and a subtle hero background image with `filter: brightness(0.25)`.

---

## Animation Personality: A3

- `x: -20px` slide-in (not y)
- `duration: 0.7–0.8s`
- `stagger: 0.04`
- `ease: 'power3.out'`
- All gsap.from() use `immediateRender: false` at top level

---

## Pages

| File | Page | Key Sections |
|------|------|--------------|
| `index.html` | Homepage | Hero (F), Features, Collection Preview, Process Steps, Press, Philosophy, CTA, Footer |
| `about.html` | About | History, Club Officers (6 members), Timeline (1984–2024), Values |
| `collection.html` | Equipment | Shack intro, Equipment grid (6 items), Antenna systems, Member recommendations |
| `process.html` | Training | Licence pathway (4 steps), Workshop grid (6 workshops), EmComm section, Schedule table |
| `contact.html` | Contact | Contact form, Club details, Membership tiers (3), Location/Hours |

---

## SplitText Polyfill

All pages include an inline `class SplitText` polyfill since GSAP Club SplitText is not available on public CDNs. The polyfill supports `type: 'words'` and `type: 'chars'` splitting.

---

## Preloader

Wave-bar animation: 7 bars with staggered `scaleY` keyframe animation creating a spectrum analyser / audio waveform visual. Bebas Neue logo with cyan accent dot.

---

## Unsplash Images Used

- `1550751827-4bd374c3f58b` — Radio/communication technology equipment
- `1518020382113-a7e8fc38eac9` — Electronic equipment / shack setup

---

## Technical Notes

- GSAP 3.12.2 via cdnjs
- Swiper 11 via jsdelivr (press carousel on index.html)
- No external icon libraries — all icons are CSS/SVG inline
- `philosophy-grid` uses `display: grid; grid-template-columns: repeat(3, 1fr)` (not flex)
- Collection grid uses `overflow: visible`
- Footer: `background: var(--bg)` only — no hardcoded hex
