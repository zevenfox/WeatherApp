import React from 'react';
import './App.css';
import Search from './components/search/search';

function App() {
  return (
    <div className="container">
      <Search 
      onSearchChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
