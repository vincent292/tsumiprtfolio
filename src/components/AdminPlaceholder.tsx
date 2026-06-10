import Link from "next/link";

type AdminPlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function AdminPlaceholder({
  eyebrow,
  title,
  description,
  bullets,
}: AdminPlaceholderProps) {
  return (
    <section className="glass-card overflow-hidden rounded-[2rem] p-8 md:p-10">
      <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
        {eyebrow}
      </div>
      <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
        {description}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {bullets.map((bullet) => (
          <article
            key={bullet}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/72"
          >
            {bullet}
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Ver landing pública
        </Link>
        <Link
          href="/admin/projects"
          className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan-300/35 hover:text-white"
        >
          Explorar módulos
        </Link>
      </div>
    </section>
  );
}
