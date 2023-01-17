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
            <MonthView year={year} month={month} setYear={setYear} setMonth={setMonth} />
        </div>
    );
}

export default App;
