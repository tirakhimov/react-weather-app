import React from 'react';
import { Typography } from 'antd';

import './error-indicator.css';

export interface ErrorIndicatorProps {
  errorLabel: string;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ errorLabel }): JSX.Element => {

  const { Text } = Typography;

  return (
    <div className="weather-card__content">
      <Text
        className="weather-card__content_error-message"
        type="danger"
      >
        {errorLabel}
      </Text>
      <span
        role="img"
        aria-label="Sad emoji"
        className="weather-card__content_error-emoji"
      >
        &#128533;
      </span>
    </div>
  );
}

export default ErrorIndicator;
