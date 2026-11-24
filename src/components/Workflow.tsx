import type { Item } from "@/content/site";

/**
 * 12-step process. Desktop: 4 × 3 grid joined by thin champagne lines.
 * Mobile: vertical timeline. Uses logical (start/end) spacing so it mirrors in RTL.
 */
export function Workflow({ steps, stepLabel }: { steps: Item[]; stepLabel: string }) {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 md:gap-y-12 lg:grid-cols-4">
      {steps.map((step, i) => {
        const n = String(i + 1).padStart(2, "0");
        const isLast = i === steps.length - 1;
        return (
          <li
            key={step.title}
            className={`relative ps-10 md:ps-0 md:pt-7 md:pe-8 ${isLast ? "" : "pb-9 md:pb-0"}`}
          >
            {/* connector line: vertical on mobile, horizontal on tablet/desktop */}
            <span
              aria-hidden="true"
              className={`absolute start-[7px] top-2 bottom-0 w-px bg-champagne/60 md:start-0 md:end-0 md:top-0 md:bottom-auto md:h-px md:w-auto ${
                isLast ? "hidden md:block" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className="absolute start-0 top-1.5 h-[15px] w-[15px] rounded-full border border-champagne bg-white md:-top-[7px]"
            />
            <p className="font-latin-serif text-[1.65rem] leading-none font-semibold text-champagne-ink">
              <span className="sr-only">{stepLabel} </span>
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
