import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import nepaliDates from '../../../nepali-date/data';
import NepaliDate from '../../../nepali-date';
import { getTithi } from '../../../services/tithi';
import Day from './day';

function Days({ year, month }) {
    const [tithi, setTithi] = useState({});

    useEffect(() => {
        getTithi().then((data) => setTithi(data));
    }, []);

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
                <Day key={date.nepDate.date} date={date} tithiMap={tithi} />
            ))}
        </div>
    );
}

Days.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
};

export default Days;
