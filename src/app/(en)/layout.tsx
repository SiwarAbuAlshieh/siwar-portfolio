import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { en } from "@/content/site";
import { cormorant, manrope } from "@/lib/fonts";
import { buildMetadata, personJsonLd } from "@/lib/page-meta";
import "../globals.css";

export const metadata: Metadata = buildMetadata(en);

export const viewport: Viewport = { themeColor: "#F8F6F0" };

export default function EnglishLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd(en) }} />
        {children}
      </body>
    </html>
  );
}
