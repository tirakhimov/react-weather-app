import React from 'react';
import { Typography } from "antd";
import './emoji-and-temperature.css';

export interface EmojiAndTemperatureProps {
  tempAndWeatherName: TempAndWeatherNameType;
}

export type TempAndWeatherNameType = {
  weatherName?: string;
  temperature?: string;
}

const EmojiAndTemperature: React.FC<EmojiAndTemperatureProps> = ({
  tempAndWeatherName
}): JSX.Element => {

  const { Text } = Typography;

  const {weatherName, temperature} = tempAndWeatherName;

  return (
    <div className="weather-card__content_display">
      <span
        role="img"
        aria-label="Weather emoji"
        className="weather-card__content_emoji"
      >
        {weatherName}
      </span>
      <div className="weather-card__content_temp">
        <Text className="weather-card__content_temp_p">
          {temperature}
          {temperature ? <Text>&deg;</Text> : null}
        </Text>
      </div>
    </div>
  );
}

export default EmojiAndTemperature;