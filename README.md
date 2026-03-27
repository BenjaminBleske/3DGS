# 3D Gaussian Splat Web Viewer 🌌

Ein schneller, moderner 3D Gaussian Splatting Viewer, der vollständig im Browser über WebGL läuft.

## 🚀 Live Demo
**[Hier klicken, um den 3D Gaussian Splat zu starten](https://BenjaminBleske.github.io/3DGS/)**

*(Hinweis: Dieser URL funktioniert erst, sobald GitHub Pages in den Settings deines Repositories aktiviert wurde!)*

## 🏗️ Architektur
Dieses Projekt ist für maximale Performance und Anpassungsfähigkeit strikt in zwei Ebenen separiert:

1. **Frontend (GitHub Pages):** 
   - Eine leichtgewichtige `index.html` + Vanilla JS Oberfläche, die auf der hochentwickelten Engine `@mkkellogg/gaussian-splats-3d` aufbaut.
   - Es wird lokal oder rasend schnell über das globale CDN von GitHub Pages geladen.
2. **Backend (Hugging Face Spaces):**
   - Das massive (ca. 500MB+ große) `.ply` Splat-Modell ist vollständig ausgelagert und wird asynchron und progressiv von einem eigenen [Hugging Face Space](https://benjaminbleske-3dgs.hf.space) gestreamt.
   - Gehostet über ein eigenes `FastAPI` / Docker Backend mit aktiver CORS-Verknüpfung.

## 🛠️ Lokale Entwicklung
Möchtest du Anpassungen am UI oder WebGL-Viewer vornehmen?
1. Klone das Repository: `git clone https://github.com/BenjaminBleske/3DGS.git`
2. Starte im Ordner einen kleinen lokalen Webserver (z.B. Python: `python3 -m http.server 8080` oder NodeJS: `npm install -g http-server && http-server`).
3. Öffne `http://localhost:8080/` in deinem Browser. Das Splat-Ladetool holt das Modell weiterhin live vom Hugging Face Server!
