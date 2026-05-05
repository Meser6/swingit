/**
 * Grafiki globalne — wpis: **`file` i/lub `url`** (wystarczy jedno).
 * Oba: `primary` = plik z `public/`, `fallback` = URL. Tylko jedno: jedno źródło, bez zapasu.
 * Użycie: `{...imgPair(IMG.hero)}` z `SmartImage` + `imageKey`.
 */
export const IMG = {
  /** Logo w nagłówku — `public/images/brand/logo.svg` (lub sam `url`). */
  logo: {
   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnvL0Q4cssjI9-YIK60fS9oPz2DXx1RU4nw&s"
  },
  hero: {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
  },
  featuresLeft: {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  },
  featuresRight: {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  },
  landingLeft: {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
  },
  pricingLeft: {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  pricingRight: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  registerRight: {
    url: "https://polska-flaga.pl/userdata/public/gfx/3548/arka.jpg",
  },
  /** Portret „O mnie” — plik: `public/images/about/portrait.avif` (URL `/images/about/…`) lub zostaw url. */
  aboutPortrait: {
    file: "/images/about/test.jpg",
  },
};

/**
 * Props pod `SmartImage`: `primary` / `fallback` oraz `keysSource` (surowe `file`/`url` do podglądu kluczy).
 */
export function imgPair(entry) {
  const file = typeof entry.file === "string" ? entry.file.trim() : "";
  const url = typeof entry.url === "string" ? entry.url.trim() : "";
  if (!file && !url) {
    throw new Error("IMG: podaj `file` albo `url` (albo oba)");
  }
  const primary = file || url;
  const fallback = file && url ? url : "";
  return {
    primary,
    fallback,
    keysSource: { file, url },
  };
}
