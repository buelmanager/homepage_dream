#!/usr/bin/env python3
"""
무료 이미지 다운로드 스크립트
Pixabay, Unsplash, Pexels에서 업종별 이미지를 webp로 다운로드

사용법:
    python image_collector.py <업종> <개수>  # 특정 업종 + 개수
    python image_collector.py <개수>         # 랜덤 업종 + 개수
    python image_collector.py                # 도움말
    python image_collector.py --list         # 업종 리스트 확인
    python image_collector.py --status       # 현재 다운로드 현황
"""

import os
import sys
import json
import random
import argparse
import subprocess
from pathlib import Path
from urllib.parse import quote
import requests
from PIL import Image
from io import BytesIO

# ========== 설정 ==========
SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR
DOWNLOAD_JSON = DATA_DIR / "download.json"
IMAGES_DIR = SCRIPT_DIR / "images"

# .env 파일에서 API 키 로드
ENV_FILE = SCRIPT_DIR / ".env"
if ENV_FILE.exists():
    with open(ENV_FILE) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip()

# 무료 이미지 소스 URLs (API 키 없이 사용 가능한 엔드포인트)
PIXABAY_API = "https://pixabay.com/api/"
UNSPLASH_API = "https://api.unsplash.com/search/photos"
PEXELS_API = "https://api.pexels.com/v1/search"

