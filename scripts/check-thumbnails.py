#!/usr/bin/env python3
"""
thumbnail 품질 일괄 검사 스크립트
Usage:
  python3 scripts/check-thumbnails.py               # 모든 템플릿 검사
  python3 scripts/check-thumbnails.py 20260227       # 특정 날짜 prefix만
  python3 scripts/check-thumbnails.py --list-bad     # 불량 목록만 출력 (재캡처용)
"""
import sys, os, struct, zlib

BASE = "/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"

# 인수 파싱
prefix_filter = None
list_bad_only = False
for arg in sys.argv[1:]:
    if arg == '--list-bad':
        list_bad_only = True
    else:
        prefix_filter = arg

def get_webp_size(path):
    """WebP 파일 크기(bytes) 반환"""
    try:
        return os.path.getsize(path)
    except:
        return 0

def analyze_webp_brightness(path):
    """
    WebP 파일의 대략적인 밝기 분석.
    PIL 없이: 파일 헤더 이후 데이터의 바이트 평균으로 추정.
    실제로는 compressed data이므로 완벽하지 않지만,
    완전히 어두운(단색) 이미지는 압축률이 매우 높아 파일이 작음.
    """
    size = get_webp_size(path)
    return size

def check_template(slug):
    """
    단일 템플릿 검사.
    반환: (status, reason, thumb_size_kb)
    status: 'OK' | 'WARN' | 'BAD' | 'MISSING'
    """
    slug_dir = os.path.join(BASE, slug)
    thumb_path = os.path.join(slug_dir, "images", "thumbnail.webp")
    index_path = os.path.join(slug_dir, "index.html")

    if not os.path.exists(index_path):
        return ('BAD', 'index.html 없음', 0)

    if not os.path.exists(thumb_path):
        return ('MISSING', 'thumbnail.webp 없음', 0)

    size_bytes = get_webp_size(thumb_path)
    size_kb = size_bytes / 1024

    if size_kb < 4:
        return ('BAD', f'파일 크기 너무 작음 ({size_kb:.1f}KB) — 거의 확실히 blank', size_kb)
    elif size_kb < 15:
        return ('WARN', f'파일 크기 작음 ({size_kb:.1f}KB) — 재캡처 권장', size_kb)
    elif size_kb < 20:
        return ('WARN', f'파일 크기 의심 ({size_kb:.1f}KB)', size_kb)
    else:
        return ('OK', f'{size_kb:.1f}KB', size_kb)

def main():
    slugs = sorted([
        d for d in os.listdir(BASE)
        if os.path.isdir(os.path.join(BASE, d))
        and not d.startswith('.')
    ])

    if prefix_filter:
        slugs = [s for s in slugs if s.startswith(prefix_filter)]

    results = {'OK': [], 'WARN': [], 'BAD': [], 'MISSING': []}

    if not list_bad_only:
        print(f"검사 대상: {len(slugs)}개 템플릿\n")
        print(f"{'STATUS':<8} {'SIZE':>8}  SLUG")
        print("─" * 60)

    for slug in slugs:
        status, reason, size_kb = check_template(slug)
        results[status].append((slug, reason, size_kb))

        if list_bad_only:
            if status in ('BAD', 'MISSING', 'WARN'):
                print(slug)
        else:
            icon = {'OK': '✅', 'WARN': '⚠️ ', 'BAD': '❌', 'MISSING': '🚫'}[status]
            if status != 'OK':
                print(f"{icon} {status:<6} {size_kb:>7.1f}KB  {slug}  ({reason})")
            # OK는 조용히 (너무 많으면 노이즈)

    if not list_bad_only:
        print("\n" + "─" * 60)
        print(f"✅ OK:      {len(results['OK']):3}개")
        print(f"⚠️  WARN:    {len(results['WARN']):3}개  ← 재캡처 권장")
        print(f"❌ BAD:     {len(results['BAD']):3}개  ← 재캡처 필요")
        print(f"🚫 MISSING: {len(results['MISSING']):3}개  ← 재캡처 필요")

        need_recapture = results['WARN'] + results['BAD'] + results['MISSING']
        if need_recapture:
            print(f"\n재캡처 필요 목록 ({len(need_recapture)}개):")
            for slug, reason, _ in need_recapture:
                print(f"  {slug}")

if __name__ == '__main__':
    main()
