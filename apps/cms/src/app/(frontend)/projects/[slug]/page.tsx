import { notFound } from "next/navigation";

import ScrollEffects from "../../_components/ScrollEffects";
import Footer from "../../_components/Footer";
import LexicalContent from "../../_components/LexicalContent";
import Casebar from "../../_components/case/Casebar";
import CaseHero from "../../_components/case/CaseHero";
import CaseVisual from "../../_components/case/CaseVisual";
import CaseBlock from "../../_components/case/CaseBlock";
import CaseList from "../../_components/case/CaseList";
import CaseGallery from "../../_components/case/CaseGallery";
import CaseResults from "../../_components/case/CaseResults";
import CaseNext from "../../_components/case/CaseNext";
import {
  asMedia,
  findProject,
  getPublishedProjects,
  nextProject,
  projectNumber,
  totalLabel,
} from "../../_lib/projects";
import { getHome } from "../../_lib/home";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getPublishedProjects();
  const project = findProject(projects, slug);
  if (!project) return {};
  return {
    // Le suffixe « — <nom> » est ajouté par le template du layout.
    title: project.title,
    description: project.lead,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [projects, home] = await Promise.all([
    getPublishedProjects(),
    getHome(),
  ]);
  const project = findProject(projects, slug);
  if (!project) notFound();

  const next = nextProject(projects, slug);
  const total = totalLabel(projects);
  const indexLabel = `Projet ${projectNumber(projects, slug)} / ${total}`;

  const coverMedia = asMedia(project.cover);
  const galleryMedia = (project.gallery ?? [])
    .map((g) => asMedia(g.image))
    .filter((m): m is NonNullable<typeof m> => m !== null);

  const challengeItems = (project.challenge?.items ?? []).map((it) => it.text);
  const approachPoints = (project.approach?.points ?? []).map((it) => it.text);

  return (
    <>
      <ScrollEffects />
      <Casebar indexLabel={indexLabel} />
      <CaseHero project={project} />

      <section
        className="section"
        style={{ paddingTop: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        <div className="wrap">
          <CaseVisual
            label={`aperçu — ${project.slug}-hero.png`}
            media={coverMedia}
            reveal
          />
        </div>
      </section>

      <section
        className="section"
        style={{ paddingBlock: "clamp(2rem, 5vw, 4rem)" }}
      >
        <div className="wrap">
          <CaseBlock
            label="Contexte"
            heading={project.context?.heading ?? "Contexte"}
          >
            <LexicalContent data={project.context?.body} />
          </CaseBlock>
          <CaseBlock
            label="Le défi"
            heading={project.challenge?.heading ?? "Le défi"}
          >
            <CaseList variant="numbered" items={challengeItems} />
          </CaseBlock>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingBlock: "clamp(1rem, 3vw, 2rem)" }}
      >
        <div className="wrap">
          <CaseGallery images={galleryMedia} slug={project.slug} />
        </div>
      </section>

      <section
        className="section"
        style={{ paddingBlock: "clamp(2rem, 5vw, 4rem)" }}
      >
        <div className="wrap">
          <CaseBlock
            label="L'approche"
            heading={project.approach?.heading ?? "L'approche"}
          >
            <LexicalContent data={project.approach?.body} />
            <CaseList variant="arrow" items={approachPoints} />
          </CaseBlock>
          {project.results?.stats && project.results?.stats?.length > 0 && (
            <CaseBlock
              label="Résultats"
              heading={project.results?.heading ?? "Résultats"}
            >
              <CaseResults stats={project.results?.stats ?? []} />
            </CaseBlock>
          )}
        </div>
      </section>

      <CaseNext
        next={next}
        number={projectNumber(projects, next.slug)}
        total={total}
      />
      <Footer
        footer={home.footer}
        lastLink={{ label: "Accueil ↑", href: "/" }}
      />
    </>
  );
}
