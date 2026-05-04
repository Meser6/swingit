import { faqItems } from "../data/faq";
import { Reveal } from "../hooks/Reveal";

export function FaqSection() {
  return (
    <div className="faq-list">
      {faqItems.map((item) => (
        <Reveal key={item.id}>
          <details className="faq-item" name="faq-compas">
            <summary className="faq-item__summary">{item.q}</summary>
            <div className="faq-item__body">
              <p>{item.a}</p>
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
