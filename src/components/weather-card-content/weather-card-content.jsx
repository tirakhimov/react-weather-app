import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';

import './weather-card-content.css';

function WeatherCardContent({ weatherObject, onInputChange }) {
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
      <div className="weather-card__content_display">
        <div className="weather-card__content_emoji">
          <p className="weather-card__content_emoji_p">{ weatherName }</p>
        </div>
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

export default WeatherCardContent;
