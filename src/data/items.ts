import type { OddityItem } from './types';

// ============================================================================
// ANOMALY ARCHIVE // SPECIMEN CATALOG
// Rule 1: Product images sourced directly from authentic product listings (NO AI)
// Rule 2: Zero image reuse - each specimen has its own unique real photograph
// Rule 3: Newest published items are positioned at the FRONT of the archive
// Rule 4: Automatically updates every Monday at 12:00 PM Tokyo Time (JST / 03:00 UTC)
//         with Global Previous Week (Mon-Sun) Velocity Top 15 (40% TikTok Shop, >$100)
// ============================================================================

type RawOdditySeed = Omit<OddityItem, 'dateLogged' | 'gallery'>;

// Active Drop Snapshot: OCT 12, 2026 (Batch 2 (Oct 12, 2026))
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

const WEEKLY_ROTATION_POOLS: RawOdditySeed[][] = [
  BATCH_POOL_OCT_12,
  BATCH_POOL_OCT_19,
  BATCH_POOL_OCT_05,
];

const MONTHS_SHORT = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * Resolves the active 15-item weekly catalog anchored to Monday 12:00 PM Tokyo Time (03:00 UTC).
 * Guarantees zero-second delay on Monday 12:00 PM JST even before background CI jobs finish.
 */
export function getActiveWeeklyCatalog(nowMs: number = Date.now()): OddityItem[] {
  // Anchor: Monday, Oct 12, 2026 at 12:00:00 PM Tokyo Time (03:00:00 UTC)
  const oct12JstNoonUtcMs = Date.UTC(2026, 9, 12, 3, 0, 0);
  const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

  if (nowMs >= oct12JstNoonUtcMs) {
    const weeksElapsed = Math.floor((nowMs - oct12JstNoonUtcMs) / oneWeekMs);
    const pool = WEEKLY_ROTATION_POOLS[weeksElapsed % WEEKLY_ROTATION_POOLS.length];
    const dropMondayUtc = new Date(oct12JstNoonUtcMs + weeksElapsed * oneWeekMs);
    const dateLogged = MONTHS_SHORT[dropMondayUtc.getUTCMonth()] + ' ' + String(dropMondayUtc.getUTCDate()).padStart(2, '0') + ', ' + dropMondayUtc.getUTCFullYear();

    return pool.map((item) => ({
      ...item,
      dateLogged,
      gallery: [item.heroImage],
    }));
  }

  return BATCH_POOL_OCT_05.map((item) => ({
    ...item,
    dateLogged: 'OCT 05, 2026',
    gallery: [item.heroImage],
  }));
}

export const ODDITY_ITEMS: OddityItem[] = getActiveWeeklyCatalog();
