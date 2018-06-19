import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer';


const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
