## Tsumi

Landing/portafolio corporativo para Tsumi construido con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y animaciones con GSAP. La base pública ya queda preparada para crecer hacia un CMS o panel interno dentro de `src/app/admin`.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

Scripts útiles:

- `npm run dev`: desarrollo local
- `npm run lint`: revisión de calidad
- `npm run build`: validación de producción
- `npm run start`: levantar la build generada

## Dónde cambiar contenido

- Textos globales, navegación, contacto y redes: `src/data/site.ts`
- Servicios: `src/data/services.ts`
- Proyectos y links externos: `src/data/projects.ts`
- Tecnologías: `src/data/technologies.ts`
- Proceso: `src/data/process.ts`
- Diferenciadores: `src/data/differentiators.ts`
- Logos de proyectos: `public/logos/`

Si un logo no existe o falla, la tarjeta del proyecto muestra un placeholder con iniciales.

## Estructura principal

```txt
src/
  app/
    (marketing)/
      layout.tsx
      page.tsx
    admin/
      layout.tsx
      page.tsx
      projects/page.tsx
      services/page.tsx
    layout.tsx
    globals.css
    opengraph-image.tsx
    robots.ts
  components/
  data/
  lib/
public/
  logos/
```

## Notas

- La landing pública vive en `src/app/(marketing)/page.tsx`.
- El layout compartido con navbar y footer está en `src/app/(marketing)/layout.tsx`.
- La base del futuro CMS interno quedó reservada bajo `src/app/admin`.
- El proyecto usa metadata SEO básica desde `src/app/layout.tsx` y una imagen OG generada en `src/app/opengraph-image.tsx`.
