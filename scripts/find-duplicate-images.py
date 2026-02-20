#!/usr/bin/env python3
"""
Find duplicate/overused image URLs across all luxury landing pages.

Usage:
  python3 scripts/find-duplicate-images.py             # report all duplicates (>=3 uses)
  python3 scripts/find-duplicate-images.py --min 5     # show images used 5+ times
  python3 scripts/find-duplicate-images.py --slug cigar-atelier  # show duplicates in one page
  python3 scripts/find-duplicate-images.py --json      # output JSON
"""
import sys, re, json, argparse
from collections import defaultdict
from pathlib import Path

HOME_DIR = Path(__file__).parent.parent / "multi_clone_hompage" / "home"

# Matches Unsplash + Pexels CDN URLs (strips query params for dedup key)
UNSPLASH_RE = re.compile(r'https://images\.unsplash\.com/photo-([a-zA-Z0-9_-]+)')
PEXELS_RE   = re.compile(r'https://images\.pexels\.com/photos/(\d+)/')
FULL_URL_RE = re.compile(r'https://images\.(?:unsplash|pexels)\.com/[^\s\'"<>\)]+')


def extract_urls(html: str) -> list[str]:
    """Return list of full CDN image URLs found in HTML."""
    return FULL_URL_RE.findall(html)


def url_key(url: str) -> str:
    """Canonical key (strips query params)."""
    return url.split('?')[0]


def scan_pages(target_slug: str = None) -> dict:
    """
    Returns:
      usage_map: {url_key -> [slug, slug, ...]}  (all occurrences, slug may repeat if used multiple times in one page)
      page_map:  {slug -> [url_key, ...]}         (unique urls per page)
    """
    usage_map = defaultdict(list)
    page_map  = defaultdict(list)

    for page_dir in sorted(HOME_DIR.iterdir()):
        if not page_dir.is_dir():
            continue
        slug = page_dir.name
        if slug in ('.', '..', '<slug>'):
            continue
        if target_slug and slug != target_slug:
            continue

        for html_file in page_dir.glob("*.html"):
            content = html_file.read_text(errors='ignore')
            urls = extract_urls(content)
            seen_in_file = set()
            for url in urls:
                key = url_key(url)
                usage_map[key].append(slug)
                if key not in seen_in_file:
                    page_map[slug].append(key)
                    seen_in_file.add(key)

    return usage_map, page_map


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--min', type=int, default=3, help='Min uses to flag as duplicate (default: 3)')
    parser.add_argument('--slug', type=str, default=None, help='Only show duplicates used in this page')
    parser.add_argument('--json', action='store_true', help='Output JSON')
    args = parser.parse_args()

    usage_map, page_map = scan_pages()

    # Filter by min uses
    duplicates = {k: v for k, v in usage_map.items() if len(set(v)) >= args.min}
    duplicates = dict(sorted(duplicates.items(), key=lambda x: -len(set(x[1]))))

    if args.slug:
        # Show which duplicate images are used in the target page
        page_urls = set(page_map.get(args.slug, []))
        duplicates = {k: v for k, v in duplicates.items() if k in page_urls}

    if args.json:
        out = [
            {
                "url": k,
                "pages": sorted(set(v)),
                "page_count": len(set(v)),
                "total_uses": len(v),
                "source": "unsplash" if "unsplash" in k else "pexels"
            }
            for k, v in duplicates.items()
        ]
        print(json.dumps(out, indent=2))
        return

    # Human-readable report
    print(f"\n{'='*64}")
    print(f"  IMAGE DUPLICATION REPORT  (min {args.min} pages)")
    print(f"{'='*64}")

    total_urls = len(usage_map)
    dup_count  = len(duplicates)
    print(f"  Total unique image URLs:  {total_urls}")
    print(f"  Images used {args.min}+ pages:    {dup_count}")
    print(f"{'='*64}\n")

    for url, slugs in duplicates.items():
        unique_pages = sorted(set(slugs))
        source = "unsplash" if "unsplash" in url else "pexels"
        print(f"  [{len(unique_pages):2d} pages] [{source:8s}] {url}")
        if len(unique_pages) <= 6:
            for s in unique_pages:
                print(f"            → {s}")
        else:
            for s in unique_pages[:4]:
                print(f"            → {s}")
            print(f"            … and {len(unique_pages)-4} more")
        print()

    print(f"{'='*64}")
    print(f"  Run: python3 scripts/diversify-images.py --help")
    print(f"{'='*64}\n")


if __name__ == '__main__':
    main()
