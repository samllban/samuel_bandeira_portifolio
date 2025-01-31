import gsap from "gsap";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import ButtonCurriculo from "../components/ButtonCurriculo";
import { useEffect } from "react";
import RedeSociais from "../components/RedeSociais";
import { AdvancedImage } from "@cloudinary/react";
import { getTransformedImage } from "../cloud/cloudinaryUtils.js";

function Sobre() {

    const img = getTransformedImage("foto_sobre", 500, 500);

    useEffect(() => {
        const startAnimation = () => {
            gsap.fromTo(".title-animation", {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: 0.5
            });
            gsap.fromTo(".image-animation", {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: 0.5
            });
        };
        startAnimation();
    }, []);
    return (
        <>
            <Background>
                <NavBar />
                <div className="container-fluid px-3 px-md-5 mb-5" style={{ paddingTop: "120px" }}>
                    {/* Cabeçalho sobre mim */}
                    <div className="text-center mb-1 p-3">
                        <h2 className="fw-normal text-primary fs-5 fs-lg-3">Um pouco</h2>
                        <h1 className="fw-bold text-white">SOBRE MIM</h1>
                    </div>

                    <div className="container-fluid px-3 px-md-5">
                        <div className="row align-items-start">
                            {/* Coluna do Texto */}
                            <div
                                className="col-12 col-lg-6 pb-5 pb-lg-0 text-white text-start d-flex flex-column justify-content-start title-animation"
                                style={{ height: "100%", paddingTop: "20px" }} // Espaçamento superior ajustado
                            >
                                <h2 className="fw-bold fs-2 lh-base text-wrap">
                                    Fala! Me chamo Samuel Bandeira
                                </h2>
                                <p
                                    className="fw-light pt-4 lh-base text-start"
                                    style={{ color: "rgb(201, 201, 201)" }}
                                >
                                    Sou web freelancer e desenvolvedor de software. Com mais de 2 anos de experiência, venho criando
                                    criando páginas web para empresas que desejam inpusionar seu negocio
                                    Sou web freelancer e desenvolvedor de software. Com mais de 2 anos de experiência, venho criando
                                    criando páginas web para empresas que desejam inpusionar seu negocio
                                    Sou web freelancer e desenvolvedor de software. Com mais de 2 anos de experiência, venho criando
                                    criando páginas web para empresas que desejam inpusionar seu negocio
                                    Sou web freelancer e desenvolvedor de software. Com mais de 2 anos de experiência, venho criando
                                    criando páginas web para empresas que desejam inpusionar seu negocio
                                </p>

                                <div className="d-flex p-2 justify-content-start ">
                                    <RedeSociais />
                                    <div className="mt-1">
                                        <ButtonCurriculo />
                                    </div>
                                </div>
                            </div>

                            {/* Coluna da Imagem */}
                            <div
                                className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center image-animation"
                                style={{ height: "100%" }}
                            >
                                    <AdvancedImage
                                        cldImg={img}
                                        alt="Minha foto"
                                        style={{
                                            objectFit: "cover",
                                            maxWidth: "80%",
                                            height: "auto",
                                            borderRadius: "8px ",
                                        }}
                                        className="w-100 w-lg-auto"
                                        loading="lazy"
                                    />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5 px-3 px-md-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            <h3 className="fw-bold text-primary fs-4 fs-lg-3 text-white">Conheça um pouco das minhas</h3>
                            <h1 className="fw-bold text-primary fs-2 fs-lg-3">Habilidades</h1>
                            <p
                                className="fw-light pt-4 slide-right lh-base text-start"
                                style={{ color: "rgb(201, 201, 201)" }}>
                                Sou desenvolvedor web freelancer e empreendedor digital. Com mais de 4 anos de experiência,
                                tenho um histórico comprovado de transformar ideias em soluções digitais eficazes. Além disso,
                                sou criador de conteúdo no TikTok, onde ensino e inspiro pessoas a explorarem o freelancing
                                como uma carreira viável ou uma fonte de renda extra.
                            </p>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    )
}

export default Sobre;