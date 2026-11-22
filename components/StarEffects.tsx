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
      if (e.animationName === "star-spin") {
        (e.target as Element).classList.remove("is-spinning");
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("animationend", onEnd);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("animationend", onEnd);
    };
  }, []);

  return null;
}
