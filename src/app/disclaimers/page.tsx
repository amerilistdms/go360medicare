import type { Metadata } from "next";
import { LegalDocument, PageHeader } from "@/components/PageBlocks";
import { disclaimersPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Data Disclaimers",
  description: "Draft data disclaimers for AmeriList. Pending legal and compliance review before launch.",
  alternates: { canonical: "/disclaimers" },
  robots: { index: false, follow: false },
};

export default function DisclaimersPage() {
  return (
    <>
      <PageHeader eyebrow={disclaimersPage.eyebrow} title={disclaimersPage.title} lede={disclaimersPage.lede} />
      <LegalDocument updated={disclaimersPage.updated} sections={disclaimersPage.sections} />
    </>
  );
}
