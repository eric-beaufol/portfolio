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
import { getHome } from "./_lib/home";

export const revalidate = 60;

export default async function HomePage() {
  const [projects, home] = await Promise.all([
    getPublishedProjects(),
    getHome(),
  ]);

  return (
    <>
      <ScrollEffects />
      <Nav identity={home.identity} />
      <Hero hero={home.hero} name={home.identity.name} />
      <Marquee items={home.marquee} />
      <About about={home.about} />
      <ProjectsList projects={projects} section={home.projects} />
      <Experience experience={home.experience} />
      <Stack stack={home.stack} />
      <Contact contact={home.contact} email={home.identity.email} />
      <Footer footer={home.footer} />
    </>
  );
}
