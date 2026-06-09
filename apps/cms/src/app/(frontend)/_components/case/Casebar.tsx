"use client";

import Link from "next/link";
import { useScrolled } from "../../_hooks/useScrolled";
import styles from "./Case.module.css";

export default function Casebar({ indexLabel }: { indexLabel: string }) {
  const scrolled = useScrolled(40);

  return (
    <nav className={`${styles.casebar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/#work" className={styles.back} data-cursor>
        ← Tous les projets
      </Link>
      <span className={styles.idx}>{indexLabel}</span>
    </nav>
  );
}
