import Link from "next/link";
import { projects, getProjectNumber } from "../_data/projects";
import { projectsSection } from "../_data/site";
import styles from "./ProjectsList.module.css";

export default function ProjectsList() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className={`${styles.sectionHead} reveal`}>
          <div>
            <span className="eyebrow">{projectsSection.eyebrow}</span>
            <h2 className="section-title">{projectsSection.title}</h2>
          </div>
          <span className={styles.count}>{projectsSection.count}</span>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              className={`${styles.project} reveal`}
              href={`/projects/${project.slug}`}
              data-cursor
            >
              <span className={styles.idx}>/{getProjectNumber(project.slug)}</span>
              <div className={styles.main}>
                <div className={styles.title}>
                  {project.title} <span className={styles.arrow}>↗</span>
                </div>
                <p className={styles.desc}>{project.cardDescription}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.shot}>
                <div className={styles.ph}>
                  <span className={styles.phLabel}>
                    aperçu — {project.slug}.png
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
