"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { site } from "../data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 font-bold text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Icon name="pulse" className="h-5 w-5" />
            </span>
            <span className="text-lg leading-tight">{site.shortName}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href)
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span dir="ltr">{site.phone}</span>
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              קביעת תור
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive(pathname, link.href)
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700"
              >
                <Icon name="phone" className="h-4 w-4 text-teal-600" />
                <span dir="ltr">{site.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-teal-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                קביעת תור
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
