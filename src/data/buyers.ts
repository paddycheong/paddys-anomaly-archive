import type { Curator } from './types';

export const CURATORS: Curator[] = [
  {
    id: 'cr-algo-01',
    callsign: 'Felix Vance',
    name: 'Felix Vance',
    avatar: '/avatars/curator-01-felix.jpg',
    location: 'Portland, Oregon // United States',
    styleGenre: 'Viral Desk Absurdities & Mega-Store Gag Champions',
    huntingGrounds: [
      'Amazon US/UK Bestsellers in Novelty & Gag Toys',
      'Best Buy Geek & Retro Hardware Clearance',
      'Allegro Poland Trending Oddities Rank',
      'Zalando Avant-Garde Subcategory Index'
    ],
    tasteRadar: {
      weirdness: 92,
      tactility: 88,
      artistry: 80,
      scarcity: 82
    },
    quote: 'When an item sells 40,000 units on Amazon purely because it makes a deafening goat scream, human sociology has officially peaked. I buy them to understand why.',
    bio: 'Former product designer turned obsessive novelty archivist. I track algorithm spikes and bizarre consumer buying waves across Amazon and Best Buy, stress-testing top-ranked oddities in my home studio.',
    links: [
      { platform: 'Substack', url: 'https://substack.com', label: 'The Desk Anomaly Wire' },
      { platform: 'Instagram', url: 'https://instagram.com', label: '@felix_vance' },
      { platform: 'Personal Store', url: 'https://amazon.com', label: "Felix's Amazon Locker" }
    ],
    curatedCount: 2
  },
  {
    id: 'cr-algo-02',
    callsign: 'Chloe Lin',
    name: 'Chloe Lin',
    avatar: '/avatars/curator-02-chloe.jpg',
    location: 'Singapore // Tanjong Pagar Studio',
    styleGenre: 'Social Commerce Thrills, Kinetic Toys & Unboxing Novelties',
    huntingGrounds: [
      'TikTok Shop Global Top-5 Trending Toys',
      'SHEIN Weird & Fun Lifestyle Top Sellers',
      'Wish Viral Bargain Live Feeds',
      'Passfeed Flash Impulse Novelties'
    ],
    tasteRadar: {
      weirdness: 96,
      tactility: 91,
      artistry: 75,
      scarcity: 79
    },
    quote: 'If a gadget can make a cat jump backward or an entire office laugh out loud in under five seconds, it immediately earns a spot in my archive.',
    bio: 'Short-video content scout and kinetic toy collector. I spend hours watching cross-border live-streams on TikTok Shop and SHEIN, intercepting chaotic escaping crabs and hilarious sleep masks before the trend cycle moves on.',
    links: [
      { platform: 'Instagram', url: 'https://instagram.com', label: '@chloelin_finds' },
      { platform: 'Telegram', url: 'https://t.me', label: 'TikTok Shop Viral Drops' },
      { platform: 'Discord Guild', url: 'https://discord.com', label: 'Chloe Unboxing Collective' }
    ],
    curatedCount: 3
  },
  {
    id: 'cr-algo-03',
    callsign: 'Darius Novak',
    name: 'Darius Novak',
    avatar: '/avatars/curator-03-darius.jpg',
    location: 'Berlin, Germany // Kreuzberg District',
    styleGenre: 'Industrial EVA Moldings, Giant Office Pranks & Hardware Curios',
    huntingGrounds: [
      'AliExpress Global Direct Export Top Bestsellers',
      'Cdiscount Marketplace French Curiosities',
      'Voghion Cross-Border Bizarre Feed',
      'Passfeed Wholesale Factory Drops'
    ],
    tasteRadar: {
      weirdness: 98,
      tactility: 95,
      artistry: 82,
      scarcity: 84
    },
    quote: 'The line between an absurd gag gift and an industrial manufacturing marvel is razor-thin. When a factory molds 500,000 hyper-realistic fish into shoes, I respect the craft.',
    bio: 'Hardware tinkerer and cross-border logistics hound based in Kreuzberg. I track overseas factory over-runs on AliExpress and European outlets, testing oversized mechanical enter keys, realistic rubber fish slippers, and miniature prosthetics.',
    links: [
      { platform: 'X/Twitter', url: 'https://x.com', label: '@darius_novak' },
      { platform: 'Personal Store', url: 'https://aliexpress.com', label: 'Direct Factory Drops' },
      { platform: 'Discord Guild', url: 'https://discord.com', label: 'Kreuzberg Hardware Lab' }
    ],
    curatedCount: 3
  },
  {
    id: 'cr-algo-04',
    callsign: 'Sora Takahashi',
    name: 'Sora Takahashi',
    avatar: '/avatars/curator-04-sora.jpg',
    location: 'Tokyo, Japan // Shimokitazawa',
    styleGenre: 'Pan-Asian K-Novelties, Acoustic Synths & Giant Food Cushions',
    huntingGrounds: [
      'Shopee SEA Top-5 Quirky Home & Living Rank',
      'Coupang Rocket Delivery K-Novelties Top 1–3',
      'Rakuten Japan Design Novelty Bestsellers',
      'Mercari JP Verified Acoustic Gadgets',
      'Lazada Southeast Asia Flash Trending'
    ],
    tasteRadar: {
      weirdness: 94,
      tactility: 97,
      artistry: 90,
      scarcity: 86
    },
    quote: 'Between a squeaking tadpole synthesizer from Akihabara and a 5-foot roasted drumstick pillow from Bangkok lies the entire charm of modern Asian pop culture.',
    bio: 'Tokyo lifestyle scout living in Shimokitazawa. Hooked on the playful margins of Rakuten, Mercari JP, Coupang, and Shopee—scouting Japanese electronic musical gadgets, lettuce-leaf umbrellas, and neon vortex soju aerators.',
    links: [
      { platform: 'Instagram', url: 'https://instagram.com', label: '@sora.takahashi' },
      { platform: 'Substack', url: 'https://substack.com', label: 'Tokyo-Seoul Dispatch' },
      { platform: 'Personal Store', url: 'https://rakuten.co.jp', label: "Sora's Mercari & Rakuten Radar" }
    ],
    curatedCount: 3
  },
  {
    id: 'cr-algo-05',
    callsign: "Maeve O'Connor",
    name: "Maeve O'Connor",
    avatar: '/avatars/curator-05-maeve.jpg',
    location: 'Dublin, Ireland // Temple Bar Studios',
    styleGenre: 'Existential Ceramics, Surrealist Wall Clocks & Handcrafted Curios',
    huntingGrounds: [
      'Etsy Global Top-5 Ceramic Oddities & Bestsellers',
      'OnBuy UK Odd Home Curiosities',
      'Allegro Poland Surrealist Decor Rank',
      'The Iconic Avant-Garde Drops'
    ],
    tasteRadar: {
      weirdness: 95,
      tactility: 99,
      artistry: 98,
      scarcity: 94
    },
    quote: 'True oddity isn’t cheap plastic—it is when a master ceramicist or craftsperson channels existential humor into an everyday functional object.',
    bio: 'Independent ceramicist and collector of offbeat design objects based in Dublin. I hunt down star sellers on Etsy and European auctions, sourcing handcrafted weeping onion planters, Dalí melting clocks, and unique micro-batch home decor.',
    links: [
      { platform: 'Etsy', url: 'https://etsy.com', label: "Maeve's Etsy Star Picks" },
      { platform: 'Instagram', url: 'https://instagram.com', label: '@maeve_craft' },
      { platform: 'Substack', url: 'https://substack.com', label: 'The Kiln & The Press' }
    ],
    curatedCount: 4
  }
];
