import { useState } from 'react';
import './App.css';


function App() {
  // Fayssal1
  // https://api.ipgeolocation.io/ipgeo?apiKey=f08a594da54e48cab93750ee4f229b25&ip=
  const test = fetch('https://api.ipgeolocation.io/getip')
  .then(response => response.json())
  console.log(test);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Lets Go</p>
        <a className="App-link">
          Learn React
        </a>
        <button type='button' className='button'>Clique</button>
      </header>
    </div>
  );
}

export default App;
