import React from 'react';
import PropTypes from 'prop-types';
import DayHeaders from './day-headers';
import Days from './days';
import './styles.scss';

function MonthGrid({ year, month, tithi }) {
    return (
        <div className="month-grid">
            <DayHeaders />
            <Days year={year} month={month} tithi={tithi} />
        </div>
    );
}

MonthGrid.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    tithi: PropTypes.object.isRequired,
};

export default MonthGrid;
