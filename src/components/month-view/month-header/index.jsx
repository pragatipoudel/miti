import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Button from './side-button';
import './styles.scss';

function MonthHeader({
    year,
    month,
    setYear,
    setMonth,
}) {
    const setPrevMonth = () => {
        const newMonth = month - 1;
        if (newMonth < 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(newMonth);
        }
    };

    const setNextMonth = () => {
        const newMonth = month + 1;
        if (newMonth > 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(newMonth);
        }
    };

    return (
        <div className="month-header">
            <Button direction="<" onClick={setPrevMonth} />
            <Title year={year} month={month} />
            <Button direction=">" onClick={setNextMonth} />
        </div>
    );
}

MonthHeader.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    setYear: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired,
};

export default MonthHeader;
