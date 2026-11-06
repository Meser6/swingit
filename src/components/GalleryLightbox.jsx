import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { publicPath } from "../lib/publicPath.js";

const SWIPE_THRESHOLD = 50;
const VERTICAL_RESTRAINT = 80;

export function GalleryLightbox({ shot, altText, onClose, onNext, onPrev, dialogAria, closeLabel }) {
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);
  const touchRef = useRef({ x: 0, y: 0 });
  const [portalEl, setPortalEl] = useState(null);

  useLayoutEffect(() => {
    setPortalEl(document.getElementById("gallery-lightbox-mount") ?? document.body);
  }, []);

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
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > VERTICAL_RESTRAINT) return;
    if (dx < 0) onNext?.();
    else onPrev?.();
  };

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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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

          {onPrev ? (
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              aria-label="Poprzednie zdjęcie"
              onClick={onPrev}
            >
              ‹
            </button>
          ) : null}

          <img className="gallery-lightbox__img" src={publicPath(shot.src)} alt={altText} decoding="async" />

          {onNext ? (
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              aria-label="Następne zdjęcie"
              onClick={onNext}
            >
              ›
            </button>
          ) : null}
        </div>
      </div>
    </div>,
    portalEl,
  );
}
