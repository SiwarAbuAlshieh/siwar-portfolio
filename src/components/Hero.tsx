import Image from "next/image";
import type { SiteContent } from "@/content/site";
import { Button } from "./Button";
import { Eyebrow, Hairline } from "./SectionHeading";

export function Hero({ hero, site }: Pick<SiteContent, "hero" | "site">) {
  return (
    <section id="home" aria-labelledby="home-title" className="bg-ivory">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 pt-12 pb-16 md:px-12 md:pt-16 md:pb-24 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-7">
          <Eyebrow>
            <span dir="ltr">{hero.eyebrow}</span>
          </Eyebrow>
          <Hairline className="mt-4" />
          <h1
            id="home-title"
            className="hero-title mt-7 max-w-[14ch] text-[2.6rem] leading-[1.06] font-medium tracking-[-0.015em] text-charcoal sm:text-[3.25rem] lg:text-[4.25rem]"
          >
            {hero.heading}
          </h1>
          <p className="mt-7 text-[17px] font-semibold text-charcoal">{hero.subtitle}</p>
          <p className="mt-1.5 text-[15px] text-grey">
            {hero.identity.split(" | ").map((part, i) => (
              <span key={part}>
                {i > 0 ? " | " : null}
                <span className="whitespace-nowrap">{part}</span>
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-[60ch] text-[17px] text-charcoal/85">{hero.paragraph}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="secondary" download>
              {hero.secondary.label}
            </Button>
            <Button href={hero.tertiary.href} variant="text" className="ms-1">
              {hero.tertiary.label}
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none lg:ps-6">
          <div className="relative">
            {/* Editorial frame: soft beige panel and a thin champagne line, offset behind the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[4px] bg-beige md:translate-x-5 md:translate-y-5 rtl:-translate-x-4 md:rtl:-translate-x-5"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[4px] border border-champagne md:-translate-x-4 md:-translate-y-4 rtl:translate-x-3 md:rtl:translate-x-4"
            />
            <Image
              src={site.portrait.src}
              width={site.portrait.width}
              height={site.portrait.height}
              alt={site.portrait.alt}
              priority
              fetchPriority="high"
              quality={88}
              sizes="(min-width: 1200px) 440px, (min-width: 1024px) 36vw, (min-width: 480px) 420px, 90vw"
              className="relative block h-auto w-full rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
