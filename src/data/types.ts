export type CategoryId = 
  | 'ALL'
  | 'ODD_DESK_TACTILE' 
  | 'CYBER_HARDWARE' 
  | 'WEARABLE_ANOMALIES' 
  | 'UNCANNY_DOMESTIC' 
  | 'ZINES_RELICS';

export interface CategoryInfo {
  id: CategoryId;
  code: string;
  name: string;
  shortDesc: string;
}

export interface CuratorRadar {
  weirdness: number; // 0 - 100
  tactility: number; // 0 - 100
  artistry: number; // 0 - 100
  scarcity: number; // 0 - 100
}

export interface CuratorLink {
  platform: 'Instagram' | 'Substack' | 'X/Twitter' | 'Personal Store' | 'Discord Guild' | 'Telegram' | 'RedNote' | 'Etsy';
  url: string;
  label: string;
}

export interface Curator {
  id: string;
  callsign: string;
  name: string;
  avatar: string;
  location: string;
  styleGenre: string;
  huntingGrounds: string[];
  tasteRadar: CuratorRadar;
  quote: string;
  bio: string;
  links: CuratorLink[];
  curatedCount: number;
}

export interface Hotspot {
  id: string;
  x: number; // 0 - 100%
  y: number; // 0 - 100%
  label: string;
  detail: string;
}

export interface FieldObservation {
  unboxingLog: string;
  tactileFeedback: string;
  honestSnags: string[]; // candid drawbacks, caveats, ergonomic issues
  curatorVerdict: string;
  hotspots: Hotspot[];
}

export type OutboundSourceType = 
  | 'Artisan Workshop' 
  | 'Official Workshop'
  | 'Official Reseller'
  | 'Authorized Dealer'
  | 'Proxy Auction' 
  | 'Curator Direct DM' 
  | 'Underground Store' 
  | 'Independent Zine Shop'
  | 'Deadstock Vault'
  | 'Boutique Reseller'
  | 'Independent Artisan'
  | 'Certified Paleontologist'
  | 'Artisan Studio';

export interface SourcingTelemetry {
  huntDifficulty: 1 | 2 | 3 | 4 | 5; // 1: Easy click, 5: Rare deep-web auction
  priceRange: string;
  primaryChannels: string[];
  searchKeywords: string[];
  antiFraudWarning: string;
  directOutbound: {
    label: string;
    url: string;
    sourceType: OutboundSourceType;
  };
}

export interface OddityItem {
  id: string;
  specimenCode: string;
  title: string;
  category: CategoryId;
  curatorId: string;
  dateLogged: string;
  weirdnessScore: number; // 1 - 10
  priceValue: number; // USD numeric value for range filtering
  platform: string; // e.g. "Amazon", "TikTok Shop", "AliExpress", "Etsy", "Shopee", etc.
  salesRank: number; // 1 to 5
  salesRankBadge: string; // e.g. "#1 BESTSELLER", "TOP 3 NOVELTY"
  scarcityBadge: string;
  heroImage: string;
  gallery: string[];
  tagline: string;
  tags: string[];
  fieldObservation: FieldObservation;
  sourcingTelemetry: SourcingTelemetry;
}
