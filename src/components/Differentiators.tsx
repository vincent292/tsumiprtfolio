import { differentiators } from "@/data/differentiators";
import { AppIcon } from "@/lib/icons";

import { SectionHeading } from "./SectionHeading";

export function Differentiators() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Enfoque"
          title="Lo que cuidamos para que no parezca una plantilla"
          description="Trabajamos sobre jerarquía, contenido, navegación, logos, estados, enlaces y responsive. Esas piezas pequeñas son las que hacen que una web transmita confianza."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-950/10 bg-white p-5 shadow-sm transition hover:border-[#0b6f78]/30 hover:shadow-lg"
              data-stagger-item
            >
              <div className="mb-4 inline-flex rounded-md bg-[#e8f3f4] p-2.5 text-[#0b6f78]">
                <AppIcon name={item.icon} className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
