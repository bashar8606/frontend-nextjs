export type HomeAboutData = {
  id: number;
  __component: "widget.home-about";
  title: string;
  description: string;
  name?: string;
  role?: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
};
