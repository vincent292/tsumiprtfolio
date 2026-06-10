import type { IconName } from "@/lib/icons";

export type Differentiator = {
  title: string;
  description: string;
  icon: IconName;
};

export const differentiators: Differentiator[] = [
  {
    title: "Secciones mejor pensadas",
    description:
      "No llenamos una landing con bloques vacios. Priorizamos lo que la marca necesita mostrar para que el sitio tenga sentido.",
    icon: "spark",
  },
  {
    title: "Logos, estados y enlaces reales",
    description:
      "El portafolio usa marcas visibles, URLs reales y estados concretos para que la confianza venga de hechos y no de adornos.",
    icon: "layers",
  },
  {
    title: "Contenido mas legible",
    description:
      "Trabajamos titulos, descripciones, espaciado y orden visual para que el usuario entienda rapido de que trata el proyecto.",
    icon: "panel",
  },
  {
    title: "Paneles cuando hacen falta",
    description:
      "Si el proyecto necesita usuarios, formularios, contenidos o modulos administrables, dejamos la base lista para crecer.",
    icon: "workflow",
  },
  {
    title: "Responsive de verdad",
    description:
      "La web se revisa para que no dependa solo del desktop y siga viendose clara cuando cambia el ancho de pantalla.",
    icon: "plug",
  },
  {
    title: "Codigo ordenado",
    description:
      "Componentes reutilizables, datos separados y estructura limpia para ajustar textos, links o logos sin romper la vista.",
    icon: "bot",
  },
];
