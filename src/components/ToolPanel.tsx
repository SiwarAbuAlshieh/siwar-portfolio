import { ArrowDown, ArrowRight, Check } from "lucide-react";
import type { ToolPanel as ToolPanelData } from "@/content/site";

function ToolBadge({ tool, dark = false }: { tool: string; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-[3px] px-2.5 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] ${
        dark ? "bg-charcoal text-ivory" : "border border-champagne/70 text-champagne-ink"
      }`}
    >
      {tool}
    </span>
  );
}

export function ToolPanel({ panel, emphasis = false }: { panel: ToolPanelData; emphasis?: boolean }) {
  return (
    <article
      className={`rounded-[5px] border p-7 md:p-9 ${
        emphasis ? "border-beige bg-white" : "border-charcoal/15 bg-sand"
      }`}
    >
      <ToolBadge tool={panel.tool} dark={!emphasis} />
      <h3 className="mt-5 font-serif text-[1.75rem] leading-tight font-medium text-charcoal">
        {panel.title}
      </h3>
      <ul className="mt-6 space-y-3">
        {panel.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15.5px] text-charcoal/85">
            <Check aria-hidden="true" strokeWidth={1.5} className="mt-1 h-4 w-4 shrink-0 text-champagne" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Horizontal flow on desktop, vertical on mobile. Built with HTML, no images. */
export function FlowDiagram({
  steps,
  label,
}: {
  steps: { title: string; tool?: string }[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="flex flex-col items-stretch gap-2 lg:flex-row lg:gap-0">
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-col justify-center rounded-[4px] border border-beige bg-white px-4 py-4 text-center lg:min-h-[92px]">
            <p className="text-[15px] font-semibold leading-snug text-charcoal">{step.title}</p>
            {step.tool ? <p className="mt-1 text-[13px] text-grey">({step.tool})</p> : null}
          </div>
          {i < steps.length - 1 ? (
            <>
              <ArrowDown aria-hidden="true" strokeWidth={1.5} className="my-1 h-5 w-5 text-champagne lg:hidden" />
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="mx-2 hidden h-5 w-5 shrink-0 self-center text-champagne lg:block"
              />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
