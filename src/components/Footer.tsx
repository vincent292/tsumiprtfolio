import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-950/10 bg-[#152027] pb-8 pt-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="#inicio" className="font-display text-2xl font-semibold">
              {siteConfig.name}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/68">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-white/58">
              Links rápidos
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-white/58">
              Servicios
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              {services.slice(0, 4).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-white/58">
              Proyectos
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              {projects.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 text-sm text-white/52 md:grid-cols-[1fr_auto] md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Diseño y desarrollo
            web con criterio, contenido real y estructura para crecer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
            {siteConfig.contact.socials.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
