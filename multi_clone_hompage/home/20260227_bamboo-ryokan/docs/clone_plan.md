# Clone Plan — KURETAKE Bamboo Ryokan & Onsen

## Project Brief

Build a complete luxury multi-page website for a traditional Japanese bamboo ryokan and onsen. The brand is KURETAKE (呉竹), founded 1890 in Arashiyama, Kyoto, operated by five generations of the Yamamoto family. The aesthetic references wabi-sabi philosophy, Japanese hospitality (omotenashi), and bamboo-forest luxury.

## Reference Inspirations

- Aman Kyoto — minimal luxury in a forest setting
- Hoshinoya Kyoto — ryokan accessible only by river, deep nature immersion
- Beniya Mukayu — conceptual ryokan with philosophical depth
- HOSOO Kyoto — heritage craft brand with contemporary presentation

Key influences abstracted, not copied: typographic restraint, use of Japanese characters as ornamental elements, two-column split layouts, nature photography with heavy overlay gradients.

## Page Architecture

### index.html — Homepage
**Sections:**
1. Preloader (kanji 呉竹 + loading bar + brand name)
2. Scroll indicator (right-side fixed, animated vertical line)
3. Navbar (fixed, transparent → frosted on scroll)
4. Hero — Type G (Scroll-Driven Text Transform)
   - Two massive words: KURE / TAKE diverge horizontally on scroll
   - Opacity fades, scale shrinks, y-position shifts at different rates
   - Background parallax at 20% of scroll progress
5. Stats bar — 12 Rooms / 3 Onsen / Michelin / 1890
6. Philosophy — 3-column CSS grid (Ma / Wabi / Sabi)
7. Room Collection — 2×2 grid with hover image zoom + overlays
8. Onsen section — split layout with layered images
9. Guest Journey — 5-step horizontal process (kanji numerals 一〜五)
10. Heritage — split layout with quote block
11. Testimonials — Swiper carousel with fade effect
12. Reservation form — 2-column grid form
13. Footer — 4-column, background: var(--bg)

### about.html — Our Story
**Sections:**
1. Page hero (65vh, hero-2.webp)
2. Intro split — narrative + portrait image
3. Timeline — 6 milestones 1890–2022
4. Family generations — 3-card grid (Toshiro, Hideo, Michiko)
5. Forest & setting — image grid + narrative
6. Footer

### collection.html — Rooms & Suites
**Sections:**
1. Page hero (65vh, hero-3.webp)
2. Collection intro — philosophy of space
3. Room details — 4 rooms, alternating reverse direction layout
   - Bamboo Grand Suite (95㎡, Premier, ¥85,000)
   - Garden View Room (52㎡, Deluxe, ¥45,000)
   - Forest Bath Chamber (68㎡, Signature, ¥62,000)
   - Matsu Wing (38㎡, Classic, ¥32,000)
4. Comparison table — amenities matrix
5. Footer

### process.html — Guest Rituals
**Sections:**
1. Page hero (65vh, hero-4.webp)
2. Ritual intro — omotenashi philosophy
3. Five ritual steps — full-width alternating image/text rows
   - Step 1: Gate Ceremony (arrival)
   - Step 2: Yukata Dressing
   - Step 3: Onsen Immersion
   - Step 4: Kaiseki Dinner
   - Step 5: Morning Ritual (dawn meditation + breakfast)
4. Optional experiences — 6-card grid (Tea, Ikebana, Grove Walk, Sumi-e, Ceramics, Onsen Extension)
5. Practicalities — 4-column table grid
6. Footer

### contact.html — Reserve
**Sections:**
1. Page hero (60vh, hero-1.webp)
2. Reservation form + info sidebar
   - Contact details, rate inclusions, cancellation policy
   - Full reservation form (name, email, dates, room, package, dietary, message)
   - Form success state (replaces form on submit)
3. Curated packages — 3-card grid
   - Classic Stay, Forest Immersion, Arts & Ceremony
4. Access & directions — routes + map placeholder
5. Footer

## Animation Strategy

### Hero Type G — Scroll-Driven Text Transform
```js
ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  end: 'bottom top',
  scrub: 1.2,
  onUpdate: (self) => {
    const p = self.progress;
    // word-1: diverges left + shrinks
    gsap.set(word1, { yPercent: -p*30, xPercent: -p*8, scale: 1-p*0.15, opacity: 1-p*1.2 });
    // word-2: diverges right at different rate
    gsap.set(word2, { yPercent: -p*20, xPercent: p*8, scale: 1-p*0.1, opacity: 1-p*1.4 });
    // tagline fades faster
    gsap.set(heroTagline, { yPercent: -p*40, opacity: 1-p*2 });
  }
});
```

### Scroll-Triggered Sections (Animation A2 — Whisper)
- `duration: 1.5, y: 14, stagger: 0.06, ease: 'power1.out', immediateRender: false`
- Applied to: stats, philosophy cards, room cards, journey steps, testimonials, form

## Technical Decisions

| Decision | Rationale |
|---|---|
| No CSS `opacity: 0` on content | Prevents invisible sections if GSAP fails to load |
| `immediateRender: false` top-level | Prevents elements starting at opacity:0 before GSAP runs |
| SplitText polyfill inline | Club GSAP not on cdnjs CDN; polyfill covers chars/words/lines API |
| Swiper 11 for testimonials | Lightweight, reliable, good fade effect |
| Philosophy `display: grid` | Brief specifies CSS grid, not flex |
| `overflow: visible` on collection | Allows hover box-shadows to appear beyond grid bounds |
| Footer `background: var(--bg)` | Project convention — never hardcoded hex |
| Custom scrollbar thin | Project convention — accent-dark on bg |

## Color Safety Check

All background values checked against `avg(R+G+B)/3 ≥ 20` threshold:
- `--bg: #141810` → avg(20+24+16)/3 = 20.0 ✓ (at minimum; safe)
- `--surface: #1C2018` → avg(28+32+24)/3 = 28.0 ✓
- `--surface2: #222A1E` → avg(34+42+30)/3 = 35.3 ✓
- `--border: #181E14` → avg(24+30+20)/3 = 24.7 ✓

## File Counts

- HTML pages: 5
- JSON files: 1 (meta.json)
- Markdown files: 4 (readme.md + 3 docs)
- Image placeholders: 12 (hero ×4, product ×4, ambient ×3, thumbnail ×1)
