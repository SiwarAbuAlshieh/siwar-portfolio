import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ar } from "@/content/site.ar";
import { cormorant, manrope, naskh, plexArabic } from "@/lib/fonts";
import { buildMetadata, personJsonLd } from "@/lib/page-meta";
import "../../globals.css";

export const metadata: Metadata = buildMetadata(ar);

export const viewport: Viewport = { themeColor: "#F8F6F0" };

export default function ArabicLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cormorant.variable} ${manrope.variable} ${naskh.variable} ${plexArabic.variable}`}
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd(ar) }} />
        {children}
      </body>
    </html>
  );
}
