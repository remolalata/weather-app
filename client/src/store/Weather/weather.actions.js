import { DELETE_WEATHER_DATA, SET_WEATHER_DATA } from './weather.types';

export const setWeatherData = data => {
    return {
        type: SET_WEATHER_DATA,
        payload: data
    }
}

export const deleteWeatherData = () => {
    return {
        type: DELETE_WEATHER_DATA
    }
}