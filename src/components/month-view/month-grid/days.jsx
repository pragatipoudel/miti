import React from 'react';
import PropTypes from 'prop-types';
import nepaliDates from '../../../nepali-date/data';
import NepaliDate from '../../../nepali-date';
import { translateNumToNepali } from '../../../translator';

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
            {emptyDays.map((emptyDay) => <div className="empty day" key={emptyDay} />)}

            {dates.map((date) => (
                <div className="day" key={date.nepDate.date}>
                    <div className="nep">
                        {translateNumToNepali(date.nepDate.date)}
                    </div>
                    <div className="eng">
                        {date.engDate.getDate()}
                    </div>
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
