"use client";

import { useEffect } from "react";

const SELECTOR = ".spin-star, .logo-star";

/**
 * Makes every star do one full spin (and flash the hover pink) as soon as the
 * mouse touches it, even if the mouse leaves before the spin finishes.
 */
export default function StarEffects() {
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const star = (e.target as Element | null)?.closest?.(SELECTOR);
      if (!star || star.classList.contains("is-spinning")) return;
      star.classList.add("is-spinning");
    };
    const onEnd = (e: AnimationEvent) => {
      if (e.animationName.startsWith("star-spin")) {
        (e.target as Element).classList.remove("is-spinning");
      }
    };
    // Hero stars turn as the page scrolls (0.4 degrees per pixel).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const onScroll = () => {
      if (reduce.matches || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        document.documentElement.style.setProperty(
          "--star-rot",
          `${window.scrollY * 0.4}deg`,
        );
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("animationend", onEnd);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("animationend", onEnd);
    };
  }, []);

  // Shared animated gradient used as the star fill while a star spins.
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: "absolute" }}
      focusable="false"
    >
      <defs>
        <linearGradient id="star-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop className="star-stop star-stop-1" offset="0" />
          <stop className="star-stop star-stop-2" offset="0.5" />
          <stop className="star-stop star-stop-3" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
