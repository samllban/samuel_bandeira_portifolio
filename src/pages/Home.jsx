//import { useEffect, useState } from 'react';
import Header from '../components/Header';

function Home() {

    //const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        // Simula o carregamento da tela inicial
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 2.5 segundos para a animação da tela preta

        return () => clearTimeout(timer);
    }, []);

                <div className=" initial-screen d-flex align-items-center justify-content-center ">
                    {/* Tela inicial de carregamento
                </div>
    */


    return (
        <>


            <div className="">
                <Header />
            </div>

        </>
    )
}

export default Home;