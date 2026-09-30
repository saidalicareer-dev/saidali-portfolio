import Hero from "../components/Hero";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-10">
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
