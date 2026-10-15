import Link from "next/link";
import { brand, company, coverage, legalNav, mainNav } from "@/content/site";
import { Logo } from "@/components/Logo";

const optionLinks = [
  ...coverage.cards.map((card) => ({ href: card.href, label: card.title })),
  { href: "/contact", label: "Campaign support" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-6 text-white/75">{brand.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Audiences</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {optionLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>
              <a href={company.phoneHref} className="hover:text-white">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="max-w-[16rem] leading-6 text-white/55">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8fd4de]">
            Draft disclaimer — legal review required
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-white/70">{brand.disclaimer}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} {company.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
