import { services } from "@/data/services";

import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="servicios" className="bg-white/60 py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servicios"
          title="Qué puede construir Tsumi contigo"
          description="El servicio se define por el problema: presencia profesional, captación, gestión interna, contenido administrable o integraciones con herramientas que ya usa tu equipo."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
