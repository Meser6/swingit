import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function GalleryLightbox({ shot, altText, onClose, dialogAria, closeLabel }) {
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);
  const [src, setSrc] = useState(shot.primary ?? "");
  const [portalEl, setPortalEl] = useState(null);

  useLayoutEffect(() => {
    setPortalEl(document.getElementById("gallery-lightbox-mount") ?? document.body);
  }, []);

  useEffect(() => {
    setSrc(shot.primary ?? "");
  }, [shot]);

  useEffect(() => {
    lastFocusRef.current = document.activeElement;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      const prev = lastFocusRef.current;
      if (prev && typeof prev.focus === "function") prev.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const fb = shot.fallback ?? shot.primary ?? "";
  if (!portalEl) return null;

  return createPortal(
    <div className="gallery-lightbox-root" role="presentation">
      <button type="button" className="gallery-lightbox__backdrop" aria-label={closeLabel} onClick={onClose} />
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={dialogAria}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gallery-lightbox__inner">
          <button
            type="button"
            ref={closeBtnRef}
            className="gallery-lightbox__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            ×
          </button>
          <img
            className="gallery-lightbox__img"
            src={src}
            alt={altText}
            decoding="async"
            onError={() => {
              if (fb && src !== fb) setSrc(fb);
            }}
          />
        </div>
      </div>
    </div>,
    portalEl,
  );
}
