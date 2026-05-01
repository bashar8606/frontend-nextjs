import { strapiFetch } from "@/lib/strapi";
import { apiRoutes } from "@/lib/api-routes";
import { PageWidgets, type WidgetEntry } from "@/widgets/registry";

type StrapiPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  widgets: WidgetEntry[];
};

export default async function HomePage() {
  const data = await strapiFetch<StrapiPage>(apiRoutes.pages.bySlug("home"));
  return (
    <main>
      <PageWidgets widgets={data.widgets} />
    </main>
  );
}
