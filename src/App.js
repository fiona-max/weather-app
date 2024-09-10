import './App.css';
import React from "react";
import {WeatherCitiesCard} from "./components/weather-cities-card";
import {DaysForecastCard} from "./components/days-forecast-card";


function App() {
  return (
    <div className="App">
       <div className="">
           <WeatherCitiesCard/>
       </div>
      <div className="days">
        <DaysForecastCard/>
      </div>
    </div>
  );
}

export default App;
