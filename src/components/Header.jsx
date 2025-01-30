import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Typed } from "react-typed";
import NavBar from "./NavBar";
import Background from "./Background";

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
                    { opacity: 1, y: 0 })
        };
        startInicial()
    }, [tl]);


    return (
        <>
            <Background>
                <section className="w-100 min-vh-100 d-flex flex-column text-center align-items-center justify-content-center pt-5">
                    <NavBar />
                    <div className="container-xl pt-5">
                        {/* Texto abaixo da foto */}
                        <div className="text-light ">
                            <h1 className=" mb-4 fw-bold display-1 titleSamuel">SAMUEL BANDEIRA</h1>
                            <p className="lead font-light display-4 d-inline fs-2 fs-sm-1 fs-md-3 fs-lg-3 fs-xl-5">
                                Desenvolvedor{" "}
                                <span className="text-primary" ref={el} lang="en">Full&nbsp;Stack</span>
                            </p>
                        </div>

                        <div className="p-3 tituloSite">
                            <p className="fs-5 fs-sm-5 fs-md-4 fs-lg-3 text-white-50 ">
                                Sites que engajam e impulsionam seu negócio para o próximo nível
                            </p>
                        </div>

                        <button className="btn py-2 px-3 position-relative mt-5 custom-btn buttonVamos" style={{ border: '3px solid rgba(0, 123, 255, 0.5)' }}>
                            <div className="d-inline-block text-center text-md">
                                <div className="py-1">
                                    <p className="m-0 fw-semibold pb-1">Vamos Conversar</p>
                                </div>
                            </div>
                        </button>

                    </div>
                </section>
            </Background>
        </>
    );
};

export default Header;