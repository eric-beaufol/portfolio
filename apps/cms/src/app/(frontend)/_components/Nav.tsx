"use client";

import { useScrolled } from "../_hooks/useScrolled";
import { identity, nav } from "../_data/site";
import styles from "./Nav.module.css";

export default function Nav() {
  const scrolled = useScrolled(40);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#top" className={styles.brand} data-cursor>
        <span className={styles.dot} />
        {identity.brand}
        <span className={styles.brandSuffix}>{identity.brandSuffix}</span>
      </a>
      <div className={styles.links}>
        {nav.links.map((link) => (
          <a key={link.href} href={link.href} data-cursor>
            <span className={styles.idx}>{link.idx}</span>
            {link.label}
          </a>
        ))}
        <a href={nav.cta.href} className={styles.cta} data-cursor>
          {nav.cta.label}
        </a>
      </div>
    </nav>
  );
}
