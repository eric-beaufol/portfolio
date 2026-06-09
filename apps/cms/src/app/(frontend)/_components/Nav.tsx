"use client";

import { useScrolled } from "../_hooks/useScrolled";
import type { Home } from "@/payload-types";
import styles from "./Nav.module.css";

// Liens structurels (ancres de sections).
const links = [
  { idx: "01", label: "À propos", href: "#about" },
  { idx: "02", label: "Projets", href: "#work" },
  { idx: "03", label: "Parcours", href: "#experience" },
  { idx: "04", label: "Stack", href: "#stack" },
];

export default function Nav({ identity }: { identity: Home["identity"] }) {
  const scrolled = useScrolled(40);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#top" className={styles.brand} data-cursor>
        <span className={styles.dot} />
        {identity.brand}
        <span className={styles.brandSuffix}>{identity.brandSuffix}</span>
      </a>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.href} href={link.href} data-cursor>
            <span className={styles.idx}>{link.idx}</span>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={styles.cta} data-cursor>
          Me contacter
        </a>
      </div>
    </nav>
  );
}
