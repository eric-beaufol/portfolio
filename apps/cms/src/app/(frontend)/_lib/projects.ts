import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Media, Project } from "@/payload-types";

/** Normalise un champ upload (number | Media | null) en Media peuplé ou null. */
export const asMedia = (m?: number | Media | null): Media | null =>
  m && typeof m === "object" ? m : null;

/** Récupère les projets publiés, triés par `order` croissant (Local API). */
export async function getPublishedProjects(): Promise<Project[]> {
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "projects",
    where: { status: { equals: "published" } },
    sort: "order",
    depth: 1,
    limit: 100,
    overrideAccess: false,
  });
  return docs;
}

const pad2 = (n: number) => String(n).padStart(2, "0");

export const findProject = (
  projects: Project[],
  slug: string,
): Project | undefined => projects.find((p) => p.slug === slug);

/** Index 1-based formaté (ex. « 01 ») d'après l'ordre de la liste. */
export const projectNumber = (projects: Project[], slug: string): string => {
  const i = projects.findIndex((p) => p.slug === slug);
  return pad2(i < 0 ? 0 : i + 1);
};

/** Projet suivant (boucle sur le premier après le dernier). */
export const nextProject = (projects: Project[], slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const totalLabel = (projects: Project[]): string =>
  pad2(projects.length);

/** Tags (technologies[].name) sous forme de tableau de strings. */
export const projectTags = (project: Project): string[] =>
  (project.technologies ?? []).map((t) => t.name);
