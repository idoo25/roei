import type { Metadata } from "next";
import Container from "../components/Container";
import { Icon } from "../components/Icon";
import ContactForm from "../components/ContactForm";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "צור קשר",
  description: `צרו קשר עם ${site.name} לקביעת תור — טלפון, דוא״ל, כתובת ושעות פעילות.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
            צור קשר
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            נשמח לשמוע מכם
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            השאירו פרטים ונחזור אליכם לתיאום תור, או צרו קשר ישירות בטלפון.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-slate-900">טלפון</span>
                  <span dir="ltr" className="block text-slate-600">{site.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-slate-900">דוא״ל</span>
                  <span dir="ltr" className="block text-slate-600">{site.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="mapPin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-slate-900">כתובת</span>
                  <span className="block text-slate-600">{site.address}</span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <span className="block font-bold text-slate-900">שעות פעילות</span>
                  <ul className="mt-1 space-y-1 text-slate-600">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span dir="ltr">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">השאירו פרטים</h2>
              <p className="mt-1 mb-6 text-sm text-slate-500">
                מלאו את הטופס ונחזור אליכם בהקדם.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
