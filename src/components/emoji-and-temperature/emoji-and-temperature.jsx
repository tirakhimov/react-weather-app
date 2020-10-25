import React from 'react';
import { Typography } from "antd";
import './emoji-and-temperature.css';

export default function EmojiAndTemperature({ tempAndWeatherName }) {
  const { Text } = Typography;

  const {weatherName, temperature} = tempAndWeatherName;

  return (
    <div className="weather-card__content_display">
      <Text
        role="img"
        aria-label="Weather emoji"
        className="weather-card__content_emoji"
      >
        {weatherName}
      </Text>
      <div className="weather-card__content_temp">
        <Text className="weather-card__content_temp_p">
          {temperature}
          {temperature ? <Text>&deg;</Text> : null}
        </Text>
      </div>
    </div>
  );
}
