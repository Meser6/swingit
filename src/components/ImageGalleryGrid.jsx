import { useEffect, useState } from "react";
import { SmartImage } from "./SmartImage";
import { GalleryLightbox } from "./GalleryLightbox.jsx";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

/**
 * @param {{ items: Array<{ primary: string, fallback?: string, alt: string }>, altKeyPrefix?: string, uiCopy: object }} props
 */
export function ImageGalleryGrid({ items, altKeyPrefix = "gallery.items", uiCopy }) {
  const { t, tx } = useContentStrings();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [items]);

  const lightboxShot = lightboxIndex != null && items[lightboxIndex] ? items[lightboxIndex] : null;
  const lightboxAlt =
    lightboxShot != null ? tx(`${altKeyPrefix}[${lightboxIndex}].alt`, lightboxShot.alt) : "";

  if (items.length === 0) {
    return <p className="gallery-empty">Brak zdjęć w tej kategorii.</p>;
  }

  return (
    <div className="gallery-grid" role="region" aria-label={tx("ui.gallery.regionAria", uiCopy.regionAria)}>
      {lightboxShot != null ? (
        <GalleryLightbox
          shot={lightboxShot}
          altText={lightboxAlt}
          onClose={() => setLightboxIndex(null)}
          dialogAria={t("ui.gallery.lightboxDialogAria", uiCopy.lightboxDialogAria)}
          closeLabel={t("ui.gallery.lightboxCloseAria", uiCopy.lightboxCloseAria)}
        />
      ) : null}

      <div className="gallery-grid__items">
        {items.map((shot, i) => {
          const alt = tx(`${altKeyPrefix}[${i}].alt`, shot.alt);
          return (
            <button
              key={`${shot.alt}-${i}`}
              type="button"
              className="about-gallery__thumb-btn"
              aria-label={t("ui.gallery.openLightboxAria", { alt })}
              onClick={() => setLightboxIndex(i)}
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
    </div>
  );
}
