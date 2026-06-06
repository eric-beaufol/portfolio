import Link from "next/link";
import { footer } from "../_data/site";
import styles from "./Footer.module.css";

type FooterProps = {
  /** Dernier lien (droite). Par défaut « Retour en haut » vers #top (accueil). */
  lastLink?: { label: string; href: string };
};

export default function Footer({
  lastLink = { label: "Retour en haut ↑", href: "#top" },
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span>{footer.copyright}</span>
      <span>{footer.tagline}</span>
      <Link href={lastLink.href} data-cursor>
        {lastLink.label}
      </Link>
    </footer>
  );
}
