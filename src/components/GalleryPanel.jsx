import { useMemo, useState } from "react";
import gallery from "../content/gallery.json";
import { ImageGalleryGrid } from "./ImageGalleryGrid.jsx";

export function GalleryPanel() {
  const [filterId, setFilterId] = useState("all");

  const filteredItems = useMemo(() => {
    if (filterId === "all") return gallery.items;
    return gallery.items.filter((item) => item.category === filterId);
  }, [filterId]);

  return (
    <div className="gallery-panel">
      <div className="offer-filters" role="toolbar" aria-label="Filtr kategorii galerii">
        {gallery.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`offer-filter-btn ${filterId === cat.id ? "is-active" : ""}`}
            aria-pressed={filterId === cat.id}
            onClick={() => setFilterId(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <ImageGalleryGrid items={filteredItems} />
    </div>
  );
}
