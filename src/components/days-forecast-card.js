import React from "react";
import {Card} from "primereact/card";

export function DaysForecastCard({Day, weatherIcon, weatherCondition, currentTemp, forecastId}) {

  function dateConverter(myDate) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(myDate).getDay()
    return daysOfWeek[date];
  }

  return (
    <div>
      <div className="card">
        <Card style={{ backgroundColor: '#2c556b', color:'white',margin:'1rem', borderRadius:'1.5rem'}}>
          <div className="grid">
            <div className="col-3 mt-3 ">
              <span>
                {dateConverter(Day)}</span>
            </div>
            <div className="col-3">
              <img src={weatherIcon} height="100%" alt="weather icon"/>
            </div>
            <div className="col-3  mt-3">
              {weatherCondition}
            </div>
            <div className="col-3 mt-3">
              {currentTemp}&deg;
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
