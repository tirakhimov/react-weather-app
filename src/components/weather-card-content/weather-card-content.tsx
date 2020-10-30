import React from 'react';
import SearchBar from '../search-bar/search-bar';
import CurrentDate from '../current-date/current-date';
import ErrorIndicator from '../error-indicator/error-indicator';
import WeatherCardHeader from '../weather-card-header/weather-card-header';
import EmojiAndTemperature from '../emoji-and-temperature/emoji-and-temperature';
import { WeatherObject } from '../../interfaces/WeatherObject';

import './weather-card-content.css';

export interface WeatherCardContentProps {
  weatherObject: WeatherObject;
  onInputChange: (inputValue: string) => void;
  error?: Error;
  currentDate: string;
}

const WeatherCardContent: React.FC<WeatherCardContentProps> = ({
  weatherObject,
  onInputChange,
  error,
  currentDate,
}) => {

  const { cityName, ...tempAndWeatherName } = weatherObject;
  const errorMessage = 'Такого города не существует';

  return (
    <>
      <WeatherCardHeader cityName={cityName} error={error} />
      <SearchBar onInputSubmit={(inputValue): void => onInputChange(inputValue)} />
      { error ? <ErrorIndicator errorMessage={errorMessage} /> : null }
      { tempAndWeatherName.temperature ? <CurrentDate currentDate={currentDate} /> : null }
      <EmojiAndTemperature tempAndWeatherName={tempAndWeatherName} />
    </>
  );
}

export default WeatherCardContent;