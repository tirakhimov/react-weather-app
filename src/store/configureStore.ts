import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import weatherCardReducer from "../reducers/weather-card";

const store = createStore(weatherCardReducer, applyMiddleware(thunk));

export default store;