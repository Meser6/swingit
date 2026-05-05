import faqData from "../content/faq.json";
import { Reveal } from "../hooks/Reveal";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function FaqSection() {
  const { tx } = useContentStrings();

  return (
    <div className="faq-list">
      {faqData.questions.map((item, index) => (
        <Reveal key={`${index}-${item.question}`}>
          <details className="faq-item" name="faq-compas">
            <summary className="faq-item__summary">{tx(`faq.questions[${index}].question`, item.question)}</summary>
            <div className="faq-item__body">
              <p>{tx(`faq.questions[${index}].answer`, item.answer)}</p>
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
