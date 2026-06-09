import Link from "next/link";
import type { Home } from "@/payload-types";
import styles from "./Footer.module.css";

type FooterProps = {
  footer: Home["footer"];
  /** Dernier lien (droite). Par défaut « Retour en haut » vers #top (accueil). */
  lastLink?: { label: string; href: string };
};

export default function Footer({
  footer,
  lastLink = { label: "Retour en haut ↑", href: "#top" },
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span>{footer?.copyright}</span>
      <span>{footer?.tagline}</span>
      <Link href={lastLink.href} data-cursor>
        {lastLink.label}
      </Link>
    </footer>
  );
}
