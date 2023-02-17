import React from 'react';
import PropTypes from 'prop-types';
import { translateNumToNepali } from '../../../translator';
import NepaliDate from '../../../nepali-date';

const nepMonthNames = [
    'वैशाख',
    'ज्येष्ठ',
    'आषाढ़',
    'श्रावण',
    'भाद्र',
    'आश्विन',
    'कार्तिक',
    'मंसिर',
    'पौष',
    'माघ',
    'फाल्गुण',
    'चैत्र',
];

const engMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

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
