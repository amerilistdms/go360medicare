import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/about", "/medicare-options", "/faq", "/contact", "/privacy", "/terms", "/disclaimers"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-13");
  return routes.map((route) => ({
    url: `${siteConfig.url}${route || "/"}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
