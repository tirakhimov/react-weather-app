import React from 'react';
import capitalizeFirstLetter from '../../extensions/capitalizeFirstLetter';

export default function WeatherCardHeader({ cityName, hasError }) {
  const capitalizedCityName = capitalizeFirstLetter(cityName);
  const defaultHeader = 'Введите город';
  const headerAfterError = 'Упс... Что-то пошло не так';
  const headerAfterRequest = `Погода в ${capitalizedCityName}`;

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
