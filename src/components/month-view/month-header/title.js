import React from "react";

const monthNames = [
    "Baisakh",
    "Jestha",
    "Asadh",
    "Shrawan",
    "Bhadra",
    "Asoj",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra"
]

const Title = ({year, month}) => {
    return (
        <div>{monthNames[month - 1]} {year}</div>
    )
}

export default Title