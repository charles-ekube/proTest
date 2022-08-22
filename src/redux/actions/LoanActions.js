import { ADDING_LOAN_DATA, ADDING_LOAN_DATA_FAIL, ADDING_LOAN_DATA_SUCCESS, ADDING_PREFERENCE, ADDING_PREFERENCE_FAIL, ADDING_PREFERENCE_SUCCESS, GETTING_LOAN_DATA, GETTING_LOAN_DATA_FAIL, GETTING_LOAN_DATA_SUCCESS, GETTING_PREFERENCE, GETTING_PREFERENCE_FAIL, GETTING_PREFERENCE_SUCCESS } from '../Types';
import http from '../../utils/Utils';


export const addPreference = (obj) => {
    return dispatch => {
        dispatch({ type: ADDING_PREFERENCE })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post('/api/preference', obj)
                const data = res
                console.log('Preference data ', res)
                dispatch({ type: ADDING_PREFERENCE_SUCCESS, payload: data });
                resolve(data)
            } catch (error) {
                console.log(error)
                dispatch({ type: ADDING_PREFERENCE_FAIL, payload: error });
                reject(error);
            }
        })
    }
}

export const getPreference = () => {
    return dispatch => {
        dispatch({ type: GETTING_PREFERENCE })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.get('/api/preference')
                const data = res
                console.log('fetched Preference data ', res)
                dispatch({ type: GETTING_PREFERENCE_SUCCESS, payload: data });
                resolve(data)
            } catch (error) {
                console.log(error)
                dispatch({ type: GETTING_PREFERENCE_FAIL, payload: error });
                reject(error);
            }
        })
    }
}

export const addInterest = (obj) => {
    return dispatch => {
        dispatch({ type: ADDING_LOAN_DATA })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post('/api/set_pre_approved_loan', obj)
                const data = res
                console.log('Interest data ', res)
                dispatch({ type: ADDING_LOAN_DATA_SUCCESS, payload: data });
                resolve(data)
            } catch (error) {
                console.log(error)
                dispatch({ type: ADDING_LOAN_DATA_FAIL, payload: error });
                reject(error);
            }
        })
    }
}

export const getInterest = () => {
    return dispatch => {
        dispatch({ type: GETTING_LOAN_DATA })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.get('/api/set_pre_approved_loan')
                const data = res
                console.log('fetched interest data ', res)
                dispatch({ type: GETTING_LOAN_DATA_SUCCESS, payload: data });
                resolve(data)
            } catch (error) {
                console.log(error)
                dispatch({ type: GETTING_LOAN_DATA_FAIL, payload: error });
                reject(error);
            }
        })
    }
}
