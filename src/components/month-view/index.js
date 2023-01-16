import React from "react";
import MonthGrid from "./month-grid";
import MonthHeader from "./month-header";
import './styles.scss'

const MonthView = () => {
    return (
        <div className="month-view">
            <MonthHeader />
            <MonthGrid />
        </div>)

}

export default MonthView