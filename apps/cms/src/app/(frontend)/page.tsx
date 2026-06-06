import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import About from "./_components/About";
import ProjectsList from "./_components/ProjectsList";
import Experience from "./_components/Experience";
import Stack from "./_components/Stack";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ScrollEffects from "./_components/ScrollEffects";
import { getPublishedProjects } from "./_lib/projects";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await getPublishedProjects();

  return (
    <>
      <ScrollEffects />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <ProjectsList projects={projects} />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
