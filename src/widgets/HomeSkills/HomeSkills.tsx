"use client";
import type { HomeSkillsData } from "./types";
import { useHomeSkills } from "./useHomeSkills";
import { Badge } from "@/components/ui/badge";

const levelColors: Record<string, string> = {
  beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  expert: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

export default function HomeSkills({ data }: { data: HomeSkillsData }) {
  const { ref } = useHomeSkills();

  const grouped = data.items?.reduce<Record<string, typeof data.items>>(
    (acc, item) => {
      const cat = item.category ?? "Other";
      (acc[cat] ??= []).push(item);
      return acc;
    },
    {}
  );

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{data.description}</p>
        </header>

        <div className="space-y-10">
          {Object.entries(grouped ?? {}).map(([category, skills]) => (
            <div key={category}>
              <h3 className="mb-4 text-lg font-semibold text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="skill-item flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm"
                  >
                    {skill.icon && (
                      <span className="text-lg">{skill.icon}</span>
                    )}
                    <span className="font-medium">{skill.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold capitalize ${levelColors[skill.level] ?? ""}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
