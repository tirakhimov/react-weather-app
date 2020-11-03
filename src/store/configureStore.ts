import { createStore } from 'redux';
// import rootReducer from '../reducers';
import weatherCardReducer from "../reducers/weather-card";

const store = createStore(weatherCardReducer);

export default store;