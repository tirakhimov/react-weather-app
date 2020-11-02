import React, {useEffect, useState} from 'react';
import { Card, Col, Row } from 'antd';
import WeatherCardContent from '../weather-card-content/weather-card-content';
import { WeatherObject } from "../../interfaces/WeatherObject";
import WeatherService from "../../services/weather-service";
import DateFormatter from "../../services/date-formatter";

import './weather-card.css';

const dateFormatter = new DateFormatter();
const weatherService = new WeatherService();

const WeatherCard: React.FC = () => {

  const [ weatherObject, setWeatherObject ] = useState<WeatherObject>({});
  const [ error, setError ] = useState<Error | undefined>(undefined);
  const [ requestTime, setRequestTime ] = useState<number>(new Date().getTime());
  const [ currentDate ] = useState<string>(dateFormatter.formatDate());

  useEffect(() => {
    const setDocumentTitle = (): void => {
      document.title = `Погода в ${weatherObject.cityName}`;
    }

    const updateState = (): Promise<void> | undefined => {
      if (weatherObject.cityName !== undefined) {
        return weatherService.getWeatherForToday(weatherObject.cityName)
          .then((response) => {
            setWeatherObject(() => {
              return {
                cityName: response.cityName,
                temperature: response.temperature,
                weatherName: response.weatherName,
              }
            })
            setError(undefined);
          }).catch((error) => {
            setWeatherObject(() => {
              return {}
            });
            setError(error);
          });
      }
    }
    updateState()?.then(() => setDocumentTitle());
  }, [weatherObject.cityName, requestTime]);

  const onInputChange = (inputValue: string): void => {
    setWeatherObject( () => {
        return { cityName: inputValue};
      }
    );
    setRequestTime(new Date().getTime());
  };

  return (
    <Row justify="center" align="middle">
      <Col span={8}>
        <Card className="weather-card">
          <WeatherCardContent
            weatherObject={weatherObject}
            onInputChange={onInputChange}
            error={error}
            currentDate={currentDate}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default WeatherCard;
