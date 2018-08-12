import React from 'react';
import PropTypes from 'prop-types';


const FormInput = ({ id, type, name, label, helperText }) => {
    const helperId = helperText ? `${id}-helper` : null;

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}
                <input
                    id={id}
                    type={type}
                    name={name}
                    className="form-control"
                    aria-describedby={helperId}
                />
            </label>
            { helperText
                ? <small id={helperId} className="form-text text-muted helper-text">{helperText}</small>
                : null
            }
        </div>
    );
};

FormInput.defaultProps = {
    type: 'text',
    helperText: null
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string
};


export default FormInput;
