import {Link, useNavigate} from "react";


const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/contato", label: "CONTATO" },
    { path: "/servicos", label: "SERVIÇOS" },
];


function NavBar() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        if (window.location.pathname !== path) {
            // Realiza a navegação diretamente sem animação
            navigate(path);
        }
    };
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-light fw-bold fs-4" href="/">
                    Samuel <span className="text-primary">Dev</span>
                </a>

                <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                        <ul className="navbar-nav text-center">
                            {navLinks.map((link, index) => (
                                <li className="nav-item my-3" key={index}>
                                    <Link
                                        className="nav-link text-light"
                                        to={link.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigate(link.path);
                                        }}
                                        data-bs-dismiss="offcanvas"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>    
                    </div>
            </nav>
        </>
    )
}

export default NavBar;