import React from 'react';
import './weather-card-header.css';
import { Typography } from 'antd';

export default function WeatherCardHeader({ cityName, hasError }) {
  const { Text } = Typography;

  const defaultHeaderText = 'Введите город';
  const headerTextAfterError = 'Упс... Что-то пошло не так';
  const headerTextAfterRequest = `Погода в ${cityName}`;

  function headerSwitcher() {
    if (hasError) {
      return headerTextAfterError;
    }
    if (cityName == null) {
      return defaultHeaderText;
    }
    return headerTextAfterRequest;
  }

  return (
    <Text strong className="weather-card__content_header">{headerSwitcher()}</Text>
  );
}
