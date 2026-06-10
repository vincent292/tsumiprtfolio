export type TechnologyGroup = {
  category: string;
  items: string[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Frontend y experiencia",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backends y lógica",
    items: ["Node.js", "NestJS", "PHP", "APIs"],
  },
  {
    category: "Datos y despliegue",
    items: ["MySQL", "PostgreSQL", "Supabase", "Cloudflare R2", "Vercel"],
  },
  {
    category: "Herramientas del negocio",
    items: ["WhatsApp Business", "Pagos", "Mapas", "Inteligencia Artificial"],
  },
];
