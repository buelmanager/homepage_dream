#!/usr/bin/env python3
# Usage: python3 capture-page.py <slug>
import sys, os
from playwright.sync_api import sync_playwright

slug = sys.argv[1] if len(sys.argv) > 1 else exit("Usage: capture-page.py <slug>")
base = "/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
file_path = f"{base}/{slug}/index.html"
out_dir   = f"{base}/{slug}/images"
out_path  = f"{out_dir}/fullpage.png"

os.makedirs(out_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})

    # Inject before page JS: override ALL CSS opacity:0 rules with opacity:1 !important
    # This handles GSAP initial states, vanilla JS reveal-up, and all animation targets
    page.add_init_script("""
      (function() {
        // Selectors to exclude from force-reveal (overlays that should stay hidden)
        var EXCLUDE = ['preloader', 'lightbox', 'modal', 'mobile-menu',
                       'nav-mobile', 'menu-overlay', 'overlay', 'backdrop',
                       'drawer', 'toast', 'tooltip'];

        function buildOverrides() {
          var overrides = [];
          Array.from(document.styleSheets).forEach(function(sheet) {
            try {
              Array.from(sheet.cssRules || []).forEach(function(rule) {
                if (rule.style && parseFloat(rule.style.opacity) < 0.1) {
                  var sel = rule.selectorText;
                  // Skip pseudo-elements (::before/::after hover overlays etc.) and excluded overlay classes
                  if (sel &&
                      sel.indexOf('::before') === -1 &&
                      sel.indexOf('::after') === -1 &&
                      !EXCLUDE.some(function(ex) { return sel.indexOf(ex) !== -1; })) {
                    overrides.push(sel + ' { opacity: 1 !important; transform: none !important; visibility: visible !important; }');
                  }
                }
              });
            } catch(e) {}
          });
          if (overrides.length > 0) {
            var s = document.createElement('style');
            s.id = '__capture_reveal';
            s.textContent = overrides.join('\\n');
            document.head.appendChild(s);
          }
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', buildOverrides);
        } else {
          buildOverrides();
        }
      })();
    """)

    page.goto(f"file://{file_path}")
    page.wait_for_timeout(500)
    # 프리로더 스킵 & 스크롤 인디케이터 강제 표시
    page.evaluate("""
      const pre = document.getElementById('preloader');
      if (pre) pre.style.display = 'none';
      document.body.classList.remove('locked');
      const si = document.getElementById('scroll-indicator');
      if (si) si.classList.add('visible');
    """)
    page.wait_for_timeout(800)
    # Scroll to bottom → triggers ScrollTrigger and scroll-reveal handlers
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(2000)
    # Force-complete all GSAP animations
    page.evaluate("""
      if (window.ScrollTrigger) {
        try { ScrollTrigger.getAll().forEach(function(st) { if (st.animation) st.animation.progress(1, true); }); } catch(e) {}
      }
      if (window.gsap) {
        try { gsap.globalTimeline.progress(1, true); } catch(e) {}
      }
      window.dispatchEvent(new Event('scroll'));
    """)
    page.wait_for_timeout(500)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)
    page.screenshot(path=out_path, full_page=True)
    browser.close()
    print(f"Screenshot saved: {out_path}")
