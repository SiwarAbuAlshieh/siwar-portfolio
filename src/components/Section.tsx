import type { ReactNode } from "react";

export type Tone = "ivory" | "white" | "sand" | "charcoal";

const toneClass: Record<Tone, string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  sand: "bg-sand border-y border-beige",
  charcoal: "bg-charcoal text-ivory",
};

interface SectionProps {
  id: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

/** Page section with consistent spacing, background rhythm and an accessible label. */
export function Section({ id, tone = "ivory", className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${toneClass[tone]} py-16 md:py-24 lg:py-28 ${className}`}
    >
      <div data-reveal className="mx-auto max-w-[1200px] px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
