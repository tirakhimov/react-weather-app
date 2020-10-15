import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorComponent from '../error-component/error-component';

import './weather-card-content.css';

function WeatherCardContent({ weatherObject, onInputChange, hasError }) {
  const { cityName, temperature, weatherName } = weatherObject;

  return (
    <>
      <h3 className="weather-card__content_header">
        Погода в <span className="capitalize">{cityName}</span>
      </h3>
      <SearchBar
        onInputSubmit={(inputValue) => onInputChange(inputValue)}
      />
      <CurrentDate />
      {
        hasError ? <ErrorComponent label="Такого города не сущетвует" /> : null
      }
      <div className="weather-card__content_display">
        <span
          role="img"
          aria-label="Weather emoji"
          className="weather-card__content_emoji"
        >
          { weatherName }
        </span>
        <div className="weather-card__content_temp">
          <p className="weather-card__content_temp_p">
            { temperature }
            { temperature ? <span>&deg;</span> : null}
          </p>
        </div>
      </div>
    </>
  );
}

const EmojiAndTemperature = ({ weatherName, temperature }) => (
  <div className="weather-card__content_display">
    <span
      role="img"
      aria-label="Weather emoji"
      className="weather-card__content_emoji"
    >
      { weatherName }
    </span>
    <div className="weather-card__content_temp">
      <p className="weather-card__content_temp_p">
        { temperature }
        { temperature ? <span>&deg;</span> : null}
      </p>
    </div>
  </div>
);

export default WeatherCardContent;
