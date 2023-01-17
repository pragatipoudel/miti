import React from 'react';

const dates = [];

const currentDate = new Date();
for (let i = 0; i < 32; i += 1) {
    dates.push({
        engDate: new Date(currentDate),
        day: currentDate.getDay(),
    });

    currentDate.setDate(currentDate.getDate() + 1);
}

function Days() {
    const firstDay = dates[0].day;
    const emptyDays = Array(firstDay).fill().map((_, i) => i);
    return (
        <div className="days">
            {emptyDays.map((i) => <div className="empty day" key={i} />)}

            {dates.map((date, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="day" key={i}>
                    {date.engDate.getDate()}
                </div>
            ))}
        </div>
    );
}

export default Days;
