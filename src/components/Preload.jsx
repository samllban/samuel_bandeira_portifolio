import { useState, useEffect } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Tempo de exibição

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="vh-100 vw-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white position-fixed top-0 start-0">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Preloader;
