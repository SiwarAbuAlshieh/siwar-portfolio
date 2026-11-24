// Creates the web-optimized portrait from the original public/portrait.png.
// No cropping, no filters, no color changes — only re-encoding at high quality.
// Run with: npm run optimize:portrait
import sharp from "sharp";

const input = "public/portrait.png";
const output = "public/portrait-optimized.webp";

const meta = await sharp(input).metadata();
await sharp(input)
  .withMetadata({ icc: "srgb" })
  .webp({ quality: 90, smartSubsample: true, effort: 6 })
  .toFile(output);

const outMeta = await sharp(output).metadata();
console.log(
  `${input} (${meta.width}×${meta.height}) → ${output} (${outMeta.width}×${outMeta.height}, ${outMeta.size ?? "?"} bytes)`,
);
