import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = ["", "/menu", "/chi-siamo"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
