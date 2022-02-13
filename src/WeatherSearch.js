import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  function showData(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "305b486110b57d0ffea2de58e32c75a8";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showData);
    console.log(url);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (description) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={changeCity} />
          <input type="submit" value="GO!" />
          <br />
          <ul>
            <li>Temperature: {Math.round(temperature)} C°</li>
            <li>Humidity: {humidity} %</li>
            <li>Wind: {Math.round(wind)} Km/h</li>
            <li> And {description}</li>
            <li>
              <img src={icon} alt='sun'/>
            </li>
          </ul>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={changeCity} />
          <input type="submit" value="GO!" />
          <br />
        </form>
      </div>
    );
  }
}
