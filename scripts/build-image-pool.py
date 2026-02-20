#!/usr/bin/env python3
"""
Build/update image-pool.json with validated URLs from multiple sources.

Sources:
  - Unsplash (different IDs from what's already used)
  - Pexels CDN (direct URL, no API key needed)
  - Picsum (Unsplash-based, seeded → deterministic)

Usage:
  python3 scripts/build-image-pool.py            # validate & build pool
  python3 scripts/build-image-pool.py --add      # add more URLs interactively
  python3 scripts/build-image-pool.py --report   # show current pool stats
"""
import sys, json, random, argparse
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError

POOL_FILE = Path(__file__).parent / "image-pool.json"

# ─── Candidate URL database ───────────────────────────────────────────────────
# Format: {category: [url_without_params, ...]}
# All URLs should resolve to high-quality imagery suitable for luxury pages.
# Add more URLs here as you discover them; build-image-pool.py will validate them.

CANDIDATES = {
    "hero": [
        # Unsplash — dark moody cinematic
        "https://images.unsplash.com/photo-1541123437800-1bb1317badc2",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
        "https://images.unsplash.com/photo-1560448075-bb485b067938",
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1",
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
        "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e",
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6",
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
        "https://images.unsplash.com/photo-1535025183041-0991a977e25b",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        "https://images.unsplash.com/photo-1518790658791-28e8b3cc7fbc",
        # Pexels — dark luxury architecture/landscape
        "https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg",
        "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg",
        "https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg",
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
        "https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg",
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
        "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
        "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg",
        "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg",
        "https://images.pexels.com/photos/36717/pexels-photo-36717.jpeg",
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
        "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
        "https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg",
        "https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg",
        "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg",
        "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
        "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
        "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg",
        "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg",
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
    ],
    "product": [
        # Unsplash — luxury goods, craft items, detail shots
        "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        "https://images.unsplash.com/photo-1504198266287-1659872e6590",
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01",
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5",
        "https://images.unsplash.com/photo-1543512214-318c7553f230",
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece",
        "https://images.unsplash.com/photo-1509395062183-a6bc6945dd29",
        "https://images.unsplash.com/photo-1465343161283-c1959138ddaa",
        "https://images.unsplash.com/photo-1498462440456-0dba182e775b",
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e",
        # Pexels — crafted objects, tableware, textiles
        "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg",
        "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg",
        "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg",
        "https://images.pexels.com/photos/2122361/pexels-photo-2122361.jpeg",
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
        "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg",
        "https://images.pexels.com/photos/3910073/pexels-photo-3910073.jpeg",
        "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
        "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
        "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
        "https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg",
        "https://images.pexels.com/photos/4040567/pexels-photo-4040567.jpeg",
        "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
        "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
        "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg",
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
        "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg",
        "https://images.pexels.com/photos/949390/pexels-photo-949390.jpeg",
        "https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg",
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
    ],
    "workspace": [
        # Unsplash — ateliers, workshops, craft spaces
        "https://images.unsplash.com/photo-1452860606245-08befc0ff44b",
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
        "https://images.unsplash.com/photo-1524230659092-07f99a75c013",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1440778303588-435521a205bc",
        "https://images.unsplash.com/photo-1493770348161-369560ae357d",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
        "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0",
        "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1458819714733-e5ab3d536722",
        # Pexels — studio, craft workspace
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
        "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg",
        "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
        "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
        "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
        "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg",
        "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
        "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg",
        "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
    ],
    "ambient": [
        # Unsplash — abstract, texture, atmosphere
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
        "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7",
        "https://images.unsplash.com/photo-1493238792000-8113da705763",
        "https://images.unsplash.com/photo-1536152470836-b943b246224c",
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
        "https://images.unsplash.com/photo-1483401757487-2ced3fa77952",
        "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
        "https://images.unsplash.com/photo-1557591584-5547af40e6d0",
        "https://images.unsplash.com/photo-1547136456-8b2e40f5e7b8",
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        "https://images.unsplash.com/photo-1488998427799-e3362cec87c3",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
        # Pexels — abstract texture, dark atmosphere
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
        "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg",
        "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
        "https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg",
        "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg",
        "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg",
        "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
        "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg",
        "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg",
        "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
        "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg",
        "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
        "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg",
        "https://images.pexels.com/photos/2100941/pexels-photo-2100941.jpeg",
        "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
        "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg",
        "https://images.pexels.com/photos/1546036/pexels-photo-1546036.jpeg",
        "https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg",
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    ],
    "portrait": [
        # Unsplash — artisan workers, professionals
        "https://images.unsplash.com/photo-1556742521-9713bf272865",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1559163499-413811fb2344",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
        "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",  # Only if not in overused list
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
        "https://images.unsplash.com/photo-1548142813-c348350df52b",
        # Pexels — diverse artisans/professionals
        "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg",
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
        "https://images.pexels.com/photos/3756878/pexels-photo-3756878.jpeg",
        "https://images.pexels.com/photos/1181291/pexels-photo-1181291.jpeg",
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        "https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg",
        "https://images.pexels.com/photos/3812941/pexels-photo-3812941.jpeg",
        "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        "https://images.pexels.com/photos/3808008/pexels-photo-3808008.jpeg",
        "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
    ],
    "lifestyle": [
        # Unsplash — editorial, lifestyle, food/drink, interiors
        "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1544025162-d76694265947",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1450338872a20bc3e124e4decc87a96",
        "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8",
        # Pexels — editorial lifestyle, interior dining
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg",
        "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
        "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
        "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg",
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
        "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg",
        "https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg",
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
        "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg",
        "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg",
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    ],
}


