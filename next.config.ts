import type { NextConfig } from "next";

// כשבונים ל-GitHub Pages, האתר מוגש מתת-נתיב /roei.
// משתנה הסביבה GITHUB_PAGES מופעל רק בבילד של ה-CI (ראו .github/workflows/deploy.yml),
// כך שפיתוח מקומי (next dev) ממשיך לרוץ על הנתיב הרגיל "/".
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "roei";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : "",
};

export default nextConfig;
