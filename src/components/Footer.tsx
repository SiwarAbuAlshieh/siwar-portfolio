import type { SiteContent } from "@/content/site";

export function Footer({ site, ui }: Pick<SiteContent, "site" | "ui">) {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-ivory/75">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-8 text-[14px] md:flex-row md:items-center md:justify-between md:px-12">
        <p>{site.footer}</p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory underline decoration-ivory/40 underline-offset-4 hover:text-champagne hover:decoration-champagne"
        >
          LinkedIn<span className="sr-only"> {ui.newTab}</span>
        </a>
      </div>
    </footer>
  );
}
