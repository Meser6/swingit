import { IMG } from "../constants/images.js";
import { Reveal } from "../hooks/Reveal.jsx";
import pages from "../content/pages.json";
import contact from "../content/contact.json";
import { GalleryPanel } from "./GalleryPanel.jsx";
import { OfferSections } from "./OfferSections.jsx";
import { OpinionsPanel } from "./OpinionsPanel.jsx";
import { SmartImage } from "./SmartImage.jsx";
import { SocialLinks } from "./SocialLinks.jsx";
import { YouTubePlaylists } from "./YouTubePlaylists.jsx";

function Panel({ id, active, labelledBy, children }) {
  return (
    <div
      id={`panel-${id}`}
      className={`tab-panel ${active ? "is-active" : ""}`}
      role="tabpanel"
      aria-labelledby={labelledBy}
      hidden={!active}
    >
      {children}
    </div>
  );
}

export function TabPanels({ activeTab, onTab }) {
  const is = (id) => activeTab === id;
  const s = pages.start;
  const a = pages.about;
  const o = pages.offer;
  const g = pages.gallery;
  const op = pages.opinions;
  const c = pages.contact;

  return (
    <div className="tab-panels container">
      <Panel id="start" active={is("start")} labelledBy="tab-start">
        <h2 className="section-title">{s.title}</h2>
        <p className="section-sub section-sub--wide">{s.sub}</p>
        <div className="split">
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage src={IMG.featuresLeft} alt="SWING IT — prowadzenie imprez" loading="lazy" />
            </div>
          </Reveal>
          <Reveal>
            <ul className="list-check tile-accent tile-accent--text">
              {s.listA.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="split split--reverse-mobile">
          <Reveal>
            <ul className="list-check tile-accent tile-accent--text">
              {s.listB.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage src={IMG.featuresRight} alt="SWING IT — oprawa muzyczna" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <section className="home-opinions" aria-labelledby="home-opinions-heading">
            <h2 id="home-opinions-heading" className="section-title">
              {s.opinionsTitle}
            </h2>
            <p className="section-sub section-sub--wide">{s.opinionsSub}</p>
            <button type="button" className="btn btn--ghost home-opinions__cta" onClick={() => onTab("opinie")}>
              {s.opinionsCta}
            </button>
          </section>
        </Reveal>
      </Panel>

      <Panel id="o-mnie" active={is("o-mnie")} labelledBy="tab-o-mnie">
        <p className="section-eyebrow">{a.eyebrow}</p>
        <div className="split about-intro-split">
          <Reveal>
            <div className="media-frame media-frame--portrait about-portrait tile-accent">
              <SmartImage
                src={IMG.aboutPortrait}
                alt={a.portraitAlt}
                loading="lazy"
                className="about-portrait__img"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="about-intro-copy tile-accent tile-accent--text">
              <p className="about-intro-lead">{a.lead}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
              <p>{a.p4}</p>
            </div>
          </Reveal>
        </div>
      </Panel>

      <Panel id="oferta" active={is("oferta")} labelledBy="tab-oferta">
        <p className="section-eyebrow">{o.eyebrow}</p>
        <h2 className="section-title">{o.title}</h2>
        <p className="section-sub section-sub--wide">{o.sub}</p>
        <OfferSections />
        <YouTubePlaylists />
      </Panel>

      <Panel id="galeria" active={is("galeria")} labelledBy="tab-galeria">
        <p className="section-eyebrow">{g.eyebrow}</p>
        <h2 className="section-title">{g.title}</h2>
        <p className="section-sub section-sub--wide">{g.sub}</p>
        <GalleryPanel />
      </Panel>

      <Panel id="opinie" active={is("opinie")} labelledBy="tab-opinie">
        <p className="section-eyebrow">{op.eyebrow}</p>
        <h2 className="section-title">{op.title}</h2>
        <p className="section-sub section-sub--wide">{op.sub}</p>
        <Reveal>
          <OpinionsPanel showGoogleLink linkLabel={op.wzkLinkLabel} />
        </Reveal>
      </Panel>

      <Panel id="kontakt" active={is("kontakt")} labelledBy="tab-kontakt">
        <p className="section-eyebrow">{c.eyebrow}</p>
        <h2 className="section-title">{c.title}</h2>
        <p className="section-sub">{c.sub}</p>
        <div className="split">
          <Reveal className="card contact-card tile-accent tile-accent--text">
            <p className="contact-card__row">
              <strong>{c.phoneLabel}</strong>
              <br />
              <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            </p>
            <p className="contact-card__row">
              <strong>{c.emailLabel}</strong>
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <h3 className="contact-card__subhead">{c.socialHeading}</h3>
            <SocialLinks className="social-links social-links--stacked" />
            <div className="contact-inquiry">
              <h3 className="contact-inquiry__title">{c.inquiryTitle}</h3>
              <p className="contact-inquiry__text">{c.inquiryIntro}</p>
              <ul className="list-check">
                {c.inquiryPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="contact-inquiry__text">{c.inquiryOutro}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage src={IMG.contactVisual} alt={c.visualAlt} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Panel>
    </div>
  );
}
