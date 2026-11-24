import type { Item } from "@/content/site";
import { Icon } from "./Icon";

/** "At a glance" strip directly under the hero. */
export function Highlights({ items, label }: { items: Item[]; label: string }) {
  return (
    <section aria-labelledby="glance-title" className="border-y border-beige bg-white">
      <div data-reveal className="mx-auto max-w-[1200px] px-6 py-12 md:px-12 md:py-14">
        <h2 id="glance-title" className="sr-only">
          {label}
        </h2>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5 lg:gap-x-0">
          {items.map((item, i) => (
            <li
              key={item.title}
              className={`${i === items.length - 1 ? "col-span-2 lg:col-span-1" : ""} lg:border-s lg:border-beige lg:px-6 lg:first:border-s-0 lg:first:ps-0 lg:last:pe-0`}
            >
              {item.icon ? <Icon name={item.icon} className="h-[22px] w-[22px]" /> : null}
              <p className="mt-3 text-[15.5px] font-semibold leading-snug text-charcoal">{item.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-grey">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
