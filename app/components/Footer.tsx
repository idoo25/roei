import Link from "next/link";
import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { specialties } from "../data/specialties";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Icon name="pulse" className="h-5 w-5" />
              </span>
              <span className="text-lg">{site.shortName}</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              טיפול פיזיותרפי אישי ומקצועי, עם דגש על ליווי אחד-על-אחד וחזרה מלאה
              לתנועה ללא כאב.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">ניווט מהיר</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 hover:text-teal-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">תחומי טיפול</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {specialties.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/specialties" className="text-slate-600 hover:text-teal-700">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">צרו קשר</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-teal-600" />
                <a href={site.phoneHref} dir="ltr" className="hover:text-teal-700">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-teal-600" />
                <a href={`mailto:${site.email}`} dir="ltr" className="hover:text-teal-700">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.
        </div>
      </Container>
    </footer>
  );
}
