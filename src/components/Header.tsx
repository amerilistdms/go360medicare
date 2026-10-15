"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { announcement, cta, mainNav } from "@/content/site";
import { buttonClass } from "@/components/button-styles";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  function onCtaClick(event: MouseEvent<HTMLAnchorElement>) {
    closeMenu();
    if (pathname !== "/") return;
    const target = document.getElementById("request-information");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md ${scrolled ? "shadow-[0_8px_24px_rgba(14,39,68,0.07)]" : ""}`}>
      {announcement.enabled ? (
        <div className="border-b border-line bg-mist">
          <p className="container-site py-2 text-center text-[13px] leading-5 text-navy">
            {announcement.text}{" "}
            <Link
              href={announcement.href}
              className="font-semibold whitespace-nowrap text-blue hover:text-blue-dark"
              onClick={(event) => {
                if (pathname !== "/") return;
                const target = document.getElementById("request-information");
                if (!target) return;
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {announcement.linkLabel}
            </Link>
          </p>
        </div>
      ) : null}

      <div className="relative border-b border-line">
        <div className="container-site flex h-16 min-w-0 items-center justify-between gap-2">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={`text-sm font-medium ${active ? "text-navy underline decoration-teal decoration-2 underline-offset-8" : "text-muted hover:text-navy"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/#request-information" onClick={onCtaClick} aria-label={cta.exploreOptions} className={`${buttonClass.primary} px-3 sm:px-5`}>
              <span className="sm:hidden">Explore</span>
              <span className="hidden sm:inline lg:hidden">{cta.exploreOptionsShort}</span>
              <span className="hidden lg:inline">{cta.exploreOptions}</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </div>

        {open ? (
          <>
            <button type="button" className="fixed inset-0 z-40 bg-navy/40 lg:hidden" aria-label="Close menu" onClick={() => setOpen(false)} />
            <div id="mobile-nav" className="absolute inset-x-0 top-full z-50 border-b border-line bg-white shadow-lg lg:hidden">
              <nav className="container-site flex flex-col py-3" aria-label="Mobile">
                {mainNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                      className={`flex min-h-11 items-center text-base font-medium ${active ? "text-navy" : "text-muted"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link href="/#request-information" onClick={onCtaClick} className={`${buttonClass.primary} mt-3 mb-2`}>
                  {cta.exploreOptions}
                </Link>
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
