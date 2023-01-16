import React from "react";
import MonthView from "../components/month-view";
import NepaliDate from "../nepali-date";
import './styles.scss';


function App() {
  const nd = new NepaliDate(2079, 8, 29)
  console.log(nd.toEnglishDate())

  return (
    <div className="app">
      <MonthView />
    </div>
  );
}

export default App;
