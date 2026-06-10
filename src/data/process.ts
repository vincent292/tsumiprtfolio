export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Revision",
    description:
      "Vemos la necesidad real: captar clientes, explicar servicios, mostrar programas, administrar contenido o abrir un panel interno.",
  },
  {
    title: "Estructura",
    description:
      "Ordenamos menu, secciones, llamadas a la accion, formularios, estados y rutas para que el sitio tenga una base clara.",
  },
  {
    title: "Interfaz",
    description:
      "Definimos tipografia, ritmo visual, bloques, colores y jerarquia para que la marca se vea mas seria y entendible.",
  },
  {
    title: "Desarrollo",
    description:
      "Construimos la web, el sistema o el panel con componentes reutilizables y datos separados para editar luego sin friccion.",
  },
  {
    title: "Publicacion",
    description:
      "Probamos responsive, enlaces, formularios, textos y deploy para salir a produccion con una entrega realmente usable.",
  },
];
