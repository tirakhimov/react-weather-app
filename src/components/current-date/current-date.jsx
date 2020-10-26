import React from 'react';
import { Typography } from 'antd';
import './current-date.css';

export default function CurrentDate({ currentDate }) {
  const { Text } = Typography;

  return (
    <div className="weather-card__content_date">
      <Text>{currentDate}</Text>
    </div>
  );
}
