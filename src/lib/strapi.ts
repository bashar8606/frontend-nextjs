const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function strapiFetch<T>(
  path: string,
  opts: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      ...opts.headers,
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Strapi ${path} → ${res.status}`);
  return res.json();
}
