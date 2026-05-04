/**
 * Formalny opis szkolenia do modala: tekst, program, kompetencje, metryki.
 * Cena wyświetlana w modalu pobiera się z karty (`offerTrainings.price`), chyba że podasz priceNote.
 */
export const trainingDetailsById = {
  "warsztat-dzien": {
    intro:
      "Intensywny dzień pracy warsztatowej dla zespołu, który chce przełożyć ustalenia na konkretne działania po spotkaniu. Zakres dopasowujemy po krótkiej diagnozie potrzeb zamawiającego.",
    program: [
      "Otwarcie: cele spotkania, kontrakt sali, zasady feedbacku.",
      "Diagnoza: mapowanie sytuacji, oczekiwań i ograniczeń grupy.",
      "Praca warsztatowa: ćwiczenia w parach i małych zespołach.",
      "Integracja wyników: priorytety, ryzyka, wybór kolejnych kroków.",
      "Podsumowanie: plan na 30 dni, odpowiedzialności, forma kontaktu po szkoleniu.",
    ],
    competencies: [
      "Formułowanie wspólnego celu operacyjnego po spotkaniu.",
      "Prowadzenie krótkiej retrospektywy i ustalanie działań następczych.",
      "Wykorzystanie prostych narzędzi planistycznych w zespole.",
    ],
    duration: "1 dzień (8 godzin zegarowych, z przerwami)",
    maxParticipants: "zwykle 12–16 osób (uzależnione od sali i formatu)",
    target: "zespoły projektowe, działy operacyjne, kadra managerska",
    priceNote: "Kwoty orientacyjne; ostateczna wycena po uzgodnieniu zakresu i liczby uczestników.",
  },
  "program-modulowy": {
    intro:
      "Program rozłożony w czasie umożliwia przyswojenie treści między modułami oraz wdrożenie ćwiczeń w codziennej pracy. Między spotkaniami przewidziane są krótkie zadania i możliwość doprecyzowania mailowego.",
    program: [
      "Moduł 1: diagnoza i cele programu, kontrakt uczenia się.",
      "Moduł 2–n: treść merytoryczna wg uzgodnionego scenariusza.",
      "Praca między modułami: zadania, materiały, konsultacje krotnościowe (zakres uzgadniany).",
      "Moduł końcowy: podsumowanie, plan rozwoju, ewaluacja.",
    ],
    competencies: [
      "Planowanie rozwoju kompetencji w horyzoncie kilku tygodni lub miesięcy.",
      "Samodzielne wykonywanie zadań między modułami i raportowanie postępów.",
      "Wybór narzędzi adekwatnych do kontekstu organizacyjnego.",
    ],
    duration: "typowo 3–5 modułów (np. 3–4 h każdy), rozłożonych zgodnie z kalendarzem klienta",
    maxParticipants: "do uzgodnienia (często 8–20 osób w grupie stałej)",
    target: "organizacje planujące głębszą zmianę kompetencyjną lub kulturową",
    priceNote: "Wycena zależy od liczby modułów, przygotowania materiałów i ewentualnej diagnostyki wstępnej.",
  },
  "tutoring-1": {
    intro:
      "Wsparcie indywidualne ukierunkowane na konkretny cel (np. egzamin, prezentacja, praca pisemna). Tempo, częstotliwość spotkań i narzędzia dobierane są do sytuacji uczestnika.",
    program: [
      "Rozmowa wstępna: cel, termin, oczekiwania i ograniczenia czasowe.",
      "Plan pracy: etapy, materiały, forma spotkań (stacjonarnie / online).",
      "Sesje robocze: ćwiczenia, feedback, korekty i próby.",
      "Domknięcie: checklista przed egzaminem / wystąpieniem lub oddaniem pracy.",
    ],
    competencies: [
      "Samodzielne planowanie nauki lub przygotowania do wystąpienia.",
      "Praca z feedbackiem i iteracyjnym doskonaleniem treści.",
      "Radzenie sobie ze stresem i strukturą wypowiedzi na żądanie.",
    ],
    duration: "sesje 60–90 minut; liczba spotkań ustalana indywidualnie",
    maxParticipants: "1 osoba (ew. para w uzasadnionych przypadkach — po uzgodnieniu)",
    target: "studenci, doktoranci, specjaliści przygotowujący się do egzaminów lub wystąpień",
    priceNote: "Stawki za godzinę lub pakiety godzin — do uzgodnienia przed startem.",
  },
  "feedback-krytyka": {
    intro:
      "Warsztat dotyczący kultury feedbacku w zespole: od formułowania komunikatu po prowadzenie rozmowy trudnej bez eskalacji konfliktu.",
    program: [
      "Ramowy model feedbacku (obserwacja – wpływ – intencja – prośba).",
      "Ćwiczenia w parach i grupach: scenariusze z życia organizacji.",
      "Mapowanie sytuacji wysokiego ryzyka i dobór strategii rozmowy.",
      "Mini-symulacje z debriefingiem i planem działania.",
    ],
    competencies: [
      "Udzielanie i odbieranie informacji zwrotnej w sposób konstruktywny.",
      "Przygotowanie do rozmów o oczekiwaniach i granicach.",
      "Wybór języka adekwatnego do kontekstu zawodowego.",
    ],
    duration: "1 dzień lub moduł 4 h (wariant do uzgodnienia)",
    maxParticipants: "8–16 osób",
    target: "zespoły liniowe, kadra, osoby pełniące role koordynacyjne",
    priceNote: null,
  },
  "prezentacja": {
    intro:
      "Przygotowanie do wystąpień: struktura przekazu, praca z salą, trema oraz obsługa pytań. Możliwy zakres od krótkiego pitchu po dłuższy wykład.",
    program: [
      "Analiza audytorii i celu wystąpienia.",
      "Konstrukcja narracji i slajdów (wg potrzeb grupy).",
      "Próby z nagraniem / feedbackiem od grupy.",
      "Strategie Q&A i domknięcie wystąpienia.",
    ],
    competencies: [
      "Planowanie treści pod czas i format spotkania.",
      "Kontrola paralingwistyki i dykcji w warunkach stresowych.",
      "Odpowiadanie na pytania na podstawie przygotowanych tez.",
    ],
    duration: "1 dzień lub program 2×4 h",
    maxParticipants: "6–12 osób (większa grupa — po uzgodnieniu)",
    target: "specjaliści, managerowie, osoby występujące przed komisjami lub klientami",
    priceNote: null,
  },
  "onboarding": {
    intro:
      "Wsparcie w zaprojektowaniu procesu witania nowych osób: od pierwszego dnia po integrację z zespołem i oczekiwaniami roli.",
    program: [
      "Audyt obecnego onboarding (jeśli istnieje) i cele biznesowe HR.",
      "Scenariusz pierwszych dni: buddy, checklisty, komunikacja.",
      "Warsztat dla liderów: jak prowadzić pierwsze 1:1 i oczekiwania.",
      "Plan ewaluacji po 30 / 60 / 90 dniach.",
    ],
    competencies: [
      "Opisanie procesu onboardingu jako ciągłego doświadczenia, nie jednorazowego szkolenia.",
      "Współpraca HR – lider – zespół przy wdrażaniu nowej osoby.",
    ],
    duration: "warsztat 1 dzień + opcjonalny follow-up konsultacyjny",
    maxParticipants: "10–20 osób (często mieszana grupa HR + liderzy)",
    target: "HR, liderzy zespołów, organizacje w fazie wzrostu zatrudnienia",
    priceNote: null,
  },
  "sprint-2dni": {
    intro:
      "Dwudniowy format dla zespołów, które potrzebują czasu na diagnozę, prototyp rozwiązania i plan wdrożenia bez odkładania pracy na później.",
    program: [
      "Dzień 1: problem, użytkownicy / klienci wewnętrzni, mapa procesu, prototyp.",
      "Dzień 2: test koncepcji, priorytety, plan sprintów następnych, ryzyka.",
      "Na życzenie: retro i uzgodnienie właścicieli działań.",
    ],
    competencies: [
      "Praca iteracyjna nad rozwiązaniem w krótkim horyzoncie czasu.",
      "Wspólne podejmowanie decyzji przy ograniczonych zasobach.",
    ],
    duration: "2 dni po 8 h zegarowych",
    maxParticipants: "8–14 osób w stałej grupie projektowej",
    target: "zespoły produktowe, działy operacyjne, grupy projektowe cross-funkcyjne",
    priceNote: null,
  },
  "akademia-lider": {
    intro:
      "Program modułowy dla osób pełniących lub przyjmujących rolę managera: delegowanie, rozmowy rozwojowe, konflikt w zespole.",
    program: [
      "Rola lidera i kontrakt oczekiwań z organizacją.",
      "Delegowanie, priorytety, odciążenie „martwych punktów”.",
      "Rozmowy 1:1: struktura, dokumentacja, feedback.",
      "Konflikt i trudne decyzje — ramy i ćwiczenia.",
    ],
    competencies: [
      "Planowanie rozwoju bezpośrednich raportów.",
      "Rozpoznawanie faz konfliktu i dobór interwencji.",
    ],
    duration: "4–6 modułów po 4 h (typowo rozłożone na 2–3 miesiące)",
    maxParticipants: "10–16 osób w grupie stałej",
    target: "nowi i średniozaawansowani managerowie liniowi",
    priceNote: null,
  },
  "egzamin-pisemny": {
    intro:
      "Indywidualne przygotowanie do egzaminu ustnego lub pisemnego oraz pracy dyplomowej: struktura, styl, harmonogram i próby.",
    program: [
      "Audyt materiałów i terminów egzaminacyjnych.",
      "Plan rozdziałów / bloku ustnego; konsultacje redakcyjne.",
      "Próby czasowe i symulacja komisji (wg potrzeb).",
    ],
    competencies: [
      "Samodzielne planowanie przygotowań pod deadline.",
      "Redakcja argumentacji i odpowiedzi na typowe pytania komisji.",
    ],
    duration: "sesje 60 min; liczba spotkań wg zakresu pracy",
    maxParticipants: "1 osoba",
    target: "studenci studiów I i II stopnia, doktoranci",
    priceNote: null,
  },
  "asertywnosc": {
    intro:
      "Warsztaty dotyczące komunikacji granic, prośb o wsparcie oraz prowadzenia rozmów międzydziałowych bez antagonizowania stron.",
    program: [
      "Modele asertywności vs agresja / uchylanie się.",
      "Ćwiczenia językowe i scenariusze „na żywo”.",
      "Plan działania dla trzech typowych sytuacji z pracy uczestników.",
    ],
    competencies: [
      "Rozpoznawanie własnych schematów w rozmowach trudnych.",
      "Formułowanie prośb i odmów z szacunkiem do partnera rozmowy.",
    ],
    duration: "1 dzień lub 2×4 h",
    maxParticipants: "8–16 osób",
    target: "zespoły usługowe, działy wspierające, osoby w rolach koordynujących",
    priceNote: null,
  },
  "storytelling": {
    intro:
      "Budowanie narracji biznesowej dla zmiany, projektu lub produktu — od struktury po dostosowanie tonu do odbiorcy.",
    program: [
      "Analiza odbiorców i celu przekazu.",
      "Łuk narracji i „momentów pamięciowych”.",
      "Ćwiczenia prezentacji przed grupą i feedback.",
    ],
    competencies: [
      "Przekładanie danych na historię zrozumiałą dla decydentów.",
      "Dobór przykładów i metafor adekwatnych do kultury organizacji.",
    ],
    duration: "1 dzień",
    maxParticipants: "8–14 osób",
    target: "liderzy projektów, HR biznes partnerzy, osoby odpowiedzialne za komunikację wewnętrzną",
    priceNote: null,
  },
  "integracja": {
    intro:
      "Format integracyjny z naciskiem na budowanie zaufania i poznanie kompetencji kolegów, bez narzucania „wyciskających” gier.",
    program: [
      "Ustalenie celu spotkania i komfortu grupy.",
      "Krótkie ćwiczenia dialogowe i praca w zmiennych parach.",
      "Podsumowanie: co zabieramy do codziennej współpracy.",
    ],
    competencies: [
      "Lepsze rozumienie ról i stylów pracy w zespole.",
      "Wzmocnienie psychologicznego bezpieczeństwa w grupie.",
    ],
    duration: "3–6 godzin (możliwy wieczór integracyjny — osobna wycena)",
    maxParticipants: "10–30 osób (zależnie od sali i formy)",
    target: "zespoły po reorganizacji, nowe grupy projektowe, działy łączone w jednym celu",
    priceNote: null,
  },
  "design-thinking": {
    intro:
      "Warsztat design thinking zakończony prototypem koncepcji — dla zespołów produktowych i HR pracujących nad doświadczeniem pracownika lub klienta wewnętrznego.",
    program: [
      "Empatyzacja i definicja problemu.",
      "Ideacja i priorytetyzacja pomysłów.",
      "Prototyp i test (wariant papierowy / digital mock-up).",
      "Retro i plan kolejnego iteracji.",
    ],
    competencies: [
      "Praca w krótkich cyklach „build–measure–learn”.",
      "Współpraca interdyscyplinarna przy jednym stole warsztatowym.",
    ],
    duration: "1 dzień intensywnie lub 2 dni z głębszym prototypem",
    maxParticipants: "8–12 osób (efektywna praca przy stołach warsztatowych)",
    target: "zespoły produktowe, HR, innowacyjne komórki organizacji",
    priceNote: null,
  },
  "mikro-moduly": {
    intro:
      "Cykl krótkich spotkań z materiałami do przerobienia między sesjami — dla zespołów, które nie mogą zatrzymać pracy na cały dzień naraz.",
    program: [
      "Ustalenie celu programu i metryk postępu.",
      "Moduły 90–120 min + zadania offline.",
      "Konsultacje mailowe / office hours wg pakietu.",
      "Zamknięcie: podsumowanie, certyfikat ukończenia (opcjonalnie).",
    ],
    competencies: [
      "Utrzymanie ciągłości rozwoju przy codziennych obowiązkach.",
      "Samodzielna aplikacja narzędzi między modułami.",
    ],
    duration: "np. 6×1,5 h rozłożonych w 6–8 tygodni",
    maxParticipants: "8–20 osób",
    target: "zespoły operacyjne z ograniczoną dostępnością kalendarzową",
    priceNote: null,
  },
  "plan-nauki": {
    intro:
      "Indywidualna praca nad nawykami uczenia się: plan tygodniowy, test metod, ewaluacja i korekty — także w kontekście długiego projektu intelektualnego.",
    program: [
      "Diagnoza stylu pracy i barier czasowych.",
      "Budowa planu z kamieniami milowymi.",
      "Tygodnie prób: sprinty focusu, retrospektywy krótkie.",
      "Domknięcie: checklista samodzielnej kontynuacji.",
    ],
    competencies: [
      "Samodzielne monitorowanie postępu i pivotów metodycznych.",
      "Łączenie celów krótkoterminowych z perspektywą semestru / roku.",
    ],
    duration: "pakiety 4–8 sesji po 60 min",
    maxParticipants: "1 osoba",
    target: "studenci, osoby przygotowujące się do dużych egzaminów lub projektów",
    priceNote: null,
  },
  "zespol-rozproszony": {
    intro:
      "Prowadzenie warsztatu w pełni zdalnym lub hybrydowym z naciskiem na równą jakość udziału osób online.",
    program: [
      "Kontrakt sali zdalnej: kamery, czat, moderacja czasu.",
      "Ćwiczenia zsynchronizowane i asynchroniczne domowe.",
      "Narzędzia tablicy współdzielonej i prototypów.",
      "Podsumowanie i zbiór dobrych praktyk zespołu.",
    ],
    competencies: [
      "Moderowanie dyskusji przy jednoczesnym czacie i głosie.",
      "Projektowanie zadań domowych możliwych do wykonania bez biura.",
    ],
    duration: "1 dzień online lub 2×4 h",
    maxParticipants: "do 18 osób online (więcej — po uzgodnieniu narzędzi)",
    target: "zespoły rozproszone geograficznie, organizacje hybrydowe",
    priceNote: null,
  },
  "hybryda-mix": {
    intro:
      "Przygotowanie facylitatorów i liderów sal do prowadzenia ćwiczeń przy jednoczesnym udziale osób zdalnych — żeby nikt nie czuł się „drugą kategorią”.",
    program: [
      "Analiza układu sali i sprzętu.",
      "Reguły mikrofonów, kamer i kolejki pytań.",
      "Scenariusze ćwiczeń „para mieszana” (sala + dom).",
      "Checklista przed każdym modułem hybrydowym.",
    ],
    competencies: [
      "Projektowanie interakcji sprzyjających obu grupom uczestników.",
      "Diagnoza typowych usterek technicznych i komunikacyjnych.",
    ],
    duration: "1 dzień lub moduł 4 h",
    maxParticipants: "10–16 osób (łącznie sala + online)",
    target: "trenerzy wewnętrzni, liderzy szkoleń, działy HR",
    priceNote: null,
  },
  "wyklad-interaktywny": {
    intro:
      "Format akademicki łączący wykład z elementami aktywizacji: pytania kontrolne, krótkie dyskusje, „pytańce” bez punktowania presji.",
    program: [
      "Struktura bloku i sygnały dla studentów, kiedy wpisać się z pytaniem.",
      "Ćwiczenia mini-grupowe osadzone w treści przedmiotu.",
      "Podsumowanie i materiał do samodzielnej pracy.",
    ],
    competencies: [
      "Aktywne słuchanie i formułowanie pytań badawczych.",
      "Praca z tekstem przedmiotowym w krótkich sprintach.",
    ],
    duration: "bloki po 4 h lub cały dzień (wg harmonogramu uczelni)",
    maxParticipants: "15–35 osób (zależnie od sali i przedmiotu)",
    target: "studenci, grupy doktoranckie, szkoły wyższe",
    priceNote: "Współpraca z uczelnią — często umowa ramowa lub pojedynczy wykład; stawki uzgadniane z komórką zamawiającą.",
  },
  "obrona-praca": {
    intro:
      "Przygotowanie do obrony pracy dyplomowej lub recenzji: logika wystąpienia, anticipacja pytań komisji, techniki regulacji stresu.",
    program: [
      "Struktura prezentacji i harmonogram czasu.",
      "Lista przewidywanych pytań i ćwiczenia odpowiedzi.",
      "Próby z nagraniem i feedback.",
      "Krótki moduł „co zrobić, gdy nie znam odpowiedzi”.",
    ],
    competencies: [
      "Prezentacja dorobku w języku precyzyjnym i spójnym z pracą.",
      "Zachowanie równowagi przy pytaniach trudnych lub nieprecyzyjnych.",
    ],
    duration: "sesje 60 min; typowo 3–6 spotkań przed terminem",
    maxParticipants: "1 osoba (możliwa praca w parach przy projektach partnerskich)",
    target: "studenci magisterscy i doktorancki, doktoranci przed obroną",
    priceNote: null,
  },
  "cele-prior": {
    intro:
      "Warsztat planistyczny dla zespołów: cele kwartalne, ćwiartka Eisenhowera i porządek zadań bez przeładowania list „do zrobienia”.",
    program: [
      "Mapowanie inicjatyw i kryteriów sukcesu.",
      "Ćwiczenia priorytetyzacji i delegowania.",
      "Plan tygodnia zespół vs osoby.",
      "Uzgodnienie rytuałów przeglądu (np. cotygodniowy stand-up celów).",
    ],
    competencies: [
      "Wspólne ustalanie definicji „done” dla zadań zespołowych.",
      "Rozróżnianie pilności i ważności przy ograniczonej pojemności zespołu.",
    ],
    duration: "1 dzień",
    maxParticipants: "8–14 osób",
    target: "zespoły produktowe, działy operacyjne, kadra pierwszej linii",
    priceNote: null,
  },
  "mapa-zmiany": {
    intro:
      "Wsparcie dla organizacji w fazie reorganizacji: mapowanie interesariuszy, komunikacja etapów, zbieranie sygnałów z linii.",
    program: [
      "Model zmiany i identyfikacja grup dotkniętych ryzykiem.",
      "Szablon komunikatu dla kolejnych etapów.",
      "Ćwiczenia „co odpowiedzieć na trudne pytanie”.",
      "Plan retrospektywy zmiany po 30 / 60 dniach.",
    ],
    competencies: [
      "Rozumienie psychologii zmiany na poziomie zespołu.",
      "Wybór kanałów komunikacji adekwatnych do kultury organizacji.",
    ],
    duration: "1 dzień lub program 2 moduły po 4 h",
    maxParticipants: "12–20 osób (często kadra + HR)",
    target: "liderzy zmiany, HR BP, osoby odpowiedzialne za komunikację kryzysową",
    priceNote: null,
  },
};

export function getTrainingDetail(id) {
  return trainingDetailsById[id] ?? null;
}
