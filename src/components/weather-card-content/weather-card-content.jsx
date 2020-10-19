import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorIndicator from '../error-indicator/error-indicator';
import EmojiAndTemperature from '../emoji-and-temperature/emoji-and-temperature';

import './weather-card-content.css';

export default function WeatherCardContent({
  weatherObject, onInputChange, hasError, currentDate,
}) {
  const { cityName, ...tempAndWeatherName } = weatherObject;
  const errorLabel = 'Такого города не существует';

  return (
    <>
      <h3 className="weather-card__content_header">
        Погода в <span className="capitalize">{cityName}</span>
      </h3>
      <SearchBar onInputSubmit={(inputValue) => onInputChange(inputValue)} />
      { hasError ? <ErrorIndicator errorLabel={errorLabel} /> : <CurrentDate /> }
      <EmojiAndTemperature tempAndWeatherName={tempAndWeatherName} />
    </>
  );
}
