import React from 'react';
import DayHeaders from './day-headers';
import Days from './days';
import './styles.scss';

function MonthGrid() {
    return (
        <div className="month-grid">
            <DayHeaders />
            <Days />
        </div>
    );
}

export default MonthGrid;
