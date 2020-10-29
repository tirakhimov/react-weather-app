import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

import WeatherService from '../../services/weather-service';
import WeatherCardContent from '../weather-card-content/weather-card-content';
import DateFormatter from '../../services/date-formatter';
import { WeatherObject } from "../../interfaces/WeatherObject";

import './weather-card.css';

export interface WeatherCardState {
  weatherObject: WeatherObject;
  hasError?: Error;
  requestTime: number;
  currentDate: string;
}

export default class WeatherCard extends Component<{}, WeatherCardState> {

  readonly state: WeatherCardState;
  private weatherService: WeatherService;
  private readonly onInputChange: (inputValue: string) => void;

  constructor(props: {}) {
    super(props);

    this.weatherService = new WeatherService();

    this.state = {
      weatherObject: {},
      hasError: undefined,
      requestTime: new Date().getTime(),
      currentDate: new DateFormatter().formatDate(),
    };

    this.onInputChange = (inputValue): void => {
      this.setState({
        weatherObject: {
          cityName: inputValue,
        },
        requestTime: new Date().getTime(),
      });
    };
  }


  componentDidUpdate(_: {}, prevState: WeatherCardState): void {
    const { requestTime } = this.state;

    if (requestTime !== prevState.requestTime) {
      this.updateState()?.then(() => {
        this.setDocumentTitle();
      });
    }
  }

  setDocumentTitle(): void {
    const { weatherObject } = this.state;
    document.title = `Погода в ${weatherObject.cityName}`;
  }

  updateState(): Promise<void> | undefined {
    const { weatherObject } = this.state;

    if (weatherObject.cityName !== undefined) {
      return this.weatherService.getWeatherForToday(weatherObject.cityName)
          .then((response) => {
            this.setState({
              weatherObject: {
                cityName: response.cityName,
                temperature: response.temperature,
                weatherName: response.weatherName,
              },
              hasError: undefined,
            });
          }).catch((error) => {
            this.setState({
              hasError: error,
            });
          });
    }
  }

  render(): JSX.Element {
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
