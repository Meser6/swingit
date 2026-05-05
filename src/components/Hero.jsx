import { IMG, imgPair } from "../constants/images";
import { Reveal } from "../hooks/Reveal";
import { SmartImage } from "./SmartImage";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function Hero() {
  const { tx } = useContentStrings();
  const p = CONTENT.pages.hero;

  return (
    <section className="hero container" id="hero">
      <div className="hero-grid">
        <Reveal>
          <h1>{tx("pages.hero.title", p.title)}</h1>
          <p className="hero-lead">
            {tx("pages.hero.leadBefore", p.leadBefore)}
            <strong style={{ color: "var(--ink)", fontWeight: 700 }}>{tx("pages.hero.leadHighlight", p.leadHighlight)}</strong>
            {tx("pages.hero.leadAfter", p.leadAfter)}
          </p>
          <div className="tags" aria-label={tx("pages.hero.tagsAria", p.tagsAria)}>
            {p.tags.map((label, i) => (
              <span key={label} className="tag">
                {tx(`pages.hero.tags[${i}]`, label)}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="hero-visual media-frame media-frame--4-3">
            <SmartImage
              imageKey="hero"
              {...imgPair(IMG.hero)}
              alt={tx("pages.hero.visualAlt", p.visualAlt)}
              width={800}
              height={600}
              loading="eager"
            />
            <div className="hero-badge">
              {tx("pages.hero.badgeBefore", p.badgeBefore)}
              <strong>{tx("pages.hero.badgeStrong", p.badgeStrong)}</strong>
              {tx("pages.hero.badgeAfter", p.badgeAfter)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
