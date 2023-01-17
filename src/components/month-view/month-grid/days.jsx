import React from 'react';
import PropTypes from 'prop-types';
import nepaliDates from '../../../nepali-date/data';
import NepaliDate from '../../../nepali-date';

function Days({ year, month }) {
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

    const firstDay = dates[0].day;
    const emptyDays = Array(firstDay).fill().map((_, i) => i);
    return (
        <div className="days">
            {emptyDays.map((i) => <div className="empty day" key={i} />)}

            {dates.map((date, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="day" key={i}>
                    {date.nepDate.date}
                </div>
            ))}
        </div>
    );
}

Days.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
};

export default Days;
