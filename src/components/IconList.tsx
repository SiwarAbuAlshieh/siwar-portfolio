import type { Item } from "@/content/site";
import { Card } from "./Card";
import { Icon } from "./Icon";

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

interface IconListProps {
  items: Item[];
  columns?: keyof typeof columnClass;
  /** "cards" = white bordered cards, "plain" = open list with hairline separators. */
  variant?: "cards" | "plain";
  headingLevel?: "h3" | "h4";
  className?: string;
  /** Let the last card span the full row (used when the count leaves a lone card). */
  wideLast?: boolean;
}

/** Grid of items, each with an optional thin icon, a title and one line of text. */
export function IconList({
  items,
  columns = 3,
  variant = "cards",
  headingLevel: Heading = "h3",
  className = "",
  wideLast = false,
}: IconListProps) {
  if (variant === "plain") {
    return (
      <ul className={`grid grid-cols-1 gap-x-12 gap-y-10 ${columnClass[columns]} ${className}`}>
        {items.map((item) => (
          <li key={item.title} className="border-t border-beige pt-6">
            {item.icon ? <Icon name={item.icon} /> : null}
            <Heading className="mt-4 font-sans text-[17px] font-semibold leading-snug text-charcoal">
              {item.title}
            </Heading>
            <p className="mt-2 text-[15.5px] text-grey">{item.text}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`grid grid-cols-1 gap-5 md:gap-6 ${columnClass[columns]} ${className}`}>
      {items.map((item, i) => (
        <Card
          as="li"
          key={item.title}
          className={wideLast && i === items.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}
        >
          {item.icon ? <Icon name={item.icon} /> : null}
          <Heading
            className={`${item.icon ? "mt-5" : ""} font-sans text-[17px] font-semibold leading-snug text-charcoal`}
          >
            {item.title}
          </Heading>
          <p className="mt-2 text-[15.5px] text-grey">{item.text}</p>
        </Card>
      ))}
    </ul>
  );
}
