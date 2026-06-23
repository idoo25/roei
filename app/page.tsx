import Link from "next/link";
import Container from "./components/Container";
import { Icon } from "./components/Icon";
import SpecialtyCard from "./components/SpecialtyCard";
import Stars from "./components/Stars";
import { specialties } from "./data/specialties";
import { site } from "./data/site";

const whyUs = [
  {
    icon: "sparkles",
    title: "טיפול אחד-על-אחד",
    text: "כל פגישה היא איתכם בלבד, מההתחלה ועד הסוף — בלי תורים מקבילים ובלי לחץ של זמן.",
  },
  {
    icon: "shield",
    title: "מטפלים מוסמכים",
    text: "צוות פיזיותרפיסטים מומחים עם הכשרות מתקדמות ושנים של ניסיון קליני.",
  },
  {
    icon: "pulse",
    title: "תוכנית מותאמת אישית",
    text: "אבחון מעמיק ותוכנית טיפול שנבנית סביב הגוף, המטרות ואורח החיים שלכם.",
  },
  {
    icon: "clock",
    title: "ליווי לאורך כל הדרך",
    text: "אנחנו איתכם בכל שלב — מהכאב הראשון ועד החזרה המלאה לפעילות.",
  },
];

const process = [
  { step: "01", title: "אבחון מקיף", text: "פגישת היכרות ובדיקה מעמיקה לזיהוי מקור הבעיה." },
  { step: "02", title: "תוכנית טיפול", text: "בניית מסלול טיפול מותאם אישית עם יעדים ברורים." },
  { step: "03", title: "שיקום וחזרה", text: "טיפול, תרגול וליווי עד לחזרה מלאה לתנועה ולשגרה." },
];

const testimonials = [
  {
    name: "מיכל ר.",
    role: "לאחר ניתוח ברך",
    text: "חזרתי לרוץ אחרי שנתיים של כאב. היחס האישי והמקצועיות פשוט יוצאי דופן.",
  },
  {
    name: "דניאל כ.",
    role: "כאבי גב כרוניים",
    text: "אחרי טיפולים במקומות אחרים, רק כאן הבינו באמת מה הבעיה. הכאב נעלם.",
  },
  {
    name: "רונית ל.",
    role: "שיקום ספורטיבי",
    text: "ליווי צמוד וחם לאורך כל הדרך. הרגשתי שבאמת אכפת להם מההחלמה שלי.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-sm font-medium text-teal-700">
                <Icon name="check" className="h-4 w-4" />
                מרכז פיזיותרפיה פרטי בתל אביב
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {site.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {site.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
                >
                  קביעת תור
                  <Icon name="arrowLeft" className="h-5 w-5" />
                </Link>
                <Link
                  href="/specialties"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                >
                  תחומי הטיפול
                </Link>
              </div>
            </div>

            {/* Decorative panel */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-500 p-8 text-white shadow-xl shadow-teal-200">
                <Icon name="pulse" className="h-12 w-12 opacity-90" />
                <p className="mt-6 text-2xl font-bold leading-snug">
                  כי כל גוף ראוי ליחס אישי ולחזרה מלאה לתנועה.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {site.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-3xl font-extrabold">{stat.value}</div>
                      <div className="mt-1 text-sm text-teal-50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured specialties */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
              תחומי התמחות
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              טיפול מקצועי בכל תחום
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              מומחיות ממוקדת שנבנתה סביב הצרכים האמיתיים של המטופלים שלנו.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.slice(0, 6).map((s) => (
              <SpecialtyCard key={s.slug} specialty={s} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/specialties"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:gap-3 transition-all"
            >
              לכל תחומי הטיפול
              <Icon name="arrowLeft" className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
              למה אנחנו
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              לא עוד מרפאה. בית של טיפול אישי.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
              איך זה עובד
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              שלושה צעדים לחזרה לתנועה
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-slate-200 p-8">
                <span className="text-5xl font-extrabold text-teal-100">{item.step}</span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
              ממליצים עלינו
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              מטופלים מספרים
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <Stars />
                <blockquote className="mt-4 flex-1 text-slate-700">
                  ”{t.text}“
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-500 px-8 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">מוכנים להתחיל את הדרך לחזרה לתנועה?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-50">
              קבעו פגישת אבחון עוד היום — אנחנו כאן כדי להחזיר אתכם לעצמכם.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-teal-700 transition-transform hover:scale-105"
              >
                קביעת תור
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" className="h-5 w-5" />
                <span dir="ltr">{site.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
