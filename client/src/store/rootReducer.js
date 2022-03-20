import { combineReducers } from 'redux';
import commonReducer from './Common/common.reducer';
import authReducer from './Auth/auth.reducer';

const rootReducer = combineReducers({
    common: commonReducer,
    user: authReducer
});

export default rootReducer;