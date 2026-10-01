"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { HeaderLink } from "@/data/navigation";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  primary: HeaderLink[];
  account: NavLink[];
}

export function MobileMenu({ primary, account }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);
  const Icon = open ? X : Menu;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-full text-shuttle-gray-50"
      >
        <Icon aria-hidden="true" className="size-6" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id={panelId}
            aria-label="Mobile"
            className="absolute inset-x-4 top-[88px] rounded-3xl bg-white p-6 sm:inset-x-6"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-1">
              {[...primary, ...account].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={"current" in link && link.current ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-shuttle-gray-950 hover:bg-shuttle-gray-50",
                      "current" in link && link.current ? "text-label-m" : "text-body-m",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
