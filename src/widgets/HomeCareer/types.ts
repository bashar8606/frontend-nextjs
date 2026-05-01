export type CareerItem = {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  summary?: string;
};

export type HomeCareerData = {
  id: number;
  __component: "widget.home-career";
  title: string;
  description: string;
  items: CareerItem[];
};
