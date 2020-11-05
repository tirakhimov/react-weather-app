import {Dispatch} from 'redux';
import {WeatherObject} from "../interfaces/WeatherObject";
import WeatherService from "../services/weather-service";

export const SEARCH_CITY = 'SEARCH_CITY';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ERROR = 'ERROR';

// export const searchCity = {
//   type: SEARCH_CITY,
//   payload: inputValue,
// };

export const searchCity = (inputValue: string | undefined) => (dispatch: Dispatch) => {
  dispatch({
    type: SEARCH_CITY,
    payload: inputValue,
  });
}

export const fetchWeather = (inputValue: string | undefined) => (dispatch: Dispatch) => {
  const weatherService = new WeatherService();
  return weatherService.getWeatherForToday(inputValue)
    .then((response: WeatherObject) => {
      dispatch({
        type: FETCH_WEATHER,
        payload: response,
      })
    }).catch((error: Error) => {
      dispatch({
        type: ERROR,
        payload: error,
      })
    });
}