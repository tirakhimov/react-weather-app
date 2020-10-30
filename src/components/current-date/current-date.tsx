import React from 'react';
import { Typography } from 'antd';
import './current-date.css';

export interface CurrentDateProps {
  currentDate: string;
}

const CurrentDate: React.FC<CurrentDateProps> = ({ currentDate }) => {
  const { Text } = Typography;

  return (
    <div className="weather-card__content_date">
      <Text>{currentDate}</Text>
    </div>
  );
}
export default CurrentDate;