import React from 'react';
import PropTypes from 'prop-types';
import { translateNumToNepali } from '../../../translator';

function Day({ date, tithiMap }) {
    const info = tithiMap[date.nepDate.toString()];
    const isHoliday = info?.extra?.holiday;
    const isToday = date.engDate.toDateString() === new Date().toDateString();

    let className = 'day';
    if (isHoliday) {
        className += ' holiday';
    }

    if (isToday) {
        className += ' today';
    }

    return (
        <div className={className}>
            <div className="nep">
                {translateNumToNepali(date.nepDate.date)}
            </div>
            <div className="eng">
                {date.engDate.getDate()}
            </div>
            <div className="tithi">
                {info?.tithi}
            </div>
        </div>
    );
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
    tithiMap: PropTypes.object.isRequired,
};

export default Day;
