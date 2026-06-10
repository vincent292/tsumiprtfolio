import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="proyectos" className="py-12 md:py-16">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            eyebrow="Portafolio"
            title="Trabajos visibles, con enlaces reales"
            description="Aquí no hay marcas inventadas: cada tarjeta abre el sitio correspondiente y usa el logo real que ya está en el proyecto."
            align="left"
          />
          <a
            href="#contacto"
            className="inline-flex w-fit rounded-md border border-slate-950/10 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-[#0b6f78]/30 hover:text-[#0b6f78]"
            data-reveal
          >
            Revisar un proyecto nuevo
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
