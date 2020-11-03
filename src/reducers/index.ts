import { combineReducers } from 'redux';
import weatherCardReducer from "./weather-card";

const rootReducer = combineReducers({
  weatherCard: weatherCardReducer,
});

export default rootReducer;
