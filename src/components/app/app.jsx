import React from 'react';
import Navbar from '../navbar/navbar';
import WeatherCard from '../weather-card/weaher-card';
import './app.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <WeatherCard />
    </div>
  );
}

export default App;
