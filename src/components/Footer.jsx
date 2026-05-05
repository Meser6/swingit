import { INSTAGRAM_URL, LINKEDIN_URL } from "../constants/social.js";
import { CONTENT, resolveT } from "../lib/t.js";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { useContentStrings } from "../context/ContentStringsContext.jsx";

export function Footer() {
  const { t, tx, showKeys, setShowKeys } = useContentStrings();
  const toggleLabel = showKeys ? resolveT("ui.footer.hideKeys") : resolveT("ui.footer.showKeys");
  const toggleTitle = resolveT("ui.footer.toggleKeysTitle");
  const co = CONTENT.contact;

  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-identity">
          <p className="footer-identity__name">{tx("contact.fullName", co.fullName)}</p>
          <p className="footer-identity__reach">
            <a href={`tel:${co.phoneTel}`}>{tx("contact.phoneDisplay", co.phoneDisplay)}</a>
            <span className="footer-identity__dot" aria-hidden="true">
              ·
            </span>
            <a href={`mailto:${co.email}`}>{tx("contact.email", co.email)}</a>
          </p>
        </div>
        <div className="footer-row">
          <span>{t("ui.footer.copyright")}</span>
          <div className="footer-end">
            <div className="social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-pill"
                aria-label={t("ui.footer.instagramAria")}
              >
                <InstagramIcon width={20} height={20} /> {t("ui.footer.instagram")}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-pill"
                aria-label={t("ui.footer.linkedinAria")}
              >
                <LinkedInIcon width={20} height={20} /> {t("ui.footer.linkedin")}
              </a>
            </div>
            <button
              type="button"
              className="footer-keys-toggle"
              onClick={() => setShowKeys((v) => !v)}
              aria-pressed={showKeys}
              title={toggleTitle}
            >
              {toggleLabel}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
