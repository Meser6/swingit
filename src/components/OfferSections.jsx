import offerSections from "../content/offerSections.json";
import { Reveal } from "../hooks/Reveal.jsx";
import { SmartImage } from "./SmartImage.jsx";

export function OfferSections() {
  return (
    <div className="offer-sections">
      {offerSections.sections.map((section, i) => {
        const reverse = i % 2 === 1;
        return (
          <div key={section.id} className={`split offer-section-block ${reverse ? "offer-section-block--reverse" : ""}`}>
            <Reveal>
              <div className="offer-section-block__copy tile-accent tile-accent--text">
                <span className="offer-section-block__number">{section.number}</span>
                <h3 className="offer-section-block__title">{section.title}</h3>
                <p>{section.body}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="media-frame media-frame--4-3 tile-accent">
                <SmartImage src={section.image} alt={section.title} loading="lazy" />
              </div>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
