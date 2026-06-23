import Image from "next/image";
import Container from "./components/Container";
import { Icon } from "./components/Icon";
import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import { site } from "./data/site";
import { asset } from "./basePath";
import {
  treatments,
  symptoms,
  approachSteps,
  aboutParagraphs,
} from "./data/content";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-semibold text-teal-500">
      <Icon name="sparkles" className="h-5 w-5" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section id="hero" className="scroll-mt-28 py-16 sm:py-24">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* טקסט */}
            <Reveal>
              <Eyebrow>{site.tagline}</Eyebrow>
              <h1 className="mt-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                יש בעיות שאנשים מדברים עליהן בחופשיות.{" "}
                <span className="text-teal-500">ויש בעיות שהם ממשיכים לסחוב חודשים</span>{" "}
                או שנים בתקווה שיעברו לבד.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                כאבים באגן, במפשעה, בישיבה, בזמן פעילות גופנית או סביב תפקוד מיני —
                הם תסמינים שכדאי להבין ולא להתעלם מהם.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                אני <strong className="font-bold text-slate-900">רועי קליין</strong>,
                פיזיותרפיסט M.Sc.PT. המטרה שלי היא לעזור לכם להבין מה באמת קורה, לבנות
                תוכנית פעולה ברורה ולחזור לתפקוד שאתם רוצים.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-press rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
                >
                  לקביעת פגישת אבחון
                </a>
                <a
                  href="#treatments"
                  className="btn-press rounded-full border-2 border-teal-700 bg-white px-7 py-3.5 font-semibold text-teal-700 hover:bg-teal-700 hover:text-white"
                >
                  למידע נוסף
                </a>
              </div>
            </Reveal>

            {/* פורטרט + כרטיסים צפים */}
            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset("/portrait.png")}
                    alt="רועי קליין מטפל במטופל"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
                {/* כרטיסי נתונים צפים */}
                <div className="absolute -top-4 left-6 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-100">
                  <div className="text-2xl font-extrabold text-slate-900">{site.stats[0].value}</div>
                  <div className="text-xs text-slate-500">מטופלים באורתופדיה</div>
                </div>
                <div className="absolute -bottom-4 right-6 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-100">
                  <div className="text-2xl font-extrabold text-slate-900">{site.stats[1].value}</div>
                  <div className="text-xs text-slate-500">מטופלים ברצפת האגן</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* רצועת נתונים */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 lg:grid-cols-4">
            {site.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div className="text-2xl font-extrabold text-teal-600 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== תחומי טיפול ===== */}
      <section id="treatments" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>מה אנחנו מציעים</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">תחומי טיפול</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== סימפטומים ===== */}
      <section id="symptoms" className="scroll-mt-28 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>מתי כדאי לפנות</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              איך תדעו שאולי כדאי לפנות?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              חלק מהתסמינים האלו עלולים להרגיש לא קשורים אחד לשני. לפעמים הם קשורים
              הרבה יותר ממה שנדמה.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {symptoms.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                <Icon name="arrowUpLeft" className="h-4 w-4 text-teal-500" />
                {s}
              </span>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center text-slate-600">
            <p>
              לא כל כאב באגן קשור לרצפת האגן. אבל אם אתם מזהים את עצמכם באחד או יותר
              מהתסמינים האלו, כדאי לבדוק את זה בצורה מסודרת.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== הגישה שלי ===== */}
      <section id="approach" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>איך עובדים יחד</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">הגישה שלי</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="text-4xl font-extrabold text-teal-100">{s.step}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-2xl font-bold leading-snug text-teal-600 sm:text-3xl">
              ”טיפול טוב מתחיל בהבנה. לא בתרגילים.“
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== קצת עליי ===== */}
      <section id="about" className="scroll-mt-28 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>הכירו אותי</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">קצת עליי</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== שאלות נפוצות ===== */}
      <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>שאלות ותשובות</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">שאלות נפוצות</h2>
          </Reveal>
          <Reveal className="mt-12">
            <Faq />
          </Reveal>
        </Container>
      </section>

      {/* ===== יצירת קשר ===== */}
      <section id="contact" className="scroll-mt-28 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>יצירת קשר</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                בואו נבין מה קורה
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                אם אתם מתמודדים עם כאב, מגבלה או תסמינים שפוגעים באיכות החיים שלכם,
                אפשר להתחיל בפגישת אבחון מסודרת.
              </p>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                לקביעת תור בוואטסאפ
              </a>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                או
                <span className="h-px flex-1 bg-slate-200" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
