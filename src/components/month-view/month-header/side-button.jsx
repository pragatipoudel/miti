import React from 'react';
import PropTypes from 'prop-types';

function Button({ direction, onClick }) {
    return (
        <button type="button" onClick={onClick}>{direction}</button>
    );
}

Button.propTypes = {
    direction: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
