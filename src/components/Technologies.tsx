import { technologyGroups } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="tecnologias" className="bg-[#152027] py-12 text-white md:py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="text-xs font-semibold uppercase text-[#8dd1db]">
            Tecnologías
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
            Stack sobrio para entregar rápido y mantener ordenado
          </h2>
          <p className="mt-4 text-base leading-8 text-white/68 md:text-lg">
            Next.js, TypeScript y Tailwind para la interfaz; Node, NestJS, PHP o
            Supabase cuando el proyecto necesita lógica, datos e integraciones.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {technologyGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-lg border border-white/12 bg-white/8 p-5"
              data-stagger-item
            >
              <h3 className="font-display text-xl font-semibold leading-tight text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
