import type { Service } from "@/data/services";
import { AppIcon, CheckIcon } from "@/lib/icons";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="rounded-lg border border-slate-950/10 bg-white p-5 shadow-sm transition hover:border-[#0b6f78]/30 hover:shadow-lg"
      data-stagger-item
    >
      <div className="inline-flex rounded-md bg-[#e8f3f4] p-2.5 text-[#0b6f78]">
        <AppIcon name={service.icon} className="size-5" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-slate-950">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.description}
      </p>
      <div className="mt-4 grid gap-2">
        {service.highlights.map((item) => (
          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-0.5 rounded-md bg-[#f0ece3] p-1 text-[#0b6f78]">
              <CheckIcon className="size-3.5" />
            </span>
            <span className="leading-6 text-slate-600">{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
