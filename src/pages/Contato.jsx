import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { db, ref, set } from "../services/firebase";

const FormField = ({ id, label, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label text-light border-dark">{label}</label>
            <input
                type={type}
                className="form-control bg-transparent border-dark  text-light"
                id={id}
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeWhatsapp = (e) => {
        setWhatsapp(e.target.value);
    }

    const handleChangeMensagem = (e) => {
        setMensagem(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Formulário enviado");
        const dadosFormulario = {
            nome: nome,
            email: email,
            whatsapp: whatsapp,
            mensagem: mensagem,
            dataEnvio: new Date().toISOString()
        };

        try {
            const forRef = ref(db, "formulario/" + Date.now());
            await set(forRef, dadosFormulario);
            alert("Mensagem enviada com sucesso!");
            setNome("");
            setEmail("");
            setWhatsapp("");
            setMensagem("");
        } catch (error) {
            console.error(error);
            alert("Erro ao enviar os dados");
        }
    }

    return (
        <>
            <Background>
                <NavBar />
                <section className="container-fluid" style={{ paddingTop: "180px" }}>
                    <div className="row d-flex align-items-start">
                        {/* Formulário à esquerda */}
                        <div className="col-12 col-md-6 ">
                            <div className="card border-dark shadow-lg"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(5px)", borderRadius: "15px" }}>
                                <div className="card-body">
                                    <h2 className="mb-4 text-light text-center">Vamos dar inicio?</h2>
                                    <form onSubmit={handleSubmit}>
                                        <FormField
                                            id="nome"
                                            label="Nome Completo"
                                            type="text"
                                            placeholder="João Guilherme"
                                            value={nome}
                                            onChange={handleChangeNome}
                                        />
                                        <FormField
                                            id="email"
                                            label="E-mail"
                                            type="email"
                                            placeholder="joao@gmail.com"
                                            value={email}
                                            onChange={handleChangeEmail}
                                        />
                                        <FormField
                                            id="telefone"
                                            label="Número de WhatsApp"
                                            type="tel"
                                            placeholder="(88) 9 9999999"
                                            value={whatsapp}
                                            onChange={handleChangeWhatsapp}
                                        />
                                        <div className="mb-3">
                                            <label htmlFor="mensagem" className="form-label text-light">Mensagem</label>
                                            <textarea
                                                className="form-control bg-transparent text-light border-dark"
                                                id="mensagem"
                                                name="mensagem"
                                                rows="4"
                                                placeholder="Informe aqui, em detalhes os objetivos com o seu site"
                                                required
                                                value={mensagem}
                                                onChange={handleChangeMensagem}
                                            ></textarea>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn border-dark btn-outline-light">Enviar Mensagem</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Cards à direita */}
                        <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center">
                            {/* Card WhatsApp */}
                            <div className="card text-white mb-3"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(5px)", borderRadius: "15px", cursor: "pointer" }}>
                                <a href="https://wa.me/message/D7SMXDK5YXAOA1" target="_blank" rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "inherit" }}>
                                    <div className="card-body">
                                        <FaWhatsapp size={40} className="text-success mb-2" />
                                        <h5>Fale comigo no WhatsApp</h5>
                                        <p className="mb-0">(88) 9 92566905</p>
                                    </div>
                                </a>
                            </div>

                            {/* Card E-mail */}
                            <div className="card text-white"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(5px)", borderRadius: "15px", cursor: "pointer" }}>
                                <a href="mailto:samuelalves2142@gmail.com" target="_blank" rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "inherit" }}>
                                    <div className="card-body">
                                        <FaEnvelope size={40} className="text-primary mb-2" />
                                        <h5>Mande um e-mail</h5>
                                        <p className="mb-0">samuelalves2142@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </Background>
        </>
    );
};

export default Contato;