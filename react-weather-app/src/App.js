import React from 'react';
import './App.css';
import Search from './components/search/search';
import Card from 'react-bootstrap/Card';

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
      <Card.Title
      className="title"
      >{date}
      <botton
      className = "bottonLeft">
        +
      </botton>
      <div
      className="dropDownRight">
        EN
      </div>
      </Card.Title>
      <Card.Subtitle
      className="subtitle"
      >{time}
      </Card.Subtitle>
    <div className="container">
      <Search
      onSearchChange={handleSearchChange}
      />
    </div>
    </Card.Body>
    </Card>
  );
}

export default App;
