/** Ścieżki z `public/` — poprawny prefiks na GitHub Pages (`/swingit/`). */
export function publicPath(path) {
  if (path == null || path === "") return path;
  const s = String(path).trim();
  if (/^https?:\/\//i.test(s)) return s;
  const clean = s.startsWith("/") ? s.slice(1) : s;
  return `${import.meta.env.BASE_URL}${clean}`;
}
