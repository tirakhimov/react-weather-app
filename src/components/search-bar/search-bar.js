import React from 'react';
import './search-bar.css';

function SearchBar() {
  return (
    <div className="weather-card__content_input-wrapper">
      <span role="img" aria-label="round pushpin">
        &#128205;
      </span>
      <input
        className="input weather-card__content_input"
        type="text"
        placeholder="Поиск города или места"
      />
    </div>
  );
}

export default SearchBar;
