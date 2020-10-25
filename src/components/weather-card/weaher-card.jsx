import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

import WeatherService from '../../services/weather-service';
import WeatherCardContent from '../weather-card-content/weather-card-content';
import DateFormatter from '../../services/date-formatter';

import './weather-card.css';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.weatherService = new WeatherService();

    this.state = {
      weatherObject: {},
      hasError: false,
      requestTime: new Date().getTime(),
      currentDate: new DateFormatter().formatDate(),
    };

    this.onInputChange = (inputValue) => {
      this.setState({
        weatherObject: {
          cityName: inputValue,
        },
        requestTime: new Date().getTime(),
      });
    };
  }

  componentDidUpdate(_, prevState) {
    const { requestTime } = this.state;

    if (requestTime !== prevState.requestTime) {
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
    const { weatherObject, hasError, currentDate } = this.state;

    return (
      <Row justify="center" align="middle">
        <Col span={8}>
          <Card className="weather-card">
            <WeatherCardContent
              weatherObject={weatherObject}
              onInputChange={this.onInputChange}
              hasError={hasError}
              currentDate={currentDate}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}
