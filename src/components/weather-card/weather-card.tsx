import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';
import WeatherCardContent from '../weather-card-content/weather-card-content';
import { WeatherCardProps } from '../../interfaces/WeatherCardProps';

import './weather-card.css';

const WeatherCard: React.FC<WeatherCardProps> = (props) => {

  useEffect(() => {
    const setDocumentTitle = (): void => {
      document.title = `Погода в ${props.weatherObject.cityName}`;
    }
    if (props.weatherObject.cityName) {
      setDocumentTitle();
    }
  });

  const { weatherObject, error, currentDate } = props;
  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={18} md={13} lg={10} xl={7} xxl={6}>
        <Card className="weather-card">
          <WeatherCardContent
            weatherObject={weatherObject}
            error={error}
            currentDate={currentDate}
          />
        </Card>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state: WeatherCardProps): WeatherCardProps => ({
  weatherObject: state.weatherObject,
  inputValue: state.inputValue,
  error: state.error,
  requestTime: state.requestTime,
  currentDate: state.currentDate,
});

export default connect(
  mapStateToProps,
)(WeatherCard);