# ========== 업종 리스트 ==========
INDUSTRIES = {
    # Food & Restaurant
    "restaurant": ["restaurant", "food", "korean food", "cafe", "dining"],
    "cafe": ["coffee shop", "cafe", "coffee", "dessert", "bakery"],
    "bakery": ["bakery", "bread", "pastry", "cake", "baking"],
    "bbq": ["bbq", "grill", "meat", "steak", "korean bbq"],
    "sushi": ["sushi", "seafood", "fish", "raw fish", "japanese food"],
    "chinese": ["chinese food", "chinese restaurant", "dim sum"],
    "japanese": ["japanese restaurant", "ramen", "udon", "tempura"],
    "fastfood": ["fast food", "burger", "pizza", "fried chicken"],
    # Shopping
    "mall": ["shopping mall", "department store", "mall"],
    "onlinestore": ["online shop", "e-commerce", "shopping"],
    "clothing": ["clothing store", "fashion", "apparel", "clothes"],
    "shoes": ["shoes store", "footwear", "sneakers"],
    "bag": ["bag", "accessories", "leather goods", "jewelry"],
    "cosmetics": ["cosmetics", "makeup", "beauty products", "skincare"],
    "flower": ["flower shop", "florist", "flowers", "bouquet"],
    "petshop": ["pet shop", "pet store", "dog", "cat", "pet supplies"],
    "stationery": ["stationery", "office supplies", "notebook", "pen"],
    "bookstore": ["bookstore", "books", "library", "reading"],
    # Education
    "academy": ["academy", "school", "education", "classroom", "study"],
    "studyroom": ["study room", "library", "reading room", "study cafe"],
    "kindergarten": ["kindergarten", "preschool", "kids", "children"],
    "elementary": ["elementary school", "primary school", "kids"],
    "highschool": ["high school", "middle school", "student"],
    "university": ["university", "college", "campus", "student"],
    "lifelong": ["lifelong education", "adult education", "training"],
    # Medical
    "hospital": ["hospital", "medical", "doctor", "clinic", "healthcare"],
    "pharmacy": ["pharmacy", "drugstore", "medicine"],
    "dentist": ["dentist", "dental", "teeth", "dental clinic"],
    "eyedoctor": ["eye clinic", "optometry", "ophthalmology", "glasses"],
    "dermatology": ["skin clinic", "dermatology", "skincare", "beauty"],
    "plasticsurgery": ["plastic surgery", "beauty clinic", "aesthetic"],
    "orientalmedicine": ["korean medicine", "oriental medicine", "acupuncture"],
    "healthcare": ["health", "wellness", "fitness", "healthcare"],
    # Real Estate & Interior
    "realestate": ["real estate", "property", "apartment", "building"],
    "realtor": ["real estate office", "property agent", "realtor"],
    "interior": ["interior design", "interior", "home decor", "furniture"],
    "architecture": ["architecture", "building", "construction", "architect"],
    "furniture": ["furniture", "furnishings", "home furniture", "sofa"],
    "bedding": ["bedding", "home textiles", "towels", "kitchenware"],
    "lighting": ["lighting", "lamp", "light fixture", "chandelier"],
    "paint": ["paint", "wall paint", "interior paint"],
    "finance": ["finance", "investment", "banking", "money"],
    # Beauty & Fashion
    "salon": ["hair salon", "haircut", "hairstyle", "beauty salon"],
    "nailsalon": ["nail salon", "nails", "manicure", "nail art"],
    "skincare": ["skincare", "beauty salon", "facial", "spa"],
    "massage": ["massage", "spa", "relaxation", "wellness"],
    "fashion": ["fashion", "clothing", "style", "designer"],
    "beauty": ["beauty", "makeup", "cosmetics", "beauty products"],
    # Sports
    "gym": ["gym", "fitness", "workout", "exercise", "gymnasium"],
    "pool": ["swimming pool", "swim", "pool", "aquatic"],
    "golf": ["golf", "golf course", "golf club"],
    "sports": ["sports", "athletics", "exercise", "training"],
    "yoga": ["yoga", "fitness", "wellness", "exercise"],
    "martialarts": ["martial arts", "taekwondo", "judo", "boxing"],
    "baseball": ["baseball", "soccer", "football", "sports"],
    "tennis": ["tennis", "badminton", "sports racket"],
    # Travel & Hotel
    "hotel": ["hotel", "accommodation", "resort", "luxury hotel"],
    "resort": ["resort", "vacation", "beach resort", "pool villa"],
    "pension": ["pension", "cottage", "guesthouse", "vacation rental"],
    "motel": ["motel", "accommodation", "budget hotel"],
    "guesthouse": ["guesthouse", "hostel", "backpacker", "budget travel"],
    "travelagency": ["travel agency", "travel", "tourism", "vacation"],
    "airline": ["airline", "airplane", "flight", "aviation"],
    # Automotive
    "carcenter": ["car repair", "auto shop", "car service", "mechanic"],
    "carwash": ["car wash", "auto detailing", "vehicle cleaning"],
    "gasstation": ["gas station", "fuel", "petrol station"],
    "insurance": ["insurance", "car insurance", "policy"],
    "carrental": ["car rental", "rent a car", "vehicle rental"],
    "taxi": ["taxi", "driver", "car service", "transportation"],
    "logistics": ["logistics", "delivery", "shipping", "warehouse"],
    # Finance
    "bank": ["bank", "banking", "finance", "money"],
    "insurancecompany": ["insurance", "insurance company", "policy"],
    "investment": ["investment", "stock", "trading", "finance"],
    "accounting": ["accounting", "accountant", "tax", "finance"],
    # Legal
    "lawfirm": ["law office", "lawyer", "attorney", "legal"],
    "laborlaw": ["labor attorney", "labor law", "workplace"],
    "taxconsultant": ["tax accounting", "tax consultant", "tax"],
    "realestateagent": ["real estate agent", "realtor", "property"],
    # Event & Wedding
    "weddinghall": ["wedding hall", "wedding", "marriage", "bride groom"],
    "weddingphoto": ["wedding photographer", "wedding photography", "couple"],
    "event": ["event", "party", "celebration", "festival"],
    "planner": ["event planner", "party planning", "celebration"],
    "entertainment": ["entertainment agency", "talent agency"],
    "photostudio": ["photo studio", "photography", "portrait"],
    # Entertainment
    "karaoke": ["karaoke", "singing room", "entertainment"],
    "pcbang": ["pc cafe", "gaming cafe", "internet cafe"],
    "arcade": ["arcade", "game center", "entertainment"],
    "bowling": ["bowling", "bowling alley", "sports"],
    "billiards": ["billiards", "pool", "snooker", "game"],
    "nightclub": ["nightclub", "club", "party", "nightlife"],
    "bar": ["bar", "pub", "drinks", "nightlife"],
    "dessertcafe": ["cafe", "dessert", "coffee", "bakery"],
    # IT & Tech
    "software": ["technology", "software", "computer", "code", "programming"],
    "startup": ["startup", "business", "office", "technology", "innovation"],
    "electronics": ["electronics", "gadget", "tech", "smartphone", "computer"],
    "telecom": ["telecommunications", "mobile", "phone", "5g"],
    "gaming": ["gaming", "video game", "esports", "game"],
    # Government
    "government": ["government", "public office", "city hall", "institution"],
    "police": ["police", "law enforcement", "security"],
    "fireStation": ["fire station", "firefighter", "emergency"],
    "postoffice": ["post office", "mail", "postal service"],
    "communitycenter": ["community center", "public service", "government"],
    "library": ["library", "books", "reading", "study"],
    "museum": ["museum", "art museum", "culture", "exhibition"],
    "artgallery": ["art gallery", "art museum", "painting", "art"],
    "theater": ["theater", "theatre", "performance", "show"],
    "stadium": ["stadium", "arena", "sports venue", "concert"],
    # Religion
    "church": ["church", "christian", "worship", "religion"],
    "temple": ["temple", "buddhist", "shrine", "religion"],
    "cathedral": ["catholic church", "cathedral", "church", "religion"],
    "religious": ["religious", "worship", "faith", "spiritual"],
    # Nature
    "park": ["park", "public park", "nature", "outdoor"],
    "trail": ["trail", "hiking", "walking path", "nature"],
    "garden": ["garden", "botanical", "park", "flowers"],
    "botanical": ["botanical garden", "plants", "nature", "greenhouse"],
    # Manufacturing
    "factory": ["factory", "manufacturing", "industrial", "production"],
    "manufacturing": ["manufacturing", "factory", "industrial", "production"],
    "construction": ["construction", "building site", "civil engineering"],
    # Agriculture
    "farm": ["farm", "agriculture", "farming", "crops"],
    "fishmarket": ["fish market", "seafood", "market", "fish"],
    "fruitshop": ["fruit shop", "fruits", "fresh fruit", "market"],
    # Business
    "office": ["office", "business", "corporate", "workspace"],
    "meetingroom": ["meeting room", "conference", "business meeting"],
    "coworking": ["coworking", "shared office", "workspace", "startup"],
    "branding": ["logo", "branding", "brand identity", "design"],
    # Design
    "interiordesign": ["interior design", "home design", "decor", "architecture"],
    "architecturedesign": ["architecture design", "building", "modern architecture"],
    "graphicdesign": ["graphic design", "design", "poster", "banner"],
    "webdesign": ["web design", "website", "ui design", "ux design"],
    # Marketing
    "socialmedia": ["social media", "instagram", "marketing", "digital"],
    "marketing": ["marketing", "advertising", "promotion", "campaign"],
    "advertising": ["advertising agency", "marketing", "creative", "ad"],
    # Services
    "repair": ["repair", "maintenance", "fix", "service"],
    "laundry": ["laundry", "dry cleaning", "washing", "cleaning"],
    "cleaning": ["cleaning service", "house cleaning", "commercial cleaning"],
    "staffing": ["staffing", "outsourcing", "recruitment", "hr"],
    "interiorconstruction": ["interior construction", "renovation", "interior"],
    # Hobby
    "gamingroom": ["gaming", "video games", "esports", "gamer"],
    "boardgame": ["board games", "tabletop", "game", "entertainment"],
    "fishing": ["fishing", "anglers", "outdoor", "water sports"],
    "hiking": ["hiking", "mountain", "nature", "outdoor"],
    "camping": ["camping", "outdoor", "tent", "nature"],
    # Pets
    "pet": ["pet", "dog", "cat", "animal", "companion animal"],
    "vet": ["veterinary", "pet hospital", "animal clinic", "vet"],
    "petcafe": ["pet cafe", "cat cafe", "animal cafe"],
    # Seasons
    "spring": ["spring", "cherry blossom", "spring flowers", "nature"],
    "summer": ["summer", "beach", "sun", "vacation"],
    "autumn": ["autumn", "fall", "fall leaves", "nature"],
    "winter": ["winter", "snow", "winter landscape", "cold"],
    # Holidays
    "christmas": ["christmas", "christmas tree", "holiday", "festive"],
    "newyear": ["korean new year", "lunar new year", "traditional"],
    "chuseok": ["chuseok", "korean thanksgiving", "traditional holiday"],
    "valentine": ["valentine's day", "love", "romance", "couple"],
    "halloween": ["halloween", "spooky", "pumpkin", "costume"],
    # City
    "city": ["city", "urban", "metropolitan", "downtown"],
    "alley": ["alley", "street", "urban", "local"],
    "market": ["market", "traditional market", "street market"],
    "street": ["street", "road", "urban", "city street"],
    # Misc
    "random": ["random", "various", "diverse", "mixed"],
    "background": ["background", "wallpaper", "abstract", "texture"],
    "icon": ["icon", "symbol", "graphic", "vector"],
    "illustration": ["illustration", "art", "graphic", "vector art"],
}

