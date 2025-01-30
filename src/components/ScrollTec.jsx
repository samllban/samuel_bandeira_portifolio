import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React, {useEffect, useState } from "react";
import PropTypes from "prop-types";
// Importando os SVGs do projeto
import reactIcon from "/src/icons/react.svg";
import awsIcon from "/src/icons/aws.svg";
import cssIcon from "/src/icons/css.svg";
import bootstrapIcon from "/src/icons/bootstrap.svg";
import htmlIcon from "/src/icons/html.svg";
import nodeIcon from "/src/icons/node.svg";
import jsIcon from "/src/icons/js.svg";
import sqlIcon from "/src/icons/sql.svg";
import phpIcon from "/src/icons/php.svg";
import dockerIcon from "/src/icons/docker.svg";

const LazyIcon = React.memo(({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
    }, [src]);

    return (
        <div
            style={{
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isLoaded ? "transparent" : "#f0f0f0",
            }}
        >
            {isLoaded && <img src={src} alt={alt} style={{ width: "100%" }} />}
        </div>
    );
});

LazyIcon.propTypes = {
    src: PropTypes.string.isRequired,  // src deve ser uma string e é obrigatório
    alt: PropTypes.string.isRequired,  // alt deve ser uma string e é obrigatório
};

// Adicionando o displayName
LazyIcon.displayName = 'LazyIcon'
// Adicionando o displayName
LazyIcon.displayName = 'LazyIcon';

const icons = [
    { id: 1, name: "React", icon: reactIcon },
    { id: 2, name: "Aws", icon: awsIcon },
    { id: 3, name: "Css", icon: cssIcon },
    { id: 4, name: "Bootstrap", icon: bootstrapIcon },
    { id: 5, name: "Html", icon: htmlIcon },
    { id: 6, name: "Node", icon: nodeIcon },
    { id: 7, name: "Js", icon: jsIcon },
    { id: 8, name: "Sql", icon: sqlIcon },
    { id: 9, name: "Php", icon: phpIcon },
    { id: 10, name: "Docker", icon: dockerIcon }
];

// Duplicando os ícones para garantir a rotação contínua sem pausa
const extendedIcons = [...icons, ...icons];



function ScrollTec() {
    return (
        <div
            className="container-fluid p-0"
            style={{
                height: "300px"
            }}
        >
            <h3 className="text-center text-white fw-light"> Habilidades</h3>
            <hr className="border-1 border-white mx-auto" style={{ width: '50%' }} />

            <Swiper
                direction="horizontal" // Define o carrossel como horizontal
                slidesPerView={6} // Exibe 6 ícones por vez por padrão
                spaceBetween={10} // Espaço entre os ícones
                loop={true} // Ativa o loop infinito
                autoplay={{
                    delay: 0, // Nenhum atraso
                    disableOnInteraction: false, // Continua o autoplay mesmo após interação
                    pauseOnMouseEnter: false, // Não pausa ao passar o mouse
                }}
                speed={3000} // Velocidade contínua
                modules={[Autoplay]}
                className="overflow-hidden mt-5"
                breakpoints={{
                    // Quando a tela é menor que 576px (mobile)
                    
                    576: {
                        slidesPerView: 4, // Exibe 3 ícones por vez
                    },
                    // Quando a tela é maior que 576px mas menor que 768px (tablet)
                    768: {
                        slidesPerView: 5, // Exibe 4 ícones por vez
                    },
                    // Quando a tela for maior que 768px (desktop)
                    1024: {
                        slidesPerView: 6, // Exibe 6 ícones por vez
                    },
                }}
            >
                {extendedIcons.map((icon, index) => (
                    <SwiperSlide key={`${icon.id}-${index}`} className="d-flex justify-content-center align-items-center">
                        <img
                            src={icon.icon}
                            alt={icon.name}
                            className="mx-2"
                            style={{
                                width: '70px', // Tamanho do ícone para dispositivos grandes
                            }}
                        />
                        {icon.value}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ScrollTec;
