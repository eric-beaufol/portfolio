import { notFound } from "next/navigation";

import ScrollEffects from "../../_components/ScrollEffects";
import Footer from "../../_components/Footer";
import Casebar from "../../_components/case/Casebar";
import CaseHero from "../../_components/case/CaseHero";
import CaseVisual from "../../_components/case/CaseVisual";
import CaseBlock from "../../_components/case/CaseBlock";
import CaseList from "../../_components/case/CaseList";
import CaseGallery from "../../_components/case/CaseGallery";
import CaseResults from "../../_components/case/CaseResults";
import CaseNext from "../../_components/case/CaseNext";
import {
  getNextProject,
  getProjectBySlug,
  getProjectNumber,
  projects,
  totalProjects,
} from "../../_data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Léa Fontaine`,
    description: project.lead,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const indexLabel = `Projet ${getProjectNumber(slug)} / ${totalProjects()}`;

  return (
    <>
      <ScrollEffects />
      <Casebar indexLabel={indexLabel} />
      <CaseHero project={project} />

      <section className="section" style={{ paddingTop: "clamp(2.5rem, 6vw, 4rem)" }}>
        <div className="wrap">
          <CaseVisual label={`aperçu — ${project.slug}-hero.png`} reveal />
        </div>
      </section>

      <section className="section" style={{ paddingBlock: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="wrap">
          <CaseBlock label="Contexte" heading={project.context.heading}>
            <p>{project.context.body}</p>
          </CaseBlock>
          <CaseBlock label="Le défi" heading={project.challenge.heading}>
            <CaseList variant="numbered" items={project.challenge.items} />
          </CaseBlock>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: "clamp(1rem, 3vw, 2rem)" }}>
        <div className="wrap">
          <CaseGallery labels={project.gallery} />
        </div>
      </section>

      <section className="section" style={{ paddingBlock: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="wrap">
          <CaseBlock label="L'approche" heading={project.approach.heading}>
            <p>{project.approach.body}</p>
            <CaseList variant="arrow" items={project.approach.points} />
          </CaseBlock>
          <CaseBlock label="Résultats" heading={project.results.heading}>
            <CaseResults stats={project.results.stats} />
          </CaseBlock>
        </div>
      </section>

      <CaseNext next={next} />
      <Footer lastLink={{ label: "Accueil ↑", href: "/" }} />
    </>
  );
}
