"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // הדגמה בלבד — אין שרת אחורי. כאן אפשר לחבר API / שליחת מייל.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-slate-900">הפנייה נשלחה!</h3>
        <p className="mt-2 text-sm text-slate-600">
          תודה שפניתם אלינו. ניצור איתכם קשר בהקדם לתיאום תור.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-teal-700 hover:underline"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            שם מלא
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="ישראל ישראלי" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            טלפון
          </label>
          <input id="phone" name="phone" type="tel" required dir="ltr" className={`${fieldClass} text-right`} placeholder="050-000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          דוא״ל
        </label>
        <input id="email" name="email" type="email" dir="ltr" className={`${fieldClass} text-right`} placeholder="name@example.com" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          איך נוכל לעזור?
        </label>
        <textarea id="message" name="message" rows={4} required className={`${fieldClass} resize-none`} placeholder="ספרו לנו בקצרה על מה תרצו טיפול..." />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
      >
        שליחת פנייה
      </button>
      <p className="text-center text-xs text-slate-400">
        נחזור אליכם תוך יום עסקים אחד. הפרטים שלכם נשמרים בדיסקרטיות.
      </p>
    </form>
  );
}
