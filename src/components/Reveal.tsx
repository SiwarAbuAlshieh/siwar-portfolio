"use client";

import { useEffect } from "react";

/**
 * Adds a gentle fade-up to every element marked with `data-reveal` as it enters the viewport.
 * Does nothing when the user prefers reduced motion. Content is fully visible without JavaScript.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Elements already in view stay visible immediately (no flash).
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-visible");
    });
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
