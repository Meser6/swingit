/**
 * Grafiki globalne — wpis: **`file` i/lub `url`** (wystarczy jedno).
 */
export const IMG = {
  logo: {
    file: "/images/brand/logo.svg",
  },
  hero: {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
  },
  featuresLeft: {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
  },
  featuresRight: {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
  },
  aboutPortrait: {
    file: "/images/about/test.jpg",
  },
  contactVisual: {
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
  },
};

export function imgPair(entry) {
  const primary = entry?.file ?? entry?.url ?? "";
  const fallback = entry?.fallback ?? entry?.url ?? entry?.file ?? primary;
  return { primary, fallback, keysSource: entry };
}
