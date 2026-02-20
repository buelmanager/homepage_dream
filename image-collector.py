import requests
import os
from urllib.parse import urljoin, urlparse
from pathlib import Path
from bs4 import BeautifulSoup
import time
import random
import json


class ImageCollector:
    def __init__(self):
        self.base_dir = Path("images")
        self.base_dir.mkdir(exist_ok=True)
        self.keywords = [
            "homepage design",
            "website homepage",
            "landing page",
            "web design",
            "ui design",
            "website template",
            "landing page design",
            "web interface",
            "homepage layout",
            "website mockup",
            "web page design",
            "homepage inspiration",
            "landing page inspiration",
            "website interface",
            "homepage mockup",
            "web design inspiration",
            "landing page template",
            "website design",
            "homepage wireframe",
            "web interface design",
            "landing page wireframe",
            "website mockup design",
            "homepage ui",
            "web design template",
            "landing page ui",
            "website layout",
            "homepage template",
            "web interface mockup",
            "landing page layout",
            "website wireframe",
            "homepage interface",
            "web design layout",
            "landing page interface",
            "website ui",
            "homepage design inspiration",
            "web design wireframe",
            "landing page design inspiration",
            "website design inspiration",
            "homepage design template",
            "web interface template",
            "landing page design template",
            "website design template",
            "homepage design layout",
            "web interface layout",
            "landing page design layout",
            "website design layout",
            "homepage design wireframe",
            "web interface wireframe",
            "landing page design wireframe",
            "website design wireframe",
        ]
        self.search_engines = [
            {
                "name": "Google",
                "base_url": "https://www.google.com/search",
                "params": {"tbm": "isch"},
                "image_selector": "img[src]:not([src='']):not([src*='data:image'])",
                "delay": 2,
            },
            {
                "name": "Unsplash",
                "base_url": "https://unsplash.com/s/photos",
                "image_selector": ".oCCRx a img",
                "delay": 3,
            },
            {
                "name": "Pexels",
                "base_url": "https://www.pexels.com/search",
                "image_selector": ".photo-item img",
                "delay": 3,
            },
        ]

    def search_and_download_images(self, target_count=100):
        collected_images = []

        for engine in self.search_engines:
            if len(collected_images) >= target_count:
                break

            for keyword in self.keywords:
                if len(collected_images) >= target_count:
                    break

                print(f"Searching with {engine['name']} for: {keyword}")

                try:
                    response = requests.get(
                        engine["base_url"],
                        params={**engine["params"], **{"q": keyword}},
                        headers={
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
                        },
                    )

                    if response.status_code == 200:
                        soup = BeautifulSoup(response.content, "html.parser")
                        images = soup.select(engine["image_selector"])

                        for img in images:
                            try:
                                img_url = img.get("data-src") or img.get("src")
                                if img_url and img_url.startswith("http"):
                                    img_path = self.download_image(img_url, keyword)
                                    if img_path:
                                        collected_images.append(
                                            {
                                                "url": img_url,
                                                "keyword": keyword,
                                                "engine": engine["name"],
                                                "path": str(img_path),
                                            }
                                        )
                                        print(f"Downloaded: {img_url}")

                                        if len(collected_images) >= target_count:
                                            break

                            except Exception as e:
                                print(f"Error downloading image: {e}")
                                continue

                        time.sleep(engine["delay"])

                    else:
                        print(
                            f"Failed to fetch from {engine['name']}: {response.status_code}"
                        )

                except Exception as e:
                    print(f"Error searching with {engine['name']}: {e}")
                    continue

        return collected_images

    def download_image(self, img_url, keyword):
        try:
            response = requests.get(img_url, stream=True, timeout=10)
            if response.status_code == 200:
                content_type = response.headers.get("Content-Type", "")
                if "image" in content_type:
                    ext = content_type.split("/")[-1]
                    if ext == "jpeg":
                        ext = "jpg"

                    filename = f"{keyword.replace(' ', '_')}_{int(time.time())}.{ext}"
                    filepath = self.base_dir / filename

                    with open(filepath, "wb") as f:
                        for chunk in response.iter_content(1024):
                            f.write(chunk)

                    return filepath

        except Exception as e:
            print(f"Error downloading {img_url}: {e}")

        return None

    def save_metadata(self, images):
        metadata_path = self.base_dir / "metadata.json"

        with open(metadata_path, "w", encoding="utf-8") as f:
            json.dump(images, f, ensure_ascii=False, indent=2)

        print(f"Metadata saved to: {metadata_path}")

    def run(self):
        print("Starting image collection...")
        print(f"Target: {100} homepage-related images")

        images = self.search_and_download_images(100)

        if images:
            self.save_metadata(images)
            print(f"\nSuccessfully collected {len(images)} images!")
            print(f"Images saved to: {self.base_dir}")
            print(f"Metadata saved to: {self.base_dir}/metadata.json")
        else:
            print("No images collected.")


if __name__ == "__main__":
    collector = ImageCollector()
    collector.run()
