"use client";

import { useEffect, useState } from "react";

/**
 * Renvoie `true` dès que la page est scrollée au-delà de `threshold` px.
 * Utilisé par la nav et la casebar pour l'état `.scrolled`
 * (porté depuis script.js:21-25 / project.js:8-11).
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
