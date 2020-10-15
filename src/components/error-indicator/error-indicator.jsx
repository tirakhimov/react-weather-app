import React from 'react';

import './error-indicator.css';

function ErrorIndicator({errorLabel}) {
  return (
    <div>
      <div className="weather-card__content_message">{errorLabel}</div>
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

export default ErrorIndicator;
