import React from 'react';

export default function WeatherCardHeader({ cityName, hasError }) {
  const defaultHeader = 'Введите город';
  const headerAfterError = 'Упс... Что-то пошло не так';
  const headerAfterRequest = `Погода в ${cityName}`;

  function headerSwitcher(error) {
    if (error) {
      return headerAfterError;
    }
    if (!cityName) {
      return defaultHeader;
    }
    return headerAfterRequest;
  }

  return (
    <h3 className="weather-card__content_header">{headerSwitcher(hasError)}</h3>
  );
}
