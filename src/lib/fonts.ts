import { Cormorant_Garamond, IBM_Plex_Sans_Arabic, Manrope, Noto_Naskh_Arabic } from "next/font/google";

// All fonts are downloaded at build time and self-hosted — no requests to Google at runtime.

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Arabic headings: a refined Naskh that pairs with Cormorant Garamond. */
export const naskh = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  weight: ["500", "600"],
  display: "swap",
});

/** Arabic body text: clean and readable, pairs with Manrope. */
export const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
});
