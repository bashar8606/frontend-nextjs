export const apiRoutes = {
  pages: {
    bySlug: (slug: string) => `/pages/by-slug/${encodeURIComponent(slug)}`,
    list: () => `/pages`,
  },
} as const;
