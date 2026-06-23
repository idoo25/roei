"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { site } from "../data/site";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // המשקוף נחשף בגלילה כלפי מעלה ונעלם בגלילה כלפי מטה (כמו באתר המקור)
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 16);
      if (y > last && y > 140) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy — הדגשת הטאב של הסקשן שנמצא כעת באזור הצפייה
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          atTop
            ? "bg-transparent"
            : "border-b border-slate-200 bg-[hsl(80_11%_97%)]/90 backdrop-blur"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between gap-4">
            {/* לוגו */}
            <a href="#hero" className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold tracking-tight text-teal-700">
                {site.shortName}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {site.credential}
              </span>
            </a>

            {/* ניווט דסקטופ */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "text-teal-700"
                      : "text-slate-600 hover:text-teal-700"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA דסקטופ */}
            <a
              href="#contact"
              className="hidden rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600 lg:inline-block"
            >
              קביעת תור
            </a>

            {/* כפתור מובייל */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </div>

      {/* תפריט מובייל */}
      {menuOpen && (
        <div className="border-b border-slate-200 bg-[hsl(80_11%_97%)] lg:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                    active === link.id
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                קביעת תור
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
