import { DELETE_WEATHER_DATA, SET_WEATHER_DATA } from './weather.types';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case DELETE_WEATHER_DATA:
            return {}
        default: return state
    }
}

export default reducer;