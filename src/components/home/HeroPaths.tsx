"use client";

import { hero } from "@/content/site";

export function HeroPaths() {
  function choose(status: string) {
    const field = document.querySelector<HTMLSelectElement>('#request-information select[name="areaOfInterest"]');
    if (field) field.value = status;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("request-information")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    field?.focus({ preventScroll: true });
  }

  return (
    <div className="mt-8">
      <p id="hero-start" className="text-sm font-semibold text-navy">
        {hero.startLabel}
      </p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="hero-start">
        {hero.paths.map((path) => (
          <button
            key={path.status}
            type="button"
            onClick={() => choose(path.status)}
            className="min-h-11 rounded-md border border-line bg-white px-3.5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy/30 hover:bg-mist"
          >
            {path.label}
          </button>
        ))}
      </div>
    </div>
  );
}
