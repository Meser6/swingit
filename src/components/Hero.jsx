import { INSTAGRAM_URL } from "../constants/social.js";
import { IMG } from "../constants/images.js";
import { Reveal } from "../hooks/Reveal.jsx";
import { SmartImage } from "./SmartImage.jsx";
import pages from "../content/pages.json";

export function Hero() {
  const p = pages.hero;

  return (
    <section className="hero container" id="hero">
      <div className="hero-band">
        <div className="hero-grid">
          <Reveal>
            <div className="hero-copy">
              <p className="hero-eyebrow">{p.eyebrow}</p>
              <h1>{p.title}</h1>
              <p className="hero-lead">
                {p.leadBefore}
                <strong>{p.leadHighlight}</strong>
                {p.leadAfter}
              </p>
              <div className="hero-copy__tags" role="group" aria-label={p.tagsAria}>
                {p.tags.map((label) => (
                  <span key={label} className="hero-role-btn">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="hero-visual media-frame media-frame--4-3">
              <SmartImage src={IMG.hero} alt={p.visualAlt} width={800} height={600} loading="eager" />
              <div className="hero-badge">
                {p.badgeBefore}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <strong>{p.badgeStrong}</strong>
                </a>
                {p.badgeAfter}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
