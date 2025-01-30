import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/contato", label: "CONTATO" },
    { path: "/servicos", label: "SERVIÇOS" },
];

function NavBar() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        if (window.location.pathname !== path) {
            // Realiza a navegação diretamente sem animação
            navigate(path);
        }
    };


    const [navStyle, setNavStyle] = useState({
        backgroundColor: "transparent",
        transition: "background-color 0.3s ease",
        backdropFilter: "none",
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavStyle({
                    backgroundColor: "rgba(0, 0, 0, 0.36)",
                    backdropFilter: "blur(5px)",
                    transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
                });
            } else {
                setNavStyle({
                    backgroundColor: "transparent",
                    backdropFilter: "none",
                    transition: "background-color 0.3s ease",
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ ...navStyle, height: "120px" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-light fw-bold fs-4" href="/">
                    Samuel <span className="text-primary">Dev</span>
                </a>

                {/* Botão do Offcanvas com ícone de hambúrguer branco */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    style={{ filter: "invert(1)" }} // Deixa o ícone branco
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="offcanvas offcanvas-end bg-black"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    style={{ width: "100%", height: "100vh" }} // Garante altura total
                >
                    <div className="offcanvas-header">
                        {/* Botão de fechar com ícone "X" branco */}
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>


                    <div className="overlay-transition"></div>

                    <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                        <ul className="navbar-nav text-center">
                            {navLinks.map((link, index) => (
                                <li className="nav-item my-3" key={index}>
                                    <Link
                                        className="nav-link text-light"
                                        to={link.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigate(link.path);
                                        }}
                                        data-bs-dismiss="offcanvas"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
