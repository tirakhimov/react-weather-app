import React from 'react';
import './emoji-and-temperature.css';

export default function EmojiAndTemperature({ tempAndWeatherName }) {
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
}
