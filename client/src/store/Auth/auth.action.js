import { SET_USER_DATA } from './auth.types';

export const setUserData = data => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}