import type { Project } from "../../_data/projects";
import styles from "./Case.module.css";

export default function CaseHero({ project }: { project: Project }) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} data-parallax="0.16" />
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.cat}>{project.category}</div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.lead}>{project.lead}</p>
        <div className={`${styles.meta} reveal`}>
          <div className={styles.cell}>
            <div className={styles.k}>Rôle</div>
            <div className={styles.v}>{project.meta.role}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.k}>Année</div>
            <div className={styles.v}>{project.meta.year}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.k}>Durée</div>
            <div className={styles.v}>{project.meta.duration}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.k}>Stack</div>
            <div className={`${styles.v} ${styles.vTags}`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
