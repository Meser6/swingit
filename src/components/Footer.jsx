import contact from "../content/contact.json";
import ui from "../content/ui.json";
import { SocialLinks } from "./SocialLinks.jsx";

export function Footer() {
  const copyright = ui.footer.copyright.replace("{{year}}", String(new Date().getFullYear()));

  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-identity">
          <p className="footer-identity__name">{contact.fullName}</p>
          <p className="footer-identity__reach">
            <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            <span className="footer-identity__dot" aria-hidden="true">
              ·
            </span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
        <div className="footer-row">
          <span>{copyright}</span>
          <SocialLinks className="social-links social-links--footer" />
        </div>
      </div>
    </footer>
  );
}
