"use client";
import type { HomeAiData } from "./types";
import { useHomeAi } from "./useHomeAi";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeAi({ data }: { data: HomeAiData }) {
  const { ref } = useHomeAi();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{data.description}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items?.map((item) => (
            <Card
              key={item.id}
              className="ai-item group flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
            >
              {item.image && (
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`}
                    alt={item.image.alternativeText ?? item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.split(",").map((tag) => (
                      <Badge key={tag.trim()} variant="secondary" className="text-xs">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                )}
                {item.link && (
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
