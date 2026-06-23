import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[hsl(80_11%_95.5%)]">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#hero" className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-teal-700">{site.shortName}</span>
            <span className="text-xs font-semibold text-slate-400">{site.credential}</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="text-sm text-slate-600 hover:text-teal-700">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            לקביעת תור בוואטסאפ
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.shortName} — {site.credential}. כל הזכויות שמורות.
          </p>
        </div>
      </Container>
    </footer>
  );
}
