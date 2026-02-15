#!/usr/bin/env python3
"""
Screenshot automation script for homepage folders.
Takes screenshots of all folders missing images/fullpage.png
"""

import os
import sys
import time
import json
import subprocess
import signal
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading
import socket

BASE_DIR = (
    "/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
)

# Folders that are missing fullpage.png
MISSING_FOLDERS = [
    "art-gallery",
    "board-game-cafe",
    "ev-station",
    "fine-dining",
    "flower-boutique",
    "golf-club",
    "hair-salon",
    "ice-cream-shop",
    "interior-design",
    "jewelry-atelier",
    "korean-bbq",
    "law-firm",
    "magic-shop",
    "music-studio",
    "nail-salon",
    "organic-farm",
    "perfume-atelier",
    "pet-clinic",
    "pet-grooming",
    "photo-studio",
    "pilates-studio",
    "pinball-arcade",
    "plant-nursery",
    "pottery-studio",
    "ramen-shop",
    "real-estate",
    "record-store",
    "sake-brewery",
    "skate-shop",
    "sneaker-store",
    "spa-wellness",
    "surf-school",
    "sushi-izakaya",
    "tea-house",
    "vintage-store",
    "vr-arcade",
    "watch-atelier",
    "whiskey-distillery",
    "whiskey-lounge",
    "wine-bar",
    "yacht-club",
    "yoga-studio",
]


def find_free_port():
    """Find a free port to use"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("", 0))
        s.listen(1)
        port = s.getsockname()[1]
    return port


def start_server(folder_name, port):
    """Start HTTP server for a folder"""
    folder_path = os.path.join(BASE_DIR, folder_name)
    os.chdir(folder_path)

    # Create images directory if it doesn't exist
    images_dir = os.path.join(folder_path, "images")
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    handler = SimpleHTTPRequestHandler
    server = HTTPServer(("127.0.0.1", port), handler)

    # Handle server in thread
    server.serve_forever()


def main():
    # Get list of folders that already have screenshots
    existing = []
    missing = []

    for folder in sorted(os.listdir(BASE_DIR)):
        folder_path = os.path.join(BASE_DIR, folder)
        if os.path.isdir(folder_path):
            screenshot_path = os.path.join(folder_path, "images", "fullpage.png")
            if os.path.exists(screenshot_path):
                existing.append(folder)
            else:
                missing.append(folder)

    print(f"Already have screenshots: {len(existing)}")
    print(f"Need screenshots: {len(missing)}")
    print(f"Missing folders: {missing}")

    # Save missing list to file
    with open("/tmp/missing_folders.json", "w") as f:
        json.dump(missing, f)


if __name__ == "__main__":
    main()
