import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer';


const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
