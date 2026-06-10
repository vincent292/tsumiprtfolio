import { AdminPlaceholder } from "@/components/AdminPlaceholder";

export default function AdminPage() {
  return (
    <AdminPlaceholder
      eyebrow="Próximamente"
      title="Panel de administración de Tsumi"
      description="Este espacio queda listo para conectar autenticación, CRUDs y contenido administrable sin tocar la capa visual del sitio público."
      bullets={[
        "Gestión de proyectos, logos y enlaces externos.",
        "Administración de servicios, tecnologías, textos e imágenes.",
        "Base para blog, leads y futuras integraciones internas.",
      ]}
    />
  );
}
