import axios from 'axios';

import { setWeatherData } from './weather.actions';
import { setLoading, setError } from '../Common/common.action';

import { validateObj } from '../../utils/utils';
import { API } from '../../utils/constants';

export const setWeatherDataApiCall = param => {

    let url = API.GET_WEATHER.replace('%%city%%', param);

    return dispatch => {
        dispatch(setLoading(true));
        axios.get(url)
            .then(result => {
                if (
                    validateObj(result) &&
                    validateObj(result.data) &&
                    validateObj(result.data.result) &&
                    result.status === 200
                ) {
                    dispatch(setWeatherData(result.data.result));
                } else {
                    dispatch(setError(result.data.message));
                }

                dispatch(setLoading(false));
            })
            .catch(error => {
                dispatch(setLoading(false));
                dispatch(setError(error.message));
            })
    }
}