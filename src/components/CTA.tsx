import { siteConfig } from "@/data/site";
import { ArrowUpRightIcon, CheckIcon } from "@/lib/icons";

export function CTA() {
  return (
    <section id="contacto" className="py-12 md:py-16">
      <div className="section-shell">
        <div className="rounded-lg border border-slate-950/10 bg-white p-6 shadow-sm md:p-8" data-reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase text-[#0b6f78]">
                Contacto
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Muestrame que quieres publicar, vender o administrar.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Puede ser una landing, una web institucional, una plataforma con
                usuarios, un portal educativo o un panel. Lo importante es
                aterrizar bien que debe resolver antes de diseniar pantallas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.contact.meetingUrl}
                  className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b6f78]"
                >
                  Escribir por correo
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-950/10 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-[#0b6f78]/30 hover:text-[#0b6f78]"
                >
                  WhatsApp
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-3" data-stagger>
              {siteConfig.ctaHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-[#f8fafc] p-4"
                  data-stagger-item
                >
                  <span className="mt-0.5 rounded-md bg-white p-1.5 text-[#0b6f78]">
                    <CheckIcon className="size-4" />
                  </span>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-lg border border-dashed border-slate-950/15 p-4 text-sm font-semibold text-slate-950 transition hover:border-[#0b6f78]/30 hover:text-[#0b6f78]"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
