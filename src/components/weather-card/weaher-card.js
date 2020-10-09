import React from 'react';
import SearchBar from '../search-bar/search-bar';
import './weather-card.css';

function WeatherCard() {
  return (
    <div>
      <div className="weather-card">
        <h3 className="weather-card__content_header">
          Погода в Санкт-Петербурге
        </h3>
        <SearchBar />
        <span className="weather-card__content_date"></span>
        <div className="weather-card__content_display">
          <div className="weather-card__content_emoji">
            <p className="weather-card__content_emoji_p">&#127780;</p>
          </div>
          <div className="weather-card__content_temp">
            <p className="weather-card__content_temp_p">14&deg;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
