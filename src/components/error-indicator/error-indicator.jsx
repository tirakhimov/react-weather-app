import React from 'react';
import { Typography } from 'antd';

import './error-indicator.css';

function ErrorIndicator({ errorLabel }) {
  const { Text } = Typography;

  return (
    <div className="weather-card__content">
      <Text
        className="weather-card__content_message"
        type="danger"
      >
        {errorLabel}
      </Text>
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
