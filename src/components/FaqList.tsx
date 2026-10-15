"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/site";

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id}>
            <h3 className="text-base font-semibold">
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-navy"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" size={18} className={`shrink-0 text-teal transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
              <div className="pb-5 pr-8">
                <p className="text-sm leading-7 text-muted">{item.answer}</p>
                {item.links?.length ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.links.map((link) => {
                      const external = link.href.startsWith("http");
                      return (
                        <li key={link.href}>
                          {external ? (
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue hover:text-blue-dark">
                              {link.label}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          ) : (
                            <a href={link.href} className="text-sm font-semibold text-blue hover:text-blue-dark">
                              {link.label}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
