import React, { Component } from 'react';
import SearchBar from '../search-bar/search-bar';
import './weather-card.css';
import WeatherService from "../../services/weather-service";
import CurrentDate from '../current-date/current-date';

export default class WeatherCard extends Component {

  state = {}

  weatherService = new WeatherService()

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    return this.weatherService.getWeatherForToday("london")
      .then((response) => {
        this.setState({
          cityName: response.cityName,
          temperature: response.temperature,
          weatherName: response.weatherName,
        })
      }).catch((err) => {
        throw new Error(err.message);
      });
  }

  render() {

    const { cityName, weatherName, temperature } = this.state;

    return (
      <div>
        <div className="weather-card">
          <h3 className="weather-card__content_header">
            Погода в <span className="capitalize">{cityName}</span>
          </h3>
          <SearchBar />
          <CurrentDate />
          <div className="weather-card__content_display">
            <div className="weather-card__content_emoji">
              <p className="weather-card__content_emoji_p">{weatherName}</p>
            </div>
            <div className="weather-card__content_temp">
              <p className="weather-card__content_temp_p">{temperature}&deg;</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
