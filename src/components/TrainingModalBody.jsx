import { forwardRef } from "react";
import { IMG } from "../constants/images.js";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export const TrainingModalBody = forwardRef(function TrainingModalBody({ item, detail }, ref) {
  const { tx } = useContentStrings();
  const tm = CONTENT.ui.trainingModal;
  const lb = tm.labels;
  const tid = item?.id ?? "";

  if (!item) {
    return <p className="training-modal__placeholder">{tx("ui.trainingModal.notFound", tm.notFound)}</p>;
  }

  const intro = detail?.intro ?? item.summary;
  const introKey = detail?.intro
    ? `offer.trainings.${tid}.detail.intro`
    : `offer.trainings.${tid}.summary`;
  const program = detail?.program?.length ? detail.program : null;
  const competencies = detail?.competencies?.length ? detail.competencies : null;
  const duration = detail?.duration;
  const maxParticipants = detail?.maxParticipants;
  const target = detail?.target;
  const priceNote = detail?.priceNote;

  const orgRows = [
    duration ? { label: lb.duration, labelKey: "ui.trainingModal.labels.duration", value: duration, valueKey: `offer.trainings.${tid}.detail.duration` } : null,
    item.price ? { label: lb.price, labelKey: "ui.trainingModal.labels.price", value: item.price, valueKey: `offer.trainings.${tid}.price` } : null,
    maxParticipants
      ? { label: lb.maxParticipants, labelKey: "ui.trainingModal.labels.maxParticipants", value: maxParticipants, valueKey: `offer.trainings.${tid}.detail.maxParticipants` }
      : null,
    target ? { label: lb.target, labelKey: "ui.trainingModal.labels.target", value: target, valueKey: `offer.trainings.${tid}.detail.target` } : null,
  ].filter(Boolean);

  const hi = CONTENT.ui.header;
  const pdfUi = CONTENT.ui.pdf;
  const co = CONTENT.contact;
  const pdfLogoSrc = IMG.logo.file || IMG.logo.url || "/images/brand/logo.svg";

  return (
    <div ref={ref} className="training-modal__shell training-modal training-modal--pdf-root">
      <header className="training-pdf-header">
        <img
          className="training-pdf-header__mark"
          src={pdfLogoSrc}
          alt=""
          width={38}
          height={38}
          loading="eager"
          decoding="async"
        />
        <div className="training-pdf-header__brand">
          <span className="training-pdf-header__title">{tx("ui.header.logoTitle", hi.logoTitle)}</span>
          <small className="training-pdf-header__subtitle">{tx("ui.header.logoSubtitle", hi.logoSubtitle)}</small>
        </div>
      </header>
      <section className="training-modal__block" aria-labelledby="tm-org-heading">
        <h3 id="tm-org-heading" className="training-modal__heading">
          {tx("ui.trainingModal.orgHeading", tm.orgHeading)}
        </h3>
        {orgRows.length > 0 ? (
          <table className="training-modal__org-table">
            <tbody>
              {orgRows.map((row) => (
                <tr key={row.labelKey}>
                  <td className="training-modal__org-label">{tx(row.labelKey, row.label)}</td>
                  <td className="training-modal__org-value">{tx(row.valueKey, row.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="training-modal__placeholder">{tx("ui.trainingModal.orgFallback", tm.orgFallback)}</p>
        )}
        {priceNote ? (
          <p className="training-modal__price-note">{tx(`offer.trainings.${tid}.detail.priceNote`, priceNote)}</p>
        ) : null}
      </section>

      <section className="training-modal__block" aria-labelledby="tm-intro-heading">
        <h3 id="tm-intro-heading" className="training-modal__heading">
          {tx("ui.trainingModal.introHeading", tm.introHeading)}
        </h3>
        <p className="training-modal__intro">{tx(introKey, intro)}</p>
      </section>

      <section className="training-modal__block" aria-labelledby="tm-program-heading">
        <h3 id="tm-program-heading" className="training-modal__heading">
          {tx("ui.trainingModal.programHeading", tm.programHeading)}
        </h3>
        {program ? (
          <ul className="training-modal__list">
            {program.map((line, i) => (
              <li key={i}>{tx(`offer.trainings.${tid}.detail.program[${i}]`, line)}</li>
            ))}
          </ul>
        ) : (
          <p className="training-modal__placeholder">{tx("ui.trainingModal.programFallback", tm.programFallback)}</p>
        )}
      </section>

      <section className="training-modal__block" aria-labelledby="tm-comp-heading">
        <h3 id="tm-comp-heading" className="training-modal__heading">
          {tx("ui.trainingModal.compHeading", tm.compHeading)}
        </h3>
        {competencies ? (
          <ul className="training-modal__list">
            {competencies.map((line, i) => (
              <li key={i}>{tx(`offer.trainings.${tid}.detail.competencies[${i}]`, line)}</li>
            ))}
          </ul>
        ) : (
          <p className="training-modal__placeholder">{tx("ui.trainingModal.compFallback", tm.compFallback)}</p>
        )}
      </section>

      <footer className="training-pdf-footer">
        <p className="training-pdf-footer__title">{tx("ui.pdf.contactFooterTitle", pdfUi.contactFooterTitle)}</p>
        <p className="training-pdf-footer__name">{tx("contact.fullName", co.fullName)}</p>
        <p className="training-pdf-footer__line">
          <span>{tx("contact.phoneDisplay", co.phoneDisplay)}</span>
          <span className="training-pdf-footer__sep" aria-hidden="true">
            ·
          </span>
          <span>{tx("contact.email", co.email)}</span>
        </p>
      </footer>
    </div>
  );
});
