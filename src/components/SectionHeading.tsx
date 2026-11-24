import type { ReactNode } from "react";
import type { SectionMeta } from "@/content/site";

interface SectionHeadingProps {
  meta: SectionMeta;
  onDark?: boolean;
  className?: string;
  intro?: string;
}

export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-[12.5px] font-semibold uppercase tracking-[0.18em] ${
        onDark ? "text-champagne" : "text-champagne-ink"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-px w-12 bg-champagne ${className}`} />;
}

export function SectionHeading({ meta, onDark = false, className = "", intro }: SectionHeadingProps) {
  return (
    <div className={`max-w-[46rem] ${className}`}>
      <Eyebrow onDark={onDark}>
        {meta.number ? `${meta.number} — ` : ""}
        {meta.eyebrow}
      </Eyebrow>
      <Hairline className="mt-4" />
      <h2
        id={`${meta.id}-title`}
        className={`mt-6 text-[2.25rem] leading-[1.1] font-medium tracking-[-0.01em] md:text-5xl ${
          onDark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {meta.title}
      </h2>
      {intro ? (
        <p className={`mt-6 max-w-[65ch] text-[17px] ${onDark ? "text-ivory/85" : "text-charcoal/85"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
