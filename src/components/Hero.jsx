import { INSTAGRAM_URL } from "../constants/social.js";
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
      <div className="hero-band">
        <div className="hero-grid">
          <Reveal>
            <div className="hero-copy">
              <h1>{tx("pages.hero.title", p.title)}</h1>
              <p className="hero-lead">
                {tx("pages.hero.leadBefore", p.leadBefore)}
                <strong>{tx("pages.hero.leadHighlight", p.leadHighlight)}</strong>
                {tx("pages.hero.leadAfter", p.leadAfter)}
              </p>
              <div className="hero-copy__tags" role="group" aria-label={tx("pages.hero.tagsAria", p.tagsAria)}>
                {p.tags.map((label, i) => (
                  <button key={label} type="button" className="hero-role-btn">
                    {tx(`pages.hero.tags[${i}]`, label)}
                  </button>
                ))}
              </div>
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
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <strong>{tx("pages.hero.badgeStrong", p.badgeStrong)}</strong>
                </a>
                {tx("pages.hero.badgeAfter", p.badgeAfter)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
