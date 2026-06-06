import Link from "next/link";
import type { Project } from "../../_data/projects";
import { getProjectNumber, totalProjects } from "../../_data/projects";
import styles from "./Case.module.css";

/** Grand lien pleine largeur vers le projet suivant (boucle). */
export default function CaseNext({ next }: { next: Project }) {
  return (
    <Link
      className={styles.next}
      href={`/projects/${next.slug}`}
      data-cursor
    >
      <div className="wrap">
        <div className={styles.k}>
          Projet suivant — {getProjectNumber(next.slug)} / {totalProjects()}
        </div>
        <div className={styles.t}>
          {next.title} <span className={styles.arr}>↗</span>
        </div>
      </div>
    </Link>
  );
}
