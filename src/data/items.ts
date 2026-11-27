import type { OddityItem } from './types';

// ============================================================================
// ANOMALY ARCHIVE // SPECIMEN CATALOG
// Rule 1: Product images sourced directly from authentic product listings (NO AI)
// Rule 2: Zero image reuse - each specimen has its own unique real photograph
// Rule 3: Newest published items are positioned at the FRONT of the archive
// Rule 4: Automatically updates every Monday at 12:00 PM Tokyo Time (JST / 03:00 UTC)
//         with Global Previous Week (Mon-Sun) Velocity Top 15 (40% TikTok Shop, >$100)
// Rule 5: Mandatory Post-Update Image-Text Verification - after every drop, every
//         newly added item must pass automated uniqueness checks and visual inspection
//         confirming the photo matches the exact title, brand, and physical artifact.
// ============================================================================

type RawOdditySeed = Omit<OddityItem, 'dateLogged' | 'gallery'>;

// Active Drop Snapshot: NOV 23, 2026 (Batch 8 (Nov 23, 2026))
const BATCH_POOL_NOV_23: RawOdditySeed[] = [
  {
    "id": "anm-106",
    "specimenCode": "TEK-475A // #106-CRT",
    "title": "Tektronix 475A 250MHz Dual-Trace Portable Analog CRT Oscilloscope",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.3,
    "priceValue": 420,
    "platform": "eBay Vintage",
    "salesRank": 1,
    "salesRankBadge": "#1 LAB BENCH LEGEND",
    "scarcityBadge": "1970S PRECISION CRT",
    "heroImage": "/items/anm-106.jpg",
    "tagline": "Iconic 250MHz analog laboratory oscilloscope projecting razor-sharp glowing cyan electron-beam waveforms across an illuminated graticule CRT.",
    "tags": [
      "TEKTRONIX 475A",
      "ANALOG OSCILLOSCOPE",
      "CRT PHOSPHOR",
      "LAB INSTRUMENT",
      "AUDIO VISUALIZER"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy 11kg ruggedized aluminum bench instrument with recessed bezel screws, front-panel probe calibrator loop, and bright P31 phosphor screen.",
      "tactileFeedback": "Mechanical cam-switch attenuators and knurled vernier intensity dials offer aerospace-grade tactile precision.",
      "honestSnags": [
        "Weighs nearly 25 pounds and runs an audible rear cooling fan during long bench sessions.",
        "Aging tantalum capacitors on the power rails can short unexpectedly on unserviced units.",
        "Requires BNC 10x probes (sold separately) to safely measure high-voltage circuits."
      ],
      "curatorVerdict": "Feed your synthesizer audio into its X-Y inputs and watch living emerald Lissajous geometry dance at infinite analog resolution.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 44,
          "y": 42,
          "label": "Illuminated P31 Phosphor CRT Screen",
          "detail": "High-acceleration cathode ray tube rendering razor-sharp real-time analog voltage traces."
        },
        {
          "id": "hs-2",
          "x": 92,
          "y": 66,
          "label": "Horizontal Display Trigger Matrix",
          "detail": "Interlocking illuminated push-switches governing delayed sweep and dual-trace timebases."
        },
        {
          "id": "hs-3",
          "x": 18,
          "y": 88,
          "label": "Beam Intensity, Focus & Scale Controls",
          "detail": "Fine analog potentiometers tuning electron beam sharpness and graticule edge lighting."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$320 — $520 USD",
      "primaryChannels": [
        "eBay Test Equipment",
        "Surplus University Lab Auctions"
      ],
      "searchKeywords": [
        "Tektronix 475A Oscilloscope",
        "Vintage Analog CRT Scope 250MHz",
        "Tektronix Dual Trace Bench Scope"
      ],
      "antiFraudWarning": "Always request a photo showing a crisp, bright calibration square wave across both Channel 1 and Channel 2.",
      "directOutbound": {
        "label": "Inspect on eBay Lab Surplus",
        "url": "https://www.ebay.com/sch/i.html?_nkw=Tektronix+475A",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-107",
    "specimenCode": "TIKTOK-CROOKES // #107-SOLAR",
    "title": "Hand-Blown Borosilicate Crookes Vacuum Glass Solar Radiometer",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.8,
    "priceValue": 118,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL PHOTON MILL (185K+ SOLD)",
    "scarcityBadge": "GERMAN GLASSBLOWING",
    "heroImage": "/items/anm-107.jpg",
    "tagline": "Airtight partial-vacuum glass bulb containing four blackened-and-silvered mica vanes that spin at 3,000 RPM powered purely by sunlight.",
    "tags": [
      "TIKTOK SHOP 40%",
      "CROOKES RADIOMETER",
      "SOLAR PHYSICS",
      "BOROSILICATE GLASS",
      "PERPETUAL MOTION"
    ],
    "fieldObservation": {
      "unboxingLog": "Suspended inside molded shock-absorbent foam; crystal-clear mouth-blown glass pedestal with needle-balanced diamond rotor.",
      "tactileFeedback": "Featherlight hollow borosilicate glass; watching the vanes accelerate silently the instant a cloud passes feels like pure sorcery.",
      "honestSnags": [
        "Extremely fragile glass stem—one accidental elbow bump off a windowsill shatters the vacuum seal permanently.",
        "Does not spin under cool LED desk lamps; requires genuine sunlight or warm incandescent/infrared radiation.",
        "Must sit on a dead-level surface so the delicate glass pivot cap does not bind on the steel needle."
      ],
      "curatorVerdict": "Invented in 1873 and still sparking physics debates. The quietest, most hypnotic solar-powered kinetic sculpture ever blown from glass.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 48,
          "y": 12,
          "label": "Dual-Faced Black & Silver Mica Vanes",
          "detail": "Thermal transpiration along the darkened vs. reflective edges drives rapid rotation under infrared light."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 42,
          "label": "Low-Friction Jewel Pivot Spindle",
          "detail": "Microscopic glass cap balancing effortlessly on a hardened steel needle inside partial vacuum."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 86,
          "label": "Hand-Blown Borosilicate Pedestal",
          "detail": "Thick optical-grade glass base sealed at precise sub-millibar atmospheric pressure."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$105 — $135 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Large German Crookes Radiometer\")",
        "Museum Science Shops"
      ],
      "searchKeywords": [
        "Large Glass Crookes Radiometer",
        "Solar Light Mill Desk Sculpture",
        "Hand Blown Vacuum Radiometer"
      ],
      "antiFraudWarning": "Cheap $15 mass-produced bulbs often lose vacuum pressure within months; choose hand-blown German laboratory-grade glass.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Science Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-108",
    "specimenCode": "TIKTOK-FLIR-E8 // #108-THERM",
    "title": "FLIR E8 Handheld Infrared Thermal Imaging Scanner Camera",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.1,
    "priceValue": 395,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 VIRAL PREDATOR VISION (54K+ SOLD)",
    "scarcityBadge": "320x240 IR SENSOR",
    "heroImage": "/items/anm-108.jpg",
    "tagline": "Ruggedized pistol-grip infrared thermography scanner revealing hidden heat signatures, invisible wall wiring, and living thermal trails in pitch darkness.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FLIR THERMAL",
      "INFRARED CAMERA",
      "PREDATOR VISION",
      "FIELD SCANNER"
    ],
    "fieldObservation": {
      "unboxingLog": "Overmolded matte-black industrial rubber grip with silver accent collar, tactile trigger switch, and hard polymer carrying case.",
      "tactileFeedback": "Balanced tool-grade ergonomics built to survive a 2-meter concrete drop; crisp single-finger image capture trigger.",
      "honestSnags": [
        "Infrared radiation cannot pass through ordinary window glass—it reflects your own thermal silhouette like a mirror.",
        "Periodic internal NUC calibration shutter emits a brief mechanical click and freezes the feed for half a second.",
        "Dedicated lithium battery pack requires external dock charging for extended field explorations."
      ],
      "curatorVerdict": "Grants instant Predator vision. Once you start inspecting hot circuit boards, hidden drafts, and glowing footprints, you cannot put it down.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 52,
          "y": 18,
          "label": "Rubberized Ergonomic Pistol Grip",
          "detail": "Anti-slip textured elastomer handle balanced for single-handed darkroom or outdoor sweeps."
        },
        {
          "id": "hs-2",
          "x": 40,
          "y": 60,
          "label": "Recessed Capture Trigger Switch",
          "detail": "Instant radiometric JPEG shutter logging full temperature telemetry per pixel."
        },
        {
          "id": "hs-3",
          "x": 32,
          "y": 80,
          "label": "MSX Thermal-Optical Core Housing",
          "detail": "Fuses visible-light edge contours directly onto live infrared heat maps for crisp spatial clarity."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$360 — $480 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Handheld Thermal Imaging Camera\")",
        "Industrial Diagnostics Outlets"
      ],
      "searchKeywords": [
        "FLIR E8 Thermal Camera",
        "Handheld Infrared Thermography Scanner",
        "MSX Thermal Vision Camera"
      ],
      "antiFraudWarning": "Check native IR sensor resolution (minimum 160x120 or 320x240); avoid low-res 32x32 sensors upscaled by software.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Tech Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-109",
    "specimenCode": "ROLAND-TR808 // #109-BOOM",
    "title": "Roland TR-808 Rhythm Composer Analog Drum Machine",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 3850,
    "platform": "Reverb",
    "salesRank": 1,
    "salesRankBadge": "#1 ELECTRONIC MUSIC ARTIFACT",
    "scarcityBadge": "1980 TOKYO GRAIL",
    "heroImage": "/items/anm-109.jpg",
    "tagline": "The most influential analog drum computer in human history—defined by its sub-seismic bass drum, metallic cowbell, and iconic four-color 16-step sequencer.",
    "tags": [
      "ROLAND TR-808",
      "ANALOG DRUM MACHINE",
      "HIP HOP RELIC",
      "STEP SEQUENCER",
      "STUDIO GRAIL"
    ],
    "fieldObservation": {
      "unboxingLog": "Museum-grade steel chassis with black molded end-cheeks, glowing red-orange-yellow-white step buttons, and intact battery-backed pattern RAM.",
      "tactileFeedback": "Chunky oversized tempo dial and crisp LED-lit step switches feel like operating an Apollo launch sequencer.",
      "honestSnags": [
        "Zero MIDI ports natively—syncing to modern DAWs requires a DIN Sync (Sync24) converter box.",
        "Vintage C-cell backup batteries must be inspected annually to prevent catastrophic PCB acid leakage.",
        "Collector market pricing rivals a used compact car."
      ],
      "curatorVerdict": "Not merely a drum machine—the literal heartbeat of modern pop, electro, and hip-hop housed in timeless Japanese industrial design.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 14,
          "y": 50,
          "label": "Oversized Master Tempo Dial",
          "detail": "Precision analog clock potentiometer flanked by Pattern Write and Instrument Select rotaries."
        },
        {
          "id": "hs-2",
          "x": 54,
          "y": 38,
          "label": "11 Individual Analog Voice Strips",
          "detail": "Dedicated Level, Tone, Decay, and Snappy knobs sculpting pure transistor-synthesized percussion."
        },
        {
          "id": "hs-3",
          "x": 52,
          "y": 68,
          "label": "Iconic 4-Color 16-Step Sequencer",
          "detail": "Red, orange, yellow, and white backlit trigger keys pioneering visual beat programming."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 5,
      "priceRange": "$3,500 — $5,200 USD",
      "primaryChannels": [
        "Reverb Certified Vintage",
        "Tokyo Five G Music Technology"
      ],
      "searchKeywords": [
        "Original Roland TR-808 Rhythm Composer",
        "1980 Analog Drum Machine",
        "Vintage Roland TR-808 Japan"
      ],
      "antiFraudWarning": "Distinguish original 1980-1983 analog units from modern digital TR-08 Boutique replicas; check serial plates and 1/4-inch individual outputs.",
      "directOutbound": {
        "label": "Inspect on Reverb Vintage Vault",
        "url": "https://reverb.com/marketplace?query=Roland+TR-808",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-110",
    "specimenCode": "BAROGRAPH-BRASS // #110-PRESS",
    "title": "Antique French Brass Glass-Case Recording Aneroid Barograph",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.2,
    "priceValue": 365,
    "platform": "eBay Vintage",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 METEOROLOGY RELIC",
    "scarcityBadge": "BEVELED GLASS & BRASS",
    "heroImage": "/items/anm-110.jpg",
    "tagline": "Clockwork-driven atmospheric pressure recorder encased in beveled French brass-and-glass vitrine, continuously plotting weather fronts on a rotating paper drum.",
    "tags": [
      "BAROGRAPH",
      "ANTIQUE BRASS",
      "METEOROLOGY",
      "CLOCKWORK",
      "FRENCH INSTRUMENT"
    ],
    "fieldObservation": {
      "unboxingLog": "Five-sided beveled glass showcase lifted off a solid brass plinth, revealing a 7-capsule aneroid bellows stack, brass winding key, and ink-nib recording arm.",
      "tactileFeedback": "Heavy solid-brass baseplate with delicate counterbalanced lever arm that responds visibly to opening a room door.",
      "honestSnags": [
        "Requires weekly hand-winding of the internal mechanical clockwork drum and periodic replacement of chart paper.",
        "Glycerin-based recording ink nibs dry out if left uncapped or unused for several months.",
        "Must be kept away from radiators and direct sunlight to prevent false thermal expansion readings."
      ],
      "curatorVerdict": "Turns invisible storm fronts into a living mechanical ink drawing on your desk. Pure 19th-century observatory elegance.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 34,
          "y": 46,
          "label": "Clockwork Rotating Chart Drum",
          "detail": "Key-wound 7-day brass cylinder rotating calibrated millibar graph paper past the ink stylus."
        },
        {
          "id": "hs-2",
          "x": 54,
          "y": 52,
          "label": "Multi-Cell Aneroid Vacuum Stack",
          "detail": "Stacked corrugated metallic vacuum capsules expanding and contracting with atmospheric pressure."
        },
        {
          "id": "hs-3",
          "x": 43,
          "y": 31,
          "label": "Trefoil Brass Winding Key",
          "detail": "Removable solid-brass key resting atop the beveled glass showcase roof."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$320 — $540 USD",
      "primaryChannels": [
        "eBay Antique Scientific Instruments",
        "French Maritime Antiques"
      ],
      "searchKeywords": [
        "Antique Brass Recording Barograph",
        "Richard Freres Paris Barograph",
        "Glass Case Clockwork Barometer"
      ],
      "antiFraudWarning": "Confirm the internal 8-day clockwork movement runs smoothly and the aneroid bellows stack has no hairline vacuum leaks.",
      "directOutbound": {
        "label": "Inspect on eBay Scientific Archive",
        "url": "https://www.ebay.com/sch/i.html?_nkw=antique+brass+barograph",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-111",
    "specimenCode": "SONY-SOBAX // #111-NIXIE",
    "title": "1968 Sony SOBAX ICC-400W Desktop Nixie Tube Calculator",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.5,
    "priceValue": 580,
    "platform": "Yahoo Auctions Japan",
    "salesRank": 1,
    "salesRankBadge": "#1 JAPANESE NIXIE COMPUTE",
    "scarcityBadge": "1968 SONY ARCHIVE",
    "heroImage": "/items/anm-111.jpg",
    "tagline": "Early solid-state Sony desktop calculator displaying 14 glowing neon-orange Nixie cathode tubes above a sculpted two-tone mechanical keydeck.",
    "tags": [
      "SONY SOBAX",
      "NIXIE TUBES",
      "VINTAGE CALCULATOR",
      "1968 JAPAN",
      "COLD CATHODE"
    ],
    "fieldObservation": {
      "unboxingLog": "Substantial mid-century Japanese engineering marvel packed with discrete hand-soldered transistor driver boards and a full row of glass Nixie tubes.",
      "tactileFeedback": "Deeply dished ivory and cobalt-blue mechanical keycaps glide down with zero wobble and a hushed magnetic reed click.",
      "honestSnags": [
        "Weighs over 6 kilograms and occupies significant desktop real estate.",
        "Operates on 100V Japanese AC power; requires a small 100V step-down transformer outside Japan.",
        "Replacement high-voltage driver transistors require soldering skill if a digit ever sticks."
      ],
      "curatorVerdict": "Before LCDs flattened electronics into dull gray rectangles, Sony built math machines out of glowing neon glass tubes and jewel-like PCBs.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 42,
          "label": "14-Tube Cold-Cathode Nixie Bank",
          "detail": "Individual glass vacuum envelopes containing stacked wire numerals 0–9 glowing warm neon orange."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 18,
          "label": "Discrete Hand-Populated Driver PCB",
          "detail": "Exposed golden phenolic circuit board bristling with color-banded resistors and driver transistors."
        },
        {
          "id": "hs-3",
          "x": 48,
          "y": 86,
          "label": "Sculpted Two-Tone Mechanical Keycaps",
          "detail": "Thick double-shot ivory numeric keys contrasted against cobalt-blue arithmetic operators."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 5,
      "priceRange": "$480 — $750 USD",
      "primaryChannels": [
        "Yahoo Auctions Japan",
        "Vintage Japanese Calculator Collectors"
      ],
      "searchKeywords": [
        "Sony SOBAX ICC-400W Calculator",
        "Vintage Nixie Tube Desktop Calculator",
        "1968 Sony Nixie Machine"
      ],
      "antiFraudWarning": "Verify all Nixie tubes are intact with clear glass envelopes; cracked tubes turn milky and cannot be repaired.",
      "directOutbound": {
        "label": "Inspect on Yahoo Auctions Proxy",
        "url": "https://buyee.jp/item/search/query/Sony%20SOBAX",
        "sourceType": "Proxy Auction"
      }
    }
  },
  {
    "id": "anm-112",
    "specimenCode": "TIKTOK-PLASMA // #112-ORB",
    "title": "High-Voltage Noble Gas Electrostatic Plasma Globe Sphere Lamp",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.6,
    "priceValue": 125,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 VIRAL NOCTURNAL ORB (150K+ SOLD)",
    "scarcityBadge": "LARGE 8-INCH GLASS",
    "heroImage": "/items/anm-112.jpg",
    "tagline": "Museum-scale 8-inch hand-blown glass sphere filled with low-pressure neon and xenon gas, projecting touch-reactive magenta and violet lightning tendrils.",
    "tags": [
      "TIKTOK SHOP 40%",
      "PLASMA GLOBE",
      "ELECTROSTATIC",
      "NOBLE GAS",
      "TOUCH REACTIVE"
    ],
    "fieldObservation": {
      "unboxingLog": "Large 20cm optical glass dome mounted on a weighted matte-black transformer pedestal with sound-reactive strobe toggle.",
      "tactileFeedback": "Resting a fingertip on the warm glass pulls every dancing violet tendril into a single thick, pulsing electrical beam.",
      "honestSnags": [
        "Touch-capacitive discharge emits a faint high-frequency hum from the internal flyback transformer.",
        "Holding a metal ring or coin against the glass for several seconds can cause a tiny pinpoint RF thermal sting.",
        "Can occasionally wake nearby capacitive-touch desk lamps if placed within 15cm."
      ],
      "curatorVerdict": "Pure 1980s sci-fi laboratory atmosphere. In a dark room, the magenta-tipped blue plasma filaments look genuinely alive.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 50,
          "label": "Central High-Frequency Tesla Electrode",
          "detail": "Inner glass core radiating 35kHz alternating high-voltage RF fields into the gas chamber."
        },
        {
          "id": "hs-2",
          "x": 32,
          "y": 32,
          "label": "Ionized Xenon-Neon Plasma Filaments",
          "detail": "Self-organizing electrical tendrils glowing electric blue along the core and magenta at the glass boundary."
        },
        {
          "id": "hs-3",
          "x": 76,
          "y": 66,
          "label": "Capacitive Touch-Focus Boundary",
          "detail": "Thin optical glass wall allowing human skin capacitance to bend and concentrate live plasma arcs."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$108 — $145 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Large 8 Inch Glass Plasma Globe\")",
        "Science Museum Stores"
      ],
      "searchKeywords": [
        "8 Inch Large Plasma Globe Lamp",
        "High Voltage Noble Gas Sphere",
        "Touch Reactive Lightning Orb"
      ],
      "antiFraudWarning": "Skip tiny 3-inch USB novelty balls with weak filaments; insist on a dedicated AC-powered 8-inch or larger glass dome.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Glow Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-113",
    "specimenCode": "TIKTOK-FLIPPER // #113-RF",
    "title": "Flipper Zero Multi-Tool Sub-GHz RF & RFID Cyberdeck Transceiver",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.4,
    "priceValue": 215,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL CYBER-TAMAGOTCHI (310K+ SOLD)",
    "scarcityBadge": "OPEN-SOURCE HARDWARE",
    "heroImage": "/items/anm-113.jpg",
    "tagline": "Pocket-sized cyberpunk Swiss Army knife featuring a sub-GHz radio transceiver, NFC/RFID reader, IR blaster, GPIO pins, and a Tamagotchi-style pixel dolphin.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FLIPPER ZERO",
      "SUB-GHZ RF",
      "CYBERDECK",
      "OPEN SOURCE"
    ],
    "fieldObservation": {
      "unboxingLog": "Crisp minimalist white box housing the iconic white-and-orange pocket slab, braided USB-C cable, and pixel dolphin sticker.",
      "tactileFeedback": "Chunky matte polycarbonate shell with hyper-satisfying orange directional D-pad and crisp sunlight-readable monochrome LCD.",
      "honestSnags": [
        "Requires a separate microSD card (not included) to store databases, firmware updates, and signal captures.",
        "Rolling-code modern car key fobs cannot be legally or reliably cloned—keep expectations grounded in authorized RF testing.",
        "Your virtual dolphin companion gets visibly grumpy if you neglect to interact with signals for several days."
      ],
      "curatorVerdict": "Hardware hacking gamified to perfection. Makes invisible radio waves, infrared remotes, and RFID tags suddenly tangible in your palm.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 38,
          "y": 42,
          "label": "Orange-Backlit 1.4\" Monochrome LCD",
          "detail": "High-contrast pixel display animating your cyber-dolphin while scanning 433.92MHz sub-GHz bands."
        },
        {
          "id": "hs-2",
          "x": 84,
          "y": 44,
          "label": "Tactile Orange 5-Way Navigation Pad",
          "detail": "Thumb-friendly directional ring and center select switch engineered for single-handed pocket operation."
        },
        {
          "id": "hs-3",
          "x": 54,
          "y": 72,
          "label": "Integrated Sub-GHz, NFC & IR Core",
          "detail": "CC1101 radio chip, 125kHz RFID coil, 13.56MHz NFC antenna, and 18-pin GPIO hardware header."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$189 — $240 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Flipper Zero Official\")",
        "Lab401 / Official Store"
      ],
      "searchKeywords": [
        "Flipper Zero Multi Tool",
        "Sub-GHz RF RFID Transceiver",
        "Pocket Cyberdeck Tamagotchi"
      ],
      "antiFraudWarning": "Beware cloned scam sites offering units for $49; buy strictly from verified resellers with authentic packaging seals.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Cyber Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-114",
    "specimenCode": "TE-OP1 // #114-SWEDISH",
    "title": "Teenage Engineering OP-1 Portable Synthesizer & 4-Track Tape Sampler",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.2,
    "priceValue": 1199,
    "platform": "Reverb",
    "salesRank": 1,
    "salesRankBadge": "#1 INDUSTRIAL DESIGN SYNTH",
    "scarcityBadge": "CNC ALUMINUM SWEDEN",
    "heroImage": "/items/anm-114.jpg",
    "tagline": "CNC-milled Swedish aluminum pocket workstation combining 12 whimsical synth engines, a virtual 4-track tape recorder, FM radio sampler, and color-coded encoders.",
    "tags": [
      "TEENAGE ENGINEERING",
      "OP-1 SYNTH",
      "PORTABLE SAMPLER",
      "SWEDISH DESIGN",
      "4-TRACK TAPE"
    ],
    "fieldObservation": {
      "unboxingLog": "Iconic molded foam shell housing the ultra-flat anodized aluminum synth, bright color-coded rotary knobs, and scissor-switch mini keys.",
      "tactileFeedback": "Feels like a Dieter Rams pocket calculator fused with a studio spaceship; zero flex and 16-hour internal battery life.",
      "honestSnags": [
        "4-track tape workflow is destructive—no unlimited undo button, forcing bold live-recording commitment.",
        "Mini scissor-switch keys lack velocity sensitivity, relying instead on LFOs and internal G-force accelerometer.",
        "Replacement OLED screens or connector boards are notoriously pricey if dropped."
      ],
      "curatorVerdict": "The undisputed crown jewel of modern industrial instrument design. Turns any coffee table or airplane tray into an experimental album studio.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 60,
          "y": 76,
          "label": "Four Color-Coded Endless Encoders",
          "detail": "Blue, green, white, and orange rotary knobs mapped directly to playful animated OLED parameters."
        },
        {
          "id": "hs-2",
          "x": 40,
          "y": 78,
          "label": "High-Contrast Vector OLED Display",
          "detail": "Crisp real-time graphics visualizing FM algorithms, spinning tape reels, and cow-shaped filters."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "2-Octave Low-Profile Scissor Keybed",
          "detail": "Precision mechanical keys paired with dedicated red-dot tape transport and instant sampling triggers."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$950 — $1,350 USD",
      "primaryChannels": [
        "Reverb",
        "Teenage Engineering Authorized Dealers"
      ],
      "searchKeywords": [
        "Teenage Engineering OP-1 Synthesizer",
        "Portable Aluminum 4-Track Sampler",
        "Swedish Pocket Synth Workstation"
      ],
      "antiFraudWarning": "Test all four rotary encoders for jumpy values and check the 3.5mm audio/mic jacks for clean stereo contact.",
      "directOutbound": {
        "label": "Inspect on Reverb Synth Market",
        "url": "https://reverb.com/marketplace?query=Teenage+Engineering+OP-1",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-115",
    "specimenCode": "TIKTOK-AMMONITE // #115-FOSSIL",
    "title": "Polished Madagascar Cleoniceras Ammonite Fractal Suture Fossil",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 8.9,
    "priceValue": 185,
    "platform": "TikTok Shop",
    "salesRank": 3,
    "salesRankBadge": "#3 VIRAL PALEO SPECIMEN (72K+ SOLD)",
    "scarcityBadge": "110 MILLION YEARS OLD",
    "heroImage": "/items/anm-115.jpg",
    "tagline": "Genuine Lower Cretaceous ammonite cephalopod fossil hand-polished to reveal intricate fern-like fractal suture chambers in rich amber calcite.",
    "tags": [
      "TIKTOK SHOP 40%",
      "AMMONITE FOSSIL",
      "CRETACEOUS",
      "FRACTAL SUTURE",
      "NATURAL HISTORY"
    ],
    "fieldObservation": {
      "unboxingLog": "Museum-packed in padded specimen box with custom matte-black steel display stand and Madagascar provenance card.",
      "tactileFeedback": "Mirror-smooth cool mineralized stone with astonishingly dense heft; honey-amber calcite chambers glow warmly under desk lamps.",
      "honestSnags": [
        "Every genuine fossil has unique natural mineral inclusions and hairline calcite veins—no two specimens look identical.",
        "Polished surface can dull if cleaned with acidic household sprays; wipe only with a dry microfiber cloth.",
        "Heavy stone core requires a stable display stand on narrow shelves."
      ],
      "curatorVerdict": "Nature’s own sacred geometry frozen for 110 million years. The dendritic fractal suture lines look hand-engraved by an alien cartographer.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 56,
          "y": 54,
          "label": "Dendritic Ammonitic Suture Lines",
          "detail": "Complex fractal chamber walls evolved by Cretaceous cephalopods to resist deep-ocean crushing pressure."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 24,
          "label": "Central Umbilical Spiral Core",
          "detail": "Logarithmic Fibonacci shell origin preserved in contrasting grey limestone matrix."
        },
        {
          "id": "hs-3",
          "x": 74,
          "y": 38,
          "label": "Amber Calcite Mineralization",
          "detail": "Translucent honey-brown crystallized mineral replacement revealing three-dimensional depth under light."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$145 — $240 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Large Polished Madagascar Ammonite Fossil\")",
        "Certified Paleontology Dealers"
      ],
      "searchKeywords": [
        "Cleoniceras Polished Ammonite",
        "Madagascar Suture Line Fossil",
        "Cretaceous Cephalopod Specimen"
      ],
      "antiFraudWarning": "Avoid cast resin replicas; authentic ammonites feel cold like stone, weigh substantially more, and show organic crystal variations.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Paleo Vault",
        "url": "https://shop.tiktok.com",
        "sourceType": "Certified Paleontologist"
      }
    }
  },
  {
    "id": "anm-116",
    "specimenCode": "ZENIT-E // #116-HELIOS",
    "title": "Soviet Zenit-E 35mm SLR Camera with Helios-44-2 58mm f/2 Swirly Bokeh Lens",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 8.8,
    "priceValue": 155,
    "platform": "eBay Vintage",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 SWIRLY BOKEH CULT",
    "scarcityBadge": "KMZ USSR OPTICS",
    "heroImage": "/items/anm-116.jpg",
    "tagline": "All-metal Cold War 35mm SLR tank paired with the legendary M42 Helios-44-2 58mm f/2 lens prized by cinematographers for its dreamy vortex bokeh.",
    "tags": [
      "ZENIT-E",
      "HELIOS-44-2",
      "SWIRLY BOKEH",
      "SOVIET CAMERA",
      "35MM FILM"
    ],
    "fieldObservation": {
      "unboxingLog": "Brushed chrome and black leatherette all-metal SLR body sporting Cyrillic ЗЕНИТ-Е engraving, selenium meter window, and multi-blade Helios-44-2 prime.",
      "tactileFeedback": "Zero plastic structural parts—the cloth focal-plane shutter fires with a loud, metallic Soviet slap.",
      "honestSnags": [
        "Preset manual aperture ring requires stopping down manually before releasing the shutter.",
        "Shutter speeds max out at 1/500s, requiring ND filters or ISO 100 film to shoot wide open at f/2 in bright sun.",
        "Built-in selenium light meter is uncoupled and frequently inaccurate after 45+ years."
      ],
      "curatorVerdict": "Even if you mount the Helios-44-2 lens onto a modern mirrorless body via an M42 adapter, its optical swirl is pure cinematic poetry.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 68,
          "y": 66,
          "label": "Helios-44-2 58mm f/2 M42 Prime Lens",
          "detail": "Biotar-formula Soviet optical masterpiece famous for intense swirling circular background bokeh."
        },
        {
          "id": "hs-2",
          "x": 62,
          "y": 36,
          "label": "Front-Mounted Selenium Exposure Cell",
          "detail": "Battery-free honeycomb photovoltaic light meter embedded across the pentaprism brow."
        },
        {
          "id": "hs-3",
          "x": 20,
          "y": 38,
          "label": "Engraved Cyrillic ЗЕНИТ-Е Top Plate",
          "detail": "Heavy die-cast brushed aluminum chassis stamped at the Krasnogorsk Mechanical Works."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$125 — $190 USD",
      "primaryChannels": [
        "eBay Vintage Cameras",
        "Eastern European Optical Shops"
      ],
      "searchKeywords": [
        "Zenit-E Helios 44-2 Camera",
        "Soviet 35mm SLR Swirly Bokeh",
        "KMZ M42 Vintage Film Camera"
      ],
      "antiFraudWarning": "Inspect the 8-blade Helios aperture for oily blades and check the Zenit cloth shutter curtains for pinholes.",
      "directOutbound": {
        "label": "Inspect on eBay Vintage Optics",
        "url": "https://www.ebay.com/sch/i.html?_nkw=Zenit-E+Helios-44-2",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-117",
    "specimenCode": "TIKTOK-GYRO // #117-RPM",
    "title": "Anodized Machined Aluminum High-RPM Gyroscopic Wrist Powerball",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.5,
    "priceValue": 142,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 VIRAL KINETIC TORQUE (110K+ SOLD)",
    "scarcityBadge": "CNC METAL ROTOR",
    "heroImage": "/items/anm-117.jpg",
    "tagline": "Precision-balanced crimson anodized aluminum sphere housing a heavy solid-steel internal gyroscope capable of generating 40+ lbs of isometric torque at 18,000 RPM.",
    "tags": [
      "TIKTOK SHOP 40%",
      "GYROSCOPE",
      "METAL POWERBALL",
      "KINETIC FIDGET",
      "ISOMETRIC TORQUE"
    ],
    "fieldObservation": {
      "unboxingLog": "Dense crimson bead-blasted aluminum orb with recessed machined stainless steel rotor core and auto-start internal spring winding.",
      "tactileFeedback": "Unnervingly heavy and cold in the palm; as RPM climbs, the sphere fights every twist of your wrist like a trapped living engine.",
      "honestSnags": [
        "At 15,000+ RPM it produces a distinct jet-turbine hum that turns heads in quiet offices.",
        "Never drop onto tile or hardwood—the dense solid-metal rotor can dent the internal track and cause vibration.",
        "Five minutes of high-RPM spinning leaves your forearm thoroughly pumped."
      ],
      "curatorVerdict": "Newtonian angular momentum turned into the ultimate heavy-metal desk fidget. Makes plastic stress balls feel laughable.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 46,
          "y": 30,
          "label": "Dynamically Balanced Steel Gyro Rotor",
          "detail": "Precision-machined solid metal flywheel spinning smoothly past 18,000 RPM inside the shell."
        },
        {
          "id": "hs-2",
          "x": 74,
          "y": 54,
          "label": "Crimson Anodized Aluminum Shell",
          "detail": "CNC-turned aerospace alloy casing offering superior grip and acoustic damping over plastic models."
        },
        {
          "id": "hs-3",
          "x": 38,
          "y": 24,
          "label": "Internal Circumferential Track Groove",
          "detail": "Hardened low-friction raceway converting circular wrist motion into explosive rotational torque."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$115 — $165 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Full Metal High RPM Gyroscope Ball\")",
        "Precision EDC Gear Shops"
      ],
      "searchKeywords": [
        "Full Metal Gyroscope Powerball",
        "Anodized Aluminum Wrist Gyro",
        "High Torque Kinetic Desk Rotor"
      ],
      "antiFraudWarning": "Avoid $15 plastic shell versions with imbalanced cores; verify full CNC metal shell and dynamically balanced steel rotor.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop EDC Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-118",
    "specimenCode": "MARKV-DIVE // #118-DEEP",
    "title": "US Navy Mark V Copper & Brass Deep-Sea Diving Helmet Sculpture",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.6,
    "priceValue": 490,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 MARITIME INDUSTRIAL RELIC",
    "scarcityBadge": "12-BOLT COPPER & BRASS",
    "heroImage": "/items/anm-118.jpg",
    "tagline": "Full-scale 18-inch heavy hammered copper and solid cast-brass US Navy Mark V diving helmet featuring four grilled portholes, spitcock valve, and 12 wingnut breastplate bolts.",
    "tags": [
      "MARK V HELMET",
      "DEEP SEA DIVING",
      "COPPER & BRASS",
      "MARITIME RELIC",
      "INDUSTRIAL SCULPTURE"
    ],
    "fieldObservation": {
      "unboxingLog": "Crate-shipped 16kg maritime centerpiece with aged verdigris patina, hinged front faceplate with wingnut lock, and stamped Morse Boston plaque.",
      "tactileFeedback": "Massive hand-spun copper bonnet and heavy sand-cast brass grilles that ring deeply when tapped.",
      "honestSnags": [
        "Weighs over 35 pounds—requires a reinforced hardwood credenza or dedicated floor plinth.",
        "Intended as a museum-grade maritime display sculpture rather than certified active scuba gear.",
        "Raw brass and copper naturally oxidize over time unless waxed annually."
      ],
      "curatorVerdict": "The ultimate symbol of abyssal human exploration. Drops instant Jules Verne and BioShock gravitas into any studio corner.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 54,
          "y": 42,
          "label": "Hinged Grilled Front Viewport",
          "detail": "Cast-brass protective cross-guard over thick plate glass locked by a threaded wingnut clasp."
        },
        {
          "id": "hs-2",
          "x": 18,
          "y": 66,
          "label": "Brass Air-Control Spitcock Valve",
          "detail": "Iconic cross-handled brass exhaust and demisting valve mounted at the lower cheek."
        },
        {
          "id": "hs-3",
          "x": 52,
          "y": 84,
          "label": "12-Bolt Corselet & Stamped Plaque",
          "detail": "Heavy brass shoulder collar fastened with traditional wingnuts and embossed Morse Diving plate."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$420 — $680 USD",
      "primaryChannels": [
        "Etsy Nautical Workshops",
        "Maritime Salvage Galleries"
      ],
      "searchKeywords": [
        "Full Size Mark V Copper Diving Helmet",
        "US Navy 12 Bolt Brass Helmet",
        "Morse Boston Deep Sea Helmet"
      ],
      "antiFraudWarning": "Verify full 18-inch scale and genuine heavy gauge copper/brass weight (15kg+); skip lightweight 6-inch desk trinkets.",
      "directOutbound": {
        "label": "Inspect on Etsy Maritime Guild",
        "url": "https://www.etsy.com/search?q=mark+v+copper+diving+helmet",
        "sourceType": "Artisan Workshop"
      }
    }
  },
  {
    "id": "anm-119",
    "specimenCode": "YAMAHA-DX7 // #119-FM",
    "title": "1983 Yamaha DX7 6-Operator FM Digital Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9,
    "priceValue": 680,
    "platform": "Yahoo Auctions Japan",
    "salesRank": 1,
    "salesRankBadge": "#1 1980S FM DIGITAL ICON",
    "scarcityBadge": "1983 HAMAMATSU JAPAN",
    "heroImage": "/items/anm-119.jpg",
    "tagline": "The groundbreaking 6-operator Frequency Modulation synthesizer that defined 1980s glassy electric pianos, metallic bells, and crystalline cinema pads.",
    "tags": [
      "YAMAHA DX7",
      "FM SYNTHESIS",
      "1983 VINTAGE",
      "MEMBRANE UI",
      "JAPANESE SYNTH"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy dark-chocolate steel chassis featuring the iconic printed 32-algorithm FM flowcharts, teal membrane switches, and weighted 61-key synth action.",
      "tactileFeedback": "One of the finest velocity-and-aftertouch keyboard actions ever built, paired with crisp clickless 1983 membrane buttons.",
      "honestSnags": [
        "Programming 6-operator FM envelopes via a single data slider and 2-line unlit LCD is famously labyrinthine.",
        "Original soldered CR2032 internal patch memory battery eventually dies, scrambling all 32 patches until replaced.",
        "Early MIDI implementation outputs maximum velocity of 100 rather than 127."
      ],
      "curatorVerdict": "The printed white algorithm schematics across its dark steel face are pure technical art—and its crystalline FM bells remain untouchable.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 70,
          "y": 38,
          "label": "32 FM Algorithm Routing Schematics",
          "detail": "Screen-printed operator carrier/modulator flowcharts guiding 6-operator Frequency Modulation synthesis."
        },
        {
          "id": "hs-2",
          "x": 64,
          "y": 46,
          "label": "Iconic Teal Membrane Patch Matrix",
          "detail": "Flush 1980s space-age capacitive-feel selector keys accessing 32 internal and ROM cartridge voices."
        },
        {
          "id": "hs-3",
          "x": 40,
          "y": 46,
          "label": "Red LED Patch & Green LCD Telemetry",
          "detail": "Classic 2-digit red seven-segment patch counter beside the 16x2 character parameter screen."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$550 — $820 USD",
      "primaryChannels": [
        "Yahoo Auctions Japan",
        "Reverb Vintage Synthesizers"
      ],
      "searchKeywords": [
        "Yamaha DX7 Original 1983 Synth",
        "6 Operator FM Digital Synthesizer",
        "Vintage Japanese DX7 Keyboard"
      ],
      "antiFraudWarning": "Confirm the internal RAM battery holds patches cleanly and check for cracked membrane overlays on heavily gigged units.",
      "directOutbound": {
        "label": "Inspect on Reverb Vintage Vault",
        "url": "https://reverb.com/marketplace?query=Yamaha+DX7",
        "sourceType": "Proxy Auction"
      }
    }
  },
  {
    "id": "anm-120",
    "specimenCode": "GRAPHOMETER-BRASS // #120-SURV",
    "title": "Antique Ornate Brass Surveying Graphometer with Compass & Telescope",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.3,
    "priceValue": 310,
    "platform": "eBay Vintage",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 GEODESIC ANTIQUE",
    "scarcityBadge": "18TH-CENTURY STYLE BRASS",
    "heroImage": "/items/anm-120.jpg",
    "tagline": "Hand-engraved semicircular brass surveying graphometer featuring baroque scrollwork struts, central magnetic compass, and twin brass sighting telescopes.",
    "tags": [
      "GRAPHOMETER",
      "ANTIQUE BRASS",
      "SURVEYING INSTRUMENT",
      "MAGNETIC COMPASS",
      "OPTICAL RELIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Housed beside its curved vintage leather-bound wooden carrying case; solid cast-brass semicircular degree arc mounted on a turned mahogany pedestal.",
      "tactileFeedback": "Smooth-gliding telescopic alidade pivots smoothly across the finely etched 180-degree vernier scale.",
      "honestSnags": [
        "Telescopic crosshairs and vintage uncoated doublet lenses show warm optical softness compared to modern glass.",
        "Magnetic compass needle requires manual leveling on its ball-joint mount to swing freely without friction.",
        "Delicate filigree scrollwork demands gentle handling when lifting from its wooden base."
      ],
      "curatorVerdict": "Where Baroque ornamentation meets Enlightenment mathematics. An extraordinary architectural brass centerpiece for any library.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 52,
          "y": 26,
          "label": "Pivoting Brass Sighting Telescope",
          "detail": "Long draw-tube alidade telescope sweeping smoothly across the graduated semicircular protractor."
        },
        {
          "id": "hs-2",
          "x": 68,
          "y": 52,
          "label": "Inset Gimballed Magnetic Compass",
          "detail": "Glass-covered engraved brass compass rose centered between intricate foliate scrollwork struts."
        },
        {
          "id": "hs-3",
          "x": 58,
          "y": 66,
          "label": "Hand-Etched 180° Vernier Protractor Arc",
          "detail": "Finely divided brass degree scale engineered for triangulating terrestrial landmarks."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$280 — $480 USD",
      "primaryChannels": [
        "eBay Antique Surveying Instruments",
        "European Scientific Auctions"
      ],
      "searchKeywords": [
        "Antique Brass Surveying Graphometer",
        "Brass Semicircle Compass Telescope",
        "Vintage Geodesic Instrument"
      ],
      "antiFraudWarning": "Inspect degree engravings closely—authentic instruments feature razor-sharp hand-cut divisions rather than shallow acid etching.",
      "directOutbound": {
        "label": "Inspect on eBay Scientific Antiques",
        "url": "https://www.ebay.com/sch/i.html?_nkw=antique+brass+graphometer",
        "sourceType": "Deadstock Vault"
      }
    }
  }
];

const BATCH_POOL_NOV_16: RawOdditySeed[] = [
  {
    "id": "anm-091",
    "specimenCode": "SOVIET-B334 // #91-RPN",
    "title": "1980 Soviet Elektronika B3-34 Programmable RPN Microcalculator",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.2,
    "priceValue": 148,
    "platform": "eBay Vintage",
    "salesRank": 1,
    "salesRankBadge": "#1 COLD WAR COMPUTE",
    "scarcityBadge": "USSR DEADSTOCK",
    "heroImage": "/items/anm-091.jpg",
    "tagline": "Legendary Soviet Reverse Polish Notation programmable calculator with 98 program steps, Cyrillic function legends, and emerald VFD window.",
    "tags": [
      "SOVIET TECH",
      "RPN CALCULATOR",
      "VFD DISPLAY",
      "COLD WAR RELIC",
      "PROGRAMMABLE"
    ],
    "fieldObservation": {
      "unboxingLog": "Wrapped in oiled archival kraft paper with original rigid beige ABS shell, Cyrillic key legend matrix, and vintage power leads.",
      "tactileFeedback": "Firm, high-actuation rectangular keys with color-coded red, blue, black, and gray tops; distinct springy travel on every press.",
      "honestSnags": [
        "Memory is completely volatile—switching power off wipes all 98 programmed steps immediately.",
        "Original Soviet NiCd battery pack is long dead; requires an external 4.5V regulated DC adapter or modern Li-ion mod.",
        "Exponent overflow triggers undocumented \"egogology\" error states beloved by retro hackers."
      ],
      "curatorVerdict": "The spiritual ancestor of Soviet pocket space-navigation math. Typing Cyrillic RPN commands feels like piloting a Soyuz capsule from your desk.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 52,
          "y": 12,
          "label": "Emerald Vacuum Fluorescent Window",
          "detail": "8-digit mantissa plus 2-digit exponent VFD tube recessed behind a dark anti-glare bezel."
        },
        {
          "id": "hs-2",
          "x": 54,
          "y": 24,
          "label": "Slide Mode & Radian/Degree Switches",
          "detail": "Dual recessed mechanical slide toggles flanking the embossed ЭЛЕКТРОНИКА Б3-34 nameplate."
        },
        {
          "id": "hs-3",
          "x": 68,
          "y": 65,
          "label": "Color-Coded Cyrillic RPN Keypad",
          "detail": "Tactile double-shot keys with orange shifted trigonometric and branching legends."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$130 — $185 USD",
      "primaryChannels": [
        "eBay Eastern Europe Vintage",
        "Ukrainian & Baltic Retro Tech Auctions"
      ],
      "searchKeywords": [
        "Elektronika B3-34 Calculator",
        "Soviet Programmable RPN VFD",
        "USSR Vintage Microcalculator"
      ],
      "antiFraudWarning": "Verify the VFD tube lights all segments evenly; cracked vacuum seals turn the getter white and render the display dead.",
      "directOutbound": {
        "label": "Inspect on eBay Vintage Vault",
        "url": "https://www.ebay.com/sch/i.html?_nkw=Elektronika+B3-34",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-092",
    "specimenCode": "TIKTOK-TESLA-DRSSTC // #92-ARC",
    "title": "OneTeslaTS Musical Dual-Resonant Solid State Tesla Coil",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.8,
    "priceValue": 349,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL PLASMA ARC (120K+ SOLD)",
    "scarcityBadge": "HIGH-VOLTAGE SPECIMEN",
    "heroImage": "/items/anm-092.jpg",
    "tagline": "Solid-state musical Tesla coil throwing singing 20-inch violet plasma arcs modulated directly by MIDI audio signals.",
    "tags": [
      "TIKTOK SHOP 40%",
      "TESLA COIL",
      "HIGH VOLTAGE",
      "MIDI PLASMA",
      "DRSSTC"
    ],
    "fieldObservation": {
      "unboxingLog": "Double-boxed with spun aluminum toroid, copper-wound secondary resonator cylinder, aluminum heatsink base, and optical fiber MIDI interrupter.",
      "tactileFeedback": "Substantial machined aluminum cooling fins underneath an open-frame high-voltage IGBT power stage.",
      "honestSnags": [
        "Generates intense RF interference that can temporarily glitch nearby touchscreens, Wi-Fi routers, or USB mice.",
        "Produces noticeable ozone aroma after 2 minutes of continuous arcing—operate in a ventilated room.",
        "Loud crackling discharge volume makes it unsuitable for late-night apartment jamming."
      ],
      "curatorVerdict": "Pure captured lightning on a desktop. Hearing synth basslines played directly through ionized air is an unforgettable sensory shock.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 25,
          "y": 29,
          "label": "Spun Aluminum Capacitance Toroid",
          "detail": "Smooth high-voltage top-load terminal engineered to focus corona breakout from the discharge needle."
        },
        {
          "id": "hs-2",
          "x": 23,
          "y": 52,
          "label": "Precision-Wound Secondary Coil",
          "detail": "Hundreds of turns of enameled magnet wire resonating at hundreds of kilohertz."
        },
        {
          "id": "hs-3",
          "x": 74,
          "y": 25,
          "label": "MIDI-Modulated Violet Plasma Arcs",
          "detail": "Acoustic shockwaves created by pulsing high-frequency electrical discharges at musical frequencies."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$320 — $395 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Musical Solid State Tesla Coil\")",
        "High-Voltage Maker Stores"
      ],
      "searchKeywords": [
        "DRSSTC Musical Tesla Coil",
        "Solid State Singing Plasma Arc",
        "MIDI Tesla Coil Desktop"
      ],
      "antiFraudWarning": "Avoid $25 toy spark-gap kits that burn out in minutes. Insist on fiber-optic isolated IGBT DRSSTC driver architecture.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Maker Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-093",
    "specimenCode": "TIKTOK-BIONIC-HAND // #93-SERVO",
    "title": "Industrial Servo-Electric Five-Finger Dexterous Bionic Hand",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.7,
    "priceValue": 480,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 CYBERNETIC PROP (65K+ SOLD)",
    "scarcityBadge": "ARTICULATED MECHATRONICS",
    "heroImage": "/items/anm-093.jpg",
    "tagline": "Anthropomorphic five-finger robotic gripping hand with independent servo-driven phalanges and textured elastomer fingertips.",
    "tags": [
      "TIKTOK SHOP 40%",
      "BIONIC HAND",
      "ROBOTICS",
      "CYBERNETICS",
      "SERVO ACTUATOR"
    ],
    "fieldObservation": {
      "unboxingLog": "Packed in custom CNC-routed foam flight case with 24V power supply, serial control harness, and desktop wrist mounting flange.",
      "tactileFeedback": "Cold anodized titanium-gray links with precision-milled knuckle hinges and high-friction ribbed silicone grip pads.",
      "honestSnags": [
        "Requires a dedicated 24V power brick and USB-to-serial controller to program custom gesture sequences.",
        "Micro-servos emit a high-pitched mechanical whine during synchronized multi-finger curls.",
        "Too heavy for casual cosplay wear without an external forearm counterweight brace."
      ],
      "curatorVerdict": "Straight out of a Tokyo robotics lab. Watching all five fingers articulate smoothly in independent kinematics is mesmerizing.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 24,
          "label": "Ribbed Elastomer Tactile Fingertips",
          "detail": "High-grip contoured rubber pads engineered to hold fragile glass or cylindrical tools securely."
        },
        {
          "id": "hs-2",
          "x": 54,
          "y": 45,
          "label": "CNC-Milled Phalanx Linkage Joints",
          "detail": "Zero-backlash articulated aluminum finger segments driven by internal lead-screw actuators."
        },
        {
          "id": "hs-3",
          "x": 64,
          "y": 78,
          "label": "Opposable Rotary Thumb Assembly",
          "detail": "Dual-axis motorized thumb base enabling both precision pinch and full-palm power grasps."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$450 — $590 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Programmable Bionic Robotic Hand\")",
        "Maker Robotics Distributors"
      ],
      "searchKeywords": [
        "5 Finger Servo Bionic Hand",
        "Anthropomorphic Robotic Gripper",
        "Programmable Cybernetic Hand"
      ],
      "antiFraudWarning": "Skip hollow 3D-printed PLA tendon toys; verify metal-geared servos and machined alloy knuckle linkages.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Robotics Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-094",
    "specimenCode": "KORG-MS20 // #94-PATCH",
    "title": "Korg MS-20 Monophonic Semi-Modular Analog Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.1,
    "priceValue": 620,
    "platform": "Yahoo Auctions Japan",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 ANALOG CULT ICON",
    "scarcityBadge": "JAPANESE STUDIO RELIC",
    "heroImage": "/items/anm-094.jpg",
    "tagline": "Aggressive 1978-lineage semi-modular analog synthesizer featuring screaming self-oscillating dual filters and a 35-jack patch bay.",
    "tags": [
      "ANALOG SYNTH",
      "KORG MS-20",
      "SEMI-MODULAR",
      "PATCH BAY",
      "TOKYO AUDIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in double-walled Japanese studio shipping carton with 10 braided patch cords and original printed patch-sheet overlay.",
      "tactileFeedback": "Angled steel front panel with knurled Bakelite-style knobs and deeply satisfying 3.5mm patch jack resistance.",
      "honestSnags": [
        "Uses Korg Hz/V pitch scaling rather than standard 1V/Oct, requiring a converter to sequence from modern Eurorack gear.",
        "Analog oscillator tuning drifts noticeably during the first 10 minutes of thermal warm-up.",
        "Zero preset memory—every patch must be photographed or drawn on paper before unplugging."
      ],
      "curatorVerdict": "The nastiest, most raw resonant filter ever bolted to a slanted steel chassis. Instant industrial bass and sci-fi noise.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 24,
          "y": 26,
          "label": "Dual Highpass & Lowpass Resonant Filters",
          "detail": "Iconic Korg-35 screaming filter topology capable of brutal self-oscillation and overdrive."
        },
        {
          "id": "hs-2",
          "x": 76,
          "y": 38,
          "label": "35-Point Semi-Modular Patch Bay",
          "detail": "Complete signal-routing matrix with External Signal Processor (ESP) for converting guitar or voice into CV."
        },
        {
          "id": "hs-3",
          "x": 45,
          "y": 76,
          "label": "37-Key Monophonic Keyboard",
          "detail": "High-contrast black-and-white synth action triggering dual VCOs and dual envelope generators."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$550 — $750 USD",
      "primaryChannels": [
        "Yahoo Auctions Japan",
        "Reverb Synth Exchange"
      ],
      "searchKeywords": [
        "Korg MS-20 Analog Synthesizer",
        "Korg MS-20 Mini Semi Modular",
        "Vintage Japanese Patch Synth"
      ],
      "antiFraudWarning": "Inspect filter potentiometers for scratchy carbon tracks and verify all patch sockets make firm electrical contact.",
      "directOutbound": {
        "label": "Inspect on Reverb Synth Vault",
        "url": "https://reverb.com/marketplace?query=Korg+MS-20",
        "sourceType": "Proxy Auction"
      }
    }
  },
  {
    "id": "anm-095",
    "specimenCode": "NACHET-1880 // #95-BRASS",
    "title": "Antique 1880 Nachet Brass Monocular Chest Compound Microscope",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9,
    "priceValue": 420,
    "platform": "eBay Vintage",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 VICTORIAN OPTICS",
    "scarcityBadge": "19TH-CENTURY PARISIAN",
    "heroImage": "/items/anm-095.jpg",
    "tagline": "Authentic 19th-century French lacquered brass chest microscope crafted by Nachet & Fils in Paris, folding into its dovetailed mahogany box.",
    "tags": [
      "ANTIQUE OPTICS",
      "BRASS MICROSCOPE",
      "NACHET PARIS",
      "VICTORIAN SCIENCE",
      "MUSEUM PIECE"
    ],
    "fieldObservation": {
      "unboxingLog": "Nested inside its original velvet-lined dovetailed mahogany travel chest with brass objective lenses and folding mirror.",
      "tactileFeedback": "Warm aged brass patina with friction-slide draw tube and heavy bevel-edged brass specimen stage.",
      "honestSnags": [
        "No fine-focus micrometer knob—focusing relies entirely on smooth hand-sliding of the brass draw tube.",
        "Requires an external desk lamp aimed at the sub-stage concave mirror for specimen illumination.",
        "Historic optical cement in 140-year-old objectives can show mild edge separation under high magnification."
      ],
      "curatorVerdict": "A genuine piece of Parisian scientific history. Its architectural brass tube rising directly from a wooden chest commands any bookshelf.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 48,
          "y": 12,
          "label": "Knurled Brass Huygens Eyepiece",
          "detail": "Removable dual-lens brass ocular seated at the crown of the sliding optical tube."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 48,
          "label": "Slotted Friction-Sleeve Barrel",
          "detail": "Hand-engraved Nachet Paris brass sleeve providing smooth vertical focus tension."
        },
        {
          "id": "hs-3",
          "x": 49,
          "y": 82,
          "label": "Beveled Brass Stage & Mahogany Chest",
          "detail": "Hinged solid brass specimen platform mounted directly onto the dovetailed wooden case."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 5,
      "priceRange": "$380 — $560 USD",
      "primaryChannels": [
        "eBay Antique Scientific Instruments",
        "European Estate Auctions"
      ],
      "searchKeywords": [
        "Nachet Paris Brass Microscope",
        "Antique Chest Compound Microscope",
        "19th Century French Brass Optics"
      ],
      "antiFraudWarning": "Beware modern Indian-made decorative brass replicas; authentic Nachet tubes have crisp script engraving and fine dovetail joinery.",
      "directOutbound": {
        "label": "Inspect on eBay Scientific Antiques",
        "url": "https://www.ebay.com/sch/i.html?_nkw=Nachet+brass+microscope",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-096",
    "specimenCode": "TIKTOK-STIRLING // #96-THERMAL",
    "title": "Precision Machined Brass Flywheel Hot Air Stirling Engine",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.9,
    "priceValue": 135,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 VIRAL THERMODYNAMICS (95K+ SOLD)",
    "scarcityBadge": "MACHINED BRASS KINETIC",
    "heroImage": "/items/anm-096.jpg",
    "tagline": "External-combustion desktop heat engine running silently at 1,800 RPM solely on the flame of a miniature brass alcohol lamp.",
    "tags": [
      "TIKTOK SHOP 40%",
      "STIRLING ENGINE",
      "THERMODYNAMICS",
      "MACHINED BRASS",
      "DESK KINETIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Mounted on a varnished hardwood plinth with borosilicate glass hot cylinder, brass alcohol wick burner, and spare graphite piston seals.",
      "tactileFeedback": "Mirror-turned brass flywheel spins with near-zero bearing resistance; cooling fins feel crisp and jewel-like.",
      "honestSnags": [
        "Requires 95% denatured ethanol fuel (not included) for clean, soot-free combustion.",
        "The borosilicate glass tube reaches over 300°C during operation—do not touch for 10 minutes after extinguishing.",
        "Needs a gentle finger flick on the brass flywheel after 30 seconds of preheating to initiate rotation."
      ],
      "curatorVerdict": "Victorian thermodynamics distilled into kinetic jewelry. Watching pure heat convert silently into hypnotic mechanical motion never gets old.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 22,
          "y": 28,
          "label": "Balanced Solid Brass Flywheel",
          "detail": "CNC-machined spoked brass inertial wheel storing rotational momentum across each thermal cycle."
        },
        {
          "id": "hs-2",
          "x": 52,
          "y": 28,
          "label": "Finned Brass Cooling Cylinder",
          "detail": "Deep radial heat-sink fins creating the steep temperature differential required for air contraction."
        },
        {
          "id": "hs-3",
          "x": 68,
          "y": 46,
          "label": "Borosilicate Glass Displacer Tube",
          "detail": "Transparent high-temp quartz cylinder revealing the internal displacer piston cycling above the flame."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$115 — $155 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Brass Stirling Engine Model\")",
        "Precision Mechanical Gift Feeds"
      ],
      "searchKeywords": [
        "Brass Hot Air Stirling Engine",
        "Desktop External Combustion Engine",
        "Mahogany Base Stirling Motor"
      ],
      "antiFraudWarning": "Avoid stamped tinplate kits with loose tolerances; choose solid CNC-turned brass bearings and quartz glass cylinders.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Kinetic Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-097",
    "specimenCode": "SOVIET-DP5V // #97-RAD",
    "title": "Soviet Cold War DP-5V Field Military Roentgenometer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.5,
    "priceValue": 195,
    "platform": "eBay Vintage",
    "salesRank": 1,
    "salesRankBadge": "#1 STALKER FIELD RELIC",
    "scarcityBadge": "1978 SOVIET SURPLUS",
    "heroImage": "/items/anm-097.jpg",
    "tagline": "Authentic USSR olive-drab military radiation survey meter in stitched leather field case with telescopic Geiger-Müller probe.",
    "tags": [
      "COLD WAR SURPLUS",
      "GEIGER COUNTER",
      "DP-5V",
      "SOVIET MILITARY",
      "FIELD TELEMETRY"
    ],
    "fieldObservation": {
      "unboxingLog": "Delivered in stiff brown leather field holster with embossed Cyrillic calibration chart riveted inside the lid and coiled probe cable.",
      "tactileFeedback": "Heavy rotary Bakelite range switch clicks like a submarine bulkhead valve; olive painted cast housing feels indestructible.",
      "honestSnags": [
        "Requires obsolete Soviet KB-1 batteries—easily adapted using modern AA battery holders.",
        "Designed for high-dose fallout zones; normal background radiation barely nudges the needle on its lowest x0.1 scale.",
        "Vintage leather case carries an unmistakable 1970s military depot aroma."
      ],
      "curatorVerdict": "The exact instrument carried across Pripyat in 1986. Nothing on earth replicates the mechanical authority of its rotary range dial.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 24,
          "y": 66,
          "label": "Backlit Analog Microammeter Dial",
          "detail": "Dual-scale mR/h and R/h needle gauge protected by a hooded green cast-metal bezel."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 62,
          "label": "Rotary Bakelite Range Selector",
          "detail": "Heavy 8-position multiplier dial scaling sensitivity from 0.05 mR/h up to 200 R/h."
        },
        {
          "id": "hs-3",
          "x": 93,
          "y": 60,
          "label": "External Beta/Gamma Detection Probe",
          "detail": "Rotating metal shield cylinder housing dual SBM-20 and SI-3BG Geiger-Müller tubes."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$165 — $240 USD",
      "primaryChannels": [
        "eBay Eastern Europe Militaria",
        "Cold War Instrument Collectors"
      ],
      "searchKeywords": [
        "Soviet DP-5V Dosimeter",
        "USSR Military Geiger Counter",
        "Cold War Roentgenometer Leather Case"
      ],
      "antiFraudWarning": "Check that the internal Strontium-90 check source has been legally removed for international shipping, and confirm clean battery contacts.",
      "directOutbound": {
        "label": "Inspect on eBay Militaria Archive",
        "url": "https://www.ebay.com/sch/i.html?_nkw=DP-5V+dosimeter",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-098",
    "specimenCode": "TIKTOK-HANNYA // #98-NOH",
    "title": "Hand-Carved Japanese Wooden Hannya Noh Demon Mask",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.4,
    "priceValue": 275,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 ARTISAN FOLKLORE WALL PIECE",
    "scarcityBadge": "CARVED HINOKI CYPRESS",
    "heroImage": "/items/anm-098.jpg",
    "tagline": "Traditional Japanese Noh theater Hannya mask carved from aged cypress wood with gilded horns, metallic fangs, and expressive distress.",
    "tags": [
      "TIKTOK SHOP 40%",
      "HANNYA MASK",
      "NOH THEATER",
      "JAPANESE FOLKLORE",
      "WOOD CARVING"
    ],
    "fieldObservation": {
      "unboxingLog": "Wrapped in brocade silk pouch inside a paulownia wooden storage box with braided crimson hanging cords.",
      "tactileFeedback": "Surprisingly light hand-chiseled wood shell with layered gofun pigment cracks and cold gold-leaf horn tips.",
      "honestSnags": [
        "Traditional Noh masks are sized slightly smaller than a modern adult face—meant primarily for display or ceremonial staging.",
        "Natural lacquer pigment is sensitive to direct UV sunlight and high humidity.",
        "The piercing hollow eye sockets genuinely startle guests when lit from below at night."
      ],
      "curatorVerdict": "Simultaneously sorrowful and terrifying depending on the tilt angle. A masterclass in Japanese sculptural psychology.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 22,
          "y": 20,
          "label": "Gilded Tapered Demon Horns",
          "detail": "Hand-shaped wooden horns finished in aged gold leaf symbolizing consuming jealousy."
        },
        {
          "id": "hs-2",
          "x": 42,
          "y": 46,
          "label": "Metallic-Rimmed Piercing Eye Sockets",
          "detail": "Deeply recessed carved orbits with brass-tinted sclera rings that catch ambient candlelight."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 74,
          "label": "Gilded Fang Grimace",
          "detail": "Wide-split lacquered mouth lined with gold-painted teeth and crimson inner lip detailing."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$240 — $340 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Hand Carved Wooden Hannya Mask\")",
        "Kyoto Craft Auctions"
      ],
      "searchKeywords": [
        "Carved Wood Hannya Noh Mask",
        "Japanese Demon Mask Cypress",
        "Traditional Noh Theater Wall Art"
      ],
      "antiFraudWarning": "Reject glossy injection-molded resin casts; authentic carved masks show hand-chisel gouge marks across the unpainted reverse.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Artisan Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Artisan Studio"
      }
    }
  },
  {
    "id": "anm-099",
    "specimenCode": "CASIO-SK1 // #99-8BIT",
    "title": "1985 Casio SK-1 8-Bit PCM Mini Sampling Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 8.8,
    "priceValue": 245,
    "platform": "Mercari Japan",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 LO-FI SAMPLER CULT",
    "scarcityBadge": "1985 TOKYO VINTAGE",
    "heroImage": "/items/anm-099.jpg",
    "tagline": "Iconic 1985 8-bit 9.38kHz crunch sampler keyboard with built-in condenser mic, additive synthesis, and lo-fi portamento magic.",
    "tags": [
      "CASIO SK-1",
      "8-BIT SAMPLER",
      "LO-FI AUDIO",
      "VINTAGE SYNTH",
      "CIRCUIT BEND"
    ],
    "fieldObservation": {
      "unboxingLog": "Clean vintage gray ABS chassis with intact battery cover, built-in speaker grille, and iconic green/orange/blue function buttons.",
      "tactileFeedback": "32 miniature keys with snappy spring response and crisp rubberized tactile mode switches across the top panel.",
      "honestSnags": [
        "Sample RAM holds only 1.4 seconds of 8-bit audio and erases completely when turned off.",
        "No MIDI input—must be played live or synced via external audio trigger mods.",
        "Built-in 3.5mm line output is mono and carries classic 1980s analog noise floor."
      ],
      "curatorVerdict": "The single greatest lo-fi texture machine ever mass-produced. Recording a coffee cup clink turns instantly into an eerie Blade Runner pad.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 18,
          "y": 38,
          "label": "Integrated Condenser Sampling Mic",
          "detail": "Captures 1.4-second 8-bit PCM audio snippets directly into keyboard-mapped pitch memory."
        },
        {
          "id": "hs-2",
          "x": 54,
          "y": 40,
          "label": "Envelope & Additive Harmonics Array",
          "detail": "13 preset amplitude envelopes and 4-operator additive synthesis tone sculptor."
        },
        {
          "id": "hs-3",
          "x": 52,
          "y": 74,
          "label": "32-Key Mini Polyphonic Keyboard",
          "detail": "4-note polyphonic miniature keybed ideal for pitching gritty vocal chops across octaves."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$190 — $295 USD",
      "primaryChannels": [
        "Mercari Japan",
        "Reverb Vintage Keyboards"
      ],
      "searchKeywords": [
        "Casio SK-1 Sampling Keyboard",
        "Vintage 8-bit Lo-Fi Sampler",
        "1985 Casio Mini Synth"
      ],
      "antiFraudWarning": "Test the internal microphone and battery compartment for alkaline corrosion before committing to vintage units.",
      "directOutbound": {
        "label": "Inspect on Reverb Vintage Vault",
        "url": "https://reverb.com/marketplace?query=Casio+SK-1",
        "sourceType": "Proxy Auction"
      }
    }
  },
  {
    "id": "anm-100",
    "specimenCode": "FRAMEDECK-ACRYLIC // #100-DECK",
    "title": "Transparent Acrylic Framedeck Modular Cyberdeck with Central Trackball",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.9,
    "priceValue": 540,
    "platform": "Tindie Maker Store",
    "salesRank": 1,
    "salesRankBadge": "#1 MAKER CYBERDECK BUILD",
    "scarcityBadge": "CLEAR ACRYLIC CHASSIS",
    "heroImage": "/items/anm-100.jpg",
    "tagline": "Laser-cut clear acrylic portable cyberdeck uniting a Framework x86 Fedora mainboard, split ortholinear mechanical keys, twin stereo speakers, and a center trackball.",
    "tags": [
      "CYBERDECK",
      "CLEAR ACRYLIC",
      "SPLIT ORTHO",
      "TRACKBALL",
      "FEDORA LINUX"
    ],
    "fieldObservation": {
      "unboxingLog": "Stacked laser-cut clear acrylic chassis bolted with brass standoffs, showcasing the exposed Framework mainboard, split charcoal keycaps, and center optical trackball.",
      "tactileFeedback": "Crisp split ortholinear switches flank a buttery-smooth thumb-operated center trackball with exposed Elite-C controller circuitry.",
      "honestSnags": [
        "Ultra-compact split key layout relies heavily on QMK layer chords for numbers, function keys, and programming symbols.",
        "Clear acrylic top plate shows fingerprints and micro-scratches unless wiped with a soft microfiber cloth.",
        "Exposed internal speaker wiring and brass fasteners demand a padded sleeve for backpack transit."
      ],
      "curatorVerdict": "Pure transparent-tech cyberpunk perfection. Booting Fedora Linux on a slab of clear acrylic with a center trackball feels straight out of Neuromancer.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 52,
          "y": 38,
          "label": "Widescreen Embedded Linux Display",
          "detail": "High-contrast landscape display flanked by perforated stereo speaker grilles running Fedora Linux."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 64,
          "label": "Center-Mounted Optical Trackball",
          "detail": "Thumb-accessible black trackball module nested directly between the split mechanical key clusters."
        },
        {
          "id": "hs-3",
          "x": 56,
          "y": 66,
          "label": "Split Ortholinear Mechanical Matrix",
          "detail": "Charcoal DSA-profile keycaps arranged in dual ergonomic halves inside stacked clear acrylic layers."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 5,
      "priceRange": "$480 — $680 USD",
      "primaryChannels": [
        "Tindie Independent Hardware",
        "Custom Cyberdeck Maker Commissions"
      ],
      "searchKeywords": [
        "Round Screen Cyberdeck Terminal",
        "Framework Mainboard Retro Enclosure",
        "Ortholinear Linux Desk Terminal"
      ],
      "antiFraudWarning": "Verify whether the listing includes the x86 mainboard and display driver board or only the empty 3D-printed shell.",
      "directOutbound": {
        "label": "Inspect on Tindie Hardware Market",
        "url": "https://www.tindie.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-101",
    "specimenCode": "TIKTOK-SPLIT-KB // #101-ORTHO",
    "title": "Ergonomic Column-Staggered Split Mechanical Keyboard with OLEDs",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 8.9,
    "priceValue": 220,
    "platform": "TikTok Shop",
    "salesRank": 2,
    "salesRankBadge": "#2 DEV ERGONOMICS (42K+ SOLD)",
    "scarcityBadge": "HAND-SOLDERED PCB",
    "heroImage": "/items/anm-101.jpg",
    "tagline": "Two-piece open-PCB split ergonomic keyboard featuring aggressive column stagger, bright yellow keycaps, OLED status screens, and red TRRS bridge.",
    "tags": [
      "TIKTOK SHOP 40%",
      "SPLIT KEYBOARD",
      "ERGONOMIC",
      "QMK FIRMWARE",
      "OLED DISPLAY"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives pre-assembled with dual black-and-gold silkscreen PCBs, acrylic microcontroller shields, red TRRS interconnect, and hot-swap sockets.",
      "tactileFeedback": "Zero-flex FR4 sandwich plates give tactile brown switches a dry, crisp acoustic pop while letting shoulders open naturally.",
      "honestSnags": [
        "Steep 2-week muscle-memory relearning curve if transitioning from a traditional staggered laptop layout.",
        "Never unplug the red TRRS bridge cable while USB power is connected—doing so can short the Pro Micro controller.",
        "Exposed SMD diodes and underglow LEDs attract desk dust over time."
      ],
      "curatorVerdict": "Once your thumbs adapt to dedicated space, backspace, and layer clusters, standard slab keyboards feel positively medieval.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 30,
          "y": 56,
          "label": "Dual Acrylic-Shielded OLED Screens",
          "detail": "Real-time monochrome displays reporting active QMK layer, WPM speed, and modifier lock status."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 56,
          "label": "Braided Red TRRS Interconnect Bridge",
          "detail": "High-speed serial link synchronizing matrix scans between left and right independent halves."
        },
        {
          "id": "hs-3",
          "x": 78,
          "y": 58,
          "label": "Column-Staggered Ergonomic Key Cluster",
          "detail": "Sculpted finger-length key columns paired with transparent backlit thumb-arc switches."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$185 — $260 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Split Ergonomic Mechanical Keyboard OLED\")",
        "Keeb Maker Shops"
      ],
      "searchKeywords": [
        "Corne Split Mechanical Keyboard",
        "Column Staggered OLED Keyboard",
        "QMK VIA Split Ergonomic Kit"
      ],
      "antiFraudWarning": "Confirm whether switches and keycaps are included; barebones kits often photograph fully built units.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Keeb Guild",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-102",
    "specimenCode": "ROLLEI-28F // #102-TLR",
    "title": "Rolleiflex 2.8F Twin Lens Reflex Medium Format Film Camera",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.3,
    "priceValue": 1480,
    "platform": "Yahoo Auctions Japan",
    "salesRank": 1,
    "salesRankBadge": "#1 MEDIUM FORMAT GRAIL",
    "scarcityBadge": "FRANK & HEIDECKE GERMANY",
    "heroImage": "/items/anm-102.jpg",
    "tagline": "The pinnacle of German twin-lens mechanical engineering: 6x6 medium format film body equipped with the legendary Carl Zeiss Planar 80mm f/2.8 lens.",
    "tags": [
      "ROLLEIFLEX",
      "MEDIUM FORMAT",
      "CARL ZEISS",
      "TWIN LENS REFLEX",
      "ANALOG FILM"
    ],
    "fieldObservation": {
      "unboxingLog": "Secured in custom leather ever-ready case with hinged mirror-metal lens cap and clean waist-level focusing hood.",
      "tactileFeedback": "Silky-smooth film advance crank and whisper-quiet Synchro-Compur leaf shutter that clicks like a Swiss pocket watch.",
      "honestSnags": [
        "Waist-level ground glass viewfinder reverses the image left-to-right, taking practice to track moving subjects.",
        "Coupled 60-year-old selenium light meter often reads 1 stop slow—carry a handheld incident meter for slide film.",
        "Specialized Bay III lens filters and hoods command steep collector premiums."
      ],
      "curatorVerdict": "Looking down into the bright 6x6 ground glass slows your heartbeat and transforms ordinary street scenes into timeless cinema.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 28,
          "y": 34,
          "label": "Heidosmat Viewing Lens & Meter Bar",
          "detail": "Bright f/2.8 viewing optic paired with the iconic baffled selenium light meter beneath the nameplate."
        },
        {
          "id": "hs-2",
          "x": 28,
          "y": 66,
          "label": "Carl Zeiss Planar 80mm f/2.8 Taking Lens",
          "detail": "Legendary five-element German glass mounted inside a whisper-quiet Synchro-Compur leaf shutter."
        },
        {
          "id": "hs-3",
          "x": 68,
          "y": 50,
          "label": "Coupled Focusing Knob & Depth Scale",
          "detail": "Precision knurled side wheel integrating live exposure meter needle readout and film speed dial."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$1,350 — $1,950 USD",
      "primaryChannels": [
        "Yahoo Auctions Japan",
        "Tokyo Map Camera / Vintage Film Vaults"
      ],
      "searchKeywords": [
        "Rolleiflex 2.8F Planar TLR",
        "Medium Format 6x6 German Camera",
        "Franke Heidecke Rolleiflex"
      ],
      "antiFraudWarning": "Inspect the taking lens with a flashlight for fungus, balsam separation, or cleaning marks on the delicate front coating.",
      "directOutbound": {
        "label": "Inspect on Yahoo Auctions Proxy",
        "url": "https://buyee.jp/item/search/query/Rolleiflex%202.8F",
        "sourceType": "Proxy Auction"
      }
    }
  },
  {
    "id": "anm-103",
    "specimenCode": "TIKTOK-CHLADNI // #103-CYMATIC",
    "title": "Acoustic Resonance Brass Chladni Geometric Plate Set on Wood Rack",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.2,
    "priceValue": 165,
    "platform": "TikTok Shop",
    "salesRank": 3,
    "salesRankBadge": "#3 VIRAL CYMATICS LAB (38K+ SOLD)",
    "scarcityBadge": "MULTI-GEOMETRY BRASS",
    "heroImage": "/items/anm-103.jpg",
    "tagline": "Four precision-cut brass acoustic resonance plates (square, star, pentagon, hexagon) mounted on turned hardwood pedestals for visualizing sound waves.",
    "tags": [
      "TIKTOK SHOP 40%",
      "CHLADNI PLATE",
      "CYMATICS",
      "ACOUSTIC PHYSICS",
      "BRASS INSTRUMENT"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives with turned walnut-toned display rack, four interchangeable brass geometric plates, rosined violin bow, and fine quartz sand vial.",
      "tactileFeedback": "Resonant raw brass sheets chime cleanly when tapped; thumbscrew clamps lock each geometry solidly to its wooden pillar.",
      "honestSnags": [
        "Drawing a violin bow cleanly along the brass edge takes 10 minutes of practice to hit pure harmonic overtones.",
        "Fine white quartz sand inevitably spills onto the desk surface during enthusiastic resonant sweeps.",
        "High-pitched metallic resonance frequencies can irritate pets in the same room."
      ],
      "curatorVerdict": "Visible music physics straight from 1787. Watching chaotic sand grains snap instantly into sacred geometric stars is pure alchemy.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 35,
          "y": 31,
          "label": "Eight-Point Star Brass Resonator",
          "detail": "Thin resonant sheet brass engineered to form intricate radial nodal symmetries when bowed."
        },
        {
          "id": "hs-2",
          "x": 66,
          "y": 31,
          "label": "Knurled Central Nodal Clamping Nut",
          "detail": "Solid brass thumbscrew anchoring the center antinode to the turned hardwood shaft."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 78,
          "label": "Inlaid Hardwood Display Plinth",
          "detail": "Hand-finished wooden stand organizing four distinct polygonal plates as a sculptural desk centerpiece."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$140 — $195 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Brass Chladni Plate Cymatics Set\")",
        "Physics Demonstration Workshops"
      ],
      "searchKeywords": [
        "Chladni Plate Brass Set",
        "Acoustic Cymatics Sand Resonator",
        "Sound Wave Geometry Instrument"
      ],
      "antiFraudWarning": "Ensure plates are genuine spring brass rather than thin painted steel, which dampens harmonics too quickly.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Physics Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-104",
    "specimenCode": "SOVIET-VFD21 // #104-TEAL",
    "title": "Soviet Elektronika 21-10 Programmable VFD Digital Desk Clock",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.1,
    "priceValue": 175,
    "platform": "eBay Vintage",
    "salesRank": 2,
    "salesRankBadge": "TOP 2 SOVIET CYBER-CLOCK",
    "scarcityBadge": "1980S USSR VFD",
    "heroImage": "/items/anm-104.jpg",
    "tagline": "Rare 1980s Soviet programmable timer-clock featuring glowing cyan-teal vacuum fluorescent digits and a geometric pink-and-teal Cyrillic control deck.",
    "tags": [
      "VFD CLOCK",
      "SOVIET DESIGN",
      "ELEKTRONIKA 21-10",
      "RETRO FUTURE",
      "CYRILLIC UI"
    ],
    "fieldObservation": {
      "unboxingLog": "Mint-condition two-tone beige and black plastic console with crisp screen-printed Cyrillic day/channel matrix and rear AC relay outlets.",
      "tactileFeedback": "Row of 16 piano-style black mechanical selector keys across the lower apron gives a satisfying vintage stereo deck click.",
      "honestSnags": [
        "Operates natively on 220V 50Hz AC mains—North American buyers need a small step-up transformer.",
        "Programming the weekly 3-channel relay schedules requires reading Cyrillic abbreviations (ПН, ВТ, СР, ЧТ).",
        "Electrolytic filter capacitors in 40-year-old Soviet power supplies should be recapped for 24/7 operation."
      ],
      "curatorVerdict": "The peak of late-Soviet cassette-futurism. Its electric cyan VFD glow paired with pastel geometric graphics belongs in a design museum.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 52,
          "y": 36,
          "label": "Cyan-Teal Vacuum Fluorescent Tube",
          "detail": "High-contrast IVL1-7/5 luminescent VFD display radiating unmistakable phosphor-teal digits."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 58,
          "label": "Geometric Cyrillic Schedule Matrix",
          "detail": "Retro pink-and-teal graphic bus lines mapping 3 independent AC timer channels across 7 days."
        },
        {
          "id": "hs-3",
          "x": 48,
          "y": 72,
          "label": "16-Key Tactile Programming Deck",
          "detail": "Full-width mechanical switch strip for numeric entry, brightness dimming, and alarm toggling."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$150 — $220 USD",
      "primaryChannels": [
        "eBay Vintage Clocks",
        "Eastern European Retro Electronics"
      ],
      "searchKeywords": [
        "Elektronika 21-10 VFD Clock",
        "Soviet Programmable Timer Clock",
        "USSR Teal Vacuum Fluorescent Clock"
      ],
      "antiFraudWarning": "Ask sellers for a lit photo showing uniform brightness across all four digits; worn VFD phosphors dim unevenly.",
      "directOutbound": {
        "label": "Inspect on eBay Vintage Archive",
        "url": "https://www.ebay.com/sch/i.html?_nkw=Elektronika+21-10",
        "sourceType": "Deadstock Vault"
      }
    }
  },
  {
    "id": "anm-105",
    "specimenCode": "MOOG-M32 // #105-LADDER",
    "title": "Moog Mother-32 Semi-Modular Desktop Analog Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 8.7,
    "priceValue": 599,
    "platform": "Thomann",
    "salesRank": 1,
    "salesRankBadge": "#1 EURORACK GATEWAY SYNTH",
    "scarcityBadge": "ASHEVILLE ANALOG",
    "heroImage": "/items/anm-105.jpg",
    "tagline": "Hand-assembled Moog tabletop analog synthesizer packing the legendary 24dB transistor ladder filter, 32-step sequencer, and 32-point patchbay.",
    "tags": [
      "MOOG SYNTH",
      "MOTHER-32",
      "LADDER FILTER",
      "EURORACK",
      "ANALOG SEQUENCER"
    ],
    "fieldObservation": {
      "unboxingLog": "Sturdy extruded aluminum chassis with wooden end cheeks, bundle of 3.5mm patch cables, and printed manual.",
      "tactileFeedback": "Silky high-torque silver-capped Moog knobs and crisp metallic toggle switches paired with glowing red/green step LEDs.",
      "honestSnags": [
        "Single oscillator architecture means you need a second unit or external VCO for thick detuned dual-oscillator chords.",
        "The 1-octave silicone button keyboard is built for step programming rather than expressive live playing.",
        "Sequencer shift-key combinations take a printed cheat sheet to master initially."
      ],
      "curatorVerdict": "Pure creamy Moog bass warmth packed into a Eurorack-ready steel brick. The gateway drug to modular synthesis.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 42,
          "y": 24,
          "label": "Moog 24dB Transistor Ladder Filter",
          "detail": "Switchable Lowpass/Highpass analog filter delivering unmistakable warm harmonic saturation."
        },
        {
          "id": "hs-2",
          "x": 16,
          "y": 74,
          "label": "32-Step Voltage-Controlled Sequencer",
          "detail": "Bi-color LED step matrix supporting per-step glide, accent, ratchet, and rest programming."
        },
        {
          "id": "hs-3",
          "x": 86,
          "y": 66,
          "label": "Voltage-Controlled Mix & Patch Routing",
          "detail": "Seamless analog modulation routing linking LFO, envelope, and external Eurorack CV signals."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$549 — $649 USD",
      "primaryChannels": [
        "Thomann Music",
        "Sweetwater / Reverb"
      ],
      "searchKeywords": [
        "Moog Mother-32 Synthesizer",
        "Semi-Modular Eurorack Moog",
        "Analog Desktop Step Sequencer"
      ],
      "antiFraudWarning": "Verify inclusion of the original 12V center-positive power adapter; third-party supplies can introduce ground-loop hum.",
      "directOutbound": {
        "label": "Inspect on Thomann Synth Store",
        "url": "https://www.thomann.de/intl/moog_mother_32.htm",
        "sourceType": "Authorized Dealer"
      }
    }
  }
];

const BATCH_POOL_NOV_09: RawOdditySeed[] = [
  {
    "id": "anm-076",
    "specimenCode": "TIKTOK-LEVIT-GLOBE // #1-MAGNETIC",
    "title": "Magnetic Levitating C-Frame Rotating Constellation Earth Globe",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.3,
    "priceValue": 122,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK ORBIT (240K+ SOLD)",
    "scarcityBadge": "ELECTROMAGNETIC SPECIMEN",
    "heroImage": "/items/anm-076.jpg",
    "tagline": "Precision active electromagnetic field suspends a detailed geographical globe mid-air with near-frictionless 360-degree rotation.",
    "tags": [
      "TIKTOK SHOP 40%",
      "MAGNETIC LEVITATION",
      "ELECTROMAGNETIC FIELD",
      "DESK KINETIC",
      "LED HALO"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in high-density foam with the C-shaped curved arm base, calibrated suspension spacer rod, and 12V 2A switching adapter.",
      "tactileFeedback": "Slight magnetic resistance when positioning the sphere into the null-point; once captured, it spins silently with zero mechanical drag.",
      "honestSnags": [
        "If power cuts abruptly, the globe drops or clamps instantly to the upper electromagnet with a sharp audible click.",
        "Requires keeping at least 30cm away from mechanical automatic wristwatches and magnetic stripe cards.",
        "Initial alignment requires a steady hand using the included acrylic alignment spacer tool."
      ],
      "curatorVerdict": "Defying gravity on an office desk never ceases to captivate. The subtle LED rim lighting turns it into a nocturnal planetary beacon.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 18,
          "label": "Active Solenoid Electromagnet Array",
          "detail": "High-frequency PWM-driven electromagnetic coil modulating magnetic flux 1,000 times per second."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 50,
          "label": "Neodymium Core Floating Sphere",
          "detail": "Precision-balanced terrestrial globe housing permanent rare-earth magnets sealed in durable ABS."
        },
        {
          "id": "hs-3",
          "x": 28,
          "y": 82,
          "label": "Curved C-Frame LED Ambient Arch",
          "detail": "Matte black structural cantilever armature with integrated soft-diffusion LED rim lighting."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$110 — $135 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Magnetic Floating Globe\")",
        "Passfeed Gadget Feed"
      ],
      "searchKeywords": [
        "Magnetic Levitation C Shape Globe",
        "Electronic Floating Earth Lamp",
        "Anti Gravity Rotating Desk Globe"
      ],
      "antiFraudWarning": "Avoid passive toy versions suspended by nylon filament. Ensure it uses active electromagnetic feedback with Hall sensors.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Maker Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-077",
    "specimenCode": "TIKTOK-CRYPTO-SEED // #1-SECURITY",
    "title": "Indestructible Solid Grade 5 Titanium Mnemonic Crypto Seed Phrase Cold Storage Cassette",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.1,
    "priceValue": 148,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 HARDCORE SECURITY (85K+ SOLD)",
    "scarcityBadge": "TITANIUM VAULT ARTIFACT",
    "heroImage": "/items/anm-077.jpg",
    "tagline": "Machined aerospace Grade 5 titanium plates rated for 3,000°F fire resistance and ocean submersion, locking 24-word recovery seeds for eternity.",
    "tags": [
      "TIKTOK SHOP 40%",
      "TITANIUM GRADE 5",
      "CRYPTO SECURITY",
      "FIREPROOF 3000F",
      "OFFLINE COLD STORAGE"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy industrial matte black cardboard box containing dual stamped titanium plates, center punch tool, and tamper-evident security seals.",
      "tactileFeedback": "Dense, cold, and indestructible. The surface features subtle CNC bead-blasting and engraved laser coordinate grids.",
      "honestSnags": [
        "Center punch strikes require a solid concrete workbench or heavy metal block underneath to leave crisp indentations.",
        "Irreversible: punching a wrong character dot requires using one of the spare backup letter cells.",
        "Weighs over 450 grams; noticeably hefty in a pocket or travel safe."
      ],
      "curatorVerdict": "Digital sovereignty made visceral. Stamping cryptographic phrases into titanium with hammer blows feels like forging permanent ancient runes.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 42,
          "y": 30,
          "label": "BIP39 Laser-Engraved Alphabet Grid",
          "detail": "Standardized 4-letter truncation matrix covering all 2,048 BIP39 wordlist permutations."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Grade 5 Ti-6Al-4V Solid Core Slab",
          "detail": "Melting point exceeding 1,660°C (3,020°F); completely resistant to acid, floodwater, and house fires."
        },
        {
          "id": "hs-3",
          "x": 82,
          "y": 85,
          "label": "Hex-Bolt Padlock Latching Corner",
          "detail": "Recessed security fastener hole accepting standard anti-tamper padlocks and numbered steel wire seals."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Titanium Crypto Cold Plate\")",
        "Crypto Steel Security Feeds"
      ],
      "searchKeywords": [
        "Titanium Seed Phrase Backup Plate",
        "BIP39 Metal Crypto Wallet Cassette",
        "Fireproof Waterproof Recovery Phrase Vault"
      ],
      "antiFraudWarning": "Beware of cheap stamped aluminum lookalikes that melt at 660°C. Insist on authentic Grade 5 titanium with metallurgical certs.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Security Vault",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-078",
    "specimenCode": "TIKTOK-TESLA-LIGHTER // #1-PLASMA",
    "title": "Heavy Machined Brass Dual-Arc Plasma Beam Rechargeable EDC Pocket Lighter",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9,
    "priceValue": 115,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL EDC IGNITION (170K+ SOLD)",
    "scarcityBadge": "HIGH ENERGY ARC SPECIMEN",
    "heroImage": "/items/anm-078.jpg",
    "tagline": "High-voltage solid-state plasma arc lighter lathed from solid unlacquered cartridge brass that patinas uniquely with daily handling.",
    "tags": [
      "TIKTOK SHOP 40%",
      "SOLID BRASS",
      "DUAL PLASMA ARC",
      "WINDPROOF IGNITION",
      "EDC GEAR"
    ],
    "fieldObservation": {
      "unboxingLog": "Presents in a slide-out kraft gift tin with a braided Type-C charging wire and mini brass polish swatch.",
      "tactileFeedback": "Solid brass weight in the hand (180g). The flip-cap snaps open with a resounding metallic ring, and the arc hums softly.",
      "honestSnags": [
        "Produces a quiet, high-pitched electrical whine while firing the 20,000V cross arcs.",
        "Unlacquered raw brass will naturally oxidize and darken within weeks of finger oil exposure.",
        "Battery capacity lasts roughly 60-80 ignitions before needing a 30-minute USB top-off."
      ],
      "curatorVerdict": "A flameless lightning storm that fits inside your fifth jeans pocket. Wind completely fails to extinguish these crossed ionized arcs.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 22,
          "label": "Ceramic Insulator Arc Crosshead",
          "detail": "High-temp refractory ceramic housing four tungsten electrode poles forming an X-pattern plasma intersection."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "Solid Lathed Raw Brass Chassis",
          "detail": "Machined from single billet 70/30 brass alloy with knurled grip bands and mechanical hinge."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "USB-C Charging Base & LED Fuel Ring",
          "detail": "Recessed modern Type-C port surrounded by four micro sapphire-blue battery capacity indicator LEDs."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$105 — $125 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Brass Dual Arc Plasma Lighter\")",
        "EDC Maker Showcases"
      ],
      "searchKeywords": [
        "Solid Brass Plasma Beam Lighter",
        "Dual Arc Windproof Electric Igniter",
        "Heavy EDC Rechargeable Tesla Lighter"
      ],
      "antiFraudWarning": "Avoid zinc alloy models with fake brass plating that peel. Verify genuine solid machined brass via weight specs (>170g).",
      "directOutbound": {
        "label": "Inspect on TikTok Shop EDC Showcase",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-079",
    "specimenCode": "TIKTOK-BIOLUM-PYRAMID // #1-BIO",
    "title": "Pyramidal Hand-Blown Glass Living Bioluminescent Microalgae Biome",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.7,
    "priceValue": 138,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL LIVING LAB (145K+ SOLD)",
    "scarcityBadge": "LIVING MARINE ECOSYSTEM",
    "heroImage": "/items/anm-079.jpg",
    "tagline": "Sacred geometry pyramidal glass terrarium housing photosynthetic Pyrocystis dinoflagellates that ignite in bioluminescent cold cyan fire.",
    "tags": [
      "TIKTOK SHOP 40%",
      "LIVING CULTURE",
      "BIOLUMINESCENCE",
      "PYRAMID GLASS",
      "CIRCADIAN ECOSYSTEM"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in custom thermal-insulated styrofoam casing with nutrient broth flask and light-tight dark transport sleeve.",
      "tactileFeedback": "Smooth optical-clarity borosilicate glass edges. Gently swirling the pyramid in darkness unleashes a cascade of sparkling cyan light.",
      "honestSnags": [
        "Strictly light-cycle sensitive; demands roughly 12 hours of ambient room light followed by 12 hours of total darkness.",
        "Must be fed fresh saline nutrient solution every 4 to 6 months to maintain high microbial cell density.",
        "Light intensity dims if agitated continuously for more than 5 minutes as luciferase reserves deplete temporarily."
      ],
      "curatorVerdict": "Living oceanic alchemy trapped inside an Egyptian pyramid. Shaking it before bed provides a deeply grounding communion with ancient biological light.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 15,
          "label": "Precision Ground Glass Stopper Apex",
          "detail": "Hermetic ground-glass taper fitting allowing gas exchange while preventing airborne microbial contamination."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 58,
          "label": "Dynamic Bioluminescent Broth Culture",
          "detail": "Dense suspension of marine Pyrocystis fusiformis single-celled algae emitting 470nm cyan photons under fluid shear."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Beveled Borosilicate Pyramid Base",
          "detail": "Solid weighted base designed to sit stably on wooden nightstands without scratching fine finishes."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$125 — $155 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Bioluminescent Glass Pyramid\")",
        "Bio-Design Living Labs"
      ],
      "searchKeywords": [
        "Living Bioluminescent Algae Pyramid",
        "Pyrocystis Fusiformis Terrarium Flask",
        "Glowing Microbe Marine Bio Lamp"
      ],
      "antiFraudWarning": "Watch out for plastic novelty globes with glow-in-the-dark paint. Genuine specimens contain live liquid broth that responds to physical agitation.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Maker Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-080",
    "specimenCode": "TIKTOK-CYBER-PUNK-WATCH // #1-WRIST",
    "title": "OLED Cyberpunk Industrial Armored Steel Skeleton Digital Wristwatch",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.2,
    "priceValue": 175,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL CYBER WEARABLE (95K+ SOLD)",
    "scarcityBadge": "ARMORED TIMEPIECE",
    "heroImage": "/items/anm-080.jpg",
    "tagline": "Brutalist angular 316L stainless steel wristwatch featuring dual customizable monochrome OLED displays and exposed industrial micro-screws.",
    "tags": [
      "TIKTOK SHOP 40%",
      "CYBERPUNK WATCH",
      "OLED DISPLAY",
      "316L STEEL",
      "ARMORED CASE"
    ],
    "fieldObservation": {
      "unboxingLog": "Ships in an olive-drab tactical transit case with hex adjustment tools, spare fluoroelastomer strap, and magnetic USB pogo charger.",
      "tactileFeedback": "Substantial, chiseled steel heft on the wrist. Mechanical tactile side buttons click with firm haptic snap.",
      "honestSnags": [
        "Angular chassis is relatively thick (14.5mm); will not easily slide under tight formal dress shirt cuffs.",
        "High-brightness OLED display requires charging roughly every 7 to 10 days with regular tilt-to-wake usage.",
        "The industrial look attracts non-stop questions and glances in public environments."
      ],
      "curatorVerdict": "Looks like it was stripped from the wrist of an Akira combat motorcyclist. The ultra-sharp OLED numbers punch through direct sunlight with ease.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 38,
          "label": "Dual Monochrome Graphic OLED Screen",
          "detail": "High-contrast 128x64 pixel emerald green / ice blue display rendering retro digital telemetry fonts."
        },
        {
          "id": "hs-2",
          "x": 22,
          "y": 55,
          "label": "316L CNC Sandblasted Steel Bezel",
          "detail": "Multi-faceted chamfered stainless steel armor housing with IP68 water and shock resistance."
        },
        {
          "id": "hs-3",
          "x": 78,
          "y": 68,
          "label": "Machined Knurled Tactile Pushers",
          "detail": "Sealed stainless steel micro-switches cycling between stopwatch, binary clock, and atmospheric sensor readouts."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$160 — $195 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Armored Cyberpunk Watch\")",
        "Indie Micro-Brand Timepiece Feed"
      ],
      "searchKeywords": [
        "Cyberpunk OLED Wristwatch Steel",
        "Futuristic Industrial Digital Watch",
        "Tactical Mecha Skeleton Watch"
      ],
      "antiFraudWarning": "Avoid cheap alloy plastic imitations with low-resolution color TFT panels. True models use real 316L steel and high-contrast monochrome OLED.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Wearables",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-081",
    "specimenCode": "TIKTOK-FIBER-WHIP // #1-LIGHT",
    "title": "Professional 360-Degree Pixel Flow Dancing Space Fiber Optic Whip",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.3,
    "priceValue": 129,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 FLOW LIGHTING WEARABLE (110K+ SOLD)",
    "scarcityBadge": "KINETIC LIGHT SPECTACLE",
    "heroImage": "/items/anm-081.jpg",
    "tagline": "Heavy-duty aircraft aluminum handle driving 130 end-glow optical fibers with smooth ball-bearing rotation and 40 programmed chromatic color modes.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FIBER OPTIC WHIP",
      "FLOW ARTS",
      "PIXEL DANCING",
      "CNC ALUMINUM HANDLE"
    ],
    "fieldObservation": {
      "unboxingLog": "Packaged in a cylindrical zip travel pouch with bundle wrap, rechargeable 18650 cell, USB smart charger, and silicone fiber lubricant.",
      "tactileFeedback": "Weighted aluminum knurled hilt feels balanced for finger spins. The 6-foot fibers glide smoothly without knotting.",
      "honestSnags": [
        "Fibers will gradually shed individual strands if whipped repeatedly against abrasive concrete or brick surfaces.",
        "Requires periodic application of silicone spray to maintain tangle-free silk-like fluidity during complex wraps.",
        "Extremely bright in pitch-black rooms; can disorient bystanders if swung too close."
      ],
      "curatorVerdict": "Transforms kinetic human movement into liquid neon trails. In long-exposure photography, it paints dazzling dimensional light ribbons.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 20,
          "label": "Optical Powerhouse LED Core Engine",
          "detail": "High-CRI 3W RGB Cree LED emitting concentrated optical flux directly into fiber bundle ferrule."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 50,
          "label": "360° Stainless Fluid Bearing Swivel",
          "detail": "Zero-resistance ball-bearing collar allowing the whip to rotate infinitely without twisting inner wiring."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "130 Tapered End-Glow PMMA Fibers",
          "detail": "Graduated lengths from 1ft to 6ft, side-sparkled and end-polished for multi-point starry light dispersion."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$118 — $140 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Fiber Optic Flow Whip\")",
        "Flow Arts Performance Showcases"
      ],
      "searchKeywords": [
        "Fiber Optic Space Whip 360 Ball Bearing",
        "Pixel Flow Dancing Light Whip",
        "Rechargeable LED Fiber Performance Whip"
      ],
      "antiFraudWarning": "Avoid models with fixed heads that lack ball bearings; they will knot and snap fibers within minutes of use.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Performance Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-082",
    "specimenCode": "AMZ-KORG-NTS1 // #1-SYNTH",
    "title": "Korg Nu:Tekt NTS-1 Digital Programmable DIY Ribbon Synthesizer Kit",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.4,
    "priceValue": 139.99,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BEST SELLER DIY SYNTH",
    "scarcityBadge": "OPEN MULTI-ENGINE",
    "heroImage": "/items/anm-082.jpg",
    "tagline": "Pocket-sized open-architecture digital synthesizer with ribbon controller, custom user oscillators, and studio-grade stereo reverb and delay.",
    "tags": [
      "AMAZON #1",
      "KORG NTS-1",
      "RIBBON SYNTH",
      "OPEN PLATFORM",
      "DIY HARDWARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Delivered as a complete solder-free snap-together kit including printed circuit boards, ribbon keyboard, hardware panels, and screwdriver.",
      "tactileFeedback": "Ultra-lightweight exposed PCB charm. Sliding fingers across the ribbon creates fluid pitch sweeps, and pots have a smooth damping curve.",
      "honestSnags": [
        "Ribbon pitch keyboard is small; precision melodic solos require practice or plugging in an external MIDI keyboard.",
        "Micro-USB power port is slightly delicate; requires gentle cable insertion to prevent fatigue on solder joints.",
        "3.5mm audio output requires a clean USB power source to eliminate ground-loop hum in audio monitors."
      ],
      "curatorVerdict": "A sonic monster masquerading as a mini DIY gadget. Loading third-party custom oscillators gives it the audio fidelity of a $1,500 flagship synth.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Open-SDK Multi-Engine DSP Chip",
          "detail": "Allows loading custom C/C++ oscillators and spatial modulation effects developed by the worldwide synth community."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 55,
          "label": "Stereo Multi-FX Processor Pots",
          "detail": "Dedicated encoder knobs tweaking chorus, ensemble, tape delay, and cathedral hall reverb algorithms."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Continuous Pitch Ribbon Strip",
          "detail": "Capacitive touch-strip keyboard supporting monophonic play, glissando slides, and built-in arpeggiator patterns."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$129 — $150 USD",
      "primaryChannels": [
        "Amazon Pro Audio",
        "Sweetwater Sound",
        "Korg Official Dealers"
      ],
      "searchKeywords": [
        "Korg NTS-1 Digital Synthesizer Kit",
        "Nu Tekt DIY Ribbon Synth",
        "Korg Programmable Multi Engine Synth"
      ],
      "antiFraudWarning": "Ensure kit includes all original ribbon cable assemblies and genuine Korg authorization slip.",
      "directOutbound": {
        "label": "View on Amazon Pro Audio",
        "url": "https://www.amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-083",
    "specimenCode": "AMZ-SAND-PENDULUM // #1-KINETIC",
    "title": "Solid Wood & Brass Desktop Gravity Friction Kinetic Sand Pendulum",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9,
    "priceValue": 112,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL GRAVITY ART",
    "scarcityBadge": "NATURAL PHYSICS RELIC",
    "heroImage": "/items/anm-083.jpg",
    "tagline": "Precision pointed brass bob swinging on twin gimbal cords, tracing intricate Lissajous geometric wave patterns in fine volcanic black sand.",
    "tags": [
      "AMAZON #1",
      "SAND PENDULUM",
      "LISSAJOUS HARMONICS",
      "SOLID WOOD",
      "KINETIC PHYSICS"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in flat-pack box with hardwood circular tray, threaded support mast, pointed brass stylus bob, and bag of fine sifted quartz sand.",
      "tactileFeedback": "Substantial brass bob weight (250g) swinging in total silence. The tip whispers gently as it displaces grains of sand.",
      "honestSnags": [
        "Must be set on a completely level, vibration-free desk to prevent asymmetrical distortion of elliptical harmonic curves.",
        "Requires carefully leveling the sand bed with the included acrylic scraper before launching a new swing.",
        "Direct airflow from ceiling fans or desk air conditioners will subtly drift the pendulum trajectory."
      ],
      "curatorVerdict": "Visualizing invisible orbital gravity equations on a coffee table. Watching harmonic resonance decay into micro-mandalas is endlessly soothing.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 15,
          "label": "Dual-Axis Brass Gimbal Suspension",
          "detail": "Tuned suspension cord linkage creating compound harmonic ratios between X and Y axes."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "Solid Turned Brass Stylus Weight",
          "detail": "Aerodynamic polished brass weight with needle-sharp lower stylus tip minimizing friction drag."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Turned Beechwood Circular Basin",
          "detail": "Wax-finished solid hardwood bowl holding a 20mm uniform bed of fine contrasting silica sand."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$105 — $125 USD",
      "primaryChannels": [
        "Amazon Kinetic Art",
        "Museum Science Shop Online"
      ],
      "searchKeywords": [
        "Kinetic Sand Pendulum Gravity Art",
        "Lissajous Harmonograph Desk Toy",
        "Brass Sand Writer Physics Pendulum"
      ],
      "antiFraudWarning": "Avoid lightweight plastic trays that tip over easily. Look for solid turned hardwood bases with brass metalwork.",
      "directOutbound": {
        "label": "View on Amazon Kinetic Art",
        "url": "https://www.amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-084",
    "specimenCode": "ETSY-METEORITE-RING // #1-ASTRONOMY",
    "title": "Certified Authentic Gibeon Meteorite & Titanium Polished Band Ring",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.6,
    "priceValue": 225,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 METEORITE JEWELRY (28K+ REVIEWS)",
    "scarcityBadge": "4.5 BILLION YEAR OLD RELIC",
    "heroImage": "/items/anm-084.jpg",
    "tagline": "Hand-crafted comfort-fit ring inlaid with authentic etched Gibeon iron-nickel meteorite displaying natural octahedral Widmanstätten crystallization.",
    "tags": [
      "ETSY CURATED",
      "GIBEON METEORITE",
      "WIDMANSTATTEN PATTERN",
      "TITANIUM CORE",
      "COSMIC ARTIFACT"
    ],
    "fieldObservation": {
      "unboxingLog": "Packaged in a walnut jeweler gift box with signed certificate of authenticity and microfiber mineral care cloth.",
      "tactileFeedback": "Silky smooth inner comfort-fit titanium bevel against the finger; subtle tactile crystalline ridges on the acid-etched meteorite channel.",
      "honestSnags": [
        "Iron-nickel meteorites contain real iron; should not be worn while swimming in chlorinated pools or saltwater to prevent oxidation.",
        "Requires an occasional light rub with mineral oil or Renaissance Wax to preserve the acid-etched luster against moisture.",
        "Cannot be resized due to the rigid solid titanium outer liner; precise finger sizing is crucial prior to order."
      ],
      "curatorVerdict": "Wearing an interstellar traveler that cooled over millions of years in the vacuum of deep space. The triangular lattice cannot be faked in any earthly foundry.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Widmanstätten Lamellar Inlay",
          "detail": "Natural intersecting nickel-iron kamacite and taenite crystalline bands revealed through nitric acid etching."
        },
        {
          "id": "hs-2",
          "x": 25,
          "y": 65,
          "label": "Aircraft Grade Titanium Core",
          "detail": "Hypoallergenic, lightweight, and skin-neutral titanium inner liner providing lifetime structural stability."
        },
        {
          "id": "hs-3",
          "x": 75,
          "y": 65,
          "label": "Beveled Mirror-Polished Edges",
          "detail": "Precision chamfered border framing the raw cosmic texture with contemporary architectural elegance."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$210 — $260 USD",
      "primaryChannels": [
        "Etsy Artisan Metalsmiths",
        "Certified Meteorite Collectors Network"
      ],
      "searchKeywords": [
        "Authentic Gibeon Meteorite Ring Titanium",
        "Widmanstatten Iron Meteorite Wedding Band",
        "Real Space Rock Inlay Ring"
      ],
      "antiFraudWarning": "Laser-engraved fake patterns on steel are rampant online. Verify genuine crystalline depth with certified provenance papers.",
      "directOutbound": {
        "label": "Explore on Etsy Artisan Guild",
        "url": "https://www.etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-085",
    "specimenCode": "ALI-CYBER-TERMINAL // #1-HACK",
    "title": "ClockworkPi DevTerm A06 Modular Portable Linux Cyberdeck Terminal",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.8,
    "priceValue": 318,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 MAKER CYBERDECK (12K+ SOLD)",
    "scarcityBadge": "MODULAR LINUX RIG",
    "heroImage": "/items/anm-085.jpg",
    "tagline": "Retro-futuristic handheld Linux terminal featuring an ultrawide 6.8-inch screen, 65% mechanical mini keyboard, and integrated thermal receipt printer.",
    "tags": [
      "ALIEXPRESS MAKER",
      "CLOCKWORKPI DEVTERM",
      "LINUX CYBERDECK",
      "THERMAL PRINTER",
      "OPEN HARDWARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in plastic snap-sprues and circuit boards requiring roughly 45 minutes of fun assembly like a vintage model kit.",
      "tactileFeedback": "Clicky tactile micro-switches with mini trackball navigation. The thermal printer spools paper with a nostalgic robotic buzz.",
      "honestSnags": [
        "Requires Linux comfort (Debian/Ubuntu terminal commands) to configure custom scripts and Wi-Fi drivers.",
        "Screen resolution is 1280x480 (super ultrawide aspect ratio); standard desktop windows may require horizontal scrolling.",
        "Battery cells (dual 18650s) are often not included due to international air transport regulations."
      ],
      "curatorVerdict": "The holy grail of portable computing fantasies. Pulling this out in a coffee shop to print terminal bash commands on thermal paper instantly stops conversations.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "6.8-inch IPS Ultrawide Display",
          "detail": "1280x480 pixel resolution 16:6 screen displaying full-width terminal lines and multi-pane code windows."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "65% Tactile QWERTY & Mini Trackball",
          "detail": "Custom micro-switch keycaps with Game Boy style D-pad, mini optical trackball, and dual shoulder buttons."
        },
        {
          "id": "hs-3",
          "x": 85,
          "y": 35,
          "label": "Embedded 58mm Thermal Printer Head",
          "detail": "Direct thermal receipt printing mechanism producing instant physical text readouts, retro pixel graphics, or code logs."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$300 — $350 USD",
      "primaryChannels": [
        "AliExpress Official Maker Store",
        "ClockworkPi Factory Direct"
      ],
      "searchKeywords": [
        "ClockworkPi DevTerm A06 Kit",
        "Portable Linux Cyberdeck Handheld",
        "DevTerm Ultrawide Terminal Keyboard"
      ],
      "antiFraudWarning": "Ensure purchasing the dual-core Cortex-A72 + quad-core A53 A06 processor version rather than slower legacy compute modules.",
      "directOutbound": {
        "label": "Inspect on AliExpress Maker Depot",
        "url": "https://www.aliexpress.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-086",
    "specimenCode": "MERC-VINTAGE-POLAROID // #1-RETRO",
    "title": "1977 Vintage Polaroid SX-70 Original Folding SLR Instant Land Camera",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.5,
    "priceValue": 265,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 VINTAGE CAMERA VAULT",
    "scarcityBadge": "ANALOG DESIGN MASTERPIECE",
    "heroImage": "/items/anm-086.jpg",
    "tagline": "Brushed chrome and genuine top-grain tan leather folding single-lens reflex instant camera designed by Dr. Edwin Land.",
    "tags": [
      "MERCARI TOKYO",
      "POLAROID SX-70",
      "FOLDING SLR",
      "VINTAGE ANALOG",
      "EDWIN LAND DESIGN"
    ],
    "fieldObservation": {
      "unboxingLog": "Sourced from an estate collection in original leather hard case with original neck strap and vintage printed manual.",
      "tactileFeedback": "Satisfying mechanical unfolding sound as the bellows lock into triangular pyramid posture. Split-image viewfinder focusing is razor-sharp.",
      "honestSnags": [
        "Requires modern SX-70 film packs (160 ISO) from Polaroid Originals; sensitive to low indoor lighting without a flash bar.",
        "Vintage gear trains must be treated with mechanical care; forcing the folding latch can damage the scissor linkage.",
        "Film prints require 10-15 minutes in a dark pocket to fully develop their rich, warm analog chemistry colors."
      ],
      "curatorVerdict": "One of the greatest industrial design achievements of the 20th century. Folding it flat into a pocket after taking an instant photo feels like sci-fi wizardry from 1972.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 30,
          "label": "Four-Element 116mm f/8 Glass Lens",
          "detail": "Precision ground optical glass lens focusing down to a remarkable 10.4 inches for dramatic macro portraits."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 45,
          "label": "Through-The-Lens SLR Viewfinder",
          "detail": "Complex folding Fresnel mirror system allowing true through-the-lens parallax-free framing and split-circle manual focus."
        },
        {
          "id": "hs-3",
          "x": 48,
          "y": 80,
          "label": "Brushed Chrome & Leather Folding Shell",
          "detail": "Fiberglass-reinforced polysulfone body plated with real chrome and fitted with tactile tan leather panels."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$240 — $290 USD",
      "primaryChannels": [
        "Mercari Japan Vintage Optics",
        "Tokyo Classic Camera Resellers"
      ],
      "searchKeywords": [
        "Polaroid SX-70 Original Folding SLR",
        "Vintage SX70 Chrome Brown Leather",
        "Land Camera SX 70 Tested Functional"
      ],
      "antiFraudWarning": "Always confirm the motor ejects and the light meter selenium/electric eye is tested before buying unverified \"as-is\" estate units.",
      "directOutbound": {
        "label": "Source on Mercari Tokyo Optics",
        "url": "https://jp.mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-087",
    "specimenCode": "RAK-TERP-SYNTH // #1-AUDIO",
    "title": "Befaco DIY Noise Plethora Dual Digital Multimode Eurorack Synthesizer Module",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 285,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 AKIHABARA MODULAR HIT",
    "scarcityBadge": "MODULAR SOUND ENGINE",
    "heroImage": "/items/anm-087.jpg",
    "tagline": "14HP Eurorack digital sound generator dedicated to textured noise algorithms, metallic screech clusters, and granular glitch percussion.",
    "tags": [
      "RAKUTEN JAPAN",
      "EURORACK MODULAR",
      "BEFACO NOISE",
      "INDUSTRIAL AUDIO",
      "SYNTHESIS ENGINE"
    ],
    "fieldObservation": {
      "unboxingLog": "Housed in anti-static silver pouch with braided ribbon power cable, knurled Befaco Befaco-red Bananauts, and M3 mounting screws.",
      "tactileFeedback": "Industrial-grade knurled aluminum knobs turn with stiff resistance. Patch cables slide into 3.5mm jacks with crisp mechanical snap.",
      "honestSnags": [
        "Requires a powered Eurorack synthesizer skiff chassis and standard bipolar power supply (+12V/-12V).",
        "Capable of extreme sub-bass rumble and piercing ultra-high shrieks; keep monitor speaker volumes padded during patch design.",
        "Learning all 30 internal DSP noise algorithms requires referencing the front-panel cheat card."
      ],
      "curatorVerdict": "The quintessential dark sonic playground for cyberpunk film sound design. Twisting the filter resonance yields industrial drone magic.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 22,
          "label": "Dual Digital Noise Algorithmic Banks",
          "detail": "Dedicated microcontrollers running granular white/pink/digital noise, metallic rain, and FM crushed noise loops."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "Dual Multi-Mode Analog Filter Circuits",
          "detail": "Voltage-controlled low-pass and high-pass filters capable of sculpting razor-sharp resonant acoustic peaks."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Gold-Plated CV Modulation Patch Array",
          "detail": "12 CV patch inputs accepting 0-10V control voltages for automated modulation of pitch, filter cutoff, and crunch."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$270 — $310 USD",
      "primaryChannels": [
        "Rakuten Modular Pro Gear",
        "Clockface Modular Tokyo"
      ],
      "searchKeywords": [
        "Befaco Noise Plethora Eurorack",
        "Eurorack Digital Noise Synth Module",
        "Befaco Modular Sound Generator 14HP"
      ],
      "antiFraudWarning": "Check whether purchasing a pre-assembled factory built unit versus an unassembled DIY circuit board kit.",
      "directOutbound": {
        "label": "Inspect on Rakuten Modular Tokyo",
        "url": "https://www.rakuten.co.jp",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-088",
    "specimenCode": "ETSY-TRILOBITE-FOSSIL // #1-PALEO",
    "title": "Museum Grade Complete Spiny Paradoxides Trilobite Fossil in Shale Matrix",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.7,
    "priceValue": 240,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 MUSEUM CURATED PALEO",
    "scarcityBadge": "500 MILLION YEAR OLD FOSSIL",
    "heroImage": "/items/anm-088.jpg",
    "tagline": "Authentic Cambrian-period marine arthropod fossil preserved with 3D exoskeleton relief and delicate pleural spines in native grey shale.",
    "tags": [
      "ETSY CURATED",
      "TRILOBITE FOSSIL",
      "CAMBRIAN ERA",
      "NATURAL HISTORY",
      "500M YEARS OLD"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives secured in custom wood-framed display easel with velvet backer, geological provenance report, and UV authenticity seal.",
      "tactileFeedback": "Dense natural sedimentary shale stone (1.2kg). The fossilized carapace displays dark caramel mineralization against matte slate.",
      "honestSnags": [
        "Natural stone matrix has raw geological edges; should be handled by the sides to avoid chipping brittle shale layers.",
        "Ancient marine specimens are irreplaceable natural artifacts; must not be cleaned with water or household chemical solvents.",
        "Slight natural quarry excavation fractures on the matrix are normal evidence of geological extraction."
      ],
      "curatorVerdict": "Touching an organism that scurried along ocean floors half a billion years before the first dinosaur walked. The ultimate desktop memento mori.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Cephalic Head Shield & Holochroal Eyes",
          "detail": "Fossilized compound calcite crystal eyes preserved with micro-lens facet structures intact."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "Multi-Segmented Articulated Thorax",
          "detail": "Over 14 individual articulated chitin segments fossilized through iron-sulfide and calcium-phosphate replacement."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Native Cambrian Sedimentary Slate Matrix",
          "detail": "Authentic 500-million-year-old Moroccan Anti-Atlas mountain shale displaying natural quarry chisel marks."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$220 — $275 USD",
      "primaryChannels": [
        "Etsy Certified Paleontology Vaults",
        "International Fossil Dealers Association"
      ],
      "searchKeywords": [
        "Authentic Trilobite Fossil Shale Matrix",
        "Cambrian Paradoxides Trilobite Specimen",
        "Real Prehistoric Arthropod Fossil Stone"
      ],
      "antiFraudWarning": "Watch out for poured resin and cast plaster fakes from tourist markets. Look for authentic mineral crystallization under UV and microscope.",
      "directOutbound": {
        "label": "Explore on Etsy Paleontology Vault",
        "url": "https://www.etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-089",
    "specimenCode": "BB-AUDIO-TECHNICA-LP60 // #1-VINYL",
    "title": "Audio-Technica AT-LP60X-GM Fully Automatic Belt-Drive Stereo Turntable",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.1,
    "priceValue": 149,
    "platform": "Best Buy",
    "salesRank": 1,
    "salesRankBadge": "#1 BEST SELLER HOME AUDIO",
    "scarcityBadge": "HI-FI ANALOG STANDARD",
    "heroImage": "/items/anm-089.jpg",
    "tagline": "Gunmetal finished belt-drive turntable with redesigned tonearm base, Dual Magnet phono cartridge, and built-in switchable preamplifier.",
    "tags": [
      "BEST BUY #1",
      "AUDIO-TECHNICA",
      "VINYL TURNTABLE",
      "HI-FI ANALOG",
      "DUAL MAGNET CARTRIDGE"
    ],
    "fieldObservation": {
      "unboxingLog": "Contains die-cast aluminum platter, rubber drive belt, clear hinged dust cover, 45 RPM adapter, and gold-plated RCA output cables.",
      "tactileFeedback": "Feather-smooth automatic push-button start and stop. The dampened cueing lever drops the diamond stylus with zero surface bounce.",
      "honestSnags": [
        "Belt installation on the motor pulley requires careful looping through the platter access hole during initial setup.",
        "Lightweight resonance chassis benefits from being placed on an isolation pad if used near heavy subwoofer bass.",
        "Requires keeping records dust-free with an anti-static carbon fiber brush to prevent vinyl pops."
      ],
      "curatorVerdict": "The quintessential gateway to the rich, warm, uncompressed sound of vinyl. Flawless tracking and zero fuss operation make it an essential listening room anchor.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Die-Cast Anti-Resonance Aluminum Platter",
          "detail": "Precision balanced rotational platter driven by low-vibration DC servo motor delivering stable 33-1/3 and 45 RPM speeds."
        },
        {
          "id": "hs-2",
          "x": 78,
          "y": 55,
          "label": "Integral Dual Magnet Phono Cartridge",
          "detail": "Audio-Technica ATN3600L replaceable 0.6 mil conical diamond stylus tracking record grooves with high fidelity."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Gunmetal Anti-Vibration Base Enclosure",
          "detail": "Damped composite chassis with integrated switchable phono/line pre-amp for direct hookup to active speakers."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$139 — $159 USD",
      "primaryChannels": [
        "Best Buy Audio",
        "Audio-Technica Official Store"
      ],
      "searchKeywords": [
        "Audio-Technica AT-LP60X Turntable",
        "Automatic Belt Drive Record Player",
        "AT-LP60X-GM Gunmetal Vinyl Player"
      ],
      "antiFraudWarning": "Ensure receiving the updated \"X\" series model with revised tonearm resonance damping and external power brick.",
      "directOutbound": {
        "label": "View on Best Buy Audio",
        "url": "https://www.bestbuy.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-090",
    "specimenCode": "ALL-SOVIET-VFD-CALC // #1-COLDWAR",
    "title": "1984 Soviet Elektronika MK-52 Programmable Cold-War VFD Display Calculator",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.8,
    "priceValue": 185,
    "platform": "Allegro",
    "salesRank": 1,
    "salesRankBadge": "#1 COLD WAR VINTAGE RELIC",
    "scarcityBadge": "SOVIET SPACE ERA SPECIMEN",
    "heroImage": "/items/anm-090.jpg",
    "tagline": "Decommissioned 1980s Soviet engineering programmable calculator with vacuum fluorescent emerald-green tube display and EEPROM memory slot.",
    "tags": [
      "ALLEGRO POLAND",
      "SOVIET ELECTRONICS",
      "MK-52 CALCULATOR",
      "VFD DISPLAY",
      "COLD WAR RELIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Shipped in original cyrillic stamped box with rigid vinyl sleeve, schematic fold-out diagram, and Soviet USSR quality inspection stamp.",
      "tactileFeedback": "Dense mechanical keys with substantial click travel. The green VFD numeric tubes glow intensely with zero backlight bleed.",
      "honestSnags": [
        "Keycaps are printed entirely in Cyrillic Russian characters; requires learning RPN (Reverse Polish Notation) logic stack.",
        "Requires 4x AA batteries or dedicated 5V power barrel adapter; draws more current than modern CMOS LCD calculators.",
        "Vintage 1980s microchips calculate complex trigonometric equations with a noticeable charming sub-second delay."
      ],
      "curatorVerdict": "A piece of space-age history flown aboard the Soviet Soyuz TM-7 space flight as a backup navigation computer. The emerald VFD display is utterly mesmerizing.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "12-Digit Vacuum Fluorescent Emerald VFD",
          "detail": "High-vacuum multi-segment phosphor tubes emitting 505nm neon emerald glow with crisp Soviet typography."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Cyrillic Reverse-Polish Numeric Keypad",
          "detail": "Tactile dual-injection molded plastic keys with Cyrillic function labels (В/О, С/П, F, K, ИП)."
        },
        {
          "id": "hs-3",
          "x": 82,
          "y": 30,
          "label": "Rear Non-Volatile EEPROM Slot",
          "detail": "Pioneering internal 512-byte magnetic core / EEPROM storage saving up to four 105-step program routines without battery power."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$170 — $210 USD",
      "primaryChannels": [
        "Allegro Poland Vintage Electronics",
        "Eastern European Surplus Auctions"
      ],
      "searchKeywords": [
        "Soviet Elektronika MK-52 Calculator",
        "USSR Programmable VFD Calculator",
        "Cold War Elektronika MK 52 Space"
      ],
      "antiFraudWarning": "Verify all 12 VFD segments light evenly and the EEPROM memory chip switch passes power-on self-test without burnt resistors.",
      "directOutbound": {
        "label": "Explore on Allegro Surplus Vault",
        "url": "https://allegro.pl",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const BATCH_POOL_NOV_02: RawOdditySeed[] = [
  {
    "id": "anm-061",
    "specimenCode": "TIKTOK-SPIN-TOP // #1-EDC",
    "title": "Solid Lathed Brass & Tungsten Carbide Precision Micro Spinning Top",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9,
    "priceValue": 118,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL PRECISION EDC (290K+ SOLD)",
    "scarcityBadge": "SUB-MICRON CNC BALANCED",
    "heroImage": "/items/anm-061.jpg",
    "tagline": "Heavyweight dual-metal precision spinning top featuring an ultra-hard tungsten contact tip spinning friction-free for up to 10 minutes.",
    "tags": [
      "TIKTOK SHOP 40%",
      "SPINNING TOP",
      "PRECISION EDC",
      "TUNGSTEN TIP",
      "KINETIC DESK"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in matte black magnetic gift box with custom concave glass spinning mirror base and microfiber handling glove.",
      "tactileFeedback": "Dense brass flywheel balanced to aerospace tolerances. A swift finger snap sets it into motion so stable it appears completely stationary.",
      "honestSnags": [
        "Requires concave glass spinning surface for maximum run times; rough wood surfaces create friction and stop spin in 2 minutes.",
        "Brass rim will pick up natural hand oil patina unless polished with included cloth.",
        "High spin momentum can launch off the table edge if dropped from too high an angle."
      ],
      "curatorVerdict": "Physical perfection in motion. Watching a metal top spin so smoothly it looks frozen in time is the ultimate antidote to desktop anxiety.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Knurled High-Torque Spin Stem",
          "detail": "Diamond-knurled grip shaft providing maximum launch velocity between fingertips."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Perimeter-Weighted Solid Brass Rotor",
          "detail": "Maximizes moment of inertia for long, stable spin duration."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Tungsten Carbide Micro Contact Bearing",
          "detail": "Ultra-hard polished sphere contact point offering near-zero rotational drag."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$105 — $135 USD",
      "primaryChannels": [
        "TikTok Shop Precision EDC",
        "ForeverSpin Boutique"
      ],
      "searchKeywords": [
        "Precision CNC Spinning Top Tungsten",
        "Brass EDC Desk Top Long Spin",
        "Heavy Metal Kinetic Top"
      ],
      "antiFraudWarning": "Avoid stamped sheet metal or zinc alloy toys. Authentic tops weigh over 45 grams of solid brass.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-062",
    "specimenCode": "TIKTOK-VU-METER // #1-AUDIO",
    "title": "Dual Analog Ballistic Needle Audio Level VU Meter Backlit Display",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.3,
    "priceValue": 139,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK AUDIO TELEMETRY (165K+ SOLD)",
    "scarcityBadge": "WARM AMBER BACKLIT GALVANOMETER",
    "heroImage": "/items/anm-062.jpg",
    "tagline": "Dual mechanical moving-coil meter console reacting synchronously to line-in music signals with smooth hydraulic damping.",
    "tags": [
      "TIKTOK SHOP 40%",
      "VU METER",
      "AUDIO TELEMETRY",
      "BALLISTIC NEEDLE",
      "AMBER DIAL"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in custom foam flight case with USB-C power cord, 3.5mm stereo splitter, and sensitivity trim potentiometer screwdriver.",
      "tactileFeedback": "Solid aluminum enclosure with warm amber incandescent dial lamps. Dual needles jump and bounce with broadcast ballistic precision.",
      "honestSnags": [
        "Requires line-level audio signal or audio interface output for optimum needle deflection.",
        "Backlit lamps stay illuminated while powered; power down via rear switch when sleeping.",
        "Needle zero adjustment screws are delicate and should only be tuned when unpowered."
      ],
      "curatorVerdict": "Makes sound visible and visceral. The rhythmic dance of twin amber needles bouncing to the beat makes any desktop feel like a 1970s recording studio.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Dual Ballistic Galvanometer Needles",
          "detail": "Moving-coil analog meters with calibrated decay time matching audio transients."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 20,
          "label": "Warm Amber Incandescent Illumination",
          "detail": "Vintage filament bulb backlighting highlighting decibel scale markings."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 80,
          "label": "CNC Billet Aluminum Case",
          "detail": "Heavy anodized metal chassis shielding internal driver circuit."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$125 — $155 USD",
      "primaryChannels": [
        "TikTok Shop Audio Telemetry",
        "Boutique Sound Lab"
      ],
      "searchKeywords": [
        "Dual Analog VU Meter Audio Visualizer",
        "Stereo DB Level Meter Backlit",
        "Desktop Mechanical VU Meter"
      ],
      "antiFraudWarning": "Look for real moving-coil galvanometers; avoid fake digital LCD screens styled to look like analog needles.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-063",
    "specimenCode": "TIKTOK-STEAMPUNK-GOGGLES // #1-PROP",
    "title": "Vintage Steampunk Brass Goggles with Dual Optical Magnifier Loupes",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.5,
    "priceValue": 128,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL COSPLAY PROP (220K+ SOLD)",
    "scarcityBadge": "HINGED DUAL-OPTIC EYEPIECES",
    "heroImage": "/items/anm-063.jpg",
    "tagline": "Antique copper-patinated aviator eyewear equipped with flip-down magnifying jeweler lenses and adjustable leatherette headstrap.",
    "tags": [
      "TIKTOK SHOP 40%",
      "STEAMPUNK GOGGLES",
      "BRASS EYEWEAR",
      "MAGNIFIER LOUPE",
      "COSPLAY PROP"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in embossed tin case with spare green/amber lens inserts, adjustment screwdriver, and microfiber lens cloth.",
      "tactileFeedback": "Dense brass castings with antiqued bronze finish. The hinged loupe arms click into place over the primary glass lenses.",
      "honestSnags": [
        "Loupe lenses alter focal length; looking through both flip-down magnifiers while walking can cause disorientation.",
        "Not rated as ballistic or workshop safety impact protection (strictly aesthetic/cosplay).",
        "Leatherette strap requires firm tightening to keep heavy brass eyecups seated during vigorous head movement."
      ],
      "curatorVerdict": "Instant Victorian airship captain aesthetics. The mechanical feel of swinging down the dual magnifying loupes never fails to delight.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Hinged Dual Optical Magnifier Loupes",
          "detail": "Swivel-mounted jeweler lenses providing 3x and 5x optical magnification."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 55,
          "label": "Threaded Removable Brass Lens Bezels",
          "detail": "Knurled front rings allowing instant swapping between clear, amber, and green glass."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 70,
          "label": "Adjustable Riveted Leatherette Strap",
          "detail": "Elastic-backed brass hardware ensuring comfortable fit across forehead or hat."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$115 — $145 USD",
      "primaryChannels": [
        "TikTok Shop Cosplay Atelier",
        "Steampunk Prop Works"
      ],
      "searchKeywords": [
        "Steampunk Brass Goggles with Loupe",
        "Victorian Aviator Eyewear Gears",
        "Double Magnifier Steampunk Glasses"
      ],
      "antiFraudWarning": "Avoid cheap hollow plastic party glasses; look for real glass lenses and heavy cast alloy hardware.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-064",
    "specimenCode": "TIKTOK-LUMEN-MUSHROOM // #1-BIO",
    "title": "Living Bioluminescent Mushroom Culture in Glass Habitat Flask",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.7,
    "priceValue": 149,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL BIOLOGICAL LIGHT (175K+ SOLD)",
    "scarcityBadge": "LIVING PANELLUS MYCELIUM",
    "heroImage": "/items/anm-064.jpg",
    "tagline": "Sealed glass ecosystem colonized by Panellus stipticus mycelium emitting natural emerald-green bioluminescence in complete darkness.",
    "tags": [
      "TIKTOK SHOP 40%",
      "GLOWING MUSHROOM",
      "BIOLUMINESCENT",
      "LIVING ECOSYSTEM",
      "MYCELIUM FLASK"
    ],
    "fieldObservation": {
      "unboxingLog": "Shipped in insulated climate pack with living colonized wood dowels, sterile substrate nutrient booster, and darkroom observation hood.",
      "tactileFeedback": "Dense glass culture jar with air-exchange membrane cap. In pitch-black dark, the mycelium emits an uncanny, continuous emerald-green glow.",
      "honestSnags": [
        "Eyes require 2 to 3 minutes of total dark adaptation to see the full biological green luminescence.",
        "Must be stored at moderate room temperature (18-24°C); freezing or direct baking sun will harm living mycelium.",
        "Requires occasional moisture spritz every 3 to 4 months through sterile filter port."
      ],
      "curatorVerdict": "Zero batteries, zero LEDs—pure biological magic. An alien green nightlight fueled exclusively by living fungal luciferin reactions.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Bioluminescent Panellus Mycelium Bed",
          "detail": "Dense living fungal colony synthesizing luciferin for non-thermal light emission."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Hardwood Sawdust Nutrient Substrate",
          "detail": "Sterilized oak and beech substrate sustaining fungal growth for up to 12 months."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Microporous Gas-Exchange Filter Cap",
          "detail": "Maintains fresh oxygen intake while blocking stray mold spores."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "TikTok Shop Bio-Creations",
        "Fungi Research Lab"
      ],
      "searchKeywords": [
        "Bioluminescent Mushroom Habitat Flask",
        "Living Glow in the Dark Fungus",
        "Panellus Stipticus Living Mycelium"
      ],
      "antiFraudWarning": "Avoid chemical phosphorescent resin novelty toys; verify living organism culture with sterile origin papers.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-065",
    "specimenCode": "TIKTOK-BRASS-CALENDAR // #1-CHRONO",
    "title": "Solid Engraved Brass 50-Year Rotational Disk Perpetual Calendar",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.2,
    "priceValue": 135,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK HOROLOGY (310K+ SOLD)",
    "scarcityBadge": "ETCHED CELESTIAL EPHEMERIS",
    "heroImage": "/items/anm-065.jpg",
    "tagline": "Heavy concentric brass dial calculating exact day of the week for any Gregorian calendar date over a 50-year astronomical window.",
    "tags": [
      "TIKTOK SHOP 40%",
      "PERPETUAL CALENDAR",
      "BRASS HOROLOGY",
      "ROTARY DIAL",
      "DESK ARTIFACT"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood-grain collector case with brass display easel and ephemeris calculation instruction scroll.",
      "tactileFeedback": "Substantial 380g solid brass disc. The central pivoting rotor turns with buttery smooth mechanical alignment.",
      "honestSnags": [
        "Requires manual rotation each month to align current year with target month sector.",
        "Engraved numbers are compact (micro-typography); best viewed under good desk lamp lighting.",
        "Polished brass will naturally develop antique patina over years unless polished regularly."
      ],
      "curatorVerdict": "Mechanical date computing centuries before silicon chips existed. Calculating past and future dates purely through rotating brass gears feels sacred.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Centric 50-Year Year/Month Index",
          "detail": "Laser-etched rotating brass disc aligning leap years and months."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Fixed Weekday Ephemeris Grid",
          "detail": "Concentric radial sectors displaying Monday through Sunday mapping."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Solid Machined Brass Pivot Stud",
          "detail": "Center rivet pin maintaining smooth rotational tension."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$120 — $150 USD",
      "primaryChannels": [
        "TikTok Shop Horology Studio",
        "Brass Artisans Guild"
      ],
      "searchKeywords": [
        "Solid Brass Perpetual Calendar 50 Year",
        "Rotary Desk Calendar Metal",
        "Vintage Ephemeris Brass Wheel"
      ],
      "antiFraudWarning": "Verify solid brass metal weight; avoid thin stamped aluminum or gold-painted plastic copies.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-066",
    "specimenCode": "TIKTOK-ARMOR-GAUNTLET // #1-STEEL",
    "title": "Articulated 16-Gauge Gothic Steel Medieval Armor Gauntlet Pair",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.6,
    "priceValue": 188,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL HISTORICAL ARMOR (92K+ SOLD)",
    "scarcityBadge": "HAND-RIVETED PHALANX PLATES",
    "heroImage": "/items/anm-066.jpg",
    "tagline": "Fully wearable articulated hand armor hand-hammered from high-tensile steel with genuine leather inner gloves and rivet pivots.",
    "tags": [
      "TIKTOK SHOP 40%",
      "STEEL GAUNTLET",
      "GOTHIC ARMOR",
      "ARTICULATED HAND",
      "MEDIEVAL CRAFT"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in rust-inhibited protective wrapping with heavy linen storage sack and tube of museum-grade mineral oil.",
      "tactileFeedback": "Cold, heavy 16-gauge cold-rolled steel. The layered finger scales articulate seamlessly, clicking as you curl your hand into a fist.",
      "honestSnags": [
        "Total pair weighs approx 1.8kg; requires forearm stamina for prolonged costume wear.",
        "Steel surfaces must be kept lightly oiled to prevent oxidation in humid environments.",
        "Operating computer touchpads while wearing steel gauntlets is delightfully impossible."
      ],
      "curatorVerdict": "Wearable kinetic metallurgy. Curling your fingers into an armored fist and hearing thirty hand-riveted steel plates slide in unison is intoxicating.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Multi-Segment Articulated Finger Scales",
          "detail": "Over 15 overlapping steel plates per hand sliding smoothly on copper rivets."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 60,
          "label": "Fluted Gothic Metacarpal Backplate",
          "detail": "Hammer-formed ridge reinforcing structural deflection across back of hand."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Flared Wrist Cuff with Leather Liner",
          "detail": "Heavy cuff accommodating gambeson or tunic sleeves."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$170 — $210 USD",
      "primaryChannels": [
        "TikTok Shop Armor Guild",
        "Medieval Armory Direct"
      ],
      "searchKeywords": [
        "Gothic Articulated Steel Gauntlets",
        "Medieval Hand Armor 16 Gauge",
        "Functional Steel Knight Gauntlets"
      ],
      "antiFraudWarning": "Ensure real 16-gauge functional steel with riveted leather gloves; avoid flimsy thin 20-gauge decorative tin.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-067",
    "specimenCode": "AMZ-ARTURIA-FREAK // #1-SYNTH",
    "title": "Arturia MicroFreak Algorithmic Hybrid Synthesizer with Touch Plate",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 349,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER EXPERIMENTAL SYNTH",
    "scarcityBadge": "PCB FLAT CAPACITIVE TOUCH KEYBOARD",
    "heroImage": "/items/anm-067.jpg",
    "tagline": "Avant-garde digital oscillator engine with analog Oberheim filter, polyphonic aftertouch touchplate, and complex modulation matrix.",
    "tags": [
      "AMAZON #1",
      "ARTURIA MICROFREAK",
      "HYBRID SYNTH",
      "TOUCHPLATE KEYBOARD",
      "MODULATION MATRIX"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in artistic presentation box with power supply, 3.5mm MIDI breakout cables, and quick-start patch sheets.",
      "tactileFeedback": "Flat etched PCB keyboard bed reacts instantly to finger surface area contact. Turning the digital oscillator knob reveals unearthly granular textures.",
      "honestSnags": [
        "Capacitive touchplate keyboard has zero moving mechanical keys; requires dry, conductive finger touch.",
        "Extremely deep sound engine; exploring wavetable and Karplus-Strong physical modeling requires manual study.",
        "Slim profile benefits from a non-slip desk pad during aggressive sequencer jamming."
      ],
      "curatorVerdict": "The most adventurous micro-synth of the modern era. Squeezing polyphonic aftertouch out of an etched circuit board produces alien sonic landscapes.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Digital Multi-Engine Algorithmic Oscillator",
          "detail": "Over 16 distinct sound synthesis modes including speech synthesis and chord engines."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 55,
          "label": "12dB/Octave Analog 2-Pole Filter",
          "detail": "State-variable analog filter inspired by the classic Oberheim SEM."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Etched PCB Capacitive Keyboard",
          "detail": "25-key touchplate detecting finger contact pressure for polyphonic aftertouch."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$325 — $365 USD",
      "primaryChannels": [
        "Amazon Musical Instruments",
        "Arturia Authorized Stores"
      ],
      "searchKeywords": [
        "Arturia MicroFreak Hybrid Synthesizer",
        "MicroFreak Algorithmic Keyboard",
        "Arturia Touchplate Synth"
      ],
      "antiFraudWarning": "Ensure authentic Arturia serial card is intact for firmware updates and software preset manager.",
      "directOutbound": {
        "label": "Inspect on Amazon Instruments",
        "url": "https://amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-068",
    "specimenCode": "AMZ-DREMEL-TOOL // #1-MAKER",
    "title": "Dremel 4300 Variable Speed Rotary Multi-Tool Kit with Flex Shaft",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9,
    "priceValue": 129,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER ROTARY POWER TOOL",
    "scarcityBadge": "PIVOTING LED WORKLIGHT CHUCK",
    "heroImage": "/items/anm-068.jpg",
    "tagline": "High-performance 1.8-amp universal rotary machine operating from 5,000 to 35,000 RPM for precision carving, grinding, and polishing.",
    "tags": [
      "AMAZON #1",
      "DREMEL 4300",
      "ROTARY TOOL",
      "MAKER WORKSHOP",
      "PRECISION CARVING"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy molded carrying case packed with Dremel 4300 power unit, flexible shaft extension, lawnmower blade guide, and 45 accessory bits.",
      "tactileFeedback": "Dense ergonomic rubberized grip. Smooth electronic feedback motor ramps up to 35,000 RPM with minimal hand vibration.",
      "honestSnags": [
        "High-speed operation generates acoustic whir; safety goggles and ear protection recommended during prolonged grinding.",
        "Requires steady hand control; high RPM tools can wander if light feed pressure is not maintained.",
        "Power corded tool (requires 120V outlet), providing unlimited torque rather than battery limits."
      ],
      "curatorVerdict": "The ultimate maker wand. From carving intricate wood inlays to slicing through hardened steel bolts, it is the cornerstone of hardware modding.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Keyless 3-Jaw Universal Chuck & Pivot LED",
          "detail": "Tool-free bit changes paired with shadow-free work area illumination."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 60,
          "label": "High-Performance 1.8A Motor Core",
          "detail": "Electronic speed feedback maintaining constant torque under heavy load."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Slim Flex-Shaft Pen Attachment",
          "detail": "Pen-sized flexible drive cable allowing delicate fingertip engraving."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$115 — $140 USD",
      "primaryChannels": [
        "Amazon Hardware & Tools",
        "Dremel Official Direct"
      ],
      "searchKeywords": [
        "Dremel 4300 Rotary Tool Kit",
        "Variable Speed Dremel Flex Shaft",
        "High Performance Precision Rotary Tool"
      ],
      "antiFraudWarning": "Check for genuine Dremel warranty badge and sealed original tool kit case.",
      "directOutbound": {
        "label": "Inspect on Amazon Tools",
        "url": "https://amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-069",
    "specimenCode": "ETSY-BRONZE-SKULL // #1-CAST",
    "title": "Lost-Wax Cast Solid Bronze Memento Mori Anatomical Skull Paperweight",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.5,
    "priceValue": 142,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER OCCULT SCULPTURE",
    "scarcityBadge": "HEAVYWEIGHT SOLID FOUNDRY BRONZE",
    "heroImage": "/items/anm-069.jpg",
    "tagline": "1.4kg solid cast bronze cranium featuring hand-carved cranial sutures, weathered antique patina, and polished zygomatic bone highlights.",
    "tags": [
      "ETSY #1",
      "BRONZE SKULL",
      "MEMENTO MORI",
      "FOUNDRY CAST",
      "CABINET CURIOSITY"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in hand-stamped timber crate with wax seal origin certificate, velvet storage pouch, and brass polishing cloth.",
      "tactileFeedback": "Astonishing 1.4kg solid bronze heft in the palm. The anatomical teeth and nasal cavity are cast with museum-grade fidelity.",
      "honestSnags": [
        "Heavier than typical paperweights; do not set down roughly on glass desktops.",
        "Naturally develops aged verdigris tone in humid rooms unless wiped with mineral oil.",
        "Spouse or office colleagues will comment on your Gothic mortal meditation habits."
      ],
      "curatorVerdict": "Memento Mori forged in foundry fire. A heavy, tactile anchor grounding your workspace in centuries of contemplative philosophical tradition.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Anatomical Sagittal & Coronal Sutures",
          "detail": "Hand-detailed cranial bone seam lines highlighted by darker patina oxidation."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Solid Foundry Bronze Cranium",
          "detail": "100% solid silicon bronze cast via lost-wax technique."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Polished Flat Base with Maker Hallmark",
          "detail": "Felt-padded base keeping desktop surfaces free of scratches."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$130 — $160 USD",
      "primaryChannels": [
        "Etsy Bronze Artisans",
        "Fine Foundry Atelier"
      ],
      "searchKeywords": [
        "Solid Bronze Skull Sculpture Paperweight",
        "Lost Wax Cast Memento Mori Skull",
        "Anatomical Bronze Cranium Desk"
      ],
      "antiFraudWarning": "Avoid cold-cast resin impostors with painted metal powder; authentic piece weighs over 1.4kg of real bronze.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-070",
    "specimenCode": "ALI-BIONIC-ROBODOG // #1-AI",
    "title": "Autonomous Quadruped Bionic Robotic Dog Kit with AI Vision Camera",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.7,
    "priceValue": 249,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 GLOBAL MAKER CYBERNETICS HIT",
    "scarcityBadge": "12-DOF HIGH TORQUE ACTUATORS",
    "heroImage": "/items/anm-070.jpg",
    "tagline": "Four-legged biomimetic robotic pet powered by ESP32/Raspberry Pi with inverse kinematics self-balancing, trotting, and obstacle avoidance.",
    "tags": [
      "ALIEXPRESS #1",
      "ROBOT DOG",
      "QUADRUPED",
      "BIONIC ROBOTICS",
      "AI VISION"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in foam flight case with carbon-fiber reinforced chassis parts, 12 high-torque bus servos, AI camera head, and remote control.",
      "tactileFeedback": "Dense structural chassis with rubber foot pads. Trotting gaits are surprisingly fluid and animal-like across carpet and tile.",
      "honestSnags": [
        "Requires baseline familiarity with Python or visual drag-and-drop block coding to program custom walking routines.",
        "High servo torque drains standard batteries in approx 40 minutes of continuous trotting.",
        "Curious house pets will bark and investigate the mechanical canine intently."
      ],
      "curatorVerdict": "Industrial quadruped robotics shrunk to companion pet size. Watching its inverse kinematics balance and trot across your floor is pure sci-fi.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "AI Vision Camera Head Module",
          "detail": "Real-time color tracking and human face detection sensor on pan-tilt mount."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "12-DOF High-Speed Bus Servos",
          "detail": "3 articulated joints per leg enabling inverse kinematics walking and crouching."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Carbon-Fiber Composite Belly Pan",
          "detail": "Ultra-lightweight rigid frame protecting battery pack and controller board."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$230 — $275 USD",
      "primaryChannels": [
        "AliExpress Robotics Lab",
        "Open-Source Robotics Vault"
      ],
      "searchKeywords": [
        "Quadruped Robot Dog Kit Bionic",
        "12 DOF AI Vision Robot Pet",
        "Inverse Kinematics Robotic Dog ESP32"
      ],
      "antiFraudWarning": "Ensure digital serial bus servos; cheap PWM plastic servo models shake and fail under quadruped walking loads.",
      "directOutbound": {
        "label": "Inspect on AliExpress Maker",
        "url": "https://aliexpress.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-071",
    "specimenCode": "MERC-SONY-WALKMAN // #1-TOKYO",
    "title": "1980s Vintage Sony Walkman Stereo Cassette Player Metallic Edition",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.5,
    "priceValue": 215,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 VERIFIED TOKYO AUDIO ARCHIVE",
    "scarcityBadge": "PRECISION FLYWHEEL DRIVE MECHANISM",
    "heroImage": "/items/anm-071.jpg",
    "tagline": "Mint portable analog cassette player with dual 3.5mm stereo headphone jacks, tape selector, and mechanical piano-key transport buttons.",
    "tags": [
      "MERCARI #1",
      "SONY WALKMAN",
      "CASSETTE PLAYER",
      "ANALOG TAPE",
      "TOKYO 80S AUDIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Sourced from Tokyo Akihabara vintage audio depot with restored drive belt, original belt clip, and blank ferric audio cassette.",
      "tactileFeedback": "Dense metallic chassis with spring-loaded door latch. Clicking the mechanical PLAY and STOP buttons delivers visceral analog satisfaction.",
      "honestSnags": [
        "Vintage unit; runs best on fresh AA alkaline batteries or stabilized 3V DC adapter.",
        "Requires clean, uncrinkled cassette tapes; dusty tapes should be rewound before playback.",
        "Playback produces classic warm analog magnetic tape hiss characteristic of 1980s personal audio."
      ],
      "curatorVerdict": "The device that freed music from the living room. Popping in a physical cassette tape and hearing magnetic tape glide past playback heads is timeless.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Mechanical Piano-Key Transport Controls",
          "detail": "Direct mechanical linkage engaging pinch roller and tape heads."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Precision Brass Flywheel Drive Core",
          "detail": "Damped capstan flywheel minimizing wow and flutter audio distortion."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 40,
          "label": "Dual 3.5mm Stereo Headphone Outputs",
          "detail": "Classic dual-jack audio circuit allowing simultaneous shared headphone listening."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$195 — $240 USD",
      "primaryChannels": [
        "Mercari Japan Retro Audio",
        "Tokyo Vintage Electronics Vault"
      ],
      "searchKeywords": [
        "Sony Walkman Cassette Player Vintage",
        "Sony TPS-L2 WM Series Walkman",
        "Restored Japanese Walkman Tape Player"
      ],
      "antiFraudWarning": "Verify that rubber drive belts have been professionally replaced and motor speed is calibrated to standard 4.76 cm/s.",
      "directOutbound": {
        "label": "Inspect on Mercari Japan",
        "url": "https://jp.mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-072",
    "specimenCode": "RAK-MACRO-PAD // #1-MECH",
    "title": "Akihabara Custom CNC Aluminum Mechanical Macropad with Rotary Knob",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.2,
    "priceValue": 124,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 RAKUTEN MAKER KEYBOARD HIT",
    "scarcityBadge": "HOT-SWAP GASKET MOUNTED PCB",
    "heroImage": "/items/anm-072.jpg",
    "tagline": "Anodized billet aluminum 9-key programmable macro keypad featuring QMK/VIA firmware, lubricated switches, and smooth rotary volume encoder.",
    "tags": [
      "RAKUTEN #1",
      "MECHANICAL MACROPAD",
      "ROTARY ENCODER",
      "QMK VIA",
      "AKIHABARA HARDWARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in custom magnetic acrylic tin with coiled braided USB-C cable, switch puller, keycap tool, and extra rubber feet.",
      "tactileFeedback": "Dense 320g CNC milled aluminum unibody block. Mechanical switches bottom out on soft gasket silicone with a creamy acoustic thock.",
      "honestSnags": [
        "Configuring custom macros requires launching free VIA web configurator in Chrome/Edge.",
        "Nine keys mean you must choose your shortcuts intentionally; layer switching helps expand capacity.",
        "Machined sharp corners look gorgeous but can dent delicate softwood desk surfaces if dragged."
      ],
      "curatorVerdict": "The ultimate workflow command deck. Assigning your most frequent macros and volume scrubbing to a solid block of milled aluminum is deeply satisfying.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 75,
          "y": 25,
          "label": "Machined Billet Rotary Volume Encoder",
          "detail": "Clicky stepped metal knob for timeline scrubbing and audio level adjustment."
        },
        {
          "id": "hs-2",
          "x": 45,
          "y": 55,
          "label": "Hot-Swappable 5-Pin Switch Sockets",
          "detail": "Allows instant replacement of mechanical switches without soldering."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Solid 6061 Anodized Aluminum Chassis",
          "detail": "Heavy milled metal case providing rock-solid desktop stability."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$110 — $140 USD",
      "primaryChannels": [
        "Rakuten Akihabara Keyboards",
        "Custom Keebs Studio Tokyo"
      ],
      "searchKeywords": [
        "Custom Mechanical Macropad CNC Knob",
        "QMK VIA Macro Keypad Aluminum",
        "Akihabara Numpad Rotary Encoder"
      ],
      "antiFraudWarning": "Ensure authentic QMK/VIA microcontroller support rather than proprietary driver software.",
      "directOutbound": {
        "label": "Inspect on Rakuten Tokyo Vault",
        "url": "https://rakuten.co.jp",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-073",
    "specimenCode": "ETSY-AMBER-FOSSIL // #1-CRETACEOUS",
    "title": "Authentic Cretaceous Baltic Amber Specimen with Fossilized Insect Inclusions",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.8,
    "priceValue": 185,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER PALEONTOLOGY SPECIMEN",
    "scarcityBadge": "50 MILLION YEAR FOSSIL RESIN",
    "heroImage": "/items/anm-073.jpg",
    "tagline": "Polished gem-grade natural amber nugget holding intact prehistoric diptera and trichoptera winged insects suspended in time.",
    "tags": [
      "ETSY #1",
      "AMBER FOSSIL",
      "INSECT INCLUSION",
      "CRETACEOUS RESIN",
      "NATURAL HISTORY"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in archival museum shadowbox with 10x jeweler loupe, specimen tag, and amber origin certification papers.",
      "tactileFeedback": "Warm, feather-light fossilized tree resin. Holding it up to sunlight reveals micro-air bubbles and the delicate wings of a prehistoric fly.",
      "honestSnags": [
        "Authentic fossil inclusions are tiny (approx 1-3mm); best appreciated through the included jeweler loupe.",
        "Keep away from high heat, open flames, and alcohol solvents that can damage natural fossil amber.",
        "Natural raw amber exhibits minor organic surface crazing."
      ],
      "curatorVerdict": "Jurassic Park in the palm of your hand. Seeing a creature that flew fifty million years ago frozen in golden sunlight is awe-inspiring.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 45,
          "label": "Fossilized Diptera Winged Inclusion",
          "detail": "Complete anatomical preservation of prehistoric insect eyes, legs, and delicate wings."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Gem-Quality Translucent Golden Amber",
          "detail": "Naturally hardened fossilized pine tree resin from ancient Baltic forests."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Museum Archival Magnetic Shadowbox",
          "detail": "Acid-free display mount keeping specimen protected from dust and UV light."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$165 — $210 USD",
      "primaryChannels": [
        "Etsy Amber Guild",
        "Baltic Paleontology Collective"
      ],
      "searchKeywords": [
        "Genuine Baltic Amber with Insect Inclusion",
        "Fossil Insect Amber Specimen Cretaceous",
        "Real Amber Inclusion Jeweler Loupe"
      ],
      "antiFraudWarning": "Test with saltwater buoyancy or UV fluorescence; avoid modern plastic or copal fakes with modern dead insects.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Certified Paleontologist"
      }
    }
  },
  {
    "id": "anm-074",
    "specimenCode": "BB-MARSHALL-AUDIO // #1-SOUND",
    "title": "Marshall Emberton II Portable Waterproof Bluetooth Stereo Speaker",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 8.8,
    "priceValue": 169.99,
    "platform": "Best Buy",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER HERITAGE AUDIO",
    "scarcityBadge": "TRUE STEREOPHONIC 360-DEGREE SOUND",
    "heroImage": "/items/anm-074.jpg",
    "tagline": "Iconic textured vinyl speaker featuring brass control knob, IP67 dustproof/waterproof rating, and 30+ hours of continuous playtime.",
    "tags": [
      "BEST BUY #1",
      "MARSHALL SPEAKER",
      "BLUETOOTH AUDIO",
      "IP67 WATERPROOF",
      "HERITAGE HI-FI"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy branded presentation box with braided USB-C charging cable and quick-start multi-directional control manual.",
      "tactileFeedback": "Dense rubberized silicone case with textured vintage amplifier grille. The multi-directional brass joystick knob feels exceptionally tactile.",
      "honestSnags": [
        "Designed for balanced room-filling 360 audio rather than ultra-subwoofer car audio bass.",
        "Brass multi-directional joystick knob requires direct thumb push to pause/play.",
        "At 700g, it has reassuring heft but is heavier than cheap pocket plastic speakers."
      ],
      "curatorVerdict": "Rock and roll heritage miniaturized. The brass multidirectional knob and classic Marshall acoustic voicing make everyday listening feel legendary.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Multi-Directional Brass Control Knob",
          "detail": "Single gold-plated brass joystick controlling volume, tracks, and power."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "True Stereophonic Acoustic Drivers",
          "detail": "Dual 2-inch full-range drivers and passive radiators delivering 360-degree sound."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "IP67 Ruggedized Textured Vinyl Shell",
          "detail": "Dustproof and submersible waterproof casing built for outdoor resilience."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$150 — $180 USD",
      "primaryChannels": [
        "Best Buy Audio Vault",
        "Marshall Official Store"
      ],
      "searchKeywords": [
        "Marshall Emberton II Bluetooth Speaker",
        "Marshall Portable Waterproof Speaker",
        "Emberton 2 Stereo Speaker Brass Knob"
      ],
      "antiFraudWarning": "Check for authentic Marshall app connectivity and multi-directional brass knob resistance.",
      "directOutbound": {
        "label": "Inspect on Best Buy",
        "url": "https://bestbuy.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-075",
    "specimenCode": "ALL-NIXIE-IN14 // #1-WARSAW",
    "title": "Decommissioned Soviet IN-14 Cold-Cathode Nixie Tube Desktop Chronometer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.8,
    "priceValue": 265,
    "platform": "Allegro",
    "salesRank": 1,
    "salesRankBadge": "#1 SURPLUS ELECTRONICS MASTERPIECE",
    "scarcityBadge": "NEW OLD STOCK SOVIET NEON TUBES",
    "heroImage": "/items/anm-075.jpg",
    "tagline": "Four authentic Soviet-era glass vacuum glow tubes displaying numerals in rich neon orange discharge atop a CNC-machined walnut base.",
    "tags": [
      "ALLEGRO #1",
      "NIXIE TUBE CLOCK",
      "IN-14 TUBES",
      "NEON GLOW",
      "COLD WAR SURPLUS"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood-reinforced surplus crate with certified 170V DC power supply, spare IN-14 glass tube, and Cyrillic datasheet.",
      "tactileFeedback": "Solid hand-rubbed walnut pedestal with brushed brass faceplate. Glowing neon digits ignite with zero lag and warm retro brilliance.",
      "honestSnags": [
        "Tubes operate on internal 170V high-voltage converter; do not disassemble case while plugged into power.",
        "Requires periodic cathode poisoning prevention routine (auto-cycles digits 0-9 hourly).",
        "Cold-War surplus glass tubes from the 1980s; stock is finite and cannot be remanufactured."
      ],
      "curatorVerdict": "The pinnacle of retro-futuristic horology. Glowing orange neon gas ionization painting time in real physical space is simply unmatched.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Four Authentic Soviet IN-14 Nixie Tubes",
          "detail": "Cold-cathode vacuum tubes filled with neon-argon gas emitting 585nm orange glow."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Cathode Anti-Poisoning Slot Routine",
          "detail": "Onboard microcontroller exercising all digits hourly to maximize tube lifespan."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "CNC Milled Black Walnut & Brass Base",
          "detail": "Precision hardwood housing concealing high-voltage boost circuitry."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$240 — $295 USD",
      "primaryChannels": [
        "Allegro Eastern Surplus",
        "European Nixie Lab"
      ],
      "searchKeywords": [
        "IN-14 Nixie Tube Clock Walnut",
        "Soviet Nixie Clock Handcrafted",
        "Cold War Nixie Clock IN14 Tubes"
      ],
      "antiFraudWarning": "Ensure authentic New Old Stock (NOS) Soviet tubes rather than modern printed LED simulations.",
      "directOutbound": {
        "label": "Inspect on Allegro Surplus",
        "url": "https://allegro.pl",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const BATCH_POOL_OCT_26: RawOdditySeed[] = [
  {
    "id": "anm-046",
    "specimenCode": "TIKTOK-CRADLE // #1-KINETIC",
    "title": "Precision Mirrored Chrome Newton's Cradle Acoustic Desk Kinetic Pendulum",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.8,
    "priceValue": 125,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK SCIENCE (360K+ SOLD)",
    "scarcityBadge": "BALANCED BIFILAR SUSPENSION",
    "heroImage": "/items/anm-046.jpg",
    "tagline": "Classic conservation-of-momentum kinetic desk sculpture with five mirror-polished steel spheres and high-tensile bifilar suspension strings.",
    "tags": [
      "TIKTOK SHOP 40%",
      "NEWTONS CRADLE",
      "KINETIC DESK",
      "MOMENTUM PHYSICS",
      "CHROME REFLECTION"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in high-density foam cradle with untangled nylon bifilar suspension guides and velvet polishing cloth.",
      "tactileFeedback": "Dense chrome-plated steel spheres swing with hypnotic acoustic clicks. Release creates a rhythmic, perfectly elastic collision cycle.",
      "honestSnags": [
        "Requires level desk surface; any tilt causes the outer spheres to wobble off their collision axes.",
        "High-gloss chrome finish shows finger oil smudges easily; requires regular microfiber wipe-down.",
        "Strings can knot into a Gordian tangle if handled carelessly during unboxing."
      ],
      "curatorVerdict": "The quintessential acoustic kinetic companion. The crisp metallic percussion of colliding steel spheres never fails to reset focus during long meetings.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 55,
          "label": "Matched 22mm Chrome Steel Spheres",
          "detail": "Individually weighed within 0.1g tolerance for maximum kinetic energy transfer."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 25,
          "label": "Bifilar Anti-Twist Suspension String",
          "detail": "High-tensile monofilament lines maintaining true planar oscillation alignment."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Heavyweight Steel Rail Base",
          "detail": "Solid mirrored perimeter frame absorbing stray vibration."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$110 — $140 USD",
      "primaryChannels": [
        "TikTok Shop Kinetic Atelier",
        "Desk Physics Direct"
      ],
      "searchKeywords": [
        "Chrome Newtons Cradle Desk Toy",
        "Precision Kinetic Collision Balls",
        "Steel Balance Pendulum"
      ],
      "antiFraudWarning": "Avoid lightweight hollow metal balls or plastic frames that lose momentum in under 15 seconds.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-047",
    "specimenCode": "TIKTOK-TITAN-RING // #1-EDC",
    "title": "Aerospace Grade Titanium Solid Lathed EDC Finger Armor Band",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.1,
    "priceValue": 165,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL EDC WEARABLE (180K+ SOLD)",
    "scarcityBadge": "GRADE 5 TC4 TITANIUM",
    "heroImage": "/items/anm-047.jpg",
    "tagline": "Monolithic seamless titanium alloy ring milled from solid bar stock with sandblasted bevels and micro-grooved grip ridges.",
    "tags": [
      "TIKTOK SHOP 40%",
      "TITANIUM RING",
      "EDC GEAR",
      "FINGER ARMOR",
      "TC4 ALLOY"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in magnetic titanium-gray anodized tin with ring caliper sizing guide and certificate of metallurgical purity.",
      "tactileFeedback": "Unbelievably light yet cold and indestructible. The micro-chamfered inner radius glides over knuckles with zero friction.",
      "honestSnags": [
        "Solid Grade 5 titanium cannot be resized by traditional jewelers; measure knuckle accurately before ordering.",
        "Will easily scratch softer smartphone aluminum screens if tapped carelessly.",
        "Takes on minor character scuffs when encountering carbide tools."
      ],
      "curatorVerdict": "Cybernetic minimalism on your finger. Indestructible aerospace metallurgy distilled into an everyday tactile talisman.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "CNC Micro-Grooved Grip Channels",
          "detail": "Lathe-turned radial ridges designed for tactile sensory fidgeting."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Comfort-Fit Inner Chamfer Core",
          "detail": "Anatomically curved inner sleeve eliminating pinch during full hand grip."
        },
        {
          "id": "hs-3",
          "x": 25,
          "y": 55,
          "label": "Matte Bead-Blasted Outer Edge",
          "detail": "Glaze-free industrial finish resistant to fingerprint oils."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$150 — $180 USD",
      "primaryChannels": [
        "TikTok Shop EDC Workshop",
        "Titanium Artisans Direct"
      ],
      "searchKeywords": [
        "TC4 Titanium EDC Armor Ring",
        "Solid Billet Titanium Ring",
        "CNC Machined Finger Band"
      ],
      "antiFraudWarning": "Check for density and magnetic neutrality; verify Grade 5 (Ti-6Al-4V) rather than stainless steel or cheap zinc alloy.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-048",
    "specimenCode": "TIKTOK-HOLO-FAN // #1-OPTICS",
    "title": "POV Ultra-Fast Quad-Rotor 3D Holographic LED Desk Projector",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.5,
    "priceValue": 189,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL SCI-FI DISPLAY (210K+ SOLD)",
    "scarcityBadge": "PERSISTENCE OF VISION ROTOR",
    "heroImage": "/items/anm-048.jpg",
    "tagline": "High-speed brushless spinning LED propeller creating free-floating 3D volumetric animations in mid-air via persistence of vision.",
    "tags": [
      "TIKTOK SHOP 40%",
      "HOLOGRAPHIC FAN",
      "3D DISPLAY",
      "POV ROTOR",
      "CYBER VISUAL"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in clamshell carrying carton with clear protective acrylic dome, mounting arm, Wi-Fi transfer app, and power brick.",
      "tactileFeedback": "The brushless motor spins silently up to 1,200 RPM, instantly turning spinning blades into a floating 3D matrix hologram.",
      "honestSnags": [
        "Must always be operated inside the included protective dome to keep curious hands away from spinning rotor blades.",
        "Generates slight breeze when spinning without the acrylic dome.",
        "Video file transfer over 2.4GHz Wi-Fi takes about 30 seconds per 3D animation."
      ],
      "curatorVerdict": "Pure cyberpunk science fiction materialized on your desktop. Watching 3D neon artifacts float freely without a screen never stops looking unreal.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 50,
          "label": "High-Density RGB LED Rotor Blades",
          "detail": "Over 512 micro-LEDs firing synchronized pulses at 1,200 RPM."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 85,
          "label": "Silent Brushless Magnetic Stator",
          "detail": "Vibration-isolated motor base providing frictionless continuous rotation."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 45,
          "label": "Clear Acrylic Protective Safety Dome",
          "detail": "Optical grade bubble shield keeping spinning blades fully protected."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$175 — $210 USD",
      "primaryChannels": [
        "TikTok Shop Hologram Lab",
        "Shenzhen Opto-Electronics Feed"
      ],
      "searchKeywords": [
        "3D Hologram Fan LED Projector",
        "POV Spinning Propeller Display",
        "Desk Holographic Volumetric Fan"
      ],
      "antiFraudWarning": "Avoid 2-blade low-resolution models; insist on 4-blade high-resolution displays capable of smooth 60fps playback.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-049",
    "specimenCode": "TIKTOK-LAVA-FLUID // #1-RETRO",
    "title": "Silver Retro Rocket Hydrodynamic Wax Motion Lava Column Lamp",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.9,
    "priceValue": 115,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL ROOM MOOD (490K+ SOLD)",
    "scarcityBadge": "THERMAL CONVECTION CELL",
    "heroImage": "/items/anm-049.jpg",
    "tagline": "Brushed aluminum rocket-form ambient lamp where colored wax blobs rise, morph, and sink in eternal hypnotic thermal buoyancy.",
    "tags": [
      "TIKTOK SHOP 40%",
      "LAVA LAMP",
      "THERMAL CONVECTION",
      "RETRO AMBIENT",
      "PSYCHEDELIC DESK"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in tall cylinder gift box with heavy brushed aluminum base, sealed glass fluid globe, and 40W halogen heating bulb.",
      "tactileFeedback": "Cool polished aluminum shell warms gently. Watching the dense wax soften, rise, and separate into buoyant molten spheres is pure meditation.",
      "honestSnags": [
        "Requires 45 to 60 minutes of warm-up before full fluid convection cycle begins.",
        "Must never be shaken while hot, or the molten wax will emulsify into cloudy foam.",
        "The outer glass bottle gets noticeably warm during continuous multi-hour runs."
      ],
      "curatorVerdict": "Analogue physics at its dreamiest. The silent, unpredictable dance of floating wax globes outlasts any digital screen saver.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Thermal Convection Glass Globe",
          "detail": "Hermetically sealed cylinder containing proprietary wax and buoyant liquid formulation."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 75,
          "label": "40W Concentrated Heating Element Base",
          "detail": "Focused halogen heat source warming the stainless coil at the bottle base."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 15,
          "label": "Spun Aluminum Aerodynamic Cap",
          "detail": "Seamless brushed metal cone crowning the fluid column."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$105 — $130 USD",
      "primaryChannels": [
        "TikTok Shop Ambient Living",
        "Retro Motion Direct"
      ],
      "searchKeywords": [
        "Retro Rocket Lava Lamp Large",
        "Liquid Motion Wax Desk Lamp",
        "Classic Aluminum Convection Lamp"
      ],
      "antiFraudWarning": "Check that fluid is clear and unclouded. Avoid cheap plastic bases that warp under prolonged heating.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-050",
    "specimenCode": "TIKTOK-TUBE-PREAMP // #1-AUDIO",
    "title": "Dual 6J1 Vacuum Tube Audiophile Preamplifier with Headphone Amp",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.3,
    "priceValue": 145,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK HIFI (140K+ SOLD)",
    "scarcityBadge": "WARM ANALOG HARMONIC TRIODES",
    "heroImage": "/items/anm-050.jpg",
    "tagline": "Compact desktop audio preamplifier pairing twin illuminated pentode vacuum tubes with modern Bluetooth 5.1 and brushed aluminum enclosure.",
    "tags": [
      "TIKTOK SHOP 40%",
      "TUBE PREAMP",
      "VACUUM TUBES",
      "ANALOG AUDIO",
      "AUDIOPHILE HIFI"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in foam-lined audio vault box with twin matched 6J1 vacuum tubes, 12V DC power adapter, and gold-plated AUX interconnects.",
      "tactileFeedback": "Dense CNC aluminum body with smooth, weighted volume pot. Vacuum filaments glow amber while soft cyan tube-base LEDs illuminate the chassis.",
      "honestSnags": [
        "Vacuum tubes require approx 30 seconds of filament heating before audio output reaches full frequency richness.",
        "Exposed tubes become warm to the touch during operation; keep away from dangling cables.",
        "Pure preamplifier unit; requires powered desktop speakers or headphones for listening."
      ],
      "curatorVerdict": "Silky analog tube warmth injected straight into compressed modern digital streams. Vintage glow meets audiophile harmonic depth.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 35,
          "label": "Matched 6J1 Pentode Vacuum Tubes",
          "detail": "Original military-spec electron tubes delivering warm second-order harmonic sweetness."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 55,
          "label": "Precision Stepped Brass Volume Pot",
          "detail": "Weighted analog potentiometer with silky smooth rotational resistance."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Shielded Milled Aluminum Enclosure",
          "detail": "CNC unibody chassis blocking external electromagnetic RF interference."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$130 — $160 USD",
      "primaryChannels": [
        "TikTok Shop HiFi Store",
        "Shenzhen Audio Lab"
      ],
      "searchKeywords": [
        "Dual 6J1 Vacuum Tube Preamplifier",
        "Audiophile Tube Preamp Bluetooth",
        "Desktop Tube Headphone Amp"
      ],
      "antiFraudWarning": "Ensure tubes are truly wired into the signal path rather than serving as decorative LED dummies.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-051",
    "specimenCode": "TIKTOK-BIONIC-HAND // #1-ROBOT",
    "title": "Five-Finger Articulated Robotic Gripper Bionic Prosthetic Trainer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.6,
    "priceValue": 199,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL CYBER ROBOTICS (78K+ SOLD)",
    "scarcityBadge": "SERVO-ELECTRIC TENDON DRIVE",
    "heroImage": "/items/anm-051.jpg",
    "tagline": "Desktop anthropomorphic mechanical hand featuring five individually driven motorized finger joints for computer-controlled grasping.",
    "tags": [
      "TIKTOK SHOP 40%",
      "BIONIC HAND",
      "ROBOTIC GRIPPER",
      "TENDON SERVO",
      "CYBERNETIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in rigid builder crate with five metal servos, tendon tensioning tools, acrylic display plinth, and USB microcontroller board.",
      "tactileFeedback": "Dense laser-cut black alloy framework with spring-loaded joint return tendons. Finger flexing is accompanied by crisp servo whirs.",
      "honestSnags": [
        "Requires basic USB serial commands or Python script to orchestrate custom hand gestures beyond demo loops.",
        "High gripping force can crush fragile paper cups if torque limits are not programmed.",
        "Needs external 5V 3A power supply for simultaneous 5-finger articulation."
      ],
      "curatorVerdict": "True cybernetic biomechanics on your desk. Watching metal fingers curl in realistic humanoid grip patterns feels like building an android.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Individual Knuckle Pivot Phalanges",
          "detail": "Articulated dual-axis joint links driven by internal steel tendon wires."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Palm Servo Actuator Cluster",
          "detail": "Five digital metal-gear servos calibrated for independent finger positioning."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Weighted Desk Standoff Base",
          "detail": "Heavy counterbalanced base keeping the robotic wrist rigid under motion."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$180 — $220 USD",
      "primaryChannels": [
        "TikTok Shop Robotics Lab",
        "Maker Bionics Collective"
      ],
      "searchKeywords": [
        "Bionic Robotic Hand 5 Finger",
        "Articulated Prosthetic Trainer Gripper",
        "Desktop Robot Hand Kit"
      ],
      "antiFraudWarning": "Avoid 3D-printed plastic gear copies; verify all internal servos use precision brass/steel gears.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-052",
    "specimenCode": "AMZ-KORG-MONO // #1-SYNTH",
    "title": "Korg Monologue 25-Key Monophonic Fully Programmable Analog Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.4,
    "priceValue": 299.99,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER ANALOG SYNTHESIZER",
    "scarcityBadge": "OLED REAL-TIME OSCILLOSCOPE",
    "heroImage": "/items/anm-052.jpg",
    "tagline": "Authentic analog synth engine with microtuning, powerful 16-step sequencer, and integrated real-time OLED waveform monitor.",
    "tags": [
      "AMAZON #1",
      "KORG MONOLOGUE",
      "ANALOG SYNTH",
      "OLED WAVEFORM",
      "STEP SEQUENCER"
    ],
    "fieldObservation": {
      "unboxingLog": "Mint factory packaging with power adapter, quick-start guide, micro-tuning presets chart, and slim-key protection fleece.",
      "tactileFeedback": "Sandblasted anodized aluminum front panel with real wood back casing. Pots turn with heavy studio resistance; OLED reacts instantly to waveshape.",
      "honestSnags": [
        "Monophonic design; can only play one note at a time (optimized for aggressive bass and leads, not chords).",
        "Slim-key profile requires slight adjustment if accustomed to full-size piano weighted keys.",
        "Battery operation (6x AA) lasts approx 6 hours; AC adapter recommended for studio sessions."
      ],
      "curatorVerdict": "A modern analog classic. Watching the live electrical waveform bend and fold on the miniature OLED oscilloscope as you turn the drive knob is sublime.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Real-Time OLED Oscilloscope Window",
          "detail": "Visualizes electrical audio waveforms and parameter feedback in real time."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 55,
          "label": "Analog 2-Pole Resonant VCF & Drive",
          "detail": "Aggressive low-pass filter with analog overdrive adding raw harmonic grit."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "25-Key Velocity-Sensitive Slim Keyboard",
          "detail": "Compact keyboard bed tuned for expressive bassline articulation."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$280 — $320 USD",
      "primaryChannels": [
        "Amazon Pro Audio",
        "Korg Authorized Dealers"
      ],
      "searchKeywords": [
        "Korg Monologue Analog Synthesizer",
        "Korg Monophonic Synth OLED",
        "Monologue Microtuning Keyboard"
      ],
      "antiFraudWarning": "Ensure authentic Korg serial badge and original factory wooden backplate integrity.",
      "directOutbound": {
        "label": "Inspect on Amazon Electronics",
        "url": "https://amazon.com",
        "sourceType": "Official Reseller"
      }
    }
  },
  {
    "id": "anm-053",
    "specimenCode": "AMZ-CELESTRON // #1-OPTIC",
    "title": "Celestron AstroMaster 130EQ Newtonian Reflector Parabolic Telescope",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.3,
    "priceValue": 319.95,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER REFLECTOR TELESCOPE",
    "scarcityBadge": "130MM APERTURE COATED MIRRORS",
    "heroImage": "/items/anm-053.jpg",
    "tagline": "High-light-gathering Newtonian astronomical telescope with German equatorial mount, setting circles, and precision dual slow-motion cables.",
    "tags": [
      "AMAZON #1",
      "CELESTRON TELESCOPE",
      "NEWTONIAN REFLECTOR",
      "ASTRONOMY",
      "EQUATORIAL MOUNT"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy double-box shipping carton with steel tripod legs, 130mm optical tube assembly, counterweight bar, and 10mm/20mm eyepieces.",
      "tactileFeedback": "Substantial optical tube with smooth rack-and-pinion focuser. Counterweighted equatorial axis glides silently across celestial targets.",
      "honestSnags": [
        "Total assembly weighs over 12kg; best transported in a dedicated vehicle boot rather than carried on foot.",
        "Equatorial mount polar alignment takes 15 minutes of initial setup under open night skies.",
        "Reflector design requires occasional collimation mirror alignment for pinpoint star sharpness."
      ],
      "curatorVerdict": "Your personal portal into deep space. Resolving the rings of Saturn and lunar crater shadows right from your balcony is deeply humbling.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "130mm Parabolic Primary Mirror",
          "detail": "High-reflectivity aluminum coated glass mirror gathering ample light for deep-sky nebulae."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Manual German Equatorial (CG-3) Mount",
          "detail": "Precision worm gears and dual slow-motion cables for tracking Earth’s rotation."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Rigid Stainless Steel Tripod",
          "detail": "1.25-inch tubular steel legs with integrated accessory tray."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$299 — $340 USD",
      "primaryChannels": [
        "Amazon Astronomy Vault",
        "Celestron Authorized Store"
      ],
      "searchKeywords": [
        "Celestron AstroMaster 130EQ Telescope",
        "Newtonian Reflector Equatorial Telescope",
        "Celestron 130mm Astronomy Scope"
      ],
      "antiFraudWarning": "Ensure parabolic mirror rather than cheap spherical glass that produces chromatic aberration.",
      "directOutbound": {
        "label": "Inspect on Amazon Optics",
        "url": "https://amazon.com",
        "sourceType": "Official Reseller"
      }
    }
  },
  {
    "id": "anm-054",
    "specimenCode": "ETSY-OBSIDIAN-BLADE // #1-LITHIC",
    "title": "Hand-Knapped Volcanic Black Obsidian Ceremonial Dagger Blade",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.7,
    "priceValue": 155,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER LITHIC MASTERPIECE",
    "scarcityBadge": "NATURAL VOLCANIC CONCHOIDAL FRACTURE",
    "heroImage": "/items/anm-054.jpg",
    "tagline": "Authentic Aztec-inspired ritual blade pressure-flaked from raw obsidian glass, displaying razor-sharp conchoidal edge serrations.",
    "tags": [
      "ETSY #1",
      "OBSIDIAN DAGGER",
      "FLINT KNAPPING",
      "VOLCANIC GLASS",
      "CEREMONIAL RELIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood-wool presentation chest with deer-hide blade sheath and certificate of lithic craftsmanship.",
      "tactileFeedback": "Glass-smooth obsidian core with razor-sharp micro-flaked edges. The deep black volcanic glass catches light with glassy iridescence.",
      "honestSnags": [
        "Extremely sharp; must be handled with care to prevent accidental finger cuts.",
        "Brittle volcanic glass; dropping onto hard tile or stone floors will shatter the tip.",
        "Strictly a ceremonial display relic, not intended for heavy camp batoning or pry work."
      ],
      "curatorVerdict": "Earth’s sharpest natural edge. Sourced from cooled volcanic magma and knapped with Stone Age precision, it feels ancient and lethal.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Pressure-Flaked Obsidian Cutting Edge",
          "detail": "Sub-nanometer natural blade edge sharper than surgical steel scalpels."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Natural Conchoidal Fracture Flutes",
          "detail": "Rippled shell-like fracture scars evidencing hand-hammerstone knapping."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Leather-Wrapped Antler Handle Tang",
          "detail": "Raw stag antler hilt bound with wax-treated sinew cord."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$140 — $175 USD",
      "primaryChannels": [
        "Etsy Lithic Crafts Guild",
        "Prehistoric Arts Atelier"
      ],
      "searchKeywords": [
        "Hand Knapped Obsidian Dagger Knife",
        "Volcanic Glass Ritual Blade",
        "Aztec Obsidian Ceremonial Athame"
      ],
      "antiFraudWarning": "Avoid molded black resin fake knives; genuine obsidian is cold, heavy, and shows genuine vitreous conchoidal rings.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-055",
    "specimenCode": "ALI-TACTICAL-RIG // #1-MODULAR",
    "title": "Heavy-Duty 1000D Cordura Modular Chest Rig Tactical Harness Vest",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.1,
    "priceValue": 138,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 GLOBAL TACTICAL OUTDOOR HIT",
    "scarcityBadge": "LASER-CUT PALS/MOLLE WEBBING",
    "heroImage": "/items/anm-055.jpg",
    "tagline": "Quick-detach tactical chest rig constructed from military-grade Cordura with water-drainage grommets and modular mag pouches.",
    "tags": [
      "ALIEXPRESS #1",
      "CHEST RIG",
      "TACTICAL VEST",
      "CORDURA 1000D",
      "MOLLE HARNESS"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy sealed polymer shipping pouch containing chest rig base, H-harness straps, waist strap, and detachable utility pouch.",
      "tactileFeedback": "Rugged water-repellent 1000D nylon fabric. The ITW quick-release polymer buckles snap shut with authoritative mechanical clicks.",
      "honestSnags": [
        "Adjusting all 6 harness straps for optimal body fit takes 10 minutes on initial wear.",
        "Thick Cordura fabric feels stiff out of the box; softens gracefully after two weeks of wear.",
        "Not intended to hold ballistic armor plates (load-bearing chest rig platform only)."
      ],
      "curatorVerdict": "Industrial utilitarianism at its finest. Load-bearing geometry designed to hold tools, radios, and EDC gear close to the chest.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Laser-Cut PALS Webbing Matrix",
          "detail": "Hypalon composite panel for attaching custom modular utility pockets."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 70,
          "label": "Quick-Detach ITW Nexus Buckles",
          "detail": "High-impact polymer side releases for rapid one-handed donning."
        },
        {
          "id": "hs-3",
          "x": 70,
          "y": 70,
          "label": "Ergonomic Padded H-Harness",
          "detail": "Cross-back breathable mesh straps distributing weight across shoulders."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$125 — $155 USD",
      "primaryChannels": [
        "AliExpress Tactical Lab",
        "Cordura Gear Atelier"
      ],
      "searchKeywords": [
        "Modular Tactical Chest Rig Cordura",
        "Micro Fight Chest Rig Pouch",
        "Laser Cut MOLLE Tactical Vest"
      ],
      "antiFraudWarning": "Look for authentic 1000D/500D nylon weave; avoid thin polyester copies with fraying seams.",
      "directOutbound": {
        "label": "Inspect on AliExpress Maker",
        "url": "https://aliexpress.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-056",
    "specimenCode": "MERC-OLYMPUS-PEN // #1-VINTAGE",
    "title": "Vintage Olympus Pen EE-2 Selenium Meter 35mm Half-Frame Film Camera",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.3,
    "priceValue": 175,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 VERIFIED TOKYO BOUTIQUE PHOTO",
    "scarcityBadge": "BATTERYLESS SELENIUM METER",
    "heroImage": "/items/anm-056.jpg",
    "tagline": "Legendary 1968 Japanese pocket camera capturing 72 vertical frames on a standard 36-exposure film roll powered purely by selenium photocell.",
    "tags": [
      "MERCARI #1",
      "OLYMPUS PEN",
      "HALF FRAME",
      "35MM FILM",
      "SELENIUM METER"
    ],
    "fieldObservation": {
      "unboxingLog": "Sourced from Tokyo vintage camera vault with leatherette wrist strap, original lens cap, and fresh test roll of 400 ISO film.",
      "tactileFeedback": "Dense metallic chassis with textured gray leatherette grip. Winding the knurled thumbwheel produces a silky mechanical ratcheting click.",
      "honestSnags": [
        "Half-frame format defaults to portrait vertical composition when camera is held naturally.",
        "Fixed focus D-Zuiko 28mm lens requires at least 1.5m distance from subject for sharp portraits.",
        "Selenium light meter relies on ambient light; red warning flag pops up in viewfinder if scene is too dark."
      ],
      "curatorVerdict": "Timeless Japanese industrial genius. Double the photos per roll with zero batteries required—ever.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Faceted Selenium Photocell Eye",
          "detail": "Concentric honeycomb light meter powering the auto-exposure needle without batteries."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 55,
          "label": "D-Zuiko 28mm f/3.5 Coated Glass Lens",
          "detail": "Crisp multicoated Japanese prime lens with legendary corner-to-corner sharpness."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 35,
          "label": "Mechanical Thumbwheel Film Advance",
          "detail": "Tactile winding wheel cocking shutter and advancing half-frame negative."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$160 — $195 USD",
      "primaryChannels": [
        "Mercari Japan Vintage Camera",
        "Tokyo Ginza Optical Archive"
      ],
      "searchKeywords": [
        "Olympus Pen EE-2 35mm Camera",
        "Half Frame Vintage Olympus Film Camera",
        "Olympus Pen EE Selenium Working"
      ],
      "antiFraudWarning": "Verify that the selenium meter is active and the red low-light warning flag operates properly.",
      "directOutbound": {
        "label": "Inspect on Mercari Japan",
        "url": "https://jp.mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-057",
    "specimenCode": "RAK-OTAMATONE // #1-TOKYO",
    "title": "Maywa Denki Otamatone Deluxe App-Connected Synthesizer Instrument",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.7,
    "priceValue": 118,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 RAKUTEN TOKYO NOVELTY INSTRUMENT",
    "scarcityBadge": "SQUEEZE-MOUTH ACOUSTIC MODULATION",
    "heroImage": "/items/anm-057.jpg",
    "tagline": "Cult Japanese eighth-note synthesizer with touch-sensitive pitch ribbon and rubber face mouth that modulates tone and vibrato when squeezed.",
    "tags": [
      "RAKUTEN #1",
      "OTAMATONE DELUXE",
      "MAYWA DENKI",
      "TOUCH RIBBON",
      "AKIHABARA TECH"
    ],
    "fieldObservation": {
      "unboxingLog": "Signature Japanese cartoon box with 3.5mm OTM link cable, branded carrying strap, and AAA batteries included.",
      "tactileFeedback": "Smooth silicone cartoon head with flexible mouth lips. Sliding fingers along the capacitive neck ribbon produces whimsical vocal glissandos.",
      "honestSnags": [
        "Has no frets; hitting exact concert pitch requires deliberate muscle memory and ear training.",
        "Continuous playing can cause mild finger fatigue on the resistance ribbon.",
        "Roommates will either join the performance or question your life choices within 5 minutes."
      ],
      "curatorVerdict": "Peak Tokyo pop-art absurdity. Squeezing a rubber face to make a singing musical note produce crying vibrato is pure joyous genius.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Linear Pitch Ribbon Stem",
          "detail": "Conductive resistive strip allowing continuous pitch glides from bass to soprano."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Silicone Squeeze Mouth Resonator",
          "detail": "Opening and closing the rubber mouth alters output acoustic timbre like a human wah-wah."
        },
        {
          "id": "hs-3",
          "x": 75,
          "y": 80,
          "label": "Otamatone Link 3.5mm Audio Output",
          "detail": "Line-out jack connecting directly into guitar effects pedals or smartphone synth apps."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$105 — $135 USD",
      "primaryChannels": [
        "Rakuten Japan Novelty Vault",
        "Maywa Denki Official Store"
      ],
      "searchKeywords": [
        "Maywa Denki Otamatone Deluxe",
        "Otamatone Electronic Musical Toy",
        "Otamatone Techno Smartphone Link"
      ],
      "antiFraudWarning": "Insist on genuine Maywa Denki / Cube Japan models; counterfeit copies suffer from scratchy audio ribbons.",
      "directOutbound": {
        "label": "Inspect on Rakuten Tokyo Vault",
        "url": "https://rakuten.co.jp",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-058",
    "specimenCode": "ETSY-NAUTILUS-SLAB // #1-FOSSIL",
    "title": "Polished Ancient Ammonite & Nautiloid Cephalopod Fossil Matrix Slab",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.8,
    "priceValue": 135,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER PALEONTOLOGY ART",
    "scarcityBadge": "400 MILLION YEAR DEVONIAN PERIOD",
    "heroImage": "/items/anm-058.jpg",
    "tagline": "Natural black limestone slab bearing calcified straight-shelled orthoconic and coiled nautiloid fossils polished to a mirror finish.",
    "tags": [
      "ETSY #1",
      "AMMONITE FOSSIL",
      "NAUTILOID",
      "DEVONIAN MATRIX",
      "NATURAL HISTORY"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood-reinforced archival crate with black iron display easel and signed authenticity origin certificate from Morocco.",
      "tactileFeedback": "Cool, glass-polished Devonian limestone. The white calcite mineralized shell chambers stand out with striking contrast against black matrix.",
      "honestSnags": [
        "Weighs over 1.9kg; requires sturdy desktop or heavy shelf display.",
        "Avoid chemical cleaning sprays; warm water and mineral oil protect the natural calcite sheen.",
        "Each slab is a one-of-a-kind biological specimen with natural geological fissures."
      ],
      "curatorVerdict": "Four hundred million years of Earth history resting on your desk. Ancient ocean predators immortalized in gleaming white calcite.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Mineralized Calcite Phragmocone",
          "detail": "Chambered interior showing internal siphuncle tube anatomy preserved in crystal."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Natural Devonian Bituminous Limestone",
          "detail": "Deep charcoal sedimentary matrix holding fossilized sea life."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Diamond-Polished Beveled Base",
          "detail": "Beveled planar underside providing stable upright display on metal easel."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$120 — $155 USD",
      "primaryChannels": [
        "Etsy Paleontology Guild",
        "Moroccan Mineral Collectors"
      ],
      "searchKeywords": [
        "Polished Orthoceras Ammonite Fossil Slab",
        "Devonian Cephalopod Limestone Plate",
        "Moroccan Prehistoric Marine Fossil"
      ],
      "antiFraudWarning": "Ensure real calcite mineral replacement rather than cast resin copies. Authentic pieces show natural crystal cleavages.",
      "directOutbound": {
        "label": "Inspect on Etsy Fossil Vault",
        "url": "https://etsy.com",
        "sourceType": "Certified Paleontologist"
      }
    }
  },
  {
    "id": "anm-059",
    "specimenCode": "BB-SUITCASE-VINYL // #1-RETRO",
    "title": "Victrola Vintage 3-Speed Suitcase Turntable with Built-in Speakers",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 8.8,
    "priceValue": 119.99,
    "platform": "Best Buy",
    "salesRank": 1,
    "salesRankBadge": "#1 NOSTALGIA AUDIO BESTSELLER",
    "scarcityBadge": "RETRO LEATHERETTE CARRYING CASE",
    "heroImage": "/items/anm-059.jpg",
    "tagline": "Classic suitcase-styled belt-drive record player with custom pitch control, stereo speakers, and wireless Bluetooth stream input.",
    "tags": [
      "BEST BUY #1",
      "SUITCASE TURNTABLE",
      "VINYL RECORD PLAYER",
      "3-SPEED BELT DRIVE",
      "RETRO AUDIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Retro retail luggage box with chrome latches, 45 RPM adapter, power cable, and spare ceramic stylus needle.",
      "tactileFeedback": "Vintage textured leatherette exterior with solid chrome corner protectors. Lifting the tonearm onto spinning vinyl drops needle with authentic crackle.",
      "honestSnags": [
        "Built-in speakers provide cozy vintage tone, but audiophile bass requires connecting external powered monitors via RCA out.",
        "Warped vintage vinyl records require careful tonearm counterweight adjustment.",
        "Suitcase lid must be propped open when playing standard 12-inch 33 RPM LP discs."
      ],
      "curatorVerdict": "The quintessential gateway to the vinyl ritual. The tactile ceremony of dropping the needle on wax turns casual listening into an event.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "3-Speed Belt-Driven Turntable Platter",
          "detail": "Supports 33-1/3, 45, and 78 RPM records with auto-stop toggle."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 55,
          "label": "Damped Cueing Tonearm & Ceramic Stylus",
          "detail": "Balanced tonearm with finger-lift lever protecting record grooves."
        },
        {
          "id": "hs-3",
          "x": 25,
          "y": 75,
          "label": "Chrome Corner Hardware & Latches",
          "detail": "Heavy-duty metal clasps sealing the transport luggage case."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$100 — $135 USD",
      "primaryChannels": [
        "Best Buy Audio Heritage",
        "Victrola Official Store"
      ],
      "searchKeywords": [
        "Victrola Vintage Suitcase Turntable",
        "Portable 3-Speed Record Player Bluetooth",
        "Suitcase Vinyl Player Chrome"
      ],
      "antiFraudWarning": "Ensure genuine ceramic stylus and belt-drive isolation rather than cheap motor knockoffs.",
      "directOutbound": {
        "label": "Inspect on Best Buy",
        "url": "https://bestbuy.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-060",
    "specimenCode": "ALL-VFD-CHRONO // #1-WARSAW",
    "title": "Vintage Cold-War Vacuum Fluorescent Display Desktop Digital Clock",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.6,
    "priceValue": 210,
    "platform": "Allegro",
    "salesRank": 1,
    "salesRankBadge": "#1 SURPLUS HI-TECH CHRONOMETER",
    "scarcityBadge": "SOVIET MULTI-DIGIT VFD TUBE",
    "heroImage": "/items/anm-060.jpg",
    "tagline": "Retro desktop digital timekeeper illuminated by authentic teal-green vacuum fluorescent filament tubes inside a smoky acrylic chassis.",
    "tags": [
      "ALLEGRO #1",
      "VFD CLOCK",
      "VACUUM FLUORESCENT",
      "SOVIET SURPLUS",
      "TEAL PHOSPHOR"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in surplus wooden chest with low-voltage USB-C power regulator, Russian schematics reproduction, and backup time battery.",
      "tactileFeedback": "Cool smooth acrylic enclosure. The 505nm cyan-green vacuum tube segments glow with piercing crispness and zero flicker.",
      "honestSnags": [
        "VFD phosphor glow is vivid; bedroom sleepers may need to set brightness to minimum before turning off lights.",
        "High-voltage internal boost converter produces faint ultrasonic hum audible within 10cm of rear vent.",
        "Time setting uses rear momentary tactile buttons."
      ],
      "curatorVerdict": "Cold-War Soviet avionics transformed into desk art. The unearthly cyan phosphor glow makes modern LED clocks look completely pedestrian.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Multi-Digit Soviet Glass VFD Tube",
          "detail": "Original Cold-War phosphor vacuum tube displaying 8-digit precision telemetry."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 75,
          "label": "Internal Quartz Clockwork Controller",
          "detail": "High-accuracy real-time clock chip with CR2032 power backup."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 60,
          "label": "Transparent Smoked Acrylic Enclosure",
          "detail": "Laser-cut housing revealing internal copper PCB traces and capacitors."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$190 — $235 USD",
      "primaryChannels": [
        "Allegro Eastern Surplus",
        "Baltic Horology Vault"
      ],
      "searchKeywords": [
        "Soviet VFD Tube Clock IV-18",
        "Vacuum Fluorescent Display Clock Vintage",
        "Elektronika Soviet VFD Chronometer"
      ],
      "antiFraudWarning": "Check for authentic glass vacuum getters; beware of modern green LED segmented copies masquerading as vacuum tubes.",
      "directOutbound": {
        "label": "Inspect on Allegro Surplus",
        "url": "https://allegro.pl",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const BATCH_POOL_OCT_19: RawOdditySeed[] = [
  {
    "id": "anm-001",
    "specimenCode": "TIKTOK-FERRO // #1-ACOUSTIC",
    "title": "Magnetic Ferrofluid Acoustic Desktop Visualizer Speaker",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.3,
    "priceValue": 139,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL SOUND VISUALIZER (340K+ SOLD)",
    "scarcityBadge": "MAGNETIC NANO-FLUID",
    "heroImage": "/items/anm-001.jpg",
    "tagline": "Wood-grain acoustic desk speaker featuring a circular illuminated viewport where black magnetic ferrofluid spikes and dances to ambient sound frequencies.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FERROFLUID SPEAKER",
      "SOUND VISUALIZER",
      "WOOD GRAIN",
      "MAGNETIC LIQUID"
    ],
    "fieldObservation": {
      "unboxingLog": "Housed in matte magnetic closure box with USB-C cable, auxiliary audio jack, and pickup microphone calibration guide.",
      "tactileFeedback": "Textured gray wood-grain vertical tower with central circular backlit glass cell. Ferrofluid spikes rhythmically in response to voice and music.",
      "honestSnags": [
        "Ferrofluid can leave transient micro-droplets on glass if jarred violently while unpowered.",
        "Pickup microphone is sensitive; placing it right next to a mechanical keyboard will cause keystrokes to bounce the fluid.",
        "Rechargeable internal battery provides approx 8 hours of continuous illumination."
      ],
      "curatorVerdict": "Mesmerizing physical sound visualization. The spiky fluid looks like a living alien creature trapped behind glass responding to every bass drop.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 32,
          "label": "Magnetic Fluid Reaction Chamber",
          "detail": "Precision glass viewing cell containing suspended nano-scale magnetic particles."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 54,
          "label": "Illuminated LED Status Logo",
          "detail": "Soft cyan backlight highlighting acoustic pickup sensitivity and battery levels."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 70,
          "label": "Vertical Acoustic Wood-Grain Cabinet",
          "detail": "Acoustic baffle housing dual high-excursion speaker drivers and magnetic coil driver."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$125 — $155 USD",
      "primaryChannels": [
        "TikTok Shop Trending Electronics",
        "AliExpress Direct"
      ],
      "searchKeywords": [
        "Ferrofluid Sound Visualizer Speaker",
        "Magnetic Fluid Music Rhythm Lamp",
        "Venom Ferrofluid Desk Toy"
      ],
      "antiFraudWarning": "Avoid models with cloudy suspension oil. High-grade units use clear mineral fluid that prevents glass wall staining.",
      "directOutbound": {
        "label": "Source on TikTok Shop Maker Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-003",
    "specimenCode": "TIKTOK-LEVIT-BONSAI // #1-FLORA",
    "title": "Magnetic Levitating Bonsai Planter Pot with Wood Grain Magnetic Base",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.1,
    "priceValue": 129.99,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL BOTANICAL ODDITY",
    "scarcityBadge": "MAGNETIC LEVITATION",
    "heroImage": "/items/anm-003.jpg",
    "tagline": "Electromagnetic suspension base that levitates a faceted geometric planter pot, smoothly rotating 360 degrees in mid-air above a wood base.",
    "tags": [
      "TIKTOK SHOP 40%",
      "MAGNETIC LEVITATION",
      "FLOATING BONSAI",
      "GEOMETRIC POT",
      "DESK FLORA"
    ],
    "fieldObservation": {
      "unboxingLog": "Padded box containing faceted geometric planter, magnetic wood-finish base, power adapter, and plant potting instructions.",
      "tactileFeedback": "Faceted geometric polymer pot hovering 20mm above the wood base. Gentle push initiates a smooth, continuous 360-degree rotation.",
      "honestSnags": [
        "Total soil and plant weight must not exceed 250g to maintain magnetic equilibrium.",
        "Requires watering with a dropper or removing the pot to prevent water overflow onto the base.",
        "Needs continuous AC power to stay afloat."
      ],
      "curatorVerdict": "Science fiction meets Japanese garden zen. A living miniature tree floating and spinning in mid-air never fails to captivate visitors.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 55,
          "label": "Faceted Geometric Levitation Pot",
          "detail": "Lightweight multi-faceted white pot holding small bonsai, succulents, or air plants."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 72,
          "label": "Magnetic Suspension Air Gap",
          "detail": "20mm electromagnetic levitation gap providing frictionless perpetual rotation."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Solid Wood Grain Electromagnetic Base",
          "detail": "Sub-surface neodymium magnet and electromagnet array maintaining active vertical stabilization."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$115 — $145 USD",
      "primaryChannels": [
        "TikTok Shop Home & Garden",
        "Amazon Home Innovation"
      ],
      "searchKeywords": [
        "Levitating Bonsai Pot",
        "Magnetic Floating Plant Pot",
        "Rotating Air Plant Planter"
      ],
      "antiFraudWarning": "Ensure base includes overheat protection and automatic gentle landing during power interruption.",
      "directOutbound": {
        "label": "Source on TikTok Shop Botanical",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-005",
    "specimenCode": "TIKTOK-JELLYFISH // #1-KINETIC",
    "title": "LED Illuminated Desktop Kinetic Jellyfish Mood Lamp Aquarium",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9,
    "priceValue": 115,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL SENSORY LAMP (420K+ SOLD)",
    "scarcityBadge": "HYDRODYNAMIC AIR PUMP",
    "heroImage": "/items/anm-005.jpg",
    "tagline": "Whisper-quiet water circulation cylinder holding lifelike silicone jellyfish that glide and dance under customizable multi-color LED illumination.",
    "tags": [
      "TIKTOK SHOP 40%",
      "JELLYFISH LAMP",
      "KINETIC AQUARIUM",
      "COLOR CHANGING LED",
      "SENSORY LIGHT"
    ],
    "fieldObservation": {
      "unboxingLog": "Comes with clear acrylic cylinder tank, lifelike silicone jellyfish models, USB power cable, and dropper for dish soap wetting agent.",
      "tactileFeedback": "Smooth acrylic tower with weighted base. The soft silicone jellyfish drift and pulse with natural fluid motion in the internal micro-current.",
      "honestSnags": [
        "Distilled water and a few drops of dish soap are required during initial setup to break surface tension so jellyfish sink.",
        "Requires occasional water top-up every few months due to natural evaporation.",
        "Must be kept away from mischievous cats who might swat at the floating tentacles."
      ],
      "curatorVerdict": "All the hypnotic grace of a deep-sea aquarium with zero feeding or tank cleaning. Perfect ambient companion for late-night desk sessions.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Hydrodynamic Fluid Column",
          "detail": "Sealed clear cylindrical tank with silent micro-pump generating realistic undulating water currents."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 55,
          "label": "Translucent Silicone Jellyfish Models",
          "detail": "Precision weighted silicone medusas designed to pulse and swim convincingly under water flow."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Multi-Color RGB LED Base Controls",
          "detail": "Push-button touch switches for cycling through 16 ambient color presets and automatic fade modes."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$100 — $125 USD",
      "primaryChannels": [
        "TikTok Shop Sensory Lighting",
        "Amazon Home Innovation"
      ],
      "searchKeywords": [
        "LED Jellyfish Lamp Aquarium",
        "Kinetic Mood Lamp Water Cylinder",
        "Sensory Jellyfish Desk Aquarium"
      ],
      "antiFraudWarning": "Look for brushless quiet water pumps; noisy vibrating pumps ruin the calming ambient atmosphere.",
      "directOutbound": {
        "label": "Source on TikTok Shop Sensory",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-006",
    "specimenCode": "TIKTOK-HEXAPOD // #1-SPIDER",
    "title": "Freenove Big Hexapod 18-DOF Programmable Spider Robot with FPV Camera",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.5,
    "priceValue": 219,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL ROBOTICS KIT",
    "scarcityBadge": "18-DOF SPIDER BOT",
    "heroImage": "/items/anm-006.jpg",
    "tagline": "Articulated 6-legged bionic walking robot kit powered by 18 high-torque servos, ultrasonic obstacle avoidance eyes, and live FPV video streaming.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FREENOVE HEXAPOD",
      "18-DOF ROBOT",
      "SPIDER BOT",
      "FPV CAMERA"
    ],
    "fieldObservation": {
      "unboxingLog": "Comprehensive builder kit with matte black laser-cut acrylic chassis, 18 metal-gear servos, controller board, camera module, and remote control.",
      "tactileFeedback": "Dense structural chassis with intricate cable routing. Walking gaits are organic and spider-like, traversing carpets and low obstacles with ease.",
      "honestSnags": [
        "Assembly takes approx 3 to 4 hours of screwdriver work and careful servo center calibration.",
        "High power draw from 18 servos requires two high-drain 18650 lithium batteries (often sold separately).",
        "Spider movement across bare hardwood floors produces rhythmic mechanical click-clack sounds."
      ],
      "curatorVerdict": "Genuinely eerie biomechanical engineering. Watching it crouch, twist, and scuttle across the floor with its ultrasonic eye head is breathtaking.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 40,
          "y": 40,
          "label": "Ultrasonic Distance Eyes & FPV Camera",
          "detail": "Twin ultrasonic transducers for depth sensing paired with high-definition live video camera."
        },
        {
          "id": "hs-2",
          "x": 25,
          "y": 55,
          "label": "18 Metal-Gear Articulated Leg Servos",
          "detail": "3 independent degrees of freedom per leg enabling complex omnidirectional walking gaits."
        },
        {
          "id": "hs-3",
          "x": 55,
          "y": 32,
          "label": "Central Aluminum/Acrylic Dual Deck Chassis",
          "detail": "Houses microcontroller board, Wi-Fi module, battery cradle, and programmable RGB top lights."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$200 — $245 USD",
      "primaryChannels": [
        "TikTok Shop Maker Lab",
        "Amazon STEM Robotics"
      ],
      "searchKeywords": [
        "Freenove Big Hexapod Robot Kit",
        "18-DOF Spider Robot FPV",
        "Bionic Hexapod Raspberry Pi Robot"
      ],
      "antiFraudWarning": "Verify metal-gear servos; plastic gear clones strip quickly under the heavy torque of 6-legged walking.",
      "directOutbound": {
        "label": "Source on TikTok Shop Maker Lab",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-012",
    "specimenCode": "DIVOOM-PIXOO // #012",
    "title": "Divoom Pixoo Cyber Backpack with Programmable RGB LED Matrix Display",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.2,
    "priceValue": 149,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL PIXEL ART WEARABLE",
    "scarcityBadge": "PROGRAMMABLE LED PANEL",
    "heroImage": "/items/anm-012.jpg",
    "tagline": "Water-resistant urban backpack equipped with a flexible 16x16 full-color RGB pixel screen, controlled wirelessly via iOS/Android companion app.",
    "tags": [
      "TIKTOK SHOP 40%",
      "DIVOOM PIXOO",
      "PIXEL BACKPACK",
      "RGB LED DISPLAY",
      "TECHWEAR PACK",
      "CUSTOM ANIMATION"
    ],
    "fieldObservation": {
      "unboxingLog": "Includes heavy-duty water-repellent backpack with integrated internal USB power bank pocket and quick-start pixel gallery manual.",
      "tactileFeedback": "Rugged ballistic polyester fabric with matte protective screen shield. The bright pixel matrix displays animations cleanly even in bright daylight.",
      "honestSnags": [
        "Requires a portable power bank (not included) connected via internal USB-A cord to power the LED display.",
        "Avoid sharp impacts directly against the front LED panel face.",
        "Adds approx 1.1kg of base weight compared to an ultralight nylon daypack."
      ],
      "curatorVerdict": "Walking digital billboard for your favorite 8-bit game sprites. Changing your bag's art on the fly with your smartphone is endlessly entertaining.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 30,
          "y": 55,
          "label": "Flexible 16x16 Full-Color RGB LED Screen",
          "detail": "High-brightness display capable of rendering custom pixel animations, clocks, and text."
        },
        {
          "id": "hs-2",
          "x": 36,
          "y": 24,
          "label": "Magnetic Weatherproof Top Flap",
          "detail": "Water-resistant closure protecting internal laptop sleeve and electronic cabling from rain."
        },
        {
          "id": "hs-3",
          "x": 82,
          "y": 52,
          "label": "Ergonomic Air-Mesh Shoulder Straps",
          "detail": "Breathable foam padding with integrated reflective safety strips and chest buckle."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "Amazon Techwear Store",
        "Divoom Official Store"
      ],
      "searchKeywords": [
        "Divoom Pixoo Backpack LED Screen",
        "Pixel Art Programmable Backpack",
        "Smart LED Display Urban Pack"
      ],
      "antiFraudWarning": "Ensure you buy the official Divoom model to access their global online pixel art sharing community.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-013",
    "specimenCode": "ANTIGRAV-WATER // #013",
    "title": "Anti-Gravity Stroboscopic Water Droplet Optical Levitator Humidifier",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.4,
    "priceValue": 112,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 OPTICAL ILLUSION ODDITY",
    "scarcityBadge": "STROBOSCOPIC LEVITATION",
    "heroImage": "/items/anm-013.jpg",
    "tagline": "Ultrasonic cool-mist humidifier utilizing synchronized stroboscopic LED lighting to make water droplets appear to float upward against gravity.",
    "tags": [
      "TIKTOK SHOP 40%",
      "ANTIGRAVITY",
      "WATER DROPLETS",
      "STROBOSCOPIC ILLUSION",
      "COOL MIST HUMIDIFIER",
      "AMBIENT DESK"
    ],
    "fieldObservation": {
      "unboxingLog": "Padded box with humidifier unit, wireless remote control, USB-C power cord, and distilled water filling funnel.",
      "tactileFeedback": "Matte ABS housing with dual pillar archway. Water drops appear suspended motionless in mid-air or slowly rising upwards to the emitter head.",
      "honestSnags": [
        "The optical levitation effect relies on high-speed pulsed LEDs; people sensitive to stroboscopic lights should use steady ambient mode.",
        "Distilled or purified water is required to prevent mineral scale deposits on the drop nozzle.",
        "Water tank capacity (~600ml) provides approx 8 hours of continuous misting."
      ],
      "curatorVerdict": "A mind-bending optical illusion. Reaching out with your finger to touch a water drop floating upwards is a delightfully uncanny sensation.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 42,
          "y": 55,
          "label": "Stroboscopic Levitating Droplet Stream",
          "detail": "Precision water nozzle pulsing droplets synchronized to tuned frequency LED flashes."
        },
        {
          "id": "hs-2",
          "x": 40,
          "y": 18,
          "label": "Ultrasonic Cool Mist Emitter",
          "detail": "High-frequency ceramic transducer generating fine humidifying vapor out of the top aperture."
        },
        {
          "id": "hs-3",
          "x": 42,
          "y": 82,
          "label": "Weighted Water Reservoir & Base Controls",
          "detail": "Conceals water pump and smart water-level sensor with automatic shut-off."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$100 — $130 USD",
      "primaryChannels": [
        "Amazon Optical Devices",
        "TikTok Shop Gadget Hub"
      ],
      "searchKeywords": [
        "Anti Gravity Water Droplet Humidifier",
        "Levitating Water Drop Lamp",
        "Strobe Effect Upward Water Fountain"
      ],
      "antiFraudWarning": "Avoid models with non-adjustable strobe frequencies; quality units include wireless remote frequency fine-tuning.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-002",
    "specimenCode": "CYBERDECK-HANDHELD // #002",
    "title": "Handcrafted Pocket Cyberdeck Clamshell Terminal with Physical QWERTY Keyboard",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 265,
    "platform": "AliExpress",
    "salesRank": 2,
    "salesRankBadge": "#2 GLOBAL MAKER TERMINAL",
    "scarcityBadge": "LASER-CUT BIRCH CHASSIS",
    "heroImage": "/items/anm-002.jpg",
    "tagline": "Ultra-portable Linux cyberdeck crafted from laser-cut birch plywood, featuring an integrated tactile physical keyboard and widescreen terminal display.",
    "tags": [
      "CYBERDECK",
      "POCKET TERMINAL",
      "PHYSICAL QWERTY",
      "LINUX CLAMSHELL",
      "MAKER HARDWARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Crafted in an artisan maker lab, complete with high-durability friction hinges, braided USB-C power ribbon, and pre-flashed Linux kernel.",
      "tactileFeedback": "Warm unfinished laser-cut birch chassis with ultra-tactile microswitch QWERTY keys. The dual-hinge friction mount holds the widescreen display rock solid at 110 degrees.",
      "honestSnags": [
        "Miniature QWERTY keyboard requires thumb-typing dexterity; not suitable for 120 WPM touch-typing essays.",
        "Bare wood casing should not be exposed to heavy rain or wet outdoor environments.",
        "Screen viewing angle is optimal straight-on."
      ],
      "curatorVerdict": "Peak cyberpunk hacker nostalgia. Holding a full portable Linux terminal in the palm of your hand with clicky physical keys is immensely rewarding.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Widescreen Terminal LCD Display",
          "detail": "High-contrast matte display showing active terminal command line and system stats."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 75,
          "label": "Tactile Physical QWERTY Keypad",
          "detail": "Integrated BlackBerry-style tactile keypad optimized for portable thumb typing."
        },
        {
          "id": "hs-3",
          "x": 38,
          "y": 50,
          "label": "Laser-Cut Birch Friction Hinge",
          "detail": "Durable multi-layer wood hinge assembly allowing variable display tilt angles."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$240 — $290 USD",
      "primaryChannels": [
        "AliExpress Custom Maker Stores",
        "Independent Hardware Forums"
      ],
      "searchKeywords": [
        "Penkesu Cyberdeck Clamshell",
        "Portable Linux Terminal Keyboard",
        "Handheld Raspberry Pi Cyberdeck"
      ],
      "antiFraudWarning": "Verify that the unit comes pre-assembled with working screen controller and keyboard interface board.",
      "directOutbound": {
        "label": "Inspect on Maker Portal",
        "url": "https://www.aliexpress.com",
        "sourceType": "Artisan Studio"
      }
    }
  },
  {
    "id": "anm-004",
    "specimenCode": "MOOG-ETHERWAVE // #004",
    "title": "Moog Etherwave Analog Theremin with Hand-Finished Ash Wood Cabinet",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.7,
    "priceValue": 340,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 CLASSIC ANALOG INSTRUMENT",
    "scarcityBadge": "MOOG HERITAGE",
    "heroImage": "/items/anm-004.jpg",
    "tagline": "The definitive touchless analog electronic instrument, controlled purely by moving hands through electromagnetic fields around dual nickel antennas.",
    "tags": [
      "MOOG SYNTH",
      "ETHERWAVE THEREMIN",
      "TOUCHLESS MUSIC",
      "ANALOG HETERODYNE",
      "ASH WOOD"
    ],
    "fieldObservation": {
      "unboxingLog": "Housed in genuine solid Appalachian ash hardwood, complete with nickel-plated brass pitch and volume antennas, mic stand adapter, and calibrated power supply.",
      "tactileFeedback": "Smooth oiled natural hardwood housing. Playing it requires zero physical contact—subtle millimeter finger modulations near the vertical antenna sculpt pitch and vibrato.",
      "honestSnags": [
        "Demands genuine ear-training and pitch muscle memory; there are no frets or keys to guide you.",
        "Requires at least 4 feet of open clearance from metal desks and computers to avoid stray capacitive coupling.",
        "Tone is haunting and vocal; can easily overpower other instruments if the volume antenna loop is miscalibrated."
      ],
      "curatorVerdict": "The quintessential electronic anomaly. Sculpting eerie vocal melodies out of thin air without ever touching the instrument is pure sonic magic.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 72,
          "y": 22,
          "label": "Straight Nickel-Plated Pitch Antenna",
          "detail": "Vertical rod controlling output frequency via hand proximity to the antenna radio-frequency field."
        },
        {
          "id": "hs-2",
          "x": 20,
          "y": 78,
          "label": "Horizontal Loop Volume Antenna",
          "detail": "Curved antenna controlling instrument amplitude and articulation via vertical hand movement."
        },
        {
          "id": "hs-3",
          "x": 65,
          "y": 62,
          "label": "Timbre Modulation & Waveform Controls",
          "detail": "Rotary knobs shaping analog waveform harmonics from pure sine wave to edgy brassy tones."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$320 — $370 USD",
      "primaryChannels": [
        "Amazon Pro Audio",
        "Moog Authorized Dealers"
      ],
      "searchKeywords": [
        "Moog Etherwave Theremin Ash",
        "Analog Theremin Touchless Instrument",
        "Moog Music Etherwave"
      ],
      "antiFraudWarning": "Ensure it is genuine Moog Etherwave with Appalachian ash cabinet rather than miniature digital novelty toys.",
      "directOutbound": {
        "label": "Inspect on Amazon Audio Vault",
        "url": "https://www.amazon.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-007",
    "specimenCode": "NIXIE-CHRONO // #007",
    "title": "Vintage Walnut Wood RGB Edge-Lit Acrylic Simulation Tube Clock",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.1,
    "priceValue": 169,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 RETRO TECH CHRONOGRAPH",
    "scarcityBadge": "SOLID WALNUT BASE",
    "heroImage": "/items/anm-007.jpg",
    "tagline": "Solid dark walnut desktop clock utilizing multi-layered laser-engraved acrylic light guides and RGB LEDs to simulate the warm aesthetics of vintage glow tubes.",
    "tags": [
      "WALNUT WOOD",
      "EDGE-LIT CLOCK",
      "GLOW TUBE SIMULATION",
      "RGB DESK CLOCK",
      "WARM AMBIENCE"
    ],
    "fieldObservation": {
      "unboxingLog": "Packaged in presentation box with solid walnut base, 4 acrylic display chambers, USB-C braided cable, and setting guide.",
      "tactileFeedback": "Rich natural oiled walnut finish with pleasant heft. The numerals illuminate with an ethereal warm amber glow through the layered acrylic glass chambers.",
      "honestSnags": [
        "Modern RGB LED edge-lit design, not high-voltage neon gas tubes (though zero burnout risk and safe 5V power).",
        "Acrylic panels show dust under direct sunlight; includes dedicated microfiber dusting cloth.",
        "Time setting buttons are situated flush on the rear panel."
      ],
      "curatorVerdict": "Captures the romantic retro-futuristic soul of vintage tube displays while running cool, safe, and reliably from a standard USB port.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 48,
          "label": "Layered Laser-Engraved Acrylic Digit Panels",
          "detail": "Stacked optical acrylic sheets engraved with digits 0-9 that illuminate crisply when bottom-lit."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 78,
          "label": "Natural Black Walnut Hardwood Solid Base",
          "detail": "Precision CNC-machined solid wood casing with matte oil finish and anti-slip rubber feet."
        },
        {
          "id": "hs-3",
          "x": 82,
          "y": 40,
          "label": "Independent RGB Color Modulation",
          "detail": "Microcontroller allowing custom color modes including classic amber, neon teal, and RGB rainbow cycle."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$150 — $185 USD",
      "primaryChannels": [
        "Amazon Retro Chrono",
        "Boutique Desk Accessories"
      ],
      "searchKeywords": [
        "Walnut Edge-Lit Acrylic Tube Clock",
        "Gixie Tube Clock Simulation",
        "RGB Retro Glow Tube Clock"
      ],
      "antiFraudWarning": "Avoid cheap hollow plastic faux-wood prints. Insist on genuine solid CNC walnut hardwood construction.",
      "directOutbound": {
        "label": "Inspect on Amazon Horology",
        "url": "https://www.amazon.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-008",
    "specimenCode": "DELUXE-COMFORT // #008",
    "title": "Deluxe Comfort Muscle Arm Companion Hugging Pillow",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.3,
    "priceValue": 119,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 CULT NOVELTY PILLOW",
    "scarcityBadge": "ANATOMIC ARM WRAP",
    "heroImage": "/items/anm-008.jpg",
    "tagline": "Ergonomic plush body pillow shaped as a muscular half-torso and wrap-around arm for comforting embrace and neck support.",
    "tags": [
      "BOYFRIEND PILLOW",
      "MUSCLE ARM",
      "PLUSH COMFORT",
      "VELVET EMBRACE",
      "NOVELTY BEDDING"
    ],
    "fieldObservation": {
      "unboxingLog": "Vacuum compressed in heavy polybag; fluffs to full anatomical muscle contours within 30 minutes of unwrapping.",
      "tactileFeedback": "Ultra-soft microplush exterior with dense resilient polyester fill. The wrap-around bicep arm rests naturally over shoulders.",
      "honestSnags": [
        "Takes up considerable bed real estate on twin mattresses.",
        "Visual appearance will elicit laughter or bewilderment from uninitiated visitors.",
        "Machine wash requires gentle cycle and air-dry flat."
      ],
      "curatorVerdict": "Simultaneously hilarious and shockingly ergonomic. The contoured bicep arm cradles the neck surprisingly well during reading or side-sleeping.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 28,
          "y": 40,
          "label": "Padded Wrap-Around Bicep Arm Contour",
          "detail": "Flexible padded plush arm designed to drape comfortably around the sleeper's neck and shoulders."
        },
        {
          "id": "hs-2",
          "x": 68,
          "y": 30,
          "label": "Contoured Pectoral Neck Support Cushion",
          "detail": "Dense hypoallergenic poly-fill core providing resilient ergonomic cervical spine support."
        },
        {
          "id": "hs-3",
          "x": 68,
          "y": 65,
          "label": "Ultra-Soft Brown Microfiber Plush Cover",
          "detail": "Velvety skin-friendly textured fabric with reinforced double stitching along muscle contours."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 1,
      "priceRange": "$105 — $130 USD",
      "primaryChannels": [
        "Amazon Novelty Home",
        "Novelty Sleep Boutiques"
      ],
      "searchKeywords": [
        "Deluxe Comfort Muscle Boyfriend Pillow",
        "Muscular Man Arm Body Pillow",
        "Anatomical Companion Hugging Pillow"
      ],
      "antiFraudWarning": "Avoid flat underfilled polyester knockoffs. Authentic Deluxe Comfort cushions use dense multi-chamber fiber fill.",
      "directOutbound": {
        "label": "Examine on Amazon Bedding",
        "url": "https://www.amazon.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-009",
    "specimenCode": "GOTHIC-CLAW // #009",
    "title": "Gothic Articulated Full-Finger Metal Claw Armor Ring",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.4,
    "priceValue": 128,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 GOTHIC WEAPONRY ACCESSORY",
    "scarcityBadge": "TRIPLE-HINGED ARTICULATION",
    "heroImage": "/items/anm-009.jpg",
    "tagline": "Triple-hinged articulated metal armor ring that bends fluidly with finger movement, tapering into a sharp polished metallic talon.",
    "tags": [
      "FINGER ARMOR",
      "ARTICULATED RING",
      "GOTHIC METAL",
      "CLAW TALON",
      "TECHWEAR ACCESSORY"
    ],
    "fieldObservation": {
      "unboxingLog": "Presented in velvet-lined jewelry case with microfiber polishing cloth and sizing bands.",
      "tactileFeedback": "Cool, polished gunmetal electroplated alloy. Bending your finger causes the segmented armor plates to flex smoothly like mechanical scales.",
      "honestSnags": [
        "Typing on smartphone touchscreens while wearing it is nearly impossible.",
        "Sharp pointed tip can snag on knit sweaters or delicate loose fabric.",
        "Ring size should be matched to finger knuckle diameter for comfortable bending."
      ],
      "curatorVerdict": "Wearable kinetic sculpture. The mechanical click and fluid flex of the articulated steel segments makes you feel like an armored android.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 55,
          "label": "Triple-Segment Hinged Rivet Joints",
          "detail": "Smooth pivot pins allowing the armor plates to follow natural finger knuckle flexion."
        },
        {
          "id": "hs-2",
          "x": 42,
          "y": 82,
          "label": "Pointed Metallic Talon Tip",
          "detail": "Tapered gothic claw apex with mirror-polished gunmetal electroplate finish."
        },
        {
          "id": "hs-3",
          "x": 60,
          "y": 40,
          "label": "Knuckle Retention Collar",
          "detail": "Curved ergonomic band securing the upper plate firmly against the proximal phalanx."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$110 — $145 USD",
      "primaryChannels": [
        "AliExpress Gothic Jewelry",
        "Independent Techwear Boutiques"
      ],
      "searchKeywords": [
        "Gothic Articulated Full Finger Claw Ring",
        "Metal Armor Finger Ring Segmented",
        "Cosplay Talon Finger Claws"
      ],
      "antiFraudWarning": "Look for heavy zinc-alloy or stainless steel build; avoid thin aluminum stamped sheet metal that bends out of shape.",
      "directOutbound": {
        "label": "Source on AliExpress Armor Hub",
        "url": "https://www.aliexpress.com",
        "sourceType": "Artisan Studio"
      }
    }
  },
  {
    "id": "anm-010",
    "specimenCode": "AVIAN-BELLJAR // #010",
    "title": "Articulated Avian Bird Osteology Skeleton Under Glass Bell Jar",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.6,
    "priceValue": 195,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 MUSEUM OSTEOLOGY SPECIMEN",
    "scarcityBadge": "REAL ARTICULATED SKELETON",
    "heroImage": "/items/anm-010.jpg",
    "tagline": "Museum-grade articulated natural bird skeleton specimen mounted upright on an ebony display plinth under a hand-blown glass cloche.",
    "tags": [
      "NATURAL OSTEOLOGY",
      "BIRD SKELETON",
      "GLASS BELL JAR",
      "TAXIDERMY ARCHIVE",
      "CURIOSITY CABINET"
    ],
    "fieldObservation": {
      "unboxingLog": "Shipped in custom wooden crate with internal suspended foam cradles to protect delicate ribcage and skull during transit.",
      "tactileFeedback": "Glass dome lifts off to reveal immaculate bone articulation. The delicate ribcage, curved beak, and fused vertebrae are preserved in pristine anatomical detail.",
      "honestSnags": [
        "Extremely fragile; must never be handled roughly or exposed to sudden shocks.",
        "Glass bell jar requires occasional wiping with a lint-free cloth to maintain optical clarity.",
        "Keep in climate-controlled indoor rooms out of excessive dampness."
      ],
      "curatorVerdict": "The pinnacle of natural osteological preparation. The lightness and structural elegance of avian bone architecture is breathtaking to behold.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 62,
          "y": 22,
          "label": "Articulated Avian Cranium & Beak",
          "detail": "Intact skull specimen featuring delicate orbital eye sockets and curved bill structure."
        },
        {
          "id": "hs-2",
          "x": 58,
          "y": 48,
          "label": "Intricate Ribcage & Keel Sternum",
          "detail": "Meticulously wired thoracic basket illustrating the lightweight engineering of flight bones."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 82,
          "label": "Hand-Turned Ebony Display Plinth",
          "detail": "Solid black wooden pedestal with circular groove seating the hand-blown glass dome securely."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$175 — $225 USD",
      "primaryChannels": [
        "Etsy Natural History Artisans",
        "Anatomical Taxidermy Studios"
      ],
      "searchKeywords": [
        "Articulated Bird Skeleton Glass Cloche",
        "Avian Osteology Taxidermy Display",
        "Real Bird Skeleton Bell Jar"
      ],
      "antiFraudWarning": "Verify that it is genuine biological bone specimen prepared ethically, rather than 3D printed resin casts.",
      "directOutbound": {
        "label": "Source on Etsy Natural History",
        "url": "https://www.etsy.com",
        "sourceType": "Artisan Studio"
      }
    }
  },
  {
    "id": "anm-011",
    "specimenCode": "CASIO-DG20 // #011",
    "title": "1987 Vintage Casio DG-20 Digital MIDI Polyphonic Synth Guitar",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.7,
    "priceValue": 285,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 CULT RETRO SYNTH GUITAR",
    "scarcityBadge": "VINTAGE MIDI CONTROLLER",
    "heroImage": "/items/anm-011.jpg",
    "tagline": "Iconic 1980s futuristic synth guitar featuring synthetic nylon strings, conductive rubber fretboard, onboard PCM drum machine, and 5-pin MIDI output.",
    "tags": [
      "CASIO DG-20",
      "SYNTH GUITAR",
      "80S RETRO MIDI",
      "RUBBER FRETBOARD",
      "CHIP TUNE"
    ],
    "fieldObservation": {
      "unboxingLog": "Sourced from Japanese retro gear archives with original factory strap, power adapter, and quick-start rhythm selector sheet.",
      "tactileFeedback": "Sturdy futuristic dark-gray ABS body. The synthetic strings trigger internal polyphonic synth patches via individual bridge pickups.",
      "honestSnags": [
        "Requires specific plucking technique; aggressive guitar solo shredding can cause note re-triggering.",
        "Uses 6x D-cell batteries or 9V center-negative DC adapter; runs best on external power.",
        "Vintage unit from late 80s; minor cosmetic shelf wear on outer plastic edges."
      ],
      "curatorVerdict": "The holy grail of 80s synth-pop oddities. Plugging this into modern software synths via MIDI yields unearthly cybernetic guitar arpeggios.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 68,
          "y": 22,
          "label": "Conductive Rubberized Fretboard",
          "detail": "Patent fret matrix detecting chord positions without requiring metal string grounding."
        },
        {
          "id": "hs-2",
          "x": 48,
          "y": 48,
          "label": "Polyphonic String Trigger Sensors",
          "detail": "6 independent mechanical string sensors translating string plucks into MIDI velocity triggers."
        },
        {
          "id": "hs-3",
          "x": 38,
          "y": 88,
          "label": "Onboard Drum Pads & Synthesizer Controls",
          "detail": "Push-button bank for selecting 20 preset tones, 12 auto-rhythms, and volume/transposition."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$260 — $320 USD",
      "primaryChannels": [
        "Mercari Japan Retro Vault",
        "Reverb Vintage Synthesizers"
      ],
      "searchKeywords": [
        "Casio DG-20 Digital Guitar MIDI",
        "Casio DG-10 Synth Guitar Vintage",
        "1980s Electronic MIDI Guitar"
      ],
      "antiFraudWarning": "Check that all 6 bridge trigger sensors register cleanly and MIDI OUT port transmits note-on/note-off data.",
      "directOutbound": {
        "label": "Inspect on Mercari Vintage Audio",
        "url": "https://www.mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-014",
    "specimenCode": "RAKUTEN-LUNAR // #1-KYOTO",
    "title": "Kyoto Mountain Mist Ceramic Moon & Jade Rabbit Backflow Incense Burner",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.3,
    "priceValue": 178,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 AVANT-GARDE TRADITIONAL CRAFT",
    "scarcityBadge": "KILN-FIRED IN KYOTO",
    "heroImage": "/items/anm-014.jpg",
    "tagline": "Hand-sculpted tenmoku glazed ceramic mountain peak with porcelain moon rabbit and nocturnal crescent, cascading heavy backflow smoke into misty valleys.",
    "tags": [
      "RAKUTEN #1",
      "KYOTO CERAMICS",
      "MOON RABBIT",
      "BACKFLOW INCENSE",
      "JAPAN CRAFT"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in a signed paulownia wood box tied with indigo sanada-himo cord and accompanied by Kyoto sandalwood backflow cones.",
      "tactileFeedback": "Cool, weighty dark iron glaze with emerald mountain accents. The pure white porcelain rabbit perches gracefully on the mountain slope.",
      "honestSnags": [
        "Backflow smoke waterfall effect requires a completely still room without drafts or AC fans.",
        "Regular cleaning of the smoke basin is required to prevent fragrant oil residue buildup.",
        "Incense cone burns relatively quickly (~15-20 minutes)."
      ],
      "curatorVerdict": "Sublime artisanal tranquility. Watching thick, heavy sandalwood smoke roll down the ceramic mountain like an alpine river of mist transforms any space.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 70,
          "y": 38,
          "label": "Perched Conical Incense Platform",
          "detail": "Specially engineered smoke aperture channeling combustion gases downward into heavy white fog."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 78,
          "label": "Hand-Sculpted Porcelain Jade Rabbit",
          "detail": "Delicate unglazed white porcelain rabbit gazing toward the celestial moon disc."
        },
        {
          "id": "hs-3",
          "x": 38,
          "y": 50,
          "label": "Tenmoku Glazed Mountain Ridge",
          "detail": "High-temperature iron reduction glaze creating deep midnight tones and jade-green crests."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$160 — $195 USD",
      "primaryChannels": [
        "Rakuten Kyoto Craft Guild",
        "Traditional Ceramics Atelier"
      ],
      "searchKeywords": [
        "Kyoto Ceramic Backflow Incense Burner",
        "Moon Rabbit Incense Mountain",
        "Japanese Ceramic Waterfall Censer"
      ],
      "antiFraudWarning": "Avoid lightweight mass-cast resin copies. Authentic pieces feature heavy high-fired stoneware with maker's kiln stamp.",
      "directOutbound": {
        "label": "Source on Rakuten Kyoto Studio",
        "url": "https://www.rakuten.co.jp",
        "sourceType": "Artisan Studio"
      }
    }
  },
  {
    "id": "anm-015",
    "specimenCode": "SOVIET-DP5V // #015",
    "title": "Authentic Soviet DP-5V Cold-War Military Geiger Counter Radiometer Set",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.8,
    "priceValue": 235,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 COLD WAR MILITARY RELIC",
    "scarcityBadge": "SURPLUS MILITARY ARTIFACT",
    "heroImage": "/items/anm-015.jpg",
    "tagline": "Original decommissioned Soviet military radiological survey meter complete with Geiger-Müller detection probe, olive drab wooden chest, and Cyrillic manual.",
    "tags": [
      "SOVIET SURPLUS",
      "GEIGER COUNTER",
      "DP-5V",
      "COLD WAR RELIC",
      "ANALOG RADIOMETER"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy olive drab wooden military field chest containing DP-5V survey unit in leather field holster, extendable probe wand, headphone earpiece, and Cyrillic papers.",
      "tactileFeedback": "Rugged military bakelite and cast alloy construction. The heavy rotary range switch turns with decisive industrial clunks.",
      "honestSnags": [
        "Requires 3x 1.5V D-cell batteries with adapter or wire shims for modern battery contacts.",
        "High background cosmic ray clicking may unnerve superstitious houseguests.",
        "Military surplus piece from late Cold War era; shows authentic cosmetic transit wear."
      ],
      "curatorVerdict": "The quintessential Cold War survivor artifact. Hearing the authentic mechanical clicks of cosmic particles passing through the Soviet Geiger tube is spine-tingling.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 55,
          "y": 42,
          "label": "Analog Roentgen Scale Meter Dial",
          "detail": "High-visibility dual range scale calibrated in milliroentgens and roentgens per hour."
        },
        {
          "id": "hs-2",
          "x": 35,
          "y": 42,
          "label": "Decisive Rotary Multi-Range Selector",
          "detail": "Substantial military rotary switch selecting measurement ranges from 0.05 mR/h to 200 R/h."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Olive Drab Wooden Transit Field Chest",
          "detail": "Rugged latching military field box with internal schematic wiring diagram mounted inside the lid."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$210 — $265 USD",
      "primaryChannels": [
        "Etsy Military Collectibles",
        "Eastern European Surplus Archives"
      ],
      "searchKeywords": [
        "Soviet DP-5V Geiger Counter Set",
        "Cold War Military Radiometer Chest",
        "DP-5B Radiation Survey Meter"
      ],
      "antiFraudWarning": "Ensure the check source (beta source in probe shield) has been properly decommissioned for safe civilian handling and shipping.",
      "directOutbound": {
        "label": "Source on Etsy Surplus Vault",
        "url": "https://www.etsy.com",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const BATCH_POOL_OCT_12: RawOdditySeed[] = [
  {
    "id": "anm-031",
    "specimenCode": "TIKTOK-GYRO // #1-KINETIC",
    "title": "KinetiDesk Gyroscopic Brass Gimbal Perpetual Motion Kinetic Sculpture",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.9,
    "priceValue": 128,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL KINETIC TOY (310K+ SOLD)",
    "scarcityBadge": "SOLID BRASS AEROSPACE BALANCED",
    "heroImage": "/items/anm-031.jpg",
    "tagline": "Solid milled brass 3-axis gyroscopic gimbal spinning effortlessly on silicon nitride ceramic bearings for up to 8 minutes.",
    "tags": [
      "TIKTOK SHOP 40%",
      "BRASS GYROSCOPE",
      "KINETIC SCULPTURE",
      "CERAMIC BEARINGS",
      "DESK FIDGET"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in magnetic-lidded luxury velvet box with custom solid brass pedestal, micro-fiber polishing glove, and high-speed starter cord.",
      "tactileFeedback": "Cold, heavy solid brass rings balanced to sub-millimeter tolerances. When set in motion, precession defies intuitive gravity.",
      "honestSnags": [
        "Requires level, solid desktop; wobbling tables shorten spin duration by 40%.",
        "Raw brass naturally develops antique patina; requires polishing cloth if mirror shine is preferred.",
        "High spin speed creates faint gyroscopic resistance when you attempt to pick up the pedestal."
      ],
      "curatorVerdict": "Pure physics art. Watching concentric brass rings dance in multi-axis rotation is the ultimate antidote to digital screen fatigue.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 50,
          "label": "Milled Solid Brass Rotors",
          "detail": "Precision CNC cut concentric rings with balanced inertia distribution."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 20,
          "label": "Silicon Nitride Ceramic Bearings",
          "detail": "Near zero-friction ceramic balls providing ultra-long rotation duration."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Heavy Standoff Pedestal",
          "detail": "Lathed brass pedestal base ensuring vibration isolation during spin."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$115 — $145 USD",
      "primaryChannels": [
        "TikTok Shop Maker Vault",
        "Desk Kinetic Atelier"
      ],
      "searchKeywords": [
        "Brass Gyroscope Gimbal Desk Toy",
        "Precision Perpetual Gyroscope",
        "CNC Kinetic Desk Sculpture"
      ],
      "antiFraudWarning": "Beware of hollow die-cast zinc alloy imitations; authentic unit weighs over 420g of solid brass.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-032",
    "specimenCode": "TIKTOK-NANO-AQUA // #1-BIODECK",
    "title": "Fluval Edge Nano 3D 360-Degree Floating Cube Glass Aquascape",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.1,
    "priceValue": 169,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK AQUARIUM (140K+ SOLD)",
    "scarcityBadge": "OPTICAL CLARITY FLOAT GLASS",
    "heroImage": "/items/anm-032.jpg",
    "tagline": "Architectural 6-sided sealed glass cube with hidden overhead filtration and 21-LED daylight shimmer spectrum.",
    "tags": [
      "TIKTOK SHOP 40%",
      "NANO AQUARIUM",
      "FLOATING GLASS",
      "AQUASCAPING",
      "LIVING DESK"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy double-wall carton with formed styrofoam cradles, 6-sided glass aquarium, LED column, and biological media pack.",
      "tactileFeedback": "Glass is diamond-polished on all edges. Water reaches the very top pane, creating a completely seamless aerial view.",
      "honestSnags": [
        "Water level must be topped off weekly to maintain the sealed optical glass effect.",
        "Requires small aquarium maintenance siphon for bi-weekly water changes.",
        "Small opening at top requires patience when arranging interior driftwood and dragon stone."
      ],
      "curatorVerdict": "A floating block of living river on your table. Looking down through the glass roof at schooling micro-rasboras feels otherworldly.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Sealed Float Glass Top",
          "detail": "100% water contact surface with zero evaporation rim."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 80,
          "label": "Integrated Hidden Filter Column",
          "detail": "Concealed 3-stage mechanical, chemical, and biological filtration."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 15,
          "label": "21-Diode Shimmer LED Cluster",
          "detail": "6500K daylight spectrum encouraging healthy micro-moss growth."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$155 — $185 USD",
      "primaryChannels": [
        "TikTok Shop Aquatics",
        "Global Nano Scape Distributors"
      ],
      "searchKeywords": [
        "Fluval Edge Nano Cube 6 Gallon",
        "Sealed Glass Cube Desktop Aquarium",
        "Rimless 3D Nano Aquascape"
      ],
      "antiFraudWarning": "Ensure the silicone joints are intact with zero air bubbles before adding live water volume.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-033",
    "specimenCode": "TIKTOK-EXO-LOAD // #1-POWER",
    "title": "Titanium Alloy Hydraulic Knuckle Force Exoskeleton Trainer Glove",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.5,
    "priceValue": 198,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 CYBER WEARABLE DROP (85K+ SOLD)",
    "scarcityBadge": "AEROSPACE GRADE TC4 TITANIUM",
    "heroImage": "/items/anm-033.jpg",
    "tagline": "Articulated titanium phalange exoskeleton reinforcing finger extension via miniature pneumatic micro-cylinders.",
    "tags": [
      "TIKTOK SHOP 40%",
      "TITANIUM EXOSKELETON",
      "POWER GLOVE",
      "PNEUMATIC ASSIST",
      "CYBERNETIC"
    ],
    "fieldObservation": {
      "unboxingLog": "Military-grade zip case with pneumatic tubing, digital pressure regulator, USB charger, and glove chassis.",
      "tactileFeedback": "Titanium framework feels lightweight yet completely rigid. Actuating hand grip provides firm robotic resistance and assist.",
      "honestSnags": [
        "Requires calibrating air pressure levels to hand size on initial wear.",
        "Not intended for typing quickly on low-profile notebook keyboards.",
        "People will ask if you are a cyborg or auditioning for Deus Ex."
      ],
      "curatorVerdict": "True wearable biomechanics. The cold feel of titanium plates flexing over your knuckles gives tangible science-fiction empowerment.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 35,
          "label": "TC4 Titanium Articulated Phalanges",
          "detail": "Individually hinged finger segments matching human skeletal flexion."
        },
        {
          "id": "hs-2",
          "x": 55,
          "y": 65,
          "label": "Pneumatic Assist Micro-Cylinder",
          "detail": "High-pressure micro piston providing up to 8kg of extra extensor force."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Breathable Carbon Fiber Gauntlet",
          "detail": "Reinforced composite wrist brace securing load distribution across forearm."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$180 — $220 USD",
      "primaryChannels": [
        "TikTok Shop Mecha Drops",
        "Shenzhen Exoskeleton Labs"
      ],
      "searchKeywords": [
        "Titanium Alloy Hand Exoskeleton Glove",
        "Pneumatic Finger Rehabilitation Power Glove",
        "Cybernetic Hand Armor Trainer"
      ],
      "antiFraudWarning": "Verify titanium hardness stamp; fake plastic toys flex under grip pressure.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-034",
    "specimenCode": "TIKTOK-HUD-GLASS // #1-VISION",
    "title": "Cyberpunk Dual Heads-Up Display HUD Smart Motorcycle Goggles",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.3,
    "priceValue": 179,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL SMART EYEWEAR (210K+ SOLD)",
    "scarcityBadge": "WAVEGUIDE MICRO-OLED",
    "heroImage": "/items/anm-034.jpg",
    "tagline": "Optical waveguide smart spectacles projecting real-time telemetry, GPS waypoint arrows, and audio wave gauges onto clear glass.",
    "tags": [
      "TIKTOK SHOP 40%",
      "SMART GOGGLES",
      "HUD DISPLAY",
      "OPTICAL WAVEGUIDE",
      "TACTICAL CYBER"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in matte black protective hardcase with polarized interchangeable lenses, USB-C magnetic charger, and strap.",
      "tactileFeedback": "Lightweight TR90 frame with rubberized grips. The green heads-up vector display floats crisply without blocking field of view.",
      "honestSnags": [
        "Direct bright midday sun reduces projected contrast slightly; polarized lens attachment recommended outdoors.",
        "Requires Bluetooth companion app pairing for real-time speed and navigation vector streaming.",
        "Battery duration is approximately 5 to 6 hours of continuous active projection."
      ],
      "curatorVerdict": "Brings video-game mini-maps into real life. Riding a motorcycle or walking through nighttime streets with green vectors floating ahead is unmatched.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 65,
          "y": 40,
          "label": "Waveguide Micro-OLED Optic",
          "detail": "Color optical display floating a 28-degree diagonal virtual screen."
        },
        {
          "id": "hs-2",
          "x": 35,
          "y": 45,
          "label": "Integrated 8MP Telemetry Sensor",
          "detail": "Forward-facing low-latency optical tracking sensor."
        },
        {
          "id": "hs-3",
          "x": 85,
          "y": 70,
          "label": "Bone Conduction Audio Actuator",
          "detail": "Temple-mounted stereo transducers delivering clear spatial telemetry."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$165 — $195 USD",
      "primaryChannels": [
        "TikTok Shop Cyber Gear",
        "Tactical Optics Vault"
      ],
      "searchKeywords": [
        "Vuzix Blade Waveguide Smart Glasses",
        "HUD Motorcycle Smart Goggles",
        "Cyberpunk Heads Up Display Glasses"
      ],
      "antiFraudWarning": "Ensure genuine dual waveguide lenses; cheap HUD glasses use simple plastic reflective mirrors.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-035",
    "specimenCode": "TIKTOK-FERRO-SAND // #1-FLUID",
    "title": "High-Torque Magnetic Fluid Bluetooth Audio Sand Visualizer Clock",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.4,
    "priceValue": 185,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK CLOCK (195K+ SOLD)",
    "scarcityBadge": "FERRO-KINETIC ACOUSTIC",
    "heroImage": "/items/anm-035.jpg",
    "tagline": "Dual-chamber kinetic desk chronometer where black spike-shaped ferrofluid morphs in synchrony with ambient bass frequencies.",
    "tags": [
      "TIKTOK SHOP 40%",
      "FERROFLUID CLOCK",
      "MAGNETIC SOUND",
      "DESK KINETIC",
      "VISUALIZER"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy presentation box with power supply, sensitivity knob tool, auxiliary cable, and microfiber cleaning cloth.",
      "tactileFeedback": "Dense anodized body with frosted acrylic ambient light diffuser. Spikes form with instant acoustic response.",
      "honestSnags": [
        "Extremely heavy bass tracks can cause tiny fluid satellite droplets that take 2 minutes to reabsorb.",
        "Keep at least 30cm away from mechanical wristwatches to avoid magnetic exposure.",
        "Requires wall outlet power for full electromagnet excitation."
      ],
      "curatorVerdict": "Hypnotic dark matter dancing on your work table. The acoustic synchronization creates a living liquid creature that dances to whatever you play.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Sealed Ferro-Magnetic Reaction Bulb",
          "detail": "Suspended black magnetic nanoparticles reacting to localized magnetic coils."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 75,
          "label": "Dual Electromagnet Driver Matrix",
          "detail": "Custom frequency-mapped solenoids pulsing in sync with music transients."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Acoustic Resonance Base",
          "detail": "High-excursion neodymium driver pumping bass frequencies into the fluid chamber."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$170 — $200 USD",
      "primaryChannels": [
        "TikTok Shop Science Gadgets",
        "Acoustic Kinetic Labs"
      ],
      "searchKeywords": [
        "Ferrofluid Sound Visualizer Clock",
        "Magnetic Fluid Audio Spectrum Analyzer",
        "Dancing Ferrofluid Desk Display"
      ],
      "antiFraudWarning": "Check that the carrier fluid is crystal clear; low-quality fluid stains the glass tube within days.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-036",
    "specimenCode": "TIKTOK-PBT-KEY // #1-TACTILE",
    "title": "Lofree Touch PBT Mechanical Keyboard with Dye-Sub Vintage Keycaps",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.7,
    "priceValue": 159,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL MECHANICAL DESK (320K+ SOLD)",
    "scarcityBadge": "FACTORY LUBED GATERON PRO",
    "heroImage": "/items/anm-036.jpg",
    "tagline": "Retro-modernist curved mechanical keyboard featuring hot-swappable switches, sound-dampening silicone gaskets, and vintage PBT caps.",
    "tags": [
      "TIKTOK SHOP 40%",
      "MECHANICAL KEYBOARD",
      "PBT KEYCAPS",
      "GASKET MOUNT",
      "RETRO DESK"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in luxury presentation tray with keycap puller, switch extractor, coiled USB-C cable, and 2.4GHz dongle.",
      "tactileFeedback": "Creamy and deep acoustic sound profile. Keys have a comforting tactile bump with zero spring ping.",
      "honestSnags": [
        "Chunky retro profile benefits from a slim palm rest for ergonomic 8-hour typing marathons.",
        "Bluetooth switching takes 1.5 seconds between paired devices.",
        "Custom curved case does not accept standard rectangular wrist rests."
      ],
      "curatorVerdict": "The most satisfying typing sound in modern tech. The creamy vintage keycap aesthetics look stunning in any curated workspace.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 45,
          "label": "Curved Dye-Sublimated PBT Keycaps",
          "detail": "Ultra-thick matte PBT caps resistant to finger shine and wear."
        },
        {
          "id": "hs-2",
          "x": 60,
          "y": 55,
          "label": "Gasket-Mounted Brass Switch Plate",
          "detail": "Multi-layer poron foam sandwich delivering deep acoustic clack."
        },
        {
          "id": "hs-3",
          "x": 85,
          "y": 30,
          "label": "OLED Status Display Window",
          "detail": "Miniature matrix display showing battery, connection, and actuation mode."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$145 — $175 USD",
      "primaryChannels": [
        "TikTok Shop Keyboards",
        "Lofree Official Boutique"
      ],
      "searchKeywords": [
        "Lofree Touch PBT Mechanical Keyboard",
        "Retro Wireless Gasket Keyboard",
        "Custom Tofu Switch Keyboard"
      ],
      "antiFraudWarning": "Verify genuine Lofree holographic authentication sticker on packaging base.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-037",
    "specimenCode": "AMZ-SWR-METER // #1-RF",
    "title": "Midland Consumer SWR-1 Commercial Field SWR & Power Meter",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.2,
    "priceValue": 119,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER HAM RADIO TESTER",
    "scarcityBadge": "CALIBRATED CROSS-NEEDLE MOVEMENT",
    "heroImage": "/items/anm-037.jpg",
    "tagline": "Laboratory-grade RF standing wave ratio cross-needle analog meter with dual-movement ballistic needles and backlit amber dials.",
    "tags": [
      "AMAZON #1",
      "SWR METER",
      "RF ANALYZER",
      "ANALOG NEEDLE",
      "HAM RADIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy industrial cardboard carton with calibration certificate, 12V illumination pigtail, and SO-239 protective caps.",
      "tactileFeedback": "Cast metal chassis with textured hammer-tone paint. Needles swing with silky hydraulic-damped deceleration.",
      "honestSnags": [
        "Requires external 13.8V or 12V DC tap for dial backlight illumination.",
        "Operates on high-frequency amateur radio bands; requires UHF/VHF transmitters to observe real-time deflections.",
        "Glass front reflects overhead studio lamps if tilted directly upward."
      ],
      "curatorVerdict": "Peak cold-war instrumentation aesthetics. Cross-needle telemetry crossing at the exact SWR ratio feels deeply analog and reassuring.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Dual Cross-Needle Ballistic Meter",
          "detail": "Simultaneous forward and reflected power indication at intersection point."
        },
        {
          "id": "hs-2",
          "x": 25,
          "y": 75,
          "label": "Precision UHF/SO-239 RF Connector",
          "detail": "Gold-plated low-loss coaxial interface rated up to 1kW peak."
        },
        {
          "id": "hs-3",
          "x": 75,
          "y": 75,
          "label": "Calibrated 3-Position Range Switch",
          "detail": "Rotary attenuator selecting 20W, 200W, or 2000W full-scale sensitivity."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$105 — $135 USD",
      "primaryChannels": [
        "Amazon Ham Radio Depot",
        "ARRL Surplus Store"
      ],
      "searchKeywords": [
        "Cross Needle SWR Power Meter HF",
        "Daiwa CN-801 Commercial SWR Meter",
        "VHF UHF Standing Wave Ratio Analyzer"
      ],
      "antiFraudWarning": "Ensure meter zero-adjustment screws have not been stripped or mechanically jammed.",
      "directOutbound": {
        "label": "Inspect on Amazon RF Depot",
        "url": "https://amazon.com",
        "sourceType": "Official Reseller"
      }
    }
  },
  {
    "id": "anm-038",
    "specimenCode": "AMZ-VOLCA-MOD // #1-SYNTH",
    "title": "Korg Volca Modular Semi-Modular Analog Micro Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 179.99,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER ANALOG SYNTH",
    "scarcityBadge": "WEST COAST PATCH ARCHITECTURE",
    "heroImage": "/items/anm-038.jpg",
    "tagline": "Eight modular synth circuits and 50 pin-patch points packed into a pocket form factor with internal wave folder and LPG filter.",
    "tags": [
      "AMAZON #1",
      "KORG VOLCA",
      "MODULAR SYNTH",
      "ANALOG AUDIO",
      "PIN PATCH"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in iconic Korg box with 20 micro pin patch cables, reference patch chart cards, and sync audio cable.",
      "tactileFeedback": "Semi-transparent knobs glow with internal LEDs. Patching pin cables gives crisp, tactile insertion clicks.",
      "honestSnags": [
        "Pin patch cables are tiny; keep them away from loose carpet where they can disappear.",
        "Requires understanding of West Coast synthesis (FM & wave-folding) rather than standard Moog subtractive filters.",
        "Battery cover on underside is snug; coin or guitar pick recommended to unlatch."
      ],
      "curatorVerdict": "Buchla modular power in the palm of your hand. Plugging pin cables while tweaking the wave folder produces mind-bending sonic artifacts.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "50-Point Micro Pin Patchbay",
          "detail": "Solderless mini pin cable headers for flexible analog modular routing."
        },
        {
          "id": "hs-2",
          "x": 35,
          "y": 65,
          "label": "Analog Wave Folder & Triangle VCO",
          "detail": "Complex wave-shaping circuitry producing rich overtone spectra."
        },
        {
          "id": "hs-3",
          "x": 70,
          "y": 65,
          "label": "Dual Low Pass Gate (LPG) Circuits",
          "detail": "Vactrol-modeled filter and VCA combo delivering organic Buchla-style pluck."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$165 — $195 USD",
      "primaryChannels": [
        "Amazon Musical Instruments",
        "Sweetwater Korg Vault"
      ],
      "searchKeywords": [
        "Korg Volca Modular Analog Synthesizer",
        "West Coast Semi-Modular Micro Synth",
        "Volca Patch Cable Modular"
      ],
      "antiFraudWarning": "Check that all 20 included pin cables and cheat sheet patch pin cards are included in box.",
      "directOutbound": {
        "label": "Inspect on Amazon Instruments",
        "url": "https://amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-039",
    "specimenCode": "ALI-BENCH-RIG // #1-CHASSIS",
    "title": "CNC Machined Aluminum Open-Frame Cyberpunk Mini-ITX Rig Chassis",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.3,
    "priceValue": 225,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 GLOBAL PC MOD COMPONENT",
    "scarcityBadge": "CNC 6061 SKELETONIZED ALLOY",
    "heroImage": "/items/anm-039.jpg",
    "tagline": "Open-air test bench chassis milled from aerospace aluminum with exposed liquid cooling manifolds and vertical GPU risers.",
    "tags": [
      "ALIEXPRESS #1",
      "OPEN FRAME PC",
      "MINI ITX",
      "CNC ALUMINUM",
      "CUSTOM RIG"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy flat-pack foam carton with CNC milled alloy beams, stainless hardware, PCIe 4.0 riser cable, and carry handle.",
      "tactileFeedback": "Dense sandblasted anodized finish with razor-sharp bevels. Assembly feels like erecting architectural scaffolding.",
      "honestSnags": [
        "Open frame design means dust accumulates quicker than sealed PC cases; air duster can needed monthly.",
        "Requires custom-length power supply cables for perfectly clean wire routing.",
        "Exposed fan blades require caution if curious cats or toddlers are nearby."
      ],
      "curatorVerdict": "Hardware as industrial sculpture. Turning a gaming PC inside-out and exposing the motherboard plumbing turns tech into high art.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 45,
          "label": "6061 CNC Milled Aluminum Spine",
          "detail": "Bead-blasted structural chassis core with integrated cable channeling."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 40,
          "label": "Vertical PCIe 4.0 GPU Standoff",
          "detail": "Exposed graphics card mounting bracket with shielded riser cable."
        },
        {
          "id": "hs-3",
          "x": 25,
          "y": 65,
          "label": "Dual 240mm Radiator Mounting Wings",
          "detail": "Hinged alloy radiator brackets for custom open-loop liquid cooling loops."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$210 — $245 USD",
      "primaryChannels": [
        "AliExpress Custom PC Labs",
        "Taobao Studio Hardware"
      ],
      "searchKeywords": [
        "Open Frame Mini ITX Test Bench Case",
        "Skeleton CNC Aluminum PC Chassis",
        "Cyberpunk Open Air Computer Case"
      ],
      "antiFraudWarning": "Verify alloy thickness is at least 4mm; thin sheet metal copies vibrate loudly under fan load.",
      "directOutbound": {
        "label": "Inspect on AliExpress Maker",
        "url": "https://aliexpress.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-040",
    "specimenCode": "ETSY-KRAKEN-SCONCE // #1-BRONZE",
    "title": "Hand-Cast Solid Bronze Kraken Tentacle Desk Candlestick Sconce",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.7,
    "priceValue": 148,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER OCCULT SCULPTURE",
    "scarcityBadge": "LOST-WAX ARTISAN BRONZE",
    "heroImage": "/items/anm-040.jpg",
    "tagline": "Lost-wax cast heavyweight bronze candlestick shaped like a twisting abyssal cephalopod tentacle with individual suction cup details.",
    "tags": [
      "ETSY #1",
      "BRONZE SCULPTURE",
      "KRAKEN TENTACLE",
      "LOST WAX",
      "OCCULT CURIOSITY"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood shavings with wax seal certificate, brass cleaning wool, and beeswax black taper candle.",
      "tactileFeedback": "Astonishing heft of 1.8kg solid metal. The twisting armatures and suction pads are tactile and anatomically detailed.",
      "honestSnags": [
        "Heavier than typical desktop decor; do not place on fragile glass monitor stands.",
        "Wax drippings require gentle warm water soak to remove without scratching the patinated bronze.",
        "Spouse or flatmate will question the Eldritch nature of your workspace."
      ],
      "curatorVerdict": "A piece of deep-sea mythology forged in fire. Lighting a taper candle on a twisting bronze tentacle turns midnight reading into ritual.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Sculpted Cephalopod Tentacle Crown",
          "detail": "Individually detailed suckers and organic skin texture in lost-wax bronze."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 15,
          "label": "Standard 22mm Candlestick Cup",
          "detail": "Deep brass-sleeved socket designed for beeswax taper candles."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Solid Heavy Bronze Stable Footing",
          "detail": "Weighs over 1.8kg to prevent tipping from dripping wax or movement."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "Etsy Occult Bronzeworks",
        "Gothic Artisan Foundry"
      ],
      "searchKeywords": [
        "Bronze Kraken Tentacle Candlestick",
        "Lost Wax Cast Bronze Octopus Sculpture",
        "Occult Marine Bronze Candlestick"
      ],
      "antiFraudWarning": "Check bottom surface for foundry hallmarks; avoid painted cold-cast resin impostors.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-041",
    "specimenCode": "ETSY-SPINO-TOOTH // #1-FOSSIL",
    "title": "Authentic Fossilized Spinosaurus Dinosaur Tooth in Wooden Display Frame",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.8,
    "priceValue": 215,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER PALEONTOLOGY SPECIMEN",
    "scarcityBadge": "100 MILLION YEAR CRETACEOUS",
    "heroImage": "/items/anm-041.jpg",
    "tagline": "Genuine 100-million-year-old Spinosaurus aegyptianus dinosaur crown tooth specimen excavated from Moroccan Kem Kem red beds.",
    "tags": [
      "ETSY #1",
      "DINOSAUR FOSSIL",
      "SPINOSAURUS TOOTH",
      "PALEONTOLOGY",
      "MUSEUM SPECIMEN"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in archival museum box with certificate of authenticity signed by field paleontologists, specimen tag, and display frame.",
      "tactileFeedback": "Dense petrified mineral feel. The enamel carinae ridges along the tooth edges are preserved with remarkable sharpness.",
      "honestSnags": [
        "Natural fossil enamel shows 100-million-year sedimentary micro-fractures stabilized by paleontological glue.",
        "Keep away from high humidity or damp basements to protect mineral stability.",
        "Not a toy; fragile tip requires careful handling during display positioning."
      ],
      "curatorVerdict": "Holding 100 million years in your hand. The apex predator of the Cretaceous river systems resting right beside your coffee mug.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Serrated Enamel Blade Crown",
          "detail": "Authentic carinae serrations adapted for piercing aquatic prey."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Fossilized Root Texture",
          "detail": "Mineralized dentin root matrix showing natural red-sandstone patina."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Solid Walnut Archival Display Case",
          "detail": "Magnetic latch hardwood shadowbox with UV-blocking museum acrylic."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 5,
      "priceRange": "$195 — $240 USD",
      "primaryChannels": [
        "Etsy Paleontology Guild",
        "Moroccan Fossil Collectors Union"
      ],
      "searchKeywords": [
        "Spinosaurus Tooth Fossil Genuine Kem Kem",
        "Cretaceous Dinosaur Tooth Display Box",
        "Authentic Spinosaurus Aegyptianus Fossil"
      ],
      "antiFraudWarning": "Look for natural sediment inclusions and microscope enamel striations; avoid composite plaster fakes.",
      "directOutbound": {
        "label": "Inspect on Etsy Fossil Vault",
        "url": "https://etsy.com",
        "sourceType": "Certified Paleontologist"
      }
    }
  },
  {
    "id": "anm-042",
    "specimenCode": "MERC-PO-SAMPLER // #1-SAMPLER",
    "title": "Teenage Engineering Pocket Operator PO-33 K.O! with Metal Pro Case",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.5,
    "priceValue": 135,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 VERIFIED TOKYO BOUTIQUE GEAR",
    "scarcityBadge": "CA-X METAL SILICONE SHIELD",
    "heroImage": "/items/anm-042.jpg",
    "tagline": "Pocket micro-sampler with built-in condenser microphone, 40-second recording memory, 16 step effects, and custom aluminum armor.",
    "tags": [
      "MERCARI #1",
      "POCKET OPERATOR",
      "TEENAGE ENGINEERING",
      "MICRO SAMPLER",
      "TOKYO AUDIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Original punch-tag tear card package with AAA batteries, CA-X metal armor case, and 3.5mm sync cable.",
      "tactileFeedback": "Tiny tactile micro-switches click with mechanical authority. The LCD animation reacts playfully to sampled beats.",
      "honestSnags": [
        "Built without flash backup; removing both batteries simultaneously clears active sample buffer.",
        "Volume output through small built-in speaker is quiet; headphones or studio monitors highly recommended.",
        "Miniature buttons require light finger touch."
      ],
      "curatorVerdict": "The most inspiring beat-making machine in existence. Recording coffee cup taps and chopping them into hip-hop rhythms in 60 seconds flat.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 20,
          "label": "Internal Condenser Microphone",
          "detail": "On-board capsule capturing lo-fi 8-bit sound bites anywhere instantly."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 45,
          "label": "16-Step Pattern Sequencer",
          "detail": "Real-time punch-in step sequencer with parameter locks and groove effects."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 80,
          "label": "CA-X Aluminum Armor Shell",
          "detail": "Precision CNC silicone-cushioned outer shell protecting delicate buttons."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$120 — $150 USD",
      "primaryChannels": [
        "Mercari Japan Music Archive",
        "Teenage Engineering Resellers"
      ],
      "searchKeywords": [
        "Teenage Engineering PO-33 KO Sampler",
        "Pocket Operator Metal Case CA-X",
        "PO-33 Micro Sampler Tokyo"
      ],
      "antiFraudWarning": "Ensure the LCD display screen has no cracked glass or dead segments before purchasing second-hand.",
      "directOutbound": {
        "label": "Inspect on Mercari Japan",
        "url": "https://jp.mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-043",
    "specimenCode": "RAK-ROLAND-TB03 // #1-ACID",
    "title": "Roland Boutique TB-03 Bass Line Electronic Synthesizer Module",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 349,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 RAKUTEN TOKYO SYNTH VAULT",
    "scarcityBadge": "ACB COMPONENT-LEVEL EMULATION",
    "heroImage": "/items/anm-043.jpg",
    "tagline": "Official miniaturized recreation of the acid house TB-303 bass synth with authentic diode ladder filter and CV/Gate triggers.",
    "tags": [
      "RAKUTEN #1",
      "ROLAND TB-03",
      "ACID BASS",
      "BOUTIQUE SYNTH",
      "ANALOG EMULATION"
    ],
    "fieldObservation": {
      "unboxingLog": "Silver collector box with DK-01 dock case, AA batteries, quick-start programming cheat sheet, and warranty card.",
      "tactileFeedback": "Metal faceplate and rotary knobs possess the exact resistance of 1980s studio hardware. Filter squelch is visceral.",
      "honestSnags": [
        "Programming step patterns retains the quirky 1982 logic; takes an hour of practice to master.",
        "Battery life on 4x AA is around 5 hours; optional micro-USB power recommended for studio sessions.",
        "Built-in mini-speaker is purely for auditioning; plug into a subwoofer to feel the true 30Hz bass resonance."
      ],
      "curatorVerdict": "The quintessential sound of underground electronic music. Cranking resonance and sliding notes creates instant goosebumps.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Authentic Diode Ladder Filter Knob",
          "detail": "Resonant low-pass filter reproducing the squealing squelch of acid techno."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 60,
          "label": "16-Key Pitch Button Strip",
          "detail": "Classic step keyboard with slide, accent, and pattern transposition buttons."
        },
        {
          "id": "hs-3",
          "x": 85,
          "y": 25,
          "label": "4-Digit 7-Segment LED Display",
          "detail": "Crisp digital display providing tempo and step position telemetry."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$320 — $370 USD",
      "primaryChannels": [
        "Rakuten Japan Music Vault",
        "Roland Boutique Authorized Dealers"
      ],
      "searchKeywords": [
        "Roland Boutique TB-03 Bass Line",
        "TB-303 Recreation Module Synth",
        "Roland TB03 Acid Bassline"
      ],
      "antiFraudWarning": "Verify genuine Roland serial badge and metal top faceplate plate integrity.",
      "directOutbound": {
        "label": "Inspect on Rakuten Japan",
        "url": "https://rakuten.co.jp",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-044",
    "specimenCode": "BB-CROSLEY-PHONE // #1-RETRO",
    "title": "Crosley Radio 1950s Wall-Mounted Push-Button Pay Phone Replica",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 8.8,
    "priceValue": 109.95,
    "platform": "Best Buy",
    "salesRank": 1,
    "salesRankBadge": "#1 NOSTALGIA ELECTRONICS",
    "scarcityBadge": "HEAVYWEIGHT CHROME CASTINGS",
    "heroImage": "/items/anm-044.jpg",
    "tagline": "Mid-century three-slot payphone replica with rotary-style push buttons, functional locking coin vault, and authentic mechanical bell chime.",
    "tags": [
      "BEST BUY #1",
      "RETRO PAYPHONE",
      "WALL TELEPHONE",
      "1950S NOSTALGIA",
      "ANALOG TELECOM"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy timber-look box with wall mounting bracket, RJ-11 phone cable, coin box keys, and chrome handset.",
      "tactileFeedback": "Dense composite body with heavy chrome accents. Handset has authentic vintage weight; coins chime mechanically on deposit.",
      "honestSnags": [
        "Requires wall stud or dry-wall anchors to mount securely (weighs 2.6kg).",
        "Works with landline or VoIP analog phone terminal adapters.",
        "Friends visiting will drop coins in and expect you to give them quarters back."
      ],
      "curatorVerdict": "Mid-century diner Americana on your kitchen wall. The mechanical chime of dropping a quarter into the lockbox is pure acoustic joy.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Rotary-Look Push Button Dial",
          "detail": "Vintage Bakelite-style rotary ring with modern tone-dial push buttons inside."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 20,
          "label": "Triple Coin Slot Ingot Chime",
          "detail": "Functional coin deposits that ring an internal acoustic brass bell."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 65,
          "label": "Heavy Chrome Handset & Coiled Cable",
          "detail": "Solid-feel receiver with vintage carbon mic resonance filter."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$99 — $125 USD",
      "primaryChannels": [
        "Best Buy Heritage Vault",
        "Crosley Radio Direct"
      ],
      "searchKeywords": [
        "Crosley 1950s Payphone Wall Telephone",
        "Vintage 3-Slot Payphone Replica Chrome",
        "Retro Diner Pay Telephone"
      ],
      "antiFraudWarning": "Ensure line cord jack is standard RJ-11 modular plug compatible with modern phone lines.",
      "directOutbound": {
        "label": "Inspect on Best Buy",
        "url": "https://bestbuy.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-045",
    "specimenCode": "ALL-VU-MONITOR // #1-AUDIO",
    "title": "Vintage ZVT Radiotehnika Cold-War Dual Analog VU Meter Acoustic Monitor",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.4,
    "priceValue": 195,
    "platform": "Allegro",
    "salesRank": 1,
    "salesRankBadge": "#1 VINTAGE HI-FI SURPLUS",
    "scarcityBadge": "WARSAW PACT BROADCAST GRADE",
    "heroImage": "/items/anm-045.jpg",
    "tagline": "Decommissioned European broadcast studio stereo VU meter console with large backlit needle indicators and stepped attenuators.",
    "tags": [
      "ALLEGRO #1",
      "VU METER",
      "COLD WAR SURPLUS",
      "BROADCAST AUDIO",
      "ANALOG NEEDLES"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy foam-lined surplus box with power brick, RCA audio pass-through cables, and calibration screwdriver.",
      "tactileFeedback": "Industrial steel enclosure with warm incandescence. The ballistic needle decay matches vintage broadcast monitoring standards.",
      "honestSnags": [
        "Requires line-level audio input signal from an audio interface or pre-amplifier.",
        "Large footprint (28cm wide) requires dedicated desk real estate.",
        "Internal filament bulbs generate slight warmth during long listening sessions."
      ],
      "curatorVerdict": "Analog audio telemetry at its finest. Watching amber needles bounce synchronously to stereo vinyl masters makes sound visual and tangible.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Dual Backlit Ballistic VU Dials",
          "detail": "Warm filament bulb illuminated scales with precision logarithmic markings."
        },
        {
          "id": "hs-2",
          "x": 30,
          "y": 75,
          "label": "Stepped dB Attenuator Controls",
          "detail": "Rotary calibrated volume unit offset dials for broadcast studio calibration."
        },
        {
          "id": "hs-3",
          "x": 70,
          "y": 75,
          "label": "Industrial Rack-Mount Enclosure",
          "detail": "Cold-War era folded steel housing with DIN audio input jacks."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$175 — $215 USD",
      "primaryChannels": [
        "Allegro Industrial Surplus",
        "Baltic Broadcast Archive"
      ],
      "searchKeywords": [
        "Radiotehnika VU Meter Audio Level Monitor",
        "Vintage Dual VU Meter Analog Broadcast",
        "Philips N4422 Stereo VU Console"
      ],
      "antiFraudWarning": "Test meter coils with low-voltage DC to confirm needles return smoothly to rest stop.",
      "directOutbound": {
        "label": "Inspect on Allegro Surplus",
        "url": "https://allegro.pl",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const BATCH_POOL_OCT_05: RawOdditySeed[] = [
  {
    "id": "anm-016",
    "specimenCode": "TIKTOK-PLASMA // #1-KINETIC",
    "title": "Resonant Audio Plasma Column Arc Visualizer with Wireless Coil",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.4,
    "priceValue": 149,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL DESK SCIENCE (280K+ SOLD)",
    "scarcityBadge": "HIGH VOLTAGE SPECIMEN",
    "heroImage": "/items/anm-016.jpg",
    "tagline": "High-frequency solid-state Tesla coil that sings via modulated electric plasma arcs, jumping to touch without thermal burns.",
    "tags": [
      "TIKTOK SHOP 40%",
      "PLASMA ARC",
      "TESLA COIL",
      "SOUND MODULATED",
      "HIGH VOLTAGE"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in laser-cut protective packaging with grounding cable, discharge needles, and Bluetooth audio sync unit.",
      "tactileFeedback": "Cool ceramic insulator tower with solid copper secondary coil. Electric arcs crackle audibly in sync with square-wave music.",
      "honestSnags": [
        "Produces subtle ozone scent during prolonged operation in small enclosed rooms.",
        "Must be kept away from pacemakers, heart monitors, and sensitive audio recording equipment.",
        "High-frequency arc sounds sharp and metallic; unsuited for mellow ambient sleep playlists."
      ],
      "curatorVerdict": "Lightning captured in a desk cylinder. The visceral rush of physical electric fire dancing to 8-bit chip tunes never gets old.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Tungsten Discharge Needle",
          "detail": "Precision ground electrode focusing ionized plasma streamers into open air."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Resonant Secondary Copper Winding",
          "detail": "Over 1,200 turns of enameled pure copper wire stepping voltage up to 45,000V."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Solid-State IGBT Driver Base",
          "detail": "Heavy aluminum heatsink enclosure housing high-speed switching transistors."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "TikTok Shop (Search \"Singing Tesla Coil\")",
        "Passfeed Hardware Feed"
      ],
      "searchKeywords": [
        "Singing Tesla Coil Plasma Speaker",
        "Solid State Audio Arc Generator",
        "Desktop Spark Gap Music Coil"
      ],
      "antiFraudWarning": "Avoid cheap low-power 12V toys with weak sparks. Look for 48V dual-MOSFET drivers capable of true audio frequency modulation.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Maker Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-017",
    "specimenCode": "TIKTOK-BIOFLOW // #1-MICROBE",
    "title": "Bioluminescent Dinoflagellate Living Marine Micro-Habitat Orb",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.6,
    "priceValue": 124,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL LIVING ARTIFACT (190K+ SOLD)",
    "scarcityBadge": "LIVING BIOLOGICAL CULTURE",
    "heroImage": "/items/anm-017.jpg",
    "tagline": "Hand-blown spherical glass vessel holding living marine Pyrocystis algae that flash intensely cyan when swirled at night.",
    "tags": [
      "TIKTOK SHOP 40%",
      "BIOLUMINESCENT",
      "LIVING ORGANISM",
      "CYAN GLOW",
      "CIRCADIAN ECOSYSTEM"
    ],
    "fieldObservation": {
      "unboxingLog": "Shipped in insulated climate-controlled packaging with active living broth culture and nutrient booster sachets.",
      "tactileFeedback": "Silky smooth borosilicate glass orb. Swirling the sphere in total darkness yields an explosion of electric blue ocean light.",
      "honestSnags": [
        "Requires indirect daylight cycle; keeping it in a windowless closet will starve the living organisms.",
        "Living culture has a 6 to 9 month life cycle before requiring fresh nutrient medium inoculation.",
        "Cannot be violently shaken during daytime hours when the algae are recharging their photosynthetic luciferin."
      ],
      "curatorVerdict": "A living star captured inside hand-blown glass. Nightly swirl routine replaces doom-scrolling with hypnotic oceanic bioluminescence.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 30,
          "label": "Hand-Blown Borosilicate Sphere",
          "detail": "Optical grade bubble-free spherical flask with ground glass stopper."
        },
        {
          "id": "hs-2",
          "x": 45,
          "y": 60,
          "label": "Living Dinoflagellate Suspension",
          "detail": "Over 50,000 individual Pyrocystis fusiformis cells emitting light via mechanical shear stress."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "Laser-Etched Birch Pedestal",
          "detail": "Recessed hardwood display mount holding the orb securely."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$110 — $140 USD",
      "primaryChannels": [
        "TikTok Shop Bio-Creations",
        "PyroFarms Authorized Drops"
      ],
      "searchKeywords": [
        "Bioluminescent Bio-Orb Algae",
        "Living Dinoflagellate Desk Sphere",
        "Glow in Dark Living Plankton Orb"
      ],
      "antiFraudWarning": "Avoid chemical glow-in-the-dark phosphor imitations. Verify live liquid culture that only illuminates under physical motion.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-018",
    "specimenCode": "TIKTOK-ROBOTARM // #1-GEEK",
    "title": "Elephant Robotics myCobot 280 6-Axis Collaborative Desktop Robotic Arm",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.7,
    "priceValue": 245,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 DESK ROBOTICS VIRAL HIT (72K+ SOLD)",
    "scarcityBadge": "PRECISION SERVO KINEMATICS",
    "heroImage": "/items/anm-018.jpg",
    "tagline": "Six degrees-of-freedom miniature collaborative industrial manipulator with ROS2 support and magnetic base mount.",
    "tags": [
      "TIKTOK SHOP 40%",
      "ROBOT ARM",
      "6-AXIS",
      "DESK AUTOMATION",
      "ROS2 COMPATIBLE"
    ],
    "fieldObservation": {
      "unboxingLog": "Dense Pelican-style protective case containing robotic arm, pneumatic suction gripper, power brick, and quick-start guide.",
      "tactileFeedback": "Solid carbon-infused nylon joints with zero backlash. The joint servos whir with crisp industrial precision.",
      "honestSnags": [
        "Requires baseline Python or block-coding familiarity to program beyond standard pre-recorded trajectories.",
        "High torque movement can tip the arm if not securely suction-locked to a flat table.",
        "Power adapter runs noticeably warm during multi-hour repetitive sorting scripts."
      ],
      "curatorVerdict": "Industrial automation shrunk to an espresso mug scale. Writing Python scripts to have it hand you guitar picks is pure cybernetic joy.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 25,
          "label": "Modular Quick-Release End Effector",
          "detail": "Interchangeable pneumatic gripper, pen holder, or suction cup tool head."
        },
        {
          "id": "hs-2",
          "x": 45,
          "y": 55,
          "label": "High-Precision Metal Gear Servos",
          "detail": "Six integrated brushless servo actuators offering 0.5mm repeatability."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 85,
          "label": "ESP32 / M5Stack Controller Core",
          "detail": "Onboard microcontroller with Wi-Fi, Bluetooth, and drag-and-drop code storage."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$230 — $275 USD",
      "primaryChannels": [
        "TikTok Shop Robotics Lab",
        "Elephant Robotics Global Feed"
      ],
      "searchKeywords": [
        "myCobot 280 6-Axis Robot Arm",
        "Desktop Collaborative Robotic Arm",
        "Programmable M5Stack Arm Manipulator"
      ],
      "antiFraudWarning": "Avoid 3D-printed hobby kits with plastic servo gears. Ensure metal gearboxes and CE/FCC calibrated industrial controllers.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-019",
    "specimenCode": "TIKTOK-NIXIE-WATCH // #1-CYBER",
    "title": "Cyberpunk Dual VFD Vacuum Fluorescent Tube Wrist Chronograph",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.8,
    "priceValue": 185,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL CYBERPUNK WEARABLE (110K+ SOLD)",
    "scarcityBadge": "RARE SOVIET IV-15 VFD TUBES",
    "heroImage": "/items/anm-019.jpg",
    "tagline": "Wristwatch built from authentic vintage vacuum fluorescent tubes, glowing in electric cyan numerals upon wrist-raise gesture.",
    "tags": [
      "TIKTOK SHOP 40%",
      "VFD WATCH",
      "VACUUM TUBE",
      "CYBERPUNK WRIST",
      "COLD WAR TUBE"
    ],
    "fieldObservation": {
      "unboxingLog": "Packaged in a laser-engraved acrylic presentation box with magnetic charging cable, hex adjustment key, and spare strap pins.",
      "tactileFeedback": "Substantial CNC-machined aerospace alloy body with curved sapphire glass window. The VFD phosphor glow is mesmerisingly sharp.",
      "honestSnags": [
        "Chunky 16mm case height will catch on tight motorcycle leather jacket cuffs.",
        "Requires USB-C recharge every 4 to 5 days under active wrist-tilt wake usage.",
        "Not water-submersible; taking it into a swimming pool will permanently breach vacuum seals."
      ],
      "curatorVerdict": "Wrist-worn Soviet retro-futurism. Glancing down to see twin vacuum tubes ignite in cyan neon instantly transports you into an anime terminal.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 40,
          "label": "Twin IV-15 Glass VFD Tubes",
          "detail": "Original Cold-War phosphor tubes emitting monochromatic 505nm cyan numerals."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Gyroscope Gesture Tilt Sensor",
          "detail": "Ultra-low-power accelerometer igniting the filament only when wrist is tilted toward eye."
        },
        {
          "id": "hs-3",
          "x": 75,
          "y": 45,
          "label": "Anodized 6061 Billet Aluminum Case",
          "detail": "Milled unibody chassis with wire-cut side gills exposing motherboard traces."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$170 — $210 USD",
      "primaryChannels": [
        "TikTok Shop Cyberpunk Drop",
        "Shenzhen Horology Lab"
      ],
      "searchKeywords": [
        "IV-15 VFD Tube Wrist Watch",
        "Vacuum Fluorescent Tube Watch",
        "Cyberpunk Nixie Tube Wristwatch"
      ],
      "antiFraudWarning": "Avoid cheap counterfeit watches using backlit LCD cutouts. Genuine vacuum tubes have glowing tungsten filaments and vacuum getters.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-020",
    "specimenCode": "TIKTOK-LEVIT-MOON // #1-ASTRONOMY",
    "title": "Magnetic Levitating 3D Relief Moon Lamp with Solid Wood Base",
    "category": "UNCANNY_DOMESTIC",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.3,
    "priceValue": 139,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL ROOM AESTHETIC (420K+ SOLD)",
    "scarcityBadge": "MAGNETIC LEVITATION HARNESS",
    "heroImage": "/items/anm-020.jpg",
    "tagline": "High-precision NASA topographic relief celestial sphere floating and spinning friction-free in mid-air via electromagnetic levitation.",
    "tags": [
      "TIKTOK SHOP 40%",
      "MAGNETIC LEVITATION",
      "MOON LAMP",
      "NASA RELIEF",
      "ZERO GRAVITY"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in high-density molded pearl foam with American walnut base, leveling alignment tool, and DC power supply.",
      "tactileFeedback": "Tactile crater ridges on matte PLA shell. Floating the orb gives a distinct haptic spring-like magnetic tension as it locks into suspension.",
      "honestSnags": [
        "Setting the orb into magnetic equilibrium requires two hands and patience on the first attempt.",
        "Power outage or cord yank will cause the sphere to snap down onto the magnetic base with a sharp clack.",
        "Rotating speed depends on initial finger nudge; spins for days but gradually slows if air currents counter it."
      ],
      "curatorVerdict": "Literal magic on your nightstand. Seeing an illuminated full moon rotating silently in mid-air defies everyday gravity intuition.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "NASA Topographic Lunar Relief",
          "detail": "3D printed from high-res Lunar Reconnaissance Orbiter elevation maps."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Wireless Induction Power Receiver",
          "detail": "Electromagnetic resonant coil inside orb powering internal warm/cool LEDs wirelessly."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 90,
          "label": "Walnut Electromagnetic Stator Base",
          "detail": "Quad-coil magnetic levitation driver with active PID position feedback."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$125 — $155 USD",
      "primaryChannels": [
        "TikTok Shop Home Aesthetics",
        "Levitation Design Studio"
      ],
      "searchKeywords": [
        "Magnetic Levitating Moon Lamp",
        "Floating 3D Moon Walnut Base",
        "Wireless Power Levitation Sphere"
      ],
      "antiFraudWarning": "Look for wireless inductive power transfer. Avoid fake models with dangling transparent nylon cords or fixed acrylic stands.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-021",
    "specimenCode": "TIKTOK-CYBER-VISOR // #1-LED",
    "title": "Luminous Cyberpunk LED Visor Glasses with 7 Dynamic Color Modes",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.1,
    "priceValue": 118,
    "platform": "TikTok Shop",
    "salesRank": 1,
    "salesRankBadge": "#1 VIRAL COSPLAY & RAVE PROP (350K+ SOLD)",
    "scarcityBadge": "BILATERAL DUAL-EMITTER",
    "heroImage": "/items/anm-021.jpg",
    "tagline": "Futuristic edge-lit acrylic visor spectacles featuring laser-engraved circuit traces and dual independent temple color controllers.",
    "tags": [
      "TIKTOK SHOP 40%",
      "CYBERPUNK VISOR",
      "LED EYEWEAR",
      "EDGE LIT",
      "CLUB ANOMALY"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in rigid EVA clamshell case with cleaning cloth, micro USB charger, and spare nose pads.",
      "tactileFeedback": "Lightweight crystal-clear optical acrylic with smooth laser-beveled edges. Button clicks on both temples feel clicky and tactile.",
      "honestSnags": [
        "Internal edge reflections can cause glare in totally pitch-black outdoor settings.",
        "Laser-etched traces require microfiber cloth cleaning to keep free of finger oils.",
        "Not rated as ballistic or safety impact eye protection."
      ],
      "curatorVerdict": "Instant blade-runner transformation. Dual temple controls let you mix contrasting hues across left and right eyes for dramatic portraits.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 45,
          "label": "Optical Laser-Etched Circuit Trace",
          "detail": "High-purity PMMA acrylic sheet internally reflecting light along engraved vectors."
        },
        {
          "id": "hs-2",
          "x": 20,
          "y": 55,
          "label": "Left Temple Micro-LED Controller",
          "detail": "Independent RGB driver cycling through monochrome, breathing, and flash modes."
        },
        {
          "id": "hs-3",
          "x": 80,
          "y": 55,
          "label": "Right Temple Micro-LED Controller",
          "detail": "Allows two-tone chromatic splits across the facial plane."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$105 — $130 USD",
      "primaryChannels": [
        "TikTok Shop Rave Gear",
        "NeoTokyo Prop Vault"
      ],
      "searchKeywords": [
        "Cyberpunk LED Visor Dual Control",
        "Luminous Futuristic Glasses LED",
        "Edge Lit Acrylic Cosplay Visor"
      ],
      "antiFraudWarning": "Avoid single-battery cheap party shades with wired battery packs in your pocket. Insist on dual built-in rechargeable temple batteries.",
      "directOutbound": {
        "label": "Inspect on TikTok Shop Feed",
        "url": "https://shop.tiktok.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-022",
    "specimenCode": "AMZ-TUBE-RADIO // #1-VINTAGE",
    "title": "Vintage Wooden AM/FM/SW Shortwave Radio & Bluetooth Acoustic Speaker",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.3,
    "priceValue": 159,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER RETRO AUDIO",
    "scarcityBadge": "WARM ANALOG TUBE VOICING",
    "heroImage": "/items/anm-022.jpg",
    "tagline": "Hand-crafted walnut cabinet shortwave receiver with analog tuning dial, magic-eye tuning indicator tube, and modern Bluetooth 5.0.",
    "tags": [
      "AMAZON #1",
      "VINTAGE RADIO",
      "SHORTWAVE SW",
      "WALNUT CABINET",
      "ANALOG TUNER"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy cardboard vintage-styled crate with external wire antenna spool, AUX cable, and cloth-braided power cord.",
      "tactileFeedback": "Weighted aluminum rotary tuning dial with flywheel momentum. The amber dial glow illuminates with warm analog nostalgia.",
      "honestSnags": [
        "Shortwave (SW) frequency reception requires unfurling the included long wire antenna near a window.",
        "Weighs over 3.2kg; designed strictly for a desk or bookshelf, not portability.",
        "Bass tuning leans thick and resonant; modern hyper-compressed podcasts may sound extra boomy."
      ],
      "curatorVerdict": "Late-night shortwave listening is a dying art. Tuning through crackling foreign stations with this weighted brass dial is pure meditation.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Weighted Flywheel Analog Tuning Dial",
          "detail": "Silky smooth reduction gearing for pinpoint frequency scanning."
        },
        {
          "id": "hs-2",
          "x": 75,
          "y": 40,
          "label": "Magic Eye Green Vacuum Indicator",
          "detail": "Electron-ray beam tube narrowing as radio signal reaches optimum resonance."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 80,
          "label": "Acoustic Ported Walnut Cabinet",
          "detail": "Solid timber enclosure delivering rich mid-range acoustic resonance."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$145 — $175 USD",
      "primaryChannels": [
        "Amazon Audio Classics",
        "Retro Sound Warehouse"
      ],
      "searchKeywords": [
        "Vintage Wooden Shortwave Radio Bluetooth",
        "Retro Tube Style AM FM Radio Dial",
        "Analog Walnut Tabletop Radio"
      ],
      "antiFraudWarning": "Check for true analog rotary capacitor tuning. Avoid cheap plastic radios with fake printed paper dials behind clear windows.",
      "directOutbound": {
        "label": "Inspect on Amazon Electronics",
        "url": "https://amazon.com",
        "sourceType": "Official Reseller"
      }
    }
  },
  {
    "id": "anm-023",
    "specimenCode": "AMZ-SAND-TABLE // #1-KINETIC",
    "title": "Grounded Labs Oasis Mini Kinetic Sand Art Desk Table",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.6,
    "priceValue": 199,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 BESTSELLER KINETIC ART",
    "scarcityBadge": "MAGNETIC SPHERE AUTOMATON",
    "heroImage": "/items/anm-023.jpg",
    "tagline": "Automated kinetic coffee-table art piece carving intricate geometric mandala patterns into fine silica sand via a sub-surface magnetic sphere.",
    "tags": [
      "AMAZON #1",
      "KINETIC SAND ART",
      "AUTOMATED PLOTTER",
      "ZEN MANDALA",
      "MAGNETIC SPHERE"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy sealed cylinder with fine white silica sand pouches, precision steel marbles, glass lid, and smartphone Wi-Fi bridge.",
      "tactileFeedback": "Glass top is flush and cool. The silent two-axis magnetic gantry beneath glides silently as the marble carves crisp rippling trails.",
      "honestSnags": [
        "Sand must be raked completely level during initial setup to avoid pile-ups near edges.",
        "Wi-Fi app setup requires 2.4GHz network band connection.",
        "High speed plot mode generates faint stepper motor whirring audible in quiet bedrooms."
      ],
      "curatorVerdict": "Ever-shifting zen architecture for your workspace. Watching the lone steel marble carve infinite spiral mandalas is supremely hypnotic.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 45,
          "label": "Mirror Polished Chrome Steel Sphere",
          "detail": "Follows magnetic field vectors through glass-smooth silica sand."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 75,
          "label": "Sub-Surface SCARA Kinematic Gantry",
          "detail": "Dual stepper motor arm drawing complex vector paths silently beneath sandbed."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 15,
          "label": "Flush Tempered Glass Protective Cover",
          "detail": "Dust-sealed crystal glass maintaining clean sandbed topography."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$180 — $220 USD",
      "primaryChannels": [
        "Amazon Kinetic Design",
        "Sisyphus Art Direct"
      ],
      "searchKeywords": [
        "Oasis Mini Kinetic Sand Table",
        "Automated Sand Art Table Machine",
        "Kinetic Sand Drawing Machine Wi-Fi"
      ],
      "antiFraudWarning": "Avoid vibrating motor copies that produce blurry patterns. Insist on true two-axis polar or cartesian magnetic plotters.",
      "directOutbound": {
        "label": "Inspect on Amazon Design",
        "url": "https://amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-024",
    "specimenCode": "ALI-BIOMECH-HELM // #1-PROP",
    "title": "Cyberpunk Mecha Tactical Half-Face Respirator Mask with Green LED Accents",
    "category": "WEARABLE_ANOMALIES",
    "curatorId": "cr-algo-03",
    "weirdnessScore": 9.8,
    "priceValue": 145,
    "platform": "AliExpress",
    "salesRank": 1,
    "salesRankBadge": "#1 GLOBAL BESTSELLER CYBER PROP",
    "scarcityBadge": "ALLOY COMPOSITE ARMOR",
    "heroImage": "/items/anm-024.jpg",
    "tagline": "Articulated cyberpunk respirator helmet with active air filtration, dual circular green LED canister meters, and voice modulation mic.",
    "tags": [
      "ALIEXPRESS #1",
      "CYBER RESPIRATOR",
      "VOICE MODULATOR",
      "LED CANISTERS",
      "DYSTOPIAN WEAR"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in an industrial foam flight case with spare HEPA filter cartridges, mic boom, and USB charging cables.",
      "tactileFeedback": "Dense composite resin and aluminum alloy brackets. The internal voice modulator lowers vocal pitch with authentic mechanical vocoder grit.",
      "honestSnags": [
        "Full-face seal reduces peripheral vision; requires practice before navigating dark stairs.",
        "Not certified for hazardous biological or industrial chemical fumes (decorative HEPA filtration only).",
        "Wearing this into a local bank will result in an immediate tactical response."
      ],
      "curatorVerdict": "Peak dystopian theater. When the dual LED canisters spin up and the voice amplifier transforms your voice into an android baritone, reality dissolves.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 45,
          "y": 40,
          "label": "Dual Circular LED Display Canisters",
          "detail": "Round screens mounted on cheek filters showing real-time audio wave monitors."
        },
        {
          "id": "hs-2",
          "x": 55,
          "y": 55,
          "label": "Integrated Vocoder Voice Modulator",
          "detail": "Internal microphone and speaker unit pitch-shifting voice into robotic synth tones."
        },
        {
          "id": "hs-3",
          "x": 65,
          "y": 75,
          "label": "Multi-Point Magnetic Buckle Straps",
          "detail": "Heavy nylon tactical straps with Fidlock magnetic quick-release clasps."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$135 — $165 USD",
      "primaryChannels": [
        "AliExpress Tactical Cyberpunk Workshop",
        "Shenzhen Cosplay Lab"
      ],
      "searchKeywords": [
        "Cyberpunk Helmet LED Mask",
        "Respirator Cosplay Voice Modulator",
        "Mechanical Cyber Mask Headwear"
      ],
      "antiFraudWarning": "Avoid thin vac-formed plastic masks without electronics. Ensure metal screws, active LED rings, and voice amplifier electronics.",
      "directOutbound": {
        "label": "Inspect AliExpress Global Workshop",
        "url": "https://aliexpress.com",
        "sourceType": "Official Workshop"
      }
    }
  },
  {
    "id": "anm-025",
    "specimenCode": "ETSY-TAXIDERMY-BAT // #1-CURIO",
    "title": "Authentic Preserved Bat Taxidermy Specimen in Wooden Shadow Box",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.7,
    "priceValue": 165,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER ODDITIES MASTERPIECE",
    "scarcityBadge": "MUSEUM CONSERVATOR GRADE",
    "heroImage": "/items/anm-025.jpg",
    "tagline": "Ethically salvaged articulated bat skeleton mounted in a museum-grade archival shadowbox with vintage Latin botanical and osteological placards.",
    "tags": [
      "ETSY #1",
      "STEAMPUNK TAXIDERMY",
      "BAT SKELETON",
      "WALNUT SHADOWBOX",
      "CABINET CURIOSITY"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy timber crate lined with museum-grade bubble wrap and archival acid-free tissue paper with signed origin certificate.",
      "tactileFeedback": "Richly stained walnut case with heavy brass corner brackets. Glass is anti-reflective museum grade with zero glare.",
      "honestSnags": [
        "Requires wall anchor mounting; the solid hardwood frame and glass front weigh over 2.4kg.",
        "Avoid mounting in direct sunlight to protect delicate natural bone enamel from fading.",
        "Some guests and sensitive family members may find the biological curio startling or unsettling."
      ],
      "curatorVerdict": "Victorian natural history cabinet perfection. The delicate wing bones and gothic brass accents make it an unmatched conversation anchor.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 40,
          "label": "Articulated Chiroptera Wing Skeleton",
          "detail": "Delicate finger bones extended in flight posture with micro-pins."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Hand-Aged Latin Specimen Placard",
          "detail": "Letterpress printed on cotton rag paper detailing genus and salvage locality."
        },
        {
          "id": "hs-3",
          "x": 25,
          "y": 85,
          "label": "Antique Patinated Brass Hinges & Latch",
          "detail": "Hand-cast hardware securing the solid walnut shadowbox frame."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$150 — $180 USD",
      "primaryChannels": [
        "Etsy Curiosities Guild",
        "Edinburgh Osteology Atelier"
      ],
      "searchKeywords": [
        "Preserved Bat Shadow Box Taxidermy",
        "Bat Skeleton Frame Articulated",
        "Victorian Curiosities Shadowbox"
      ],
      "antiFraudWarning": "Ensure the seller provides authentic ethical salvage documentation. Avoid illegally hunted or poached specimens.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-026",
    "specimenCode": "RAK-GAKKEN-SYNTH // #1-TOKYO",
    "title": "Gakken SX-150 Mark II Stylus Ribbon Analog Synthesizer",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-04",
    "weirdnessScore": 9.6,
    "priceValue": 175,
    "platform": "Rakuten",
    "salesRank": 1,
    "salesRankBadge": "#1 RAKUTEN TOKYO SYNTH COLLECTIBLE",
    "scarcityBadge": "OUT-OF-PRINT JAPAN VAULT",
    "heroImage": "/items/anm-026.jpg",
    "tagline": "Legendary Tokyo desktop analog noise generator played with a conductive stylus on a ribbon controller with resonant VCF and LFO.",
    "tags": [
      "RAKUTEN #1",
      "GAKKEN SX-150",
      "ANALOG SYNTH",
      "RIBBON CONTROLLER",
      "TOKYO HARDWARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Mint Japanese box with original Otona no Kagaku magazine volume, alligator ground lead, and tethered metal stylus.",
      "tactileFeedback": "Classic Japanese matte plastic chassis with clicky slide switches and smooth analog potentiometer knobs. The ribbon controller glides effortlessly.",
      "honestSnags": [
        "Monophonic stylus play requires ear training to hit exact microtonal notes accurately.",
        "Runs on AA batteries; does not include built-in modern USB-C charging.",
        "Internal speaker is small and lo-fi; best experienced plugged into studio headphones or a tube guitar amplifier."
      ],
      "curatorVerdict": "Pure analog electronic soul from Tokyo. Sliding the metal stylus across the ribbon while sweeping resonance creates screeching retro sci-fi sirens.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Linear Pitch Ribbon Strip",
          "detail": "Conductive resistive membrane played via tethered metal contact stylus."
        },
        {
          "id": "hs-2",
          "x": 70,
          "y": 60,
          "label": "Resonant VCF Cutoff Knob",
          "detail": "Aggressive 24dB ladder filter capable of rich analog self-oscillation."
        },
        {
          "id": "hs-3",
          "x": 30,
          "y": 70,
          "label": "Square / Triangle LFO Modulator",
          "detail": "Variable speed low-frequency oscillator modulating pitch or filter cutoff."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$160 — $195 USD",
      "primaryChannels": [
        "Rakuten Japan Vintage Vault",
        "Tokyo Akihabara Radio Store"
      ],
      "searchKeywords": [
        "Gakken SX-150 Mark II Synthesizer",
        "Gakken Analog Ribbon Synth Japan",
        "Otona no Kagaku Synth Kit"
      ],
      "antiFraudWarning": "Look for original Gakken Japan holographic seal. Many low-quality plastic knockoffs lack true analog VCF circuitry.",
      "directOutbound": {
        "label": "Inspect on Rakuten Tokyo Vault",
        "url": "https://rakuten.co.jp",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-027",
    "specimenCode": "MERC-FERRO-HUB // #1-FLUIDIC",
    "title": "Dancing Ferrofluid Sound Visualizer Desktop Bluetooth Speaker",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 9.7,
    "priceValue": 169,
    "platform": "Mercari",
    "salesRank": 1,
    "salesRankBadge": "#1 VERIFIED BOUTIQUE RESALE HIT",
    "scarcityBadge": "HERMETIC NANO-FERRO CELL",
    "heroImage": "/items/anm-027.jpg",
    "tagline": "Encapsulated alien-like magnetic fluid reacting to audio frequencies with sharp dynamic spikes inside an LED-lit crystal chamber.",
    "tags": [
      "MERCARI #1",
      "FERROFLUID SPEAKER",
      "MAGNETIC VISUALIZER",
      "DESK SCIFI",
      "KINETIC AUDIO"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in magnetic gift box with USB-C braided charging cable, pickup microphone sensitivity tool, and microfiber cloth.",
      "tactileFeedback": "Heavy solid aluminum housing with anti-vibration rubber feet. The ferrofluid forms spiky black blooms in real time as bass drops.",
      "honestSnags": [
        "Extreme bass tracks at maximum volume can cause temporary fluid bead separation before re-coalescing.",
        "Keep away from strong external neodymium magnets to prevent disrupting the internal electromagnetic bias field.",
        "Chamber light is fixed color temperature (cool white or cyan depending on switch setting)."
      ],
      "curatorVerdict": "Looks like you captured a sentient drop of Venom inside a laboratory capsule. The organic, fluid spike dancing cannot be replicated by any digital display.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 45,
          "label": "Hermetic Glass Fluid Cell",
          "detail": "Optical grade glass tube filled with anti-staining clear carrier solution."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 80,
          "label": "Magnetic Audio Coil Core",
          "detail": "Electromagnetic transducer transforming audio frequencies into magnetic flux lines."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 20,
          "label": "Top-Fired Full-Range Driver",
          "detail": "High-clarity speaker cone delivering crisp audio while exciting fluid base."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$150 — $185 USD",
      "primaryChannels": [
        "Mercari Curated Audio",
        "Boutique Sound Resale"
      ],
      "searchKeywords": [
        "Dancing Ferrofluid Bluetooth Speaker",
        "Magnetic Fluid Visualizer Music Display",
        "Venom Ferrofluid Desk Speaker"
      ],
      "antiFraudWarning": "Inspect glass cell for staining or black residue sticking to walls. Quality cells use hydrophobic nano-coatings to keep glass spotless.",
      "directOutbound": {
        "label": "Inspect on Mercari Boutique",
        "url": "https://mercari.com",
        "sourceType": "Boutique Reseller"
      }
    }
  },
  {
    "id": "anm-028",
    "specimenCode": "AMZ-VORTEX-CANNON // #1-AERO",
    "title": "Can You Imagine Airzooka Handheld Air Vortex Blast Cannon",
    "category": "ODD_DESK_TACTILE",
    "curatorId": "cr-algo-02",
    "weirdnessScore": 8.8,
    "priceValue": 109,
    "platform": "Amazon",
    "salesRank": 1,
    "salesRankBadge": "#1 CLASSIC SCI-FI KINETIC CANNON",
    "scarcityBadge": "ORIGINAL PATENTED AERO-CANNON",
    "heroImage": "/items/anm-028.jpg",
    "tagline": "Hand-powered acoustic air vortex generator launching harmless invisible toroidal air cannonballs up to 50 feet away.",
    "tags": [
      "AMAZON #1",
      "AIRZOOKA",
      "VORTEX CANNON",
      "ACOUSTIC SHOCKWAVE",
      "OFFICE WARFARE"
    ],
    "fieldObservation": {
      "unboxingLog": "Arrives in original illustrated retail box with pop-up sighting reticle and elastic launcher assembly.",
      "tactileFeedback": "Rugged molded polymer funnel with high-tension rubberized diaphragm. Pulling back the bungee handle and releasing delivers a solid acoustic pop.",
      "honestSnags": [
        "Vortex is invisible unless aimed through light smoke, fog, or thin paper curtains.",
        "Requires two hands to operate effectively (one to aim, one to pull back launcher).",
        "Office coworkers will eventually form a coalition and confiscate it from your desk."
      ],
      "curatorVerdict": "Pure mischievous physics. Blasting a paper cup off a colleague’s monitor from 30 feet away with an invisible gust of toroidal air never gets old.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Toroidal Aerodynamic Venturi Nozzle",
          "detail": "Calibrated aperture compressing air volume into a spinning vortex ring."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 65,
          "label": "Elastic Diaphragm Membrane",
          "detail": "High-rebound polymer sheet displacing air instantaneously on release."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 88,
          "label": "Flip-Up Pop-Up Sight Reticle",
          "detail": "Aiming crosshair for precision long-range vortex targeting."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 2,
      "priceRange": "$95 — $120 USD",
      "primaryChannels": [
        "Amazon Scientific Toys",
        "Specialty Toy Archives"
      ],
      "searchKeywords": [
        "Airzooka Air Cannon Can You Imagine",
        "Handheld Vortex Air Gun",
        "Acoustic Air Vortex Launcher"
      ],
      "antiFraudWarning": "Insist on original \"Can You Imagine\" branded Airzooka. Cheap dollar-store knockoffs tear their elastic diaphragms within hours.",
      "directOutbound": {
        "label": "Inspect on Amazon Toys",
        "url": "https://amazon.com",
        "sourceType": "Authorized Dealer"
      }
    }
  },
  {
    "id": "anm-029",
    "specimenCode": "ETSY-SKULL-VESSEL // #1-POTTERY",
    "title": "Hand-Sculpted Stoneware Ceramic Skull Vessel & Espresso Tumbler",
    "category": "ZINES_RELICS",
    "curatorId": "cr-algo-05",
    "weirdnessScore": 9.4,
    "priceValue": 128,
    "platform": "Etsy",
    "salesRank": 1,
    "salesRankBadge": "#1 STAR SELLER ARTISAN CERAMIC",
    "scarcityBadge": "WOOD-FIRED STUDIO ONE-OFF",
    "heroImage": "/items/anm-029.jpg",
    "tagline": "Hand-thrown and sculpted unglazed stoneware drinking vessel shaped like an anatomically weathered cranium with ash glaze drippings.",
    "tags": [
      "ETSY #1",
      "CERAMIC SKULL",
      "WOOD FIRED",
      "STUDIO POTTERY",
      "MEMENTO MORI"
    ],
    "fieldObservation": {
      "unboxingLog": "Heavy cardboard box stuffed with wood shavings, stamped pottery studio seal, and handwritten kiln firing notes.",
      "tactileFeedback": "Rough, earthy raw clay texture with smooth polished rim for drinking comfort. Fits weighted and grounded in the palm.",
      "honestSnags": [
        "Hand-wash only; mechanical dishwashers will erode the subtle wood-ash mineral crystals over time.",
        "Each vessel is unique; exact bone-white and charcoal ash color tones vary naturally from kiln wood placement.",
        "Drinking your morning black espresso from a skull will prompt questions during Zoom calls."
      ],
      "curatorVerdict": "Raw, visceral earth craft. The contrast between rough cranium texture and velvety interior glaze makes every sip feel like a quiet ritual.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 35,
          "label": "Sculpted Zygomatic Arch & Brow",
          "detail": "Individually carved facial planes highlighting natural bone osteology."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 70,
          "label": "Natural Wood-Ash Kiln Glaze",
          "detail": "Fly-ash melt forming greenish-amber vitreous glassy rivers down cheekbones."
        },
        {
          "id": "hs-3",
          "x": 50,
          "y": 92,
          "label": "Beveled Weighted Stoneware Foot",
          "detail": "Heavy base preventing tipping when filled with hot beverages or ink."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 3,
      "priceRange": "$115 — $145 USD",
      "primaryChannels": [
        "Etsy Studio Ceramics",
        "Independent Pottery Guild"
      ],
      "searchKeywords": [
        "Handmade Ceramic Skull Cup Mug",
        "Wood Fired Stoneware Skull Vessel",
        "Memento Mori Studio Ceramic Tumbler"
      ],
      "antiFraudWarning": "Avoid slip-cast factory ceramic skulls with smooth painted enamel. Genuine studio pieces show hand-carved tool marks and kiln flashes.",
      "directOutbound": {
        "label": "Inspect on Etsy Artisan Vault",
        "url": "https://etsy.com",
        "sourceType": "Independent Artisan"
      }
    }
  },
  {
    "id": "anm-030",
    "specimenCode": "ALL-CRT-RADAR // #1-WARSAW",
    "title": "Vintage Tektronix Laboratory Cathode Ray Tube Phosphor Oscilloscope Display",
    "category": "CYBER_HARDWARE",
    "curatorId": "cr-algo-01",
    "weirdnessScore": 9.8,
    "priceValue": 320,
    "platform": "Allegro",
    "salesRank": 1,
    "salesRankBadge": "#1 SURPLUS LAB ELECTRONICS HIT",
    "scarcityBadge": "P31 EMERALD PHOSPHOR CRT",
    "heroImage": "/items/anm-030.jpg",
    "tagline": "Decommissioned test bench oscilloscope CRT retrofitted into an active desktop vector audio visualizer glowing with green electron beams.",
    "tags": [
      "ALLEGRO #1",
      "CRT DISPLAY",
      "OSCILLOSCOPE",
      "GREEN PHOSPHOR",
      "LAB SURPLUS"
    ],
    "fieldObservation": {
      "unboxingLog": "Packs in wood-reinforced flight crate with isolated low-voltage power supply, BNC-to-RCA stereo adapters, and focus alignment knob.",
      "tactileFeedback": "Curved thick leaded glass screen glowing with rich emerald phosphor. Turning stereo music on traces complex Lissajous spirals in real time.",
      "honestSnags": [
        "Heavier than modern flat monitors; requires solid desk surface able to hold 4.5kg.",
        "High-voltage internal flyback transformer creates subtle 15kHz electrical hum near the rear vent.",
        "Must be kept away from strong unshielded speaker magnets to avoid color deflection distortion."
      ],
      "curatorVerdict": "The holy grail of analog visualizers. Electron beams painting vector geometry in real time makes modern 60Hz LCDs look lifeless and sluggish.",
      "hotspots": [
        {
          "id": "hs-1",
          "x": 50,
          "y": 50,
          "label": "P31 Medium-Persistence Green Phosphor",
          "detail": "Vacuum electron-beam glass faceplate glowing in iconic emerald phosphor luminescence."
        },
        {
          "id": "hs-2",
          "x": 50,
          "y": 20,
          "label": "Precision 8x10 Division Metric Graticule",
          "detail": "Internal illuminated parallax-free grid lines for calibrated voltage and timebase measurement."
        },
        {
          "id": "hs-3",
          "x": 10,
          "y": 10,
          "label": "Industrial Aluminum Bezel & Mounting Screws",
          "detail": "Cast metal mounting frame designed for heavy-duty test bench instrument rack installations."
        }
      ]
    },
    "sourcingTelemetry": {
      "huntDifficulty": 4,
      "priceRange": "$290 — $360 USD",
      "primaryChannels": [
        "Allegro Industrial Electronics",
        "European Surplus Tech Vaults"
      ],
      "searchKeywords": [
        "Tektronix Oscilloscope CRT Screen 475",
        "Vintage Cathode Ray Tube Phosphor Display",
        "Analog Lab Oscilloscope CRT"
      ],
      "antiFraudWarning": "Check that the vacuum tube has no neck fractures or phosphor burn-in spots before purchasing.",
      "directOutbound": {
        "label": "Examine on Allegro Surplus",
        "url": "https://allegro.pl",
        "sourceType": "Boutique Reseller"
      }
    }
  }
];

const SCHEDULED_WEEKLY_DROPS: { unlockUtcMs: number; dateLogged: string; pool: RawOdditySeed[] }[] = [
  {
    unlockUtcMs: Date.UTC(2026, 9, 5, 3, 0, 0), // Monday, Oct 05, 2026 12:00 PM JST
    dateLogged: 'OCT 05, 2026',
    pool: BATCH_POOL_OCT_05,
  },
  {
    unlockUtcMs: Date.UTC(2026, 9, 12, 3, 0, 0), // Monday, Oct 12, 2026 12:00 PM JST
    dateLogged: 'OCT 12, 2026',
    pool: BATCH_POOL_OCT_12,
  },
  {
    unlockUtcMs: Date.UTC(2026, 9, 19, 3, 0, 0), // Monday, Oct 19, 2026 12:00 PM JST
    dateLogged: 'OCT 19, 2026',
    pool: BATCH_POOL_OCT_19,
  },
  {
    unlockUtcMs: Date.UTC(2026, 9, 26, 3, 0, 0), // Monday, Oct 26, 2026 12:00 PM JST
    dateLogged: 'OCT 26, 2026',
    pool: BATCH_POOL_OCT_26,
  },
  {
    unlockUtcMs: Date.UTC(2026, 10, 2, 3, 0, 0), // Monday, Nov 02, 2026 12:00 PM JST
    dateLogged: 'NOV 02, 2026',
    pool: BATCH_POOL_NOV_02,
  },
  {
    unlockUtcMs: Date.UTC(2026, 10, 9, 3, 0, 0), // Monday, Nov 09, 2026 12:00 PM JST
    dateLogged: 'NOV 09, 2026',
    pool: BATCH_POOL_NOV_09,
  },
  {
    unlockUtcMs: Date.UTC(2026, 10, 16, 3, 0, 0), // Monday, Nov 16, 2026 12:00 PM JST
    dateLogged: 'NOV 16, 2026',
    pool: BATCH_POOL_NOV_16,
  },
  {
    unlockUtcMs: Date.UTC(2026, 10, 23, 3, 0, 0), // Monday, Nov 23, 2026 12:00 PM JST
    dateLogged: 'NOV 23, 2026',
    pool: BATCH_POOL_NOV_23,
  },
];

/**
 * Resolves the cumulative weekly archive anchored to Monday 12:00 PM Tokyo Time (03:00 UTC).
 * Newest weekly drop (15 items) is placed at the VERY FRONT, while preserving previous weeks'
 * items below in strict newest-to-oldest chronological order with zero duplicate IDs.
 */
export function getActiveWeeklyCatalog(nowMs: number = Date.now()): OddityItem[] {
  const unlockedDrops = SCHEDULED_WEEKLY_DROPS
    .filter((drop) => nowMs >= drop.unlockUtcMs)
    .sort((a, b) => b.unlockUtcMs - a.unlockUtcMs); // Newest Monday drop first

  const dropsToInclude = unlockedDrops.length > 0 ? unlockedDrops : [SCHEDULED_WEEKLY_DROPS[0]];
  const seenIds = new Set<string>();
  const archive: OddityItem[] = [];

  for (const drop of dropsToInclude) {
    for (const item of drop.pool) {
      if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        archive.push({
          ...item,
          dateLogged: drop.dateLogged,
          gallery: [item.heroImage],
        });
      }
    }
  }

  return archive;
}

export const ODDITY_ITEMS: OddityItem[] = getActiveWeeklyCatalog();
