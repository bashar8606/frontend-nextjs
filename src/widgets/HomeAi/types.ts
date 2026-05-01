export type AiItem = {
  id: number;
  name: string;
  description: string;
  link?: string;
  tags?: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
};

export type HomeAiData = {
  id: number;
  __component: "widget.home-ai";
  title: string;
  description: string;
  items: AiItem[];
};
