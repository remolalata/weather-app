import { LOADING } from './common.types';

const INITIAL_STATE = {
    loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default: return state
    }
};

export default reducer;