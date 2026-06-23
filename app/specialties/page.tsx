import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import { Icon } from "../components/Icon";
import SpecialtyCard from "../components/SpecialtyCard";
import { specialties } from "../data/specialties";

export const metadata: Metadata = {
  title: "תחומי טיפול",
  description:
    "תחומי ההתמחות של מרכז רועי לפיזיותרפיה — אורתופדיה, שיקום לאחר ניתוח, כאבי גב וצוואר, שיקום נוירולוגי, ספורט ועוד.",
};

export default function SpecialtiesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
            תחומי התמחות
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            טיפול ממוקד לכל צורך
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            פיתחנו תחומי מומחיות לעומק על בסיס הצרכים של המטופלים שלנו — כדי שתקבלו
            את הטיפול המדויק ביותר עבורכם, בכל מצב.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <SpecialtyCard key={s.slug} specialty={s} detailed />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <div className="rounded-3xl border border-teal-200 bg-teal-50 px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              לא בטוחים איזה טיפול מתאים לכם?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              נשמח לשמוע ולכוון אתכם. פגישת אבחון ראשונה תעזור לנו לבנות יחד את
              המסלול הנכון עבורכם.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
            >
              דברו איתנו
              <Icon name="arrowLeft" className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
