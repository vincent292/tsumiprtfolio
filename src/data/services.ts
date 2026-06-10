import type { IconName } from "@/lib/icons";

export type Service = {
  title: string;
  description: string;
  icon: IconName;
  highlights: string[];
};

export const services: Service[] = [
  {
    title: "Sitios corporativos y landing pages",
    description:
      "Disenio y desarrollo de sitios que ayudan a presentar mejor la empresa, ordenar el mensaje y convertir con mas claridad.",
    icon: "spark",
    highlights: [
      "Jerarquia visual solida",
      "Copy mas claro",
      "SEO tecnico base",
    ],
  },
  {
    title: "Sistemas web a medida",
    description:
      "Plataformas construidas alrededor de procesos reales, permisos, flujos internos y operacion diaria del negocio.",
    icon: "layers",
    highlights: [
      "Logica de negocio",
      "Roles y permisos",
      "Escalabilidad tecnica",
    ],
  },
  {
    title: "CMS y paneles administrativos",
    description:
      "Backoffices preparados para administrar contenido, catalogos, estados, imagenes y datos sin tocar el codigo.",
    icon: "panel",
    highlights: [
      "CRUDs por modulo",
      "Contenido administrable",
      "Base preparada para crecer",
    ],
  },
  {
    title: "Sistemas para clinicas",
    description:
      "Productos con foco en presencia profesional, comunicacion con pacientes, agenda y organizacion interna.",
    icon: "pulse",
    highlights: ["Sitio profesional", "Agenda y contacto", "Orden de contenidos"],
  },
  {
    title: "Restaurantes y negocios de atencion",
    description:
      "Experiencias web pensadas para mostrar menu, reservas, pedidos o informacion clave sin friccion.",
    icon: "utensils",
    highlights: ["Menus digitales", "Reservas y pedidos", "Experiencia movil"],
  },
  {
    title: "Constructoras e inmobiliarias",
    description:
      "Sitios y plataformas comerciales para mostrar proyectos, propiedades, renders y captacion de contactos.",
    icon: "building",
    highlights: [
      "Portafolio comercial",
      "Galerias y fichas",
      "Generacion de leads",
    ],
  },
  {
    title: "Portales de usuarios y clientes",
    description:
      "Areas privadas para perfiles, historial, documentos, seguimiento y acciones seguras dentro del producto.",
    icon: "users",
    highlights: [
      "Accesos privados",
      "Documentos y estados",
      "Experiencias seguras",
    ],
  },
];
