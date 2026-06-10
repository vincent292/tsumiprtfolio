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
      "Diseño y desarrollo de sitios que ayudan a presentar mejor la empresa, ordenar el mensaje y convertir con más claridad.",
    icon: "spark",
    highlights: [
      "Jerarquía visual sólida",
      "Copy más claro",
      "SEO técnico base",
    ],
  },
  {
    title: "Sistemas web a medida",
    description:
      "Plataformas construidas alrededor de procesos reales, permisos, flujos internos y operación diaria del negocio.",
    icon: "layers",
    highlights: [
      "Lógica de negocio",
      "Roles y permisos",
      "Escalabilidad técnica",
    ],
  },
  {
    title: "CMS y paneles administrativos",
    description:
      "Backoffices preparados para administrar contenido, catálogos, estados, imágenes y datos sin tocar el código.",
    icon: "panel",
    highlights: [
      "CRUDs por módulo",
      "Contenido administrable",
      "Base preparada para crecer",
    ],
  },
  {
    title: "Sistemas para clínicas",
    description:
      "Productos con foco en presencia profesional, comunicación con pacientes, agenda y organización interna.",
    icon: "pulse",
    highlights: ["Sitio profesional", "Agenda y contacto", "Orden de contenidos"],
  },
  {
    title: "Restaurantes y negocios de atención",
    description:
      "Experiencias web pensadas para mostrar menú, reservas, pedidos o información clave sin fricción.",
    icon: "utensils",
    highlights: ["Menús digitales", "Reservas y pedidos", "Experiencia móvil"],
  },
  {
    title: "Constructoras e inmobiliarias",
    description:
      "Sitios y plataformas comerciales para mostrar proyectos, propiedades, renders y captación de contactos.",
    icon: "building",
    highlights: [
      "Portafolio comercial",
      "Galerías y fichas",
      "Generación de leads",
    ],
  },
  {
    title: "Portales de usuarios y clientes",
    description:
      "Áreas privadas para perfiles, historial, documentos, seguimiento y acciones seguras dentro del producto.",
    icon: "users",
    highlights: [
      "Accesos privados",
      "Documentos y estados",
      "Experiencias seguras",
    ],
  },
  {
    title: "Automatización e integración con APIs",
    description:
      "Conexiones con servicios externos para reducir trabajo manual, sincronizar datos y unificar procesos.",
    icon: "workflow",
    highlights: [
      "APIs externas",
      "Flujos automáticos",
      "Menos tareas manuales",
    ],
  },
  {
    title: "Chatbots e inteligencia artificial",
    description:
      "Experiencias conversacionales y funciones de IA pensadas para utilidad real, no solo efecto visual.",
    icon: "bot",
    highlights: ["Asistentes web", "IA aplicada", "Procesos guiados"],
  },
  {
    title: "WhatsApp, pagos, mapas y almacenamiento",
    description:
      "Integraciones con herramientas concretas del negocio para vender, atender, ubicar y operar sin fricción.",
    icon: "plug",
    highlights: [
      "WhatsApp Business",
      "Pagos y mapas",
      "Storage y bases de datos",
    ],
  },
];
