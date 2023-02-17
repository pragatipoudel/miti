import React, { useState } from 'react';
import MonthView from '../components/month-view';
import NepaliDate from '../nepali-date';
import './styles.scss';

function App() {
    const currentEng = new Date();
    const nepDate = NepaliDate.fromEnglishDate(currentEng);
    const [year, setYear] = useState(nepDate.year);
    const [month, setMonth] = useState(nepDate.month);

    return (
        <div className="app">
            <header>
                <h1>मिति</h1>
                <span>...</span>
                <h2>the Nepali Calendar</h2>
            </header>
            <MonthView year={year} month={month} setYear={setYear} setMonth={setMonth} />
        </div>
    );
}

export default App;
