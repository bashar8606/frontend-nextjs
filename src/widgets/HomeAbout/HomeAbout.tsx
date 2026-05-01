"use client";
import type { HomeAboutData } from "./types";
import { useHomeAbout } from "./useHomeAbout";
import Image from "next/image";

export default function HomeAbout({ data }: { data: HomeAboutData }) {
  const { ref } = useHomeAbout();

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {data.image && (
            <div className="home-about-image relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
                alt={data.image.alternativeText ?? data.name ?? "About image"}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="home-about-text space-y-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.title}
            </h2>
            {data.name && (
              <p className="text-xl font-semibold text-primary">{data.name}</p>
            )}
            {data.role && (
              <p className="text-muted-foreground font-medium">{data.role}</p>
            )}
            <p className="text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
