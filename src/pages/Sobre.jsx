import gsap from "gsap";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import { useEffect } from "react";


function Sobre() {

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
            </Background>
        </>
    )
}

export default Sobre;