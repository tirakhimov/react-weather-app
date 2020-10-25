import React from 'react';
import { Typography } from 'antd';

import './error-indicator.css';

function ErrorIndicator({ errorLabel }) {
  const { Text } = Typography;

  return (
    <div className="weather-card__content_">
      <Text
        className="weather-card__content_message"
        type="danger"
      >
        {errorLabel}
      </Text>
      <Text
        role="img"
        aria-label="Sad emoji"
        className="weather-card__content_emoji"
      >
        &#128533;
      </Text>
    </div>
  );
}

export default ErrorIndicator;
