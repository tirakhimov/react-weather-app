import React from 'react';
import './weather-card-header.css';
import { Typography } from 'antd';

export interface WeatherCardHeaderProps {
  cityName?: string;
  error?: Error;
}

const WeatherCardHeader: React.FC<WeatherCardHeaderProps> = ({ cityName, error }) => {

  const { Text } = Typography;

  const defaultHeaderText = 'Введите город';
  const headerTextAfterError = 'Упс... Что-то пошло не так';
  const headerTextAfterRequest = `Погода в ${cityName}`;

  function setHeader(): string {
    if (error) {
      return headerTextAfterError;
    }
    if (cityName == null) {
      return defaultHeaderText;
    }
    return headerTextAfterRequest;
  }

  return (
    <Text strong className="weather-card__content_header">{setHeader()}</Text>
  );
}

export default WeatherCardHeader;
