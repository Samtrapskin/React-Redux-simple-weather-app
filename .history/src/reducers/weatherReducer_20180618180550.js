import { fetchWeather } from '../actions/index';


export default function(state =  [], action ) {
    switch (action.type) {
        case FETCH_WEATHER:
        
        return [action.payload.data]
    }
    return state;
}