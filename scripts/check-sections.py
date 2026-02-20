#!/usr/bin/env python3
# Usage: python3 check-sections.py <slug>
# 스크린샷에서 어두운 빈 섹션(세로 120px 이상 단색 블록) 감지
import sys
from PIL import Image
import numpy as np

slug = sys.argv[1]
path = f"/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home/{slug}/images/fullpage.png"

img = Image.open(path).convert('RGB')
arr = np.array(img)
width = arr.shape[1]

DARK_THRESHOLD = 15   # 픽셀 밝기 (0-255)
BLANK_RUN_MIN  = 120  # 연속 빈 라인 최소 px

dark_lines = (arr.mean(axis=(1, 2)) < DARK_THRESHOLD)
run, runs = 0, []
for i, d in enumerate(dark_lines):
    if d: run += 1
    else:
        if run >= BLANK_RUN_MIN: runs.append((i - run, i, run))
        run = 0

if runs:
    print(f"WARNING: {len(runs)} potentially blank section(s) detected:")
    for start, end, h in runs:
        print(f"  rows {start}–{end} ({h}px dark)")
    sys.exit(1)
else:
    print("OK: No blank sections detected.")
    sys.exit(0)
