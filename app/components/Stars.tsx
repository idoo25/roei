export default function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`דירוג ${count} מתוך 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.45 4.97 5.48.8a.6.6 0 0 1 .33 1.02l-3.96 3.86.94 5.46a.6.6 0 0 1-.87.63L12 17.98l-4.9 2.58a.6.6 0 0 1-.87-.63l.93-5.46-3.96-3.86a.6.6 0 0 1 .33-1.02l5.48-.8z" />
        </svg>
      ))}
    </div>
  );
}
