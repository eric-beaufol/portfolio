"use client";

import { useEffect } from "react";

/**
 * Moteur d'interactions au scroll, monté une fois par page.
 * Porté 1:1 depuis design_handoff_portfolio/script.js + project.js :
 *  - Scroll reveal via IntersectionObserver (threshold 0.16, rootMargin -8%)
 *  - Stagger : delay incrémental de 90ms par enfant des [data-stagger]
 *  - Compteurs [data-count] : count-up 1400ms, easing 1-(1-t)³, suffixe + décimales
 *  - Parallaxe [data-parallax] : translate3d(0, scrollY*vitesse, 0) via rAF
 * Tout est désactivé sous prefers-reduced-motion.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* ---------- Count-up ---------- */
    const startCount = (el: Element, instant = false) => {
      const node = el as HTMLElement;
      if (node.dataset.counted) return;
      node.dataset.counted = "1";
      const raw = node.getAttribute("data-count") || "";
      const target = parseFloat(raw) || 0;
      const dec = raw.includes(".") ? 1 : 0;
      const suffix = node.querySelector(".suffix, .s");
      const suffixHTML = suffix ? suffix.outerHTML : "";
      if (instant || prefersReduced) {
        node.innerHTML = target.toFixed(dec) + suffixHTML;
        return;
      }
      const dur = 1400;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        node.innerHTML = (target * ease(p)).toFixed(dec) + suffixHTML;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll(".reveal, [data-stagger]");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && !prefersReduced) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting || !io) return;
            const target = e.target as HTMLElement;
            target.classList.add("in");

            if (target.hasAttribute("data-stagger")) {
              Array.from(target.children).forEach((child, ci) => {
                (child as HTMLElement).style.transitionDelay = `${ci * 90}ms`;
              });
            }
            target.querySelectorAll?.("[data-count]").forEach((c) =>
              startCount(c),
            );
            if (target.hasAttribute("data-count")) startCount(target);
            io.unobserve(target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => io!.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
      document
        .querySelectorAll("[data-count]")
        .forEach((el) => startCount(el, true));
    }

    /* ---------- Parallax ---------- */
    const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
    let ticking = false;
    let parallaxBound = false;
    const update = () => {
      const y = window.scrollY;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0") || 0;
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    if (!prefersReduced && parallaxEls.length) {
      parallaxBound = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      io?.disconnect();
      if (parallaxBound) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
