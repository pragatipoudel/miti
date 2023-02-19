import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import nepaliDates from '../../nepali-date/data';
import NepaliDate from '../../nepali-date';
import { translateNumToNepali, nepMonthNames } from '../../translator';

function SideBar({
    year, month, tithi, setYear, setMonth,
}) {
    const events = [];
    const numDays = nepaliDates[year - 2000][month];

    for (let i = 0; i < numDays; i += 1) {
        const date = new NepaliDate(year, month, i + 1);
        if (tithi[date]?.extra?.event) {
            events.push({
                date,
                event: tithi[date].extra.event,
                holiday: tithi[date].extra.holiday,
            });
        }
    }

    const today = NepaliDate.fromEnglishDate(new Date());
    const todayTithi = tithi[today];

    const todayString = `${translateNumToNepali(today.date)} ${nepMonthNames[today.month]} ${translateNumToNepali(today.year)}`;

    const handleToday = () => {
        setYear(today.year);
        setMonth(today.month);
    };

    return (
        <div className="side-bar">
            <div className="today" onClick={handleToday} role="button" tabIndex="0">
                <h4>आजको दिन</h4>
                <div className="date">
                    {todayString}
                </div>
                <div className="tithi">{todayTithi?.tithi}</div>
                <div className="event">{todayTithi?.extra?.event}</div>
            </div>
            <div className="event-list">
                <h4>चाड तथा पर्वहरु</h4>
                {events.map((event) => (
                    <div key={event.date} className={`event-row ${event.holiday ? 'holiday' : ''}`}>
                        <div className="date">
                            {translateNumToNepali(event.date.date)}
                        </div>
                        <div className="event">{event.event}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

SideBar.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    tithi: PropTypes.object.isRequired,
    setYear: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired,
};

export default SideBar;
