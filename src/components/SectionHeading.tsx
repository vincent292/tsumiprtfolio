import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
      data-reveal
    >
      <p className="text-xs font-semibold uppercase text-[#0b6f78]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}
