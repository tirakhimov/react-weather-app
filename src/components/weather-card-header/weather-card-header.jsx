import React from 'react';

export default function WeatherCardHeader({ cityName, hasError }) {
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
    <h3 className="weather-card__content_header">{headerSwitcher()}</h3>
  );
}
