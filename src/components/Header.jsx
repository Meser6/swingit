import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const TABS = [
  { id: "start", label: "Start" },
  { id: "o-mnie", label: "O mnie" },
  { id: "oferta", label: "Oferta" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
];

const MOBILE_NAV_MQ = "(max-width: 850px)";
/** Poniżej tej pozycji zakładki zawsze widoczne. */
const SCROLL_EXPAND_BELOW = 40;
/** Powyżej — zwinięte (środek „martwej strefy” zapobiega migotaniu na granicy). */
const SCROLL_COLLAPSE_ABOVE = 72;

export function Header({ activeTab, onTab, onOpenContact, onBrandClick }) {
  const [tabsCollapsed, setTabsCollapsed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);

    const update = () => {
      if (!mq.matches) {
        setTabsCollapsed(false);
        return;
      }
      const y = window.scrollY;
      setTabsCollapsed((collapsed) => {
        if (y <= SCROLL_EXPAND_BELOW) return false;
        if (y >= SCROLL_COLLAPSE_ABOVE) return true;
        return collapsed;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    mq.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <header className={`site-header${tabsCollapsed ? " site-header--tabs-collapsed" : ""}`}>
      <div className="container header-inner">
        <div className="header-top-bar">
          <a
            className="brand"
            href="#top"
            aria-label="Compas — strona główna"
            onClick={(e) => {
              e.preventDefault();
              onBrandClick?.();
            }}
          >
            <BrandMark />
            <span className="logo">
              Compas
              <small>dr Syrek</small>
            </span>
          </a>
          <button type="button" className="header-cta" onClick={onOpenContact}>
            Napisz do mnie
          </button>
        </div>
        <div className="header-nav-region">
          <nav className="nav-tabs" role="tablist" aria-label="Sekcje strony">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={activeTab === t.id}
                aria-controls={`panel-${t.id}`}
                data-tab={t.id}
                onClick={() => onTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
