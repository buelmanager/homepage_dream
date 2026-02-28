#!/usr/bin/env python3
# Usage: python3 capture-hero.py <slug>
# 히어로 섹션(첫 뷰포트 1440x900)만 캡쳐 → images/thumbnail.webp (q=82)
import sys, os, subprocess
from playwright.sync_api import sync_playwright

slug = sys.argv[1] if len(sys.argv) > 1 else exit("Usage: capture-hero.py <slug>")
base = "/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
file_path = f"{base}/{slug}/index.html"
out_dir   = f"{base}/{slug}/images"
hero_png  = f"/tmp/_hero_{slug}.png"
thumb_webp = f"{out_dir}/thumbnail.webp"

os.makedirs(out_dir, exist_ok=True)

PREPARE_SCRIPT = """
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
document.body.classList.remove('locked', 'no-scroll', 'overflow-hidden', 'is-loading');
document.documentElement.classList.remove('locked', 'no-scroll', 'is-loading');
document.body.style.overflow = '';
"""

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--disable-web-security', '--allow-file-access-from-files']
    )
    page = browser.new_page(
        viewport={'width': 1440, 'height': 900},
        device_scale_factor=1
    )
    page.goto(f"file://{file_path}", wait_until='load', timeout=30000)

    try:
        page.wait_for_function("document.fonts.ready.then(() => true)", timeout=5000)
    except Exception:
        pass
    page.wait_for_timeout(2000)

    page.evaluate(PREPARE_SCRIPT)
    page.wait_for_timeout(600)

    # 뷰포트(히어로) 스냅샷 — 첫 900px만
    page.screenshot(path=hero_png, clip={'x': 0, 'y': 0, 'width': 1440, 'height': 900})
    browser.close()

# PNG → WebP q=82, 600px 폭
r = subprocess.run(
    ["cwebp", "-q", "82", "-resize", "600", "0", hero_png, "-o", thumb_webp],
    capture_output=True
)
if r.returncode == 0 and os.path.getsize(thumb_webp) > 3000:
    print(f"✅ {slug}  {os.path.getsize(thumb_webp)//1024}KB  →  {thumb_webp}")
else:
    print(f"❌ cwebp failed for {slug}")

# 임시 PNG 삭제
if os.path.exists(hero_png):
    os.remove(hero_png)
