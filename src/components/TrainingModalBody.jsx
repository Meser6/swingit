import { forwardRef } from "react";

export const TrainingModalBody = forwardRef(function TrainingModalBody({ item, detail }, ref) {
  if (!item) {
    return (
      <p className="training-modal__placeholder">
        Nie znaleziono szczegółów tej pozycji. Odśwież stronę lub skontaktuj się bezpośrednio.
      </p>
    );
  }

  const intro = detail?.intro ?? item.summary;
  const program = detail?.program?.length ? detail.program : null;
  const competencies = detail?.competencies?.length ? detail.competencies : null;
  const duration = detail?.duration;
  const maxParticipants = detail?.maxParticipants;
  const target = detail?.target;
  const priceNote = detail?.priceNote;

  const orgRows = [
    duration ? { label: "Czas trwania", value: duration } : null,
    item.price ? { label: "Orientacyjna cena", value: item.price } : null,
    maxParticipants ? { label: "Liczba uczestników", value: maxParticipants } : null,
    target ? { label: "Grupa docelowa", value: target } : null,
  ].filter(Boolean);

  return (
    <div ref={ref} className="training-modal__shell training-modal training-modal--pdf-root">
      <section className="training-modal__block" aria-labelledby="tm-org-heading">
        <h3 id="tm-org-heading" className="training-modal__heading">
          Informacje organizacyjne
        </h3>
        {orgRows.length > 0 ? (
          <table className="training-modal__org-table">
            <tbody>
              {orgRows.map((row) => (
                <tr key={row.label}>
                  <td className="training-modal__org-label">{row.label}</td>
                  <td className="training-modal__org-value">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="training-modal__placeholder">
            Szczegóły organizacyjne ustalamy indywidualnie przy zapytaniu ofertowym.
          </p>
        )}
        {priceNote ? <p className="training-modal__price-note">{priceNote}</p> : null}
      </section>

      <section className="training-modal__block" aria-labelledby="tm-intro-heading">
        <h3 id="tm-intro-heading" className="training-modal__heading">
          Charakter i zakres
        </h3>
        <p className="training-modal__intro">{intro}</p>
      </section>

      <section className="training-modal__block" aria-labelledby="tm-program-heading">
        <h3 id="tm-program-heading" className="training-modal__heading">
          Program
        </h3>
        {program ? (
          <ul className="training-modal__list">
            {program.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="training-modal__placeholder">
            Ramowy program ustalamy po rozpoznaniu potrzeb zamawiającego i dopasowujemy do kontekstu grupy.
          </p>
        )}
      </section>

      <section className="training-modal__block" aria-labelledby="tm-comp-heading">
        <h3 id="tm-comp-heading" className="training-modal__heading">
          Zdobyte kompetencje
        </h3>
        {competencies ? (
          <ul className="training-modal__list">
            {competencies.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="training-modal__placeholder">
            Efekty uczenia się precyzujemy w kontrakcie szkolenia, po uzgodnieniu celów biznesowych i uczestników.
          </p>
        )}
      </section>
    </div>
  );
});
