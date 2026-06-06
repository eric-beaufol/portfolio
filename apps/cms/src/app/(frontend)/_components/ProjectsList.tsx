import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/payload-types";
import { asMedia, projectTags, totalLabel } from "../_lib/projects";
import { projectsSection } from "../_data/site";
import styles from "./ProjectsList.module.css";

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className={`${styles.sectionHead} reveal`}>
          <div>
            <span className="eyebrow">{projectsSection.eyebrow}</span>
            <h2 className="section-title">{projectsSection.title}</h2>
          </div>
          <span className={styles.count}>
            [ {totalLabel(projects)} — études de cas ]
          </span>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.projects}>
          {projects.map((project, i) => {
            const cover = asMedia(project.cover);
            return (
              <Link
                key={project.slug}
                className={`${styles.project} reveal`}
                href={`/projects/${project.slug}`}
                data-cursor
              >
                <span className={styles.idx}>/{pad2(i + 1)}</span>
                <div className={styles.main}>
                  <div className={styles.title}>
                    {project.title} <span className={styles.arrow}>↗</span>
                  </div>
                  {project.cardDescription ? (
                    <p className={styles.desc}>{project.cardDescription}</p>
                  ) : null}
                  <div className={styles.tags}>
                    {projectTags(project).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.shot}>
                  {cover?.url ? (
                    <Image
                      src={cover.url}
                      alt={cover.alt || project.title}
                      fill
                      sizes="(max-width: 880px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className={styles.ph}>
                      <span className={styles.phLabel}>
                        aperçu — {project.slug}.png
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
