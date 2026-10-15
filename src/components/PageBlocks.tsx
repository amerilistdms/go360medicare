import type { LegalSection } from "@/content/site";
import { RichText } from "@/components/RichText";

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line bg-mist">
      <div className="container-site py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{lede}</p>
      </div>
    </header>
  );
}

export function DraftNotice() {
  return (
    <div className="mb-8 rounded-lg border border-[#e4d3b0] bg-sand px-4 py-3 text-sm leading-6 text-navy">
      <p className="font-semibold">Draft for legal and compliance review</p>
      <p className="mt-1">
        This page is placeholder language for internal review. It is not final policy, legal advice, or approved compliance copy.
      </p>
    </div>
  );
}

export function LegalDocument({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="container-site max-w-3xl py-12 md:py-16">
      <DraftNotice />
      <p className="text-sm font-medium text-muted">{updated}</p>
      <div className="mt-8 space-y-9">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-navy">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-base leading-7 text-ink">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
            {section.list ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-ink">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
