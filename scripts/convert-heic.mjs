import sharp from "sharp";
import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUT = "public/products";
mkdirSync(OUT, { recursive: true });

const files = [
  { src: "C:/Users/Unifar/Downloads/IMG_4234.HEIC", out: `${OUT}/maio-saida-saue.jpg` },
  { src: "C:/Users/Unifar/Downloads/IMG_7308.heic", out: `${OUT}/kit-namorados.jpg` },
  { src: "C:/Users/Unifar/Downloads/IMG_6533.HEIC", out: `${OUT}/bone-cinto-carteira.jpg` },
];

for (const { src, out } of files) {
  try {
    await sharp(src).jpeg({ quality: 88 }).toFile(out);
    console.log(`✓ ${out}`);
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}
