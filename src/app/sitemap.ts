// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.scraperr.cloud";

  // Example static routes
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Example: if you later have dynamic content (e.g. blog posts),
  // fetch them from DB or API here and push them into the array:
  // const posts = await getAllPosts();
  // posts.forEach((post) => {
  //   routes.push({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: new Date(post.updatedAt),
  //   });
  // });

  return routes;
}
