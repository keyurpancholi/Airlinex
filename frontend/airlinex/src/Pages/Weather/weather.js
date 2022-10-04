import "./weather.css"
import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar/navbar";
import Search from "../../Components/search/search";
import Forcast from "../../Components/forcast/forcast";
import CurrentWeather from "../../Components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api";

function Weather() {
  const[currentWeather, setCurrentWeather] = useState(null);
  const[forcast, setForcast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const[lat,lon] = searchData.value.split("");

    const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forcastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    Promise.all([currentWeatherFetch, forcastFetch])
     .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label , ...weatherResponse});
      setForcast({city: searchData.label, ...forcastResponse});
     })
     .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(forcast);
  return (
    <div className="weather-bg">
      <Navbar />
      <div className="searchbox">
      <Search onSearchChange={handleOnSearchChange} />
      </div>
      { currentWeather && <CurrentWeather data={currentWeather}/>}
      <div className="searchbox">
      {forcast && <Forcast data={forcast} />}
      </div>
      
    </div>
    
  )
}

export default Weather
