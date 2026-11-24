"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Border after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(`#${entry.target.id}`, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.01, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Mobile menu: focus trap, Esc to close, scroll lock.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusables = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>("a, button") ?? []).concat(
        toggleRef.current ? [toggleRef.current] : [],
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) close(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const linkClass = (href: string) =>
    `relative py-2 text-[14.5px] font-medium transition-colors hover:text-champagne-ink ${
      active === href
        ? "text-charcoal after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-champagne"
        : "text-grey"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm transition-[border-color] duration-300 border-b ${
        scrolled || open ? "border-beige" : "border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-[3px] bg-charcoal px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-12">
        <a
          href="#home"
          className="font-serif text-[1.45rem] font-semibold tracking-[-0.01em] text-charcoal"
          onClick={() => open && close(false)}
        >
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-current={active === link.href ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-charcoal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => (open ? close() : setOpen(true))}
        >
          {open ? (
            <X aria-hidden="true" strokeWidth={1.5} className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" strokeWidth={1.5} className="h-6 w-6" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-x-0 top-[69px] bottom-0 z-40 overflow-y-auto bg-ivory lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-6 py-8 md:px-12">
            <ul className="flex flex-col">
              {nav.map((link) => (
                <li key={link.href} className="border-b border-beige">
                  <a
                    href={link.href}
                    onClick={() => close(false)}
                    aria-current={active === link.href ? "true" : undefined}
                    className={`block py-4 font-serif text-[1.9rem] font-medium ${
                      active === link.href ? "text-charcoal" : "text-charcoal/75"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
