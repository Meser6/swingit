import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";
import { Reveal } from "../hooks/Reveal";
import { SmartImage } from "./SmartImage";

export function OfferSections() {
  const { tx } = useContentStrings();
  const data = CONTENT.offerSections;

  return (
    <div className="offer-sections">
      <p className="offer-sections__intro">{tx("offerSections.intro", data.intro)}</p>
      {data.sections.map((section, i) => {
        const reverse = i % 2 === 1;
        return (
          <div key={section.id} className={`split offer-section-block ${reverse ? "split--reverse-mobile" : ""}`}>
            <Reveal>
              <div className="offer-section-block__copy tile-accent tile-accent--text">
                <h3 className="offer-section-block__title">
                  {tx(`offerSections.sections[${i}].title`, section.title)}
                </h3>
                <p>{tx(`offerSections.sections[${i}].body`, section.body)}</p>
              </div>
            </Reveal>
            {section.image ? (
              <Reveal>
                <div className="media-frame media-frame--4-3 tile-accent">
                  <SmartImage
                    primary={section.image}
                    fallback={section.image}
                    alt={tx(`offerSections.sections[${i}].title`, section.title)}
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
