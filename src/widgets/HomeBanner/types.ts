export type HomeBannerData = {
  id: number;
  __component: "widget.home-banner";
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: {
    url: string;
    alternativeText?: string;
  };
};
