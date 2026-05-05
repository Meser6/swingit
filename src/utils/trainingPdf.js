/** Bezpieczna nazwa pliku: `Compas-Nazwa-szkolenia.pdf` */
export function trainingPdfFilename(title) {
  const slug = String(title)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `Compas-${slug || "szkolenie"}.pdf`;
}

/**
 * @param {HTMLElement} element
 * @param {string} filename
 */
export async function downloadTrainingPdf(element, filename) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  /** Jedna strona A4: przeskaluj całość, żeby zmieściła się z marginesem (bez cięcia na strony). */
  const marginMm = 6;
  const maxW = pageWidth - 2 * marginMm;
  const maxH = pageHeight - 2 * marginMm;
  const imgAspect = canvas.width / canvas.height;

  let drawW = maxW;
  let drawH = drawW / imgAspect;
  if (drawH > maxH) {
    drawH = maxH;
    drawW = drawH * imgAspect;
  }

  const x = (pageWidth - drawW) / 2;
  const y = marginMm + (maxH - drawH) / 2;

  pdf.addImage(imgData, "JPEG", x, y, drawW, drawH);

  pdf.save(filename);
}
