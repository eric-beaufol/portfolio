"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

/**
 * Curseur custom partagé (porté depuis design_handoff_portfolio/cursor.js).
 * Point qui suit instantanément + anneau en lerp (0.18). Grossit + se remplit
 * au survol des `a, button, [data-cursor]`. Désactivé sur `pointer: coarse`.
 * La détection du survol utilise la délégation d'évènements pour rester
 * robuste aux changements de DOM lors des navigations App Router.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const interactive = "a, button, [data-cursor]";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactive)) {
        ring.classList.add(styles.hovering);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactive)) {
        ring.classList.remove(styles.hovering);
      }
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
