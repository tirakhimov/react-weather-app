import {WeatherObject} from "./WeatherObject";

export interface SearchBarProps {
  inputValue: string | undefined;
  weatherObject: WeatherObject;
  searchCity: (inputValue: string | undefined) => object;
  fetchWeather: (inputValue: string | undefined) => object;
}