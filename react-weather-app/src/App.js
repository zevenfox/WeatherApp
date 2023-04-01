import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import Card from 'react-bootstrap/Card';
// import logo from './assets/logo-weather.png';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  function handleSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(currentWeather);
  console.log(forecastWeather);

  const current = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = `${dayNames[current.getDay()]} ${current.getDate()}, ${
    monthNames[current.getMonth()]
  } ${current.getFullYear()}`;
  const time = current.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <Card
    className="card"
    >
    <Card.Body>
    <div className='title-card'>
      <Card.Title className="date "
      >{date}
      <botton className = "bottonRight">
        +
      </botton>
      <div className="dropDownLeft">
        <text>
        EN
        </text>
      </div>
      </Card.Title>
      </div>
      <Card.Subtitle
      className="subtitle"
      >{time}
      </Card.Subtitle>
    <div className="container">
      <Search
      onSearchChange={handleSearchChange}
      />
    </div>
    <CurrentWeather 
    data= {currentWeather}

      
    />
    {/* <div>
      <img 
      className="logo"
      src={logo} />
    </div> */}
    </Card.Body>
    </Card>
  );
}


export default App;
