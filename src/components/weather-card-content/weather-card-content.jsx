import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorIndicator from '../error-indicator/error-indicator';
import WeatherCardHeader from '../weather-card-header/weather-card-header';
import EmojiAndTemperature from '../emoji-and-temperature/emoji-and-temperature';

import './weather-card-content.css';

export default function WeatherCardContent({
  weatherObject, onInputChange, hasError, currentDate,
}) {
  const { cityName, ...tempAndWeatherName } = weatherObject;
  const errorLabel = 'Такого города не существует';

  return (
    <>
      <WeatherCardHeader cityName={cityName} hasError={hasError} />
      <SearchBar onInputSubmit={(inputValue) => onInputChange(inputValue)} />
      { hasError ? <ErrorIndicator errorLabel={errorLabel} /> : null }
      { tempAndWeatherName.temperature ? <CurrentDate currentDate={currentDate} /> : null }
      <EmojiAndTemperature tempAndWeatherName={tempAndWeatherName} />
    </>
  );
}
