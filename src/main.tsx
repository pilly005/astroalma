import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { getMissingEnv } from "./lib/env";

function MissingEnvScreen({ missing }: { missing: string[] }) {
  return (
    <div className="min-h-full cosmos-bg flex items-center justify-center p-6">
      <div className="card p-8 max-w-md text-center">
        <div className="text-5xl mb-4">🔑</div>
        <h1 className="font-display text-2xl gold-text mb-3">Faltan claves de configuración</h1>
        <p className="text-cosmos-lavender mb-4">
          La app no puede iniciar sin estas variables de entorno:
        </p>
        <ul className="text-left text-cosmos-cream bg-black/30 rounded-xl p-4 mb-4 font-mono text-sm">
          {missing.map((k) => (
            <li key={k} className="py-1">• {k}</li>
          ))}
        </ul>
        <p className="text-cosmos-muted text-sm">
          Copia <span className="font-mono">.env.example</span> a{" "}
          <span className="font-mono">.env</span> y completa las claves reales.
          Esto es intencional: nunca publicamos en modo demo.
        </p>
      </div>
    </div>
  );
}

const missing = getMissingEnv();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {missing.length > 0 ? <MissingEnvScreen missing={missing} /> : <App />}
  </React.StrictMode>
);
