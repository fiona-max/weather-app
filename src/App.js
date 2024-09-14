import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {WeatherCitiesCard} from "./components/weather-cities-card";
import {LargeCities} from "./components/large-cities-card";
import windImage from './components/wind-image.png'
import {DaysForecastCard} from "./components/days-forecast-card";



function App() {

    const [weatherConditionUS, setWeatherConditionUS] = useState({})
    const [weatherConditionCanada, setWeatherConditionCanada] = useState({})
    const [weatherConditionUk, setWeatherConditionUk] = useState({})

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?q=10001&days=5&lang=fr&key=c8ccfe34e2ca40c1890231243241109')
      setWeatherConditionUS(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  };
  const fetchWeatherUkData = async () => {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?q=SW1&days=1&hour=3&lang=fr&key=c8ccfe34e2ca40c1890231243241109')
      setWeatherConditionUk(response.data)
    } catch (error) {
      console.error(error)
    }
  };
  const fetchWeatherConditionCanadaData = async () => {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?q=G2J&days=1&hour=3&lang=fr&key=c8ccfe34e2ca40c1890231243241109')
      setWeatherConditionCanada(response.data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
     fetchWeatherUkData()
     fetchData()
     fetchWeatherConditionCanadaData()
    }, [])


    return (
        <div className="text-center text-white p-2 container overflow-y-hidden" style={{ backgroundColor: '#023261'}}>
          <h1 className="">Weather Forecast App</h1>
          <div className="">
            {weatherConditionUS && (
                      <WeatherCitiesCard
                        currentTemp={weatherConditionUS.current?.temp_c}
                        weatherCondition={weatherConditionUS.current?.condition.text}
                        weatherIcon={weatherConditionUS.current?.condition.icon}
                        feelsLike={weatherConditionUS.current?.feelslike_c}
                        locationRegion={weatherConditionCanada.location?.name}
                        locationLocalTime={weatherConditionCanada.location?.localtime}
                        winDrill={weatherConditionCanada.current?.vis_km}
                        windImage={windImage}
                        hourForeCastArray={weatherConditionUS.forecast?.forecastday[0].hour}
                      />)}
            {!weatherConditionUS && <p>Loading forecast data...</p>}

          </div>
          <div className="grid lg:ml-8 lg:mr-8 lg:pr-8 lg:pl-8">
            <div className="lg:col-6 col-12 sm:col-12">
              <h4 className="" style={{textAlign: 'left'}}>Other large cities</h4>

              {weatherConditionUS &&  (
                <LargeCities countryInitials={weatherConditionUS.location?.country}
                             cityName={weatherConditionUS.location?.name}
                             weatherIcon={weatherConditionUS.current?.condition.icon}
                             temp={weatherConditionUS.current?.temp_c}
                             weatherCondition={weatherConditionUS.current?.condition.text}/>
              )}
              {weatherConditionCanada && (
                <LargeCities countryInitials={weatherConditionCanada.location?.country}
                             cityName={weatherConditionCanada.location?.name}
                             weatherIcon={weatherConditionCanada.current?.condition.icon}
                             temp={weatherConditionCanada.current?.temp_c}
                             weatherCondition={weatherConditionCanada.current?.condition.text}/>
              )}
              {weatherConditionUk && (
                <LargeCities countryInitials={weatherConditionUk.location?.country}
                             cityName={weatherConditionUk.location?.name}
                             weatherIcon={weatherConditionUk.current?.condition.icon}
                             temp={weatherConditionUk.current?.temp_c}
                             weatherCondition={weatherConditionUk.current?.condition.text}/>
              )}
            </div>
            <div className="lg:col-6 col-12 sm:col-12">
              <h4 style={{textAlign: 'left'}}>5-day forecast</h4>
              {
                weatherConditionUS.forecast?.forecastday.map((forecast) =>
                  (
                    <div key={forecast.id}>
                    <DaysForecastCard
                                      Day={forecast.date}
                                      weatherCondition={forecast.day.condition?.text}
                                      weatherIcon={forecast.day.condition?.icon}
                                      currentTemp={forecast.day?.avgtemp_c}/>
                    </div>
                  ))
              }
              {!weatherConditionUS && <p>Loading forecast data</p>}
            </div>
          </div>
        </div>
    );
}

export default App;
