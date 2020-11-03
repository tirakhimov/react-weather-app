import DateFormatter from "../services/date-formatter";

export interface WeatherCardProps {
  weatherObject: object;
  error: undefined;
  requestTime: number;
  currentDate: string;
}

const initialState: WeatherCardProps = {
  weatherObject: {},
  error: undefined,
  requestTime: new Date().getTime(),
  currentDate: new DateFormatter().formatDate(),
};

function weatherCardReducer(state = initialState): WeatherCardProps {
  return state;
}

export default weatherCardReducer;

