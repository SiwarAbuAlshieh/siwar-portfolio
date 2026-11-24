import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name} — ${site.title}`;

const fontDir = (pkg: string) => join(process.cwd(), "node_modules", "@fontsource", pkg, "files");

/** 1200×630 share image: ivory background, name and title on the left, portrait on the right. */
export async function renderOgImage() {
  const [serif, sans, sansBold, portrait] = await Promise.all([
    readFile(join(fontDir("cormorant-garamond"), "cormorant-garamond-latin-500-normal.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-400-normal.woff")),
    readFile(join(fontDir("manrope"), "manrope-latin-600-normal.woff")),
    // Resize only (same aspect ratio, no crop, no color change) so it can be embedded.
    sharp(join(process.cwd(), "public", "portrait.png"))
      .resize({ height: 1060 })
      .jpeg({ quality: 88 })
      .toBuffer(),
  ]);

  const photoH = 530;
  const photoW = Math.round((photoH * site.portrait.width) / site.portrait.height);
  const src = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F8F6F0",
          padding: "50px 72px",
          fontFamily: "Manrope",
          color: "#1C1C1C",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingRight: 48 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#7D6240",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div style={{ width: 56, height: 1, background: "#B39A76", marginTop: 18 }} />
          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 80,
              lineHeight: 1.04,
              marginTop: 30,
              letterSpacing: "-0.01em",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, marginTop: 26, lineHeight: 1.3 }}>{site.title}</div>
          <div style={{ fontSize: 21, color: "#6B6B6B", marginTop: 12 }}>{site.identity}</div>
        </div>
        <div style={{ display: "flex", position: "relative", width: photoW + 20, height: photoH + 20, alignSelf: "center" }}>
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 20,
              width: photoW,
              height: photoH,
              background: "#E8DFD3",
              borderRadius: 4,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={src}
            width={photoW}
            height={photoH}
            style={{ position: "absolute", left: 0, top: 0, borderRadius: 4 }}
          />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cormorant Garamond", data: serif, weight: 500, style: "normal" },
        { name: "Manrope", data: sans, weight: 400, style: "normal" },
        { name: "Manrope", data: sansBold, weight: 600, style: "normal" },
      ],
    },
  );
}
