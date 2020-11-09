import {WeatherObject} from './WeatherObject';

export interface WeatherCardProps {
  weatherObject: WeatherObject;
  inputValue: string;
  error: undefined;
  requestTime: number;
  currentDate: string;
}
