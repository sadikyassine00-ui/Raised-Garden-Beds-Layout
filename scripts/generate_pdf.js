const fs = require('fs');
const path = require('path');

function generateValidPdf(outputPath) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // We construct a clean, 100% compliant PDF 1.4 document
  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>\nendobj\n';
  const objFont = '7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const objFontBold = '8 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';

  // Page 1
  const p1Content = [
    'BT',
    '/F2 24 Tf',
    '50 720 Td',
    '(RAISED GARDEN BED BLUEPRINT BUNDLE) Tj',
    '/F1 13 Tf',
    '0 -28 Td',
    '(Complete Architectural Build Guides & Square-Foot Planting System) Tj',
    '/F1 10 Tf',
    '0 -20 Td',
    '(Official Digital Edition - Merchant of Record: Paddle.com - $9.00 USD) Tj',
    '0 -40 Td',
    '/F2 15 Tf',
    '(SECTION 1: 4x8 MODULAR RAISED BED SPECIFICATIONS) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Lumber: 6 pieces 2x10x8ft untreated Western Red Cedar) Tj',
    '0 -17 Td',
    '(Corner Posts: 4 pieces 4x4x18in Cedar or Douglas Fir Posts) Tj',
    '0 -17 Td',
    '(Fasteners: 3in ceramic-coated exterior deck screws, Star drive) Tj',
    '0 -17 Td',
    '(Gopher/Mole Barrier: 1/4-inch galvanized steel hardware cloth mesh) Tj',
    '0 -35 Td',
    '/F2 15 Tf',
    '(SECTION 2: LUMBER CUT LIST & EXACT DIMENSIONS) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(Cut 1: Board 1 - 96 inches [Side Wall A]) Tj',
    '0 -17 Td',
    '(Cut 2: Board 2 - 96 inches [Side Wall B]) Tj',
    '0 -17 Td',
    '(Cut 3: Board 3 - 45 inches [End Wall 1] + 45 inches [End Wall 2]) Tj',
    '0 -17 Td',
    '(Cut 4: Board 4 - 48 inches [Center Cross-Brace Against Soil Bowing]) Tj',
    '0 -35 Td',
    '/F2 15 Tf',
    '(SECTION 3: SQUARE-FOOT PLANTING DENSITY GUIDE) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '(1 per sq ft: Indeterminate Tomatoes, Bell Peppers, Eggplant, Cabbage) Tj',
    '0 -17 Td',
    '(4 per sq ft: Leaf Lettuce, Swiss Chard, Strawberry, French Marigold) Tj',
    '0 -17 Td',
    '(9 per sq ft: Bush Beans, Beets, Spinach, Large Bulb Onions) Tj',
    '0 -17 Td',
    '(16 per sq ft: Danvers Half-Long Carrots, French Breakfast Radishes) Tj',
    '0 -45 Td',
    '/F2 11 Tf',
    '(Authorized Personal License. Support: support@raisedgardenbedslayout.com) Tj',
    'ET'
  ].join('\n');

  const p1StreamLen = Buffer.byteLength(p1Content, 'utf-8');
  const obj4 = `4 0 obj\n<< /Length ${p1StreamLen} >>\nstream\n${p1Content}\nendstream\nendobj\n`;
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> >>\nendobj\n';

  // Page 2
  const p2Content = [
    'BT',
    '/F2 24 Tf',
    '50 720 Td',
    '(COMPANION PLANTING & SOIL VOLUME FORMULA) Tj',
    '/F1 13 Tf',
    '0 -28 Td',
    '(Mel\\\'s Mix Organic Formulation for 32 sq ft (10-inch soil depth):) Tj',
    '/F1 11 Tf',
    '0 -24 Td',
    '(- 1/3 Coarse Horticultural Grade Vermiculite [8.9 cu. ft.]) Tj',
    '0 -18 Td',
    '(- 1/3 Fluffed Sphagnum Peat Moss or Organic Coconut Coir [8.9 cu. ft.]) Tj',
    '0 -18 Td',
    '(- 1/3 Blended Organic Compost from 4+ varied botanical sources [8.9 cu. ft.]) Tj',
    '0 -36 Td',
    '/F2 15 Tf',
    '(COMPANION ALLIES MATRIX) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '([+] Tomatoes + Genovese Basil: Repels hornworms, enriches essential oils) Tj',
    '0 -18 Td',
    '([+] Carrots + Rosemary: Camouflages sweet foliage from carrot rust fly) Tj',
    '0 -18 Td',
    '([+] Cucumbers + Radishes: Radishes deter cucumber beetles naturally) Tj',
    '0 -18 Td',
    '([+] Lettuce + Chives / Sweet Alyssum: Attracts hoverflies to consume aphids) Tj',
    '0 -36 Td',
    '/F2 15 Tf',
    '(PROHIBITED ADJACENCIES (AVOID PLANTING TOGETHER)) Tj',
    '/F1 11 Tf',
    '0 -22 Td',
    '([-] NEVER PLANT: Fennel anywhere near Solanaceae (tomatoes, peppers, potatoes)) Tj',
    '0 -18 Td',
    '([-] NEVER PLANT: Alliums (onions, garlic) immediately beside Legumes (beans, peas)) Tj',
    '0 -18 Td',
    '([-] NEVER PLANT: Brassicas (cabbage, kale) next to Strawberries) Tj',
    '0 -45 Td',
    '/F1 10 Tf',
    '(Raised Garden Beds Layout & Blueprint Pack - Lifetime Download Access) Tj',
    'ET'
  ].join('\n');

  const p2StreamLen = Buffer.byteLength(p2Content, 'utf-8');
  const obj6 = `6 0 obj\n<< /Length ${p2StreamLen} >>\nstream\n${p2Content}\nendstream\nendobj\n`;
  const obj5 = '5 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> >>\nendobj\n';

  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
  const objects = [obj1, obj2, obj3, obj4, obj5, obj6, objFont, objFontBold];

  let currentOffset = Buffer.byteLength(header, 'utf-8');
  const offsets = [];
  let body = '';

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  const startxref = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const pdfData = header + body + xref + trailer;
  fs.writeFileSync(outputPath, pdfData, 'binary');
  console.log(`Generated valid PDF at: ${outputPath} (${pdfData.length} bytes)`);
}

const targetPath = path.join(process.cwd(), 'private', 'Raised_Garden_Bed_Blueprints.pdf');
generateValidPdf(targetPath);
