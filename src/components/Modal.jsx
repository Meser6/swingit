import { isValidElement, useEffect, useRef } from "react";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function Modal({ open, onClose, title, children, variant = "default", headerTrailing = null }) {
  const { t } = useContentStrings();
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);
  const closeLabel = t("ui.modal.closeAria");

  useEffect(() => {
    if (!open) return;
    lastFocusRef.current = document.activeElement;
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 0);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = "";
      const prev = lastFocusRef.current;
      if (prev && typeof prev.focus === "function") prev.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="modal-backdrop is-open"
        aria-hidden="false"
        onClick={onClose}
      />
      <div
        className={`modal is-open${variant === "sheet" ? " modal--sheet" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          {headerTrailing && isValidElement(headerTrailing) ? (
            <div className="modal-header-actions">
              {headerTrailing}
              <button
                type="button"
                ref={closeBtnRef}
                className="modal-close modal-close--white"
                aria-label={closeLabel}
                onClick={onClose}
              >
                ×
              </button>
            </div>
          ) : (
            <button
              type="button"
              ref={closeBtnRef}
              className="modal-close"
              aria-label={closeLabel}
              onClick={onClose}
            >
              ×
            </button>
          )}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
}
