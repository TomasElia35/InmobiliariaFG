// Genera versiones WebP livianas de las fotos originales de ../img.
// Uso: npm run images
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const src = path.resolve('../img');
const out = path.resolve('public/img');
await mkdir(out, { recursive: true });

for (const file of await readdir(src)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  // Logos que la web no usa (el logo se recorta aparte como logo-placa-480.webp).
  if (/^(cash|credito|debito|logo)\.png$/i.test(file)) continue;
  const name = file.replace(/\.(jpe?g|png)$/i, '');
  const isPhoto = /\.jpe?g$/i.test(file);
  const widths = isPhoto ? [800, 1600] : [240];
  for (const w of widths) {
    await sharp(path.join(src, file))
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: isPhoto ? 74 : 90 })
      .toFile(path.join(out, `${name}-${w}.webp`));
  }
  console.log('ok', file);
}
