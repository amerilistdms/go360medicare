import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClass, textLinkClass } from "@/components/button-styles";
import { FaqList } from "@/components/FaqList";
import { HeroPaths } from "@/components/home/HeroPaths";
import { LeadForm } from "@/components/LeadForm";
import {
  aboutPreview,
  benefits,
  coverage,
  cta,
  enrollment,
  finalCta,
  hero,
  homeFaqs,
  howItWorks,
  leadForm,
} from "@/content/site";

const coverageImages = {
  "turning-65": {
    src: "/images/park.jpg",
    alt: "Older woman sitting on a park bench and looking at a phone with a younger woman.",
    className: "object-[center_40%]",
  },
  "medicare-supplement": {
    src: "/images/walk.jpg",
    alt: "Older man at a table with two younger family members, looking at a tablet together.",
    className: "object-[70%_center]",
  },
  "medicare-advantage": {
    src: "/images/home.jpg",
    alt: "Older man seated at home while a younger woman stands beside his chair.",
    className: "object-[center_30%]",
  },
} as const;

export function HomePage() {
  const [leadOption, ...otherOptions] = coverage.cards;

  return (
    <div className="home-canvas">
      <section className="bg-white">
        <div className="container-site grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-4 text-[2.45rem] font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
              {hero.titleLead} <span className="text-blue">{hero.titleAccent}</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{hero.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#request-information" className={buttonClass.primary}>
                {cta.getStarted}
              </a>
              <a href={`#${coverage.id}`} className={buttonClass.secondary}>
                {cta.exploreMedicareOptions}
              </a>
            </div>
            <HeroPaths />
            <ul className="mt-8 grid gap-2 border-t border-line pt-5 text-sm text-muted">
              {hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-xl sm:min-h-[460px]">
            <Image
              src="/images/hero.jpg"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_20%]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-navy/92 px-5 py-3 text-sm leading-6 text-white">{hero.imageCaption}</p>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-line" aria-labelledby="benefits-title">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-xl sm:min-h-[440px] lg:order-1 lg:min-h-[560px]">
            <Image
              src="/images/kitchen.jpg"
              alt="Older woman and her granddaughter baking together in a bright kitchen."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 id="benefits-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              {benefits.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">{benefits.lede}</p>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {benefits.items.map((item, index) => (
                <li key={item.id} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                  <span className="pt-1 text-sm font-semibold tracking-[0.14em] text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id={coverage.id} className="section-space scroll-mt-28 bg-mist" aria-labelledby="coverage-title">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 id="coverage-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              {coverage.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">{coverage.lede}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <OptionCard card={leadOption} tall />
            <div className="grid gap-4">
              {otherOptions.map((card) => (
                <OptionCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 rounded-xl border border-line bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-navy">{coverage.medigap.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{coverage.medigap.body}</p>
            </div>
            <Link href={coverage.medigap.href} className={`${textLinkClass} shrink-0`}>
              {coverage.medigap.cta}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id={enrollment.id} className="section-space scroll-mt-28" aria-labelledby="enrollment-title">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div>
            <h2 id="enrollment-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              {enrollment.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">{enrollment.lede}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{enrollment.note}</p>
            <a href="#request-information" className={`${buttonClass.primary} mt-8`}>
              {cta.getMoreInformation}
            </a>
          </div>
          <ol className="relative space-y-8 border-l border-line pl-8">
            {enrollment.cards.map((card, index) => {
              const featured = card.id === "geography";
              return (
                <li key={card.id} className="relative">
                  <span
                    className={`absolute top-0 -left-[2.7rem] flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
                      featured ? "bg-navy text-white" : "border border-line bg-white text-navy"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
                  {"label" in card ? (
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-teal">{card.label}</p>
                  ) : null}
                  <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-navy text-white" aria-labelledby="how-title">
        <div className="container-site py-16 md:py-20">
          <h2 id="how-title" className="max-w-xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {howItWorks.title}
          </h2>
          <ol className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <li key={step.number} className="bg-navy p-6 md:p-8">
                <p className="text-sm font-semibold tracking-[0.16em] text-[#8fd4de]">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-white/65">{howItWorks.note}</p>
        </div>
      </section>

      <section id={leadForm.id} className="section-space scroll-mt-28" aria-labelledby="lead-title">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 id="lead-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              {leadForm.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">{leadForm.lede}</p>
            <ul className="mt-6 space-y-3">
              {leadForm.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-white p-5 shadow-[0_18px_50px_rgba(14,39,68,0.06)] sm:p-7">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-mist" aria-labelledby="about-title">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-xl sm:min-h-[440px] lg:order-1 lg:min-h-[520px]">
            <Image
              src="/images/window.jpg"
              alt={aboutPreview.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 id="about-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              {aboutPreview.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-muted">
              {aboutPreview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href="/about" className={`${buttonClass.secondary} mt-8`}>
              {cta.learnMoreAboutUs}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="faq-title">
        <div className="container-site grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h2 id="faq-title" className="text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
              Frequently Asked Questions
            </h2>
            <Link href="/faq" className={`${textLinkClass} mt-4`}>
              {cta.viewAllFaqs}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section className="bg-navy" aria-labelledby="final-cta-title">
        <div className="container-site py-16 text-center md:py-20">
          <h2 id="final-cta-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">{finalCta.lede}</p>
          <a href="#request-information" className={`${buttonClass.inverse} mt-8`}>
            {cta.requestInformation}
          </a>
        </div>
      </section>
    </div>
  );
}

function OptionCard({
  card,
  tall = false,
}: {
  card: (typeof coverage.cards)[number];
  tall?: boolean;
}) {
  const image = coverageImages[card.id as keyof typeof coverageImages];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <div className={`relative overflow-hidden ${tall ? "min-h-72 flex-1" : "h-44 shrink-0 sm:h-48"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={tall ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
          className={`object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.04] ${image.className}`}
        />
      </div>
      <div className="shrink-0 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">{card.kicker}</p>
        <h3 className="mt-2 text-xl font-semibold text-navy">{card.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
        <Link href={card.href} className={`${textLinkClass} mt-5`}>
          {card.cta}
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}