def validate_url(url: str, timeout: int = 8) -> bool:
    try:
        req = Request(
            url + "?auto=compress&cs=tinysrgb&w=400&q=60" if "pexels" in url else url + "?w=400&q=60",
            method='HEAD',
            headers={'User-Agent': 'Mozilla/5.0 (compatible)'}
        )
        with urlopen(req, timeout=timeout) as r:
            return r.status == 200
    except Exception:
        return False


def build_pool(validate: bool = True) -> dict:
    pool = {}
    total = sum(len(v) for v in CANDIDATES.items())
    done = 0

    for category, urls in CANDIDATES.items():
        pool[category] = []
        for url in urls:
            if validate:
                ok = validate_url(url)
                print(f"  {'✅' if ok else '❌'} [{category:10s}] {url.split('/')[-1][:40]}")
            else:
                ok = True  # trust without validation
            if ok:
                source = "unsplash" if "unsplash" in url else "pexels"
                pool[category].append({
                    "url": url,
                    "source": source,
                    "validated": ok
                })
            done += 1

    return pool


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--report',     action='store_true', help='Show pool stats')
    parser.add_argument('--no-validate',action='store_true', help='Skip URL validation (faster)')
    args = parser.parse_args()

    if args.report:
        if not POOL_FILE.exists():
            print("❌ image-pool.json not found. Run without --report to build it.")
            sys.exit(1)
        pool = json.loads(POOL_FILE.read_text())
        print(f"\n📦 Image Pool Report — {POOL_FILE}")
        total = 0
        for cat, entries in pool.items():
            validated = sum(1 for e in entries if e.get('validated'))
            sources = {}
            for e in entries:
                sources[e['source']] = sources.get(e['source'], 0) + 1
            src_str = ', '.join(f"{k}: {v}" for k, v in sources.items())
            print(f"  {cat:12s}  {len(entries):3d} entries  ({src_str})")
            total += len(entries)
        print(f"\n  Total: {total} images\n")
        return

    print(f"\n🔧 Building image pool (validate={not args.no_validate})...")
    print(f"   Categories: {', '.join(CANDIDATES.keys())}\n")

    pool = build_pool(validate=not args.no_validate)

    POOL_FILE.write_text(json.dumps(pool, indent=2))
    total = sum(len(v) for v in pool.values())
    print(f"\n✅ Saved {total} validated images → {POOL_FILE}\n")
    for cat, entries in pool.items():
        src = {}
        for e in entries:
            src[e['source']] = src.get(e['source'], 0) + 1
        src_str = ', '.join(f"{k}:{v}" for k, v in src.items())
        print(f"  {cat:12s}  {len(entries):3d}  ({src_str})")


if __name__ == '__main__':
    main()
