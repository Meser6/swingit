import { IMG, imgPair } from "../constants/images";
import { Reveal } from "../hooks/Reveal";
import { CONTENT } from "../lib/t.js";
import { useContentStrings } from "../context/ContentStringsContext.jsx";
import { GalleryPanel } from "./GalleryPanel.jsx";
import { OfferSections } from "./OfferSections.jsx";
import { OpinionsPanel } from "./OpinionsPanel.jsx";
import { SmartImage } from "./SmartImage";
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

export function TabPanels({ activeTab }) {
  const { tx } = useContentStrings();
  const is = (id) => activeTab === id;
  const s = CONTENT.pages.start;
  const a = CONTENT.pages.about;
  const o = CONTENT.pages.offer;
  const g = CONTENT.pages.gallery;
  const c = CONTENT.pages.contact;
  const co = CONTENT.contact;
  const aboutData = CONTENT.about;

  const bioParagraphs = aboutData.bioLongParagraphs ?? [];

  return (
    <div className="tab-panels container">
      <Panel id="start" active={is("start")} labelledBy="tab-start">
        <h2 className="section-title">{tx("pages.start.title", s.title)}</h2>
        <p className="section-sub section-sub--wide">{tx("pages.start.sub", s.sub)}</p>
        <div className="split">
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage
                imageKey="featuresLeft"
                {...imgPair(IMG.featuresLeft)}
                alt="SWING IT — prowadzenie imprez"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal>
            <ul className="list-check tile-accent tile-accent--text">
              {s.listA.map((line, i) => (
                <li key={line}>{tx(`pages.start.listA[${i}]`, line)}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="split split--reverse-mobile">
          <Reveal>
            <ul className="list-check tile-accent tile-accent--text">
              {s.listB.map((line, i) => (
                <li key={line}>{tx(`pages.start.listB[${i}]`, line)}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage
                imageKey="featuresRight"
                {...imgPair(IMG.featuresRight)}
                alt="SWING IT — oprawa muzyczna"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <section className="home-opinions" aria-labelledby="home-opinions-heading">
            <h2 id="home-opinions-heading" className="section-title">
              {tx("pages.start.opinionsTitle", s.opinionsTitle)}
            </h2>
            <p className="section-sub section-sub--wide">{tx("pages.start.opinionsSub", s.opinionsSub)}</p>
            <OpinionsPanel contentKey="start" />
          </section>
        </Reveal>
      </Panel>

      <Panel id="o-mnie" active={is("o-mnie")} labelledBy="tab-o-mnie">
        <div className="split about-intro-split">
          <Reveal>
            <div className="media-frame media-frame--portrait about-portrait tile-accent">
              <SmartImage
                imageKey="aboutPortrait"
                {...imgPair(IMG.aboutPortrait)}
                alt={tx("pages.about.portraitAlt", a.portraitAlt)}
                loading="lazy"
                className="about-portrait__img"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="about-intro-copy tile-accent tile-accent--text">
              <p className="about-intro-lead">{tx("pages.about.lead", a.lead)}</p>
              <p>{tx("pages.about.p2", a.p2)}</p>
              <p>{tx("pages.about.p3", a.p3)}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="about-bio-long tile-accent tile-accent--text">
            {bioParagraphs.map((para, i) => (
              <p key={i}>{tx(`about.bioLongParagraphs[${i}]`, para)}</p>
            ))}
          </div>
        </Reveal>

      </Panel>

      <Panel id="oferta" active={is("oferta")} labelledBy="tab-oferta">
        <h2 className="section-title">{tx("pages.offer.title", o.title)}</h2>
        <p className="section-sub section-sub--wide">{tx("pages.offer.sub", o.sub)}</p>
        <OfferSections />
        <YouTubePlaylists />
      </Panel>

      <Panel id="galeria" active={is("galeria")} labelledBy="tab-galeria">
        <h2 className="section-title">{tx("pages.gallery.title", g.title)}</h2>
        <p className="section-sub section-sub--wide">{tx("pages.gallery.sub", g.sub)}</p>
        <GalleryPanel />
      </Panel>

      <Panel id="kontakt" active={is("kontakt")} labelledBy="tab-kontakt">
        <h2 className="section-title">{tx("pages.contact.title", c.title)}</h2>
        <p className="section-sub">{tx("pages.contact.sub", c.sub)}</p>
        <div className="split">
          <Reveal className="card contact-card tile-accent tile-accent--text" style={{ padding: "1.5rem" }}>
            <p>
              <strong>{tx("pages.contact.phoneLabel", c.phoneLabel)}</strong>
              <br />
              <a href={`tel:${co.phoneTel}`}>{tx("contact.phoneDisplay", co.phoneDisplay)}</a>
            </p>
            <p>
              <strong>{tx("pages.contact.emailLabel", c.emailLabel)}</strong>{" "}
              <a href={`mailto:${co.email}`}>{tx("contact.email", co.email)}</a>
            </p>
            <h3 className="contact-card__subhead">{tx("pages.contact.socialHeading", c.socialHeading)}</h3>
            <SocialLinks className="social-links social-links--stacked" />
            <div className="contact-inquiry">
              <h3 className="contact-inquiry__title">{tx("pages.contact.inquiryTitle", c.inquiryTitle)}</h3>
              <p className="contact-inquiry__text">{tx("pages.contact.inquiryText", c.inquiryText)}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural tile-accent">
              <SmartImage
                imageKey="contactVisual"
                {...imgPair(IMG.contactVisual)}
                alt={tx("pages.contact.visualAlt", c.visualAlt)}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Panel>
    </div>
  );
}
