export const siteConfig = {
  name: "AmeriList",
  description:
    "AmeriList helps insurance agents, agencies, and marketers find Medicare-age prospects by ZIP code and reach them by mail, phone, or email.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.go360medicare.com").replace(/\/$/, ""),
  locale: "en_US",
  themeColor: "#0e2744",
} as const;

export const indexingEnabled = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

/** Public flag only. The server also requires LEAD_WEBHOOK_URL before anything is sent. */
export const leadsEnabled = process.env.NEXT_PUBLIC_LEADS_ENABLED === "true";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
