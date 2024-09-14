import React from "react";
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';
import 'primeicons/primeicons.css';


export function WeatherCitiesCard({currentTemp, weatherCondition, weatherIcon, feelsLike, locationRegion, locationLocalTime, winDrill, windImage,hourForeCastArray}) {
  function extractTime(dateStr) {
    const date = new Date(dateStr)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`;
  }

  return (
     <div className="grid lg:ml-8 lg:mr-8 lg:pr-8 lg:pl-8">
           <div className="lg:col-6 col-12 sm:col-12">
             <Card style={{ backgroundColor: '#2c556b', color:'white',margin:'0.2rem', borderRadius:'1.1rem'}}>
               <div className="grid p-3">
                 <div className="col">
                   <div className="align-items-start" style={{ textAlign: 'left'}}>
                     <span className="text-5xl lg:font-bold">{currentTemp}&deg;</span>
                     <div className="flex-row font-light">
                       <div>
                         <img src={weatherIcon} alt="weather icon"/>
                       </div>
                       <div className="mt-4">
                         {weatherCondition}
                       </div>
                     </div>
                     <span className="block">Feels like <span>{feelsLike}&deg;c</span></span>
                   </div>
                 </div>
                 <div className="col">
                   <div className="align-items-end" style={{textAlign: 'right'}}>
                     <span className="font-semibold text-2xl">{locationRegion}</span>
                     <span className="block text-xs font-light">{extractTime(locationLocalTime)}</span>
                     <br/>
                     <div className="flex flex-row font-light justify-content-end" style={{ textAlign: 'right'}}>
                       <div>
                         <img src={windImage} height="19rem" alt="weather icon"/>
                       </div>
                       <div className="ml-2">
                         {winDrill} m/s
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </Card>
           </div>
           {/*<div className="lg:col sm:col-12 ">*/}
              { hourForeCastArray?.slice(0,6).map( (forecast) => (
                <div className="col">
                  <Card style={{ backgroundColor: '#2c556b', color:'white', padding:'0.1rem',height:'14.3rem', borderRadius:'1.1rem', width:'auto'}}>
                    <div className="align-items-center p-2">
                      <span className="block text-xs font-light">{extractTime(forecast.time)}</span>
                      <hr/>
                      <img src={forecast.condition.icon} alt="weather icon"/>
                      <p className="block font-light text-xs">{forecast.condition.text}</p>
                      <span className="lg:text-3xl sm:text-xs lg:font-bold">{forecast.temp_c}&deg;</span>
                    </div>
                  </Card>
                </div>
              )
            )
          }
            {/*</div>*/}
     </div>
   )
}
