import { createPortal } from "react-dom";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SmartImage } from "./SmartImage";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

const PER_SLIDE = 3;
const AUTOPLAY_MS = 10_000;
const SWIPE_MIN_PX = 48;
const GALLERY_LIGHTBOX_MOUNT_ID = "gallery-lightbox-mount";

function chunkItems(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function GalleryLightbox({ shot, altText, onClose, dialogAria, closeLabel }) {
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);
  const [src, setSrc] = useState(shot.primary ?? "");
  const [portalEl, setPortalEl] = useState(null);

  useLayoutEffect(() => {
    setPortalEl(document.getElementById(GALLERY_LIGHTBOX_MOUNT_ID) ?? document.body);
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

/**
 * @param {{ items: Array<{ primary: string, fallback?: string, alt: string }>, altKeyPrefix?: string, uiCopy: object }} props
 */
export function ImageGalleryCarousel({ items, altKeyPrefix = "gallery.items", uiCopy }) {
  const { t, tx } = useContentStrings();
  const slides = useMemo(() => chunkItems(items, PER_SLIDE), [items]);
  const pageCount = slides.length;
  const [page, setPage] = useState(0);
  const pageRef = useRef(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    setPage(0);
    setLightboxIndex(null);
  }, [items]);

  const [autoplayEpoch, setAutoplayEpoch] = useState(0);
  const restartAutoplay = useCallback(() => setAutoplayEpoch((n) => n + 1), []);

  const activePointerId = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(() => setPage((p) => (p + 1) % pageCount), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [pageCount, autoplayEpoch]);

  const onPointerDown = useCallback((e) => {
    if (!e.isPrimary) return;
    activePointerId.current = e.pointerId;
    startX.current = e.clientX;
    startY.current = e.clientY;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      if (activePointerId.current !== e.pointerId) return;
      if (pageCount <= 1) {
        activePointerId.current = null;
        return;
      }
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      activePointerId.current = null;
      if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return;
      const p = pageRef.current;
      let next = p;
      if (dx < 0 && p < pageCount - 1) next = p + 1;
      else if (dx > 0 && p > 0) next = p - 1;
      if (next !== p) {
        setPage(next);
        restartAutoplay();
      }
    },
    [pageCount, restartAutoplay],
  );

  const onPointerCancel = useCallback((e) => {
    if (activePointerId.current === e.pointerId) activePointerId.current = null;
  }, []);

  const lightboxShot = lightboxIndex != null && items[lightboxIndex] ? items[lightboxIndex] : null;
  const lightboxAlt =
    lightboxShot != null ? tx(`${altKeyPrefix}[${lightboxIndex}].alt`, lightboxShot.alt) : "";

  if (items.length === 0) {
    return <p className="gallery-empty">Brak zdjęć w tej kategorii.</p>;
  }

  return (
    <div className="about-carousel" role="region" aria-label={tx("ui.gallery.regionAria", uiCopy.regionAria)}>
      {lightboxShot != null ? (
        <GalleryLightbox
          shot={lightboxShot}
          altText={lightboxAlt}
          onClose={() => setLightboxIndex(null)}
          dialogAria={t("ui.gallery.lightboxDialogAria", uiCopy.lightboxDialogAria)}
          closeLabel={t("ui.gallery.lightboxCloseAria", uiCopy.lightboxCloseAria)}
        />
      ) : null}

      <div
        className="about-carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div className="about-carousel__track" style={{ transform: `translate3d(-${page * 100}%, 0, 0)` }}>
          {slides.map((group, slideIdx) => (
            <div
              key={slideIdx}
              id={`gallery-slide-${slideIdx}`}
              className="about-carousel__slide"
              aria-hidden={page !== slideIdx}
              role="group"
              aria-roledescription={tx("ui.gallery.slideRole", uiCopy.slideRole)}
              aria-label={t("ui.gallery.slideLabel", { n: String(slideIdx + 1), total: String(pageCount) })}
            >
              {group.map((shot, i) => {
                const gIdx = slideIdx * PER_SLIDE + i;
                const alt = tx(`${altKeyPrefix}[${gIdx}].alt`, shot.alt);
                return (
                  <button
                    key={`${shot.alt}-${slideIdx}-${i}`}
                    type="button"
                    className="about-gallery__thumb-btn"
                    aria-label={t("ui.gallery.openLightboxAria", { alt })}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(gIdx);
                      restartAutoplay();
                    }}
                  >
                    <div className="media-frame media-frame--4-3 about-gallery__frame">
                      <SmartImage
                        primary={shot.primary}
                        fallback={shot.fallback}
                        alt={alt}
                        loading="lazy"
                        className="about-gallery__img"
                        draggable={false}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 ? (
        <nav className="about-carousel__dots" aria-label={tx("ui.gallery.dotsAria", uiCopy.dotsAria)}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`about-carousel__dot ${page === i ? "is-active" : ""}`}
              aria-current={page === i ? "true" : undefined}
              aria-label={t("ui.gallery.dotLabel", { n: String(i + 1), total: String(pageCount) })}
              onClick={() => {
                setPage(i);
                restartAutoplay();
              }}
            />
          ))}
        </nav>
      ) : null}
    </div>
  );
}
