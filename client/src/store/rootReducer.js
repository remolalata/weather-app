import { combineReducers } from 'redux';
import commonReducer from './Common/common.reducer';
import authReducer from './Auth/auth.reducer';
import weatherReducer from './Weather/weather.reducer';

const rootReducer = combineReducers({
    common: commonReducer,
    user: authReducer,
    weather: weatherReducer
});

export default rootReducer;