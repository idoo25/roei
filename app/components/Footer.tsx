import Image from "next/image";
import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-teal-700 text-white">
      <Container className="py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#hero" className="flex items-center">
            <Image
              src="/logo.png"
              alt="רועי קליין — פיזיותרפיסט"
              width={330}
              height={110}
              className="h-12 w-auto brightness-0 invert"
            />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="text-sm text-teal-100 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-teal-100">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-4 w-4" />
              <span dir="ltr">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-4 w-4" />
              <span dir="ltr">{site.email}</span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              וואטסאפ
            </a>
          </div>

          <p className="border-t border-white/10 pt-6 text-sm text-teal-100/80">
            © {new Date().getFullYear()} {site.shortName} — {site.credential}. כל הזכויות שמורות.
          </p>
        </div>
      </Container>
    </footer>
  );
}
