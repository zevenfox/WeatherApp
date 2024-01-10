import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Card from 'react-bootstrap/Card';
// import logo from './assets/logo-weather.png';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Headers from './components/Header/Header';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cardWidth, setCardWidth] = useState("449px");
  const [isVisible, setVisible] = useState(false)


  function handleMoreInfoButtonClick(isSelected) {
    // Update cardWidth based on the isSelected value
    setCardWidth(isSelected ? "898px" : "449px");
    setVisible(isSelected ? true : false);
  }
  
  function backgroundChange() {
    const currentTime = new Date().getHours();
    console.log(currentTime)
    if (currentTime >= 6 && currentTime <= 18) {
      setBackgroundColor('#cbe4de');
    } else {
      setBackgroundColor('#2C3333');
    }
  }
  useEffect(() => {
    backgroundChange();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      backgroundChange();
    }, 30000); // Update every 30 sec

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentTime]);
  
  
  function handleSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
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


  return (
    <div className="backgroundColor" style={{ backgroundColor: backgroundColor }}>
    <Card  
    className="card"
    style={{ width: cardWidth }}
    >
    <Card.Body className= "cardBody">
    <div className='contentLeft'>
      <Headers date={date} currentTime={currentTime} onMoreInfoButtonClick={handleMoreInfoButtonClick}/>
      <div className="container">
        <Search onSearchChange={handleSearchChange}/>
      </div>
      {currentWeather && <CurrentWeather data= {currentWeather}/>}
    </div>
    <div className={isVisible? "show" : "hide"} >
      LOL
    </div>
    </Card.Body>
    </Card>
    </div>
  );
}


export default App;
