# SWING IT

Wizytówka DJ / konferansjera **Bartłomiej Nawrot** (React + Vite).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz **http://localhost:5173/swingit/** (Vite ma `base: /swingit/` pod GitHub Pages).

## GitHub Pages

Po pushu na `main` workflow buduje i publikuje stronę:

**https://meser6.github.io/swingit/**

W repozytorium: **Settings → Pages → Build and deployment → Source: GitHub Actions** (jeśli jeszcze nie włączone).

## Galeria zdjęć

Eksport z Google Drive do:

```
public/images/gallery/wesela/
public/images/gallery/urodziny/
public/images/gallery/firmowe/
```

Następnie uzupełnij ścieżki w `src/content/gallery.json`.
