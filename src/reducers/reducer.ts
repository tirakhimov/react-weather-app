import DateFormatter from '../services/date-formatter';
import {WeatherCardProps} from "../interfaces/WeatherCardProps";
import {CLEAN_CITY_NAME, ERROR, FETCH_WEATHER, SEARCH_CITY} from '../actions/actions';
import {WeatherObject} from '../interfaces/WeatherObject';
import {ErrorAction, FetchWeatherAction, SearchCityAction} from '../interfaces/ActionInterfaces';

const initialState: WeatherCardProps = {
  weatherObject: {},
  inputValue: '',
  error: undefined,
  requestTime: new Date().getTime(),
  currentDate: new DateFormatter().formatDate(),
};

type GenericAction = FetchWeatherAction | SearchCityAction | ErrorAction;

function weatherCardReducer(state = initialState, action: GenericAction): WeatherCardProps {
  switch(action.type) {
    case SEARCH_CITY:
      return ({
        ...state,
        inputValue: action.payload,

      } as WeatherCardProps)

    case FETCH_WEATHER:

      if (action.payload !== undefined) {
        const weatherObject: WeatherObject = {
          ...state.weatherObject,
          cityName: action.payload.cityName,
          temperature: action.payload.temperature,
          weatherName: action.payload.weatherName,
        }
        return ({
          ...state,
          weatherObject: weatherObject,
          requestTime: new Date().getTime(),
          error: undefined,
        } as WeatherCardProps)
      }
      break;

    case CLEAN_CITY_NAME:
      return ({
        ...state,
        inputValue: '',
      } as WeatherCardProps)

    case ERROR:
      return ({
        ...state,
        error: action.payload,
      } as WeatherCardProps)

    default:
      return state;
  }
  return state;
}

export default weatherCardReducer;