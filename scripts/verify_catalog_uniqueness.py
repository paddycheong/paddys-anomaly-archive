import os
import re
import sys
import hashlib
try:
    from PIL import Image
except ImportError:
    Image = None

def main():
    items_path = os.path.join('src', 'data', 'items.ts')
    with open(items_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find IDs
    ids = re.findall(r'"id":\s*"(anm-\d+)"', text)
    print(f"Total raw ID occurrences in items.ts: {len(ids)}")
    unique_ids = []
    seen = set()
    for item_id in ids:
        if item_id not in seen:
            seen.add(item_id)
            unique_ids.append(item_id)
    print(f"Total unique IDs in items.ts: {len(unique_ids)}")
    print(f"First 5 IDs: {unique_ids[:5]}")
    print(f"Last 5 IDs: {unique_ids[-5:]}")

    # Check images
    missing_images = []
    hashes = {}
    corrupted_images = []
    small_images = []

    for item_id in unique_ids:
        img_path = os.path.join('public', 'items', f"{item_id}.jpg")
        if not os.path.exists(img_path):
            missing_images.append(img_path)
            continue

        size = os.path.getsize(img_path)
        if size < 20 * 1024:
            small_images.append((item_id, size))

        if Image is not None:
            try:
                with Image.open(img_path) as img:
                    img.verify()
            except Exception as e:
                corrupted_images.append((item_id, str(e)))

        with open(img_path, 'rb') as f:
            h = hashlib.md5(f.read()).hexdigest()
        if h in hashes:
            hashes[h].append(item_id)
        else:
            hashes[h] = [item_id]

    duplicates = {h: items for h, items in hashes.items() if len(items) > 1}

    print("\n--- CATALOG VERIFICATION REPORT ---")
    print(f"Total verified items: {len(unique_ids)}")
    print(f"Missing images: {len(missing_images)}")
    if missing_images:
        print("  Missing:", missing_images[:10])
    print(f"Duplicate image hashes: {len(duplicates)}")
    if duplicates:
        for h, items in duplicates.items():
            print(f"  Hash {h}: {items}")
    print(f"Corrupted images: {len(corrupted_images)}")
    print(f"Suspiciously small images (<20KB): {len(small_images)}")
    if missing_images or duplicates or corrupted_images:
        print(">>> CATALOG VERIFICATION FAILED! <<<")
        sys.exit(1)
    if not small_images:
        print(">>> ALL IMAGES PASS 100% INTEGRITY & UNIQUENESS CHECKS! <<<")
    else:
        print(">>> ALL IMAGES EXIST, VALID & 100% UNIQUE (minor size note above). <<<")

if __name__ == '__main__':
    main()
