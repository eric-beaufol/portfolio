import { stack } from "../_data/site";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          <span className="eyebrow">{stack.eyebrow}</span>
          <h2 className="section-title">{stack.title}</h2>
        </div>
        <div className={`${styles.grid} reveal`}>
          {stack.cards.map((card) => (
            <div key={card.category} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.n}>{card.n}</span> {card.category}
              </div>
              <ul>
                {card.skills.map((skill) => (
                  <li key={skill.name}>
                    {skill.name} <span className={styles.lvl}>{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
