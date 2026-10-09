const sharp = require('sharp');
const path = require('path');

async function optimize() {
  const input = path.join(__dirname, 'public', 'assets', 'blueprint-closeup-mockup.jpg');
  
  // 1200w WebP
  await sharp(input)
    .webp({ quality: 86 })
    .toFile(path.join(__dirname, 'public', 'assets', 'blueprint-closeup-mockup.webp'));
  console.log('Created public/assets/blueprint-closeup-mockup.webp');

  // 640w WebP for mobile screens
  await sharp(input)
    .resize(640)
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public', 'assets', 'blueprint-closeup-mockup-mobile.webp'));
  console.log('Created public/assets/blueprint-closeup-mockup-mobile.webp');
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
