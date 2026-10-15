import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "AmeriList | Medicare Prospect Data and Marketing" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
