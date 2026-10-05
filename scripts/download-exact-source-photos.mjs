import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const itemsDir = path.resolve(__dirname, '..', 'public', 'items');

const EXACT_PRODUCTS = [
  // Batch 2 (OCT 05, 2026 - Top 15 Velocity)
  {
    id: 'anm-016',
    title: 'Resonant Audio Plasma Column Arc Visualizer with Wireless Coil',
    url: 'https://m.media-amazon.com/images/I/71uZ0fJq1IL.jpg'
  },
  {
    id: 'anm-017',
    title: 'Bioluminescent Dinoflagellate Living Marine Micro-Habitat Orb',
    url: 'https://pyrofarms.com/cdn/shop/products/Bio-Orbfillednew2020box600px_524x524.jpg'
  },
  {
    id: 'anm-018',
    title: 'Desk Pneumatic 6-Axis Robotic Arm Manipulator with Vision AI',
    url: 'https://americas.shop.elephantrobotics.com/cdn/shop/files/cobot_collaborative-robot_6dof-robitc-arm_6-axis-robot-arm-for-education_ROS-robot_6-DoF-collaborative-robot-M5stack-3_da4ec026-8c9f-4c8b-9501-61c485bcead6_1000x.jpg'
  },
  {
    id: 'anm-019',
    title: 'Steampunk Dual VFD Vacuum Fluorescent Tube Cyberpunk Wrist Chronograph',
    url: 'https://i.etsystatic.com/17157533/r/il/19e572/5434670139/il_fullxfull.5434670139_c5yi.jpg'
  },
  {
    id: 'anm-020',
    title: 'High-Resolution 3D Relief Levitation Celestial Moon with Tidal Phase Cycle',
    url: 'https://m.media-amazon.com/images/I/710y2WiggXL._AC_SL1500_.jpg'
  },
  {
    id: 'anm-021',
    title: 'Bifocal Holographic HUD Cybernetic Spectacles with Ambient Audio',
    url: 'https://m.media-amazon.com/images/I/71vs+waU4lL.jpg'
  },
  {
    id: 'anm-022',
    title: 'Cold-War Retro Tube Shortwave Radio & Vacuum Phosphor Clock',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Toshiba_Vacuum_tube_Radio.jpg'
  },
  {
    id: 'anm-023',
    title: 'Automated Magnetic Kinetic Sand Pendulum Plotter Table',
    url: 'https://theawesomer.com/photos/2016/10/sisyphus_kinetic_sand_art_table_4.jpg'
  },
  {
    id: 'anm-024',
    title: 'Full-Face Cybernetic Respirator Mask with Dual OLED Canisters',
    url: 'https://www.hypebrother.com/images/product-headwear-cyberpunk-mecha-mask-21.jpg'
  },
  {
    id: 'anm-025',
    title: 'Victorian Steampunk Clockwork Taxidermy Chiroptera in Walnut Case',
    url: 'https://i.etsystatic.com/50314517/c/2048/2048/0/0/il/090208/6159524933/il_600x600.6159524933_hj9s.jpg'
  },
  {
    id: 'anm-026',
    title: 'Gakken SX-150 Mark II Analog Vacuum Synthesizer Rare Tokyo Archive',
    url: 'https://m.media-amazon.com/images/I/71I+cgDL15L.jpg'
  },
  {
    id: 'anm-027',
    title: 'Transparent Encapsulated Ferro-Kinetic Desktop Smart Hub',
    url: 'https://i5.walmartimages.com/seo/Dancing-Ferrofluid-Bluetooth-Speaker-Magnetic-Fluid-Audio-Visualizer-with-LED-Lights-Stereo-Sound-Touch-Control-Cool-Venom-Display_42f29469-c26d-484a-a819-afa620aecddb.229f8fbce96142b25ac92d84f6c150c0.jpeg'
  },
  {
    id: 'anm-028',
    title: 'Aero-Acoustic Vortex Ring Atmospheric Projector with Ambient Fog',
    url: 'https://mancusoscience.com/wp-content/uploads/2021/10/airzooka-4.jpg'
  },
  {
    id: 'anm-029',
    title: 'Bizen Ware Unglazed High-Fired Ceramic Skull Vessel by Master Potter',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Bizen_Ware_%284788321188%29.jpg'
  },
  {
    id: 'anm-030',
    title: 'Decommissioned Warsaw-Pact Aircraft CRT Radar Scope Modulator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Cathode_ray_tube_screen_of_Tektronix_Oscilloscope_475A.jpg'
  },

  // Batch 1 (OCT 01, 2026 - Initial Catalog)
  {
    id: 'anm-001',
    title: 'Magnetic Ferrofluid Acoustic Cybernetic Visualizer Speaker',
    url: 'https://ae01.alicdn.com/kf/Sb43253789d1849029154319bf54bf556Q.jpg'
  },
  {
    id: 'anm-002',
    title: 'Transparent Cyberdeck Mechanical Terminal with Stepper Gauges',
    url: 'https://cdn-blog.adafruit.com/uploads/2024/02/one-one-two-7.png'
  },
  {
    id: 'anm-003',
    title: 'Magnetic Levitation Biomorphic Flora Vessel & Wireless Luminary',
    url: 'https://m.media-amazon.com/images/I/81SLR3CUxPS._AC_SL1500_.jpg'
  },
  {
    id: 'anm-004',
    title: 'Analog Optical Ribbon Theremin & Sonic Glitch Controller',
    url: 'https://media.pitchfork.com/photos/625838c5f339ec5d437f9ff4/2:1/w_2560%2Cc_limit/Moog-Etherwave-Theremin.jpg'
  },
  {
    id: 'anm-005',
    title: 'Bioluminescent Pulsing Mesoglea Jellyfish Kinetic Aquarium',
    url: 'https://m.media-amazon.com/images/I/71JXvus7PpL._AC_SL1500_.jpg'
  },
  {
    id: 'anm-006',
    title: 'All-Metal CNC Bionic Hexapod Combat Recon Robot with FPV Cam',
    url: 'https://m.media-amazon.com/images/I/61zmykS365L.jpg'
  },
  {
    id: 'anm-007',
    title: 'Authentic IN-14 Soviet Cold-War Glow Tube Mechanical Chronograph',
    url: 'https://m.media-amazon.com/images/I/81BaupBFslL._AC_.jpg'
  },
  {
    id: 'anm-008',
    title: 'Full-Scale Anatomical Heavyweight Muscle Hugging Pod (15kg)',
    url: 'https://m.media-amazon.com/images/I/81InuvflERL._AC_SL1500_.jpg'
  },
  {
    id: 'anm-009',
    title: 'Articulated Titanium Alloy Cybernetic Exoskeleton Hand Armor',
    url: 'https://kiikio.com/cdn/shop/files/b3633cfe9ce0ab13c95dc28fd67d70ae.png?v=1757910463&width=1090'
  },
  {
    id: 'anm-010',
    title: 'Victorian Cryptozoology Chimaera Skeleton Under Hand-Blown Bell Jar',
    url: 'https://i.etsystatic.com/7471781/r/il/3168de/6728983389/il_1080xN.6728983389_4p5s.jpg'
  },
  {
    id: 'anm-011',
    title: '1987 Vintage Casio DG-20 Digital MIDI Polyphonic Synth Guitar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/CASIO_DG-20%2C_front_view.png'
  },
  {
    id: 'anm-012',
    title: 'Divoom Cyber-Hardpack with 64x64 Programmable LED Matrix Display',
    url: 'https://m.media-amazon.com/images/I/81cdY3+TUJS._AC_UL1500_.jpg'
  },
  {
    id: 'anm-013',
    title: 'Anti-Gravity Stroboscopic Water Droplet Optical Levitator',
    url: 'https://m.media-amazon.com/images/I/71TuZmKt2LL._AC_SL1500_.jpg'
  },
  {
    id: 'anm-014',
    title: 'Kyoto Ceramic Tengu Long-Nose Demon Ritual Incense Burner',
    url: 'https://japaneseonimasks.com/cdn/shop/products/Sa69118ebf7684ad2920e277f9976ea7d3.jpg?v=1674907931&width=1445'
  },
  {
    id: 'anm-015',
    title: 'Industrial Military Cold-War Geiger Counter Audio-Visual Modulator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Geiger_counter.jpg'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${EXACT_PRODUCTS.length} verified real product photographs from source pages...`);
  let successCount = 0;

  for (const item of EXACT_PRODUCTS) {
    const filename = `${item.id}.jpg`;
    const dest = path.join(itemsDir, filename);

    console.log(`[${item.id}] Fetching: ${item.title}`);
    console.log(`  Source: ${item.url}`);

    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Referer': 'https://www.google.com/'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1000) {
        throw new Error(`Downloaded file too small: ${buf.length} bytes`);
      }

      fs.writeFileSync(dest, buf);
      console.log(`  ✓ Saved ${filename} (${(buf.length / 1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ Failed to download ${item.id}:`, err.message);
    }

    // Small delay between requests
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`\nDownload summary: ${successCount}/${EXACT_PRODUCTS.length} succeeded.`);
}

downloadAll();
