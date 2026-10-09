const sharp = require('sharp');
const path = require('path');

async function optimize() {
  const input = path.join(__dirname, 'assets', 'blueprint-bundle-mockup.jpg');
  
  // 1200w WebP
  await sharp(input)
    .webp({ quality: 84 })
    .toFile(path.join(__dirname, 'assets', 'blueprint-bundle-mockup.webp'));
  console.log('Created blueprint-bundle-mockup.webp');

  // 640w WebP for mobile screens
  await sharp(input)
    .resize(640)
    .webp({ quality: 82 })
    .toFile(path.join(__dirname, 'assets', 'blueprint-bundle-mockup-mobile.webp'));
  console.log('Created blueprint-bundle-mockup-mobile.webp');
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
