#!/usr/bin/env python3
"""
Replace overused images across luxury landing pages with alternatives
from a curated multi-source pool (Unsplash + Pexels).

Key design: Each page gets UNIQUE replacement URLs — not the same replacement
as another page that had the same original image.

Usage:
  python3 scripts/diversify-images.py --slug cigar-atelier   # fix one page
  python3 scripts/diversify-images.py --all                  # fix all pages
  python3 scripts/diversify-images.py --all --min 5          # only replace images used 5+ times globally
  python3 scripts/diversify-images.py --slug cigar-atelier --dry-run  # preview only
  python3 scripts/diversify-images.py --slug cigar-atelier --capture  # also re-capture screenshot
  python3 scripts/diversify-images.py --report               # show pool usage stats
"""
import sys, re, json, random, subprocess, argparse
from pathlib import Path
from collections import defaultdict

HOME_DIR   = Path(__file__).parent.parent / "multi_clone_hompage" / "home"
POOL_FILE  = Path(__file__).parent / "image-pool.json"
# Tracks {new_url_key: count_of_pages_using_it} — to spread usage evenly
USAGE_LOG  = Path(__file__).parent / "image-pool-usage.json"

FULL_URL_RE = re.compile(r'(https://images\.(?:unsplash|pexels)\.com/[^\s\'"<>\)]+)')


# ─── Pool loading ────────────────────────────────────────────────────────────

def load_pool() -> dict:
    if POOL_FILE.exists():
        return json.loads(POOL_FILE.read_text())
    print("⚠️  image-pool.json not found. Run: python3 scripts/build-image-pool.py")
    return {}


def load_usage() -> dict:
    if USAGE_LOG.exists():
        return json.loads(USAGE_LOG.read_text())
    return {}  # {url_base: page_count}


def save_usage(usage: dict):
    USAGE_LOG.write_text(json.dumps(usage, indent=2))


# ─── URL helpers ─────────────────────────────────────────────────────────────

def url_key(url: str) -> str:
    return url.split('?')[0]


def is_wide(url: str) -> bool:
    """True if URL is for a wide/hero image (w=1920 or w=1600)."""
    return 'w=1920' in url or 'w=1600' in url or 'w=2560' in url


def format_pool_url(raw_url: str, wide: bool) -> str:
    """Format a pool URL for the desired size."""
    base = raw_url.split('?')[0]
    if 'unsplash.com' in base:
        w = 1920 if wide else 800
        return f"{base}?w={w}&q=80&auto=format&fit=crop"
    elif 'pexels.com' in base:
        w = 1920 if wide else 800
        return f"{base}?auto=compress&cs=tinysrgb&w={w}&q=80"
    return raw_url


# ─── Duplicate detection ──────────────────────────────────────────────────────

def scan_all_pages() -> dict:
    """Returns {url_key: [slug, slug, ...]} for all index.html files."""
    usage = defaultdict(list)
    for page_dir in sorted(HOME_DIR.iterdir()):
        if not page_dir.is_dir() or page_dir.name in ('.', '..', '<slug>'):
            continue
        html_file = page_dir / "index.html"
        if not html_file.exists():
            continue
        content = html_file.read_text(errors='ignore')
        for m in FULL_URL_RE.finditer(content):
            usage[url_key(m.group(1))].append(page_dir.name)
    return usage


# ─── Category detection ───────────────────────────────────────────────────────

CATEGORY_HINTS = {
    'hero':       ['hero', 'cinematic', 'banner', 'header', 'full-screen', 'fullscreen', 'parallax-bg'],
    'product':    ['collection', 'product', 'grid', 'item', 'card', 'catalog', 'gallery'],
    'workspace':  ['atelier', 'workshop', 'process', 'craft', 'studio', 'behind', 'forge', 'maker'],
    'ambient':    ['ambient', 'texture', 'background', 'bg', 'overlay', 'section-bg'],
    'portrait':   ['portrait', 'people', 'team', 'artisan', 'master', 'founder', 'artist'],
    'lifestyle':  ['lifestyle', 'editorial', 'detail', 'close', 'macro', 'feature'],
}


def detect_category(html: str, url: str) -> str:
    """Guess category of an image from surrounding HTML context."""
    idx = html.find(url)
    if idx == -1:
        idx = html.find(url_key(url))
    if idx == -1:
        return 'ambient'

    ctx = html[max(0, idx-400):idx+100].lower()
    scores = {}
    for cat, hints in CATEGORY_HINTS.items():
        scores[cat] = sum(1 for h in hints if h in ctx)

    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else 'ambient'


# ─── Replacement picker (per-page unique) ─────────────────────────────────────

def pick_replacement(pool: dict, category: str,
                     page_used_bases: set,   # bases already used IN this page
                     pool_usage: dict,       # global usage count per base
                     wide: bool) -> str | None:
    """
    Pick a pool URL not already used in this page.
    Prefers least-globally-used entries to spread images evenly.
    """
    candidates = []
    order = [category, 'ambient', 'lifestyle', 'hero', 'product', 'workspace', 'portrait']
    seen_cats = set()
    for cat in order:
        if cat in seen_cats or cat not in pool:
            continue
        seen_cats.add(cat)
        for entry in pool[cat]:
            base = entry['url'].split('?')[0]
            if base not in page_used_bases:
                use_count = pool_usage.get(base, 0)
                candidates.append((use_count, base, entry))

    if not candidates:
        return None

    # Sort by usage count (least used first), then shuffle within same count for variety
    candidates.sort(key=lambda x: x[0])
    # Group by count and shuffle within group
    min_count = candidates[0][0]
    top = [c for c in candidates if c[0] == min_count]
    random.shuffle(top)
    chosen = top[0]
    return format_pool_url(chosen[1], wide)


