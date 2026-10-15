import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageHeader } from "@/components/PageBlocks";
import { buttonClass } from "@/components/button-styles";
import { cta, faqPage, faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about AmeriList prospect data, counts, and Medicare-age audiences.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHeader eyebrow={faqPage.eyebrow} title={faqPage.title} lede={faqPage.lede} />
      <div className="container-site max-w-3xl py-14 md:py-20">
        <FaqList items={faqs} />
        <Link href="/contact" className={`${buttonClass.primary} mt-10`}>
          {cta.requestInformation}
        </Link>
      </div>
    </>
  );
}
