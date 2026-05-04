import { INSTAGRAM_URL, LINKEDIN_URL } from "../constants/social.js";

export const staticModals = {
  contact: {
    title: "Jak się odezwać?",
    bodyHtml: `
      <p>Najszybciej na Instagramie: <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">@compas.dr.syrek</a> — napisz DM z krótkim kontekstem.</p>
      <p>Na LinkedIn: <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">Daniel Syrek</a> — zapraszam do kontaktu zawodowego.</p>
      <p>Jeśli wolisz mail, podaj: <strong>czego dotyczy zapytanie</strong>, <strong>termin orientacyjny</strong>, <strong>liczba osób</strong> (jeśli firma) oraz <strong>forma</strong> (online / na miejscu). Przykładowy adres w zakładce Kontakt możesz podmienić na swój.</p>
      <p style="margin-top:1rem;color:var(--muted);">Ta strona jest lekką wizytówką — formularz HTML możesz tu podłączyć później (np. Formspree), jeśli zechcesz zbierać wiadomości bez social media.</p>
    `,
  },
  bio: {
    title: "Compas — kilka słów więcej",
    bodyHtml: `
      <p><strong>Compas</strong> to dla mnie metafora: nie „jedna jedyna droga”, lecz świadomy kierunek. W pracy z grupą i w tutoringu stawiam na jasne cele, szacunek dla tempa uczestnika i konkretne narzędzia po spotkaniu.</p>
      <p>Wykłady i warsztaty prowadzę tak, by uczelnia i rynek spotkały się w jednym tonie: merytorycznie, ale po ludzku. Na Instagramie pokazuję skróty myśli i zapowiedzi — to dobre miejsce, żeby poczuć styl pracy zanim umówimy szczegóły.</p>
    `,
  },
  "offer-a": {
    title: "Warsztat jednodniowy",
    bodyHtml: `
      <p><strong>Przykładowy zakres (demo):</strong> do 16 osób, materiały w PDF, krótka diagnoza przed spotkaniem.</p>
      <p><strong>Orientacyjny koszt:</strong> do ustalenia indywidualnie — zależy od miejsca, transportu i przygotowania merytorycznego.</p>
      <p><strong>Nie obejmuje:</strong> rezerwacji sali — możesz ją zorganizować po swojej stronie lub dopytać mnie o opcje.</p>
    `,
  },
  "offer-b": {
    title: "Program modułowy",
    bodyHtml: `
      <p><strong>Typowy układ:</strong> 3 moduły rozłożone w czasie (np. co tydzień albo co miesiąc).</p>
      <p><strong>Między modułami:</strong> krótkie zadania i możliwość doprecyzowania mailowo — bez codziennego spamowania.</p>
      <p><strong>Efekt:</strong> czas na przyswojenie materiału i wdrożenie w realnych warunkach pracy lub nauki.</p>
    `,
  },
  "offer-c": {
    title: "Tutoring 1:1",
    bodyHtml: `
      <p><strong>Forma:</strong> online lub na miejscu — wg ustaleń.</p>
      <p><strong>Pierwszy kontakt:</strong> często zaczynamy od krótkiej rozmowy (np. DM na Instagramie), żeby dopasować częstotliwość i cel.</p>
      <p><strong>Stawki i terminy:</strong> ustalane indywidualnie — zależą od zakresu i przygotowania materiałów.</p>
    `,
  },
  "offer-generic": {
    title: "Szczegóły szkolenia",
    bodyHtml: `
      <p><strong>Zakres i czas</strong> ustalamy po krótkiej rozmowie o Twojej grupie albo celu indywidualnym.</p>
      <p><strong>Forma:</strong> stacjonarnie, online lub hybryda — wg potrzeb.</p>
      <p><strong>Kolejny krok:</strong> napisz na Instagramie lub LinkedIn z krótkim kontekstem — wrócę z propozycją ram i terminów.</p>
      <p style="margin-top:1rem;color:var(--muted);">Ten opis jest szablonem dla pozycji z oferty — możesz podmienić treść modala w kodzie na konkretny program.</p>
    `,
  },
};
