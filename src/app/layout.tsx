import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08111d",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default:
      "Tsumi | Diseño y desarrollo web para negocios que necesitan una presencia sólida",
    template: "%s | Tsumi",
  },
  description:
    "Tsumi diseña y desarrolla sitios corporativos, plataformas y sistemas web con una dirección visual seria y una base lista para crecer.",
  keywords: [
    "Tsumi",
    "desarrollo web",
    "sitios corporativos",
    "sistemas web",
    "CMS",
    "panel administrativo",
    "Next.js",
    "software a medida",
  ],
  applicationName: "Tsumi",
  category: "technology",
  openGraph: {
    title: "Tsumi",
    description:
      "Diseño y desarrollo web serio para empresas, instituciones y productos que necesitan verse mejor y operar con más claridad.",
    siteName: "Tsumi",
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsumi",
    description:
      "Sitios corporativos, sistemas web y productos digitales diseñados con criterio visual y técnico.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {props.children}
      </body>
    </html>
  );
}
