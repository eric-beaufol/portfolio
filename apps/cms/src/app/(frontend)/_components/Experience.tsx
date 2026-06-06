import { experience } from "../_data/site";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className={`reveal`} style={{ marginBottom: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="section-title">{experience.title}</h2>
        </div>
        <div className={styles.timeline}>
          {experience.items.map((item) => (
            <div key={item.role + item.period} className={`${styles.xp} reveal`} data-cursor>
              <div className={styles.period}>{item.period}</div>
              <div>
                <div className={styles.role}>{item.role}</div>
                <div className={styles.company}>{item.company}</div>
              </div>
              <div className={styles.desc}>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
