import Image from "next/image";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ArrowUpRightIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-10 pt-8 md:pb-12 md:pt-12"
    >
      <div className="hero-orb left-0 top-10 h-44 w-44 bg-blue-500" data-parallax />
      <div
        className="hero-orb right-10 top-0 h-56 w-56 bg-cyan-400"
        data-parallax
      />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-3xl">
            <p
              className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase text-blue-800"
              data-hero-item
            >
              Sistemas web y páginas a medida
            </p>
            <h1
              className="mt-5 font-display text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
              data-hero-item
            >
              Tsumi construye <span className="text-gradient">sitios y plataformas</span> que representan mejor tu negocio
            </h1>
            <p
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl"
              data-hero-item
            >
              Trabajamos con clínicas, educación, constructoras y productos
              digitales para publicar webs más claras, paneles más útiles y
              experiencias que sí se sienten profesionales.
            </p>
            <div className="mt-7 flex flex-wrap gap-3" data-hero-item>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Ver proyectos
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Solicitar propuesta
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" data-hero-item>
              {siteConfig.heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4" data-hero-item>
            <div className="grid grid-cols-3 gap-3">
              {siteConfig.proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-display text-3xl font-semibold text-slate-950">
                    {point.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Proyectos visibles
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-slate-950">
                  Marcas reales que ya están en producción o desarrollo
                </p>
              </div>
              <div className="grid gap-px bg-slate-200">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 bg-white px-5 py-4 transition hover:bg-blue-50"
                  >
                    <div className="flex h-14 w-28 shrink-0 items-center justify-center rounded-2xl bg-slate-50 px-3">
                      <Image
                        src={project.logo ?? ""}
                        alt={`${project.name} logo`}
                        width={130}
                        height={44}
                        className="max-h-9 w-auto max-w-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-semibold text-slate-950">
                        {project.name}
                      </p>
                      <p className="truncate text-sm text-slate-500">
                        {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-600">
                      {project.status}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
