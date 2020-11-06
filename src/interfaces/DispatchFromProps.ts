import {Action} from "redux";

export interface DispatchFromProps {
  searchCity: (inputValue: string | undefined) => Action;
  fetchWeather: (inputValue: string | undefined) => Action;
}