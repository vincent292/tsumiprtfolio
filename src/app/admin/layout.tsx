import Link from "next/link";

export const metadata = {
  title: "Admin",
  description: "Base inicial del futuro panel de administración de Tsumi.",
};

const adminLinks = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/projects", label: "Proyectos" },
  { href: "/admin/services", label: "Servicios" },
];

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040610_0%,#0a1020_100%)] text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              Tsumi Admin
            </p>
            <p className="text-sm text-white/65">
              Estructura inicial para el futuro CMS interno.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-cyan-300/40 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Volver al sitio
            </Link>
          </div>
        </div>
      </header>
      <main className="section-shell py-14">{children}</main>
    </div>
  );
}
