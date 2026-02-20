---
title: "5 Modern CSS Features That Transform Homepage Design Without a Single Line of JavaScript"
date: "2026-02-20"
tags: [css, container-queries, oklch, web-design, frontend, homepage-design]
description: "Container queries, OKLCH, :has(), text-wrap: balance, and native dialog -- five CSS features that eliminate JavaScript and improve homepage design today."
thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80"
---

# 5 Modern CSS Features That Transform Homepage Design Without a Single Line of JavaScript

Despite being broadly available across all major browsers since 2023, only 41% of developers have ever used CSS container queries. That statistic, from the [2025 State of CSS survey](https://blog.logrocket.com/container-queries-2026/), means a majority of homepages are still solving problems with JavaScript that CSS now handles natively. The adoption gap is not a technology problem. It is an awareness problem.

Here are five CSS features that replace entire categories of JavaScript dependency and make homepage designs measurably better. Each one is shipping in browsers today. Each one eliminates code you are currently maintaining. And each one produces a result that is faster, more accessible, and easier to reason about than its JavaScript predecessor.

![Lines of code displayed on a dark monitor in a code editor](https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80)
*Photo by [Florian Olivo](https://unsplash.com/@florianolv) on [Unsplash](https://unsplash.com)*

---

## 1. Container Queries: The End of Viewport-Only Responsive Design

For over a decade, responsive design has meant one thing: media queries tied to the viewport width. If the browser window is 768 pixels wide, apply these styles. If it is 1200 pixels wide, apply those. This works for page-level layout decisions, but it fails the moment you need a component to adapt to its own context rather than the screen's dimensions.

Container queries fix this by letting components respond to the width of their parent container instead of the viewport. A card component inside a full-width hero section behaves differently than the same card inside a narrow sidebar -- automatically, with no JavaScript resize listeners and no viewport-specific overrides. As [Kevin Powell explains in his container queries series](https://www.classcentral.com/course/youtube-container-queries-are-going-to-be-a-game-changer-160424), this represents a fundamental shift toward component-based design where layout-agnostic components are finally possible.

The browser support story is settled. Container queries reached baseline support across Chrome, Firefox, Safari, and Edge in 2023 and now cover [over 90% of U.S. web traffic](https://caisy.io/blog/css-container-queries). This is not an experimental feature. It is production-ready infrastructure.

![Laptop displaying a web design layout on screen in a clean workspace](https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80)
*Photo by [Domenico Loia](https://unsplash.com/@domenicoloia) on [Unsplash](https://unsplash.com)*

### The Card Component: Container Queries in Action

The canonical use case is the card component. Here is the pattern, drawn from a [LogRocket case study on container queries in 2026](https://blog.logrocket.com/container-queries-2026/):

```css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

That is the entire implementation. When the `.card-wrapper` is wider than 500 pixels, the card switches from a stacked portrait layout to a horizontal landscape layout. The same card renders correctly in a full-width homepage hero, a three-column product grid, and a narrow sidebar -- without a single media query or JavaScript resize listener.

Before container queries, achieving this behavior required either a `ResizeObserver` in JavaScript to measure the parent's width and toggle classes, or a set of media queries that tightly coupled the card's appearance to specific viewport breakpoints. Both approaches create maintenance problems that compound as the number of layout contexts grows.

### Style Queries: Theme Variants Without JavaScript Class Toggling

CSS style queries extend the container query concept further. Instead of querying a container's dimensions, style queries respond to the value of a CSS custom property on the container. [Kevin Powell's "Style Query Spotlight" series on Frontend Masters](https://frontendmasters.com/tutorials/kevin-powell/style-queries/) demonstrates how this enables component-scoped theme variants and density modes -- use cases that previously required JavaScript `classList` manipulation or CSS-in-JS libraries.

A dense data table inside a dashboard panel can automatically switch to a compact layout when the container sets `--density: compact`, while the same table in a marketing page renders at full size when the container sets `--density: comfortable`. No JavaScript. No class toggles. The styling logic lives entirely in CSS.

### Container Queries vs. Media Queries: A Complementary Pair

It is worth stating clearly: container queries do not replace media queries. Viewport-level decisions -- print styles, device orientation, `prefers-color-scheme`, `prefers-reduced-motion` -- still require traditional media queries. The [LogRocket analysis](https://blog.logrocket.com/container-queries-2026/) emphasizes that overuse of container queries can introduce performance penalties due to containment recalculation overhead. The two systems are complementary, not competitive.

There is also a structural constraint to plan for: elements cannot query themselves. Only children of a container element can respond to a container query, which means your HTML needs a wrapper element around the component. This can clash with existing semantic HTML structures if not planned for upfront. It is a small price, but it is worth knowing before you refactor.

---

## 2. Scroll-State Queries: JavaScript-Free Sticky Navigation

Every homepage with a sticky navigation bar faces the same implementation question: how do you change the nav's appearance when it becomes "stuck" at the top of the viewport? The traditional answer is a JavaScript scroll event listener -- `window.addEventListener('scroll', ...)` -- that checks `scrollY`, toggles a class, and applies a background color, a blur, and reduced padding.

Container scroll-state queries eliminate this pattern entirely. Using `@container scroll-state(stuck: top)`, a sticky navigation bar detects its own stuck state and updates its styling with zero JavaScript. The [LogRocket guide to container queries in 2026](https://blog.logrocket.com/container-queries-2026/) documents the full pattern:

```css
nav {
  position: sticky;
  top: 0;
  container-type: scroll-state;
}

@container scroll-state(stuck: top) {
  nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    padding-block: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
```

The classic "shrinking nav on scroll" pattern -- background color transition, backdrop blur, reduced padding -- works with no event listeners, no `requestAnimationFrame`, and no scroll position calculations. For homepage builders who have maintained this JavaScript pattern across dozens of projects, the relief is tangible.

### The Adoption Gap Is a Competitive Advantage

The adoption numbers here are striking. The 2025 State of CSS survey found that [fewer than 1% of developers have adopted scroll-state queries](https://blog.logrocket.com/container-queries-2026/). That is not a typo. Less than one percent. For teams that implement this feature today, it represents a genuine competitive differentiator in code quality and maintenance burden.

### Progressive Enhancement Is Required (For Now)

There is a meaningful caveat. Scroll-state queries currently work only in Chromium-based browsers: Chrome, Edge, and Opera. Firefox and Safari do not yet support them. This means scroll-state queries must be treated as a progressive enhancement. Non-supporting browsers receive the nav in its default, full-size state -- which is a perfectly acceptable baseline. The enhanced experience layers on top without degrading the fallback.

For teams that need the shrinking nav effect in all browsers today, a lightweight JavaScript fallback (an `IntersectionObserver` on a sentinel element) covers the gap cleanly. The CSS-first approach reduces your JavaScript to a fallback role rather than the primary implementation -- which is the right direction.

---

## 3. The :has() Selector and text-wrap: balance -- Two Small Properties With Big Impact

Some CSS features do not need a paragraph of explanation. They need one line of code and a before-and-after screenshot. The `:has()` pseudo-class and `text-wrap: balance` both fall into this category.

![Close-up of HTML and CSS code displayed on a computer monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)
*Photo by [Ilya Pavlov](https://unsplash.com/@ilyapavlov) on [Unsplash](https://unsplash.com)*

### :has() -- The Parent Selector CSS Never Had

The `:has()` pseudo-class reverses CSS selector logic. For the first time, parent elements can react to the state of their children. The implications for homepage design are immediate and practical. [Smashing Magazine's 2025 feature roundup](https://www.smashingmagazine.com/2024/12/new-front-end-features-for-designers-in-2025/) highlights several patterns that previously required JavaScript:

**Dark mode toggle without JavaScript:**

```css
html:has(#dark-toggle:checked) {
  color-scheme: dark;
  --bg: #1a1a1a;
  --text: #f0f0f0;
}
```

A hidden checkbox in the HTML, a label styled as a toggle switch, and this single CSS rule replace the JavaScript event listener plus `classList.toggle()` pattern that powers most homepage dark mode implementations. No `localStorage` read on page load. No flash of wrong theme. The browser handles the state natively.

Beyond dark mode, `:has()` enables conditional navigation sub-menus (`nav:has(.submenu:hover)`), modal scroll locks (`body:has(dialog[open]) { overflow: hidden; }`), and form validation states (`form:has(:invalid) .submit-btn { opacity: 0.5; }`). Each of these previously required JavaScript event listeners and DOM manipulation.

### text-wrap: balance -- One Line That Fixes Hero Headlines

If you have ever shipped a homepage where the hero headline renders "Craft Coffee Roasted With Intention in" on one line and "Brooklyn" orphaned on the next, you know the problem `text-wrap: balance` solves. As [Smashing Magazine documents](https://www.smashingmagazine.com/2024/12/new-front-end-features-for-designers-in-2025/), applying this single property distributes words equally across lines, eliminating awkward single-word orphans without manual `<br>` tags or JavaScript resize observers:

```css
h1 {
  text-wrap: balance;
}
```

The browser automatically distributes words across balanced lines regardless of viewport width. One CSS property replaces what previously required a JavaScript `ResizeObserver` solution monitoring the headline element and inserting line breaks dynamically.

There is a deliberate performance constraint worth knowing. The property is [capped at 6 lines in Chromium and 10 lines in Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap), which means it is purpose-built for above-the-fold hero headlines and card titles rather than body copy. There is also a minor caveat: `text-wrap: balance` can cause small layout shifts on initial render as the browser computes optimal breakpoints, which may affect Cumulative Layout Shift (CLS) scores on performance audits. For hero headings that are visible immediately on page load, this is generally negligible. For dynamically loaded content, test before deploying.

---

## 4. OKLCH: A Richer, More Predictable Color System for Homepage Palettes

Most homepage color palettes are still defined in hex (`#3b82f6`) or HSL (`hsl(217, 91%, 60%)`). These color models have served us well, but they share a fundamental flaw: they are not perceptually uniform. Increasing the lightness value in HSL does not produce a visually consistent lightness increase across different hues. A blue at 50% lightness and a yellow at 50% lightness look dramatically different in perceived brightness. This makes generating accessible, consistent color scales painful and error-prone.

OKLCH is the first CSS color model that is both perceptually uniform and human-readable. As the [Evil Martians engineering team explains in their comprehensive guide](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl), adjusting the lightness axis in OKLCH does not shift perceived saturation the way HSL does. This makes generating accessible color scales -- scales where every step meets WCAG AA contrast ratios -- far more predictable and reduces manual color correction effort.

![Abstract gradient of vibrant colors blending together](https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80)
*Photo by [Lucas Kapla](https://unsplash.com/@aznbokchoy) on [Unsplash](https://unsplash.com)*

### 50% More Colors Than sRGB

OKLCH does not just organize colors better. It unlocks more of them. By leveraging the Display P3 gamut available on modern screens -- MacBook Pro, iPhone, most Android flagships -- OKLCH provides access to [approximately 50% more displayable colors than sRGB](https://medium.com/@alexdev82/oklch-the-modern-css-color-space-you-should-be-using-in-2025-52dd1a4aa9d0). For homepage brand palettes, this means richer, more vibrant accent colors that were previously impossible to display on the web.

Global browser support for OKLCH [exceeded 92% in Q2 2025](https://medium.com/@alexdev82/oklch-the-modern-css-color-space-you-should-be-using-in-2025-52dd1a4aa9d0) across Chrome, Edge, Firefox, Safari, and Opera. This is not a future feature. It is available now, on the screens your visitors are already using.

### Design System Color Scales Done Right

Engineering teams at companies like Stripe and Linear have adopted perceptually uniform color spaces for their design systems. The practical application is generating a complete tonal scale -- from 50 (lightest) through 950 (darkest) -- where each step has a genuinely consistent perceived lightness jump. The [Evil Martians analysis](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) demonstrates how OKLCH produces accessible contrast ratios predictably, without the manual spot-checking that HSL-based palettes require.

For a homepage design system, this looks like:

```css
:root {
  --brand-50:  oklch(97% 0.02 250);
  --brand-100: oklch(93% 0.04 250);
  --brand-200: oklch(87% 0.08 250);
  --brand-300: oklch(78% 0.12 250);
  --brand-400: oklch(68% 0.16 250);
  --brand-500: oklch(58% 0.18 250);
  --brand-600: oklch(48% 0.16 250);
  --brand-700: oklch(38% 0.12 250);
  --brand-800: oklch(28% 0.08 250);
  --brand-900: oklch(18% 0.04 250);
}
```

Each step is a consistent 10-point lightness decrease. The saturation (chroma) peaks at the mid-tones and tapers at the extremes, matching how human perception works. Every adjacent pair automatically produces readable contrast ratios. Try achieving this with HSL -- it requires manual adjustment at nearly every step.

### When OKLCH Is Not Worth the Effort

Honesty matters here. For a simple homepage with a small, fixed color palette -- say, three brand colors and a neutral gray -- the migration complexity from hex to OKLCH may not justify the investment. Developer familiarity with RGB and hex remains much higher industry-wide. And as of early 2026, [Figma does not export OKLCH values natively](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl), which means designers hand off hex values and developers must convert manually in CSS.

OKLCH delivers its strongest return when you are building a scalable design system with multiple color families, tonal scales, and strict accessibility requirements. If that describes your project, the migration is well worth it. If you have three colors and a weekend deadline, hex is fine.

---

## 5. The Native dialog Element: Accessible Modals Without the JavaScript Overhead

Homepage modals -- newsletter signups, lead capture forms, promotional announcements -- are among the most common interactive patterns on the web. They are also among the most consistently broken for accessibility. Custom modal implementations routinely fail at focus trapping (keyboard users tabbing out of the modal into the page behind it), Esc key dismissal, and screen reader announcements.

The native HTML `<dialog>` element solves all three problems out of the box. As [documented in a thorough implementation guide on Medium](https://michael-fares.medium.com/easily-create-modals-in-2025-with-the-native-html-dialog-element-and-no-external-dependencies-881e03fa195c), replacing a JavaScript-library-dependent modal with the native `<dialog>` eliminates 3-5 accessibility bugs common in custom implementations, including broken focus trapping and missing keyboard dismissal.

![Grey flat screen monitor displaying a website design interface](https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80)
*Photo by [Eftakher Alam](https://unsplash.com/@easiblu) on [Unsplash](https://unsplash.com)*

### Two Lines of JavaScript, Everything Else Is Free

The implementation reduces to HTML structure plus two lines of JavaScript:

```html
<dialog id="newsletter-modal">
  <form method="dialog">
    <h2>Stay in the loop</h2>
    <input type="email" placeholder="you@example.com" required />
    <button type="submit">Subscribe</button>
    <button formmethod="dialog" value="cancel">Close</button>
  </form>
</dialog>

<button onclick="document.getElementById('newsletter-modal').showModal()">
  Subscribe
</button>
```

Calling `dialog.showModal()` opens the modal with focus trapping active, Esc key dismissal working, and the `::backdrop` pseudo-element rendering automatically. No third-party library. No manual focus management. No `aria-modal` attributes you forget to add.

The `::backdrop` pseudo-element is particularly useful for homepage design. It provides a native animation hook for fade-in overlay effects:

```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: fade-in 200ms ease-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### When You Might Still Reach for JavaScript

The native `<dialog>` element is not without limitations. The `::backdrop` pseudo-element and animation support have [documented edge cases across browsers](https://css-tricks.com/getting-creative-with-html-dialog/). Teams needing highly animated or deeply customized modal designs -- multi-step wizards with complex transitions, modals with drag-to-dismiss on mobile -- may still prefer a lightweight JavaScript solution. The native dialog is optimized for the 80% case: simple, accessible modals that work correctly by default.

For homepage lead capture, contact form overlays, and promotional announcements, the native `<dialog>` is the right tool. It is lighter, more accessible, and requires less code than any JavaScript alternative.

---

## Where to Start: A Practical Adoption Path

Five features is a lot to absorb. Here is the order I would recommend for a homepage project:

**Week one: `text-wrap: balance` on your hero headline.** It requires one line of CSS, works in all modern browsers, and produces a visible improvement in typography quality immediately. This is a zero-risk, high-visibility win.

**Week two: Audit your card components for container query opportunities.** If you have a card that appears in multiple layout contexts (hero, grid, sidebar), wrap its parent in `container-type: inline-size` and write a single `@container` rule. You will likely delete several media queries and a `ResizeObserver` in the process.

**Week three: Replace your modal library with `<dialog>`.** If you are using a third-party modal for basic lead capture or newsletter signup, the native element handles it with better accessibility and less code.

**Month two: Evaluate OKLCH for your color palette.** If you are building or maintaining a design system with multiple color families, the perceptual uniformity will save you significant time on accessibility compliance. If your palette is simple and fixed, this can wait.

**Ongoing: Add scroll-state queries as a progressive enhancement.** When Firefox and Safari ship support, this pattern will cover 95%+ of users. Until then, it is a clean enhancement for Chromium users with a simple fallback.

The adoption gap is significant. The [LogRocket analysis](https://blog.logrocket.com/container-queries-2026/) frames it clearly: container queries may be the most powerful responsive design feature since CSS Grid, but only 41% of developers have used them at all. Teams that implement even two or three of these features gain a measurable technical and design advantage over the majority of the web. The features are ready. The browsers are ready. The only remaining variable is whether you start this week.

---

**References:**
- [Container Queries in 2026 -- LogRocket Blog](https://blog.logrocket.com/container-queries-2026/)
- [CSS Container Queries -- caisy.io](https://caisy.io/blog/css-container-queries)
- [New Front-End Features For Designers In 2025 -- Smashing Magazine](https://www.smashingmagazine.com/2024/12/new-front-end-features-for-designers-in-2025/)
- [OKLCH in CSS: Why Quit RGB/HSL -- Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [OKLCH: The Modern CSS Color Space -- Medium](https://medium.com/@alexdev82/oklch-the-modern-css-color-space-you-should-be-using-in-2025-52dd1a4aa9d0)
- [text-wrap -- MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
- [Native HTML Dialog Element -- Medium](https://michael-fares.medium.com/easily-create-modals-in-2025-with-the-native-html-dialog-element-and-no-external-dependencies-881e03fa195c)
- [Getting Creative with HTML Dialog -- CSS-Tricks](https://css-tricks.com/getting-creative-with-html-dialog/)
- [Style Queries Tutorial -- Frontend Masters / Kevin Powell](https://frontendmasters.com/tutorials/kevin-powell/style-queries/)
- [State, Logic, Native Power: CSS Wrapped 2025 -- Smashing Magazine](https://www.smashingmagazine.com/2025/12/state-logic-native-power-css-wrapped-2025/)

#css #container-queries #oklch #web-design #frontend #homepage-design
