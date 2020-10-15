import React from 'react';

import './error-component.css';

function ErrorComponent({ label }) {
  return (
    <div>
      <div className="weather-card__content_message">{label}</div>
      <span
        role="img"
        aria-label="Sad emoji"
        className="weather-card__content_emoji"
      >
        &#128533;
      </span>
    </div>
  );
}

export default ErrorComponent;
