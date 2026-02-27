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

# CSS opacity:0 강제 해제 스크립트 (preloader/overlay 제외)
REVEAL_SCRIPT = """
(function() {
  var EXCLUDE = [
    'preloader', 'lightbox', 'modal', 'mobile-menu',
    'nav-mobile', 'menu-overlay', 'overlay', 'backdrop',
    'drawer', 'toast', 'tooltip', 'cookie', 'banner-dismiss'
  ];

  function shouldExclude(sel) {
    if (!sel) return true;
    if (sel.indexOf('::before') !== -1 || sel.indexOf('::after') !== -1) return true;
    return EXCLUDE.some(function(ex) { return sel.indexOf(ex) !== -1; });
  }

  function buildOverrides() {
    var overrides = [];
    Array.from(document.styleSheets).forEach(function(sheet) {
      try {
        Array.from(sheet.cssRules || []).forEach(function(rule) {
          if (rule.style) {
            var op = parseFloat(rule.style.opacity);
            var vis = rule.style.visibility;
            var disp = rule.style.display;
            if ((op < 0.1 || vis === 'hidden') && !shouldExclude(rule.selectorText)) {
              overrides.push(
                rule.selectorText +
                ' { opacity: 1 !important; visibility: visible !important; transform: none !important; }'
              );
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
"""

# 페이지 준비 완료 후 실행할 스크립트
PREPARE_SCRIPT = """
// 1. 프리로더 강제 숨김 (다양한 ID/클래스 커버)
var preloaderSelectors = [
  '#preloader', '.preloader', '#loader', '.loader',
  '#loading', '.loading', '#intro', '.intro-screen',
  '[data-preloader]', '.site-loader', '#site-loader'
];
preloaderSelectors.forEach(function(sel) {
  var el = document.querySelector(sel);
  if (el) {
    el.style.display = 'none';
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
    el.style.pointerEvents = 'none';
  }
});

// 2. body 잠금 해제
document.body.classList.remove('locked', 'no-scroll', 'overflow-hidden', 'is-loading');
document.documentElement.classList.remove('locked', 'no-scroll', 'is-loading');
document.body.style.overflow = '';

// 3. 스크롤 인디케이터 표시
var si = document.getElementById('scroll-indicator');
if (si) si.classList.add('visible');
var siAll = document.querySelectorAll('.scroll-indicator, .scroll-progress, [data-scroll-indicator]');
siAll.forEach(function(el) { el.classList.add('visible'); el.style.opacity = '1'; });

// 4. navbar 스크롤 상태 적용 (스크롤 후 배경 전환을 미리 적용)
var nav = document.querySelector('nav, header, .navbar, .nav, #navbar, #header');
if (nav) nav.classList.add('scrolled', 'solid', 'opaque');
"""

GSAP_COMPLETE_SCRIPT = """
// 1. ScrollTrigger 모든 애니메이션 강제 완료
if (window.ScrollTrigger) {
  try {
    ScrollTrigger.getAll().forEach(function(st) {
      try {
        st.scroll(st.end);
        if (st.animation) st.animation.progress(1, true);
      } catch(e) {}
    });
    ScrollTrigger.refresh(true);
  } catch(e) {}
}

// 2. GSAP 타임라인 전체 완료
if (window.gsap) {
  try {
    gsap.globalTimeline.progress(1, true);
    gsap.globalTimeline.pause();
  } catch(e) {}
}

// 3. CSS transition/animation 강제 완료
var style = document.createElement('style');
style.id = '__capture_freeze';
style.textContent = [
  '*, *::before, *::after {',
  '  transition-duration: 0ms !important;',
  '  animation-duration: 0ms !important;',
  '  animation-delay: 0ms !important;',
  '  transition-delay: 0ms !important;',
  '}'
].join('\\n');
document.head.appendChild(style);

// 4. opacity:0 인라인 스타일로 남은 요소 강제 표시
var SKIP = ['preloader','loader','loading','intro','overlay','modal','lightbox','backdrop'];
document.querySelectorAll('*').forEach(function(el) {
  var cls = (el.className || '').toString();
  var id = el.id || '';
  var skip = SKIP.some(function(s) { return cls.indexOf(s) !== -1 || id.indexOf(s) !== -1; });
  if (!skip) {
    var st = window.getComputedStyle(el);
    if (parseFloat(st.opacity) < 0.05) {
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
    }
    if (st.transform && st.transform !== 'none' && st.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
      // translateY가 큰 경우만 리셋 (숨겨진 상태)
      var m = st.transform.match(/matrix\\(([^)]+)\\)/);
      if (m) {
        var vals = m[1].split(',');
        var ty = parseFloat(vals[5] || 0);
        if (Math.abs(ty) > 30) {
          el.style.setProperty('transform', 'none', 'important');
        }
      }
    }
  }
});

// 5. Swiper 강제 업데이트
if (window.Swiper) {
  document.querySelectorAll('.swiper').forEach(function(el) {
    if (el.swiper) el.swiper.update();
  });
}

// 6. 이미지 lazyload 강제 로드
document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(function(img) {
  if (img.dataset.src) img.src = img.dataset.src;
  img.loading = 'eager';
});
"""

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--disable-web-security', '--allow-file-access-from-files']
    )
    page = browser.new_page(
        viewport={'width': 1440, 'height': 900},
        device_scale_factor=1
    )

    # CSS opacity:0 강제 해제 (init script — 가장 먼저 실행)
    page.add_init_script(REVEAL_SCRIPT)

    # 페이지 로드 (networkidle 대기)
    page.goto(f"file://{file_path}", wait_until='domcontentloaded', timeout=30000)
    page.wait_for_timeout(600)

    # 프리로더 제거 & 초기화
    page.evaluate(PREPARE_SCRIPT)
    page.wait_for_timeout(400)

    # 단계적 스크롤 — ScrollTrigger를 순서대로 발동
    page_height = page.evaluate("document.body.scrollHeight")
    steps = 8
    for i in range(1, steps + 1):
        pos = int(page_height * i / steps)
        page.evaluate(f"window.scrollTo(0, {pos})")
        page.wait_for_timeout(150)

    page.wait_for_timeout(800)

    # GSAP 전체 강제 완료 + CSS freeze
    page.evaluate(GSAP_COMPLETE_SCRIPT)
    page.wait_for_timeout(600)

    # 최종 스크롤 TOP으로 복귀
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)

    # 스크린샷
    page.screenshot(path=out_path, full_page=True)
    browser.close()
    print(f"Screenshot saved: {out_path}")
