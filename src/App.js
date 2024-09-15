import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {WeatherCitiesCard} from "./components/weather-cities-card";
import {LargeCities} from "./components/large-cities-card";
import windImage from './components/wind-image.png'
import {DaysForecastCard} from "./components/days-forecast-card";



function App() {

    const [weatherConditionCurrentLocation, setWeatherConditionCurrentLocation] = useState({})
    const [weatherConditionCanada, setWeatherConditionCanada] = useState({})
    const [weatherConditionUk, setWeatherConditionUk] = useState({})
    const [userLanguage, setUserLanguage] = useState('');



  const fetchData = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      setUserLanguage(navigator.language)
      const locationUrls = [
        `https://api.weatherapi.com/v1/forecast.json?q=${position.coords.latitude}%2C${position.coords.longitude}&days=5&lang=${userLanguage}&key=c8ccfe34e2ca40c1890231243241109`,
        `https://api.weatherapi.com/v1/forecast.json?q=SW1&days=1&hour=3&lang=${userLanguage}&key=c8ccfe34e2ca40c1890231243241109`,
        `https://api.weatherapi.com/v1/forecast.json?q=G2J&days=1&hour=3&lang=${userLanguage}&key=c8ccfe34e2ca40c1890231243241109`,
      ];

      const responses = await Promise.all(locationUrls.map(async (url) => axios.get(url)));
      setWeatherConditionCurrentLocation(responses[0].data);
      setWeatherConditionUk(responses[1].data);
      setWeatherConditionCanada(responses[2].data);
    } catch (error) {
    }
  };



  useEffect(() => {
     fetchData()
  }, [fetchData, userLanguage])


    return (
        <div className="text-center text-white p-2 container overflow-y-hidden" style={{ backgroundColor: '#023261'}}>
          <h1 className="">Weather Forecast App</h1>
          <div className="">
            {weatherConditionCurrentLocation && (
                      <WeatherCitiesCard
                        currentTemp={weatherConditionCurrentLocation.current?.temp_c}
                        weatherCondition={weatherConditionCurrentLocation.current?.condition.text}
                        weatherIcon={weatherConditionCurrentLocation.current?.condition.icon}
                        feelsLike={weatherConditionCurrentLocation.current?.feelslike_c}
                        locationRegion={weatherConditionCurrentLocation.location?.name}
                        locationLocalTime={weatherConditionCurrentLocation.location?.localtime}
                        winDrill={weatherConditionCurrentLocation.current?.vis_km}
                        windImage={windImage}
                        hourForeCastArray={weatherConditionCurrentLocation.forecast?.forecastday[0].hour}
                      />)}
            {!weatherConditionCurrentLocation && <p>Loading forecast data...</p>}

          </div>
          <div className="grid lg:ml-8 lg:mr-8 lg:pr-8 lg:pl-8">
            <div className="lg:col-6 col-12 sm:col-12">
              <h4 className="" style={{textAlign: 'left'}}>Other large cities</h4>

              {weatherConditionCurrentLocation &&  (
                <LargeCities countryInitials={weatherConditionCurrentLocation.location?.country}
                             cityName={weatherConditionCurrentLocation.location?.name}
                             weatherIcon={weatherConditionCurrentLocation.current?.condition.icon}
                             temp={weatherConditionCurrentLocation.current?.temp_c}
                             weatherCondition={weatherConditionCurrentLocation.current?.condition.text}/>
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
                weatherConditionCurrentLocation.forecast?.forecastday.map((forecast) =>
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
              {!weatherConditionCurrentLocation && <p>Loading forecast data</p>}
            </div>
          </div>
        </div>
    );
}

export default App;
