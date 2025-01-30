import PropTypes from "prop-types";

const Background = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100dvh", // Alternativa mais precisa para mobile
                background: `
                var(--main-gradient),
                var(--secondary-gradient),
                var(--overlay-gradient)
            `,
            }}
        >
            {children}
        </div>
    );
};

Background.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Background;
