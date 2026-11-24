import type { SiteContent } from "@/content/site";

/** Typographic brand showcase — names only, no logos. */
export function Brands({ brands }: Pick<SiteContent, "brands">) {
  return (
    <>
      <ul className="mt-14 grid grid-cols-1 border-y border-beige sm:grid-cols-2 lg:grid-cols-4">
        {brands.items.map((brand, i) => (
          <li
            key={brand.name}
            className={`px-2 py-9 text-center sm:px-6 lg:px-3 lg:py-12 ${i > 0 ? "border-t border-beige sm:border-t-0" : ""} ${
              i % 2 === 1 ? "sm:border-s sm:border-beige" : ""
            } ${i >= 2 ? "sm:border-t sm:border-beige lg:border-t-0" : ""} ${i === 2 ? "lg:border-s lg:border-beige" : ""}`}
          >
            <p
              dir="ltr"
              className="font-latin-serif text-[1.95rem] leading-tight font-medium text-charcoal md:text-[2.15rem] lg:text-[1.8rem] xl:text-[1.95rem]"
            >
              {brand.name}
            </p>
            <p className="mt-2 text-[13px] tracking-[0.04em] text-grey">{brand.industry}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[14px] text-grey">{brands.caption}</p>
    </>
  );
}
