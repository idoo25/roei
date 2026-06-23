import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import { Icon } from "../components/Icon";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "הסיפור, הערכים והגישה של מרכז רועי לפיזיותרפיה — טיפול אישי, מקצועי ואנושי.",
};

const values = [
  {
    icon: "sparkles",
    title: "אישי",
    text: "מטופל אחד בכל פעם, עם תשומת לב מלאה. אתם לא מספר — אתם אדם עם סיפור ומטרה.",
  },
  {
    icon: "shield",
    title: "מקצועי",
    text: "מבוסס מחקר וניסיון קליני, עם למידה והתעדכנות מתמדת בשיטות הטיפול המתקדמות.",
  },
  {
    icon: "pulse",
    title: "אנושי",
    text: "מקשיבים, מסבירים ומלווים. אנחנו מאמינים שטיפול טוב מתחיל באמון ובחמלה.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
            אודות המרכז
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            הסיפור שלנו
          </h1>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                <strong className="text-slate-900">{site.name}</strong> נולד מתוך
                אמונה פשוטה: כל אדם ראוי לטיפול אישי, מעמיק ומכבד — ולא לעוד תור
                בשרשרת ייצור.
              </p>
              <p>
                במשך יותר מ-15 שנה ליווינו אלפי מטופלים בדרך חזרה לתנועה ולחיים ללא
                כאב. אנחנו לא מאמינים בפתרונות מהירים, אלא בתהליך אמיתי שמטפל בשורש
                הבעיה ובונה גוף חזק ויציב לטווח הארוך.
              </p>
              <p>
                כאן תקבלו את כל הזמן, תשומת הלב והמקצועיות שמגיעים לכם — מהפגישה
                הראשונה ועד החזרה המלאה לעצמכם.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <div className="text-4xl font-extrabold text-teal-600">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">הערכים שמנחים אותנו</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Icon name={v.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-500 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">בואו נכיר</h2>
            <p className="mx-auto mt-3 max-w-xl text-teal-50">
              נשמח לפגוש אתכם ולהתחיל יחד את הדרך לחזרה לתנועה.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-teal-700 transition-transform hover:scale-105"
            >
              קביעת תור
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