# ========== 함수 ==========


def load_download_history():
    """download.json에서 다운로드 기록 로드"""
    if DOWNLOAD_JSON.exists():
        with open(DOWNLOAD_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"industries": {}, "total": 0}


def save_download_history(data):
    """download.json에 다운로드 기록 저장"""
    with open(DOWNLOAD_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def get_image_from_pixabay(query, count=10):
    """Pixabay에서 이미지 다운로드"""
    images = []
    try:
        # Pixabay는 API 키 없이 일부 검색 가능 (rate limited)
        url = f"https://pixabay.com/api/?key={os.environ.get('PIXABAY_API_KEY', '')}&q={quote(query)}&image_type=photo&per_page={count}&safesearch=true"
        if not os.environ.get("PIXABAY_API_KEY"):
            # API 키 없으면 직접 웹 스크래핑 시도 (간단한 방식)
            url = f"https://pixabay.com/images/search/{quote(query)}/"

        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            images = data.get("hits", [])[:count]
    except Exception as e:
        print(f"Pixabay 오류: {e}")
    return images


def get_image_from_unsplash(query, count=10):
    """Unsplash에서 이미지 검색 (API 키 필요)"""
    images = []
    try:
        headers = {
            "Authorization": f"Client-ID {os.environ.get('UNSPLASH_ACCESS_KEY', '')}"
        }
        params = {"query": query, "per_page": count, "orientation": "landscape"}
        response = requests.get(
            UNSPLASH_API, headers=headers, params=params, timeout=10
        )
        if response.status_code == 200:
            data = response.json()
            images = data.get("results", [])[:count]
    except Exception as e:
        print(f"Unsplash 오류: {e}")
    return images


def get_image_from_pexels(query, count=10):
    """Pexels에서 이미지 검색 (API 키 필요)"""
    images = []
    try:
        headers = {"Authorization": os.environ.get("PEXELS_API_KEY", "")}
        params = {"query": query, "per_page": count, "orientation": "landscape"}
        response = requests.get(PEXELS_API, headers=headers, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            images = data.get("photos", [])[:count]
    except Exception as e:
        print(f"Pexels 오류: {e}")
    return images


def get_images_from_free_sources(query, count=10):
    image_urls = []

    pixabay_images = get_image_from_pixabay(query, count)
    for img in pixabay_images:
        image_urls.append(
            {
                "url": img.get("webformatURL"),
                "source": "pixabay",
                "photographer": img.get("user", "Unknown"),
                "width": img.get("imageWidth"),
                "height": img.get("imageHeight"),
            }
        )

    unsplash_images = get_image_from_unsplash(query, count)
    for img in unsplash_images:
        image_urls.append(
            {
                "url": img.get("urls", {}).get("regular"),
                "source": "unsplash",
                "photographer": img.get("user", {}).get("name", "Unknown"),
                "width": img.get("width"),
                "height": img.get("height"),
            }
        )

    pexels_images = get_image_from_pexels(query, count)
    for img in pexels_images:
        image_urls.append(
            {
                "url": img.get("src", {}).get("large"),
                "source": "pexels",
                "photographer": img.get("photographer", "Unknown"),
                "width": img.get("width"),
                "height": img.get("height"),
            }
        )

    unsplash_images = get_image_from_unsplash(query, count)
    for img in unsplash_images:
        image_urls.append(
            {
                "url": img.get("urls", {}).get("raw")
                or img.get("urls", {}).get("full")
                or img.get("urls", {}).get("regular"),
                "source": "unsplash",
                "photographer": img.get("user", {}).get("name", "Unknown"),
                "width": img.get("width"),
                "height": img.get("height"),
            }
        )

    pexels_images = get_image_from_pexels(query, count)
    for img in pexels_images:
        image_urls.append(
            {
                "url": img.get("src", {}).get("original")
                or img.get("src", {}).get("large2x")
                or img.get("src", {}).get("large"),
                "source": "pexels",
                "photographer": img.get("photographer", "Unknown"),
                "width": img.get("width"),
                "height": img.get("height"),
            }
        )

    if len(image_urls) < count:
        try:
            for i in range(count - len(image_urls)):
                width = random.choice([800, 1024, 1280])
                height = random.choice([600, 768, 720])
                url = f"https://loremflickr.com/{width}/{height}/{quote(query)}?random={i}"
                image_urls.append(
                    {
                        "url": url,
                        "source": "loremflickr",
                        "width": width,
                        "height": height,
                        "photographer": "flickr",
                    }
                )
        except Exception as e:
            print(f"Lorem Flickr 오류: {e}")

    return image_urls[:count]


def download_and_convert_to_webp(image_info, industry_folder, index):
    """이미지를 다운로드하여 webp로 변환 저장"""
    try:
        url = image_info.get("url")
        if not url:
            return None

        # 이미지 다운로드
        response = requests.get(url, timeout=30)
        if response.status_code != 200:
            return None

        # PIL로 이미지 열기
        img = Image.open(BytesIO(response.content))

        # RGBA가 아닌 경우 RGB로 변환
        if img.mode in ("RGBA", "LA", "P"):
            background = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "P":
                img = img.convert("RGBA")
            background.paste(
                img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None
            )
            img = background
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # webp로 저장
        filename = f"{industry_folder.name}_{index:03d}.webp"
        filepath = industry_folder / filename
        img.save(filepath, "WEBP", quality=75, optimize=True)

        return {
            "filename": filename,
            "source": image_info.get("source", "unknown"),
            "original_size": f"{image_info.get('width', 0)}x{image_info.get('height', 0)}",
            "photographer": image_info.get("photographer", "Unknown"),
        }
    except Exception as e:
        print(f"이미지 다운로드/변환 오류: {e}")
        return None


def download_images(industry, count):
    """업종별 이미지 다운로드 실행"""
    industry_folder = IMAGES_DIR / industry
    industry_folder.mkdir(parents=True, exist_ok=True)

    # 검색 키워드 선택
    keywords = INDUSTRIES.get(industry, [industry])
    search_queries = keywords if isinstance(keywords, list) else [keywords]

    print(f"\n📥 [{industry}] 이미지 다운로드 시작 (목표: {count}개)")
    print(f"   검색 키워드: {search_queries}")

    downloaded_count = 0
    saved_info = []

    # 각 키워드에서 이미지 수집
    for query in search_queries:
        if downloaded_count >= count:
            break

        print(f"\n   🔍 '{query}' 검색 중...")
        images = get_images_from_free_sources(query, count * 2)

        for i, img_info in enumerate(images):
            if downloaded_count >= count:
                break

            result = download_and_convert_to_webp(
                img_info, industry_folder, downloaded_count + 1
            )
            if result:
                downloaded_count += 1
                saved_info.append(result)
                print(
                    f"   ✅ [{downloaded_count}/{count}] 저장 완료: {result['filename']} (출처: {result['source']})"
                )
            else:
                print(f"   ❌ [{i + 1}] 실패")

    print(f"\n📊 [{industry}] 다운로드 완료: {downloaded_count}/{count}개")

    return downloaded_count, saved_info


def list_industries():
    print("\n📋 Available Industries:")
    print("=" * 50)

    keys = list(INDUSTRIES.keys())
    for i, key in enumerate(keys, 1):
        print(f"  {key}")

    print("\n" + "=" * 50)
    print(f"Total: {len(INDUSTRIES)} industries")


def show_status():
    """현재 다운로드 현황 출력"""
    data = load_download_history()

    print("\n📊 현재 다운로드 현황")
    print("=" * 50)
    print(f"총 다운로드 이미지 수: {data.get('total', 0)}개")
    print("\n업종별 현황:")

    industries = data.get("industries", {})
    if not industries:
        print("   (아직 다운로드된 이미지가 없습니다)")
    else:
        # 개수순 정렬
        sorted_industries = sorted(industries.items(), key=lambda x: x[1], reverse=True)
        for ind, count in sorted_industries:
            print(f"  • {ind}: {count}개")

    print("=" * 50)


def find_industry_count(industry_name):
    """업종 이름의 이미지 개수 찾기"""
    data = load_download_history()
    industries = data.get("industries", {})
    return industries.get(industry_name, 0)


def find_least_downloaded_industry():
    """가장 적은 이미지를 가진 업종 찾기"""
    data = load_download_history()
    industries = data.get("industries", {})

    # download.json에 있는 업종 중 가장 적은 것
    if industries:
        return min(industries.items(), key=lambda x: x[1])[0]

    # 아무것도 없으면 랜덤
    return random.choice(list(INDUSTRIES.keys()))


def find_least_count_industry():
    """가장 적은 이미지 개수를 가진 업종 이름 반환"""
    data = load_download_history()
    industries = data.get("industries", {})

    if not industries:
        return random.choice(list(INDUSTRIES.keys()))

    return min(industries.items(), key=lambda x: x[1])[0]


def main():
    parser = argparse.ArgumentParser(
        description="무료 이미지 다운로드 스크립트 (Pixabay, Unsplash, Pexels)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
사용 예시:
  python image_collector.py 음식점 10        # 음식점 업종으로 10개 다운로드
  python image_collector.py 10              # 랜덤 업종으로 10개 다운로드
  python image_collector.py --list          # 업종 리스트 확인
  python image_collector.py --status        # 현재 현황 확인
        """,
    )
    parser.add_argument("args", nargs="*", help="업종명 또는 개수")
    parser.add_argument("--list", "-l", action="store_true", help="업종 리스트 출력")
    parser.add_argument(
        "--status", "-s", action="store_true", help="다운로드 현황 출력"
    )

    args = parser.parse_args()

    # 이미지 저장 디렉토리 생성
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    # 초기 download.json이 없으면 생성
    if not DOWNLOAD_JSON.exists():
        save_download_history({"industries": {}, "total": 0})

    # 옵션 처리
    if args.list:
        list_industries()
        return

    if args.status:
        show_status()
        return

    # 인자 파싱
    if not args.args:
        # 인자 없으면 도움말
        parser.print_help()
        return

    # 명령어 파싱
    # 형식: python image_collector.py <업종> <개수>
    # 또는: python image_collector.py <개수>

    arg1 = args.args[0]
    arg2 = args.args[1] if len(args.args) > 1 else None

    # 첫 번째 인자가 숫자면 (개수) - 랜덤 업종
    if arg1.isdigit():
        count = int(arg1)
        industry = find_least_count_industry()
        print(f"🎲 랜덤 업종 선택: {industry} (현재 가장 적음)")
    else:
        # 첫 번째 인자가 업종명
        industry = arg1
        if arg2 and arg2.isdigit():
            count = int(arg2)
        else:
            count = 10  # 기본값

        # 업종명 유효성 검사
        if industry not in INDUSTRIES:
            # 유사한 업종 찾기
            similar = [k for k in INDUSTRIES.keys() if industry in k or k in industry]
            if similar:
                print(f"⚠️ '{industry}'를 찾을 수 없습니다. 유사한 업종:")
                for s in similar[:5]:
                    print(f"  • {s}")
                return
            else:
                print(f"⚠️ '{industry}'를 찾을 수 없습니다. --list로 업종을 확인하세요.")
                return

    # 다운로드 실행
    downloaded, info = download_images(industry, count)

    # 기록 저장
    data = load_download_history()
    if industry not in data["industries"]:
        data["industries"][industry] = 0
    data["industries"][industry] += downloaded
    data["total"] += downloaded
    save_download_history(data)

    print(f"\n✅ 완료! 총 {downloaded}개 이미지 저장됨")
    show_status()


if __name__ == "__main__":
    main()
