import RedeSociais from "./RedeSociais";

function Footer() {
    return (
        <footer className=" text-white text-center py-5" style={{ height: '200px' }}>
            <small className="d-block mb-4 text-sm">
                © 2025 Samuel Allsyon. Todos os direitos reservados.
            </small>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="d-flex justify-content-between">
                    <RedeSociais />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
