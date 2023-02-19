import React, { useState, useEffect } from 'react';
import MonthView from '../components/month-view';
import SideBar from '../components/side-bar';
import NepaliDate from '../nepali-date';
import { getTithi } from '../services/tithi';
import './styles.scss';

function App() {
    const currentEng = new Date();
    const nepDate = NepaliDate.fromEnglishDate(currentEng);
    const [year, setYear] = useState(nepDate.year);
    const [month, setMonth] = useState(nepDate.month);
    const [tithi, setTithi] = useState({});

    useEffect(() => {
        getTithi().then((data) => setTithi(data));
    }, []);

    return (
        <div className="app">
            <header>
                <h1>मिति</h1>
                <span>...</span>
                <h2>the Nepali Calendar</h2>
            </header>
            <div className="container">
                <MonthView
                    year={year}
                    month={month}
                    setYear={setYear}
                    setMonth={setMonth}
                    tithi={tithi}
                />
                <SideBar
                    year={year}
                    month={month}
                    setYear={setYear}
                    setMonth={setMonth}
                    tithi={tithi}
                />
            </div>
        </div>
    );
}

export default App;
