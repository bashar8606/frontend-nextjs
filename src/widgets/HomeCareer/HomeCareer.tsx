"use client";
import type { HomeCareerData } from "./types";
import { useHomeCareer } from "./useHomeCareer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function HomeCareer({ data }: { data: HomeCareerData }) {
  const { ref } = useHomeCareer();

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{data.description}</p>
        </header>

        <ol className="relative space-y-0">
          {data.items?.map((item, idx) => (
            <li key={item.id} className="career-item relative pl-8">
              {/* Timeline line */}
              {idx < data.items.length - 1 && (
                <div className="absolute left-[11px] top-6 h-full w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-primary bg-background" />

              <div className="pb-10">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  {item.current && (
                    <Badge variant="default">Current</Badge>
                  )}
                </div>
                <p className="mt-1 font-medium text-primary">{item.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatDate(item.startDate)} –{" "}
                  {item.current
                    ? "Present"
                    : item.endDate
                      ? formatDate(item.endDate)
                      : ""}
                </p>
                {item.summary && (
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
