"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MarketingMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          y: 24,
          scale: 0.985,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.from(element, {
              y: 20,
              scale: 0.99,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform",
            });
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
        const items = container.querySelectorAll<HTMLElement>("[data-stagger-item]");
        if (items.length === 0) {
          return;
        }

        ScrollTrigger.create({
          trigger: container,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.from(items, {
              y: 22,
              scale: 0.99,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform",
            });
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 2.8 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("section") ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
