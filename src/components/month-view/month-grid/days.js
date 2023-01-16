import React from "react";

const dates = []

const date = new Date()
for (let i=0; i<32; i++) {
    dates.push({
        engDate: new Date(date),
        day: date.getDay(),
    })

    date.setDate(date.getDate() + 1)
}

const Days = () => {
    const firstDay = dates[0].day
    const emptyDays = Array(firstDay).fill().map((_, i) => i)
    return (
        <div className="days">
            {emptyDays.map((i) => <div className="empty day" key = {i} />)}

            {dates.map((date, i) => (
                <div className="day" key={i}>
                    {date.engDate.getDate()}
                </div>
            ))}
        </div>
    )
}

export default Days