import type { Metadata } from "next";
import Link from "next/link";
import { cormorant, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found — Siwar Abu Alshieh",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-6 md:px-12">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-champagne-ink">404</p>
          <span aria-hidden="true" className="mt-4 block h-px w-12 bg-champagne" />
          <h1 className="mt-6 text-5xl leading-[1.1] font-medium text-charcoal">Page not found</h1>
          <p className="mt-4 text-[17px] text-grey" lang="ar" dir="rtl">
            الصفحة غير موجودة
          </p>
          <div className="mt-8 flex gap-6 text-[15px]">
            <Link href="/" className="underline decoration-charcoal/40 underline-offset-[6px] hover:text-champagne-ink">
              Home
            </Link>
            <Link
              href="/ar"
              lang="ar"
              className="underline decoration-charcoal/40 underline-offset-[6px] hover:text-champagne-ink"
            >
              الرئيسية
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
