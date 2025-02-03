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
            // Animações iniciais para o título e imagem
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
                                className="col-12 col-lg-6 pb-5 pb-lg-0 text-white text-start d-flex flex-column justify-content-between title-animation"
                                style={{ height: "100%", paddingTop: "20px" }} // Ajustando o padding
                            >
                                <h2 className="fw-bold fs-2 lh-base text-wrap">
                                    Fala! Me chamo Samuel Bandeira
                                </h2>
                                <p
                                    className="fw-light pt-4 lh-base text-start"
                                    style={{ color: "rgb(201, 201, 201)" }}
                                >
                                    Sou Web Designer e desenvolvedor de software especializado
                                    em criar experiências dinâmicas para destacar o seu produto.
                                    Com mais de dois anos de experiência, ajudo empresas a fortalecer
                                    sua presença online por meio de páginas web modernas e eficientes.
                                    Ofereço serviços de landing pages responsivas, SEO otimizado e
                                    desenvolvimento de lojas online, garantindo que seu negócio se
                                    destaque em um mercado digital cada vez mais competitivo.
                                    <br />
                                    <br />
                                    Atualmente, estou cursando Ciência da Computação e Análise e
                                    Desenvolvimento de Sistemas, com o objetivo de expandir ainda mais
                                    meus conhecimentos na área. Se você busca um profissional dedicado
                                    para colaborar em uma parceria que eleve seu negócio online a um novo
                                    nível, vamos conversar!
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
                    <div className="container-fluid py-5 px-3 px-md-5">
                        <div className="row align-items-start">
                            <div className="col-12 col-lg-6 mb-5">
                                <h3 className="fw-bold text-primary fs-4 fs-lg-3 text-white">Conheça um pouco das minhas</h3>
                                <h1 className="fw-bold text-primary fs-2 fs-lg-3">Habilidades</h1>
                                <p
                                    className="fw-light pt-4 slide-right lh-base text-start"
                                    style={{ color: "rgb(201, 201, 201)" }}
                                >
                                    Minhas habilidades abrangem diversas tecnologias atuais,
                                    desde design até o desenvolvimento de sistemas, incluindo
                                    HTML5, CSS, JavaScript, PHP, Figma, NodeJS, SQL, entre outras.
                                    Essas ferramentas me permitem criar sites e softwares modernos e
                                    visualmente atraentes, otimizando o tratamento de serviços web de
                                    qualidade. Tudo isso para atender às necessidades dos meus clientes,
                                    oferecendo soluções que realmente atendem às suas demandas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}

export default Sobre;
