const API_KEY = 'fd760f28b81bcedfdc26ae20130020c6';
const rootUrl =`http://samples.openweathermap.org/data/2.5/forecast?appid= + ;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}