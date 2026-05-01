import { notFound } from "next/navigation";
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

type RouteParams = { page: string[] };

export default async function CmsPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { page } = await params;
  const slug = page.join("/");

  let data: StrapiPage;
  try {
    data = await strapiFetch<StrapiPage>(apiRoutes.pages.bySlug(slug));
  } catch {
    notFound();
  }

  return (
    <main>
      <PageWidgets widgets={data.widgets} />
    </main>
  );
}
