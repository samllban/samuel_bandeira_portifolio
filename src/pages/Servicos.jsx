import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Background from "../components/Background";
import {
    FaCode,
    FaTachometerAlt,
    FaChartLine,
    FaDesktop,
    FaHeadset,
    FaShoppingCart,
} from "react-icons/fa";


const cardStyle = {
    backgroundColor: "rgba(13, 13, 13, 0.6)", // Transparente com um fundo escuro
    backdropFilter: "blur(5px)", // Efeito de desfoque
    borderRadius: "15px", // Bordas arredondadas
};


const cardsData = [
    {
        icon: <FaCode size={50} className="text-light mb-3" />,
        title: "Desenvolvimento Web",
        text: "Construção de sites modernos, responsivos e com alta performance para todos os dispositivos.",
    },
    {
        icon: <FaTachometerAlt size={50} className="text-light mb-3" />,
        title: "Velocidade",
        text: "Aprimoramento de sites para melhorar o desempenho e reduzir o tempo de carregamento.",
    },
    {
        icon: <FaChartLine size={50} className="text-light mb-3" />,
        title: "SEO",
        text: "Otimização de sites para alcançar melhores posições em mecanismos de busca e atrair mais visitantes.",
    },
    {
        icon: <FaDesktop size={50} className="text-light mb-3" />,
        title: "Design Unicos UX/UI",
        text: "Todo site é unico, por isso pra cada trabalho feito, o site terá um design que melhor se adapte a personalidaade do cliente .",
    },
    {
        icon: <FaHeadset size={50} className="text-light mb-3" />,
        title: "Suporte",
        text: "Assistência técnica especializada para manutenção e resolução de problemas em sistemas e sites por até 5 meses.",
    },
    {
        icon: <FaShoppingCart size={50} className="text-light mb-3" />,
        title: "Loja Online",
        text: "Criação e personalização de e-commerces modernos para ampliar suas vendas de forma digital.",
    },
];


function Servicoes() {
    return (
        <>
            <Background>
                <NavBar />
                <div className="container-fluid px-3 px-md-5 mb-5" style={{ paddingTop: "120px" }}>
                    <div className="text-center mb-1 p-3">
                        <h2 className="fw-normal text-primary fs-5 fs-lg-3">Meus</h2>
                        <h1 className="fw-bold text-white">SERVIÇOS</h1>
                    </div>
                    <div className="row row-cols-1 mt-5 row-cols-md-3 g-4">
                        {cardsData.map((card, index) => (
                            <div className="col" key={index}>
                                <div
                                    className="card text-white h-100 text-center border-0 shadow"
                                    style={cardStyle}
                                >
                                    <div className="card-body">
                                        {card.icon}
                                        <h5 className="card-title text-primary">{card.title}</h5>
                                        <p className="card-text fs-6">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </Background>
        </>
    );
}


export default Servicoes;

