import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import weatherCardReducer from '../reducers/reducer';

const store = createStore(weatherCardReducer, applyMiddleware(thunk));

export default store;