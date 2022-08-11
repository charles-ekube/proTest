import {
    LOGIN_SUCCESS, LOGIN_FAIL, LOADING_USER, SIGNOUT_USER, SIGNOUT_USER_FAIL, SIGNOUT_USER_SUCCESSFUL,
    TOGGLE_BIOMETRIC, TOGGLE_NOTIFICATION,
    UPDATE_ALERT_MESSAGE, UPDATE_LOG_IN, GETTING_FLEXIBLE_PLANS_SUCCESSFUL, GETTING_PROFILE_SUCCESSFUL, GETTING_PROFILE_FAIL,
} from '../Types';
import http from '../../utils/Utils';
import { setUser } from '../../utils/Helpers';
// import AsyncStorage from '@react-native-async-storage/async-storage';




export const login = ({ email, password }) => {
    let obj = { password, email }
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("/api/provider_login", obj)
                const data = res
                console.log('login data ', res)
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)   
                // setUserData(data)
                setUser(data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};


// const loadResources = async (dispatch, data) => {
//     // dispatch(getCurrencies())
// }

export const signup = (obj) => {
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("/api/provider_signup", obj)
                const data = res
                console.log(res)
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };

};


export const forgotPassword = (obj) => {
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("password_recovery", obj)
                const data = res.data
                console.log(res)
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};




export const resetPassword = (obj) => {
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("inApp_reset_password_provider", obj)
                const data = res.data
                console.log(res)
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};






export const signOut = () => {
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: SIGNOUT_USER });
            http.post('logout').then(async (res) => {
                console.log('logout', res)
                // await AsyncStorage.clear();
                dispatch({ type: SIGNOUT_USER_SUCCESSFUL });
                // navigation.navigate('Auth')
                resolve(res)
            }).catch((error) => {
                console.log(error)
                dispatch({ type: SIGNOUT_USER_FAIL });
                reject(error)
            })
        });
    };
};
