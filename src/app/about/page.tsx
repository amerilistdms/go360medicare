import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonClass } from "@/components/button-styles";
import { PageHeader } from "@/components/PageBlocks";
import { aboutPage, cta } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "AmeriList provides prospect data and marketing support for businesses that need to reach Medicare-age audiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} lede={aboutPage.lede} />
      <div className="container-site grid items-start gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <div className="space-y-4 text-base leading-7 text-ink">
            {aboutPage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">{aboutPage.helpsTitle}</h2>
          <ul className="mt-4 space-y-3">
            {aboutPage.helps.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">{aboutPage.limitsTitle}</h2>
          <ul className="mt-4 space-y-3">
            {aboutPage.limits.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/#request-information" className={`${buttonClass.primary} mt-10`}>
            {cta.requestInformation}
          </Link>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-xl sm:min-h-[460px]">
          <Image src="/images/walk.jpg" alt={aboutPage.imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </>
  );
}
