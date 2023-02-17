import React from 'react';

const days = [
    'आइत',
    'सोम',
    'मगल',
    'बुध',
    'बिहि',
    'शुक्र',
    'शनि',
];

function DayHeaders() {
    return (
        <div className="day-headers">
            {days.map((day) => (
                <div className="day-header" key={day}>{day}</div>
            ))}

        </div>

    );
}

export default DayHeaders;
