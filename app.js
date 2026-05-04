(function () {
  "use strict";

  const IMG = "../web/public/assets";

  const trainings = [
    {
      id: "t1",
      title: "Komunikacja w zespole — klarownie i z empatią",
      short: "Granice, feedback i prowadzenie rozmów trudnych bez „zgryzów” w grupie.",
      image: IMG + "/pages/features/features-left.avif",
      modalHtml:
        "<p><strong>Czas:</strong> 6 h (dzień lub 2 × 3 h).</p>" +
        "<p><strong>Dla kogo:</strong> zespoły biurowe, kadra, osoby w pracy hybrydowej.</p>" +
        "<p><strong>Program (skrót):</strong> kontrakt zespołowy, język prośby, micro-scenki, ustalenia na 30 dni.</p>" +
        "<p><strong>Po szkoleniu:</strong> checklista rozmów 1:1 + propozycja rytuału podsumowań.</p>",
    },
    {
      id: "t2",
      title: "Wystąpienia i prezentacje, które trzymają uwagę",
      short: "Struktura, rytm, slajd jako wsparcie — nie zastępuje mówcy.",
      image: IMG + "/auth/login-left.avif",
      modalHtml:
        "<p><strong>Czas:</strong> 4 h.</p>" +
        "<p><strong>Dla kogo:</strong> specjaliści, studenci, osoby zaczynające mówić publicznie.</p>" +
        "<p><strong>Program (skrót):</strong> hook, trzy filary treści, Q&amp;A bez paniki, peer review.</p>" +
        "<p><strong>Efekt:</strong> szkielet Twojej prezentacji + lista kontrolna przed wejściem „na scenę”.</p>",
    },
    {
      id: "t3",
      title: "Nauka, która się utrwala — bez cudownych skrótów",
      short: "Aktywne przypominanie, plan tygodnia, praca z rozproszeniem uwagi.",
      image: IMG + "/auth/register-left.avif",
      modalHtml:
        "<p><strong>Czas:</strong> 3 × 2 h (odstępy między spotkaniami).</p>" +
        "<p><strong>Dla kogo:</strong> matura, studia, dokształcanie w pracy.</p>" +
        "<p><strong>Program (skrót):</strong> styl pracy, notatki, plan powtórek, małe nawyki zamiast wielkich postanowień.</p>" +
        "<p><strong>Efekt:</strong> osobisty plan na 4 tygodnie — do dopracowania na konsultacji.</p>",
    },
    {
      id: "t4",
      title: "Prowadzenie spotkań bez przejmowania całej przestrzeni",
      short: "Facylitacja: agenda z intencją, burza, dyskusja, domknięcie z next steps.",
      image: IMG + "/pages/features/features-right.avif",
      modalHtml:
        "<p><strong>Czas:</strong> 1 dzień lub 2 × 4 h.</p>" +
        "<p><strong>Dla kogo:</strong> osoby, które „zbierają ludzi w pokoju”, choć nie zawsze są formalnym liderem.</p>" +
        "<p><strong>Program (skrót):</strong> role w spotkaniu, techniki równoległe, trudne głosy, zapis ustaleń.</p>" +
        "<p><strong>Materiały:</strong> szablony agendy i pytań pomocniczych.</p>",
    },
    {
      id: "t5",
      title: "Relacja edukacyjna: granice, etyka, profesjonalizm",
      short: "Dla osób uczących innych: poufność, feedback, zakończenie współpracy z klasą.",
      image: IMG + "/icons/1674642970179.jpeg",
      modalHtml:
        "<p><strong>Czas:</strong> 2 h + krótka praca własna.</p>" +
        "<p><strong>Dla kogo:</strong> trenerzy, tutorzy, wykładowcy, mentorzy.</p>" +
        "<p><strong>Program (skrót):</strong> case’y, dobór słów w mailach, umowa współpracy — co warto doprecyzować.</p>" +
        "<p><strong>Efekt:</strong> spójny zestaw zasad komunikacji z podopiecznym / grupą.</p>",
    },
    {
      id: "t6",
      title: "Zdrowy rytm pracy i nauki — bez moralizowania",
      short: "Sen, ruch, regeneracja: jak mówić o nawykach szczęśliwie i bez presji „idealnego życia”.",
      image: IMG + "/17850367.gif",
      modalHtml:
        "<p><strong>Czas:</strong> 90 min (webinar) lub 3 h warsztat.</p>" +
        "<p><strong>Dla kogo:</strong> zespoły, studenci, osoby w okresie intensywnej nauki.</p>" +
        "<p><strong>Program (skrót):</strong> mikronawyki, plan tygodnia z buforem, praca z wyrzutami sumienia.</p>" +
        "<p><strong>Uwaga:</strong> treść edukacyjna ogólna — nie zastępuje porady medycznej ani psychoterapii.</p>",
    },
  ];

  const staticModals = {
    contact: {
      title: "Jak się odezwać?",
      body:
        "<p>Najszybciej znajdziesz mnie na Instagramie: <a href=\"https://www.instagram.com/compas.dr.syrek/\" target=\"_blank\" rel=\"noopener noreferrer\">@compas.dr.syrek</a> — napisz DM z krótkim kontekstem.</p>" +
        "<p>Jeśli wolisz mail, podaj: <strong>czego dotyczy zapytanie</strong>, <strong>termin orientacyjny</strong>, <strong>liczba osób</strong> (jeśli firma) oraz <strong>forma</strong> (online / na miejscu). Przykładowy adres w zakładce Kontakt możesz podmienić na swój.</p>" +
        "<p style=\"margin-top:1rem;color:var(--muted);\">Ta strona jest lekką wizytówką — formularz HTML możesz tu podłączyć później (np. Formspree), jeśli zechcesz zbierać wiadomości bez social media.</p>",
    },
    bio: {
      title: "Compas — kilka słów więcej",
      body:
        "<p><strong>Compas</strong> to dla mnie metafora: nie „jedna jedyna droga”, lecz świadomy kierunek. W pracy z grupą i w tutoringu stawiam na jasne cele, szacunek dla tempa uczestnika i konkretne narzędzia po spotkaniu.</p>" +
        "<p>Wykłady i warsztaty prowadzę tak, by uczelnia i rynek spotkały się w jednym tonie: merytorycznie, ale po ludzku. Na Instagramie pokazuję skróty myśli i zapowiedzi — to dobre miejsce, żeby poczuć styl pracy zanim umówimy szczegóły.</p>",
    },
    "offer-a": {
      title: "Warsztat jednodniowy",
      body:
        "<p><strong>Przykładowy zakres (demo):</strong> do 16 osób, materiały w PDF, krótka diagnoza przed spotkaniem.</p>" +
        "<p><strong>Orientacyjny koszt:</strong> do ustalenia indywidualnie — zależy od miejsca, transportu i przygotowania merytorycznego.</p>" +
        "<p><strong>Nie obejmuje:</strong> rezerwacji sali — możesz ją zorganizować po swojej stronie lub dopytać mnie o opcje.</p>",
    },
    "offer-b": {
      title: "Program modułowy",
      body:
        "<p><strong>Typowy układ:</strong> 3 moduły rozłożone w czasie (np. co tydzień albo co miesiąc).</p>" +
        "<p><strong>Między modułami:</strong> krótkie zadania i możliwość doprecyzowania mailowo — bez codziennego spamowania.</p>" +
        "<p><strong>Efekt:</strong> czas na przyswojenie materiału i wdrożenie w realnych warunkach pracy lub nauki.</p>",
    },
    "offer-c": {
      title: "Tutoring 1:1",
      body:
        "<p><strong>Forma:</strong> online lub na miejscu — wg ustaleń.</p>" +
        "<p><strong>Pierwszy kontakt:</strong> często zaczynamy od krótkiej rozmowy (np. DM na Instagramie), żeby dopasować częstotliwość i cel.</p>" +
        "<p><strong>Stawki i terminy:</strong> ustalane indywidualnie — zależą od zakresu i przygotowania materiałów.</p>",
    },
  };

  const tabButtons = document.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll(".tab-panel");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal-generic");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const yearEl = document.getElementById("year");
  const trainingsGrid = document.getElementById("trainings-grid");

  function setTab(id) {
    tabButtons.forEach((btn) => {
      const isMatch = btn.getAttribute("data-tab") === id;
      btn.setAttribute("aria-selected", isMatch ? "true" : "false");
    });
    panels.forEach((panel) => {
      const match = panel.id === "panel-" + id;
      panel.classList.toggle("is-active", match);
      panel.hidden = !match;
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => setTab(btn.getAttribute("data-tab")));
  });

  document.querySelectorAll("[data-tab-trigger]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-tab-trigger");
      setTab(id);
      document.getElementById("tab-" + id)?.focus?.();
    });
  });

  let lastFocus = null;

  function openModal(key, title, html) {
    lastFocus = document.activeElement;
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    backdrop.classList.add("is-open");
    modal.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    backdrop.classList.remove("is-open");
    modal.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open-modal");
      const data = staticModals[key];
      if (data) openModal(key, data.title, data.body);
    });
  });

  function openTrainingModal(t) {
    openModal(
      t.id,
      t.title,
      t.modalHtml +
        '<p style="margin-top:1rem;"><img src="' +
        t.image +
        '" alt="" style="width:100%;border-radius:12px;max-height:200px;object-fit:cover;" loading="lazy" /></p>',
    );
  }

  if (trainingsGrid) {
    trainings.forEach((t) => {
      const article = document.createElement("article");
      article.className = "card reveal";
      article.dataset.reveal = "";
      article.innerHTML =
        '<img class="card-img" src="' +
        t.image +
        '" alt="" loading="lazy" />' +
        "<h3>" +
        t.title +
        "</h3>" +
        "<p>" +
        t.short +
        "</p>" +
        '<div class="card-actions">' +
        '<button type="button" class="btn btn-ghost" data-training-id="' +
        t.id +
        '">Program</button>' +
        "</div>";
      trainingsGrid.appendChild(article);
    });

    trainingsGrid.addEventListener("click", (e) => {
      const id = e.target.closest("[data-training-id]")?.getAttribute("data-training-id");
      if (!id) return;
      const t = trainings.find((x) => x.id === id);
      if (t) openTrainingModal(t);
    });
  }

  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  const revealEls = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("is-visible");
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (trainingsGrid) {
    trainingsGrid.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  }
})();
