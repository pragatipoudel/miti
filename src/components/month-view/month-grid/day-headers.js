import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const DayHeaders = () => {
    return (
        <div className="day-headers">
            {days.map((day) => (
                <div className="day-header" key = {day}>{day}</div>
            ))}

        </div>

    )
}

export default DayHeaders