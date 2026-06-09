import { getPayload } from "payload";
import configPromise from "@payload-config";

import { seedProjects } from "./projects.seed";
import { seedHome, type Seg } from "./home.seed";

/** Construit un état richText lexical mono-paragraphe depuis du texte simple. */
const richText = (text: string) => paragraphs([[{ text }]]);

/** Nœud texte lexical depuis un segment (gras + couleur inline via state `$`). */
const textNode = (s: Seg) => ({
  type: "text",
  detail: 0,
  format: s.bold ? 1 : 0,
  mode: "normal",
  style: "",
  text: s.text,
  version: 1,
  ...(s.color ? { $: { color: s.color } } : {}),
});

const paragraphNode = (segs: Seg[]) => ({
  type: "paragraph",
  format: "" as const,
  indent: 0,
  version: 1,
  direction: "ltr" as const,
  textFormat: 0,
  textStyle: "",
  children: segs.map(textNode),
});

/** Document richText lexical depuis une liste de paragraphes (segments). */
const paragraphs = (paras: Seg[][]) => ({
  root: {
    type: "root",
    format: "" as const,
    indent: 0,
    version: 1,
    direction: "ltr" as const,
    children: paras.map(paragraphNode),
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

  // Global accueil
  await payload.updateGlobal({
    slug: "home",
    data: {
      identity: seedHome.identity,
      hero: {
        status: seedHome.hero.status,
        titleLine1: seedHome.hero.titleLine1,
        titleOutline: seedHome.hero.titleOutline,
        titleAccent: seedHome.hero.titleAccent,
        scrollLabel: seedHome.hero.scrollLabel,
        lead: paragraphs([seedHome.hero.lead]),
      },
      marquee: seedHome.marquee.map((item) => ({ item })),
      about: {
        eyebrow: seedHome.about.eyebrow,
        body: paragraphs(seedHome.about.paragraphs),
        stats: seedHome.about.stats,
      },
      projects: seedHome.projects,
      experience: {
        eyebrow: seedHome.experience.eyebrow,
        title: seedHome.experience.title,
        items: seedHome.experience.items.map((it) => ({
          period: it.period,
          role: it.role,
          company: it.company,
          points: it.points.map((text) => ({ text })),
        })),
      },
      stack: seedHome.stack,
      contact: {
        eyebrow: seedHome.contact.eyebrow,
        lines: seedHome.contact.lines.map((text) => ({ text })),
        linkText: seedHome.contact.linkText,
        sub: seedHome.contact.sub,
        links: seedHome.contact.links,
      },
      footer: seedHome.footer,
    },
  });
  payload.logger.info("↻ Global « home » mis à jour.");

  payload.logger.info(
    `✓ Seed terminé (${seedProjects.length} projets + accueil).`,
  );
  process.exit(0);
};

await seed();
