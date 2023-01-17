import React from 'react';
import MonthView from '../components/month-view';
import NepaliDate from '../nepali-date';
import './styles.scss';

function App() {
    const nd = new NepaliDate(2079, 8, 20);
    console.log(nd.toEnglishDate());
    console.log(NepaliDate.fromEnglishDate(nd.toEnglishDate()));
    // console.log(NepaliDate.fromEnglishDate(new Date()));

    return (
        <div className="app">
            <MonthView />
        </div>
    );
}

export default App;
