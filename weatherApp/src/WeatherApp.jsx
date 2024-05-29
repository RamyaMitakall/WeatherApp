import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike:44.25,   
        humidity: 13,
        temp: 45.62,
        tempMax: 46.05,
       tempMin: 45.62,
        weather: "haze"
    })
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App by Ramya</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
      
    </div>
  )
}

export default WeatherApp
