import { fetchWeather } from '../actions/index';


export default function(state =  [], action ) {
    switch (action.type) {
        case FETCH_WEATHER:
        
        return state.concat([action.payload.data]);
    }
    return state;
}