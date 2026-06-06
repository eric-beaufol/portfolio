import { getPayload } from "payload";
import configPromise from "@payload-config";

import { seedProjects } from "./projects.seed";

/** Construit un état richText lexical mono-paragraphe depuis du texte simple. */
const richText = (text: string) => ({
  root: {
    type: "root",
    format: "" as const,
    indent: 0,
    version: 1,
    direction: "ltr" as const,
    children: [
      {
        type: "paragraph",
        format: "" as const,
        indent: 0,
        version: 1,
        direction: "ltr" as const,
        textFormat: 0,
        textStyle: "",
        children: [
          {
            type: "text",
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text,
            version: 1,
          },
        ],
      },
    ],
  },
});

const seed = async () => {
  const payload = await getPayload({ config: configPromise });

  for (const p of seedProjects) {
    const data = {
      title: p.title,
      slug: p.slug,
      status: "published" as const,
      order: p.order,
      category: p.category,
      lead: p.lead,
      cardDescription: p.cardDescription,
      technologies: p.tags.map((name) => ({ name })),
      meta: p.meta,
      context: { heading: p.context.heading, body: richText(p.context.body) },
      challenge: {
        heading: p.challenge.heading,
        items: p.challenge.items.map((text) => ({ text })),
      },
      approach: {
        heading: p.approach.heading,
        body: richText(p.approach.body),
        points: p.approach.points.map((text) => ({ text })),
      },
      results: {
        heading: p.results.heading,
        stats: p.results.stats.map((s) => ({
          value: s.value,
          suffix: s.suffix,
          caption: s.caption,
        })),
      },
    };

    const existing = await payload.find({
      collection: "projects",
      where: { slug: { equals: p.slug } },
      limit: 1,
      depth: 0,
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "projects",
        id: existing.docs[0].id,
        data,
      });
      payload.logger.info(`↻ Projet mis à jour : ${p.slug}`);
    } else {
      await payload.create({ collection: "projects", data });
      payload.logger.info(`＋ Projet créé : ${p.slug}`);
    }
  }

  payload.logger.info(`✓ Seed terminé (${seedProjects.length} projets).`);
  process.exit(0);
};

await seed();
