import React from 'react';
import PropTypes from 'prop-types';
import nepaliDates from '../../../nepali-date/data';
import NepaliDate from '../../../nepali-date';
import Day from './day';

const getDates = (year, month) => {
    const dates = [];
    const numDays = nepaliDates[year - 2000][month];
    let nepDate = 0;
    let engDate = 0;

    for (let i = 0; i < numDays; i += 1) {
        nepDate = new NepaliDate(year, month, i + 1);
        engDate = nepDate.toEnglishDate();
        dates.push({
            nepDate,
            engDate,
            day: engDate.getDay(),
        });
    }

    return dates;
};

function Days({ year, month, tithi }) {
    const dates = getDates(year, month);
    const firstDay = dates[0].day;
    const emptyDays = Array(firstDay).fill().map((_, i) => i);
    return (
        <div className="days">
            {emptyDays.map((emptyDay) => <div className="empty day" key={emptyDay} />)}

            {dates.map((date) => (
                <Day key={date.nepDate.date} date={date} tithiMap={tithi} />
            ))}
        </div>
    );
}

Days.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    tithi: PropTypes.object.isRequired,
};

export default Days;
