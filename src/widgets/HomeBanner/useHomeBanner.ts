"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function useHomeBanner() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".home-banner-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return { ref };
}
