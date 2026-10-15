import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader } from "@/components/PageBlocks";
import { company, contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a Medicare prospect count from AmeriList. Asking does not purchase a list.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ interest?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const interest = Array.isArray(params.interest) ? params.interest[0] : params.interest;

  return (
    <>
      <PageHeader eyebrow={contactPage.eyebrow} title={contactPage.title} lede={contactPage.lede} />
      <div className="container-site grid items-start gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div id="request-information" className="scroll-mt-28 rounded-2xl border border-line bg-white p-5 shadow-[0_16px_40px_rgba(14,39,68,0.05)] sm:p-7">
          <LeadForm key={interest || "general"} defaultInterest={interest} />
        </div>
        <aside>
          <h2 className="text-xl font-semibold text-navy">{contactPage.asideTitle}</h2>
          <ul className="mt-4 space-y-3">
            {contactPage.aside.map((item) => (
              <li key={item} className="text-sm leading-6 text-muted">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-xl font-semibold text-navy">AmeriList</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>
              <a href={company.phoneHref} className="font-semibold text-blue hover:text-blue-dark">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="font-semibold text-blue hover:text-blue-dark">
                {company.email}
              </a>
            </li>
            <li>{company.address}</li>
          </ul>
        </aside>
      </div>
    </>
  );
}
