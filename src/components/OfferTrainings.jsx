import { useEffect, useMemo, useState } from "react";
import { offerFilterTypes, offerTrainings } from "../data/offerTrainings.js";
import { Reveal } from "../hooks/Reveal";
import { SmartImage } from "./SmartImage";

const PAGE_SIZE = 9;

export function OfferTrainings({ onOpenTraining }) {
  const [filterId, setFilterId] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filterId === "all") return offerTrainings;
    return offerTrainings.filter((t) => t.typeId === filterId);
  }, [filterId]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [filterId]);

  const safePage = Math.min(Math.max(1, page), totalPages);
  const pageSlice = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div className="offer-section">
      <div className="offer-filters offer-filters--buttons" role="toolbar" aria-label="Filtr typu szkolenia">
        {offerFilterTypes.map((ft) => (
          <button
            key={ft.id}
            type="button"
            className={`offer-filter-btn ${filterId === ft.id ? "is-active" : ""}`}
            aria-pressed={filterId === ft.id}
            onClick={() => setFilterId(ft.id)}
          >
            {ft.label}
          </button>
        ))}
      </div>

      <div className="offer-filters-select-wrap">
        <label htmlFor="offer-type-filter" className="offer-filters-select-label">
          Typ szkolenia
        </label>
        <select
          id="offer-type-filter"
          className="offer-filters-select"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
        >
          {offerFilterTypes.map((ft) => (
            <option key={ft.id} value={ft.id}>
              {ft.label}
            </option>
          ))}
        </select>
      </div>

      {pageSlice.length === 0 ? (
        <p className="offer-empty">Brak szkoleń w tej kategorii — wybierz inny typ albo „Wszystkie”.</p>
      ) : (
        <div className="offer-grid">
          {pageSlice.map((item) => (
            <article
              key={item.id}
              className="card offer-card"
              tabIndex={0}
              role="button"
              aria-label={`${item.recommended ? "Polecane. " : ""}${item.title}, ${item.price}. Kliknij lub Enter, aby otworzyć szczegóły.`}
              onClick={() => onOpenTraining(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenTraining(item.id);
                }
              }}
            >
              <Reveal>
                <div className="offer-card__media-wrap">
                  {item.recommended ? (
                    <span className="offer-card__ribbon" aria-hidden="true">
                      Polecamy
                    </span>
                  ) : null}
                  <div className="media-frame card-img-frame">
                    <SmartImage
                      className="card-img"
                      primary={item.images.primary}
                      fallback={item.images.fallback}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="card-actions card-actions--offer">
                  <span className="btn btn-ghost offer-card__cta">Szczegóły</span>
                  <span className="offer-card__price">{item.price}</span>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && pageSlice.length > 0 ? (
        <nav className="offer-pagination" aria-label="Strony listy szkoleń">
          <button
            type="button"
            className="offer-pagination__nav"
            disabled={safePage <= 1}
            aria-disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Poprzednia
          </button>
          <div className="offer-pagination__pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                className={`offer-pagination__page ${safePage === num ? "is-active" : ""}`}
                aria-current={safePage === num ? "page" : undefined}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="offer-pagination__nav"
            disabled={safePage >= totalPages}
            aria-disabled={safePage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Następna
          </button>
        </nav>
      ) : null}
    </div>
  );
}
