import { BrandMark } from "./BrandMark.jsx";
import ui from "../content/ui.json";
import pages from "../content/pages.json";

export function Header({ activeTab, onTab, onBrandClick }) {
  const tabs = pages.navigation.tabs;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-top-bar">
          <a
            className="brand"
            href="#top"
            aria-label={ui.header.brandAriaLabel}
            onClick={(e) => {
              e.preventDefault();
              onBrandClick?.();
            }}
          >
            <BrandMark />
            <span className="logo">
              {ui.header.logoTitle}
              <small>{ui.header.logoSubtitle}</small>
            </span>
          </a>
          <button type="button" className="header-cta" onClick={() => onTab("kontakt")}>
            {ui.header.cta}
          </button>
        </div>
        <div className="header-nav-region">
          <nav className="nav-tabs" role="tablist" aria-label={ui.header.navAriaLabel}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                data-tab={tab.id}
                onClick={() => onTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
