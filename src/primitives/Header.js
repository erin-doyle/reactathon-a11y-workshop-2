import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, buttonOptions }) => {
    const getNavButton = () => {
        if (!buttonOptions) return null;

        const { text, label, handleClick } = buttonOptions;

        return (
            <button
                className="btn btn btn-outline-light"
                aria-label={label}
                onClick={handleClick}
            >
                {text}
            </button>
        );
    };

    return (
        <header>
            <nav className="navbar navbar-dark">
                <span className="navbar-brand">
                    <h1>{title}</h1>
                </span>
                { getNavButton() }
            </nav>
        </header>
    );
};

Header.defaultProps = {
    buttonOptions: null
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonOptions: PropTypes.shape({
        text: PropTypes.string,
        label: PropTypes.string,
        handleClick: PropTypes.func
    })
};


export default Header;
