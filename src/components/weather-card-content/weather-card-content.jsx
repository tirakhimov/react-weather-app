import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorIndicator from '../error-indicator/error-indicator';

import './weather-card-content.css';

export default function WeatherCardContent({ weatherObject, onInputChange, hasError }) {
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

const EmojiAndTemperature = ({ tempAndWeatherName }) => {
  const {weatherName, temperature} = tempAndWeatherName;
  return (
    <div className="weather-card__content_display">
      <span
        role="img"
        aria-label="Weather emoji"
        className="weather-card__content_emoji"
      >
        {weatherName}
      </span>
      <div className="weather-card__content_temp">
        <p className="weather-card__content_temp_p">
          {temperature}
          {temperature ? <span>&deg;</span> : null}
        </p>
      </div>
    </div>
  );
};
