import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorIndicator from '../error-indicator/error-indicator';
import WeatherCardHeader from '../weather-card-header/weather-card-header';
import EmojiAndTemperature from '../emoji-and-temperature/emoji-and-temperature';
import {WeatherObject} from "../../interfaces/WeatherObject";

import './weather-card-content.css';
import {Col, Row} from "antd";

interface WeatherCardContentProps {
  weatherObject: WeatherObject;
  error?: Error;
  currentDate: string;
}


const WeatherCardContent: React.FC<WeatherCardContentProps> = ({
  weatherObject,
  error,
  currentDate,
}) => {

  const { cityName, ...tempAndWeatherName } = weatherObject;
  const errorMessage = 'Такого города не существует';

  return (
    <Row
      gutter={[14, 24]}
      className="weather-card__content"
      justify="center"
    >
      <Col className="gutter-row">
        <WeatherCardHeader cityName={cityName} error={error} />
      </Col>
      <Col className="gutter-row" span={24}>
        <SearchBar />
      </Col>
      <Col className="gutter-row">
        { error ? <ErrorIndicator errorMessage={errorMessage} /> : null }
      </Col>
      <Col className="gutter-row">
        { tempAndWeatherName.temperature ? <CurrentDate currentDate={currentDate} /> : null }
      </Col>
      <Col className="gutter-row">
        <EmojiAndTemperature tempAndWeatherName={tempAndWeatherName} />
      </Col>
    </Row>
  );
}

export default WeatherCardContent;