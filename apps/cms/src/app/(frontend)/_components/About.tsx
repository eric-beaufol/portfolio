import type { Home } from "@/payload-types";
import LexicalContent from "./LexicalContent";
import styles from "./About.module.css";

export default function About({ about }: { about: Home["about"] }) {
  const stats = about?.stats ?? [];

  return (
    <section className="section" id="about">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <span className="eyebrow reveal">{about?.eyebrow}</span>
          <div className={`${styles.body} reveal`}>
            <LexicalContent data={about?.body} />
          </div>
        </div>
        <div className="reveal">
          <div className={styles.stats} data-stagger>
            {stats.map((stat) => (
              <div key={stat.id ?? stat.label} className={styles.stat}>
                <div className={styles.num} data-count={stat.value}>
                  <span className={`suffix ${styles.suffix}`}>
                    {stat.suffix}
                  </span>
                </div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
