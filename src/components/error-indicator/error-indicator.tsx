import React from 'react';
import { Typography } from 'antd';

import './error-indicator.css';

export interface ErrorIndicatorProps {
  errorMessage: string;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ errorMessage }): JSX.Element => {

  const { Text } = Typography;

  return (
    <div className="weather-card__content">
      <Text
        className="weather-card__content_error-message"
        type="danger"
      >
        {errorMessage}
      </Text>
      <Text
        aria-label="Sad emoji"
        className="weather-card__content_error-emoji"
      >
        &#128533;
      </Text>
    </div>
  );
}

export default ErrorIndicator;
