// דפוס משושים דקורטיבי בצד שמאל של הדף, הפוך על הציר (מראה),
// קבוע (fixed) כך שהוא נמשך לאורך כל הדף בזמן גלילה ולא נעצר בסקשן הראשון.
// דהוי ומתעמעם לכיוון מרכז הדף כדי לא להפריע לקריאה.
export default function HexBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 -z-10 hidden w-[48%] max-w-2xl sm:block"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, black 14%, transparent 62%)",
        maskImage:
          "linear-gradient(to right, black 0%, black 14%, transparent 62%)",
      }}
    >
      <svg
        className="h-full w-full -scale-x-100 text-teal-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexpat"
            x="0"
            y="0"
            width="28"
            height="49"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2)"
          >
            <path
              fill="currentColor"
              d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l11 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexpat)" />
      </svg>
    </div>
  );
}
