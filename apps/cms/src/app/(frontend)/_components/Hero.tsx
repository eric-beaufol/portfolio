"use client";

import { useEffect, useState } from "react";
import type { Home } from "@/payload-types";
import LexicalContent from "./LexicalContent";
import styles from "./Hero.module.css";

type HeroProps = {
  hero: Home["hero"];
  name: string;
};

export default function Hero({ hero, name }: HeroProps) {
  const [entered, setEntered] = useState(false);

  // Entrée : double rAF après montage (porté de script.js:9-19).
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setEntered(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header className={`${styles.hero} ${entered ? styles.in : ""}`} id="top">
      <div className={styles.grid} data-parallax="0.18" />
      <div className={styles.glow} data-parallax="-0.12" />
      <div className={`wrap ${styles.inner}`}>
        {hero?.status ? (
          <div className={styles.status}>
            <span className={styles.pulse} /> {hero.status}
          </div>
        ) : null}
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span>{hero?.titleLine1 || name}</span>
          </span>
          <span className={styles.line}>
            <span>
              <span className={styles.outline}>{hero?.titleOutline}</span>{" "}
              <span className={styles.accent}>{hero?.titleAccent}</span>
            </span>
          </span>
        </h1>
        <div className={styles.meta}>
          <div className={styles.lead}>
            <LexicalContent data={hero?.lead} />
          </div>
        </div>
      </div>
      <div className={styles.scroll} data-cursor>
        <span className={styles.bar} /> {hero?.scrollLabel || "Scroll"}
      </div>
    </header>
  );
}
