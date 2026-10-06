import type { OddityItem } from './types';

// ============================================================================
// ANOMALY ARCHIVE // SPECIMEN CATALOG
// Rule 1: Product images sourced directly from authentic product listings (NO AI)
// Rule 2: Zero image reuse - each specimen has its own unique real photograph
// Rule 3: Newest published items are positioned at the FRONT of the archive
// ============================================================================

export const ODDITY_ITEMS: OddityItem[] = [

  // =============================================================
  // LATEST WEEKLY DROP: OCT 06, 2026 (TOP 15 VELOCITY SPECIMENS // 40% TIKTOK SHOP // >$100)
  // =============================================================
  {
    id: 'anm-016',
    specimenCode: 'TIKTOK-PLASMA // #1-KINETIC',
    title: "Resonant Audio Plasma Column Arc Visualizer with Wireless Coil",
    category: 'CYBER_HARDWARE',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.4,
    priceValue: 149,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 VIRAL DESK SCIENCE (280K+ SOLD)',
    scarcityBadge: 'HIGH VOLTAGE SPECIMEN',
    heroImage: '/items/anm-016.jpg',
    gallery: ["/items/anm-016.jpg"],
    tagline: "High-frequency solid-state Tesla coil that sings via modulated electric plasma arcs, jumping to touch without thermal burns.",
    tags: ["TIKTOK SHOP 40%","PLASMA ARC","TESLA COIL","SOUND MODULATED","HIGH VOLTAGE"],
    fieldObservation: {
      unboxingLog: "Arrives in laser-cut protective packaging with grounding cable, discharge needles, and Bluetooth audio sync unit.",
      tactileFeedback: "Cool ceramic insulator tower with solid copper secondary coil. Electric arcs crackle audibly in sync with square-wave music.",
      honestSnags: [
            "Produces subtle ozone scent during prolonged operation in small enclosed rooms.",
            "Must be kept away from pacemakers, heart monitors, and sensitive audio recording equipment.",
            "High-frequency arc sounds sharp and metallic; unsuited for mellow ambient sleep playlists."
      ],
      curatorVerdict: "Lightning captured in a desk cylinder. The visceral rush of physical electric fire dancing to 8-bit chip tunes never gets old.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "Tungsten Discharge Needle",
                  detail: "Precision ground electrode focusing ionized plasma streamers into open air."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 65,
                  label: "Resonant Secondary Copper Winding",
                  detail: "Over 1,200 turns of enameled pure copper wire stepping voltage up to 45,000V."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 88,
                  label: "Solid-State IGBT Driver Base",
                  detail: "Heavy aluminum heatsink enclosure housing high-speed switching transistors."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$135 — $165 USD",
      primaryChannels: [
            "TikTok Shop (Search \"Singing Tesla Coil\")",
            "Passfeed Hardware Feed"
      ],
      searchKeywords: [
            "Singing Tesla Coil Plasma Speaker",
            "Solid State Audio Arc Generator",
            "Desktop Spark Gap Music Coil"
      ],
      antiFraudWarning: "Avoid cheap low-power 12V toys with weak sparks. Look for 48V dual-MOSFET drivers capable of true audio frequency modulation.",
      directOutbound: {
            label: "Inspect on TikTok Shop Maker Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-017',
    specimenCode: 'TIKTOK-BIOFLOW // #1-MICROBE',
    title: "Bioluminescent Dinoflagellate Living Marine Micro-Habitat Orb",
    category: 'UNCANNY_DOMESTIC',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.6,
    priceValue: 124,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 VIRAL LIVING ARTIFACT (190K+ SOLD)',
    scarcityBadge: 'LIVING BIOLOGICAL CULTURE',
    heroImage: '/items/anm-017.jpg',
    gallery: ["/items/anm-017.jpg"],
    tagline: "Hand-blown spherical glass vessel holding living marine Pyrocystis algae that flash intensely cyan when swirled at night.",
    tags: ["TIKTOK SHOP 40%","BIOLUMINESCENT","LIVING ORGANISM","CYAN GLOW","CIRCADIAN ECOSYSTEM"],
    fieldObservation: {
      unboxingLog: "Shipped in insulated climate-controlled packaging with active living broth culture and nutrient booster sachets.",
      tactileFeedback: "Silky smooth borosilicate glass orb. Swirling the sphere in total darkness yields an explosion of electric blue ocean light.",
      honestSnags: [
            "Requires indirect daylight cycle; keeping it in a windowless closet will starve the living organisms.",
            "Living culture has a 6 to 9 month life cycle before requiring fresh nutrient medium inoculation.",
            "Cannot be violently shaken during daytime hours when the algae are recharging their photosynthetic luciferin."
      ],
      curatorVerdict: "A living star captured inside hand-blown glass. Nightly swirl routine replaces doom-scrolling with hypnotic oceanic bioluminescence.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 30,
                  label: "Hand-Blown Borosilicate Sphere",
                  detail: "Optical grade bubble-free spherical flask with ground glass stopper."
            },
            {
                  id: "hs-2",
                  x: 45,
                  y: 60,
                  label: "Living Dinoflagellate Suspension",
                  detail: "Over 50,000 individual Pyrocystis fusiformis cells emitting light via mechanical shear stress."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 85,
                  label: "Laser-Etched Birch Pedestal",
                  detail: "Recessed hardwood display mount holding the orb securely."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$110 — $140 USD",
      primaryChannels: [
            "TikTok Shop Bio-Creations",
            "PyroFarms Authorized Drops"
      ],
      searchKeywords: [
            "Bioluminescent Bio-Orb Algae",
            "Living Dinoflagellate Desk Sphere",
            "Glow in Dark Living Plankton Orb"
      ],
      antiFraudWarning: "Avoid chemical glow-in-the-dark phosphor imitations. Verify live liquid culture that only illuminates under physical motion.",
      directOutbound: {
            label: "Inspect on TikTok Shop Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-018',
    specimenCode: 'TIKTOK-ROBOTARM // #1-GEEK',
    title: "Elephant Robotics myCobot 280 6-Axis Collaborative Desktop Robotic Arm",
    category: 'CYBER_HARDWARE',
    curatorId: 'cr-algo-03',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.7,
    priceValue: 245,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 DESK ROBOTICS VIRAL HIT (72K+ SOLD)',
    scarcityBadge: 'PRECISION SERVO KINEMATICS',
    heroImage: '/items/anm-018.jpg',
    gallery: ["/items/anm-018.jpg"],
    tagline: "Six degrees-of-freedom miniature collaborative industrial manipulator with ROS2 support and magnetic base mount.",
    tags: ["TIKTOK SHOP 40%","ROBOT ARM","6-AXIS","DESK AUTOMATION","ROS2 COMPATIBLE"],
    fieldObservation: {
      unboxingLog: "Dense Pelican-style protective case containing robotic arm, pneumatic suction gripper, power brick, and quick-start guide.",
      tactileFeedback: "Solid carbon-infused nylon joints with zero backlash. The joint servos whir with crisp industrial precision.",
      honestSnags: [
            "Requires baseline Python or block-coding familiarity to program beyond standard pre-recorded trajectories.",
            "High torque movement can tip the arm if not securely suction-locked to a flat table.",
            "Power adapter runs noticeably warm during multi-hour repetitive sorting scripts."
      ],
      curatorVerdict: "Industrial automation shrunk to an espresso mug scale. Writing Python scripts to have it hand you guitar picks is pure cybernetic joy.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 25,
                  label: "Modular Quick-Release End Effector",
                  detail: "Interchangeable pneumatic gripper, pen holder, or suction cup tool head."
            },
            {
                  id: "hs-2",
                  x: 45,
                  y: 55,
                  label: "High-Precision Metal Gear Servos",
                  detail: "Six integrated brushless servo actuators offering 0.5mm repeatability."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 85,
                  label: "ESP32 / M5Stack Controller Core",
                  detail: "Onboard microcontroller with Wi-Fi, Bluetooth, and drag-and-drop code storage."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 4,
      priceRange: "$230 — $275 USD",
      primaryChannels: [
            "TikTok Shop Robotics Lab",
            "Elephant Robotics Global Feed"
      ],
      searchKeywords: [
            "myCobot 280 6-Axis Robot Arm",
            "Desktop Collaborative Robotic Arm",
            "Programmable M5Stack Arm Manipulator"
      ],
      antiFraudWarning: "Avoid 3D-printed hobby kits with plastic servo gears. Ensure metal gearboxes and CE/FCC calibrated industrial controllers.",
      directOutbound: {
            label: "Inspect on TikTok Shop Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-019',
    specimenCode: 'TIKTOK-NIXIE-WATCH // #1-CYBER',
    title: "Cyberpunk Dual VFD Vacuum Fluorescent Tube Wrist Chronograph",
    category: 'WEARABLE_ANOMALIES',
    curatorId: 'cr-algo-03',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.8,
    priceValue: 185,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 VIRAL CYBERPUNK WEARABLE (110K+ SOLD)',
    scarcityBadge: 'RARE SOVIET IV-15 VFD TUBES',
    heroImage: '/items/anm-019.jpg',
    gallery: ["/items/anm-019.jpg"],
    tagline: "Wristwatch built from authentic vintage vacuum fluorescent tubes, glowing in electric cyan numerals upon wrist-raise gesture.",
    tags: ["TIKTOK SHOP 40%","VFD WATCH","VACUUM TUBE","CYBERPUNK WRIST","COLD WAR TUBE"],
    fieldObservation: {
      unboxingLog: "Packaged in a laser-engraved acrylic presentation box with magnetic charging cable, hex adjustment key, and spare strap pins.",
      tactileFeedback: "Substantial CNC-machined aerospace alloy body with curved sapphire glass window. The VFD phosphor glow is mesmerisingly sharp.",
      honestSnags: [
            "Chunky 16mm case height will catch on tight motorcycle leather jacket cuffs.",
            "Requires USB-C recharge every 4 to 5 days under active wrist-tilt wake usage.",
            "Not water-submersible; taking it into a swimming pool will permanently breach vacuum seals."
      ],
      curatorVerdict: "Wrist-worn Soviet retro-futurism. Glancing down to see twin vacuum tubes ignite in cyan neon instantly transports you into an anime terminal.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 45,
                  y: 40,
                  label: "Twin IV-15 Glass VFD Tubes",
                  detail: "Original Cold-War phosphor tubes emitting monochromatic 505nm cyan numerals."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 70,
                  label: "Gyroscope Gesture Tilt Sensor",
                  detail: "Ultra-low-power accelerometer igniting the filament only when wrist is tilted toward eye."
            },
            {
                  id: "hs-3",
                  x: 75,
                  y: 45,
                  label: "Anodized 6061 Billet Aluminum Case",
                  detail: "Milled unibody chassis with wire-cut side gills exposing motherboard traces."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 4,
      priceRange: "$170 — $210 USD",
      primaryChannels: [
            "TikTok Shop Cyberpunk Drop",
            "Shenzhen Horology Lab"
      ],
      searchKeywords: [
            "IV-15 VFD Tube Wrist Watch",
            "Vacuum Fluorescent Tube Watch",
            "Cyberpunk Nixie Tube Wristwatch"
      ],
      antiFraudWarning: "Avoid cheap counterfeit watches using backlit LCD cutouts. Genuine vacuum tubes have glowing tungsten filaments and vacuum getters.",
      directOutbound: {
            label: "Inspect on TikTok Shop Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-020',
    specimenCode: 'TIKTOK-LEVIT-MOON // #1-ASTRONOMY',
    title: "Magnetic Levitating 3D Relief Moon Lamp with Solid Wood Base",
    category: 'UNCANNY_DOMESTIC',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.3,
    priceValue: 139,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 VIRAL ROOM AESTHETIC (420K+ SOLD)',
    scarcityBadge: 'MAGNETIC LEVITATION HARNESS',
    heroImage: '/items/anm-020.jpg',
    gallery: ["/items/anm-020.jpg"],
    tagline: "High-precision NASA topographic relief celestial sphere floating and spinning friction-free in mid-air via electromagnetic levitation.",
    tags: ["TIKTOK SHOP 40%","MAGNETIC LEVITATION","MOON LAMP","NASA RELIEF","ZERO GRAVITY"],
    fieldObservation: {
      unboxingLog: "Arrives in high-density molded pearl foam with American walnut base, leveling alignment tool, and DC power supply.",
      tactileFeedback: "Tactile crater ridges on matte PLA shell. Floating the orb gives a distinct haptic spring-like magnetic tension as it locks into suspension.",
      honestSnags: [
            "Setting the orb into magnetic equilibrium requires two hands and patience on the first attempt.",
            "Power outage or cord yank will cause the sphere to snap down onto the magnetic base with a sharp clack.",
            "Rotating speed depends on initial finger nudge; spins for days but gradually slows if air currents counter it."
      ],
      curatorVerdict: "Literal magic on your nightstand. Seeing an illuminated full moon rotating silently in mid-air defies everyday gravity intuition.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "NASA Topographic Lunar Relief",
                  detail: "3D printed from high-res Lunar Reconnaissance Orbiter elevation maps."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 70,
                  label: "Wireless Induction Power Receiver",
                  detail: "Electromagnetic resonant coil inside orb powering internal warm/cool LEDs wirelessly."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 90,
                  label: "Walnut Electromagnetic Stator Base",
                  detail: "Quad-coil magnetic levitation driver with active PID position feedback."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 2,
      priceRange: "$125 — $155 USD",
      primaryChannels: [
            "TikTok Shop Home Aesthetics",
            "Levitation Design Studio"
      ],
      searchKeywords: [
            "Magnetic Levitating Moon Lamp",
            "Floating 3D Moon Walnut Base",
            "Wireless Power Levitation Sphere"
      ],
      antiFraudWarning: "Look for wireless inductive power transfer. Avoid fake models with dangling transparent nylon cords or fixed acrylic stands.",
      directOutbound: {
            label: "Inspect on TikTok Shop Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-021',
    specimenCode: 'TIKTOK-CYBER-VISOR // #1-LED',
    title: "Luminous Cyberpunk LED Visor Glasses with 7 Dynamic Color Modes",
    category: 'WEARABLE_ANOMALIES',
    curatorId: 'cr-algo-03',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.1,
    priceValue: 118,
    platform: 'TikTok Shop',
    salesRank: 1,
    salesRankBadge: '#1 VIRAL COSPLAY & RAVE PROP (350K+ SOLD)',
    scarcityBadge: 'BILATERAL DUAL-EMITTER',
    heroImage: '/items/anm-021.jpg',
    gallery: ["/items/anm-021.jpg"],
    tagline: "Futuristic edge-lit acrylic visor spectacles featuring laser-engraved circuit traces and dual independent temple color controllers.",
    tags: ["TIKTOK SHOP 40%","CYBERPUNK VISOR","LED EYEWEAR","EDGE LIT","CLUB ANOMALY"],
    fieldObservation: {
      unboxingLog: "Packs in rigid EVA clamshell case with cleaning cloth, micro USB charger, and spare nose pads.",
      tactileFeedback: "Lightweight crystal-clear optical acrylic with smooth laser-beveled edges. Button clicks on both temples feel clicky and tactile.",
      honestSnags: [
            "Internal edge reflections can cause glare in totally pitch-black outdoor settings.",
            "Laser-etched traces require microfiber cloth cleaning to keep free of finger oils.",
            "Not rated as ballistic or safety impact eye protection."
      ],
      curatorVerdict: "Instant blade-runner transformation. Dual temple controls let you mix contrasting hues across left and right eyes for dramatic portraits.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 45,
                  label: "Optical Laser-Etched Circuit Trace",
                  detail: "High-purity PMMA acrylic sheet internally reflecting light along engraved vectors."
            },
            {
                  id: "hs-2",
                  x: 20,
                  y: 55,
                  label: "Left Temple Micro-LED Controller",
                  detail: "Independent RGB driver cycling through monochrome, breathing, and flash modes."
            },
            {
                  id: "hs-3",
                  x: 80,
                  y: 55,
                  label: "Right Temple Micro-LED Controller",
                  detail: "Allows two-tone chromatic splits across the facial plane."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 2,
      priceRange: "$105 — $130 USD",
      primaryChannels: [
            "TikTok Shop Rave Gear",
            "NeoTokyo Prop Vault"
      ],
      searchKeywords: [
            "Cyberpunk LED Visor Dual Control",
            "Luminous Futuristic Glasses LED",
            "Edge Lit Acrylic Cosplay Visor"
      ],
      antiFraudWarning: "Avoid single-battery cheap party shades with wired battery packs in your pocket. Insist on dual built-in rechargeable temple batteries.",
      directOutbound: {
            label: "Inspect on TikTok Shop Feed",
            url: "https://shop.tiktok.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-022',
    specimenCode: 'AMZ-TUBE-RADIO // #1-VINTAGE',
    title: "Vintage Wooden AM/FM/SW Shortwave Radio & Bluetooth Acoustic Speaker",
    category: 'CYBER_HARDWARE',
    curatorId: 'cr-algo-01',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.3,
    priceValue: 159,
    platform: 'Amazon',
    salesRank: 1,
    salesRankBadge: '#1 BESTSELLER RETRO AUDIO',
    scarcityBadge: 'WARM ANALOG TUBE VOICING',
    heroImage: '/items/anm-022.jpg',
    gallery: ["/items/anm-022.jpg"],
    tagline: "Hand-crafted walnut cabinet shortwave receiver with analog tuning dial, magic-eye tuning indicator tube, and modern Bluetooth 5.0.",
    tags: ["AMAZON #1","VINTAGE RADIO","SHORTWAVE SW","WALNUT CABINET","ANALOG TUNER"],
    fieldObservation: {
      unboxingLog: "Heavy cardboard vintage-styled crate with external wire antenna spool, AUX cable, and cloth-braided power cord.",
      tactileFeedback: "Weighted aluminum rotary tuning dial with flywheel momentum. The amber dial glow illuminates with warm analog nostalgia.",
      honestSnags: [
            "Shortwave (SW) frequency reception requires unfurling the included long wire antenna near a window.",
            "Weighs over 3.2kg; designed strictly for a desk or bookshelf, not portability.",
            "Bass tuning leans thick and resonant; modern hyper-compressed podcasts may sound extra boomy."
      ],
      curatorVerdict: "Late-night shortwave listening is a dying art. Tuning through crackling foreign stations with this weighted brass dial is pure meditation.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "Weighted Flywheel Analog Tuning Dial",
                  detail: "Silky smooth reduction gearing for pinpoint frequency scanning."
            },
            {
                  id: "hs-2",
                  x: 75,
                  y: 40,
                  label: "Magic Eye Green Vacuum Indicator",
                  detail: "Electron-ray beam tube narrowing as radio signal reaches optimum resonance."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 80,
                  label: "Acoustic Ported Walnut Cabinet",
                  detail: "Solid timber enclosure delivering rich mid-range acoustic resonance."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$145 — $175 USD",
      primaryChannels: [
            "Amazon Audio Classics",
            "Retro Sound Warehouse"
      ],
      searchKeywords: [
            "Vintage Wooden Shortwave Radio Bluetooth",
            "Retro Tube Style AM FM Radio Dial",
            "Analog Walnut Tabletop Radio"
      ],
      antiFraudWarning: "Check for true analog rotary capacitor tuning. Avoid cheap plastic radios with fake printed paper dials behind clear windows.",
      directOutbound: {
            label: "Inspect on Amazon Electronics",
            url: "https://amazon.com",
            sourceType: "Official Reseller"
      }
}
  },

  {
    id: 'anm-023',
    specimenCode: 'AMZ-SAND-TABLE // #1-KINETIC',
    title: "Grounded Labs Oasis Mini Kinetic Sand Art Desk Table",
    category: 'ODD_DESK_TACTILE',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.6,
    priceValue: 199,
    platform: 'Amazon',
    salesRank: 1,
    salesRankBadge: '#1 BESTSELLER KINETIC ART',
    scarcityBadge: 'MAGNETIC SPHERE AUTOMATON',
    heroImage: '/items/anm-023.jpg',
    gallery: ["/items/anm-023.jpg"],
    tagline: "Automated kinetic coffee-table art piece carving intricate geometric mandala patterns into fine silica sand via a sub-surface magnetic sphere.",
    tags: ["AMAZON #1","KINETIC SAND ART","AUTOMATED PLOTTER","ZEN MANDALA","MAGNETIC SPHERE"],
    fieldObservation: {
      unboxingLog: "Heavy sealed cylinder with fine white silica sand pouches, precision steel marbles, glass lid, and smartphone Wi-Fi bridge.",
      tactileFeedback: "Glass top is flush and cool. The silent two-axis magnetic gantry beneath glides silently as the marble carves crisp rippling trails.",
      honestSnags: [
            "Sand must be raked completely level during initial setup to avoid pile-ups near edges.",
            "Wi-Fi app setup requires 2.4GHz network band connection.",
            "High speed plot mode generates faint stepper motor whirring audible in quiet bedrooms."
      ],
      curatorVerdict: "Ever-shifting zen architecture for your workspace. Watching the lone steel marble carve infinite spiral mandalas is supremely hypnotic.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 45,
                  label: "Mirror Polished Chrome Steel Sphere",
                  detail: "Follows magnetic field vectors through glass-smooth silica sand."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 75,
                  label: "Sub-Surface SCARA Kinematic Gantry",
                  detail: "Dual stepper motor arm drawing complex vector paths silently beneath sandbed."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 15,
                  label: "Flush Tempered Glass Protective Cover",
                  detail: "Dust-sealed crystal glass maintaining clean sandbed topography."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$180 — $220 USD",
      primaryChannels: [
            "Amazon Kinetic Design",
            "Sisyphus Art Direct"
      ],
      searchKeywords: [
            "Oasis Mini Kinetic Sand Table",
            "Automated Sand Art Table Machine",
            "Kinetic Sand Drawing Machine Wi-Fi"
      ],
      antiFraudWarning: "Avoid vibrating motor copies that produce blurry patterns. Insist on true two-axis polar or cartesian magnetic plotters.",
      directOutbound: {
            label: "Inspect on Amazon Design",
            url: "https://amazon.com",
            sourceType: "Authorized Dealer"
      }
}
  },

  {
    id: 'anm-024',
    specimenCode: 'ALI-BIOMECH-HELM // #1-PROP',
    title: "Cyberpunk Mecha Tactical Half-Face Respirator Mask with Green LED Accents",
    category: 'WEARABLE_ANOMALIES',
    curatorId: 'cr-algo-03',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.8,
    priceValue: 145,
    platform: 'AliExpress',
    salesRank: 1,
    salesRankBadge: '#1 GLOBAL BESTSELLER CYBER PROP',
    scarcityBadge: 'ALLOY COMPOSITE ARMOR',
    heroImage: '/items/anm-024.jpg',
    gallery: ["/items/anm-024.jpg"],
    tagline: "Articulated cyberpunk respirator helmet with active air filtration, dual circular green LED canister meters, and voice modulation mic.",
    tags: ["ALIEXPRESS #1","CYBER RESPIRATOR","VOICE MODULATOR","LED CANISTERS","DYSTOPIAN WEAR"],
    fieldObservation: {
      unboxingLog: "Packs in an industrial foam flight case with spare HEPA filter cartridges, mic boom, and USB charging cables.",
      tactileFeedback: "Dense composite resin and aluminum alloy brackets. The internal voice modulator lowers vocal pitch with authentic mechanical vocoder grit.",
      honestSnags: [
            "Full-face seal reduces peripheral vision; requires practice before navigating dark stairs.",
            "Not certified for hazardous biological or industrial chemical fumes (decorative HEPA filtration only).",
            "Wearing this into a local bank will result in an immediate tactical response."
      ],
      curatorVerdict: "Peak dystopian theater. When the dual LED canisters spin up and the voice amplifier transforms your voice into an android baritone, reality dissolves.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 45,
                  y: 40,
                  label: "Dual Circular LED Display Canisters",
                  detail: "Round screens mounted on cheek filters showing real-time audio wave monitors."
            },
            {
                  id: "hs-2",
                  x: 55,
                  y: 55,
                  label: "Integrated Vocoder Voice Modulator",
                  detail: "Internal microphone and speaker unit pitch-shifting voice into robotic synth tones."
            },
            {
                  id: "hs-3",
                  x: 65,
                  y: 75,
                  label: "Multi-Point Magnetic Buckle Straps",
                  detail: "Heavy nylon tactical straps with Fidlock magnetic quick-release clasps."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$135 — $165 USD",
      primaryChannels: [
            "AliExpress Tactical Cyberpunk Workshop",
            "Shenzhen Cosplay Lab"
      ],
      searchKeywords: [
            "Cyberpunk Helmet LED Mask",
            "Respirator Cosplay Voice Modulator",
            "Mechanical Cyber Mask Headwear"
      ],
      antiFraudWarning: "Avoid thin vac-formed plastic masks without electronics. Ensure metal screws, active LED rings, and voice amplifier electronics.",
      directOutbound: {
            label: "Inspect AliExpress Global Workshop",
            url: "https://aliexpress.com",
            sourceType: "Official Workshop"
      }
}
  },

  {
    id: 'anm-025',
    specimenCode: 'ETSY-TAXIDERMY-BAT // #1-CURIO',
    title: "Authentic Preserved Bat Taxidermy Specimen in Wooden Shadow Box",
    category: 'ZINES_RELICS',
    curatorId: 'cr-algo-05',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.7,
    priceValue: 165,
    platform: 'Etsy',
    salesRank: 1,
    salesRankBadge: '#1 STAR SELLER ODDITIES MASTERPIECE',
    scarcityBadge: 'MUSEUM CONSERVATOR GRADE',
    heroImage: '/items/anm-025.jpg',
    gallery: ["/items/anm-025.jpg"],
    tagline: "Ethically salvaged articulated bat skeleton mounted in a museum-grade archival shadowbox with vintage Latin botanical and osteological placards.",
    tags: ["ETSY #1","STEAMPUNK TAXIDERMY","BAT SKELETON","WALNUT SHADOWBOX","CABINET CURIOSITY"],
    fieldObservation: {
      unboxingLog: "Heavy timber crate lined with museum-grade bubble wrap and archival acid-free tissue paper with signed origin certificate.",
      tactileFeedback: "Richly stained walnut case with heavy brass corner brackets. Glass is anti-reflective museum grade with zero glare.",
      honestSnags: [
            "Requires wall anchor mounting; the solid hardwood frame and glass front weigh over 2.4kg.",
            "Avoid mounting in direct sunlight to protect delicate natural bone enamel from fading.",
            "Some guests and sensitive family members may find the biological curio startling or unsettling."
      ],
      curatorVerdict: "Victorian natural history cabinet perfection. The delicate wing bones and gothic brass accents make it an unmatched conversation anchor.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 40,
                  label: "Articulated Chiroptera Wing Skeleton",
                  detail: "Delicate finger bones extended in flight posture with micro-pins."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 70,
                  label: "Hand-Aged Latin Specimen Placard",
                  detail: "Letterpress printed on cotton rag paper detailing genus and salvage locality."
            },
            {
                  id: "hs-3",
                  x: 25,
                  y: 85,
                  label: "Antique Patinated Brass Hinges & Latch",
                  detail: "Hand-cast hardware securing the solid walnut shadowbox frame."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 4,
      priceRange: "$150 — $180 USD",
      primaryChannels: [
            "Etsy Curiosities Guild",
            "Edinburgh Osteology Atelier"
      ],
      searchKeywords: [
            "Preserved Bat Shadow Box Taxidermy",
            "Bat Skeleton Frame Articulated",
            "Victorian Curiosities Shadowbox"
      ],
      antiFraudWarning: "Ensure the seller provides authentic ethical salvage documentation. Avoid illegally hunted or poached specimens.",
      directOutbound: {
            label: "Inspect on Etsy Artisan Vault",
            url: "https://etsy.com",
            sourceType: "Independent Artisan"
      }
}
  },

  {
    id: 'anm-026',
    specimenCode: 'RAK-GAKKEN-SYNTH // #1-TOKYO',
    title: "Gakken SX-150 Mark II Stylus Ribbon Analog Synthesizer",
    category: 'CYBER_HARDWARE',
    curatorId: 'cr-algo-04',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.6,
    priceValue: 175,
    platform: 'Rakuten',
    salesRank: 1,
    salesRankBadge: '#1 RAKUTEN TOKYO SYNTH COLLECTIBLE',
    scarcityBadge: 'OUT-OF-PRINT JAPAN VAULT',
    heroImage: '/items/anm-026.jpg',
    gallery: ["/items/anm-026.jpg"],
    tagline: "Legendary Tokyo desktop analog noise generator played with a conductive stylus on a ribbon controller with resonant VCF and LFO.",
    tags: ["RAKUTEN #1","GAKKEN SX-150","ANALOG SYNTH","RIBBON CONTROLLER","TOKYO HARDWARE"],
    fieldObservation: {
      unboxingLog: "Mint Japanese box with original Otona no Kagaku magazine volume, alligator ground lead, and tethered metal stylus.",
      tactileFeedback: "Classic Japanese matte plastic chassis with clicky slide switches and smooth analog potentiometer knobs. The ribbon controller glides effortlessly.",
      honestSnags: [
            "Monophonic stylus play requires ear training to hit exact microtonal notes accurately.",
            "Runs on AA batteries; does not include built-in modern USB-C charging.",
            "Internal speaker is small and lo-fi; best experienced plugged into studio headphones or a tube guitar amplifier."
      ],
      curatorVerdict: "Pure analog electronic soul from Tokyo. Sliding the metal stylus across the ribbon while sweeping resonance creates screeching retro sci-fi sirens.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "Linear Pitch Ribbon Strip",
                  detail: "Conductive resistive membrane played via tethered metal contact stylus."
            },
            {
                  id: "hs-2",
                  x: 70,
                  y: 60,
                  label: "Resonant VCF Cutoff Knob",
                  detail: "Aggressive 24dB ladder filter capable of rich analog self-oscillation."
            },
            {
                  id: "hs-3",
                  x: 30,
                  y: 70,
                  label: "Square / Triangle LFO Modulator",
                  detail: "Variable speed low-frequency oscillator modulating pitch or filter cutoff."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 4,
      priceRange: "$160 — $195 USD",
      primaryChannels: [
            "Rakuten Japan Vintage Vault",
            "Tokyo Akihabara Radio Store"
      ],
      searchKeywords: [
            "Gakken SX-150 Mark II Synthesizer",
            "Gakken Analog Ribbon Synth Japan",
            "Otona no Kagaku Synth Kit"
      ],
      antiFraudWarning: "Look for original Gakken Japan holographic seal. Many low-quality plastic knockoffs lack true analog VCF circuitry.",
      directOutbound: {
            label: "Inspect on Rakuten Tokyo Vault",
            url: "https://rakuten.co.jp",
            sourceType: "Authorized Dealer"
      }
}
  },

  {
    id: 'anm-027',
    specimenCode: 'MERC-FERRO-HUB // #1-FLUIDIC',
    title: "Dancing Ferrofluid Sound Visualizer Desktop Bluetooth Speaker",
    category: 'ODD_DESK_TACTILE',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.7,
    priceValue: 169,
    platform: 'Mercari',
    salesRank: 1,
    salesRankBadge: '#1 VERIFIED BOUTIQUE RESALE HIT',
    scarcityBadge: 'HERMETIC NANO-FERRO CELL',
    heroImage: '/items/anm-027.jpg',
    gallery: ["/items/anm-027.jpg"],
    tagline: "Encapsulated alien-like magnetic fluid reacting to audio frequencies with sharp dynamic spikes inside an LED-lit crystal chamber.",
    tags: ["MERCARI #1","FERROFLUID SPEAKER","MAGNETIC VISUALIZER","DESK SCIFI","KINETIC AUDIO"],
    fieldObservation: {
      unboxingLog: "Packs in magnetic gift box with USB-C braided charging cable, pickup microphone sensitivity tool, and microfiber cloth.",
      tactileFeedback: "Heavy solid aluminum housing with anti-vibration rubber feet. The ferrofluid forms spiky black blooms in real time as bass drops.",
      honestSnags: [
            "Extreme bass tracks at maximum volume can cause temporary fluid bead separation before re-coalescing.",
            "Keep away from strong external neodymium magnets to prevent disrupting the internal electromagnetic bias field.",
            "Chamber light is fixed color temperature (cool white or cyan depending on switch setting)."
      ],
      curatorVerdict: "Looks like you captured a sentient drop of Venom inside a laboratory capsule. The organic, fluid spike dancing cannot be replicated by any digital display.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 45,
                  label: "Hermetic Glass Fluid Cell",
                  detail: "Optical grade glass tube filled with anti-staining clear carrier solution."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 80,
                  label: "Magnetic Audio Coil Core",
                  detail: "Electromagnetic transducer transforming audio frequencies into magnetic flux lines."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 20,
                  label: "Top-Fired Full-Range Driver",
                  detail: "High-clarity speaker cone delivering crisp audio while exciting fluid base."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$150 — $185 USD",
      primaryChannels: [
            "Mercari Curated Audio",
            "Boutique Sound Resale"
      ],
      searchKeywords: [
            "Dancing Ferrofluid Bluetooth Speaker",
            "Magnetic Fluid Visualizer Music Display",
            "Venom Ferrofluid Desk Speaker"
      ],
      antiFraudWarning: "Inspect glass cell for staining or black residue sticking to walls. Quality cells use hydrophobic nano-coatings to keep glass spotless.",
      directOutbound: {
            label: "Inspect on Mercari Boutique",
            url: "https://mercari.com",
            sourceType: "Boutique Reseller"
      }
}
  },

  {
    id: 'anm-028',
    specimenCode: 'AMZ-VORTEX-CANNON // #1-AERO',
    title: "Can You Imagine Airzooka Handheld Air Vortex Blast Cannon",
    category: 'ODD_DESK_TACTILE',
    curatorId: 'cr-algo-02',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 8.8,
    priceValue: 109,
    platform: 'Amazon',
    salesRank: 1,
    salesRankBadge: '#1 CLASSIC SCI-FI KINETIC CANNON',
    scarcityBadge: 'ORIGINAL PATENTED AERO-CANNON',
    heroImage: '/items/anm-028.jpg',
    gallery: ["/items/anm-028.jpg"],
    tagline: "Hand-powered acoustic air vortex generator launching harmless invisible toroidal air cannonballs up to 50 feet away.",
    tags: ["AMAZON #1","AIRZOOKA","VORTEX CANNON","ACOUSTIC SHOCKWAVE","OFFICE WARFARE"],
    fieldObservation: {
      unboxingLog: "Arrives in original illustrated retail box with pop-up sighting reticle and elastic launcher assembly.",
      tactileFeedback: "Rugged molded polymer funnel with high-tension rubberized diaphragm. Pulling back the bungee handle and releasing delivers a solid acoustic pop.",
      honestSnags: [
            "Vortex is invisible unless aimed through light smoke, fog, or thin paper curtains.",
            "Requires two hands to operate effectively (one to aim, one to pull back launcher).",
            "Office coworkers will eventually form a coalition and confiscate it from your desk."
      ],
      curatorVerdict: "Pure mischievous physics. Blasting a paper cup off a colleague’s monitor from 30 feet away with an invisible gust of toroidal air never gets old.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "Toroidal Aerodynamic Venturi Nozzle",
                  detail: "Calibrated aperture compressing air volume into a spinning vortex ring."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 65,
                  label: "Elastic Diaphragm Membrane",
                  detail: "High-rebound polymer sheet displacing air instantaneously on release."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 88,
                  label: "Flip-Up Pop-Up Sight Reticle",
                  detail: "Aiming crosshair for precision long-range vortex targeting."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 2,
      priceRange: "$95 — $120 USD",
      primaryChannels: [
            "Amazon Scientific Toys",
            "Specialty Toy Archives"
      ],
      searchKeywords: [
            "Airzooka Air Cannon Can You Imagine",
            "Handheld Vortex Air Gun",
            "Acoustic Air Vortex Launcher"
      ],
      antiFraudWarning: "Insist on original \"Can You Imagine\" branded Airzooka. Cheap dollar-store knockoffs tear their elastic diaphragms within hours.",
      directOutbound: {
            label: "Inspect on Amazon Toys",
            url: "https://amazon.com",
            sourceType: "Authorized Dealer"
      }
}
  },

  {
    id: 'anm-029',
    specimenCode: 'ETSY-SKULL-VESSEL // #1-POTTERY',
    title: "Hand-Sculpted Stoneware Ceramic Skull Vessel & Espresso Tumbler",
    category: 'ZINES_RELICS',
    curatorId: 'cr-algo-05',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.4,
    priceValue: 128,
    platform: 'Etsy',
    salesRank: 1,
    salesRankBadge: '#1 STAR SELLER ARTISAN CERAMIC',
    scarcityBadge: 'WOOD-FIRED STUDIO ONE-OFF',
    heroImage: '/items/anm-029.jpg',
    gallery: ["/items/anm-029.jpg"],
    tagline: "Hand-thrown and sculpted unglazed stoneware drinking vessel shaped like an anatomically weathered cranium with ash glaze drippings.",
    tags: ["ETSY #1","CERAMIC SKULL","WOOD FIRED","STUDIO POTTERY","MEMENTO MORI"],
    fieldObservation: {
      unboxingLog: "Heavy cardboard box stuffed with wood shavings, stamped pottery studio seal, and handwritten kiln firing notes.",
      tactileFeedback: "Rough, earthy raw clay texture with smooth polished rim for drinking comfort. Fits weighted and grounded in the palm.",
      honestSnags: [
            "Hand-wash only; mechanical dishwashers will erode the subtle wood-ash mineral crystals over time.",
            "Each vessel is unique; exact bone-white and charcoal ash color tones vary naturally from kiln wood placement.",
            "Drinking your morning black espresso from a skull will prompt questions during Zoom calls."
      ],
      curatorVerdict: "Raw, visceral earth craft. The contrast between rough cranium texture and velvety interior glaze makes every sip feel like a quiet ritual.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 35,
                  label: "Sculpted Zygomatic Arch & Brow",
                  detail: "Individually carved facial planes highlighting natural bone osteology."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 70,
                  label: "Natural Wood-Ash Kiln Glaze",
                  detail: "Fly-ash melt forming greenish-amber vitreous glassy rivers down cheekbones."
            },
            {
                  id: "hs-3",
                  x: 50,
                  y: 92,
                  label: "Beveled Weighted Stoneware Foot",
                  detail: "Heavy base preventing tipping when filled with hot beverages or ink."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 3,
      priceRange: "$115 — $145 USD",
      primaryChannels: [
            "Etsy Studio Ceramics",
            "Independent Pottery Guild"
      ],
      searchKeywords: [
            "Handmade Ceramic Skull Cup Mug",
            "Wood Fired Stoneware Skull Vessel",
            "Memento Mori Studio Ceramic Tumbler"
      ],
      antiFraudWarning: "Avoid slip-cast factory ceramic skulls with smooth painted enamel. Genuine studio pieces show hand-carved tool marks and kiln flashes.",
      directOutbound: {
            label: "Inspect on Etsy Artisan Vault",
            url: "https://etsy.com",
            sourceType: "Independent Artisan"
      }
}
  },

  {
    id: 'anm-030',
    specimenCode: 'ALL-CRT-RADAR // #1-WARSAW',
    title: "Vintage Tektronix Laboratory Cathode Ray Tube Phosphor Oscilloscope Display",
    category: 'CYBER_HARDWARE',
    curatorId: 'cr-algo-01',
    dateLogged: 'OCT 06, 2026',
    weirdnessScore: 9.8,
    priceValue: 320,
    platform: 'Allegro',
    salesRank: 1,
    salesRankBadge: '#1 SURPLUS LAB ELECTRONICS HIT',
    scarcityBadge: 'P31 EMERALD PHOSPHOR CRT',
    heroImage: '/items/anm-030.jpg',
    gallery: ["/items/anm-030.jpg"],
    tagline: "Decommissioned test bench oscilloscope CRT retrofitted into an active desktop vector audio visualizer glowing with green electron beams.",
    tags: ["ALLEGRO #1","CRT DISPLAY","OSCILLOSCOPE","GREEN PHOSPHOR","LAB SURPLUS"],
    fieldObservation: {
      unboxingLog: "Packs in wood-reinforced flight crate with isolated low-voltage power supply, BNC-to-RCA stereo adapters, and focus alignment knob.",
      tactileFeedback: "Curved thick leaded glass screen glowing with rich emerald phosphor. Turning stereo music on traces complex Lissajous spirals in real time.",
      honestSnags: [
            "Heavier than modern flat monitors; requires solid desk surface able to hold 4.5kg.",
            "High-voltage internal flyback transformer creates subtle 15kHz electrical hum near the rear vent.",
            "Must be kept away from strong unshielded speaker magnets to avoid color deflection distortion."
      ],
      curatorVerdict: "The holy grail of analog visualizers. Electron beams painting vector geometry in real time makes modern 60Hz LCDs look lifeless and sluggish.",
      hotspots: [
            {
                  id: "hs-1",
                  x: 50,
                  y: 50,
                  label: "P31 Medium-Persistence Green Phosphor",
                  detail: "Vacuum electron-beam glass faceplate glowing in iconic emerald phosphor luminescence."
            },
            {
                  id: "hs-2",
                  x: 50,
                  y: 20,
                  label: "Precision 8x10 Division Metric Graticule",
                  detail: "Internal illuminated parallax-free grid lines for calibrated voltage and timebase measurement."
            },
            {
                  id: "hs-3",
                  x: 10,
                  y: 10,
                  label: "Industrial Aluminum Bezel & Mounting Screws",
                  detail: "Cast metal mounting frame designed for heavy-duty test bench instrument rack installations."
            }
      ]
},
    sourcingTelemetry: {
      huntDifficulty: 4,
      priceRange: "$290 — $360 USD",
      primaryChannels: [
            "Allegro Industrial Electronics",
            "European Surplus Tech Vaults"
      ],
      searchKeywords: [
            "Tektronix Oscilloscope CRT Screen 475",
            "Vintage Cathode Ray Tube Phosphor Display",
            "Analog Lab Oscilloscope CRT"
      ],
      antiFraudWarning: "Check that the vacuum tube has no neck fractures or phosphor burn-in spots before purchasing.",
      directOutbound: {
            label: "Examine on Allegro Surplus",
            url: "https://allegro.pl",
            sourceType: "Boutique Reseller"
      }
}
  }
];
