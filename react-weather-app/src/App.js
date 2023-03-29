import React from 'react';
import './App.css';
import Search from './components/search/Search';
import Card from 'react-bootstrap/Card';
import logo from './assets/logo-weather.png';
import CurrentWeather from './components/current-weather/CurrentWeather';


function App() {
  function handleSearchChange(searchData){
    console.log(searchData);
  }
  
  const current = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = `${dayNames[current.getDay()]} ${current.getDate()}, ${monthNames[current.getMonth()]} ${current.getFullYear()}`;
  const time = current.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


  return (
    <Card
    className="card"
    >
    <Card.Body>
    <div className='title-card'>
      <Card.Title className="date"
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
    <CurrentWeather />
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
