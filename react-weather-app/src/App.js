import React from 'react';
import './App.css';
import Search from './components/search/search';


function App() {
  function handleSearchChange(searchData){
    console.log(searchData);
  }


  return (
    <div className="container">
      <Search 
      onSearchChange={handleSearchChange}
      />
    <card>
      <h1>Weather App</h1>
    </card>
    </div>
  );
}

export default App;
