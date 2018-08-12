import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, buttonText, buttonLabel, handleButtonClick }) => (
    <header>
        <nav className="navbar navbar-dark bg-primary">
            <span className="navbar-text">
                <h1>{title}</h1>
            </span>
            <button
                className="btn btn-outline-secondary"
                aria-label={buttonLabel}
                onClick={handleButtonClick}
            >
                {buttonText}
            </button>
        </nav>
    </header>
);

Header.defaultProps = {
    buttonText: '',
    buttonLabel: null,
    handleButtonClick: () => {}
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    handleButtonClick: PropTypes.func
};


export default Header;
