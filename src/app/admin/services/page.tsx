import { AdminPlaceholder } from "@/components/AdminPlaceholder";

export default function AdminServicesPage() {
  return (
    <AdminPlaceholder
      eyebrow="Módulo futuro"
      title="Administración de servicios"
      description="Ruta reservada para mantener el catálogo comercial actualizado desde un panel interno, sin editar componentes manualmente."
      bullets={[
        "Altas y bajas de servicios visibles en la landing.",
        "Edición de iconos, descripciones y orden de aparición.",
        "Preparación para tarifas, planes y contenido multilenguaje.",
      ]}
    />
  );
}
