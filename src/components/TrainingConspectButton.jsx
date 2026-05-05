import { useCallback, useState } from "react";
import { downloadTrainingPdf, trainingPdfFilename } from "../utils/trainingPdf.js";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function TrainingConspectButton({ pdfTargetRef, item }) {
  const { tx } = useContentStrings();
  const [busy, setBusy] = useState(false);
  const p = CONTENT.ui.pdf;

  const onClick = useCallback(async () => {
    const el = pdfTargetRef?.current;
    if (!el || !item) return;
    setBusy(true);
    try {
      await downloadTrainingPdf(el, trainingPdfFilename(item.title));
    } catch (e) {
      console.error(e);
      alert(tx("ui.pdf.errorAlert", p.errorAlert));
    } finally {
      setBusy(false);
    }
  }, [item, pdfTargetRef, tx]);

  return (
    <button
      type="button"
      className="btn btn-primary modal-conspect-btn"
      onClick={onClick}
      disabled={busy || !item}
      aria-busy={busy}
    >
      {busy ? tx("ui.pdf.generating", p.generating) : tx("ui.pdf.downloadConspect", p.downloadConspect)}
    </button>
  );
}
