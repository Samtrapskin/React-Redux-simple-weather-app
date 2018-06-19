import axios from 'axios';
const API_KEY = 'fd760f28b81bcedfdc26ae20130020c6';
const rootUrl =`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${CITY},us`;
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER
    };
}