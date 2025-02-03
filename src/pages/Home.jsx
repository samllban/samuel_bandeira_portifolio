//import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import ScrollTec from '../components/ScrollTec.jsx';
import Background from '../components/Background.jsx';


function Home() {
    return (
        <>
            <Background>
                <Header />
                <ScrollTec />
                <Footer />
            </Background>
        </>
    )
}

export default Home;