import HomeBanner from "@/widgets/HomeBanner";
import HomeAbout from "@/widgets/HomeAbout";
import HomeSkills from "@/widgets/HomeSkills";
import HomeCareer from "@/widgets/HomeCareer";
import HomeAi from "@/widgets/HomeAi";

import type { ComponentType } from "react";

export type WidgetEntry = { __component: string; id: number; [k: string]: any };

export const widgetRegistry: Record<string, ComponentType<{ data: any }>> = {
  "widget.home-banner": HomeBanner,
  "widget.home-about": HomeAbout,
  "widget.home-skills": HomeSkills,
  "widget.home-career": HomeCareer,
  "widget.home-ai": HomeAi,
};

export function PageWidgets({ widgets }: { widgets: WidgetEntry[] }) {
  return (
    <>
      {widgets?.map((w) => {
        const Component = widgetRegistry[w.__component];
        if (!Component) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`No widget registered for ${w.__component}`);
          }
          return null;
        }
        return <Component key={`${w.__component}-${w.id}`} data={w} />;
      })}
    </>
  );
}
