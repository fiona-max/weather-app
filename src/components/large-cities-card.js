import React from "react";
import { Card } from "primereact/card"
export function LargeCities({countryInitials, cityName, weatherIcon, weatherCondition, temp}) {
  return (
    <div>
      <div className="card">
        <Card style={{ backgroundColor: '#2c556b', color:'white',margin:'1rem', borderRadius:'1.1rem'}}>
          <div className="grid p-3">
            <div className="col-6 sm:col">
              <div className="align-items-start" style={{ textAlign: 'left'}}>
                <span className="text-xs lg:font-light block">{countryInitials}</span>
                <span className="font-semibold text-2xl">{cityName}</span>
                <span className="block font-light text-xs mt-4">{weatherCondition}</span>
              </div>
            </div>
            <div className="col-6 sm:col">
              <div className="align-items-end" style={{textAlign: 'right'}}>
                <img src={weatherIcon} alt="weatherIcon"/>
                <small className="block text-2xl mr-2">{temp}&deg;</small>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
)
}
