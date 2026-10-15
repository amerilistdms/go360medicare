import type { Metadata } from "next";
import { LegalDocument, PageHeader } from "@/components/PageBlocks";
import { privacyPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for AmeriList. Pending legal and compliance review before launch.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow={privacyPage.eyebrow} title={privacyPage.title} lede={privacyPage.lede} />
      <LegalDocument updated={privacyPage.updated} sections={privacyPage.sections} />
    </>
  );
}
