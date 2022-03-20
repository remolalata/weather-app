import { LOADING, SET_ERROR } from './common.types';

const INITIAL_STATE = {
    loading: false,
    error: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
};

export default reducer;