# ─── Core replace logic ───────────────────────────────────────────────────────

def diversify_page(slug: str, usage_map: dict, min_count: int,
                   pool: dict, pool_usage: dict, dry_run: bool) -> tuple[int, set]:
    """
    Replace overused images in all HTML files for a slug.
    Returns (n_replacements, set of new url bases used).
    """
    page_dir   = HOME_DIR / slug
    html_files = list(page_dir.glob("*.html"))
    if not html_files:
        print(f"  ⚠️  No HTML files in {slug}")
        return 0, set()

    total_replacements = 0
    new_bases_used = set()

    # Track which bases are already in this page (both original + new)
    all_content = "".join(f.read_text(errors='ignore') for f in html_files)
    page_existing_bases = {url_key(m.group(1)) for m in FULL_URL_RE.finditer(all_content)}

    # Per-page mapping: old_base → new_url (consistent within this page)
    page_mapping: dict[str, str] = {}

    for html_file in html_files:
        content = html_file.read_text(errors='ignore')
        original = content
        file_replacements = []

        for m in FULL_URL_RE.finditer(content):
            url  = m.group(1)
            key  = url_key(url)
            pages_using = set(usage_map.get(key, []))

            if len(pages_using) < min_count:
                continue  # not overused globally

            # Already mapped for this page?
            if key in page_mapping:
                new_base = url_key(page_mapping[key])
                new_url  = format_pool_url(new_base, is_wide(url))
                file_replacements.append((url, new_url))
                continue

            # Pick a unique replacement for this page
            cat = detect_category(content, url)
            page_used = page_existing_bases | new_bases_used
            new_url = pick_replacement(pool, cat, page_used, pool_usage, is_wide(url))

            if not new_url:
                print(f"    ⚠️  Pool exhausted for '{cat}' in {slug}/{html_file.name}")
                continue

            new_base = url_key(new_url)
            page_mapping[key] = new_url
            page_existing_bases.add(new_base)
            new_bases_used.add(new_base)
            file_replacements.append((url, new_url))

        if not file_replacements:
            continue

        for old_url, new_url in file_replacements:
            content = content.replace(old_url, new_url)
            total_replacements += 1
            action = "[DRY]" if dry_run else "  ✅"
            src = "pexels" if "pexels" in new_url else "unsplash"
            print(f"    {action} [{src:8s}] {html_file.name}: {old_url[-45:]!r}")
            print(f"               → {new_url[-55:]!r}")

        if not dry_run and content != original:
            html_file.write_text(content)

    return total_replacements, new_bases_used


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Diversify images across luxury landing pages')
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--slug',   type=str, help='Fix one page slug')
    group.add_argument('--all',    action='store_true', help='Fix all pages')
    group.add_argument('--report', action='store_true', help='Show pool usage report')

    parser.add_argument('--min',     type=int,  default=3, help='Min global page uses to replace (default: 3)')
    parser.add_argument('--dry-run', action='store_true',  help='Preview without writing files')
    parser.add_argument('--capture', action='store_true',  help='Re-capture + check-sections after fix')
    parser.add_argument('--reset-usage', action='store_true', help='Reset pool usage counters')
    args = parser.parse_args()

    pool = load_pool()
    if not pool and not args.report:
        sys.exit(1)

    pool_usage = {} if args.reset_usage else load_usage()

    if args.report:
        print(f"\n📊 Pool Usage Report")
        print(f"{'='*56}")
        sorted_usage = sorted(pool_usage.items(), key=lambda x: -x[1])
        for base, count in sorted_usage[:30]:
            src = "pexels" if "pexels" in base else "unsplash"
            print(f"  {count:3d} pages  [{src:8s}]  ...{base[-50:]}")
        total_pool = sum(len(v) for v in pool.values())
        print(f"\n  Pool size: {total_pool} images across {len(pool)} categories")
        print(f"  Tracked usages: {len(pool_usage)}")
        print(f"{'='*56}\n")
        return

    print(f"\n🔍 Scanning all pages for image usage...")
    usage_map = scan_all_pages()

    overused = {k: v for k, v in usage_map.items() if len(set(v)) >= args.min}
    print(f"   Found {len(overused)} images used in {args.min}+ pages\n")

    slugs = []
    if args.all:
        slugs = [p.name for p in sorted(HOME_DIR.iterdir())
                 if p.is_dir() and p.name not in ('.', '..', '<slug>')]
    else:
        slugs = [args.slug]

    total = 0
    for slug in slugs:
        page_dir = HOME_DIR / slug
        if not page_dir.exists():
            print(f"❌ Page not found: {slug}")
            continue
        print(f"{'[DRY RUN] ' if args.dry_run else ''}📄 {slug}")
        n, new_bases = diversify_page(slug, usage_map, args.min, pool, pool_usage, args.dry_run)
        if n == 0:
            print(f"   ✓ No overused images (all under {args.min} pages)")
        else:
            if not args.dry_run:
                for base in new_bases:
                    pool_usage[base] = pool_usage.get(base, 0) + 1
        total += n

    if not args.dry_run:
        save_usage(pool_usage)

    print(f"\n{'='*56}")
    print(f"  {'[DRY RUN] ' if args.dry_run else ''}Total replacements: {total}")
    if not args.dry_run and total > 0 and args.capture:
        print(f"\n  Re-capturing screenshots...")
        for slug in slugs:
            subprocess.run(['python3', 'scripts/capture-page.py', slug], capture_output=True)
            result = subprocess.run(['python3', 'scripts/check-sections.py', slug],
                                    capture_output=True, text=True)
            status = "✅" if "OK:" in result.stdout else "⚠️ "
            print(f"    {status}  {slug}")
    print(f"{'='*56}\n")


if __name__ == '__main__':
    main()
