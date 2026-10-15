import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass, textLinkClass } from "@/components/button-styles";
import { PageHeader } from "@/components/PageBlocks";
import { cta, enrollment, optionsPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Audiences",
  description:
    "Turning 65, Medicare Supplement, Medicare Advantage, and other senior prospect audiences from AmeriList.",
  alternates: { canonical: "/medicare-options" },
};

export default function MedicareOptionsPage() {
  return (
    <>
      <PageHeader eyebrow={optionsPage.eyebrow} title={optionsPage.title} lede={optionsPage.lede} />
      <div className="container-site py-14 md:py-20">
        <div className="space-y-16">
          {optionsPage.sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-28 border-t border-line pt-10">
              <p className="eyebrow">{section.kicker}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">{section.title}</h2>
              <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-ink">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-5 max-w-3xl space-y-2">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={`/contact?interest=${encodeURIComponent(section.interest)}`} className={`${textLinkClass} mt-4`}>
                Request a count for {section.title}
              </Link>
            </article>
          ))}
        </div>

        <aside className="mt-16 rounded-xl border border-line bg-mist p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">{enrollment.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{enrollment.lede}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{enrollment.note}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/#how-it-works" className={buttonClass.secondary}>
              See how a count works
            </Link>
            <Link href="/contact" className={buttonClass.primary}>
              {cta.requestInformation}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
