import {WeatherObject} from "./WeatherObject";

export interface WeatherCardContentProps {
  weatherObject: WeatherObject;
  // onInputChange: (inputValue: string) => void;
  error?: Error;
  currentDate: string;
}