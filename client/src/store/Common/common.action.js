import { LOADING } from './common.types';

export const setLoading = data => {
    return {
        type: LOADING,
        payload: data
    }
}