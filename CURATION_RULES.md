# ANOMALY ARCHIVE // OFFICIAL CURATION & DROPS PROTOCOL

> **Status**: Active & Enforced  
> **Last Revision**: November 16, 2026  
> **Target Audience**: Human Curators, Automated Pipeline Engines, QA Inspectors

---

## 🏛️ System Core Rules

### Rule 1: Authentic Real-World Photography Only (NO AI Generative Imagery)
- Every cataloged specimen must feature authentic, verified product, museum, or collector photography of the physical artifact.
- **Zero AI-generated images** (Midjourney, DALL-E, Stable Diffusion, NanoBanana, etc.) and zero abstract graphic stock illustrations are permitted in the item catalog.
- Imagery must capture real materials: machined aluminum, knurled brass, vintage bakelite, vacuum fluorescent glass, tactile keycaps, optical lenses, or patinated metal.

### Rule 2: Zero Image Reuse Across Entire Catalog
- Every single item (`anm-001`, `anm-002`, ..., `anm-N`) must possess its own unique photographic asset.
- No two items may share an identical image file or identical MD5 checksum.
- Automated checksum scans (`verify_catalog_uniqueness.py`) enforce zero duplicate hashes across all active and archived drops.

### Rule 3: Reverse-Chronological Architecture (Newest at the Front)
- Every newly unlocked weekly drop must be placed at the **VERY FRONT** of the active catalog.
- Users landing on the archive immediately experience the newest weekly release first, followed by previous drops in strict descending chronological order.
- Previous items and historical drops must never be deleted, truncated, or duplicated.

### Rule 4: Weekly Automated Cadence & Strict Sourcing Thresholds
- **Cadence**: Every Monday at 12:00 PM Tokyo Time (JST / 03:00 UTC / 11:00 AM Beijing Time CST).
- **Quantity**: Exactly **15 specimens** per weekly drop.
- **Platform Ratio**: **40.0% TikTok Shop** (exactly 6 of 15 items), representing viral social-commerce discoveries and kinetic/wearable oddities; remaining 60% (9 items) sourced from specialized platforms (eBay Vintage, Yahoo Auctions Japan, Mercari, Thomann, Reverb, Tindie, Taobao).
- **Price Floor**: **Every individual item unit price strictly > $100.00 USD** (no sub-$100 knick-knacks).
- **Editorial Depth**: Each item requires 3 interactive teardown hotspots, a 4-point unboxing dossier, 3 honest snags/trade-offs, and complete sourcing telemetry (difficulty, counterfeit warnings, market price spectrum).

### Rule 5: Mandatory Post-Update Image-Text Consistency Verification (每次更新后必查图文匹配)
- **Mandatory Quality Gate**: Immediately after any catalog drop or update is generated, the pipeline and curator must execute both automated and human visual verification:
  1. **Visual Accuracy Verification**: Inspect each newly added photograph against the item's `title`, `specimenCode`, `manufacturer`, `category`, and `fieldNotes`. Verify that:
     - The physical object in the photo matches the exact brand, model, and mechanism described in the text (e.g. an Olympus Pen EE-2 must show the Olympus Pen EE-2 half-frame camera with its selenium selenium cell ring; a Nixie clock must show authentic glowing cold-cathode tubes; a semi-modular synthesizer must show the exact patchable instrument).
     - The photo is right-side up (proper orientation, not rotated 90° or inverted).
     - The photo has no watermarks, placeholder icons, or broken aspect ratios.
  2. **Automated Asset Integrity Checks**:
     - Image file exists at `public/items/{id}.jpg`.
     - File size is substantial (> 20KB) and not corrupted.
     - Dimensions are standard square 1000x1000 px cover crop.
     - MD5 hash is unique across the entire catalog history.
  3. **Release Blocker**: If any image does not precisely depict the product described in the title and dossier, the release MUST be held until an authentic, matching photograph is sourced and verified.

---

## 🛠️ Verification Checklist for Every Drop

Before any commit or deployment to production, the curator or automated system must check off the following:

- [ ] Exactly 15 items in the new batch (`anm-XXX` to `anm-YYY`).
- [ ] Exactly 6 items from TikTok Shop (40.0% ratio).
- [ ] All 15 items have unit price > $100.00 USD.
- [ ] 15 unique, verified photographs stored in `public/items/`.
- [ ] Automated check passes: `python scripts/verify_catalog_uniqueness.py`.
- [ ] Visual check passes: Every image visually inspected to match the exact item title and physical mechanism.
- [ ] TypeScript compilation passes: `npm run build` succeeds with zero errors.
- [ ] New items positioned at the top of `src/data/items.ts` in reverse chronological order.
