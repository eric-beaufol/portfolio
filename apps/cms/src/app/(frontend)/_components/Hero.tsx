"use client";

import { useEffect, useState } from "react";
import RichText from "./RichText";
import { hero } from "../_data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const [entered, setEntered] = useState(false);

  // Entrée : double rAF après montage (porté de script.js:9-19).
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setEntered(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={`${styles.hero} ${entered ? styles.in : ""}`}
      id="top"
    >
      <div className={styles.grid} data-parallax="0.18" />
      <div className={styles.glow} data-parallax="-0.12" />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.status}>
          <span className={styles.pulse} /> {hero.status}
        </div>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span>{hero.titleLine1}</span>
          </span>
          <span className={styles.line}>
            <span>
              <span className={styles.outline}>{hero.titleLine2.outline}</span>{" "}
              <span className={styles.accent}>{hero.titleLine2.accent}</span>
            </span>
          </span>
        </h1>
        <div className={styles.meta}>
          <p className={styles.lead}>
            <RichText segments={hero.lead} />
          </p>
        </div>
      </div>
      <div className={styles.scroll} data-cursor>
        <span className={styles.bar} /> {hero.scrollLabel}
      </div>
    </header>
  );
}
