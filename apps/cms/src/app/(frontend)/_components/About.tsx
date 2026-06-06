import RichText from "./RichText";
import { about } from "../_data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <span className="eyebrow reveal">{about.eyebrow}</span>
          <div className={styles.body}>
            {about.paragraphs.map((segments, i) => (
              <p key={i} className="reveal">
                <RichText segments={segments} />
              </p>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className={styles.stats} data-stagger>
            {about.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
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
