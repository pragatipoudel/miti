import React from 'react';
import PropTypes from 'prop-types';
import { translateNumToNepali, engMonthNames, nepMonthNames } from '../../../translator';
import NepaliDate from '../../../nepali-date';

const getEnglishTitle = (nepYear, nepMonth) => {
    const firstDate = new NepaliDate(nepYear, nepMonth, 1).toEnglishDate();
    const lastDate = new NepaliDate(nepYear, nepMonth, 25).toEnglishDate();
    const firstMonth = engMonthNames[firstDate.getMonth()];
    const firstYear = firstDate.getFullYear();
    const lastMonth = engMonthNames[lastDate.getMonth()];
    const lastYear = lastDate.getFullYear();

    if (firstYear === lastYear) {
        return (`${firstMonth} / ${lastMonth} ${firstYear}`);
    }

    return (`${firstMonth} ${firstYear} / ${lastMonth} ${lastYear}`);
};

const getNepaliTitle = (nepYear, nepMonth) => (`${nepMonthNames[nepMonth]} ${translateNumToNepali(nepYear)}`);

function Title({ year, month }) {
    return (
        <div className="title">
            <div className="nep">
                {getNepaliTitle(year, month)}
            </div>
            <div className="eng">
                {getEnglishTitle(year, month)}
            </div>
        </div>
    );
}

Title.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
};

export default Title;
