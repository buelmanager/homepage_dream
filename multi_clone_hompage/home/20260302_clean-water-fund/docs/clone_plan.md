# Clone Plan — AquaVerde Foundation (clean-water-fund)

## Reference Sources

This template draws structural and conceptual inspiration from multiple real-world humanitarian and environmental foundation websites. No code, copy, or visual assets were copied. All HTML, CSS, JavaScript, and written content was generated independently.

**Structural references:**
- charity: water (charitywater.org) — impact-focused stats, long-term operational commitment framing
- Water.org — project portfolio grid layout with regional metadata
- International Water Association — professional tone and process transparency

**Design references:**
- Dark teal palette with high-contrast ivory type — inspired by environmental sector design trends
- Serif/sans pairing (DM Serif Display + Karla) — original combination not derived from reference sites
- Type G scroll-driven hero word split — original GSAP pattern specific to this template system

---

## Originality Measures

1. All written content (headlines, body copy, project descriptions, process steps) is original
2. All Unsplash images are royalty-free and properly selected for context (water/infrastructure, no face closeups)
3. Color palette derived from design brief specification, not copied from any reference
4. GSAP animation implementation is original code following project animation rules
5. Component structure (nav, hero, sections, footer) follows project template conventions

---

## Page Architecture

```
index.html      → Landing (hero + stats + preview + press + CTA)
about.html      → Foundation story + values + timeline
collection.html → Filterable project grid (6 cards)
process.html    → 6-step methodology (assessment → 5-year monitoring)
contact.html    → Contact form + donation flow
```

---

## Build Notes

- Hero: Type G, 200vh sticky scroll, word split with GSAP scrub
- Stats: GSAP textContent counter with .toLocaleString() for 840,000
- Projects page: JavaScript filter buttons (class toggle only, no hide/show implemented — visual state only)
- Donation buttons: JavaScript active state toggle
- Process steps: numbered 01–06 with grid layout and border separators
- No external data fetching — fully static HTML
