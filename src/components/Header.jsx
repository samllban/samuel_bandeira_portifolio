import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Typed } from "react-typed";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {

    const tl = gsap.timeline({ defaults: { duration: 1 } })
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Full&nbsp;Stack&nbsp;",
                "Freelancer&nbsp;",
                "Web&nbsp;",
            ],
            typeSpeed: 120,
            backSpeed: 100,
            loop: true,
            smartBackspace: true,
            startDelay: 300,
            backDelay: 1000,
        });
        return () => typed.destroy();
    }, []);

    useEffect(() => {
        const startInicial = () => {
            tl.fromTo(".titleSamuel",
                { opacity: 0, y: 100, },
                { opacity: 1, y: 0, })
                .fromTo(".tituloSite",
                    { opacity: 0, y: 100, },
                    { opacity: 1, y: 0, delay: 1 }, "-=0.75")
                .fromTo(".buttonVamos",
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        };
        startInicial()
    }, [tl]);

    return (
        <>
            <section className="w-100 min-vh-100 d-flex flex-column text-center align-items-center justify-content-center pt-5">
                <NavBar />
                <div className="container-xl pt-5">
                    {/* Texto abaixo da foto */}
                    <div className="text-light ">
                        <h1 className="mb-2fw-bold text-nowrap h1display titleSamuel">SAMUEL BANDEIRA</h1>
                        <p className="buttonVamos lead font-light d-inline fs-1 fs-sm-1 fs-md-3 fs-lg-3 fs-xl-5">
                            Desenvolvedor{" "}
                            <span className="text-primary" ref={el} lang="en">Full&nbsp;Stack</span>
                        </p>
                    </div>

                    <div className="p-3 tituloSite">
                        <p className="fs-5 fs-sm-5 fs-md-4 fs-lg-3 text-white-50 ">
                            Sites que engajam e impulsionam seu negócio para o próximo nível
                        </p>
                    </div>

                    <Link to="/contato">
                        <button
                            className="btn py-3 px-4 text-white position-relative mt-5 custom-btn rounded-pill fw-bold shadow-lg "
                            style={{
                                background: "linear-gradient(135deg, #004080, #0080ff)", // Gradiente azul vibrante
                                fontSize: "1.2rem",
                                letterSpacing: "1px",
                                transition: "0.3s ease-in-out",
                                boxShadow: "0 4px 10px rgba(0, 128, 255, 0.3)", // Sombra azul suave
                                border: "none",
                                cursor: "pointer",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = "scale(1.05)";
                                e.target.style.boxShadow = "0 6px 15px rgba(0, 128, 255, 0.5)"; // Sombra mais intensa no hover
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.boxShadow = "0 4px 10px rgba(0, 128, 255, 0.3)";
                            }}
                        >
                            Vamos Conversar
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Header;