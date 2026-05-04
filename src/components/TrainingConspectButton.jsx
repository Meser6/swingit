import { useCallback, useState } from "react";
import { downloadTrainingPdf, trainingPdfFilename } from "../utils/trainingPdf.js";

export function TrainingConspectButton({ pdfTargetRef, item }) {
  const [busy, setBusy] = useState(false);

  const onClick = useCallback(async () => {
    const el = pdfTargetRef?.current;
    if (!el || !item) return;
    setBusy(true);
    try {
      await downloadTrainingPdf(el, trainingPdfFilename(item.title));
    } catch (e) {
      console.error(e);
      alert("Nie udało się wygenerować pliku PDF. Spróbuj ponownie za chwilę.");
    } finally {
      setBusy(false);
    }
  }, [item, pdfTargetRef]);

  return (
    <button
      type="button"
      className="btn btn-primary modal-conspect-btn"
      onClick={onClick}
      disabled={busy || !item}
      aria-busy={busy}
    >
      {busy ? "Generowanie…" : "Pobierz konspekt"}
    </button>
  );
}
