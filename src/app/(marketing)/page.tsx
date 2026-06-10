import { CTA } from "@/components/CTA";
import { Differentiators } from "@/components/Differentiators";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";

export default function HomePage() {
  return (
    <main id="contenido" className="relative">
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Technologies />
      <Differentiators />
      <CTA />
    </main>
  );
}
