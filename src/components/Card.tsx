import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={`rounded-[5px] border border-beige bg-white p-7 transition-shadow duration-300 hover:shadow-[0_10px_30px_-18px_rgba(28,28,28,0.18)] md:p-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
