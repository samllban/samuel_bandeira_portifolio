import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Servicos from "../pages/Servicos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Preloader from "../components/Preload";

import { useState, useEffect } from "react";

const AppRoutes = () => {
    const [loading, setLoading] = useState(true); // Controla o Preloader
    const [showOverlay, setShowOverlay] = useState(false); // Controla a transição

    useEffect(() => {
        // Exibir o Preloader rapidamente (apenas 800ms)
        const preloaderTimer = setTimeout(() => {
            setLoading(false); // Remove Preloader
            setShowOverlay(true); // Inicia a transição preta
        }, 800); // Reduzimos de 1500ms para 800ms

        return () => clearTimeout(preloaderTimer);
    }, []);

    useEffect(() => {
        if (showOverlay) {
            // Remove a tela preta rapidamente (600ms)
            const overlayTimer = setTimeout(() => {
                setShowOverlay(false);
            }, 600);

            return () => clearTimeout(overlayTimer);
        }
    }, [showOverlay]);

    return (
        <>
            {loading && <Preloader />} {/* Exibe Preloader rapidamente */}
            {/* Tela preta de transição */}
            <div className={`transition-overlay ${showOverlay ? "active" : ""}`}></div>

            {!loading && !showOverlay && ( // Só renderizar as páginas depois da animação
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/servicos" element={<Servicos />} />
                </Routes>
            )}
        </>
    );
};

export default AppRoutes;
