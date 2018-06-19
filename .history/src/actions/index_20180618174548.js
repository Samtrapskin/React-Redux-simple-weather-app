import axios from 'axios';


const API_KEY = 'fd760f28b81bcedfdc26ae20130020c6';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)

    console.log('')
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}