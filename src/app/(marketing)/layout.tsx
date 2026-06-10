import { Footer } from "@/components/Footer";
import { MarketingMotion } from "@/components/MarketingMotion";
import { Navbar } from "@/components/Navbar";

export default function MarketingLayout(props: LayoutProps<"/">) {
  return (
    <div className="page-background overflow-x-clip">
      <MarketingMotion />
      <a
        href="#contenido"
        className="sr-only absolute left-4 top-4 z-50 rounded-md border border-slate-900/10 bg-white px-4 py-2 text-sm text-slate-950 focus:not-sr-only"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <div className="relative z-10 pt-20 md:pt-24">{props.children}</div>
      <Footer />
    </div>
  );
}
