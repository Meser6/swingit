import { IMG } from "../constants/images";

/** Galeria — primary jak w reszcie strony; przy braku plików w `public/` SmartImage przełączy na fallback. */
export const aboutGallery = [
  {
    primary: IMG.landingLeft,
    fallback: IMG.landingLeftPh,
    alt: "Prowadzenie zajęć z grupą",
  },
  {
    primary: IMG.featuresLeft,
    fallback: IMG.featuresLeftPh,
    alt: "Materiały i praca warsztatowa",
  },
  {
    primary: IMG.featuresRight,
    fallback: IMG.featuresRightPh,
    alt: "Warsztat i dyskusja przy stole",
  },
  {
    primary: IMG.heroMain,
    fallback: IMG.heroPlaceholder,
    alt: "Scena prezentacji i uczenia się",
  },
  {
    primary: IMG.pricingLeft,
    fallback: IMG.pricingLeftPh,
    alt: "Spotkanie zespołu i omówienie celów",
  },
  {
    primary: IMG.registerRight,
    fallback: IMG.registerRightPh,
    alt: "Kontakt i ustalenia po spotkaniu",
  },
  {
    primary: IMG.pricingRight,
    fallback: IMG.pricingRightPh,
    alt: "Praca z ludźmi w konwersacji",
  },
  {
    primary:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80",
    fallback:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80",
    alt: "Warsztat w grupie przy flipboardzie",
  },
  {
    primary:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    fallback:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    alt: "Praca warsztatowa z zespołem",
  },
];

/** Podmień wpisy na fakty z życiorysu — zostawiamy czytelną strukturę. */
export const aboutEducation = [
  {
    title: "Doktorat",
    meta: "nauki społeczne · uczelnia i rok obrony — do uzupełnienia",
    note: "Temat dysertacji i promotor możesz dopisać tutaj.",
  },
  {
    title: "Studia magisterskie",
    meta: "kierunek · uczelnia — do uzupełnienia",
  },
  {
    title: "Studia podyplomowe",
    meta: "specjalizacja · rok — do uzupełnienia",
  },
  {
    title: "Szkolenia trenerskie / warsztatowe",
    meta: "np. prowadzenie grup, facylitacja, moderacja — organizator i rok",
  },
  {
    title: "Certyfikaty i warsztaty merytoryczne",
    meta: "np. metodyki pracy z grupą, narzędzia, branżowe standardy",
  },
];

export const aboutExperience = [
  {
    title: "Uczelnia",
    meta: "wykładowca / asystent · przedmioty i lata — do uzupełnienia",
    summary: "Wykłady, ćwiczenia, konsultacje dla studentów.",
  },
  {
    title: "Warsztaty i szkolenia biznesowe",
    meta: "firmy, zespoły, format stacjonarny i online",
    summary: "Programy jedno- i wielodniowe: diagnoza, praca na sali, podsumowanie z planem działania.",
  },
  {
    title: "Tutoring 1:1",
    meta: "indywidualnie",
    summary: "Egzaminy, prezentacje, pisma, przygotowanie do wystąpień — tempo dopasowane do Ciebie.",
  },
  {
    title: "Instagram · LinkedIn",
    meta: "bieżąco",
    summary:
      "Krótkie treści, zapowiedzi i kontekst pracy — wygodny pierwszy kontakt przed rozmową o współpracy.",
  },
];
