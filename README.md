# 3D Gaussian Splat auf der Karte 🗺️

Ein Gaussian-Splat-Scan (SPZ-Format), georeferenziert auf einer echten [MapLibre GL JS](https://maplibre.org/)-Karte platziert (51.576594, 6.893350), inklusive Platzierung auf der tatsächlichen Geländehöhe (DGM).

## 🚀 Live Demo
**[Karte öffnen](https://BenjaminBleske.github.io/3DGS/)**

*(Funktioniert, sobald GitHub Pages für diesen Branch/dieses Repo aktiviert ist.)*

## 🏗️ Funktionsweise
- `index.html` ist eine eigenständige Seite ohne Build-Schritt: [maplibre-gl](https://maplibre.org/maplibre-gl-js/) und das Plugin [maplibre-gl-splat](https://github.com/opengeos/maplibre-gl-splat) (auf Basis von [spark.js](https://sparkjs.dev/)) werden per CDN (jsDelivr ESM) geladen.
- `avexport_30000.spz` ist der komprimierte Gaussian-Splat (SPZ-Format v3, gzip-komprimiert).
- Beim Laden wird die reale Geländehöhe an der Zielposition aus einer öffentlichen Terrarium-Höhenkachel (AWS Open Data, `elevation-tiles-prod`) ausgelesen, damit der Splat auf Bodenhöhe statt auf Meereshöhe/0 sitzt.

## 🛠️ Lokale Entwicklung
1. Repository klonen: `git clone -b gaussian-splat-map https://github.com/BenjaminBleske/3DGS.git`
2. Im Ordner einen kleinen lokalen Webserver starten, z. B. `python3 -m http.server 8080`
3. `http://localhost:8080/` im Browser öffnen.

## Hinweis zum Format
Die Originaldatei wurde im neuen **SPZ-v4-Format** exportiert (ZSTD-komprimiert), das von aktuellen JS-Renderern noch nicht unterstützt wird. `avexport_30000.spz` in diesem Branch ist daher eine aus der Ursprungs-`.ply` neu erzeugte **SPZ-v3**-Datei (gzip-komprimiert), die mit `maplibre-gl-splat`/`spark.js` kompatibel ist.
