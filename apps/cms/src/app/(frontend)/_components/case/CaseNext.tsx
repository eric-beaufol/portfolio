import Link from "next/link";
import type { Project } from "@/payload-types";
import styles from "./Case.module.css";

type CaseNextProps = {
  next: Project;
  /** Numéro du projet suivant (ex. « 02 »). */
  number: string;
  /** Total de projets (ex. « 04 »). */
  total: string;
};

/** Grand lien pleine largeur vers le projet suivant (boucle). */
export default function CaseNext({ next, number, total }: CaseNextProps) {
  return (
    <Link className={styles.next} href={`/projects/${next.slug}`} data-cursor>
      <div className="wrap">
        <div className={styles.k}>
          Projet suivant — {number} / {total}
        </div>
        <div className={styles.t}>
          {next.title} <span className={styles.arr}>↗</span>
        </div>
      </div>
    </Link>
  );
}
