import { useEffect, useRef } from "react";
import { WESELE_Z_KLASA_URL, GOOGLE_REVIEWS_URL } from "../constants/social.js";

const WZK_WIDGET_HTML = `<div style="width:1330px;max-width:100%;border-radius:8px;box-shadow: 0 1px 6px #B8C5D366;overflow:hidden;" class="wzk-widget iframe-height" data-wzk-widget-type="type3" data-wzk-notice="57996"><div style="background-color:#F5F6FA;text-align:center;padding:16px;font-size:12px;line-height:12px;"><a class="wzk-accent-color" title="SWING IT DJ Bartłomiej Nawrot" href="https://www.weselezklasa.pl/ogloszenia-weselne/swing-it-dj-bartlomiej-nawrot,57996/#opinie" rel="nofollow" target="_blank" style="color:currentColor;text-decoration:none;">SWING IT DJ Bartłomiej Nawrot</a><img style="margin:8px auto 0;display:block" src="https://widgets.4wzk.pl/dist/img/footer-logo.svg" alt="Wesele z klasą"></div></div>`;

const WZK_SCRIPT_SRC = "https://widgets.4wzk.pl/dist/js/widget.js";

let wzkScriptLoading = false;
let wzkScriptLoaded = false;

function loadWzkScript() {
  if (wzkScriptLoaded || wzkScriptLoading) return;
  if (document.querySelector(`script[src="${WZK_SCRIPT_SRC}"]`)) {
    wzkScriptLoaded = true;
    return;
  }
  wzkScriptLoading = true;
  const script = document.createElement("script");
  script.src = WZK_SCRIPT_SRC;
  script.defer = true;
  script.onload = () => {
    wzkScriptLoaded = true;
    wzkScriptLoading = false;
  };
  script.onerror = () => {
    wzkScriptLoading = false;
  };
  document.body.appendChild(script);
}

export function OpinionsPanel({ showGoogleLink = false, linkLabel = "Profil SWING IT na Wesele z klasą" }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = WZK_WIDGET_HTML;
    loadWzkScript();
  }, []);

  return (
    <div className="opinions-panel">
      <div ref={widgetRef} className="opinions-panel__widget" aria-live="polite" />
      <div className="opinions-panel__links">
        <a className="opinions-panel__link" href={WESELE_Z_KLASA_URL} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </a>
        {showGoogleLink ? (
          <a className="opinions-panel__link" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Zobacz opinie w Google
          </a>
        ) : null}
      </div>
    </div>
  );
}
