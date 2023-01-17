import React from 'react';
import PropTypes from 'prop-types';

function Button({ direction }) {
    return (
        <button type="button">{direction}</button>
    );
}

Button.propTypes = {
    direction: PropTypes.string.isRequired,
};

export default Button;
