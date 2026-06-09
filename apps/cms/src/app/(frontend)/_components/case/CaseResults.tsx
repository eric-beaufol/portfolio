import styles from "./Case.module.css";

type Stat = {
  value: string;
  suffix?: string | null;
  caption: string;
};

/**
 * Grille de stats chiffrées animées. La classe globale `s` marque le suffixe
 * pour le moteur count-up (ScrollEffects) ; `styles.s` porte le style accentué.
 */
export default function CaseResults({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.results}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.r}>
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
