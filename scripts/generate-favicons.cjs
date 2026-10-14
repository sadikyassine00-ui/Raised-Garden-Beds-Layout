const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 512x512 Botanical Garden Grid Icon SVG
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#246451" />
      <stop offset="100%" stop-color="#1B4D3E" />
    </radialGradient>
  </defs>

  <!-- Dark botanical green background -->
  <rect width="512" height="512" rx="64" fill="url(#greenGlow)" />

  <!-- Outer Garden Bed Timber Rim -->
  <rect x="68" y="68" width="376" height="376" rx="20" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-opacity="0.95" />

  <!-- Square-Foot Gardening Inner Grid Lines (3x3 modular configuration) -->
  <!-- Vertical dividers -->
  <line x1="193" y1="76" x2="193" y2="436" stroke="#FFFFFF" stroke-width="10" stroke-opacity="0.85" stroke-linecap="round" />
  <line x1="319" y1="76" x2="319" y2="436" stroke="#FFFFFF" stroke-width="10" stroke-opacity="0.85" stroke-linecap="round" />

  <!-- Horizontal dividers -->
  <line x1="76" y1="193" x2="436" y2="193" stroke="#FFFFFF" stroke-width="10" stroke-opacity="0.85" stroke-linecap="round" />
  <line x1="76" y1="319" x2="436" y2="319" stroke="#FFFFFF" stroke-width="10" stroke-opacity="0.85" stroke-linecap="round" />

  <!-- Center Cell: Stylized Botanical Sprout / Seedling -->
  <g transform="translate(0, 0)">
    <!-- Sprout Stem -->
    <path d="M 256 304 C 256 270 254 246 256 218" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round" />

    <!-- Left Leaf -->
    <path d="M 256 260 C 230 260 206 242 208 218 C 230 216 252 232 256 260 Z" fill="#FFFFFF" />

    <!-- Right Leaf -->
    <path d="M 256 242 C 282 240 306 220 304 196 C 280 196 260 214 256 242 Z" fill="#FFFFFF" />

    <!-- Center bud / leaf apex -->
    <circle cx="256" cy="214" r="6.5" fill="#FFFFFF" />
  </g>
</svg>
`;

function createIco(pngEntries) {
  const numImages = pngEntries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // count of images

  let offset = 6 + 16 * numImages;
  const entryBuffers = [];

  for (const item of pngEntries) {
    const entry = Buffer.alloc(16);
    const w = item.width >= 256 ? 0 : item.width;
    const h = item.height >= 256 ? 0 : item.height;
    entry.writeUInt8(w, 0); // width
    entry.writeUInt8(h, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // offset from beginning of file
    entryBuffers.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entryBuffers, ...pngEntries.map((e) => e.buffer)]);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgBuffer = Buffer.from(svgIcon);

  // 1. favicon-16x16.png
  console.log('Generating favicon-16x16.png...');
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);

  // 2. favicon-32x32.png
  console.log('Generating favicon-32x32.png...');
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);

  // 3. 48x48 for ICO
  console.log('Generating 48x48 PNG for ICO...');
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // 4. apple-touch-icon.png (180x180)
  console.log('Generating apple-touch-icon.png (180x180)...');
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);

  // 5. android-chrome-192x192.png
  console.log('Generating android-chrome-192x192.png...');
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);

  // 6. android-chrome-512x512.png
  console.log('Generating android-chrome-512x512.png...');
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);

  // 7. Multi-resolution favicon.ico (16, 32, 48)
  console.log('Building multi-resolution favicon.ico...');
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // 8. site.webmanifest
  console.log('Generating site.webmanifest...');
  const manifest = {
    name: 'Raised Garden Bed Blueprints',
    short_name: 'GardenBlueprints',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#1B4D3E',
    background_color: '#FFFFFF',
    display: 'standalone',
  };
  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2) + '\n'
  );

  console.log('All favicon and app icon assets successfully generated!');
}

main().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
