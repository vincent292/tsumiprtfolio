export const siteConfig = {
  name: "Tsumi",
  tagline:
    "Disenio y desarrollo web para marcas que necesitan una web mejor presentada, formularios que conviertan y paneles que realmente ayuden a operar.",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Contacto", href: "#contacto" },
  ],
  heroPills: [
    "Dra. Ballesteros publicado",
    "ESAM Talentum en linea",
    "Constructora en desarrollo",
  ],
  proofPoints: [
    { value: "5", label: "proyectos visibles" },
    { value: "3", label: "sitios publicados" },
    { value: "1", label: "portal de talento" },
  ],
  futureModules: [
    "Panel administrativo",
    "CMS de contenidos",
    "Integraciones utiles segun el proyecto",
  ],
  ctaHighlights: [
    "Revisamos la web actual, la referencia visual o el flujo que necesitas ordenar.",
    "Definimos secciones, formularios, panel, usuarios o integraciones antes de maquetar.",
    "Publicamos una base que luego puede crecer hacia CMS, reportes o nuevos modulos.",
  ],
  contact: {
    email: "ariasvincent292@gmail.com",
    phone: "79985409",
    meetingUrl:
      "mailto:ariasvincent292@gmail.com?subject=Quiero%20hablar%20con%20Tsumi",
    whatsappUrl:
      "https://wa.me/59179985409?text=Hola%2C%20quiero%20hablar%20de%20un%20proyecto.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Behance", href: "https://www.behance.net" },
    ],
  },
} as const;
