"use client";
import type { HomeBannerData } from "./types";
import { useHomeBanner } from "./useHomeBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeBanner({ data }: { data: HomeBannerData }) {
  const { ref } = useHomeBanner();

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background"
      style={
        data.backgroundImage
          ? {
              backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${data.backgroundImage.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {data.backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="home-banner-content relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {data.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {data.description}
        </p>
        {data.ctaLabel && data.ctaHref && (
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href={data.ctaHref}>{data.ctaLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
