import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const ids = process.argv.slice(2);
if (ids.length === 0) {
  console.log('Usage: node process_image.mjs <id1> <id2> ...');
  process.exit(1);
}

for (const id of ids) {
  let input = path.join('scripts', 'raw_downloads', `${id}.jpg`);
  if (!fs.existsSync(input)) {
    input = path.join('scripts', 'raw_downloads', `${id}.png`);
  }
  const output = path.join('public', 'items', `${id}.jpg`);
  
  if (!fs.existsSync(input)) {
    console.warn(`Input not found for ${id}`);
    continue;
  }
  
  await sharp(input)
    .resize(1000, 1000, {
      fit: 'cover',
      position: 'centre'
    })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(output);
    
  console.log(`✓ Processed ${id} (${path.extname(input)}) -> ${output}`);
}
