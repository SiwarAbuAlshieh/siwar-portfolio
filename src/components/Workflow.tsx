import type { Item } from "@/content/site";

/**
 * 12-step process. Desktop: 4 × 3 grid joined by thin champagne lines.
 * Mobile: vertical timeline.
 */
export function Workflow({ steps }: { steps: Item[] }) {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 md:gap-y-12 lg:grid-cols-4">
      {steps.map((step, i) => {
        const n = String(i + 1).padStart(2, "0");
        const isLast = i === steps.length - 1;
        return (
          <li
            key={step.title}
            className={`relative pl-10 md:pl-0 md:pt-7 md:pr-8 ${isLast ? "" : "pb-9 md:pb-0"}`}
          >
            {/* connector line: vertical on mobile, horizontal on tablet/desktop */}
            <span
              aria-hidden="true"
              className={`absolute left-[7px] top-2 bottom-0 w-px bg-champagne/60 md:left-0 md:right-0 md:top-0 md:bottom-auto md:h-px md:w-auto ${
                isLast ? "hidden md:block" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border border-champagne bg-white md:-top-[7px]"
            />
            <p className="font-serif text-[1.65rem] leading-none font-semibold text-champagne-ink">
              <span className="sr-only">Step </span>
              {n}
            </p>
            <h3 className="mt-3 font-sans text-[16.5px] font-semibold leading-snug text-charcoal">
              {step.title}
            </h3>
            <p className="mt-1.5 text-[15px] text-grey">{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
