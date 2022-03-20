import { SET_USER_DATA } from './auth.types';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export default reducer;