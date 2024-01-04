# Simple Starter

> [Jairus Joer](mailto:hello@jairusjoer.com), 2023

## 1. Voraussetzungen

> Die minimal unterstützte Version von Node.js für Vite ist 14.18

- [Node.js](https://nodejs.org/en/download/) > 14.18

## 2. Einrichtung

Um innerhalb dieses Projektes vernünftig arbeiten zu können, werden einige externe Anwendungen benötigt, welche über das Terminal installiert werden können. Der dafür notwendige Befehl muss im Stammverzeichnis des Projektes ausgeführt werden und lautet:

```bash
npm install
```

### 2.1 Integriertes Terminal

Besitzt dein Text-Editor ein integriertes Terminal, kannst du dieses einfach öffnen.

### 2.2 Terminal (System oder Drittanbieter)

Benutzt du ein Terminal außerhalb des Text Editors, kannst du in das Stammverzeichnis dieses Projektes navigieren und über das Kontextmenü eine neues Terminal öffnen.

Alternativ kannst du manuell mit dem Befehl [`cd`](https://phlow.de/magazin/terminal/datei-ordner-befehle/) über das Terminal zum Stammverzeichnis gelangen.

### 2.3 Was ist `npm`?

`npm install` installiert alle benötigten Pakete zur Ausführung der Anwendungen (z. B. Vite) innerhalb eines Projektes. Alle Anwendungen und Pakete werden im Ordner `node_modules/` abgelegt und durch [npm](https://docs.npmjs.com/about-npm) verwaltet. Des Weiteren führt npm vom Nutzer definierte Skripe aus, welche du in diesem Projekt verwenden wirst.

Alle Informationen, die npm benötigt, um dein Projekt aufzusetzen, sowie die erwähnten Skripte findest du in der `package.json`.

## 3.Entwicklung

Um die Entwicklungsumgebung zu starten, kannst du folgenden Befehl im Stammverzeichnis des Projektes ausführen:

```bash
npm run dev
```

Mithilfe von `npm run dev` wird ein Live-Server gestartet, der Änderungen am Code der Seite automatisch im Browser darstellt. Sobald das Skript ausgeführt wurde, kannst du im Browser [http://localhost:3000/](http://localhost:3000/) aufrufen. Die entsprechende URL kannst du auch dem Terminal entnehmen.

## 4. Produktion

Möchtest du dein Projekt abgeben oder auf einem Server testen, so kannst du mit folgenden Befehlen dein Projekt dafür vorbereiten:

```bash
npm run build
```

`npm run build` produziert eine optimierte Version deiner Website für den Export.

```bash
npm run preview
```

`npm run preview` startet einen lokalen Server, welcher dir den momentanen Build des Projektes präsentiert. Dieser Server aktualisiert sich nicht automatisch bei Änderungen an den Quelldateien und dient zur Qualitätssicherung.

## 5. SCSS

Solltest du bereits mit CSS vertraut sein und möchtest mit [SCSS](https://sass-lang.com/guide) arbeiten, kannst du dies ganz einfach mit einigen wenigen Änderungen bewerkstelligen:

1. Ändere den Dateinamen der `index.css` zu `index.scss`
2. Aktualisiere den Import des Stylesheets in der `globals.scss`

Möchtest du dich nur mit SCSS vertraut machen, kannst du einen Blick in die `globals.scss` werfen oder einem der Links zur Dokumentation von SCSS folgen.

## 6. Hilfreiche Links

Auf folgenden Seiten findest du alles rund um die Themen HTML, CSS und JS:

- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)
- [https://www.w3schools.com/](https://www.w3schools.com/)
