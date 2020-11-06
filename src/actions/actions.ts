import {Dispatch} from 'redux';
import {WeatherObject} from "../interfaces/WeatherObject";
import WeatherService from "../services/weather-service";
import {CLEAN_CITY_NAME, ERROR, FETCH_WEATHER, SEARCH_CITY} from "../constants/constants";

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
    }).then(() => {
      dispatch({
        type: CLEAN_CITY_NAME,
      })
    }).catch((error: Error) => {
      dispatch({
        type: ERROR,
        payload: error,
      })
    });
}