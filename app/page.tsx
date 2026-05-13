import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/sections/footer";
import { Marquee } from "@/components/marquee";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Marquee
        items={[
          "Available for Summer 2027",
          "Building with AI & ML",
          "University of Pittsburgh '27",
          "Currently @ Thermo Fisher Scientific",
          "Open to collaboration",
        ]}
      />
      <About />
      <Education />
      <ProjectsPreview />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
