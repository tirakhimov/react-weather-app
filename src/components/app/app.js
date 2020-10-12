import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import WeatherCard from '../weather-card/weaher-card';
import './app.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar />
        <WeatherCard />
      </div>
    );
  }
}

export default App;