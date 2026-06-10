import { processSteps } from "@/data/process";

import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="proceso" className="py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Proceso"
          title="De idea suelta a sitio publicable"
          description="La meta es que cada entrega tenga dirección visual, estructura técnica y contenido suficiente para salir a producción con seguridad."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5" data-stagger>
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-slate-950/10 bg-white p-5 shadow-sm"
              data-stagger-item
            >
              <span className="inline-flex rounded-md bg-[#e8f3f4] px-2.5 py-1 text-xs font-semibold text-[#0b6f78]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
