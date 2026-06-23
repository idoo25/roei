import { Icon } from "./Icon";
import type { Specialty } from "../data/specialties";

export default function SpecialtyCard({
  specialty,
  detailed = false,
}: {
  specialty: Specialty;
  detailed?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
        <Icon name={specialty.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{specialty.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{specialty.summary}</p>

      {detailed && (
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {specialty.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
