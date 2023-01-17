import React from 'react';
import PropTypes from 'prop-types';

const monthNames = [
    'Baisakh',
    'Jestha',
    'Asadh',
    'Shrawan',
    'Bhadra',
    'Asoj',
    'Kartik',
    'Mangsir',
    'Poush',
    'Magh',
    'Falgun',
    'Chaitra',
];

function Title({ year, month }) {
    return (
        <div>
            {monthNames[month]}
            {' '}
            {year}
        </div>
    );
}

Title.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
};

export default Title;
