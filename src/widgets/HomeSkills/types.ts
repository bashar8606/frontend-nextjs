export type SkillItem = {
  id: number;
  label: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  category?: string;
};

export type HomeSkillsData = {
  id: number;
  __component: "widget.home-skills";
  title: string;
  description: string;
  items: SkillItem[];
};
