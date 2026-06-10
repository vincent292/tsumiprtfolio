"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";
import { MenuIcon, XIcon } from "@/lib/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-950/10 bg-[#faf7f0]/88 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 font-display text-sm font-semibold text-white">
              TS
            </span>
            <span className="font-display text-xl font-semibold text-slate-950">
              {siteConfig.name}
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="hidden rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b6f78] md:inline-flex"
          >
            Iniciar proyecto
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex rounded-md border border-slate-950/10 bg-white p-2.5 text-slate-950 md:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav id="mobile-menu" className="border-t border-slate-950/10 py-3 md:hidden">
            <div className="grid gap-1">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-2 rounded-md bg-slate-950 px-3 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Iniciar proyecto
              </a>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
