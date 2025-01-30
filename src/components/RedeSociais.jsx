import instagraIcon from "/src/icons/instagram.svg";
import linkedinIcon from "/src/icons/linkdin.svg";
import whatswap from "/src/icons/whatswapp.svg";
import github from "/src/icons/github.svg";

const icons = [
    { id: 1, name: "gitbub", icon: github, url: "https://github.com/samllban" },
    { id: 2, name: "instagra", icon: instagraIcon, url: "https://www.instagram.com/samuel.bandeira.all/" },
    { id: 3, name: "linkedin", icon: linkedinIcon, url: "https://www.linkedin.com/in/samuel-bandeira-3a6692253/" },
    { id: 4, name: "whatswapp", icon: whatswap, url: "https://wa.me/message/D7SMXDK5YXAOA1" },
];

function RedeSociais() {
    return (
        <>
                {/* Loop para exibir os ícones de redes sociais */}
                {icons.map((icon, index) => {
                    return (
                        <a
                            href={icon.url}
                            key={`${icon.id} ${index}`}
                            className="p-2 mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={icon.icon}
                                alt={icon.name}
                                className="icons hover-transform "
                                style={{ width: "20px", height: "35px" }}
                            />
                        </a>
                    );
                })}
        </>
    )
}

export default RedeSociais;