"use client";

import { useState } from "react";
import Image from "next/image";

import type { Project } from "@/data/projects";
import { ArrowUpRightIcon } from "@/lib/icons";
import { cn, getDomainLabel, getInitials } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const initials = project.fallback ?? getInitials(project.name);
  const showFallback = !project.logo || logoFailed;
  const logoSrc = project.logo ?? "";
  const toneClassName = {
    published: "bg-[#e8f4ef] text-[#14623f]",
    active: "bg-[#fff0d9] text-[#8a5314]",
    complete: "bg-[#e8f3f4] text-[#0b6f78]",
  }[project.tone];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex min-h-[21rem] flex-col rounded-lg border border-slate-950/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0b6f78]/35 hover:shadow-xl"
      data-stagger-item
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 min-w-28 items-center justify-start rounded-md border border-slate-950/10 bg-[#f8f5ef] px-3">
          {showFallback ? (
            <span className="font-display text-lg font-semibold text-slate-950">
              {initials}
            </span>
          ) : (
            <Image
              src={logoSrc}
              alt={`${project.name} logo`}
              width={150}
              height={48}
              className="max-h-9 w-auto max-w-full object-contain object-left"
              onError={() => setLogoFailed(true)}
              unoptimized
            />
          )}
        </div>
        <span
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-semibold uppercase",
            toneClassName
          )}
        >
          {project.status}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-sm font-semibold text-[#0b6f78]">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-slate-950">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.highlights.map((item) => (
          <span
            key={item}
            className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm font-semibold text-slate-950">
        <span className="truncate text-slate-500">{getDomainLabel(project.url)}</span>
        <span className="inline-flex shrink-0 items-center gap-2 text-[#0b6f78]">
          Abrir
          <ArrowUpRightIcon className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
