import { IMG } from "../constants/images";
import { aboutEducation, aboutExperience } from "../data/about.js";
import { INSTAGRAM_URL, LINKEDIN_URL } from "../constants/social.js";
import { Reveal } from "../hooks/Reveal";
import { AboutGalleryCarousel } from "./AboutGalleryCarousel.jsx";
import { OfferTrainings } from "./OfferTrainings.jsx";
import { SmartImage } from "./SmartImage";
import { TestimonialsMarquee } from "./TestimonialsMarquee.jsx";
import { FaqSection } from "./FaqSection.jsx";

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

export function TabPanels({ activeTab, onOpenModal, onOpenTraining }) {
  const is = (id) => activeTab === id;

  return (
    <div className="tab-panels container">
      <Panel id="start" active={is("start")} labelledBy="tab-start">
        <h2 className="section-title">Dlaczego Compas?</h2>
        <p className="section-sub section-sub--wide">
          Nazwa nie jest przypadkiem: tak jak kompas wskazuje stronę świata, tak ja pomagam ustalić kierunek nauki,
          rozwoju zespołu albo Twojej indywidualnej ścieżki — bez chaosu i bez „jednego rozmiaru dla wszystkich”.
        </p>
        <div className="split">
          <Reveal>
            <div className="media-frame media-frame--natural">
              <SmartImage
                primary={IMG.featuresLeft}
                fallback={IMG.featuresLeftPh}
                alt="Materiały i proces pracy"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal>
            <ul className="list-check">
              <li>Spójna narracja: od celów biznesowych po cele osobiste ucznia</li>
              <li>Materiały po spotkaniu: skróty, szablony, ćwiczenia do domu</li>
              <li>Format dopasowany: stacjonarnie, online albo hybryda</li>
              <li>Jasne cele i kontrakt spotkania — wiadomo, co jest po drodze, a co na koniec</li>
              <li>Tempo dopasowane do grupy — bez wyścigu ze slajdami „na siłę”</li>
              <li>Mniej żargonu, więcej sensu: język dopasowany do audytorii</li>
            </ul>
          </Reveal>
        </div>

        <div className="split split--reverse-mobile">
          <Reveal>
            <ul className="list-check">
              <li>Kultura feedbacku: krótka ankieta lub rozmowa po szkoleniu</li>
              <li>
                Wspólnie ustalamy kierunek: najpierw intencja i cele, potem treść — bez przypadkowego „zbioru
                tematów”
              </li>
              <li>Przestrzeń na pytania i pomyłki — bez presji „idealnego” udziału od pierwszej minuty</li>
              <li>Praca w parach i małych zespołach tam, gdzie to pomaga, nie dla samego ruchu</li>
              <li>Podsumowanie z planem na kolejne dni — żeby zostało coś po spotkaniu, nie tylko wrażenie</li>
              <li>Kontakt po szkoleniu uzgodniony z góry — bez natarczywego follow-upu</li>
            </ul>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural">
              <SmartImage
                primary={IMG.featuresRight}
                fallback={IMG.featuresRightPh}
                alt="Warsztat i praca z grupą"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
        <TestimonialsMarquee />
      </Panel>

      <Panel id="o-mnie" active={is("o-mnie")} labelledBy="tab-o-mnie">
        <div className="split about-intro-split">
          <Reveal>
            <div className="media-frame media-frame--portrait about-portrait">
              <SmartImage
                primary={IMG.aboutPortrait}
                fallback={IMG.aboutPortraitPh}
                alt="dr Syrek — zdjęcie"
                loading="lazy"
                className="about-portrait__img"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="about-intro-copy">
              <p className="about-intro-lead">
                Edukacja to dla mnie relacja — nie tylko transfer informacji. Łączę środowisko akademickie z
                praktyką pracy z grupą: wykłady, warsztaty i konsultacje. Zależy mi, żeby uczestnik wychodził z mapą —
                wiedział, co ćwiczyć dalej i po co.
              </p>
              <p>
                W skrócie: zamiast „przerzucać slajdy na siłę”, wolę porozumieć się z salą: kto tu jest, czego
                potrzebujecie dziś, gdzie możecie to zastosować jutro. Dlatego przed dłuższą współpracą ustalamy
                intencję i ramy — żeby treść miała sens w Waszym kontekście, a nie tylko w moim planie warsztatu.
              </p>
              <p>
                Pracuję też z osobami indywidualnie: od przygotowania do egzaminu czy prezentacji po uporządkowanie
                nauki i feedback po próbach. Jeśli szukasz konkretu bez nachalnej sprzedaży — zacznijmy od krótkiej
                rozmowy (np. na Instagramie): opisz cel, termin i formę, a ja odpiszę, czy i jak mogę pomóc.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="about-cv">
          <Reveal>
            <section className="about-block" aria-labelledby="about-edu-heading">
              <h3 id="about-edu-heading" className="about-block__title">
                Wykształcenie i szkolenia
              </h3>
              <ul className="about-list">
                {aboutEducation.map((item) => (
                  <li key={item.title}>
                    <strong className="about-list__title">{item.title}</strong>
                    <span className="about-list__meta">{item.meta}</span>
                    {item.note ? <p className="about-list__note">{item.note}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal>
            <section className="about-block" aria-labelledby="about-exp-heading">
              <h3 id="about-exp-heading" className="about-block__title">
                Doświadczenie
              </h3>
              <ul className="about-list">
                {aboutExperience.map((item) => (
                  <li key={item.title}>
                    <strong className="about-list__title">{item.title}</strong>
                    <span className="about-list__meta">{item.meta}</span>
                    <p className="about-list__desc">{item.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal>
          <div className="about-end-gallery">
            <AboutGalleryCarousel />
          </div>
        </Reveal>
      </Panel>

      <Panel id="oferta" active={is("oferta")} labelledBy="tab-oferta">
        <h2 className="section-title">Oferta</h2>
        <p className="section-sub section-sub--wide">
          Wybierz typ szkolenia — lista pokaże dopasowane pozycje. Na jednej stronie widzisz do dziewięciu pozycji (trzy
          w rzędzie); szczegóły i ramy czasowe otwierasz w modalu.
        </p>
        <OfferTrainings onOpenTraining={onOpenTraining} />
      </Panel>

      <Panel id="faq" active={is("faq")} labelledBy="tab-faq">
        <h2 className="section-title">FAQ</h2>
        <p className="section-sub">
          Krótkie odpowiedzi na typowe pytania przed współpracą. Jeśli czegoś tu nie ma — napisz na Instagramie,
          LinkedIn albo mailowo (szczegóły w zakładce Kontakt).
        </p>
        <FaqSection />
      </Panel>

      <Panel id="kontakt" active={is("kontakt")} labelledBy="tab-kontakt">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-sub">
          Najszybciej na Instagramie — wyślij DM. Jestem też na LinkedIn; e‑mail z krótkim kontekstem też OK.
        </p>
        <div className="split">
          <Reveal className="card" style={{ padding: "1.5rem" }}>
            <p>
              <strong>Instagram (preferowane):</strong>
              <br />
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                instagram.com/compas.dr.syrek
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>
              <br />
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/daniel-syrek-175009289
              </a>
            </p>
            <p>
              <strong>E-mail (przykład):</strong> kontakt@compas.pl — podmień na swój adres.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: 0 }}>
              W wiadomości napisz: temat, liczba osób (jeśli firma), termin i forma (online / na miejscu).
            </p>
            <button type="button" className="btn btn-primary" style={{ marginTop: "1rem" }} onClick={() => onOpenModal("contact")}>
              Co napisać w wiadomości
            </button>
          </Reveal>
          <Reveal>
            <div className="media-frame media-frame--natural">
              <SmartImage
                primary={IMG.registerRight}
                fallback={IMG.registerRightPh}
                alt="Kontakt"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Panel>
    </div>
  );
}
