import { combineReducers } from 'redux';
import WeatherReducer from weatherReducer
import weatherReducer from './weatherReducer';
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
