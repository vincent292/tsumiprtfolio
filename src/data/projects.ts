export type ProjectStatus = "En desarrollo" | "Publicado" | "Terminado";

export type ProjectTone = "active" | "published" | "complete";

export type Project = {
  name: string;
  category: string;
  description: string;
  logo?: string;
  fallback?: string;
  url: string;
  status: ProjectStatus;
  highlights: string[];
  tone: ProjectTone;
};

export const projects: Project[] = [
  {
    name: "Dra. Ballesteros",
    category: "Medicina estética y marca personal",
    description:
      "Sitio en producción para una doctora especialista en medicina estética, armonización facial y medicina ortomolecular en Bolivia.",
    logo: "/logos/logodra.svg",
    fallback: "DB",
    url: "https://www.draballesteros.com/",
    status: "Publicado",
    highlights: ["Marca médica", "Servicios claros", "Contacto directo"],
    tone: "published",
  },
  {
    name: "ESAM Talentum",
    category: "Bolsa de trabajo y talento humano",
    description:
      "Plataforma publicada para ofertas laborales, perfiles profesionales, empresas y oportunidades conectadas con la comunidad ESAM.",
    logo: "/logos/logoesamtalentum.png",
    fallback: "ET",
    url: "https://esamtalentum.com/",
    status: "Publicado",
    highlights: ["Ofertas laborales", "Empresas", "Perfiles ESAM"],
    tone: "published",
  },
  {
    name: "ESAM",
    category: "Escuela de negocios y posgrados",
    description:
      "Portal institucional con posgrados, eventos, actividades, biblioteca virtual, Moodle y contenidos para la comunidad académica.",
    logo: "/logos/logoesam.png",
    fallback: "ES",
    url: "https://esam.edu.bo/",
    status: "Publicado",
    highlights: ["Posgrados", "Eventos", "Comunidad académica"],
    tone: "published",
  },
  {
    name: "Constructora",
    category: "Sitio comercial para construcción",
    description:
      "Proyecto en desarrollo para presentar servicios, generar confianza comercial y mostrar una marca constructora con presencia sólida.",
    logo: "/logos/logoconstructora.png",
    fallback: "CO",
    url: "https://constructora-rust-five.vercel.app/",
    status: "En desarrollo",
    highlights: ["Servicios", "Confianza", "Contacto comercial"],
    tone: "active",
  },
  {
    name: "Eureka",
    category: "Producto digital terminado",
    description:
      "Proyecto terminado con una interfaz directa para explicar la propuesta, ordenar la navegación y mantener una experiencia simple.",
    logo: "/logos/logoeureka.png",
    fallback: "EU",
    url: "https://eureka-nine-eta.vercel.app/",
    status: "Terminado",
    highlights: ["Interfaz directa", "Deploy listo", "Producto cerrado"],
    tone: "complete",
  },
];
