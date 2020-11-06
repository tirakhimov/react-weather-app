import {WeatherObject} from './WeatherObject';

export interface WeatherCardContentProps {
  weatherObject: WeatherObject;
  error?: Error;
  currentDate: string;
}