import { LOADING, SET_ERROR } from './common.types';

export const setLoading = data => {
    return {
        type: LOADING,
        payload: data
    }
}

export const setError = message => {
    console.log(message)
    return {
        type: SET_ERROR,
        payload: message
    }
}