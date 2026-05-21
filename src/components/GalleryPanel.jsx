import { useMemo, useState } from "react";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";
import { ImageGalleryGrid } from "./ImageGalleryGrid.jsx";

export function GalleryPanel() {
  const { tx } = useContentStrings();
  const data = CONTENT.gallery;
  const uiCopy = CONTENT.ui.gallery;
  const [filterId, setFilterId] = useState("all");

  const filteredItems = useMemo(() => {
    if (filterId === "all") return data.items;
    return data.items.filter((item) => item.category === filterId);
  }, [filterId, data.items]);

  return (
    <div className="gallery-panel">
      <div className="offer-filters offer-filters--buttons" role="toolbar" aria-label={tx("ui.gallery.filterToolbarAria", uiCopy.filterToolbarAria)}>
        {data.categories.map((cat, i) => (
          <button
            key={cat.id}
            type="button"
            className={`offer-filter-btn ${filterId === cat.id ? "is-active" : ""}`}
            aria-pressed={filterId === cat.id}
            onClick={() => setFilterId(cat.id)}
          >
            {tx(`gallery.categories[${i}].label`, cat.label)}
          </button>
        ))}
      </div>
      <ImageGalleryGrid items={filteredItems} altKeyPrefix="gallery.items" uiCopy={uiCopy} />
    </div>
  );
}
