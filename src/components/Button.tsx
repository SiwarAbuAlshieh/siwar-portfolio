import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  /** Use light colors for dark (charcoal) backgrounds. */
  onDark?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[0.01em] transition-colors duration-200";

const styles: Record<Variant, { light: string; dark: string }> = {
  primary: {
    light:
      "rounded-[3px] bg-charcoal px-7 py-3.5 text-white border border-charcoal hover:bg-[#333]",
    dark: "rounded-[3px] bg-ivory px-7 py-3.5 text-charcoal border border-ivory hover:bg-beige hover:border-beige",
  },
  secondary: {
    light:
      "rounded-[3px] border border-charcoal px-7 py-3.5 text-charcoal hover:bg-charcoal hover:text-white",
    dark: "rounded-[3px] border border-ivory/80 px-7 py-3.5 text-ivory hover:bg-ivory hover:text-charcoal",
  },
  text: {
    light:
      "px-1 py-3.5 text-charcoal underline decoration-charcoal/40 decoration-1 underline-offset-[6px] hover:decoration-champagne hover:text-champagne-ink",
    dark: "px-1 py-3.5 text-ivory underline decoration-ivory/40 decoration-1 underline-offset-[6px] hover:decoration-champagne hover:text-champagne",
  },
};

export function Button({
  href,
  variant = "primary",
  onDark = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const style = styles[variant][onDark ? "dark" : "light"];
  return (
    <a href={href} className={`${base} ${style} ${className}`} {...rest}>
      {children}
    </a>
  );
}
