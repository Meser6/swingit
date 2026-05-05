import { Reveal } from "../hooks/Reveal";
import { SmartImage } from "./SmartImage";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

/** Jak w ofercie: `https://…`, `/…` z `public/`, albo względna ścieżka → `public/images/…`. */
function resolveLogoRef(ref) {
  if (ref == null || ref === "") return "";
  const s = String(ref).trim();
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("/")) return s;
  return `/images/${s.replace(/^\/+/, "")}`;
}

function TrustedLogo({ item, index }) {
  const { tx } = useContentStrings();
  const src = resolveLogoRef(item.logo);
  const alt = tx(`trustedBy.items[${index}].name`, item.name);

  return (
    <div className="trusted-by__logo-wrap">
      <SmartImage
        className="trusted-by__logo"
        primary={src}
        fallback={src}
        alt={alt}
        width={340}
        height={92}
        loading="eager"
      />
    </div>
  );
}

export function TrustedByMarquee({ items }) {
  const { tx } = useContentStrings();
  const list = items ?? CONTENT.trustedBy.items;
  const ui = CONTENT.ui.trustedBy;
  if (!list?.length) return null;

  const loop = [...list, ...list];

  return (
    <section className="trusted-by" aria-labelledby="trusted-by-heading">
      <Reveal>
        <h2 id="trusted-by-heading" className="section-title">
          {tx("ui.trustedBy.heading", ui.heading)}
        </h2>
      </Reveal>
      <div className="trusted-by-marquee" role="region" aria-label={tx("ui.trustedBy.regionAria", ui.regionAria)}>
        <div className="trusted-by-marquee__track">
          {loop.map((item, i) => (
            <TrustedLogo key={`${item.id}-${i}`} item={item} index={i % list.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
