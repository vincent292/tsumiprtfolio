import { AdminPlaceholder } from "@/components/AdminPlaceholder";

export default function AdminProjectsPage() {
  return (
    <AdminPlaceholder
      eyebrow="Módulo futuro"
      title="Administración de proyectos"
      description="Aquí podrá vivir el CRUD de portafolio con estado, cliente, categoría, enlaces, logos e imágenes por proyecto."
      bullets={[
        "Formulario para alta y edición de proyectos.",
        "Control de estado: prototipo, publicado o en desarrollo.",
        "Soporte para assets y contenidos conectados a un CMS.",
      ]}
    />
  );
}
