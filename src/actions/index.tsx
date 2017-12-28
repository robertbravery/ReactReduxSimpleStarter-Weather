import axios from 'axios'

const API_KEY = "eb7ba2c0ca36da04495dfeff459ff26d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city:string) {
    const url = `${ROOT_URL}&q=${city}`;
    
    const request = axios.get(url)
    .catch(function (error) {
        console.log(error);
        alert("Requested city not found. \r\nPlease try again")
      });

    // console.log('Request:', request);
    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}