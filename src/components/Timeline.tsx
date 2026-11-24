import type { ExperienceEntry } from "@/content/site";

/** Vertical experience timeline: dates on the left, content on the right (stacked on mobile). */
export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="mt-14">
      {entries.map((entry) => (
        <li
          key={`${entry.company}-${entry.period}`}
          className="grid grid-cols-1 gap-3 border-t border-beige py-10 first:border-t-0 first:pt-0 md:grid-cols-[250px_1fr] md:gap-10"
        >
          <p className="pt-1 text-[14px] font-medium tracking-[0.02em] text-grey">{entry.period}</p>
          <div
            className={
              entry.featured ? "rounded-[5px] border border-beige bg-ivory p-7 md:p-10" : "md:pe-10"
            }
          >
            <h3
              className={`font-serif leading-tight font-medium text-charcoal ${
                entry.featured ? "text-[2rem] md:text-[2.4rem]" : "text-[1.6rem] md:text-[1.8rem]"
              }`}
            >
              <bdi>{entry.role}</bdi> <span className="text-champagne-ink">—</span> <bdi>{entry.company}</bdi>
            </h3>
            {entry.summary ? (
              <p className="mt-3 max-w-[65ch] text-[16px] text-charcoal/85">{entry.summary}</p>
            ) : null}
            {entry.groups ? (
              <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
                {entry.groups.map((group) => (
                  <div key={group.title} className="border-t border-beige pt-5">
                    <dt className="label-small text-[12.5px] font-semibold uppercase tracking-[0.14em] text-champagne-ink">
                      {group.title}
                    </dt>
                    <dd className="mt-2 text-[15.5px] text-charcoal/85">{group.text}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
