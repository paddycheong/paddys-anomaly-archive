# ANOMALY ARCHIVE // Curated Oddities & Avant-Garde Buyer Dossier

> **Live Production**: [https://paddys-anomaly-archive.ebreyzarc.workers.dev](https://paddys-anomaly-archive.ebreyzarc.workers.dev)  
> **Source Repository**: [https://github.com/paddycheong/paddys-anomaly-archive](https://github.com/paddycheong/paddys-anomaly-archive)

---

## ⚡ Automated Weekly Curation Pipeline

The Anomaly Archive features a zero-maintenance, automated weekly drop pipeline driven by GitHub Actions and Cloudflare Workers Builds.

### ⏱️ Cadence & Sourcing Window
- **Execution Schedule**: **Every Monday at 12:00 PM Tokyo Time (JST / 03:00 UTC)**
  - Cron: `0 3 * * 1`
  - GitHub Workflow: `.github/workflows/weekly-curation.yml`
- **Data Sourcing Window**: **Global Previous Week (Monday 00:00 to Sunday 23:59) Sales Velocity Top 15**

### 🎯 Mandatory Curation Criteria
1. **Quantity**: Exactly **15 new specimens** per weekly batch.
2. **Platform Weight**: **TikTok Shop strictly weighted at 40.0%** (6 of 15 items), with remaining 60% sourced across Amazon, AliExpress, Etsy, Mercari, Best Buy, Coupang, Rakuten, and Allegro.
3. **Price Floor**: **All individual items strictly have unit price > $100.00 USD**.
4. **Editorial Integrity (Plan A Telemetry)**: Every cataloged specimen includes:
   - 3 Interactive Teardown Hotspots (exact percentage pins on product photography)
   - Field Observation Dossier (Unboxing physical log, haptic feedback, 2-3 honest snags/flaws, curator verdict)
   - Sourcing Radar & Telemetry (Hunt difficulty 1-5, price spectrum, search keywords, anti-counterfeit warnings, direct outbound link)
5. **Human-in-the-Loop Review**:
   - The engine compiles and runs verification tests.
   - Automatically opens a formatted Pull Request on GitHub with the drop markdown summary.
   - Upon clicking **Merge pull request**, Cloudflare Workers Builds automatically compiles and deploys the new artifacts in ~20 seconds with zero downtime.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Brutalist Industrial Design System
- **Hosting & CDN**: Cloudflare Workers Static Assets (`wrangler.jsonc`)
- **CI/CD**: GitHub Actions + Cloudflare Workers Builds
- **Zero-Database Content**: Pure TypeScript static data models (`src/data/items.ts`, `src/data/buyers.ts`)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run weekly curation engine locally
npm run curate

# Compile production build
npm run build
```
