import * as THREE from 'three';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

async function initViewer() {
    const viewerContainer = document.getElementById('viewer-container');
    const loadingOverlay = document.getElementById('loading');
    const loadingText = document.getElementById('loading-text');

    try {
        loadingText.innerText = "Initialisiere Viewer...";
        
        // Viewer setup with default optimal orientation
        const viewer = new GaussianSplats3D.Viewer({
            'cameraUp': [0, -1, -0.6],    
            'initialCameraPosition': [-1, -1, -1],
            'initialCameraLookAt': [0, 0, 0],
            'rootElement': viewerContainer,
            'sharedMemoryForWorkers': false // Important for broad compatibility on GitHub Pages (CORS headers might restrict SharedArrayBuffer)
        });

        // The URL of your FastAPI backend.
        // Für lokale Entwicklung nehmen wir an, dass FastAPI auf Port 7860 läuft:
        const modelUrl = 'http://localhost:7860/model.ply'; 
        // Falls deine Datei `model.splat` heißt, ändere dies zu `model.splat`.
        
        loadingText.innerText = `Lade Splat-Modell von FastAPI...`;

        await viewer.addSplatScene(modelUrl, {
            'progressiveLoad': true,
        });

        loadingText.innerText = "Modell geladen. Starte Rendering...";
        
        viewer.start();

        // Verstecke das Lade-Overlay geschmeidig
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);

    } catch (error) {
        console.error("Fehler beim Laden des Splat-Modells:", error);
        loadingText.innerHTML = `<span style="color: #f87171;">Fehler: ${error.message}</span><br><br>Läuft das FastAPI Backend (localhost:7860)? Wurde die .ply/.splat Datei im richtigen Ordner platziert?`;
        
        // Stop the spinner animation on error
        const spinner = document.querySelector('.spinner');
        if (spinner) {
            spinner.style.animation = 'none';
            spinner.style.borderColor = '#f87171';
        }
    }
}

// Start sequence when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initViewer();
});
