import React, { Component } from 'react';
import WeatherService from '../../services/weather-service';
import WeatherCardContent from '../weather-card-content/weather-card-content';

import './weather-card.css';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherObject: {},
      hasError: '',
    };
    this.weatherService = new WeatherService();
    this.onInputChange = (inputValue) => {
      this.setState({
        weatherObject: {
          cityName: inputValue,
        },
      });
    };
  }

  componentDidUpdate(_, prevState) {
    const { weatherObject } = this.state;

    if (weatherObject.cityName !== prevState.weatherObject.cityName) {
      this.updateState().then(() => {
        this.setDocumentTitle();
      });
    }
  }

  setDocumentTitle() {
    const { weatherObject } = this.state;
    document.title = `Погода в ${weatherObject.cityName}`;
  }

  updateState() {
    const { weatherObject } = this.state;

    return this.weatherService.getWeatherForToday(weatherObject.cityName)
      .then((response) => {
        this.setState({
          weatherObject: {
            cityName: response.cityName,
            temperature: response.temperature,
            weatherName: response.weatherName,
          },
          hasError: false,
        });
      }).catch(() => {
        this.setState({
          hasError: true,
        });
      });
  }

  render() {
    const { weatherObject, hasError } = this.state;

    return (
      <div className="weather-card">
        <WeatherCardContent
          hasError={hasError}
          weatherObject={weatherObject}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}
