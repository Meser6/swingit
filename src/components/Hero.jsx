import { IMG } from "../constants/images";
import { Reveal } from "../hooks/Reveal";
import { SmartImage } from "./SmartImage";

export function Hero() {
  return (
    <section className="hero container" id="hero">
      <div className="hero-grid">
        <Reveal>
          <h1>Nauczam, wykładam i szkolę — z godnością i energią</h1>
          <p className="hero-lead">
            Jestem <strong style={{ color: "var(--ink)", fontWeight: 700 }}>dr Syrek</strong>. Tworzę
            przestrzeń, w której wiedza spotyka się z praktyką: od wykładów i warsztatów po tutoring.
            Jak na kompasie — ważny jest kierunek, który wspólnie ustalamy.
          </p>
          <div className="tags" aria-label="Role">
            {["edukator", "pedagog", "wykładowca", "szkoleniowiec", "tutor"].map((label) => (
              <span key={label} className="tag">
                {label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="hero-visual media-frame media-frame--4-3">
            <SmartImage
              primary={IMG.heroMain}
              fallback={IMG.heroPlaceholder}
              alt="Wizual — rozwój i edukacja"
              width={800}
              height={600}
              loading="eager"
            />
            <div className="hero-badge">
              ♥️ Z przyjemnością dzielę się ofertą — na żywo i online. Śledź też mój profil{" "}
              <strong>@compas.dr.syrek</strong> na Instagramie.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
