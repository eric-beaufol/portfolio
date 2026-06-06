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

export default function HomePage() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <ProjectsList />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
