import React from 'react';
import PropTypes from 'prop-types';
import MonthGrid from './month-grid';
import MonthHeader from './month-header';
import './styles.scss';

function MonthView({
    year,
    month,
    setYear,
    setMonth,
    tithi,
}) {
    return (
        <div className="month-view">
            <MonthHeader year={year} month={month} setYear={setYear} setMonth={setMonth} />
            <MonthGrid year={year} month={month} tithi={tithi} />
        </div>
    );
}

MonthView.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    setYear: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired,
    tithi: PropTypes.object.isRequired,
};

export default MonthView;
