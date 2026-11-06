import { useEffect, useState } from "react";
import { SmartImage } from "./SmartImage.jsx";
import { GalleryLightbox } from "./GalleryLightbox.jsx";

export function ImageGalleryGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [items]);

  const lightboxShot = lightboxIndex != null ? items[lightboxIndex] : null;

  if (items.length === 0) {
    return <p className="gallery-empty">Brak zdjęć w tej kategorii.</p>;
  }

  return (
    <div className="gallery-grid" role="region" aria-label="Galeria zdjęć">
      {lightboxShot != null ? (
        <GalleryLightbox
          shot={lightboxShot}
          altText={lightboxShot.alt}
          onClose={() => setLightboxIndex(null)}
          dialogAria="Powiększone zdjęcie"
          closeLabel="Zamknij powiększone zdjęcie"
        />
      ) : null}

      <div className="gallery-grid__items">
        {items.map((shot, i) => (
          <button
            key={`${shot.src}-${i}`}
            type="button"
            className="gallery-grid__thumb-btn"
            aria-label={`Otwórz zdjęcie na pełnym ekranie: ${shot.alt}`}
            onClick={() => setLightboxIndex(i)}
          >
            <div className="media-frame media-frame--4-3 gallery-grid__frame">
              <SmartImage src={shot.src} alt={shot.alt} loading="lazy" className="gallery-grid__img" draggable={false} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
