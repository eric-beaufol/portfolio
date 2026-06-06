import type { Stat } from "../../_data/projects";
import styles from "./Case.module.css";

/**
 * Grille de 3 stats chiffrées animées. La classe globale `s` marque le suffixe
 * pour le moteur count-up (ScrollEffects) ; `styles.s` porte le style accentué.
 */
export default function CaseResults({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.results}>
      {stats.map((stat) => (
        <div key={stat.caption} className={styles.r}>
          <div className={styles.big} data-count={stat.value}>
            {stat.suffix ? (
              <span className={`s ${styles.s}`}>{stat.suffix}</span>
            ) : null}
          </div>
          <div className={styles.cap}>{stat.caption}</div>
        </div>
      ))}
    </div>
  );
}
